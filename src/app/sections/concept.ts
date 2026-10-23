import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FigureView } from '../scene/figure';
import { Skin } from '../scene/figures';
import { MobView } from '../scene/mob';
import { Sprite } from '../scene/sprite';
import { SpriteName } from '../scene/sprites';
import { I18n } from '../i18n/i18n';
import { Reveal } from '../shared/reveal';

interface Figure {
  sprite: SpriteName;
  flip?: boolean;
  /** A player, drawn from this skin instead of the sprite. */
  skin?: Skin;
  /** A mob of the game, drawn from this sheet (see scripts/mobs.py) instead of the sprite. */
  mob?: string;
}

@Component({
  selector: 'lh-concept',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Sprite, FigureView, MobView, Reveal],
  template: `
    @let t = i18n.t().concept;
    <section class="section" id="what">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">{{ t.eyebrow }}</span>
          <h2>
            {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
          </h2>
          <p>{{ t.text }}</p>
        </header>

        <div class="diagram card" lhReveal role="figure" [attr.aria-label]="t.diagram">
          <div class="axis" aria-hidden="true">
            <span class="you"><lh-figure skin="steve" kind="drops" [pixel]="1" /> {{ t.you }}</span>
            <span class="zone z1">{{ t.renderDistance }}</span>
            <span class="zone z2"
              >{{ t.farTerrain }}
              <img src="img/logos/distant-horizons.webp" alt="" width="16" height="16" />
              Distant Horizons /
              <img src="img/logos/voxy.webp" alt="" width="16" height="16" />
              Voxy</span
            >
            <span class="zone z3">{{ t.horizon }}</span>
          </div>

          <div class="row">
            <div class="row-label">
              {{ t.without.before }} <span class="off">{{ t.without.mark }}</span>
              {{ t.without.after }}
            </div>
            <div class="cells">
              <div class="cell z1">
                @for (f of near; track $index) {
                  @if (f.skin) {
                    <lh-figure [skin]="f.skin" [flip]="!!f.flip" [pixel]="1" />
                  } @else if (f.mob) {
                    <lh-mob [name]="f.mob" [flip]="!!f.flip" [pixel]="1" />
                  } @else {
                    <lh-sprite [name]="f.sprite" [flip]="!!f.flip" [scale]="3" />
                  }
                }
              </div>
              <div class="cell z2 empty">
                <span>{{ t.empty }}</span>
              </div>
              <div class="cell z3 empty">
                <span>{{ t.empty }}</span>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="row-label">
              {{ t.with.before }} <span class="on">{{ t.with.mark }}</span> {{ t.with.after }}
            </div>
            <div class="cells">
              <div class="cell z1">
                @for (f of near; track $index) {
                  @if (f.skin) {
                    <lh-figure [skin]="f.skin" [flip]="!!f.flip" [pixel]="1" />
                  } @else if (f.mob) {
                    <lh-mob [name]="f.mob" [flip]="!!f.flip" [pixel]="1" />
                  } @else {
                    <lh-sprite [name]="f.sprite" [flip]="!!f.flip" [scale]="3" />
                  }
                }
              </div>
              <div class="cell z2">
                @for (f of mid; track $index) {
                  @if (f.skin) {
                    <lh-figure [skin]="f.skin" [flip]="!!f.flip" [pixel]="1" [fade]="0.25" />
                  } @else if (f.mob) {
                    <lh-mob [name]="f.mob" [flip]="!!f.flip" [pixel]="1" [fade]="0.25" />
                  } @else {
                    <lh-sprite [name]="f.sprite" [flip]="!!f.flip" [scale]="3" [fade]="0.25" />
                  }
                }
                <span class="birds"
                  ><lh-sprite name="bird" [scale]="2" /><lh-sprite
                    name="bird"
                    [scale]="2" /><lh-sprite name="bird" [scale]="2"
                /></span>
              </div>
              <div class="cell z3">
                @for (f of far; track $index) {
                  @if (f.skin) {
                    <lh-figure [skin]="f.skin" [flip]="!!f.flip" [pixel]="1" [fade]="0.5" />
                  } @else if (f.mob) {
                    <lh-mob [name]="f.mob" [flip]="!!f.flip" [pixel]="1" [fade]="0.5" />
                  } @else {
                    <lh-sprite [name]="f.sprite" [flip]="!!f.flip" [scale]="3" [fade]="0.5" />
                  }
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './concept.scss',
})
export class Concept {
  protected readonly i18n = inject(I18n);
  protected readonly near: Figure[] = [
    { sprite: 'cow', mob: 'cow', flip: true },
    { sprite: 'player', skin: 'steve' },
    { sprite: 'sheep', mob: 'sheep' },
  ];
  protected readonly mid: Figure[] = [
    { sprite: 'villager', mob: 'villager-farmer' },
    { sprite: 'golem', mob: 'golem' },
    { sprite: 'player', skin: 3 },
    { sprite: 'chicken', mob: 'chicken' },
    { sprite: 'villager', mob: 'villager-librarian' },
    { sprite: 'creeper', mob: 'creeper', flip: true },
    { sprite: 'player', skin: 4, flip: true },
  ];
  protected readonly far: Figure[] = [
    { sprite: 'villager', mob: 'villager-cleric' },
    { sprite: 'horse', mob: 'horse-white', flip: true },
    { sprite: 'skeleton', mob: 'skeleton' },
  ];
}
