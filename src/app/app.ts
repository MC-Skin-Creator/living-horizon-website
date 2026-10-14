import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Changelog } from './sections/changelog';
import { Compare } from './sections/compare';
import { Compatibility } from './sections/compatibility';
import { Concept } from './sections/concept';
import { Download } from './sections/download';
import { Footer } from './sections/footer';
import { Hero } from './sections/hero';
import { Nav } from './sections/nav';
import { Performance } from './sections/performance';
import { Testers } from './sections/testers';

@Component({
  selector: 'lh-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Nav,
    Hero,
    Concept,
    Compare,
    Compatibility,
    Performance,
    Testers,
    Changelog,
    Download,
    Footer,
  ],
  template: `
    <lh-nav />
    <main>
      <lh-hero />
      <lh-concept />
      <lh-compare />
      <lh-compatibility />
      <lh-performance />
      <lh-testers />
      <lh-changelog />
      <lh-download />
    </main>
    <lh-footer />
  `,
})
export class App {}
