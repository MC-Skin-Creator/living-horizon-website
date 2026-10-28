# CLAUDE.md

Guidance for Claude Code when working in this repository: the one-page landing site of
[Living Horizon](https://github.com/MC-Skin-Creator/living-horizon), in Angular, fully static,
deployed to GitHub Pages. The README explains where the data comes from and how each picture
is made; read it before changing a section.

Everything in the repository (code, comments, docs, commits) is in **English**. The texts
the visitor reads are the exception: they live in the dictionaries of `src/app/i18n/`.

## Localization: every change updates every language

The site is translated into the 14 languages the mod ships in (`src/app/i18n/languages.ts`):
English, French, German, Spanish, Italian, Brazilian Portuguese, Polish, Turkish, Russian,
Ukrainian, Simplified and Traditional Chinese, Japanese and Korean. The visitor picks one in
the nav; the browser's language is the default, and `?lang=fr` forces one.

- **Never write a visible text in a template or a component.** Headings, paragraphs, buttons,
  `alt`, `title`, `aria-label`: all of them come from the dictionary (`i18n.t()`).
- **Adding or changing a text = updating every language in the same change.** Write it in
  `src/app/i18n/en.ts` (the source, whose shape is the `Messages` type), then in each of the 13
  other files (`fr.ts`, `de.ts`, `es.ts`, `it.ts`, `pt-br.ts`, `pl.ts`, `tr.ts`, `ru.ts`, `uk.ts`,
  `zh-cn.ts`, `zh-tw.ts`, `ja.ts`, `ko.ts`). A key missing from one of them fails the build;
  a changed English sentence does not, so never leave the old translation behind it.
- Names of the mod's settings (presets, *Mob Render Distance*, *Simplified Entities*,
  *(offline)*…) use the mod's own translation, from `assets/livinghorizon/lang/<lang>.json` in
  the mod repository; game words use the official Minecraft translation. Keep the mod's register
  (French "tu", German "du"…).
- A sentence around a link, logo or highlighted word is a `{ before, …, after }` object, so each
  language orders it its own way. The FAQ's longer answers are arrays of pieces instead
  (`src/app/i18n/rich.ts`): each language keeps the same links, settings and code, in its own
  order. Numbers go through functions, plurals through `plural()` (`src/app/i18n/plural.ts`).
  Dates and numbers are formatted by the pipes of `src/app/shared/format.ts` in the page's
  language: never `Intl` with a fixed `'en'`.
- New screenshots (`SITE.screenshots`) and benchmarks (`SITE.benchmarks`) take their texts from
  `compare.shots` and `performance.setups` of the dictionaries: add them in every language.
- Text that comes from the mod repository (the changelog) is shown in the visitor's language
  when the mod has it (`SITE.changelogLanguages`, `changelog/<code>.md`), else in English.
- A new language: add it to `LANGUAGES` and `DICTIONARIES` (`src/app/i18n/i18n.ts`) and write
  its dictionary. Check long languages (German) and CJK in the nav and the tables at phone width.

## Commands

Node 24 (Angular 22 needs 22.22.3+ or 24.15+).

```bash
npm ci
npm start           # http://localhost:4200, ?lang=de to see a language
npm run build       # also type-checks every dictionary against en.ts
npx prettier --write "src/**/*.{ts,scss}"
```

Commits follow conventional commits (`feat:`, `fix:`…), short subject, short body.
