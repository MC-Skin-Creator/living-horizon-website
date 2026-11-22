import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { SITE } from '../config/site';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { SectionHead } from '../shared/section-head';
import { RichText } from '../shared/rich-text';

type Groups = Messages['faq']['groups'];
type Questions = Messages['faq']['questions'];

/** The groups and their questions, in the order of the mod's README. */
const GROUPS: { key: keyof Groups; questions: (keyof Questions)[] }[] = [
  { key: 'how', questions: ['visual', 'real', 'simulation', 'range'] },
  { key: 'compatibility', questions: ['mods', 'modMobs', 'farTerrain'] },
  { key: 'performance', questions: ['frameRate', 'choose', 'world'] },
  { key: 'multiplayer', questions: ['server', 'paper', 'nothing', 'cheat'] },
  { key: 'downloads', questions: ['bedrock', 'version', 'modpack', 'abandoned'] },
  { key: 'ai', questions: ['ai', 'modrinth'] },
];

/** What tells that the visitor scrolls on their own. */
const USER_SCROLL = ['wheel', 'touchstart', 'keydown', 'mousedown'];

/** The id of a question, and the end of its link: `frameRate` → `faq-frame-rate`. */
const anchor = (key: string) => 'faq-' + key.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());

@Component({
  selector: 'lh-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, RichText, SectionHead],
  template: `
    @let t = i18n.t().faq;
    <section class="section" id="faq">
      <div class="container">
        <header lhHead [texts]="t" [text]="t.text" lhReveal></header>

        <div class="groups">
          @for (g of groups; track g.key) {
            <section class="group" lhReveal [attr.aria-labelledby]="'faq-group-' + g.key">
              <h3 [id]="'faq-group-' + g.key">{{ t.groups[g.key] }}</h3>
              <div class="questions">
                @for (key of g.questions; track key) {
                  @let item = t.questions[key];
                  @let id = anchor(key);
                  <details class="card question" [id]="id">
                    <summary>
                      <span>{{ item.q }}</span>
                      <lh-icon name="plus" />
                    </summary>
                    <lh-rich class="answer" [blocks]="item.a" />
                    <!-- The link that opens this question, to share it (on Discord…). -->
                    <a class="share" [href]="link(id)" (click)="copy($event, id)">
                      <lh-icon [name]="copied() === id ? 'check' : 'link'" />
                      <span aria-live="polite">{{ copied() === id ? t.copied : t.copyLink }}</span>
                    </a>
                  </details>
                }
              </div>
            </section>
          }
        </div>

        <div class="actions" lhReveal>
          <a class="btn primary" [href]="site.links.discord" target="_blank" rel="noopener">
            <lh-icon name="discord" /> {{ t.ask }}
          </a>
          <a class="btn" [href]="site.links.issues" target="_blank" rel="noopener">
            <lh-icon name="message" /> {{ t.issue }}
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly site = SITE;
  protected readonly i18n = inject(I18n);
  protected readonly groups = GROUPS;
  protected readonly anchor = anchor;
  /** The question whose link was just copied. */
  protected readonly copied = signal<string | null>(null);

  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    // A link to a question (`#faq-frame-rate`) opens it, as the page opens or later.
    const injector = inject(Injector);
    inject(ActivatedRoute)
      .fragment.pipe(takeUntilDestroyed())
      .subscribe((fragment) => {
        if (fragment?.startsWith('faq-')) afterNextRender(() => this.show(fragment), { injector });
      });
  }

  /** The question's link: the home page, with its id. */
  protected link(id: string): string {
    return new URL('#' + id, this.document.baseURI).href;
  }

  /** Copies the question's link; where the browser refuses, the address bar shows it. */
  protected async copy(event: Event, id: string) {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(this.link(id));
    } catch {
      this.document.location.hash = id;
      return;
    }
    this.copied.set(id);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.copied.set(null), 2000);
  }

  private show(id: string) {
    const question = this.host.querySelector<HTMLDetailsElement>(`details#${CSS.escape(id)}`);
    if (!question) return;
    question.open = true;
    for (const other of this.host.querySelectorAll('.linked')) other.classList.remove('linked');
    question.classList.add('linked');
    // The question's group fades in as it scrolls into view; it is already in view.
    question.closest('.reveal')?.classList.add('is-visible');
    // The sections above it still grow as the page opens (data, pictures): it is brought
    // back to the top for a few seconds, until the visitor scrolls on their own.
    const body = this.document.body;
    const scroll = () => question.scrollIntoView({ block: 'start', behavior: 'instant' });
    const observer = new ResizeObserver(scroll);
    const stop = () => {
      observer.disconnect();
      for (const type of USER_SCROLL) removeEventListener(type, stop);
    };
    for (const type of USER_SCROLL) addEventListener(type, stop, { passive: true, once: true });
    observer.observe(body);
    setTimeout(stop, 4000);
    scroll();
  }
}
