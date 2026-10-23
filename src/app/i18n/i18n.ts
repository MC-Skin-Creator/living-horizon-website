import { Injectable, computed, signal } from '@angular/core';
import { Messages, en } from './en';
import { DEFAULT_LANG, LANGUAGES, Lang, isLang, isSpaceless, matchLang } from './languages';

const STORAGE_KEY = 'lh-lang';

/** Every language but English is its own chunk, loaded only when it is shown. */
const DICTIONARIES: Record<Exclude<Lang, 'en'>, () => Promise<Messages>> = {
  fr: () => import('./fr').then((m) => m.fr),
  de: () => import('./de').then((m) => m.de),
  es: () => import('./es').then((m) => m.es),
  it: () => import('./it').then((m) => m.it),
  'pt-BR': () => import('./pt-br').then((m) => m.ptBR),
  pl: () => import('./pl').then((m) => m.pl),
  tr: () => import('./tr').then((m) => m.tr),
  ru: () => import('./ru').then((m) => m.ru),
  uk: () => import('./uk').then((m) => m.uk),
  'zh-CN': () => import('./zh-cn').then((m) => m.zhCN),
  'zh-TW': () => import('./zh-tw').then((m) => m.zhTW),
  ja: () => import('./ja').then((m) => m.ja),
  ko: () => import('./ko').then((m) => m.ko),
};

function load(lang: Lang): Promise<Messages> {
  return lang === 'en' ? Promise.resolve(en) : DICTIONARIES[lang]();
}

/**
 * The language to show: `?lang=` in the address, else the one picked before, else the
 * browser's, else English.
 */
function detect(): Lang {
  const asked = new URLSearchParams(location.search).get('lang');
  const fromUrl = asked ? matchLang(asked) : null;
  if (fromUrl) return fromUrl;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // Storage blocked: go on with the browser's language.
  }
  for (const tag of navigator.languages ?? [navigator.language]) {
    const match = tag ? matchLang(tag) : null;
    if (match) return match;
  }
  return DEFAULT_LANG;
}

/** The page's language, title and description, for the browser, search engines and readers. */
function applyToDocument(lang: Lang, t: Messages) {
  document.documentElement.lang = lang;
  document.title = t.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
}

let initial: { lang: Lang; messages: Messages } = { lang: DEFAULT_LANG, messages: en };

/**
 * Loads the visitor's language. `main.ts` waits for it before starting the app, so the page
 * never shows English first. Never throws: a dictionary that fails to load leaves English.
 */
export async function loadInitialLanguage(): Promise<void> {
  const lang = detect();
  try {
    initial = { lang, messages: await load(lang) };
  } catch {
    // Offline or a stale chunk: English is bundled.
  }
  applyToDocument(initial.lang, initial.messages);
}

/**
 * The language of the page and its texts. Templates read `i18n.t()`, a dictionary with the
 * shape of `en.ts`; changing the language swaps it and every section follows.
 */
@Injectable({ providedIn: 'root' })
export class I18n {
  readonly languages = LANGUAGES;
  readonly lang = signal<Lang>(initial.lang);
  readonly t = signal<Messages>(initial.messages);
  /** What joins the two halves of a heading: a space, or nothing in Chinese and Japanese. */
  readonly gap = computed(() => (isSpaceless(this.lang()) ? '' : ' '));
  private request = 0;

  async use(lang: Lang) {
    const request = ++this.request;
    let messages: Messages;
    try {
      messages = await load(lang);
    } catch {
      return;
    }
    // A later pick wins over a slower one.
    if (request !== this.request) return;
    this.lang.set(lang);
    this.t.set(messages);
    applyToDocument(lang, messages);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Not remembered: the page still changes.
    }
    // A `?lang=` in the address would bring the old language back on reload.
    const url = new URL(location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', lang);
      history.replaceState(history.state, '', url);
    }
  }
}
