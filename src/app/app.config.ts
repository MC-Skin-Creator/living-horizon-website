import { APP_BASE_HREF } from '@angular/common';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // A new page opens at its top; a link to a section of the home page scrolls to it.
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    ),
    // The site's folder, as the browser resolved the page's base. Angular would resolve a
    // relative base once more: `../` on `…/mods/` would then point above the site.
    { provide: APP_BASE_HREF, useFactory: () => new URL(document.baseURI).pathname },
  ],
};
