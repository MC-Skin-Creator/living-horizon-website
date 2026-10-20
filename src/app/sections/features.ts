import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FigureView } from '../scene/figure';
import { MobView } from '../scene/mob';
import { Sprite } from '../scene/sprite';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

type Stage = 'mobs' | 'players' | 'offline' | 'birds' | 'light' | 'settings';

interface Feature {
  stage: Stage;
  icon: IconName;
  title: string;
  text: string;
  points: string[];
  /** Where it works, in a few words. */
  where: string;
  /** Shown in the sun colour: the feature needs nothing at all. */
  everywhere?: boolean;
}

@Component({
  selector: 'lh-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FigureView, MobView, Sprite, Icon, Reveal],
  template: `
    <section class="section" id="features">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">Features</span>
          <h2>Everything that lives <span class="accent">past your render distance.</span></h2>
          <p>
            Mobs, players, players who logged off and birds, drawn by your own game and kept light
            enough to leave on.
          </p>
        </header>

        <div class="grid">
          @for (f of features; track f.title; let i = $index) {
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
                        ><span class="nametag">Steve <em>(offline)</em></span
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
                        <figcaption>Up close: the full mob</figcaption>
                      </figure>
                      <lh-icon name="arrow-right" />
                      <figure>
                        <lh-mob name="horse-chestnut-small" [pixel]="2" [fade]="0.4" />
                        <figcaption>Far away: a flat picture</figcaption>
                      </figure>
                    </div>
                  }
                  @case ('settings') {
                    <div class="panel">
                      <span class="panel-title">Preset</span>
                      <span class="seg">
                        <span>Low</span><span>Normal</span><span class="on">High</span
                        ><span>Ultra</span>
                      </span>
                      <span class="slider"><i></i><b>Mob Render Distance</b></span>
                    </div>
                  }
                }
              </div>

              <div class="body">
                <h3><lh-icon [name]="f.icon" /> {{ f.title }}</h3>
                <p>{{ f.text }}</p>
                <ul>
                  @for (p of f.points; track p) {
                    <li><lh-icon name="check" /> {{ p }}</li>
                  }
                </ul>
                <p class="where" [class.everywhere]="f.everywhere">
                  <lh-icon [name]="f.everywhere ? 'sparkles' : 'users'" /> {{ f.where }}
                </p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './features.scss',
})
export class Features {
  protected readonly features: Feature[] = [
    {
      stage: 'mobs',
      icon: 'eye',
      title: 'Every mob, out to the horizon',
      text: "Animals graze, villagers wander around far-off villages, golems keep watch. Any mob the game can draw, other mods' mobs included.",
      points: [
        'On Voxy and Distant Horizons terrain, or in vanilla',
        'Hidden behind far hills, shader packs included',
        'Choose which ones in Mobs & Entities',
      ],
      where: 'Everywhere. On a server with the mod, even mobs you never met.',
      everywhere: true,
    },
    {
      stage: 'players',
      icon: 'users',
      title: 'Players at any distance',
      text: 'See every other player, wherever they are on the map, with their skin, armour, held items and whatever they ride.',
      points: [
        'Horses, boats, minecarts and happy ghasts',
        'Smooth: the server shares positions five times a second',
        'Players without the mod can still join',
      ],
      where: 'On LAN, and on servers with the mod.',
    },
    {
      stage: 'offline',
      icon: 'calendar',
      title: 'Players who logged off live on',
      text: 'When someone logs off, a copy with their name stays where they left. It strolls, sits, opens chests and sleeps at night, until they come back.',
      points: [
        '(offline) after their name, and when they were last seen',
        'Even players who left before you joined',
        'Only for show: they never block you or the mobs',
      ],
      where: 'Everywhere. On a server with the mod, every player who ever played there.',
      everywhere: true,
    },
    {
      stage: 'birds',
      icon: 'feather',
      title: 'Birds in the sky',
      text: 'Flocks, geese in a V, birds of prey, gulls, ducks and bats fly over the land, and you see them from far away.',
      points: [
        'They land on trees, roofs, fields and beaches',
        'Ducks swim around their pond',
        'Small 3D models up close, flat pictures far away',
      ],
      where: 'Everywhere, nothing to set up.',
      everywhere: true,
    },
    {
      stage: 'light',
      icon: 'gauge',
      title: 'Built to stay light',
      text: 'Far mobs have no AI: they play ready-made animations that fit the ground. Very far away, they become flat pictures of themselves.',
      points: [
        'Mobs hidden behind hills are not drawn',
        'Lower your simulation distance and keep a living world',
        'Simplified Entities: many more mobs for the same cost',
      ],
      where: 'Everything runs on your game. The server only shares positions.',
      everywhere: true,
    },
    {
      stage: 'settings',
      icon: 'sliders',
      title: 'Settings where you look for them',
      text: "In the Options screen, Mod Menu, Sodium's Video Settings, or with /livinghorizon config. Each setting says what it does.",
      points: [
        'Low, Normal, High and Ultra presets set everything at once',
        'In 14 languages',
        'Restore Defaults puts everything back',
      ],
      where: 'The defaults are the balanced choice.',
      everywhere: true,
    },
  ];
}
