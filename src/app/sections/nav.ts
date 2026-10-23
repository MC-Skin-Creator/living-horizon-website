import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { SITE } from '../config/site';
import { ProjectData } from '../data/project-data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'lh-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  host: { '[class.scrolled]': 'scrolled()', '[class.open]': 'open()' },
  template: `
    <nav class="container bar" aria-label="Main">
      <a class="brand" href="#top" (click)="open.set(false)">
        <img src="img/icon-128.webp" alt="" width="34" height="34" />
        <span>Living Horizon</span>
        <span class="tag">beta</span>
      </a>
      <button
        class="toggle"
        type="button"
        [attr.aria-expanded]="open()"
        aria-controls="nav-links"
        (click)="open.set(!open())"
      >
        <lh-icon [name]="open() ? 'close' : 'menu'" />
        <span class="visually-hidden">Menu</span>
      </button>
      <div class="links" id="nav-links">
        @for (link of links; track link.href) {
          <a [href]="link.href" (click)="open.set(false)">{{ link.label }}</a>
        }
        <a
          class="icon-link"
          [href]="site.links.github"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <lh-icon name="github" />
        </a>
        <a class="btn primary small" href="#download" (click)="open.set(false)">
          <lh-icon name="download" /> Download v{{ data.version() }}
        </a>
      </div>
    </nav>
  `,
  styleUrl: './nav.scss',
})
export class Nav {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);
  protected readonly scrolled = signal(false);
  protected readonly open = signal(false);
  protected readonly links = [
    { href: '#features', label: 'Features' },
    { href: '#compare', label: 'Before / after' },
    { href: '#servers', label: 'Servers' },
    { href: '#compatibility', label: 'Compatibility' },
    { href: '#changelog', label: 'Changelog' },
    { href: '#testers', label: 'Testers' },
    { href: '#contribute', label: 'Contribute' },
  ];

  @HostListener('window:scroll')
  protected onScroll() {
    this.scrolled.set(window.scrollY > 24);
  }
}
