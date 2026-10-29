/*
 * Refreshes public/data/snapshot.json: the copy of every source the page shows first, and
 * keeps when a source cannot be reached from the visitor's browser. Run by the deploy
 * workflow before each build (and daily), or by hand: `npm run snapshot` (Node 24).
 * A source that fails keeps its previous value.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { MOD_ICON_REFS } from '../src/app/config/mods.ts';
import { SITE } from '../src/app/config/site.ts';
import { SOURCES, fetchSource, type SourceKey } from '../src/app/data/sources.ts';

const OUT = new URL('../public/data/snapshot.json', import.meta.url);

const previous = await readFile(OUT, 'utf8')
  .then((text) => JSON.parse(text))
  .catch(() => ({}));

const token = process.env['GITHUB_TOKEN'];
const next: Record<string, unknown> = { ...previous };
let failures = 0;

for (const key of Object.keys(SOURCES) as SourceKey[]) {
  const source = SOURCES[key];
  const init =
    key === 'github' && token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
  const value = await fetchSource(source as any, { ...SITE, mods: MOD_ICON_REFS }, init);
  if (value === undefined) {
    failures++;
    console.warn(`snapshot: ${key} unreachable, keeping the previous value`);
    continue;
  }
  next[key] = value;
  console.log(`snapshot: ${key} ok`);
}

next['fetchedAt'] = new Date().toISOString();
await mkdir(dirname(OUT.pathname), { recursive: true });
await writeFile(OUT, JSON.stringify(next) + '\n');
console.log(`snapshot: written, ${failures} source(s) kept from before`);
