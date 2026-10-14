import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FigureView } from '../scene/figure';
import { Sprite } from '../scene/sprite';
import { SpriteName } from '../scene/sprites';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

interface Figure {
  sprite: SpriteName;
  flip?: boolean;
  /** A player, drawn from this skin (1 to 5) instead of the sprite. */
  skin?: number;
}

@Component({
  selector: 'lh-concept',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Sprite, FigureView, Icon, Reveal],
  template: `
    <section class="section" id="what">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">What it does</span>
          <h2>Your render distance ends. <span class="accent">The world doesn't.</span></h2>
          <p>
            Minecraft stops drawing mobs and players a few chunks away. Far-terrain mods stretch the
            land to the horizon — but it stays empty and still. Living Horizon fills it back with
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
            <span class="you"><lh-figure [skin]="1" kind="drops" [pixel]="1" /> You</span>
            <span class="zone z1">Your render distance</span>
            <span class="zone z2">Far terrain · Distant Horizons / Voxy</span>
            <span class="zone z3">Horizon</span>
          </div>

          <div class="row">
            <div class="row-label"><span class="off">Without</span> Living Horizon</div>
            <div class="cells">
              <div class="cell z1">
                @for (f of near; track $index) {
                  @if (f.skin) {
                    <lh-figure [skin]="f.skin" [flip]="!!f.flip" [pixel]="2" />
                  } @else {
                    <lh-sprite [name]="f.sprite" [flip]="!!f.flip" [scale]="6" />
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
                    <lh-figure [skin]="f.skin" [flip]="!!f.flip" [pixel]="2" />
                  } @else {
                    <lh-sprite [name]="f.sprite" [flip]="!!f.flip" [scale]="6" />
                  }
                }
              </div>
              <div class="cell z2">
                @for (f of mid; track $index) {
                  @if (f.skin) {
                    <lh-figure [skin]="f.skin" [flip]="!!f.flip" [pixel]="1" [fade]="0.25" />
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
                  } @else {
                    <lh-sprite [name]="f.sprite" [flip]="!!f.flip" [scale]="2" [fade]="0.5" />
                  }
                }
              </div>
            </div>
          </div>
        </div>

        <div class="features">
          @for (f of features; track f.title; let i = $index) {
            <article class="card feature" [lhReveal]="i * 80">
              <span class="icon"><lh-icon [name]="f.icon" /></span>
              <h3>{{ f.title }}</h3>
              <p>{{ f.text }}</p>
            </article>
          }
        </div>

        <ul class="extras" lhReveal aria-label="Also in the mod">
          @for (e of extras; track e) {
            <li><lh-icon name="sparkles" /> {{ e }}</li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './concept.scss',
})
export class Concept {
  protected readonly near: Figure[] = [
    { sprite: 'cow' },
    { sprite: 'player', skin: 2 },
    { sprite: 'sheep', flip: true },
  ];
  protected readonly mid: Figure[] = [
    { sprite: 'villager' },
    { sprite: 'golem' },
    { sprite: 'player', skin: 3 },
    { sprite: 'villager', flip: true },
    { sprite: 'sheep', flip: true },
    { sprite: 'player', skin: 4, flip: true },
  ];
  protected readonly far: Figure[] = [
    { sprite: 'cow' },
    { sprite: 'villager' },
    { sprite: 'horse', flip: true },
  ];

  protected readonly features: { icon: IconName; title: string; text: string }[] = [
    {
      icon: 'eye',
      title: 'Mobs and players, far away',
      text: 'Animals graze, villagers wander around far-off villages, and other players keep walking — with their skin, armour and whatever they ride.',
    },
    {
      icon: 'mountain',
      title: 'On Distant Horizons and Voxy',
      text: 'Figures stand on the far terrain and hide behind its hills pixel by pixel, shader packs included. Something that was not possible before.',
    },
    {
      icon: 'box',
      title: 'Vanilla works too',
      text: 'No far-terrain mod? Keep your render and simulation distance low and the horizon still feels alive, at any render distance.',
    },
    {
      icon: 'feather',
      title: 'Built to stay light',
      text: 'Far figures are drawn the cheap way, and only when you can see them. Client-side only: nothing is sent to the server.',
    },
  ];

  protected readonly extras = [
    'Birds in the sky: flocks, geese in a V, gulls on the coast',
    'Players who log off stay asleep where they left',
    'Optional data pack for exact positions on servers',
    'Everything can be configured',
  ];
}
