/**
 * The languages of the site: the same as the mod's (`assets/livinghorizon/lang/` of the mod
 * repository). Adding one: a line here, a dictionary next to `en.ts`, and its loader in
 * `i18n.ts`.
 */
export const LANGUAGES = [
  { code: 'en', name: 'English', mod: 'en_us' },
  { code: 'fr', name: 'Français', mod: 'fr_fr' },
  { code: 'de', name: 'Deutsch', mod: 'de_de' },
  { code: 'es', name: 'Español', mod: 'es_es' },
  { code: 'it', name: 'Italiano', mod: 'it_it' },
  { code: 'pt-BR', name: 'Português (Brasil)', mod: 'pt_br' },
  { code: 'pl', name: 'Polski', mod: 'pl_pl' },
  { code: 'tr', name: 'Türkçe', mod: 'tr_tr' },
  { code: 'ru', name: 'Русский', mod: 'ru_ru' },
  { code: 'uk', name: 'Українська', mod: 'uk_ua' },
  { code: 'zh-CN', name: '简体中文', mod: 'zh_cn', spaceless: true },
  { code: 'zh-TW', name: '繁體中文', mod: 'zh_tw', spaceless: true },
  { code: 'ja', name: '日本語', mod: 'ja_jp', spaceless: true },
  { code: 'ko', name: '한국어', mod: 'ko_kr' },
] as const;

/** Chinese and Japanese put no space between words, nor between the halves of a heading. */
export function isSpaceless(code: Lang): boolean {
  return LANGUAGES.some((l) => l.code === code && 'spaceless' in l);
}

export type Lang = (typeof LANGUAGES)[number]['code'];

export const DEFAULT_LANG: Lang = 'en';

const CODES: readonly string[] = LANGUAGES.map((l) => l.code);

export function isLang(code: string | null | undefined): code is Lang {
  return !!code && CODES.includes(code);
}

/**
 * The site's language closest to a browser one: `fr-CA` → `fr`, `zh-Hant-HK` → `zh-TW`,
 * `pt-PT` → `pt-BR` (the only Portuguese there is).
 */
export function matchLang(tag: string): Lang | null {
  const lower = tag.toLowerCase();
  const exact = LANGUAGES.find((l) => l.code.toLowerCase() === lower);
  if (exact) return exact.code;
  const [base, ...rest] = lower.split('-');
  if (base === 'zh') {
    const traditional = rest.some((p) => p === 'hant' || p === 'tw' || p === 'hk' || p === 'mo');
    return traditional ? 'zh-TW' : 'zh-CN';
  }
  return LANGUAGES.find((l) => l.code.toLowerCase().split('-')[0] === base)?.code ?? null;
}
