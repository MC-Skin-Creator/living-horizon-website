import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Modpacks } from '../sections/modpacks';
import { pageMeta } from './page-meta';

@Component({
  selector: 'lh-modpacks-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Modpacks],
  template: `<lh-modpacks [page]="true" />`,
})
export class ModpacksPage {
  constructor() {
    pageMeta('modpacks');
  }
}
