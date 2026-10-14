import { Injectable, computed, signal } from '@angular/core';
import { SITE } from '../config/site';
import { LOADERS, RawData, Release, SourceState } from './models';
import {
  compareVersions,
  githubDownloads,
  parseChangelog,
  parseReleases,
  parseTargets,
  targetStats,
} from './parsers';
import { SOURCES, SourceKey, fetchSource } from './sources';

const CACHE_PREFIX = 'lh-source:';
/** Live answers are reused for this long: GitHub allows 60 anonymous calls an hour. */
const CACHE_TTL_MS = 30 * 60 * 1000;

/**
 * The project's live data. Shows the bundled snapshot at once, then asks every source
 * directly; each source that answers replaces its part of the snapshot. Nothing here ever
 * throws: a source that fails leaves the snapshot, and a part with neither shows a fallback.
 */
@Injectable({ providedIn: 'root' })
export class ProjectData {
  private readonly raw = signal<RawData>({});
  readonly state = signal<Record<SourceKey, SourceState>>({
    github: 'none',
    changelog: 'none',
    targetsToml: 'none',
    curseforge: 'none',
    modrinth: 'none',
  });
  readonly settled = signal(false);
  /** When the bundled snapshot was taken. */
  readonly fetchedAt = computed(() => this.raw().fetchedAt ?? null);

  readonly releases = computed(() => parseReleases(this.raw().github));
  readonly latest = computed<Release | null>(() => this.releases()[0] ?? null);
  readonly changelog = computed(() =>
    parseChangelog(this.raw().changelog).filter((v) => !/^unreleased$/i.test(v.version)),
  );
  readonly upcoming = computed(
    () => parseChangelog(this.raw().changelog).find((v) => /^unreleased$/i.test(v.version)) ?? null,
  );
  readonly targets = computed(() => parseTargets(this.raw().targetsToml));
  readonly targetStats = computed(() => targetStats(this.targets()));

  readonly version = computed(
    () => this.latest()?.version ?? this.changelog()[0]?.version ?? SITE.fallback.version,
  );

  /** The latest release date: GitHub, else the changelog, else the newest CurseForge file. */
  readonly updatedAt = computed<string>(() => {
    const cfFile = this.raw().curseforge?.files?.[0]?.uploaded_at;
    return this.latest()?.date ?? this.changelog()[0]?.date ?? cfFile ?? SITE.fallback.date;
  });

  readonly mcVersions = computed(() => {
    const all = this.targets().flatMap((t) => t.releases);
    return [...new Set(all)].sort(compareVersions);
  });

  readonly mcRange = computed(() => {
    const list = this.mcVersions();
    return list.length ? `${list[0]} – ${list[list.length - 1]}` : SITE.fallback.mcRange;
  });

  readonly loaders = computed(() => {
    const found = LOADERS.filter((l) => this.targets().some((t) => t.loaders[l]));
    return found.length ? found : [...LOADERS];
  });

  readonly downloads = computed(() => {
    const raw = this.raw();
    const curseforge = raw.curseforge?.downloads.total ?? null;
    const modrinth = raw.modrinth ? raw.modrinth.downloads : null;
    const github = githubDownloads(raw.github);
    const known = [curseforge, modrinth, github].filter((n): n is number => n !== null);
    return {
      curseforge,
      modrinth,
      github,
      total: known.length ? known.reduce((a, b) => a + b, 0) : null,
    };
  });

  /** `undefined`: not known yet; `null`: the platform has no page for the mod yet. */
  readonly modrinthListed = computed(() =>
    this.raw().modrinth === undefined ? undefined : this.raw().modrinth !== null,
  );

  constructor() {
    void this.load();
  }

  private async load() {
    await this.loadSnapshot();
    await Promise.all((Object.keys(SOURCES) as SourceKey[]).map((key) => this.loadLive(key)));
    this.settled.set(true);
  }

  private async loadSnapshot() {
    try {
      const res = await fetch('data/snapshot.json');
      if (!res.ok) return;
      const snap = (await res.json()) as RawData;
      this.raw.update((r) => ({ ...snap, ...r }));
      this.state.update((s) => {
        const next = { ...s };
        for (const key of Object.keys(next) as SourceKey[]) {
          if (snap[key] !== undefined && next[key] === 'none') next[key] = 'snapshot';
        }
        return next;
      });
    } catch {
      // No snapshot: the live sources and the fallbacks still apply.
    }
  }

  private async loadLive<K extends SourceKey>(key: K) {
    let value = readCache<RawData[K]>(key);
    if (value === undefined) {
      value = await fetchSource(SOURCES[key], SITE);
      if (value !== undefined) writeCache(key, value);
    }
    if (value === undefined) return;
    this.raw.update((r) => ({ ...r, [key]: value }));
    this.state.update((s) => ({ ...s, [key]: 'live' }));
  }
}

function readCache<T>(key: string): T | undefined {
  try {
    const text = localStorage.getItem(CACHE_PREFIX + key);
    if (!text) return undefined;
    const { at, value } = JSON.parse(text) as { at: number; value: T };
    return Date.now() - at < CACHE_TTL_MS ? value : undefined;
  } catch {
    return undefined;
  }
}

function writeCache(key: string, value: unknown) {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ at: Date.now(), value }));
  } catch {
    // Storage full or blocked: the page works without it.
  }
}
