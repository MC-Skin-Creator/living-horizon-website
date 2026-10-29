/*
 * The mods listed on the compatible mods page. A mod's icon and link come from Modrinth (its
 * slug) or, for a mod not there, from CurseForge (its path); its note from the dictionaries.
 * Statuses follow the mod's README ("Compatibility") and its issues labelled
 * `mod compatibility`: keep them in step when one is checked or fixed.
 *
 * Also read by `scripts/snapshot.mts` under Node: keep this file free of value imports.
 */
import type { Messages } from '../i18n/en';

/** `works`: seen working. `issue`: works, with a known problem. `untested`: waits for a tester. */
export type ModStatus = 'works' | 'issue' | 'untested';

export type ModCategory = 'terrain' | 'graphics' | 'creatures' | 'tools';

export interface CompatibleMod {
  name: string;
  category: ModCategory;
  status: ModStatus;
  /** Its slug on Modrinth: icon and link. */
  modrinth?: string;
  /** Its path on CurseForge, for a mod that is not on Modrinth: icon and link. */
  curseforge?: string;
  /** Its issue in the mod's repository: the known problem, or where to report a test. */
  issue?: number;
  /** What to know about it. Mods waiting for a tester share one sentence instead. */
  note?: (t: Messages) => string;
}

export const MOD_STATUSES: readonly ModStatus[] = ['works', 'issue', 'untested'];

export const MOD_CATEGORIES: readonly ModCategory[] = ['terrain', 'graphics', 'creatures', 'tools'];

export const MODS: CompatibleMod[] = [
  // Far terrain
  {
    name: 'Voxy',
    category: 'terrain',
    status: 'works',
    modrinth: 'voxy',
    note: (t) => t.compatibility.cards.voxy.text,
  },
  {
    name: 'Distant Horizons',
    category: 'terrain',
    status: 'works',
    modrinth: 'distanthorizons',
    note: (t) => t.compatibility.cards.dh.text,
  },
  { name: 'Bobby', category: 'terrain', status: 'untested', modrinth: 'bobby', issue: 112 },
  {
    name: 'Far View',
    category: 'terrain',
    status: 'untested',
    curseforge: 'minecraft/mc-mods/far-view',
    issue: 280,
  },
  {
    name: 'Lodistance',
    category: 'terrain',
    status: 'untested',
    curseforge: 'minecraft/mc-mods/lodistance',
    issue: 278,
  },
  { name: 'Ecstatic', category: 'terrain', status: 'untested', modrinth: 'ecstatic', issue: 279 },

  // Graphics and performance
  {
    name: 'Sodium',
    category: 'graphics',
    status: 'works',
    modrinth: 'sodium',
    note: (t) => t.mods.notes.sodium,
  },
  {
    name: 'Iris Shaders',
    category: 'graphics',
    status: 'works',
    modrinth: 'iris',
    note: (t) => t.mods.notes.iris,
  },
  {
    name: 'Photon Shaders',
    category: 'graphics',
    status: 'works',
    modrinth: 'photon-shader',
    note: (t) => t.mods.notes.pack,
  },
  {
    name: 'Complementary Shaders',
    category: 'graphics',
    status: 'works',
    modrinth: 'complementary-reimagined',
    note: (t) => t.mods.notes.pack,
  },
  {
    name: 'Oculus',
    category: 'graphics',
    status: 'works',
    modrinth: 'oculus',
    note: (t) => t.mods.notes.oculus,
  },
  {
    name: 'Entity Culling',
    category: 'graphics',
    status: 'works',
    modrinth: 'entityculling',
    note: (t) => t.mods.notes.entityCulling,
  },
  {
    name: 'Embeddium',
    category: 'graphics',
    status: 'untested',
    modrinth: 'embeddium',
    issue: 113,
  },
  {
    name: 'Entity Model Features',
    category: 'graphics',
    status: 'untested',
    modrinth: 'entity-model-features',
    issue: 96,
  },
  {
    name: 'Entity Texture Features',
    category: 'graphics',
    status: 'untested',
    modrinth: 'entitytexturefeatures',
    issue: 96,
  },
  {
    name: 'Fresh Animations',
    category: 'graphics',
    status: 'untested',
    modrinth: 'fresh-animations',
    issue: 96,
  },

  // Creatures and players
  {
    name: 'GeckoLib',
    category: 'creatures',
    status: 'issue',
    modrinth: 'geckolib',
    issue: 67,
    note: (t) => t.mods.notes.geckolib,
  },
  {
    name: 'Fowl Play',
    category: 'creatures',
    status: 'issue',
    modrinth: 'fowlplay',
    issue: 85,
    note: (t) => t.mods.notes.fowlPlay,
  },
  {
    name: 'Guard Villagers',
    category: 'creatures',
    status: 'works',
    modrinth: 'guard-villagers',
    note: (t) => t.mods.notes.guardVillagers,
  },
  {
    name: 'Cobblemon',
    category: 'creatures',
    status: 'untested',
    modrinth: 'cobblemon',
    issue: 97,
  },
  {
    name: 'Naturalist',
    category: 'creatures',
    status: 'untested',
    modrinth: 'naturalist',
    issue: 98,
  },
  {
    name: "Mowzie's Mobs",
    category: 'creatures',
    status: 'untested',
    modrinth: 'mowzies-mobs',
    issue: 99,
  },
  {
    name: 'Bosses of Mass Destruction',
    category: 'creatures',
    status: 'untested',
    modrinth: 'bosses-of-mass-destruction',
    issue: 99,
  },
  {
    name: 'Critters and Companions',
    category: 'creatures',
    status: 'untested',
    modrinth: 'critters-and-companions',
    issue: 100,
  },
  {
    name: "Alex's Mobs",
    category: 'creatures',
    status: 'untested',
    modrinth: 'alexs-mobs',
    issue: 101,
  },
  {
    name: 'Ice and Fire',
    category: 'creatures',
    status: 'untested',
    curseforge: 'minecraft/mc-mods/ice-and-fire-dragons',
    issue: 102,
  },
  {
    name: "Alex's Caves",
    category: 'creatures',
    status: 'untested',
    modrinth: 'alexs-caves',
    issue: 103,
  },
  {
    name: 'Friends & Foes',
    category: 'creatures',
    status: 'untested',
    modrinth: 'friends-and-foes',
    issue: 104,
  },
  {
    name: 'Wilder Wild',
    category: 'creatures',
    status: 'untested',
    modrinth: 'wilder-wild',
    issue: 105,
  },
  {
    name: 'Better Animals Plus',
    category: 'creatures',
    status: 'untested',
    curseforge: 'minecraft/mc-mods/betteranimalsplus',
    issue: 106,
  },
  { name: 'Quark', category: 'creatures', status: 'untested', modrinth: 'quark', issue: 107 },
  {
    name: 'Environmental',
    category: 'creatures',
    status: 'untested',
    modrinth: 'environmental',
    issue: 108,
  },
  {
    name: 'Autumnity',
    category: 'creatures',
    status: 'untested',
    modrinth: 'autumnity',
    issue: 108,
  },
  {
    name: 'MCA Reborn',
    category: 'creatures',
    status: 'untested',
    modrinth: 'minecraft-comes-alive-reborn',
    issue: 109,
  },
  { name: 'Figura', category: 'creatures', status: 'untested', modrinth: 'figura', issue: 114 },

  // Libraries and menus
  {
    name: 'Fabric API',
    category: 'tools',
    status: 'works',
    modrinth: 'fabric-api',
    note: (t) => t.mods.notes.fabricApi,
  },
  {
    name: 'Mod Menu',
    category: 'tools',
    status: 'works',
    modrinth: 'modmenu',
    note: (t) => t.mods.notes.modMenu,
  },
];

/** What the icon source asks each platform for. */
export const MOD_ICON_REFS = {
  modrinth: MODS.flatMap((m) => (m.modrinth ? [m.modrinth] : [])),
  curseforge: MODS.flatMap((m) => (m.curseforge && !m.modrinth ? [m.curseforge] : [])),
};

/** Where a mod is downloaded. */
export function modLink(mod: CompatibleMod): { platform: 'modrinth' | 'curseforge'; url: string } {
  return mod.modrinth
    ? { platform: 'modrinth', url: `https://modrinth.com/project/${mod.modrinth}` }
    : { platform: 'curseforge', url: `https://www.curseforge.com/${mod.curseforge}` };
}

/** The key its icon is stored under: its Modrinth slug, else its CurseForge path. */
export function modIconKey(mod: CompatibleMod): string {
  return mod.modrinth ?? mod.curseforge ?? mod.name;
}
