import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Changelog } from './sections/changelog';
import { Compare } from './sections/compare';
import { Compatibility } from './sections/compatibility';
import { Concept } from './sections/concept';
import { Contribute } from './sections/contribute';
import { Download } from './sections/download';
import { Features } from './sections/features';
import { Footer } from './sections/footer';
import { Hero } from './sections/hero';
import { Nav } from './sections/nav';
import { Performance } from './sections/performance';
import { Servers } from './sections/servers';
import { Testers } from './sections/testers';

@Component({
  selector: 'lh-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Nav,
    Hero,
    Concept,
    Features,
    Compare,
    Servers,
    Compatibility,
    Performance,
    Testers,
    Contribute,
    Changelog,
    Download,
    Footer,
  ],
  template: `
    <lh-nav />
    <main>
      <lh-hero />
      <lh-concept />
      <lh-features />
      <lh-compare />
      <lh-servers />
      <lh-compatibility />
      <lh-performance />
      <lh-testers />
      <lh-contribute />
      <lh-changelog />
      <lh-download />
    </main>
    <lh-footer />
  `,
})
export class App {}
