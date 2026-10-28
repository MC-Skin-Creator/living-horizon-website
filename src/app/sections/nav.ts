import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Injector,
  afterNextRender,
  effect,
  inject,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { SITE } from '../config/site';
import { ProjectData } from '../data/project-data';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { Icon } from '../shared/icon';
import { LangPicker } from '../shared/lang-picker';

@Component({
  selector: 'lh-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, LangPicker],
  host: {
    '[class.scrolled]': 'scrolled()',
    '[class.open]': 'open()',
    '[class.compact]': 'compact()',
  },
  template: `
    @let t = i18n.t();
    <nav #bar class="container bar" [attr.aria-label]="t.nav.label">
      <a class="brand" href="#top" (click)="open.set(false)">
        <img src="img/icon-128.webp" alt="" width="34" height="34" />
        <span>Living Horizon</span>
        <span class="tag">{{ t.nav.tag }}</span>
      </a>
      <button
        class="toggle"
        type="button"
        [attr.aria-expanded]="open()"
        aria-controls="nav-links"
        (click)="open.set(!open())"
      >
        <lh-icon [name]="open() ? 'close' : 'menu'" />
        <span class="visually-hidden">{{ t.nav.menu }}</span>
      </button>
      <div class="links" id="nav-links">
        @for (link of links; track link.href) {
          <a [href]="link.href" (click)="open.set(false)">{{ link.label(t) }}</a>
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
          <lh-icon name="download" /> {{ t.nav.download(data.version()) }}
        </a>
        <lh-lang-picker class="lang-in-menu" />
      </div>
      <lh-lang-picker class="lang" />
    </nav>
  `,
  styleUrl: './nav.scss',
})
export class Nav {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);
  protected readonly i18n = inject(I18n);
  protected readonly scrolled = signal(false);
  protected readonly open = signal(false);
  /** The links do not fit on one line: the menu button shows them. */
  protected readonly compact = signal(window.innerWidth <= COMPACT_BELOW);
  /** Width the full bar needs in the current language, once seen too wide. */
  private needed = 0;
  private readonly bar = viewChild.required<ElementRef<HTMLElement>>('bar');
  private readonly injector = inject(Injector);
  protected readonly links: { href: string; label: (t: Messages) => string }[] = [
    { href: '#features', label: (t) => t.nav.features },
    { href: '#compatibility', label: (t) => t.nav.compatibility },
    { href: '#changelog', label: (t) => t.common.changelog },
    { href: '#testers', label: (t) => t.nav.testers },
    { href: '#contribute', label: (t) => t.nav.contribute },
    { href: '#faq', label: (t) => t.nav.faq },
  ];

  constructor() {
    // New labels, new width: measure again.
    effect(() => {
      this.i18n.lang();
      untracked(() => {
        this.needed = 0;
        afterNextRender(() => this.fit(), { injector: this.injector });
      });
    });
  }

  @HostListener('window:scroll')
  protected onScroll() {
    this.scrolled.set(window.scrollY > 24);
  }

  @HostListener('window:resize')
  protected fit() {
    if (window.innerWidth <= COMPACT_BELOW) {
      this.compact.set(true);
      return;
    }
    const bar = this.bar().nativeElement;
    if (!this.compact()) {
      // The brand and the links never shrink: too wide shows as an overflow.
      if (bar.scrollWidth > bar.clientWidth + 1) {
        this.needed = bar.scrollWidth;
        this.compact.set(true);
      }
    } else if (!this.needed || bar.clientWidth >= this.needed) {
      // Unknown or wide enough now: show the links, and check them once drawn.
      this.compact.set(false);
      this.open.set(false);
      afterNextRender(() => this.fit(), { injector: this.injector });
    }
  }
}

/** Below this window width the links never fit, whatever the language. */
const COMPACT_BELOW = 1140;
