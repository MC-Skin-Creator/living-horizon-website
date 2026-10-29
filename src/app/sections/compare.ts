import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SITE, Screenshots } from '../config/site';
import { I18n } from '../i18n/i18n';
import { BeforeAfter, SliderScene } from './before-after';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/** The stylised illustrations, after the real screenshots; texts in `compare.scenes`. */
const SCENES: SliderScene[] = ['village', 'ridge', 'coast'];

interface Tab {
  id: string;
  shots: Screenshots | null;
  scene: SliderScene | null;
}

const TABS: Tab[] = [
  ...SITE.screenshots.map((s) => ({ id: s.id, shots: s, scene: null })),
  ...SCENES.map((id) => ({ id, shots: null, scene: id })),
];

@Component({
  selector: 'lh-compare',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BeforeAfter, Icon, Reveal],
  template: `
    @let t = i18n.t().compare;
    <section class="section" id="compare">
      <div class="glow" aria-hidden="true"></div>
      <div class="container">
        <header class="section-head center" lhReveal>
          <span class="eyebrow">{{ t.eyebrow }}</span>
          <h2>
            {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
          </h2>
          <p>{{ t.text }}</p>
        </header>

        <div class="tabs" role="tablist" [attr.aria-label]="t.tabs" lhReveal>
          @for (s of tabs; track s.id) {
            <button
              type="button"
              role="tab"
              [attr.aria-selected]="active() === s.id"
              [class.on]="active() === s.id"
              (click)="active.set(s.id)"
            >
              {{ texts()[s.id].title }}
            </button>
          }
        </div>

        <div class="stage" lhReveal>
          <lh-before-after
            [shots]="current().shots"
            [scene]="current().scene"
            [description]="texts()[current().id].text"
          />
        </div>

        <div class="legend" lhReveal>
          <p class="scene-text">{{ texts()[current().id].text }}</p>
          @if (illustrated()) {
            <ul>
              <li><span class="sw near"></span> {{ t.legendNear }}</li>
              <li><span class="sw far"></span> {{ t.legendFar }}</li>
            </ul>
          }
        </div>

        @if (illustrated()) {
          <p class="note" lhReveal>
            <lh-icon name="film" />
            <span
              >{{ t.note.before }}
              <a [href]="site.links.discord" target="_blank" rel="noopener">{{ t.note.link }}</a
              >{{ t.note.after }}</span
            >
          </p>
        }
      </div>
    </section>
  `,
  styleUrl: './compare.scss',
})
export class Compare {
  protected readonly site = SITE;
  protected readonly i18n = inject(I18n);
  protected readonly tabs = TABS;
  /** Title and sentence of each tab, screenshots and illustrations alike. */
  protected readonly texts = computed<Record<string, { title: string; text: string }>>(() => ({
    ...this.i18n.t().compare.shots,
    ...this.i18n.t().compare.scenes,
  }));
  protected readonly active = signal(TABS[0].id);
  protected readonly current = computed(() => TABS.find((s) => s.id === this.active())!);
  protected readonly illustrated = computed(() => !this.current().shots);
}
