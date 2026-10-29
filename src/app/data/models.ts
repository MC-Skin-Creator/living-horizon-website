/** Raw answers of each source, trimmed to what the page reads. Also the snapshot format. */
export interface RawData {
  fetchedAt?: string;
  github?: GhRelease[];
  changelog?: string;
  targetsToml?: string;
  curseforge?: CfProject;
  /** `null` when the platform answered that the project does not exist (yet). */
  modrinth?: MrProject | null;
  nexus?: NxMod;
  /** Modpacks that ship the mod, as ModpackIndex lists them. */
  modpacks?: Modpack[];
  /** The compatible mods' icons, by Modrinth slug or CurseForge path (`config/mods.ts`). */
  modIcons?: Record<string, string>;
}

export interface GhAsset {
  name: string;
  browser_download_url: string;
  download_count: number;
  size: number;
}

export interface GhRelease {
  tag_name: string;
  name: string | null;
  html_url: string;
  published_at: string | null;
  prerelease: boolean;
  draft: boolean;
  /** Downloads of every file of the release. */
  downloads: number;
  /** Only kept for the latest announced releases. */
  assets: GhAsset[];
}

export interface CfFile {
  id: number;
  url: string;
  display: string;
  name: string;
  type: string;
  versions: string[];
  downloads: number;
  uploaded_at: string;
}

export interface CfProject {
  title: string;
  urls: { curseforge?: string; project?: string };
  downloads: { total: number; monthly?: number };
  files?: CfFile[];
}

export interface MrProject {
  slug: string;
  downloads: number;
  followers: number;
  updated: string;
  game_versions: string[];
  loaders: string[];
}

export interface NxMod {
  downloads: number;
}

export interface Modpack {
  /** Its id on ModpackIndex. */
  id: number;
  name: string;
  summary: string;
  /** Where it is downloaded: its own pages on CurseForge and Modrinth, straight. */
  links: ModpackLink[];
  thumbnail: string | null;
  downloads: number;
  /** Empty when ModpackIndex was not asked, or did not answer. */
  authors: string[];
  /** Minecraft versions, oldest first; empty like `authors`. */
  versions: string[];
  updated: string | null;
}

export interface ModpackLink {
  platform: 'curseforge' | 'modrinth';
  url: string;
}

export type Loader = 'fabric' | 'quilt' | 'neoforge' | 'forge';

export const LOADERS: readonly Loader[] = ['fabric', 'quilt', 'neoforge', 'forge'];

export const LOADER_NAMES: Record<Loader, string> = {
  fabric: 'Fabric',
  quilt: 'Quilt',
  neoforge: 'NeoForge',
  forge: 'Forge',
};

/** `tested`: seen drawing in a world. `untested`: builds and starts, waiting for testers. */
export type TargetStatus = 'tested' | 'untested';

export interface TargetRow {
  /** The Stonecutter node without its loader suffix, e.g. `1.21.8` or `26.1.x`. */
  key: string;
  /** Every Minecraft release the jar covers. */
  releases: string[];
  label: string;
  java: number;
  /** The game version in the jar's file name: the last release. */
  fileVersion: string;
  loaders: Partial<Record<Loader, TargetStatus>>;
}

export interface Release {
  version: string;
  tag: string;
  title: string;
  url: string;
  date: string | null;
  assets: GhAsset[];
}

export type Inline = { kind: 'text' | 'strong' | 'em' | 'code'; text: string };

export interface ChangeEntry {
  subject: Inline[];
  body: Inline[];
}

export type ChangeSide = 'server' | 'client';

export interface ChangeGroup {
  title: string;
  kind: 'new' | 'improved' | 'fixed' | 'other';
  /** The `### Server` or `### Client` part it sits under; null in older versions. */
  side: ChangeSide | null;
  entries: ChangeEntry[];
}

export interface ChangelogVersion {
  version: string;
  date: string | null;
  groups: ChangeGroup[];
}

export type SourceState = 'live' | 'snapshot' | 'none';
