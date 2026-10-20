import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FigureView } from '../scene/figure';
import { Skin } from '../scene/figures';
import { MobView } from '../scene/mob';
import { Sprite } from '../scene/sprite';
import { SpriteName } from '../scene/sprites';
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
    <section class="section" id="what">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">What it does</span>
          <h2>Your render distance ends. <span class="accent">The world doesn't.</span></h2>
          <p>
            Minecraft stops drawing mobs and players a few chunks away. Far-terrain mods stretch the
            land to the horizon, but it stays empty and still. Living Horizon fills it back with
            life.
          </p>
        </header>

        <div
          class="diagram card"
          lhReveal
          role="figure"
          aria-label="Diagram: without Living Horizon, mobs only exist within your render distance and the far terrain is empty. With it, mobs, players and birds live across the far terrain up to the horizon."
        >
          <div class="axis" aria-hidden="true">
            <span class="you"><lh-figure skin="steve" kind="drops" [pixel]="1" /> You</span>
            <span class="zone z1">Your render distance</span>
            <span class="zone z2"
              >Far terrain ·
              <img src="img/logos/distant-horizons.webp" alt="" width="16" height="16" />
              Distant Horizons /
              <img src="img/logos/voxy.webp" alt="" width="16" height="16" />
              Voxy</span
            >
            <span class="zone z3">Horizon</span>
          </div>

          <div class="row">
            <div class="row-label"><span class="off">Without</span> Living Horizon</div>
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
              <div class="cell z2 empty"><span>empty</span></div>
              <div class="cell z3 empty"><span>empty</span></div>
            </div>
          </div>

          <div class="row">
            <div class="row-label"><span class="on">With</span> Living Horizon</div>
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
