import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SITE } from '../config/site';
import { ProjectData } from '../data/project-data';
import { MODPACK_DETAILS } from '../data/sources';
import { I18n } from '../i18n/i18n';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/** Cards shown, those whose details are fetched; the rest are one click away. */
const SHOWN = MODPACK_DETAILS;

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
          <p>
            {{ t.text.before }}
            <a [href]="site.links.modpackIndex" target="_blank" rel="noopener">ModpackIndex</a
            >{{ t.text.after }}
          </p>
        </header>

        @if (packs(); as list) {
          @if (list.length) {
            <ul class="packs">
              @for (pack of shown(); track pack.url; let i = $index) {
                <li [lhReveal]="i * 60">
                  <a class="card pack" [href]="pack.url" target="_blank" rel="noopener">
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
                      <strong class="name">{{ pack.name }}</strong>
                      @if (pack.authors.length) {
                        <span class="by">{{ t.by(pack.authors.join(', ')) }}</span>
                      }
                    </span>
                    @if (pack.summary) {
                      <span class="summary">{{ pack.summary }}</span>
                    }
                    <span class="facts">
                      <span
                        ><lh-icon name="download" />
                        {{ i18n.t().download.count(pack.downloads) }}</span
                      >
                      @if (pack.versions.length) {
                        <span>
                          <lh-icon name="tag" />
                          {{ i18n.t().hero.minecraft }} {{ versionRange(pack.versions) }}
                        </span>
                      }
                    </span>
                    <lh-icon class="go" name="external" />
                  </a>
                </li>
              }
            </ul>
          } @else {
            <p class="card empty" lhReveal>
              <lh-icon name="box" />
              {{ t.none }}
            </p>
          }
        } @else {
          <p class="card empty" lhReveal>{{ t.loading }}</p>
        }

        <div class="actions" lhReveal>
          <a class="btn" [href]="site.links.modpackIndex" target="_blank" rel="noopener">
            <lh-icon name="external" />
            {{ (packs()?.length ?? 0) > shown().length ? t.all(packs()!.length) : t.browse }}
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './modpacks.scss',
})
export class Modpacks {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);
  protected readonly i18n = inject(I18n);

  protected readonly packs = this.data.modpacks;
  protected readonly shown = computed(() => (this.packs() ?? []).slice(0, SHOWN));

  /** "1.20.1", or "1.20.1 – 1.21.1" for a pack on several versions. */
  protected versionRange(versions: string[]): string {
    return versions.length > 1 ? `${versions[0]} – ${versions[versions.length - 1]}` : versions[0];
  }
}
