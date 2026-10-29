import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ModpackLink } from '../data/models';
import { ProjectData } from '../data/project-data';
import { I18n } from '../i18n/i18n';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/** Cards shown before "Show more". */
const SHOWN = 6;

const PLATFORMS: Record<ModpackLink['platform'], { name: string; logo: string }> = {
  curseforge: { name: 'CurseForge', logo: 'img/logos/curseforge.svg' },
  modrinth: { name: 'Modrinth', logo: 'img/logos/modrinth.svg' },
};

@Component({
  selector: 'lh-modpacks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    @let t = i18n.t().modpacks;
    <section class="section" id="modpacks">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">{{ t.eyebrow }}</span>
          <h2>
            {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
          </h2>
          <p>{{ t.text }}</p>
          @if (packs()?.length) {
            <p class="found">
              <lh-icon name="box" /> {{ i18n.t().download.packs(packs()!.length) }}
            </p>
          }
        </header>

        @if (packs(); as list) {
          @if (list.length) {
            <ul class="packs">
              @for (pack of shown(); track pack.id; let i = $index) {
                <li class="card pack" [lhReveal]="(i % SHOWN) * 60">
                  <span class="thumb">
                    @if (pack.thumbnail) {
                      <img
                        [src]="pack.thumbnail"
                        alt=""
                        width="64"
                        height="64"
                        loading="lazy"
                        referrerpolicy="no-referrer"
                      />
                    } @else {
                      <lh-icon name="box" />
                    }
                  </span>
                  <span class="head">
                    <h3 class="name">{{ pack.name }}</h3>
                    @if (pack.authors.length) {
                      <span class="by">{{ t.by(pack.authors.join(', ')) }}</span>
                    }
                  </span>
                  @if (pack.summary) {
                    <p class="summary">{{ pack.summary }}</p>
                  }
                  <p class="facts">
                    <span class="count"
                      ><lh-icon name="download" />
                      {{ i18n.t().download.count(pack.downloads) }}</span
                    >
                    @if (pack.versions.length) {
                      <span>
                        <lh-icon name="tag" />
                        {{ i18n.t().hero.minecraft }} {{ versionRange(pack.versions) }}
                      </span>
                    }
                  </p>
                  <div class="links">
                    @for (link of pack.links; track link.platform) {
                      <a
                        class="btn small get"
                        [class]="link.platform"
                        [href]="link.url"
                        target="_blank"
                        rel="noopener"
                      >
                        <img [src]="platforms[link.platform].logo" alt="" width="18" height="18" />
                        {{ t.get(platforms[link.platform].name) }}
                      </a>
                    }
                  </div>
                </li>
              }
            </ul>

            @if (list.length > SHOWN) {
              <div class="actions">
                <button class="btn" type="button" (click)="all.set(!all())">
                  <lh-icon [name]="all() ? 'close' : 'plus'" />
                  {{ all() ? t.less : t.more(list.length - SHOWN) }}
                </button>
              </div>
            }
          } @else {
            <p class="card empty" lhReveal>
              <lh-icon name="box" />
              {{ t.none }}
            </p>
          }
        } @else {
          <p class="card empty" lhReveal>{{ t.loading }}</p>
        }
      </div>
    </section>
  `,
  styleUrl: './modpacks.scss',
})
export class Modpacks {
  protected readonly data = inject(ProjectData);
  protected readonly i18n = inject(I18n);
  protected readonly platforms = PLATFORMS;
  protected readonly SHOWN = SHOWN;

  protected readonly packs = this.data.modpacks;
  protected readonly all = signal(false);
  protected readonly shown = computed(() => {
    const list = this.packs() ?? [];
    return this.all() ? list : list.slice(0, SHOWN);
  });

  /** "1.20.1", or "1.20.1 – 1.21.1" for a pack on several versions. */
  protected versionRange(versions: string[]): string {
    return versions.length > 1 ? `${versions[0]} – ${versions[versions.length - 1]}` : versions[0];
  }
}
