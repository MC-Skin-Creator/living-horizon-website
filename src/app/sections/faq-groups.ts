import type { Messages } from '../i18n/en';

type Groups = Messages['faq']['groups'];
type Questions = Messages['faq']['questions'];

/** The groups and their questions, in the order of the mod's README. */
export const FAQ_GROUPS: { key: keyof Groups; questions: (keyof Questions)[] }[] = [
  { key: 'how', questions: ['visual', 'real', 'simulation', 'range'] },
  { key: 'compatibility', questions: ['mods', 'modMobs', 'farTerrain'] },
  { key: 'performance', questions: ['frameRate', 'choose', 'world'] },
  { key: 'multiplayer', questions: ['server', 'paper', 'nothing', 'cheat'] },
  { key: 'downloads', questions: ['bedrock', 'version', 'modpack', 'abandoned'] },
  { key: 'ai', questions: ['ai', 'modrinth'] },
];

/** A question's name in its links: `frameRate` → `frame-rate`. */
export const faqSlug = (key: string) => key.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());

/**
 * The page of a question in a language, `faq/fr/frame-rate/`, relative to the site's root.
 * Built by `scripts/pages.mts` for link previews (Discord…); it opens the question on the
 * home page.
 */
export const faqPage = (lang: string, key: string) => `faq/${lang.toLowerCase()}/${faqSlug(key)}/`;
