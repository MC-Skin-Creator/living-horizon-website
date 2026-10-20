import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/** One cell of the table: a tick, a cross, a dash, or a few words. */
type Cell = 'yes' | 'no' | 'none' | string;

const PLACES = ['Single player', 'LAN world', 'Server with the mod', 'Server without the mod'];

@Component({
  selector: 'lh-servers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section class="section" id="servers">
      <div class="glow" aria-hidden="true"></div>
      <div class="container">
        <div class="intro">
          <header class="section-head" lhReveal>
            <span class="eyebrow">Multiplayer</span>
            <h2>Put it on your server. <span class="accent">Everyone sees everyone.</span></h2>
            <p>
              The same jar runs on servers. The server shares where every player is, the mobs around
              them and the players who logged off, with everyone who has the mod.
            </p>
          </header>

          <figure class="cover" [lhReveal]="80">
            <img
              src="img/brand/cover.webp"
              width="1280"
              height="720"
              loading="lazy"
              alt="The Living Horizon title in front of a crowd of player and mob heads."
            />
            <figcaption><span class="tag">New</span> Server support, since 0.10.0</figcaption>
          </figure>
        </div>

        <ol class="steps">
          @for (s of steps; track s.title; let i = $index) {
            <li class="card step" [lhReveal]="i * 80">
              <span class="num">{{ i + 1 }}</span>
              <span class="icon"><lh-icon [name]="s.icon" /></span>
              <h3>{{ s.title }}</h3>
              <p>{{ s.text }}</p>
            </li>
          }
        </ol>

        <div class="card matrix" lhReveal>
          <div class="matrix-head">
            <h3>What you see, where you play</h3>
            <p>
              Everything works in single player. On a server, the mod on the server does the rest.
            </p>
          </div>
          <div class="scroll" tabindex="0" role="region" aria-label="Features by place of play">
            <table>
              <thead>
                <tr>
                  <th scope="col"><span class="visually-hidden">Feature</span></th>
                  @for (p of places; track p) {
                    <th scope="col" [class.hl]="p === 'Server with the mod'">{{ p }}</th>
                  }
                </tr>
              </thead>
              <tbody>
                @for (row of rows; track row.feature) {
                  <tr>
                    <th scope="row">{{ row.feature }}</th>
                    @for (c of row.cells; track $index) {
                      <td [class.hl]="$index === 2" [attr.data-place]="places[$index]">
                        @switch (c) {
                          @case ('yes') {
                            <span class="st yes"
                              ><lh-icon name="check" /><span class="visually-hidden"
                                >Yes</span
                              ></span
                            >
                          }
                          @case ('no') {
                            <span class="st no"
                              ><lh-icon name="close" /><span class="visually-hidden">No</span></span
                            >
                          }
                          @case ('none') {
                            <span class="st none" title="No other players"
                              >–<span class="visually-hidden">Not applicable</span></span
                            >
                          }
                          @default {
                            <span class="words">{{ c }}</span>
                          }
                        }
                      </td>
                    }
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>

        <ul class="notes">
          @for (n of notes; track n.title; let i = $index) {
            <li [lhReveal]="i * 60">
              <lh-icon [name]="n.icon" />
              <div>
                <strong>{{ n.title }}</strong>
                <span>{{ n.text }}</span>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './servers.scss',
})
export class Servers {
  protected readonly places = PLACES;

  protected readonly steps: { icon: IconName; title: string; text: string }[] = [
    {
      icon: 'download',
      title: "Drop the jar in the server's mods folder",
      text: "The same file as for your game, for the server's Minecraft version and loader, plus the Fabric API on Fabric and Quilt. Keep it up to date on both sides.",
    },
    {
      icon: 'server',
      title: 'Start the server',
      text: 'Nothing to set up. The server keeps what it shares in the world folder, so it is still there after a restart.',
    },
    {
      icon: 'users',
      title: 'Players with the mod see everyone',
      text: 'Every player at any distance, with their skin, armour and mount, and the mobs around them, even ones they never met.',
    },
  ];

  protected readonly rows: { feature: string; cells: Cell[] }[] = [
    { feature: 'Mobs on the horizon', cells: ['yes', 'yes', 'yes', 'Only the mobs you met'] },
    { feature: 'Players at any distance', cells: ['none', 'yes', 'yes', 'no'] },
    {
      feature: 'Players who logged off',
      cells: ['yes', 'yes', 'Even those who left before you joined', 'Only those you saw leave'],
    },
    { feature: 'Birds', cells: ['yes', 'yes', 'yes', 'yes'] },
  ];

  protected readonly notes: { icon: IconName; title: string; text: string }[] = [
    {
      icon: 'wifi',
      title: 'LAN: nothing to install',
      text: "A world opened to LAN shares everything through the host's game.",
    },
    {
      icon: 'check',
      title: 'Anyone can join',
      text: 'Players without the mod can still join. The server sends them nothing.',
    },
    {
      icon: 'shield',
      title: 'Tell your players',
      text: "The server shares every player's position with the players who have the mod.",
    },
    {
      icon: 'box',
      title: 'Used the data pack?',
      text: "Remove it from the world's datapacks folder: the mod on the server replaces it.",
    },
  ];
}
