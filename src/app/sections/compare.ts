import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SITE } from '../config/site';
import { BeforeAfter } from './before-after';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

const SCENES = [
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
] as const;

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
          @for (s of scenes; track s.id) {
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
          <lh-before-after [scene]="active()" [description]="current().text" />
        </div>

        <div class="legend" lhReveal>
          <p class="scene-text">{{ current().text }}</p>
          <ul>
            <li><span class="sw near"></span> Your render distance — alive either way</li>
            <li><span class="sw far"></span> Far terrain — empty without the mod</li>
          </ul>
        </div>

        @if (illustrated()) {
          <p class="note" lhReveal>
            <lh-icon name="film" />
            <span
              >Stylised illustration of the effect. In-game screenshots and clips are on the way —
              got a good one?
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
  protected readonly scenes = SCENES;
  protected readonly active = signal<(typeof SCENES)[number]['id']>('village');
  protected readonly current = computed(() => SCENES.find((s) => s.id === this.active())!);
  protected readonly illustrated = computed(() => !SITE.screenshots[this.active()]);
}
