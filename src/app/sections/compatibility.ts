import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE } from '../config/site';
import { LOADERS, LOADER_NAMES } from '../data/models';
import { ProjectData } from '../data/project-data';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'lh-compatibility',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section class="section" id="compatibility">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">Compatibility</span>
          <h2>Built for far terrain. <span class="accent">Fine without it.</span></h2>
          <p>
            Living Horizon finds Distant Horizons or Voxy on its own and draws mobs and players
            right on their terrain. Without them, it keeps the world alive past your render
            distance.
          </p>
        </header>

        <div class="works">
          @for (w of works; track w.title; let i = $index) {
            <article class="card work" [class]="w.tone" [lhReveal]="i * 80">
              <div class="top">
                @if (w.logo) {
                  <img
                    class="logo"
                    [src]="w.logo"
                    [alt]="w.title + ' logo'"
                    width="48"
                    height="48"
                  />
                } @else {
                  <span class="icon"><lh-icon [name]="w.icon" /></span>
                }
                <span class="ok"><lh-icon name="check" /> Works</span>
              </div>
              <h3>{{ w.title }}</h3>
              <p>{{ w.text }}</p>
              @if (w.link) {
                <a [href]="w.link" target="_blank" rel="noopener"
                  >{{ w.linkText }} <lh-icon name="external"
                /></a>
              }
            </article>
          }
        </div>

        <div class="extras" lhReveal>
          <span class="pill"
            ><lh-icon name="sparkles" /> Iris shader packs (Photon, Complementary…)</span
          >
          <span class="pill"><lh-icon name="server-off" /> Client-side, any server</span>
          <span class="pill"><lh-icon name="box" /> Optional data pack for exact positions</span>
        </div>

        <div class="matrix card" lhReveal>
          <div class="matrix-head">
            <div>
              <h3>Minecraft versions and loaders</h3>
              <p>
                One jar per game version and loader.
                @if (data.targets().length) {
                  {{ data.targetStats().builds }} builds, from {{ data.mcRange() }}.
                }
              </p>
            </div>
            <ul class="key">
              <li>
                <span class="st tested"><lh-icon name="check" /></span> Seen working in a world
              </li>
              <li><span class="st untested">?</span> Starts — needs testers</li>
            </ul>
          </div>

          @if (data.targets().length) {
            <div class="scroll" tabindex="0" role="region" aria-label="Compatibility table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Minecraft</th>
                    <th scope="col" class="java">Java</th>
                    @for (l of loaders; track l) {
                      <th scope="col">{{ names[l] }}</th>
                    }
                  </tr>
                </thead>
                <tbody>
                  @for (row of data.targets(); track row.key) {
                    <tr>
                      <th scope="row">{{ row.label }}</th>
                      <td class="java">{{ row.java }}</td>
                      @for (l of loaders; track l) {
                        <td>
                          @switch (row.loaders[l]) {
                            @case ('tested') {
                              <span class="st tested" title="Seen working in a world"
                                ><lh-icon name="check" /><span class="visually-hidden"
                                  >Tested</span
                                ></span
                              >
                            }
                            @case ('untested') {
                              <span
                                class="st untested"
                                title="Starts in the game, not yet seen drawing in a world"
                                >?<span class="visually-hidden">Needs testers</span></span
                              >
                            }
                            @default {
                              <span class="st none" title="No build"
                                >–<span class="visually-hidden">Not available</span></span
                              >
                            }
                          }
                        </td>
                      }
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          } @else if (data.settled()) {
            <p class="empty">
              Minecraft {{ data.mcRange() }} on Fabric, Quilt, NeoForge (1.20.6 and later) and
              Forge.
              <a [href]="site.links.readme" target="_blank" rel="noopener">Full table on GitHub</a>.
            </p>
          } @else {
            <p class="empty"><span class="skeleton" style="width: 60%"></span></p>
          }

          <div class="loaders">
            @for (l of loaderNotes; track l.name) {
              <div class="loader">
                <strong>{{ l.name }}</strong>
                <span>{{ l.note }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './compatibility.scss',
})
export class Compatibility {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);
  protected readonly loaders = LOADERS;
  protected readonly names = LOADER_NAMES;

  protected readonly works: {
    icon: IconName;
    /** The mod's own logo, shown instead of the icon. */
    logo?: string;
    tone: string;
    title: string;
    text: string;
    link?: string;
    linkText?: string;
  }[] = [
    {
      icon: 'mountain',
      logo: 'img/logos/distant-horizons.webp',
      tone: 'dh',
      title: 'Distant Horizons',
      text: 'Mobs and players are drawn on its far terrain and hide behind its hills. From Distant Horizons 2.3 on.',
      link: SITE.links.distantHorizons,
      linkText: 'Get Distant Horizons',
    },
    {
      icon: 'layers',
      logo: 'img/logos/voxy.webp',
      tone: 'voxy',
      title: 'Voxy',
      text: "The horizon of Voxy's terrain comes alive: grazing animals, far villages, players on the move.",
      link: SITE.links.voxy,
      linkText: 'Get Voxy',
    },
    {
      icon: 'box',
      tone: 'vanilla',
      title: 'Vanilla',
      text: 'No far-terrain mod needed. Play with a low render and simulation distance and still see a living world.',
    },
  ];

  protected readonly loaderNotes = [
    { name: 'Fabric', note: 'With the Fabric API. Mod Menu optional.' },
    { name: 'Quilt', note: 'With the Fabric API (QFAPI).' },
    { name: 'NeoForge', note: 'From Minecraft 1.20.6, nothing else needed.' },
    { name: 'Forge', note: 'Nothing else needed.' },
  ];
}
