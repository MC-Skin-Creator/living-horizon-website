import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../i18n/i18n';
import { FigureView } from '../scene/figure';
import { Servers } from './servers';
import { MobView } from '../scene/mob';
import { Sprite } from '../scene/sprite';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

type Stage = 'mobs' | 'players' | 'offline' | 'birds' | 'light' | 'settings';

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
  imports: [FigureView, MobView, Sprite, Icon, Reveal, Servers],
  template: `
    @let t = i18n.t().features;
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
              <div class="stage" aria-hidden="true">
                @switch (f.stage) {
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
                  @case ('players') {
                    <div class="ground far">
                      <span class="tagged"
                        ><span class="nametag">Ari</span
                        ><lh-figure [skin]="1" [pixel]="1" [fade]="0.6"
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
                        ><span class="nametag">Juno</span
                        ><lh-figure [skin]="5" [pixel]="2" [flip]="true"
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
                  @case ('settings') {
                    <div class="panel">
                      <span class="panel-title">{{ t.preset }}</span>
                      <span class="seg">
                        @for (name of t.presets; track $index) {
                          <span [class.on]="$index === 2">{{ name }}</span>
                        }
                      </span>
                      <span class="slider"
                        ><i></i><b>{{ t.mobDistance }}</b></span
                      >
                    </div>
                  }
                }
              </div>

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

  protected readonly features: Feature[] = [
    { stage: 'mobs', icon: 'eye', everywhere: true },
    { stage: 'players', icon: 'users' },
    { stage: 'offline', icon: 'calendar', everywhere: true },
    { stage: 'birds', icon: 'feather', everywhere: true },
    { stage: 'light', icon: 'gauge', everywhere: true },
    { stage: 'settings', icon: 'sliders', everywhere: true },
  ];
}
