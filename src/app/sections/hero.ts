import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE } from '../config/site';
import { LOADER_NAMES } from '../data/models';
import { ProjectData } from '../data/project-data';
import { HorizonScene } from '../scene/horizon-scene';
import { AgoPipe, CountPipe } from '../shared/format';
import { Icon } from '../shared/icon';

@Component({
  selector: 'lh-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HorizonScene, Icon, CountPipe, AgoPipe],
  template: `
    <section class="hero" id="top">
      <lh-horizon
        class="scene"
        scene="hero"
        [resolution]="210"
        label="Illustration: a dusk horizon of blocky hills where villagers, animals, riders and other players are still alive far away, under a flight of geese."
      />
      <div class="shade" aria-hidden="true"></div>

      <div class="container inner">
        <a class="pill news" href="#servers">
          <span class="tag">New</span>
          The mod now runs on servers too
          <lh-icon name="arrow-right" />
        </a>

        <h1>
          <img
            class="title"
            src="img/brand/title-minecraft.webp"
            srcset="img/brand/title-minecraft-800.webp 800w, img/brand/title-minecraft.webp 1600w"
            sizes="(max-width: 700px) 92vw, 640px"
            width="1600"
            height="425"
            alt="Minecraft Living Horizon"
            fetchpriority="high"
          />
          <span class="tagline">Gives life to <span class="accent">the distance.</span></span>
        </h1>

        <p class="lede">
          Animals, villagers, birds and other players keep living on the horizon, far past your
          render distance, right on the far terrain of
          <strong class="mod"
            ><img src="img/logos/distant-horizons.webp" alt="" width="20" height="20" />Distant
            Horizons</strong
          >
          and
          <strong class="mod"
            ><img src="img/logos/voxy.webp" alt="" width="20" height="20" />Voxy</strong
          >, or in vanilla. In single player, on LAN, and on servers.
        </p>

        <div class="ctas">
          <a class="btn primary" href="#download"><lh-icon name="download" /> Download</a>
          <a class="btn" [href]="site.links.github" target="_blank" rel="noopener">
            <lh-icon name="github" /> GitHub
          </a>
          <a class="btn ghost" href="#testers"><lh-icon name="flask" /> Become a tester</a>
        </div>
      </div>

      <div class="container bottom">
        <ul class="facts" aria-label="Project at a glance">
          <li>
            <span class="k">Latest</span>
            <span class="v">v{{ data.version() }}</span>
          </li>
          <li>
            <span class="k">Updated</span>
            <span class="v">{{ data.updatedAt() | ago }}</span>
          </li>
          <li>
            <span class="k">Downloads</span>
            <span class="v">
              @if (data.downloads().total; as total) {
                {{ total | count: true }}
              } @else {
                <span class="skeleton"></span>
              }
            </span>
          </li>
          <li>
            <span class="k">Minecraft</span>
            <span class="v">{{ data.mcRange() }}</span>
          </li>
          <li class="wide">
            <span class="k">Loaders</span>
            <span class="v">{{ loaderNames() }}</span>
          </li>
        </ul>
      </div>
    </section>
  `,
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);

  protected loaderNames() {
    return this.data
      .loaders()
      .map((l) => LOADER_NAMES[l])
      .join(' · ');
  }
}
