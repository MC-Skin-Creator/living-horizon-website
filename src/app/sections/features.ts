import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { I18n } from '../i18n/i18n';
import { FigureView } from '../scene/figure';
import { MobView } from '../scene/mob';
import { Sprite } from '../scene/sprite';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { RichText } from '../shared/rich-text';
import { Servers } from './servers';

type Stage = 'mobs' | 'unexplored' | 'players' | 'offline' | 'birds' | 'light';

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
  imports: [FigureView, MobView, Sprite, Icon, Reveal, RichText, Servers, NgTemplateOutlet],
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
            </div>
            <div class="ground near">
              <lh-mob name="villager-farmer" [pixel]="2" />
              <lh-mob name="cow" [pixel]="2" [flip]="true" />
              <lh-mob name="sheep" [pixel]="2" />
            </div>
          }
          @case ('unexplored') {
            <div class="ground far bare">
              <lh-mob name="horse-brown-small" [pixel]="1" [fade]="0.8" />
              <lh-mob name="sheep-small" [pixel]="1" [fade]="0.8" [flip]="true" />
              <lh-mob name="sheep-small" [pixel]="1" [fade]="0.8" />
              <lh-mob name="cow-small" [pixel]="1" [fade]="0.8" [flip]="true" />
            </div>
            <span class="lens">
              <lh-mob name="horse-white" [pixel]="1" [flip]="true" />
            </span>
            <div class="ground near"></div>
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
          }
          @case ('birds') {
            <span class="flock v">
              @for (b of [0, 1, 2, 3, 4]; track b) {
                <lh-sprite name="bird" [scale]="3" />
              }
            </span>
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
        <header class="section-head" lhReveal>
          <span class="eyebrow">{{ t.eyebrow }}</span>
          <h2>
            {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
          </h2>
          <p>{{ t.text }}</p>
        </header>

        <div class="grid">
          @for (f of features; track f.stage; let i = $index) {
            @let item = t.items[f.stage];
            <article class="card feature" [class]="'f-' + f.stage" [lhReveal]="(i % 3) * 80">
              <ng-container *ngTemplateOutlet="stageOf; context: { $implicit: f.stage }" />

              <div class="body">
                <h3><lh-icon [name]="f.icon" /> {{ item.title }}</h3>
                <p>{{ item.text }}</p>
                <ul>
                  @for (p of item.points; track $index) {
                    <li><lh-icon name="check" /> {{ p }}</li>
                  }
                </ul>
                <p class="where" [class.everywhere]="f.everywhere">
                  <lh-icon [name]="f.everywhere ? 'sparkles' : 'users'" /> {{ item.where }}
                </p>
                <button type="button" class="more" (click)="open(i)" aria-haspopup="dialog">
                  {{ t.more }} <lh-icon name="arrow-right" />
                </button>
              </div>
            </article>
          }
        </div>
      </div>

      <!-- Part of the features: multiplayer. -->
      <lh-servers />
    </section>

    <dialog
      #dialog
      class="details"
      [attr.aria-labelledby]="'feature-' + (current()?.stage ?? '')"
      (click)="backdrop($event)"
      (close)="selected.set(null)"
    >
      @if (current(); as f) {
        @let item = t.items[f.stage];
        <div class="sheet" [class]="'f-' + f.stage">
          <ng-container *ngTemplateOutlet="stageOf; context: { $implicit: f.stage }" />
          <button type="button" class="close" (click)="close()" [attr.aria-label]="t.close">
            <lh-icon name="close" />
          </button>

          <div class="content">
            <h3 [id]="'feature-' + f.stage"><lh-icon [name]="f.icon" /> {{ item.title }}</h3>
            <p class="lede">{{ item.text }}</p>
            <p class="where" [class.everywhere]="f.everywhere">
              <lh-icon [name]="f.everywhere ? 'sparkles' : 'users'" /> {{ item.where }}
            </p>

            <div class="parts">
              @for (d of item.details; track $index) {
                <section class="part">
                  <h4>{{ d.title }}</h4>
                  <lh-rich [blocks]="d.body" />
                </section>
              }
            </div>
          </div>

          <nav class="steps">
            <button type="button" class="btn small" (click)="step(-1)">
              <lh-icon name="arrow-right" class="back" /> {{ t.previous }}
            </button>
            <span class="count">{{ (selected() ?? 0) + 1 }} / {{ features.length }}</span>
            <button type="button" class="btn small" (click)="step(1)">
              {{ t.next }} <lh-icon name="arrow-right" />
            </button>
          </nav>
        </div>
      }
    </dialog>
  `,
  styleUrl: './features.scss',
})
export class Features {
  protected readonly i18n = inject(I18n);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected readonly features: Feature[] = [
    { stage: 'mobs', icon: 'eye', everywhere: true },
    { stage: 'unexplored', icon: 'search' },
    { stage: 'players', icon: 'users' },
    { stage: 'offline', icon: 'calendar', everywhere: true },
    { stage: 'birds', icon: 'feather', everywhere: true },
    { stage: 'light', icon: 'gauge', everywhere: true },
  ];

  /** The feature whose details are open. */
  protected readonly selected = signal<number | null>(null);
  protected readonly current = computed(() => {
    const i = this.selected();
    return i === null ? null : this.features[i];
  });

  protected open(index: number) {
    this.selected.set(index);
    const dialog = this.dialog().nativeElement;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
  }

  protected close() {
    this.dialog().nativeElement.close();
  }

  /** The previous or next feature, going round. */
  protected step(by: number) {
    const n = this.features.length;
    this.open(((this.selected() ?? 0) + by + n) % n);
  }

  /** A click outside the sheet lands on the dialog itself: it closes it. */
  protected backdrop(event: MouseEvent) {
    if (event.target === this.dialog().nativeElement) this.close();
  }
}
