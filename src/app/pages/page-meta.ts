import { effect, inject } from '@angular/core';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { LANGUAGES } from '../i18n/languages';

export type PageKey = keyof Messages['pages'];

/**
 * Gives the page its title and description, in the page's language: the site's own for the
 * home page (`null`), "<page> · Living Horizon" for the others. Call it from a page's
 * constructor. Also tells search engines the page's address in this language (`?lang=fr`,
 * none for English) and in each of the others, as `sitemap.xml` does.
 */
export function pageMeta(page: PageKey | null) {
  const i18n = inject(I18n);
  effect(() => {
    const t = i18n.t();
    const title = page ? `${t.pages[page].title} · Living Horizon` : t.meta.title;
    const description = page ? t.pages[page].description : t.meta.description;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    setLink('canonical', null, address(i18n.lang()));
    for (const { code } of LANGUAGES) setLink('alternate', code, address(code));
    setLink('alternate', 'x-default', address('en'));
  });
}

/**
 * This page's address in a language, without the `#` of a section, and with the closing `/`
 * GitHub Pages gives a folder (`…/mods/`), as in `sitemap.xml`.
 */
function address(lang: string): string {
  const url = new URL(location.pathname.replace(/\/?$/, '/'), location.origin);
  if (lang !== 'en') url.searchParams.set('lang', lang);
  return url.href;
}

/** A `<link>` of the head, made the first time. */
function setLink(rel: string, hreflang: string | null, href: string) {
  const selector = `link[rel="${rel}"]` + (hreflang ? `[hreflang="${hreflang}"]` : '');
  let link = document.head.querySelector<HTMLLinkElement>(selector);
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    if (hreflang) link.hreflang = hreflang;
    document.head.append(link);
  }
  link.href = href;
}
