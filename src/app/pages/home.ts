import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Changelog } from '../sections/changelog';
import { Compare } from '../sections/compare';
import { Compatibility } from '../sections/compatibility';
import { Concept } from '../sections/concept';
import { Contribute } from '../sections/contribute';
import { Download } from '../sections/download';
import { Faq } from '../sections/faq';
import { Features } from '../sections/features';
import { Hero } from '../sections/hero';
import { Modpacks } from '../sections/modpacks';
import { Performance } from '../sections/performance';
import { Testers } from '../sections/testers';
import { pageMeta } from './page-meta';

@Component({
  selector: 'lh-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Hero,
    Compare,
    Concept,
    Features,
    Compatibility,
    Download,
    Modpacks,
    Performance,
    Testers,
    Contribute,
    Changelog,
    Faq,
  ],
  // The slider first: one look sells the mod. Download right after what a player needs to
  // decide, then the modpacks that already ship it, the technical sections below them. The
  // compatible mods, every modpack and the whole changelog have pages of their own.
  template: `
    <lh-hero />
    <lh-compare />
    <lh-concept />
    <lh-features />
    <lh-compatibility />
    <lh-download />
    <lh-modpacks />
    <lh-performance />
    <lh-testers />
    <lh-contribute />
    <lh-changelog />
    <lh-faq />
  `,
})
export class Home {
  constructor() {
    pageMeta(null);
  }
}
