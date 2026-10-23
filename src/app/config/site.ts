/**
 * Everything about the project that is not fetched: links, platform ids, and the values
 * shown when no source answers. Edit this file to change a link or add a benchmark.
 */

import type { Messages } from '../i18n/en';

const REPO = 'https://github.com/MC-Skin-Creator/living-horizon';

export interface Benchmark {
  /**
   * The slot of the performance section it fills (`performance.slots` of the dictionaries).
   * How it was measured (hardware, settings, mods) is `performance.setups.<slot>` there.
   */
  slot: keyof Messages['performance']['slots'];
  /** The measured value, e.g. "-3 %". */
  value: string;
}

export interface Screenshots {
  /** Its tab's name and sentence are `compare.shots.<id>` in the dictionaries. */
  id: keyof Messages['compare']['shots'];
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
    version: '0.10.0',
    date: '2026-10-20',
    mcRange: '1.20 – 26.3',
  },

  /**
   * The languages the mod's changelog is written in (`changelog/<code>.md`). The page shows
   * the visitor's when there is one, else the English one.
   */
  changelogLanguages: ['en', 'fr'] as string[],
  changelogFile: (code: string) => `${REPO}/blob/main/changelog/${code}.md`,

  /**
   * Real measurements only. While this list is empty the performance section shows
   * empty slots inviting players to share theirs, never a made-up number.
   */
  benchmarks: [{ slot: 'fps', value: '+25 %' }] as Benchmark[],

  /**
   * Real in-game screenshots for the before / after slider. They come first, the stylised
   * illustrations after them.
   */
  screenshots: [
    {
      id: 'shaders',
      before: 'img/compare/shaders-before.webp',
      after: 'img/compare/shaders-after.webp',
    },
    {
      id: 'vanilla',
      before: 'img/compare/vanilla-before.webp',
      after: 'img/compare/vanilla-after.webp',
    },
  ] as Screenshots[],
};
