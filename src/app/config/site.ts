/**
 * Everything about the project that is not fetched: links, platform ids, and the values
 * shown when no source answers. Edit this file to change a link or add a benchmark.
 */

const REPO = 'https://github.com/MC-Skin-Creator/living-horizon';

export interface Benchmark {
  /** Short label, e.g. "FPS impact". */
  label: string;
  /** The measured value, e.g. "-3 %". */
  value: string;
  /** How it was measured: hardware, settings, mods. Shown under the value. */
  context: string;
}

export interface SceneScreenshots {
  /** Real in-game shots, same framing, mod off then on. Paths relative to `public/`. */
  before: string;
  after: string;
}

export const SITE = {
  name: 'Living Horizon',
  tagline: 'Gives life to the distance.',
  author: 'clixmods',

  repo: { owner: 'MC-Skin-Creator', name: 'living-horizon', branch: 'main' },
  curseforgePath: 'minecraft/mc-mods/living-horizon',
  modrinthSlug: 'living-horizon',

  links: {
    github: REPO,
    releases: `${REPO}/releases`,
    issues: `${REPO}/issues`,
    newIssue: `${REPO}/issues/new`,
    changelog: `${REPO}/blob/main/changelog/en.md`,
    readme: `${REPO}#readme`,
    license: `${REPO}/blob/main/LICENSE`,
    contributing: `${REPO}/blob/main/CONTRIBUTING.md`,
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/living-horizon',
    modrinth: 'https://modrinth.com/mod/living-horizon',
    nexus: 'https://www.nexusmods.com/minecraft/mods/1376',
    discord: 'https://discord.gg/THSV9dexNj',
    voxy: 'https://modrinth.com/mod/voxy',
    distantHorizons: 'https://modrinth.com/mod/distanthorizons',
    iris: 'https://modrinth.com/mod/iris',
    fabricApi: 'https://modrinth.com/mod/fabric-api',
    fabricLoader: 'https://fabricmc.net/use/',
  },

  /** Shown until a source answers, or if none does. */
  fallback: {
    version: '0.5.0',
    date: '2026-10-13',
    mcRange: '1.20 – 26.3',
  },

  /**
   * Real measurements only. While this list is empty the performance section shows
   * empty slots inviting players to share theirs, never a made-up number.
   */
  benchmarks: [] as Benchmark[],

  /**
   * Real screenshots for the before / after slider, by scene id. A scene without an
   * entry is drawn as a stylised illustration.
   */
  screenshots: {} as Partial<Record<'village' | 'ridge' | 'coast', SceneScreenshots>>,
};
