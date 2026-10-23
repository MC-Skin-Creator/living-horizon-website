import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { loadInitialLanguage } from './app/i18n/i18n';

// The visitor's language first, so the page never shows English before it.
loadInitialLanguage()
  .then(() => bootstrapApplication(App, appConfig))
  .catch((err) => console.error(err));
