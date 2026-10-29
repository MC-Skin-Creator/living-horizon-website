import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './sections/footer';
import { Nav } from './sections/nav';

@Component({
  selector: 'lh-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Nav, RouterOutlet, Footer],
  template: `
    <lh-nav />
    <main>
      <router-outlet />
    </main>
    <lh-footer />
  `,
})
export class App {
  constructor() {
    // A link to a section of the home page stops it below the fixed navigation bar, as
    // `scroll-padding-top` does for the page's own links (`styles.scss`).
    inject(ViewportScroller).setOffset([0, 84]);
  }
}
