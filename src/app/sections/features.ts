import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { I18n } from '../i18n/i18n';
import { FigureView } from '../scene/figure';
import { MobView } from '../scene/mob';
import { Sprite } from '../scene/sprite';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { SectionHead } from '../shared/section-head';
import { RichText } from '../shared/rich-text';
import { Servers } from './servers';

type Stage = 'mobs' | 'players' | 'offline' | 'birds' | 'light';

/** The texts are in the dictionaries, under `features.items.<stage>`. */
interface Feature {
  stage: Stage;
  icon: IconName;
  /** Where it works is shown in the sun colour: the feature needs nothing at all. */
  everywhere?: boolean;
}

@Component({
  selector: 'lh-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FigureView,
    MobView,
    Sprite,
    Icon,
    Reveal,
    RichText,
    Servers,
    NgTemplateOutlet,
    SectionHead,
  ],
  template: `
    @let t = i18n.t().features;

    <!-- A small piece of the horizon: at the top of each card, and larger in its details. -->
    <ng-template #stageOf let-stage>
      <div class="stage" aria-hidden="true">
        @switch (stage) {
          @case ('mobs') {
            <div class="ground far">
              <lh-mob name="villager-cleric" [pixel]="1" [fade]="0.6" />
              <lh-mob name="horse-white" [pixel]="1" [fade]="0.6" [flip]="true" />
              <lh-mob name="pig" [pixel]="1" [fade]="0.6" />
              <lh-mob name="chicken" [pixel]="1" [fade]="0.6" [flip]="true" />
              @if (egg === 'mobs') {
                <lh-sprite class="egg" name="herobrine" [scale]="2" />
              }
            </div>
            <div class="ground near">
              <lh-mob name="villager-farmer" [pixel]="2" />
              <lh-mob name="cow" [pixel]="2" [flip]="true" />
              <lh-mob name="sheep" [pixel]="2" />
            </div>
          }
          @case ('players') {
            <div class="ground far">
              <span class="tagged"
                ><span class="nametag">Ari</span><lh-figure [skin]="1" [pixel]="1" [fade]="0.6"
              /></span>
              <lh-mob name="horse-brown" [pixel]="1" [fade]="0.6" />
              <span class="tagged"
                ><span class="nametag">Noa</span
                ><lh-figure [skin]="4" [pixel]="1" [fade]="0.6" [flip]="true"
              /></span>
            </div>
            <div class="ground near">
              <span class="tagged"
                ><span class="nametag">Mira</span><lh-figure [skin]="2" [pixel]="2"
              /></span>
              <span class="tagged"
                ><span class="nametag">Juno</span><lh-figure [skin]="5" [pixel]="2" [flip]="true"
              /></span>
            </div>
          }
          @case ('offline') {
            <div class="ground near">
              <lh-sprite name="house" [scale]="12" />
              <span class="tagged"
                ><span class="nametag"
                  >Steve <em>{{ t.offline }}</em></span
                ><lh-figure skin="steve" [pixel]="2"
              /></span>
              <lh-sprite name="tree" [scale]="12" />
            </div>
            <span class="moon"></span>
            @if (egg === 'offline') {
              <lh-sprite class="egg ghostly" name="ghost" [scale]="3" />
            }
          }
          @case ('birds') {
            <span class="flock v">
              @for (b of [0, 1, 2, 3, 4]; track b) {
                <lh-sprite name="bird" [scale]="3" />
              }
            </span>
            @if (egg === 'birds') {
              <lh-sprite class="egg ufo" name="ufo" [scale]="2" />
            }
            <span class="flock loose">
              @for (b of [0, 1, 2]; track b) {
                <lh-sprite name="bird" [scale]="2" />
              }
            </span>
            <div class="ground near">
              <lh-sprite name="tree" [scale]="10" />
              <lh-sprite name="treeSmall" [scale]="10" />
              <lh-sprite name="tree" [scale]="12" />
            </div>
          }
          @case ('light') {
            <div class="swap">
              <figure>
                <lh-mob name="horse-chestnut" [pixel]="2" />
                <figcaption>{{ t.near }}</figcaption>
              </figure>
              <lh-icon name="arrow-right" />
              <figure>
                <lh-mob name="horse-chestnut-small" [pixel]="2" [fade]="0.4" />
                <figcaption>{{ t.far }}</figcaption>
              </figure>
            </div>
          }
        }
      </div>
    </ng-template>

    <section class="section" id="features">
      <div class="container">
        <header lhHead [texts]="t" [text]="t.text" lhReveal></header>

        <div class="grid" [class.has-open]="opened() !== null">
          @for (f of features; track f.stage; let i = $index) {
            @let item = t.items[f.stage];
            @let open = opened() === i;
            <article
              class="card feature"
              [class]="'f-' + f.stage"
              [class.open]="open"
              [lhReveal]="(i % 3) * 80"
              [style.view-transition-name]="'feature-' + f.stage"
            >
              <ng-container *ngTemplateOutlet="stageOf; context: { $implicit: f.stage }" />

              <div class="body">
                <h3 [id]="'feature-' + f.stage"><lh-icon [name]="f.icon" /> {{ item.title }}</h3>
                <p>{{ item.text }}</p>
                @if (!open) {
                  <ul>
                    @for (p of item.points; track $index) {
                      <li><lh-icon name="check" /> {{ p }}</li>
                    }
                  </ul>
                }
                <p class="where" [class.everywhere]="f.everywhere">
                  <lh-icon [name]="f.everywhere ? 'sparkles' : 'users'" /> {{ item.where }}
                </p>
                @if (open) {
                  <div class="parts" [id]="'feature-details-' + f.stage">
                    @for (d of item.details; track $index) {
                      <section class="part">
                        <h4>{{ d.title }}</h4>
                        <lh-rich [blocks]="d.body" />
                      </section>
                    }
                  </div>
                }
                <button
                  type="button"
                  class="more"
                  [attr.aria-expanded]="open"
                  [attr.aria-controls]="open ? 'feature-details-' + f.stage : null"
                  (click)="toggle(i)"
                >
                  {{ open ? t.less : t.more }} <lh-icon [name]="open ? 'close' : 'arrow-right'" />
                </button>
              </div>
            </article>
          }
        </div>
      </div>

      <!-- Part of the features: multiplayer. -->
      <lh-servers />
    </section>
  `,
  styleUrl: './features.scss',
})
export class Features {
  protected readonly i18n = inject(I18n);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly changes = inject(ChangeDetectorRef);

  protected readonly features: Feature[] = [
    { stage: 'mobs', icon: 'eye', everywhere: true },
    { stage: 'players', icon: 'users' },
    { stage: 'offline', icon: 'calendar', everywhere: true },
    { stage: 'birds', icon: 'feather', everywhere: true },
    { stage: 'light', icon: 'gauge', everywhere: true },
  ];

  /** On some visits, a card hides a figure of the mod's own surprises; never named. */
  protected readonly egg =
    Math.random() < 0.3
      ? (['mobs', 'offline', 'birds'] as const)[Math.floor(Math.random() * 3)]
      : null;

  /**
   * The card spread across the section, its details shown, the others below it; `null`
   * when every card is folded.
   */
  protected readonly opened = signal<number | null>(null);

  protected toggle(index: number) {
    const next = this.opened() === index ? null : index;
    const apply = () => {
      this.opened.set(next);
      this.changes.detectChanges();
    };
    // The cards slide to their new places where the browser can animate it.
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const transition = still ? undefined : document.startViewTransition?.(apply);
    if (!transition) apply();
    void (transition?.finished ?? Promise.resolve()).then(() => {
      const card = this.host.nativeElement.querySelectorAll('.feature')[next ?? index];
      card?.scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'start' });
    });
  }
}
