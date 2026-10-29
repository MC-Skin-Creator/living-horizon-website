import { effect, inject } from '@angular/core';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';

export type PageKey = keyof Messages['pages'];

/**
 * Gives the page its title and description, in the page's language: the site's own for the
 * home page (`null`), "<page> · Living Horizon" for the others. Call it from a page's
 * constructor.
 */
export function pageMeta(page: PageKey | null) {
  const i18n = inject(I18n);
  effect(() => {
    const t = i18n.t();
    const title = page ? `${t.pages[page].title} · Living Horizon` : t.meta.title;
    const description = page ? t.pages[page].description : t.meta.description;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  });
}
