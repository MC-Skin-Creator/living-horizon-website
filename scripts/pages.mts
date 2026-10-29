/*
 * Gives each page of the site but the home page an `index.html` of its own, so GitHub Pages
 * serves `…/mods/` and the others when they are opened directly instead of a 404. Each is the
 * home page's, one folder down: its base goes up a folder, and the app's router shows the page
 * the address names. Run after `ng build` (`npm run build` does).
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';

/** Every path of `src/app/app.routes.ts` but the home page. */
const PAGES = ['mods', 'modpacks', 'changelog'];

const OUT = new URL('../dist/living-horizon-website/browser/', import.meta.url);

const html = await readFile(new URL('index.html', OUT), 'utf8');
if (!html.includes('<base href="./">')) {
  throw new Error('pages: index.html has no <base href="./">; build with --base-href ./');
}
const nested = html.replace('<base href="./">', '<base href="../">');

for (const page of PAGES) {
  const dir = new URL(`${page}/`, OUT);
  await mkdir(dir, { recursive: true });
  await writeFile(new URL('index.html', dir), nested);
}
console.log(`pages: ${PAGES.map((p) => `${p}/index.html`).join(', ')}`);
