import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Changelog } from './sections/changelog';
import { Compare } from './sections/compare';
import { Compatibility } from './sections/compatibility';
import { Concept } from './sections/concept';
import { Contribute } from './sections/contribute';
import { Download } from './sections/download';
import { Faq } from './sections/faq';
import { Features } from './sections/features';
import { Footer } from './sections/footer';
import { Hero } from './sections/hero';
import { Modpacks } from './sections/modpacks';
import { Nav } from './sections/nav';
import { Performance } from './sections/performance';
import { Testers } from './sections/testers';

@Component({
  selector: 'lh-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Nav,
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
    Footer,
  ],
  // The slider first: one look sells the mod. Download right after what a player needs to
  // decide, then the modpacks that already ship it, the technical sections below them.
  template: `
    <lh-nav />
    <main>
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
    </main>
    <lh-footer />
  `,
})
export class App {}
