import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE } from '../config/site';
import { LOADER_NAMES } from '../data/models';
import { ProjectData } from '../data/project-data';
import { I18n } from '../i18n/i18n';
import { HorizonScene } from '../scene/horizon-scene';
import { AgoPipe, CountPipe } from '../shared/format';
import { Icon } from '../shared/icon';

@Component({
  selector: 'lh-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HorizonScene, Icon, CountPipe, AgoPipe],
  template: `
    @let t = i18n.t();
    <section class="hero" id="top">
      <lh-horizon class="scene" scene="hero" [resolution]="210" [label]="t.hero.scene" />
      <div class="shade" aria-hidden="true"></div>

      <div class="container inner">
        <a class="pill news" href="#servers">
          <span class="tag">{{ t.common.new }}</span>
          {{ t.hero.news }}
          <lh-icon name="arrow-right" />
        </a>

        <h1>
          <img
            class="title"
            src="img/brand/title-minecraft.webp"
            srcset="img/brand/title-minecraft-800.webp 800w, img/brand/title-minecraft.webp 1600w"
            sizes="(max-width: 700px) 92vw, 640px"
            width="1600"
            height="447"
            alt="Minecraft Living Horizon"
            fetchpriority="high"
          />
          <span class="tagline"
            >{{ t.hero.tagline }}{{ i18n.gap()
            }}<span class="accent">{{ t.hero.taglineAccent }}</span></span
          >
        </h1>

        <p class="lede">
          {{ t.hero.lede.before }}
          <strong class="mod"
            ><img src="img/logos/distant-horizons.webp" alt="" width="20" height="20" />Distant
            Horizons</strong
          >
          {{ t.hero.lede.between }}
          <strong class="mod"
            ><img src="img/logos/voxy.webp" alt="" width="20" height="20" />Voxy</strong
          >{{ t.hero.lede.after }}
        </p>

        <div class="ctas">
          <a class="btn primary" href="#download"
            ><lh-icon name="download" /> {{ t.common.download }}</a
          >
          <a class="btn" [href]="site.links.github" target="_blank" rel="noopener">
            <lh-icon name="github" /> GitHub
          </a>
          <a class="btn ghost" href="#testers"
            ><lh-icon name="flask" /> {{ t.common.becomeTester }}</a
          >
        </div>
      </div>

      <div class="container bottom">
        <ul class="facts" [attr.aria-label]="t.hero.facts">
          <li>
            <span class="k">{{ t.hero.latest }}</span>
            <span class="v">v{{ data.version() }}</span>
          </li>
          <li>
            <span class="k">{{ t.hero.updated }}</span>
            <span class="v">{{ data.updatedAt() | ago }}</span>
          </li>
          <li>
            <span class="k">{{ t.hero.downloads }}</span>
            <span class="v">
              @if (data.downloads().total; as total) {
                {{ total | count: true }}
              } @else {
                <span class="skeleton"></span>
              }
            </span>
          </li>
          <li>
            <span class="k">{{ t.hero.minecraft }}</span>
            <span class="v">{{ data.mcRange() }}</span>
          </li>
          <li class="wide">
            <span class="k">{{ t.hero.loaders }}</span>
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
  protected readonly i18n = inject(I18n);

  protected loaderNames() {
    return this.data
      .loaders()
      .map((l) => LOADER_NAMES[l])
      .join(' · ');
  }
}
