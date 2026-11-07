import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Changelog } from '../sections/changelog';
import { Compare } from '../sections/compare';
import { Compatibility } from '../sections/compatibility';
import { Concept } from '../sections/concept';
import { Download } from '../sections/download';
import { Faq } from '../sections/faq';
import { Features } from '../sections/features';
import { Help } from '../sections/help';
import { Hero } from '../sections/hero';
import { Modpacks } from '../sections/modpacks';
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
    Help,
    Changelog,
    Faq,
  ],
  // The slider first: one look sells the mod. Download right after what a player needs to
  // decide, then the modpacks that already ship it, the technical sections below them. Each
  // section stays short: a feature's details open in a window, the versions table is folded,
  // and the compatible mods, every modpack and the whole changelog have pages of their own.
  template: `
    <lh-hero />
    <lh-compare />
    <lh-concept />
    <lh-features />
    <lh-compatibility />
    <lh-download />
    <lh-modpacks />
    <lh-help />
    <lh-changelog />
    <lh-faq />
  `,
})
export class Home {
  constructor() {
    pageMeta(null);
  }
}
