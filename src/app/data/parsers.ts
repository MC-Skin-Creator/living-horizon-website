import {
  ChangeGroup,
  ChangelogVersion,
  GhRelease,
  Inline,
  LOADERS,
  Loader,
  Release,
  TargetRow,
  TargetStatus,
} from './models';

/** Development builds (`v0.5.0-dev.43`) are published for testing, not announced. */
export function isDevTag(tag: string): boolean {
  return /-dev\./i.test(tag);
}

/** Announced releases, newest first. */
export function parseReleases(releases: GhRelease[] | undefined): Release[] {
  if (!releases) return [];
  return releases
    .filter((r) => !r.draft && !isDevTag(r.tag_name))
    .map((r) => ({
      version: r.tag_name.replace(/^v/i, ''),
      tag: r.tag_name,
      title: r.name ?? r.tag_name,
      url: r.html_url,
      date: r.published_at,
      assets: r.assets ?? [],
    }))
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
}

/** Downloads of every file attached to a GitHub release, development builds included. */
export function githubDownloads(releases: GhRelease[] | undefined): number | null {
  if (!releases?.length) return null;
  return releases.reduce((sum, r) => sum + (r.downloads ?? 0), 0);
}

/** Splits a version like `1.21.11` or `26.1.2` into numbers, for sorting. */
export function versionParts(v: string): number[] {
  return v.split(/[.-]/).map((p) => (/^\d+$/.test(p) ? Number(p) : 0));
}

export function compareVersions(a: string, b: string): number {
  const pa = versionParts(a);
  const pb = versionParts(b);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d) return d;
  }
  return 0;
}

/** The Java a game version runs on: 17 up to 1.20.4, 21 from 1.20.5, 25 on 26.x. */
export function javaFor(release: string): number {
  const [major, minor = 0, patch = 0] = versionParts(release);
  if (major >= 26) return 25;
  if (minor > 20 || (minor === 20 && patch >= 5)) return 21;
  return 17;
}

/**
 * Reads the Stonecutter targets of the mod: one table per game version and loader, named
 * `<version>`, `<version>-quilt`, `<version>-neoforge` or `<version>-forge`. A table marked
 * `mod.release_type = "alpha"` starts in the game but has not been seen drawing yet.
 */
export function parseTargets(toml: string | undefined): TargetRow[] {
  if (!toml) return [];
  const rows = new Map<string, TargetRow>();
  const tables = toml.split(/^\[\s*"([^"]+)"\s*\]\s*$/m);
  // split() with a capture group: [preamble, name1, body1, name2, body2, ...]
  for (let i = 1; i < tables.length; i += 2) {
    const node = tables[i];
    const body = tables[i + 1] ?? '';
    const match = /^(.+?)(?:-(quilt|neoforge|forge))?$/.exec(node);
    if (!match) continue;
    const key = match[1];
    const loader = (match[2] ?? 'fabric') as Loader;
    const releases = readArray(body, 'mod.mc_releases');
    if (!releases.length) continue;
    const status: TargetStatus = /^mod\.release_type\s*=\s*"alpha"/m.test(body)
      ? 'untested'
      : 'tested';
    let row = rows.get(key);
    if (!row) {
      const sorted = [...releases].sort(compareVersions);
      row = {
        key,
        releases: sorted,
        label: sorted.length > 1 ? `${sorted[0]} – ${sorted[sorted.length - 1]}` : sorted[0],
        java: javaFor(sorted[0]),
        fileVersion: sorted[sorted.length - 1],
        loaders: {},
      };
      rows.set(key, row);
    }
    row.loaders[loader] = status;
  }
  return [...rows.values()].sort((a, b) => compareVersions(b.fileVersion, a.fileVersion));
}

function readArray(body: string, key: string): string[] {
  const escaped = key.replace(/\./g, '\\.');
  const m = new RegExp(`^${escaped}\\s*=\\s*(\\[[^\\]]*\\])`, 'm').exec(body);
  if (!m) return [];
  try {
    const value = JSON.parse(m[1]);
    return Array.isArray(value) ? value.map(String) : [];
  } catch {
    return [];
  }
}

export function targetStats(rows: TargetRow[]) {
  let builds = 0;
  let untested = 0;
  for (const row of rows) {
    for (const loader of LOADERS) {
      const status = row.loaders[loader];
      if (!status) continue;
      builds++;
      if (status === 'untested') untested++;
    }
  }
  return { builds, untested, tested: builds - untested };
}

/** File name of a jar on the GitHub release, as the release workflow names it. */
export function jarName(version: string, row: TargetRow, loader: Loader): string {
  return `livinghorizon-${version}+mc${row.fileVersion}${loader === 'fabric' ? '' : '-' + loader}.jar`;
}

export function dataPackName(version: string, row: TargetRow): string {
  return `livinghorizon-datapack-${version}+mc${row.fileVersion}.zip`;
}

const GROUP_KINDS: Record<string, ChangeGroup['kind']> = {
  new: 'new',
  improved: 'improved',
  fixed: 'fixed',
};

/**
 * Reads `changelog/en.md`: `## 0.5.0 — 2026-10-13` sections (and `## Unreleased`), each
 * with `### New`, `### Improved`, `### Fixed` groups of `- **Subject** — text` bullets.
 */
export function parseChangelog(md: string | undefined): ChangelogVersion[] {
  if (!md) return [];
  const versions: ChangelogVersion[] = [];
  let current: ChangelogVersion | null = null;
  let group: ChangeGroup | null = null;
  let bullet: string | null = null;

  const flush = () => {
    if (bullet !== null && group) group.entries.push(parseEntry(bullet));
    bullet = null;
  };

  for (const line of md.split(/\r?\n/)) {
    const h2 = /^##\s+(.+?)\s*$/.exec(line);
    if (h2 && !line.startsWith('###')) {
      flush();
      const [name, date] = h2[1].split(/\s+[—–-]\s+/);
      current = { version: name.trim(), date: date?.trim() ?? null, groups: [] };
      versions.push(current);
      group = null;
      continue;
    }
    const h3 = /^###\s+(.+?)\s*$/.exec(line);
    if (h3 && current) {
      flush();
      const title = h3[1];
      group = { title, kind: GROUP_KINDS[title.toLowerCase()] ?? 'other', entries: [] };
      current.groups.push(group);
      continue;
    }
    if (!group) continue;
    const item = /^\s*[-*]\s+(.*)$/.exec(line);
    if (item) {
      flush();
      bullet = item[1];
    } else if (bullet !== null && line.trim()) {
      bullet += ' ' + line.trim();
    } else {
      flush();
    }
  }
  flush();
  return versions.filter((v) => v.groups.some((g) => g.entries.length));
}

function parseEntry(text: string) {
  const m = /^\*\*(.+?)\*\*\s*[—–-]\s*(.*)$/.exec(text);
  if (m) return { subject: parseInline(m[1]), body: parseInline(m[2]) };
  return { subject: [], body: parseInline(text) };
}

/** Bold, italic and code spans; links keep their text. Never produces HTML. */
export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  const clean = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const re = /(\*\*([^*]+)\*\*|\*([^*]+)\*|_([^_]+)_|`([^`]+)`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(clean))) {
    if (m.index > last) out.push({ kind: 'text', text: clean.slice(last, m.index) });
    if (m[2]) out.push({ kind: 'strong', text: m[2] });
    else if (m[3] ?? m[4]) out.push({ kind: 'em', text: (m[3] ?? m[4])! });
    else out.push({ kind: 'code', text: m[5] });
    last = m.index + m[0].length;
  }
  if (last < clean.length) out.push({ kind: 'text', text: clean.slice(last) });
  return out;
}
