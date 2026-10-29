/*
 * Where each piece of data comes from, and how an answer is trimmed to what the page needs.
 * Shared by the page and by `scripts/snapshot.ts`, which runs it under Node: keep this file
 * free of value imports and of TypeScript-only syntax (enums, namespaces).
 */
import type {
  CfProject,
  CompatMod,
  GhRelease,
  Modpack,
  ModpackLink,
  MrProject,
  NxMod,
  RawData,
} from './models';

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
  complete?: (value: RawData[K], project: ProjectRef, init: RequestInit) => Promise<RawData[K]>;
}

const MPI = 'https://www.modpackindex.com/api/v1';

/** Modpacks whose authors and game versions are asked for, the most downloaded first. */
const MODPACK_DETAILS = 30;

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
          links: modpackLinks(m),
          thumbnail: m.thumbnail_url || null,
          downloads: m.download_count ?? 0,
          authors: [],
          versions: [],
          updated: m.latest_release_date ?? null,
        }))
        .sort((a: Modpack, b: Modpack) => b.downloads - a.downloads);
    },
    // The list has no authors nor game versions: ask the most downloaded modpacks for them.
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
  compat: {
    key: 'compat',
    kind: 'text',
    // Nothing is written by hand: the mods that work come from the "Compatibility" table of
    // the mod's README, the others from its issues labelled `mod compatibility`. See
    // `compatFromGitHub` for the rules.
    url: (p) => raw(p, 'README.md'),
    trim: (readme: string): CompatMod[] => readmeCompat(readme),
    complete: async (rows, p, init) => {
      const res = await fetch(
        `https://api.github.com/repos/${p.repo.owner}/${p.repo.name}/issues?labels=${encodeURIComponent(COMPAT_LABEL)}&state=all&per_page=100`,
        { headers: init.headers, signal: AbortSignal.timeout(10_000) },
      );
      if (!res.ok) throw new Error(`GitHub issues: ${res.status}`);
      return compatFromGitHub(rows ?? [], await res.json());
    },
  },
};

/** The label of the mod repository's issues about other mods. */
const COMPAT_LABEL = 'mod compatibility';

/**
 * The rows of the "## Compatibility" table of the mod's README: a mod (a link, or plain
 * text) and a note. A row whose note points to an issue is settled once the issues are read:
 * an open one makes it a known issue.
 */
function readmeCompat(readme: string): CompatMod[] {
  const start = readme.search(/^## Compatibility\s*$/m);
  if (start < 0) throw new Error('README: no Compatibility section');
  const rows: CompatMod[] = [];
  let inTable = false;
  for (const line of readme.slice(start).split('\n').slice(1)) {
    if (!line.startsWith('|')) {
      if (inTable) break;
      continue;
    }
    inTable = true;
    const cells = line
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());
    if (cells.length < 2 || /^-+$/.test(cells[0].replace(/:/g, '')) || cells[0] === 'Mod') {
      continue;
    }
    const link = cells[0].match(/\[([^\]]+)\]\(([^)]+)\)/);
    const refs = [...cells[1].matchAll(/\/issues\/(\d+)|#(\d+)/g)].map((m) => +(m[1] ?? m[2]));
    rows.push({
      name: link ? link[1] : cells[0],
      status: 'works',
      note: plainText(cells[1]) || null,
      issue: refs[0] ?? null,
      icon: null,
      modrinth: link && /modrinth\.com/.test(link[2]) ? link[2] : null,
      curseforge: link && /curseforge\.com/.test(link[2]) ? link[2] : null,
    });
  }
  return rows;
}

/**
 * The compatible mods, from the README's rows and the labelled issues:
 * - a README row works, unless the issue its note points to is still open: a known issue;
 * - an open issue titled "Compatibility: <mods>" waits for a tester;
 * - any other open issue is a problem someone reported: a known issue, its title the note;
 * - a closed issue works if it was completed, and is left out otherwise.
 * An issue whose body lists `**Mods:**` names several mods: each gets its own card. Then each
 * mod is looked up on Modrinth and CurseForge for its icon and both links.
 */
async function compatFromGitHub(rows: CompatMod[], issues: any[]): Promise<CompatMod[]> {
  const list = issues.filter((i) => !i.pull_request);
  const open = new Set(list.filter((i) => i.state === 'open').map((i) => i.number));
  const fromReadme = new Set(rows.flatMap((r) => (r.issue ? [r.issue] : [])));
  const drafts: Draft[] = rows.map((r) => ({
    mod: { ...r, status: r.issue && open.has(r.issue) ? 'issue' : 'works' },
    names: [r.name],
    // "Iris and shader packs": the mods of a README cell without a link.
    split: r.modrinth || r.curseforge ? 'no' : 'maybe',
  }));
  for (const i of list) {
    if (fromReadme.has(i.number)) continue;
    if (i.state !== 'open' && i.state_reason !== 'completed') continue;
    const title = String(i.title ?? '').trim();
    const asked = title.match(/^compatibility\s*(?::|with)\s*(.+)$/i);
    const body = String(i.body ?? '');
    const status = i.state !== 'open' ? 'works' : asked ? 'untested' : 'issue';
    const names = asked ? cleanNames(asked[1]) : '';
    drafts.push({
      mod: {
        name: names,
        status,
        note: status === 'issue' && !asked ? capitalize(title) : null,
        issue: i.number,
        icon: null,
        modrinth:
          body.match(
            /https:\/\/modrinth\.com\/(?:mod|shader|resourcepack|datapack|plugin)\/[\w-]+/,
          )?.[0] ?? null,
        curseforge:
          body.match(
            /https:\/\/www\.curseforge\.com\/minecraft\/(?:mc-mods|shaders|texture-packs)\/[\w-]+/,
          )?.[0] ?? null,
      },
      names: names ? [names] : [],
      split: /\*\*Mods:\*\*/.test(body) || names.includes(', ') ? 'list' : 'no',
    });
  }
  const resolved = await pool(drafts, 4, resolveDraft);
  return resolved.flat().sort((a, b) => a.name.localeCompare(b.name));
}

interface Draft {
  mod: CompatMod;
  /** The names to look up; empty when only the issue's links say which mod it is. */
  names: string[];
  /**
   * `list`: the name lists several mods ("A, B and C"). `maybe`: it may, when it is not one
   * mod's name. `no`: one mod, even with "and" in its name ("Ice and Fire").
   */
  split: 'list' | 'maybe' | 'no';
}

/** One draft, looked up: one card, or one per mod of a list. Never throws. */
async function resolveDraft(d: Draft): Promise<CompatMod[]> {
  const { mod } = d;
  const name = d.names[0];
  // A link in the README or the issue says which mod it is, if it is the one it names.
  if (d.split !== 'list' && (mod.modrinth || mod.curseforge)) {
    const found = await lookupLinks(mod.modrinth, mod.curseforge);
    if (found && (!name || matches(found.name, name) || matches(name, found.name))) {
      return [{ ...mod, ...found, name: name || found.name }];
    }
    if (!name) return [];
  }
  if (!name) return [];
  const whole = d.split === 'list' ? null : await lookupName(name);
  if (whole) return [{ ...mod, ...whole, name }];
  const parts = d.split === 'no' ? [] : splitNames(name);
  if (parts.length < 2) return [{ ...mod, modrinth: null, curseforge: null }];
  const found = await Promise.all(parts.map((n) => lookupName(n)));
  const cards = parts.flatMap((n, k) => (found[k] ? [{ ...mod, ...found[k]!, name: n }] : []));
  if (cards.length) return cards;
  // Nothing found: a list keeps its mods, anything else stays one card in its own words.
  return d.split === 'list'
    ? parts.map((n) => ({ ...mod, name: n, modrinth: null, curseforge: null }))
    : [{ ...mod, modrinth: null, curseforge: null }];
}

type Found = Pick<CompatMod, 'name' | 'icon' | 'modrinth' | 'curseforge'>;

/**
 * A mod by name. ModpackIndex first: one call gives its CurseForge and Modrinth pages and its
 * icon. A mod it does not know: Modrinth's search, then CurseForge through cfwidget, which
 * only finds a page by the slug it most likely has. `null` when nobody knows it.
 */
async function lookupName(name: string): Promise<Found | null> {
  const fromIndex = await modpackIndexMod(name);
  if (fromIndex) return fromIndex;
  const found = await getJson(
    `https://api.modrinth.com/v2/search?limit=8&query=${encodeURIComponent(name)}`,
  );
  const hit = bestMatch(found?.hits ?? [], name, (h: any) => h.title);
  if (hit) {
    const cf = await curseforgeFor(
      [hit.slug, slugify(hit.title), compact(hit.title)],
      name,
      hit.project_type,
    );
    return {
      name: cleanTitle(hit.title),
      icon: hit.icon_url || cf?.icon || null,
      modrinth: `https://modrinth.com/${hit.project_type}/${hit.slug}`,
      curseforge: cf?.url ?? null,
    };
  }
  const cf = await curseforgeFor([slugify(name), compact(name)], name, 'mod');
  return cf ? { name: cf.name, icon: cf.icon, modrinth: null, curseforge: cf.url } : null;
}

/**
 * A mod on ModpackIndex. It sometimes lists one mod twice, once per platform under two titles
 * ("Distant Horizons" and "Distant Horizons: A Level of Detail mod"): the most downloaded
 * page of each platform among those named so is kept. "Friends & Foes" is only found as
 * "Friends&Foes": a name with "&" is asked both ways.
 */
async function modpackIndexMod(name: string): Promise<Found | null> {
  const ask = async (q: string): Promise<any[]> =>
    (
      await getJson(
        `https://www.modpackindex.com/api/v1/mods?limit=10&name=${encodeURIComponent(q)}`,
      )
    )?.data ?? [];
  let hits = await ask(name);
  let named = hits.filter((h) => baseName(h.name) === compact(name));
  const joined = name.replace(/\s*&\s*/g, '&');
  if (!named.length && joined !== name) {
    hits = [...hits, ...(await ask(joined))];
    named = hits.filter((h) => baseName(h.name) === compact(name));
  }
  // No mod of that very name: one whose name starts with it ("Iris" is "Iris Shaders").
  if (!named.length) named = hits.filter((h) => matches(h.name, name));
  const best = (platform: 'modrinth' | 'curseforge') =>
    named
      .filter((h) => h.links?.[platform])
      .sort((x, y) => (y.download_count ?? 0) - (x.download_count ?? 0))[0];
  const modrinth = best('modrinth');
  const curseforge = best('curseforge');
  const top = [modrinth, curseforge]
    .filter(Boolean)
    .sort((x, y) => (y.download_count ?? 0) - (x.download_count ?? 0))[0];
  if (!top) return null;
  return {
    name: cleanTitle(top.name),
    icon: top.thumbnail_url || modrinth?.thumbnail_url || curseforge?.thumbnail_url || null,
    modrinth: modrinth?.links.modrinth ?? null,
    curseforge: curseforge?.links.curseforge ?? null,
  };
}

/** A title without its tags and subtitle: "[ETF] Entity Texture Features - [Fabric]" → "entitytexturefeatures". */
function baseName(title: string): string {
  return compact(cleanTitle(title).split(/\s*(?::|\s-\s|\|)\s*/)[0]);
}

/**
 * A mod from a link of the README or an issue: its name from that page, then the other
 * platform's page by that name, kept only if it is the same mod (same link).
 */
async function lookupLinks(
  modrinth: string | null,
  curseforge: string | null,
): Promise<Found | null> {
  const slug = lastSegment(modrinth);
  const project = slug ? await getJson(`https://api.modrinth.com/v2/project/${slug}`) : null;
  const cfPath = curseforge?.match(/curseforge\.com\/(minecraft\/[\w-]+\/[\w-]+)/)?.[1];
  const widget = !project && cfPath ? await getJson(`https://api.cfwidget.com/${cfPath}`) : null;
  const title: string | undefined = project?.title ?? widget?.title;
  if (!title) return null;
  const byName = await lookupName(cleanTitle(title));
  const same =
    !!byName &&
    ((!!slug && lastSegment(byName.modrinth) === slug) ||
      (!!cfPath && lastSegment(byName.curseforge) === lastSegment(curseforge)));
  return {
    name: cleanTitle(title),
    icon: project?.icon_url || widget?.thumbnail || (same ? byName!.icon : null),
    modrinth: modrinth ?? (same ? byName!.modrinth : null),
    curseforge: curseforge ?? (same ? byName!.curseforge : null),
  };
}

/** "https://modrinth.com/mod/voxy" → "voxy". */
function lastSegment(url: string | null | undefined): string | undefined {
  return (
    url
      ?.replace(/[?#].*$/, '')
      .replace(/\/+$/, '')
      .split('/')
      .pop() || undefined
  );
}

/** The mod's CurseForge page, from the slugs it most likely has there, checked by its title. */
async function curseforgeFor(
  slugs: string[],
  name: string,
  type: string,
): Promise<{ name: string; icon: string | null; url: string } | null> {
  const section =
    type === 'shader' ? 'shaders' : type === 'resourcepack' ? 'texture-packs' : 'mc-mods';
  for (const slug of [...new Set(slugs.filter(Boolean))]) {
    const d = await getJson(`https://api.cfwidget.com/minecraft/${section}/${slug}`);
    if (d?.title && matches(d.title, name)) {
      return {
        name: d.title,
        icon: d.thumbnail ?? null,
        url: d.urls?.curseforge ?? `https://www.curseforge.com/minecraft/${section}/${slug}`,
      };
    }
  }
  return null;
}

/** The hit named like `name`: the same name first, else one that starts with it. */
function bestMatch<T>(hits: T[], name: string, title: (h: T) => string): T | null {
  return (
    hits.find((h) => compact(cleanTitle(title(h))) === compact(name)) ??
    hits.find((h) => matches(title(h), name)) ??
    null
  );
}

/** "Iris Shaders" is "Iris", "[EMF] Entity Model Features" is "Entity Model Features". */
function matches(title: string, name: string): boolean {
  const a = compact(cleanTitle(title));
  const b = compact(name);
  return !!b && (a === b || (b.length >= 4 && a.startsWith(b)));
}

/** "Oculus and Embeddium on Forge" → "Oculus and Embeddium"; "MCA Reborn (…)" → "MCA Reborn". */
function cleanNames(s: string): string {
  return s
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s+on\s+(?:Forge|NeoForge|Fabric|Quilt)(?:\s+and\s+\w+)?\s*$/i, '')
    .replace(/[.:]+$/, '')
    .trim();
}

/** "A, B and C" → A, B, C. */
function splitNames(s: string): string[] {
  return s
    .split(/,\s*|\s+and\s+/i)
    .map((n) => n.trim())
    .filter(Boolean);
}

function cleanTitle(title: string): string {
  return title
    .replace(/\[[^\]]*\]|\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function compact(s: string): string {
  return s
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function slugify(s: string): string {
  return s
    .normalize('NFKD')
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Markdown to plain text: links keep their words, emphasis and code marks go. */
function plainText(md: string): string {
  return md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim();
}

/** A JSON answer, or `null` for anything else (missing, refused, slow, not JSON). */
async function getJson(url: string): Promise<any> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

/** `work` on every item, `size` at a time, the answers in the items' order. */
async function pool<T, R>(items: T[], size: number, work: (item: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let next = 0;
  const run = async () => {
    while (next < items.length) {
      const k = next++;
      out[k] = await work(items[k]);
    }
  };
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, run));
  return out;
}

/** A modpack's own pages on CurseForge and Modrinth, never ModpackIndex's. */
function modpackLinks(m: any): ModpackLink[] {
  const links: ModpackLink[] = [];
  const curseforge = m.links?.curseforge;
  const modrinth = m.links?.modrinth ?? m.modrinth_info?.url;
  if (curseforge) links.push({ platform: 'curseforge', url: curseforge });
  if (modrinth) links.push({ platform: 'modrinth', url: modrinth });
  return links;
}

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
    return source.complete ? await source.complete(value, project, init) : value;
  } catch {
    return undefined;
  }
}
