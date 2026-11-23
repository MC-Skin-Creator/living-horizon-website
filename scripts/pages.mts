/*
 * Gives each page of the site but the home page an `index.html` of its own, so GitHub Pages
 * serves `…/mods/` and the others when they are opened directly instead of a 404. Each is the
 * home page's, one folder down: its base goes up a folder, and the app's router shows the page
 * the address names. Run after `ng build` (`npm run build` does).
 *
 * Each question of the FAQ also gets a page in every language, `faq/fr/frame-rate/`: the link
 * its "Copy link" button gives. Discord and other apps read no script, only the page's tags,
 * so this page carries the question and its answer for their preview, and sends a visitor on
 * to the home page with the question open (`?lang=fr#faq-frame-rate`).
 *
 * Each short link of `SHORT_LINKS` (`src/app/config/site.ts`) gets a page that sends the
 * visitor straight on: `…/curseforge` opens the mod's CurseForge page.
 *
 * `SITE_URL` (the deploy workflow sets it from GitHub Pages) makes the preview pictures'
 * addresses absolute, as some apps want them, and gives search engines `sitemap.xml` and its
 * line in `robots.txt`: the pages and each of their languages (`?lang=fr`).
 */
import { build } from 'esbuild';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import type { Messages } from '../src/app/i18n/en.ts';
import type { Block, Segment } from '../src/app/i18n/rich.ts';

/** Every path of `src/app/app.routes.ts` but the home page. */
const PAGES = ['mods', 'modpacks', 'changelog'];

const OUT = new URL('../dist/living-horizon-website/browser/', import.meta.url);
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SITE_URL = process.env['SITE_URL']?.replace(/\/?$/, '/');

let html = await readFile(new URL('index.html', OUT), 'utf8');
if (!html.includes('<base href="./">')) {
  throw new Error('pages: index.html has no <base href="./">; build with --base-href ./');
}
if (SITE_URL) {
  html = html.replace('content="img/og-cover.jpg"', `content="${SITE_URL}img/og-cover.jpg"`);
  await writeFile(new URL('index.html', OUT), html);
}
const nested = html.replace('<base href="./">', '<base href="../">');

for (const page of PAGES) {
  const dir = new URL(`${page}/`, OUT);
  await mkdir(dir, { recursive: true });
  await writeFile(new URL('index.html', dir), nested);
}
console.log(`pages: ${PAGES.map((p) => `${p}/index.html`).join(', ')}`);

// The dictionaries, bundled the way the app is: their imports carry no file extension.
const bundle = await build({
  stdin: {
    contents: `
      export { LANGUAGES } from './src/app/i18n/languages';
      export { FAQ_GROUPS, faqPage, faqSlug } from './src/app/sections/faq-groups';
      export { SHORT_LINKS } from './src/app/config/site';
      import { en } from './src/app/i18n/en';
      import { fr } from './src/app/i18n/fr';
      import { de } from './src/app/i18n/de';
      import { es } from './src/app/i18n/es';
      import { it } from './src/app/i18n/it';
      import { ptBR } from './src/app/i18n/pt-br';
      import { pl } from './src/app/i18n/pl';
      import { tr } from './src/app/i18n/tr';
      import { ru } from './src/app/i18n/ru';
      import { uk } from './src/app/i18n/uk';
      import { zhCN } from './src/app/i18n/zh-cn';
      import { zhTW } from './src/app/i18n/zh-tw';
      import { ja } from './src/app/i18n/ja';
      import { ko } from './src/app/i18n/ko';
      export const DICTIONARIES = {
        en, fr, de, es, it, 'pt-BR': ptBR, pl, tr, ru, uk,
        'zh-CN': zhCN, 'zh-TW': zhTW, ja, ko,
      };
    `,
    resolveDir: ROOT,
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
  logLevel: 'error',
});
const i18n = (await import(
  'data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64')
)) as {
  LANGUAGES: readonly { code: string; mod: string; spaceless?: boolean }[];
  FAQ_GROUPS: { questions: string[] }[];
  faqPage: (lang: string, key: string) => string;
  faqSlug: (key: string) => string;
  DICTIONARIES: Record<string, Messages>;
  SHORT_LINKS: Record<string, string>;
};

const escape = (text: string) =>
  text.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

const segment = (s: Segment) =>
  typeof s === 'string' ? s : 'em' in s ? s.em : 'code' in s ? s.code : s.text;

/** An answer as plain text, its paragraphs and list items one after the other. */
function plain(blocks: Block[], spaceless: boolean): string[] {
  return blocks
    .flatMap((b) =>
      Array.isArray(b)
        ? [b.map(segment).join('')]
        : b.list.map((item) => item.map(segment).join('')),
    )
    .map((t) => t.replace(/\s+/g, spaceless ? '' : ' ').trim());
}

/** At most `max` characters, cut between two words (anywhere in Chinese and Japanese). */
function cut(text: string, max: number, spaceless: boolean): string {
  if (text.length <= max) return text;
  const head = text.slice(0, max - 1);
  const end = spaceless ? head.length : head.lastIndexOf(' ');
  return head.slice(0, end > max / 2 ? end : head.length).replace(/[\s,.;:،、，。]+$/, '') + '…';
}

let count = 0;
for (const lang of i18n.LANGUAGES) {
  const t = i18n.DICTIONARIES[lang.code];
  const spaceless = !!lang.spaceless;
  const [base, region] = lang.mod.split('_');
  for (const key of i18n.FAQ_GROUPS.flatMap((g) => g.questions)) {
    const item = t.faq.questions[key as keyof Messages['faq']['questions']];
    const path = i18n.faqPage(lang.code, key);
    const paragraphs = plain(item.a, spaceless);
    const description = cut(paragraphs.join(spaceless ? '' : ' '), 300, spaceless);
    // From `faq/<lang>/<question>/`, the home page is three folders up.
    const home = `../../../?lang=${lang.code}#faq-${i18n.faqSlug(key)}`;
    const image = `${SITE_URL ?? '../../../'}img/icon-512.png`;
    const page = `<!doctype html>
<html lang="${lang.code}">
  <head>
    <meta charset="utf-8" />
    <title>${escape(item.q)} · Living Horizon</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="${escape(description)}" />
    <meta name="robots" content="noindex" />
    <meta name="theme-color" content="#ffb35e" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Living Horizon · ${escape(t.faq.eyebrow)}" />
    <meta property="og:title" content="${escape(item.q)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta property="og:locale" content="${base}_${region.toUpperCase()}" />${
      SITE_URL ? `\n    <meta property="og:url" content="${SITE_URL}${path}" />` : ''
    }
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta property="og:image:alt" content="Living Horizon" />
    <meta name="twitter:card" content="summary" />
    <meta http-equiv="refresh" content="0; url=${escape(home)}" />
    <script>location.replace(${JSON.stringify(home)});</script>
  </head>
  <body>
    <h1>${escape(item.q)}</h1>
${paragraphs.map((p) => `    <p>${escape(p)}</p>`).join('\n')}
    <p><a href="${escape(home)}">Living Horizon</a></p>
  </body>
</html>
`;
    const dir = new URL(path, OUT);
    await mkdir(dir, { recursive: true });
    await writeFile(new URL('index.html', dir), page);
    count++;
  }
}
console.log(`pages: ${count} FAQ pages (faq/<lang>/<question>/index.html)`);

// Short links: a page that sends on at once, which search engines read as a redirect.
for (const [name, target] of Object.entries(i18n.SHORT_LINKS)) {
  if (PAGES.includes(name) || name === 'faq') {
    throw new Error(`pages: the short link "${name}" is a page of the site`);
  }
  const url = escape(target);
  const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Living Horizon · ${escape(name)}</title>
    <meta name="robots" content="noindex" />
    <link rel="canonical" href="${url}" />
    <meta http-equiv="refresh" content="0; url=${url}" />
    <script>location.replace(${JSON.stringify(target)});</script>
  </head>
  <body>
    <p><a href="${url}">${url}</a></p>
  </body>
</html>
`;
  const dir = new URL(`${name}/`, OUT);
  await mkdir(dir, { recursive: true });
  await writeFile(new URL('index.html', dir), page);
}
console.log(`pages: short links ${Object.keys(i18n.SHORT_LINKS).join(', ')}`);

// For search engines: every page, in every language, each naming the others.
let robots = 'User-agent: *\nAllow: /\n';
if (SITE_URL) {
  const address = (path: string, lang: string) =>
    `${SITE_URL}${path}${lang === 'en' ? '' : `?lang=${lang}`}`;
  const urls = ['', ...PAGES.map((p) => `${p}/`)].flatMap((path) =>
    i18n.LANGUAGES.map(
      ({ code }) => `  <url>
    <loc>${escape(address(path, code))}</loc>
${i18n.LANGUAGES.map(
  (l) =>
    `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${escape(address(path, l.code))}"/>`,
).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${escape(address(path, 'en'))}"/>
  </url>`,
    ),
  );
  await writeFile(
    new URL('sitemap.xml', OUT),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`,
  );
  robots += `\nSitemap: ${SITE_URL}sitemap.xml\n`;
  console.log(`pages: sitemap.xml, ${urls.length} addresses`);
} else {
  console.log('pages: no SITE_URL, no sitemap.xml');
}
await writeFile(new URL('robots.txt', OUT), robots);
