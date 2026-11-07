/*
 * Refreshes public/data/snapshot.json: the copy of every source the page shows first, and
 * keeps when a source cannot be reached from the visitor's browser. Run by the deploy
 * workflow before each build (and daily), or by hand: `npm run snapshot` (Node 24).
 * A source that fails keeps its previous value. A `lazy` source is written to a file of its
 * own, `public/data/<key>.json`.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { SITE } from '../src/app/config/site.ts';
import { SOURCES, fetchSource, type SourceKey } from '../src/app/data/sources.ts';

const OUT = new URL('../public/data/snapshot.json', import.meta.url);

const previous = await readFile(OUT, 'utf8')
  .then((text) => JSON.parse(text))
  .catch(() => ({}));

const token = process.env['GITHUB_TOKEN'];
const next: Record<string, unknown> = { ...previous };
let failures = 0;

// `npm run snapshot -- packMods` refreshes only the sources named.
const only = process.argv.slice(2);
const keys = (Object.keys(SOURCES) as SourceKey[]).filter((k) => !only.length || only.includes(k));

for (const key of keys) {
  const source = SOURCES[key];
  // GitHub's API: the releases, and the issues the compatible mods are read from.
  const init =
    (key === 'github' || key === 'compat') && token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : undefined;
  const value = await fetchSource(source as any, SITE, init);
  if (value === undefined) {
    failures++;
    console.warn(`snapshot: ${key} unreachable, keeping the previous value`);
    continue;
  }
  // A source only one page reads has a file of its own, out of the snapshot every page loads.
  if (source.lazy) {
    await writeFile(
      new URL(`../public/data/${key}.json`, import.meta.url),
      JSON.stringify(value) + '\n',
    );
  } else {
    next[key] = value;
  }
  console.log(`snapshot: ${key} ok`);
}

// Only the lazy sources asked for: the shared snapshot stays as it was.
if (keys.some((k) => !SOURCES[k].lazy)) {
  next['fetchedAt'] = new Date().toISOString();
  await mkdir(dirname(OUT.pathname), { recursive: true });
  await writeFile(OUT, JSON.stringify(next) + '\n');
}
console.log(`snapshot: written, ${failures} source(s) kept from before`);
