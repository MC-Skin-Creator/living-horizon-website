import { Injectable, computed, effect, inject, signal, untracked } from '@angular/core';
import { MOD_ICON_REFS } from '../config/mods';
import { SITE } from '../config/site';
import { I18n } from '../i18n/i18n';
import { LOADERS, RawData, Release, SourceState } from './models';
import {
  compareVersions,
  githubDownloads,
  isUpcoming,
  parseChangelog,
  parseReleases,
  parseTargets,
  targetStats,
} from './parsers';
import { SOURCES, SourceKey, fetchSource } from './sources';

const CACHE_PREFIX = 'lh-source:';
/** What the sources are asked about. */
const PROJECT = { ...SITE, mods: MOD_ICON_REFS };
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
    nexus: 'none',
    modpacks: 'none',
    modIcons: 'none',
  });
  readonly settled = signal(false);
  /** When the bundled snapshot was taken. */
  readonly fetchedAt = computed(() => this.raw().fetchedAt ?? null);

  readonly releases = computed(() => parseReleases(this.raw().github));
  readonly latest = computed<Release | null>(() => this.releases()[0] ?? null);

  private readonly i18n = inject(I18n);
  /** The mod's changelog in another language than English, once loaded. */
  private readonly translatedChangelog = signal<{ lang: string; text: string } | null>(null);
  /** The language the changelog is shown in: the page's when the mod has it, else English. */
  readonly changelogLang = computed(() => {
    const translated = this.translatedChangelog();
    return translated?.lang === this.i18n.lang() ? translated.lang : 'en';
  });
  private readonly changelogVersions = computed(() =>
    parseChangelog(
      this.changelogLang() === 'en' ? this.raw().changelog : this.translatedChangelog()?.text,
    ),
  );
  readonly changelog = computed(() => this.changelogVersions().filter((v) => !isUpcoming(v)));
  readonly upcoming = computed(() => this.changelogVersions().find(isUpcoming) ?? null);
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
    const nexus = raw.nexus?.downloads ?? null;
    const known = [curseforge, modrinth, github, nexus].filter((n): n is number => n !== null);
    return {
      curseforge,
      modrinth,
      github,
      nexus,
      total: known.length ? known.reduce((a, b) => a + b, 0) : null,
    };
  });

  /** Most downloaded first. `undefined` while no source has answered. */
  readonly modpacks = computed(() => this.raw().modpacks);
  /** The compatible mods' icons; empty until a source answers. */
  readonly modIcons = computed(() => this.raw().modIcons ?? {});

  /** `undefined`: not known yet; `null`: the platform has no page for the mod yet. */
  readonly modrinthListed = computed(() =>
    this.raw().modrinth === undefined ? undefined : this.raw().modrinth !== null,
  );

  constructor() {
    void this.load();
    effect(() => {
      const lang = this.i18n.lang();
      if (lang !== 'en' && SITE.changelogLanguages.includes(lang)) {
        untracked(() => void this.loadTranslatedChangelog(lang));
      }
    });
  }

  /** `changelog/<lang>.md`; the English one stays shown if it cannot be read. */
  private async loadTranslatedChangelog(lang: string) {
    const key = `changelog-${lang}`;
    let text = readCache<string>(key);
    if (text === undefined) {
      const { owner, name, branch } = SITE.repo;
      try {
        const res = await fetch(
          `https://raw.githubusercontent.com/${owner}/${name}/${branch}/changelog/${lang}.md`,
          { signal: AbortSignal.timeout(10_000) },
        );
        if (!res.ok) return;
        text = await res.text();
        writeCache(key, text);
      } catch {
        return;
      }
    }
    if (parseChangelog(text).length) this.translatedChangelog.set({ lang, text });
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
      value = await fetchSource(SOURCES[key], PROJECT);
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
