/*
 * Where each piece of data comes from, and how an answer is trimmed to what the page needs.
 * Shared by the page and by `scripts/snapshot.ts`, which runs it under Node: keep this file
 * free of value imports and of TypeScript-only syntax (enums, namespaces).
 */
import type { CfProject, GhRelease, Modpack, MrProject, NxMod, RawData } from './models';

export interface ProjectRef {
  repo: { owner: string; name: string; branch: string };
  curseforgePath: string;
  modrinthSlug: string;
  nexusMod: { gameId: number; modId: number };
  modpackIndexModId: number;
}

export type SourceKey = Exclude<keyof RawData, 'fetchedAt'>;

export interface Source<K extends SourceKey> {
  key: K;
  url: (p: ProjectRef) => string;
  kind: 'json' | 'text';
  /** A JSON body to POST instead of a GET (GraphQL APIs). */
  body?: (p: ProjectRef) => unknown;
  /** A 404 that means "nothing there yet" rather than a failure. */
  notFoundValue?: RawData[K];
  trim: (body: any) => RawData[K];
  /** Further calls that fill in the trimmed answer; each one that fails leaves it as it is. */
  complete?: (value: RawData[K]) => Promise<RawData[K]>;
}

const MPI = 'https://www.modpackindex.com/api/v1';

/** Modpacks whose authors and game versions are asked for: the ones the section shows. */
export const MODPACK_DETAILS = 6;

const raw = (p: ProjectRef, path: string) =>
  `https://raw.githubusercontent.com/${p.repo.owner}/${p.repo.name}/${p.repo.branch}/${path}`;

export const SOURCES: { [K in SourceKey]: Source<K> } = {
  github: {
    key: 'github',
    kind: 'json',
    url: (p) => `https://api.github.com/repos/${p.repo.owner}/${p.repo.name}/releases?per_page=100`,
    // Every release counts towards the downloads; the files themselves are only kept for
    // the latest announced releases, which is all the download picker offers.
    trim: (list: any[]): GhRelease[] => {
      let announced = 0;
      return list.map((r) => {
        const assets: any[] = r.assets ?? [];
        const keep = !r.draft && !/-dev\./i.test(r.tag_name) && announced++ < 2;
        return {
          tag_name: r.tag_name,
          name: r.name,
          html_url: r.html_url,
          published_at: r.published_at,
          prerelease: !!r.prerelease,
          draft: !!r.draft,
          downloads: assets.reduce((sum, a) => sum + (a.download_count ?? 0), 0),
          assets: keep
            ? assets.map((a) => ({
                name: a.name,
                browser_download_url: a.browser_download_url,
                download_count: a.download_count ?? 0,
                size: a.size ?? 0,
              }))
            : [],
        };
      });
    },
  },
  changelog: {
    key: 'changelog',
    kind: 'text',
    url: (p) => raw(p, 'changelog/en.md'),
    trim: (text: string) => text,
  },
  targetsToml: {
    key: 'targetsToml',
    kind: 'text',
    url: (p) => raw(p, 'stonecutter.properties.toml'),
    trim: (text: string) => text,
  },
  curseforge: {
    key: 'curseforge',
    kind: 'json',
    url: (p) => `https://api.cfwidget.com/${p.curseforgePath}`,
    trim: (d: any): CfProject => ({
      title: d.title,
      urls: { curseforge: d.urls?.curseforge, project: d.urls?.project },
      downloads: { total: d.downloads?.total ?? 0, monthly: d.downloads?.monthly },
      // Newest first; only the latest few are needed for the last update date.
      files: (d.files ?? []).slice(0, 8).map((f: any) => ({
        id: f.id,
        url: f.url,
        display: f.display,
        name: f.name,
        type: f.type,
        versions: f.versions ?? [],
        downloads: f.downloads ?? 0,
        uploaded_at: f.uploaded_at,
      })),
    }),
  },
  modrinth: {
    key: 'modrinth',
    kind: 'json',
    url: (p) => `https://api.modrinth.com/v2/project/${p.modrinthSlug}`,
    notFoundValue: null,
    trim: (d: any): MrProject => ({
      slug: d.slug,
      downloads: d.downloads ?? 0,
      followers: d.followers ?? 0,
      updated: d.updated,
      game_versions: d.game_versions ?? [],
      loaders: d.loaders ?? [],
    }),
  },
  nexus: {
    key: 'nexus',
    kind: 'json',
    // The public GraphQL API: no key needed, and it answers browsers of any origin.
    url: () => 'https://api.nexusmods.com/v2/graphql',
    body: (p) => ({
      query: 'query ($ids: [CompositeIdInput!]!) { legacyMods(ids: $ids) { nodes { downloads } } }',
      variables: { ids: [p.nexusMod] },
    }),
    trim: (d: any): NxMod => {
      const mod = d.data?.legacyMods?.nodes?.[0];
      // GraphQL answers errors with a 200: treat a missing mod as a failure, not as 0.
      if (!mod) throw new Error('Nexus Mods: no such mod');
      return { downloads: mod.downloads ?? 0 };
    },
  },
  modpacks: {
    key: 'modpacks',
    kind: 'json',
    // ModpackIndex's public API, no key. Its filtered search (`modpacks?mods[]=`) refuses
    // other sites' pages; this list, and each modpack's own page, answer any origin. Up to
    // 100 modpacks, the most downloaded first.
    url: (p) => `${MPI}/mod/${p.modpackIndexModId}/modpacks?limit=100`,
    trim: (d: any): Modpack[] => {
      if (!Array.isArray(d.data)) throw new Error('ModpackIndex: unexpected answer');
      return d.data
        .map((m: any): Modpack => ({
          id: m.id,
          name: m.name,
          summary: m.summary ?? '',
          url: m.url || m.links?.curseforge || m.links?.modrinth || m.page_url,
          thumbnail: m.thumbnail_url || null,
          downloads: m.download_count ?? 0,
          authors: [],
          versions: [],
          updated: m.latest_release_date ?? null,
        }))
        .sort((a: Modpack, b: Modpack) => b.downloads - a.downloads);
    },
    // The list has no authors nor game versions: ask each modpack the section shows.
    complete: async (packs) =>
      Promise.all(
        (packs ?? []).map(async (pack, i) => {
          if (i >= MODPACK_DETAILS) return pack;
          try {
            const res = await fetch(`${MPI}/modpack/${pack.id}`, {
              signal: AbortSignal.timeout(10_000),
            });
            if (!res.ok) return pack;
            const m = (await res.json()).data;
            return {
              ...pack,
              authors: (m.authors ?? []).map((a: any) => String(a.name)),
              versions: (m.minecraft_versions ?? [])
                .map((v: any) => String(v.name))
                .sort(byVersion),
            };
          } catch {
            return pack;
          }
        }),
      ),
  },
};

/** "1.20.1" before "1.21" before "26.1.2". */
function byVersion(a: string, b: string): number {
  const x = a.split('.').map(Number);
  const y = b.split('.').map(Number);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const d = (x[i] ?? 0) - (y[i] ?? 0);
    if (d) return d;
  }
  return 0;
}

/** Fetches one source. Resolves to `undefined` when it cannot be reached. */
export async function fetchSource<K extends SourceKey>(
  source: Source<K>,
  project: ProjectRef,
  init: RequestInit = {},
): Promise<RawData[K] | undefined> {
  try {
    const payload = source.body?.(project);
    const headers = new Headers(init.headers);
    if (payload !== undefined) headers.set('Content-Type', 'application/json');
    const res = await fetch(source.url(project), {
      ...init,
      headers,
      ...(payload !== undefined && { method: 'POST', body: JSON.stringify(payload) }),
      signal: AbortSignal.timeout(10_000),
    });
    if (res.status === 404 && 'notFoundValue' in source) return source.notFoundValue;
    if (!res.ok) return undefined;
    const body = source.kind === 'json' ? await res.json() : await res.text();
    const value = source.trim(body);
    return source.complete ? await source.complete(value) : value;
  } catch {
    return undefined;
  }
}
