import { SITE } from '../config/site';

/** A new GitHub issue prefilled for a compatibility report, in English like the issues. */
export function compatibilityReport(version: string): string {
  const body = [
    '**Living Horizon version:** ' + version,
    '**Minecraft version:** ',
    '**Loader:** Fabric / Quilt / NeoForge / Forge',
    '**Far-terrain mod (Distant Horizons, Voxy, Lodistance, Far View, Ecstatic, Bobby…) and version:** ',
    '**Shader pack (and Iris version):** ',
    '**Where:** single player / LAN / server with the mod / server without the mod',
    '**Other mods:** ',
    '',
    '**How does it run?** (works / something looks wrong / crash)',
    '',
    '**Screenshots or log:**',
    '',
  ].join('\n');
  const params = new URLSearchParams({ title: 'Compatibility report: ', body });
  return `${SITE.links.newIssue}?${params}`;
}
