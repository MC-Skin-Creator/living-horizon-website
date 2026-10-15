import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SITE, Screenshots } from '../config/site';
import { BeforeAfter, SliderScene } from './before-after';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/** The stylised illustrations, after the real screenshots. */
const SCENES: { id: SliderScene; title: string; text: string }[] = [
  {
    id: 'village',
    title: 'Village on the plains',
    text: 'Villagers, a golem and grazing animals around a far-off village.',
  },
  {
    id: 'ridge',
    title: 'Riders on the ridge',
    text: 'Other players and their horses on the hills, name tags and all.',
  },
  {
    id: 'coast',
    title: 'Coast at midday',
    text: 'Boats out at sea, villagers on the far shore, gulls over the water.',
  },
];

interface Tab {
  id: string;
  title: string;
  text: string;
  shots: Screenshots | null;
  scene: SliderScene | null;
}

const TABS: Tab[] = [
  ...SITE.screenshots.map((s) => ({ ...s, shots: s, scene: null })),
  ...SCENES.map((s) => ({ ...s, shots: null, scene: s.id })),
];

@Component({
  selector: 'lh-compare',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BeforeAfter, Icon, Reveal],
  template: `
    <section class="section" id="compare">
      <div class="glow" aria-hidden="true"></div>
      <div class="container">
        <header class="section-head center" lhReveal>
          <span class="eyebrow">Before / after</span>
          <h2>Same view. <span class="accent">One mod.</span></h2>
          <p>
            Drag the handle. On the left, the far terrain is there but empty. On the right, Living
            Horizon brings it back to life.
          </p>
        </header>

        <div class="tabs" role="tablist" aria-label="Scenes" lhReveal>
          @for (s of tabs; track s.id) {
            <button
              type="button"
              role="tab"
              [attr.aria-selected]="active() === s.id"
              [class.on]="active() === s.id"
              (click)="active.set(s.id)"
            >
              {{ s.title }}
            </button>
          }
        </div>

        <div class="stage" lhReveal>
          <lh-before-after
            [shots]="current().shots"
            [scene]="current().scene"
            [description]="current().text"
          />
        </div>

        <div class="legend" lhReveal>
          <p class="scene-text">{{ current().text }}</p>
          @if (illustrated()) {
            <ul>
              <li><span class="sw near"></span> Your render distance — alive either way</li>
              <li><span class="sw far"></span> Far terrain — empty without the mod</li>
            </ul>
          }
        </div>

        @if (illustrated()) {
          <p class="note" lhReveal>
            <lh-icon name="film" />
            <span
              >Stylised illustration of the effect. The first tabs are real in-game screenshots —
              got a good one of your own?
              <a [href]="site.links.discord" target="_blank" rel="noopener">Share it on Discord</a
              >.</span
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
  protected readonly tabs = TABS;
  protected readonly active = signal(TABS[0].id);
  protected readonly current = computed(() => TABS.find((s) => s.id === this.active())!);
  protected readonly illustrated = computed(() => !this.current().shots);
}
