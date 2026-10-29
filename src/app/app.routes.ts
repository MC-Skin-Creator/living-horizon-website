import { Routes } from '@angular/router';
import { ChangelogPage } from './pages/changelog-page';
import { Home } from './pages/home';
import { ModpacksPage } from './pages/modpacks-page';
import { ModsPage } from './pages/mods-page';

/**
 * The site's pages. Each path other than the home page gets an `index.html` of its own at
 * build time (`scripts/pages.mts`), so GitHub Pages serves it when opened directly: keep
 * `PAGES` there in step with this list.
 */
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'mods', component: ModsPage },
  { path: 'modpacks', component: ModpacksPage },
  { path: 'changelog', component: ChangelogPage },
  { path: '**', redirectTo: '' },
];
