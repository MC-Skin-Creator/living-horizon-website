import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Changelog } from '../sections/changelog';
import { pageMeta } from './page-meta';

@Component({
  selector: 'lh-changelog-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Changelog],
  template: `<lh-changelog [page]="true" />`,
})
export class ChangelogPage {
  constructor() {
    pageMeta('changelog');
  }
}
