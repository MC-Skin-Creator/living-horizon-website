import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE } from '../config/site';
import { LOADERS, LOADER_NAMES } from '../data/models';
import { ProjectData } from '../data/project-data';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

type CompatibilityTexts = Messages['compatibility'];

@Component({
  selector: 'lh-compatibility',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    @let t = i18n.t().compatibility;
    <section class="section" id="compatibility">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">{{ t.eyebrow }}</span>
          <h2>
            {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
          </h2>
          <p>{{ t.text }}</p>
        </header>

        <div class="works">
          @for (w of works; track w.tone; let i = $index) {
            @let title = w.title ?? t.cards.vanilla.title;
            <article class="card work" [class]="w.tone" [lhReveal]="i * 80">
              <div class="top">
                @if (w.logo) {
                  <img
                    class="logo"
                    [src]="w.logo"
                    [alt]="i18n.t().common.logo(title)"
                    width="48"
                    height="48"
                  />
                } @else {
                  <span class="icon"><lh-icon [name]="w.icon" /></span>
                }
                <span class="ok"><lh-icon name="check" /> {{ t.works }}</span>
              </div>
              <h3>{{ title }}</h3>
              <p>{{ t.cards[w.tone].text }}</p>
              @if (w.link) {
                <a [href]="w.link" target="_blank" rel="noopener"
                  >{{ linkText(t, w.tone) }} <lh-icon name="external"
                /></a>
              }
            </article>
          }
        </div>

        <div class="extras" lhReveal>
          @for (e of t.extras; track $index) {
            <span class="pill"><lh-icon [name]="extraIcons[$index]" /> {{ e }}</span>
          }
        </div>

        <div class="matrix card" lhReveal>
          <div class="matrix-head">
            <div>
              <h3>{{ t.matrixTitle }}</h3>
              <p>
                {{ t.matrixText }}
                @if (data.targets().length) {
                  {{ t.builds(data.targetStats().builds, data.mcRange()) }}
                }
              </p>
            </div>
            <ul class="key">
              <li>
                <span class="st tested"><lh-icon name="check" /></span>
                {{ i18n.t().common.seenWorking }}
              </li>
              <li><span class="st untested">?</span> {{ t.keyUntested }}</li>
            </ul>
          </div>

          @if (data.targets().length) {
            <div class="scroll" tabindex="0" role="region" [attr.aria-label]="t.table">
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
                              <span class="st tested" [title]="i18n.t().common.seenWorking"
                                ><lh-icon name="check" /><span class="visually-hidden">{{
                                  i18n.t().common.tested
                                }}</span></span
                              >
                            }
                            @case ('untested') {
                              <span class="st untested" [title]="t.untested"
                                >?<span class="visually-hidden">{{
                                  i18n.t().common.needsTesters
                                }}</span></span
                              >
                            }
                            @default {
                              <span class="st none" [title]="t.noBuild"
                                >–<span class="visually-hidden">{{ t.notAvailable }}</span></span
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
              {{ t.fallback(data.mcRange()) }}
              <a [href]="site.links.readme" target="_blank" rel="noopener">{{ t.fullTable }}</a>
            </p>
          } @else {
            <p class="empty"><span class="skeleton" style="width: 60%"></span></p>
          }

          <div class="loaders">
            @for (l of loaders; track l) {
              <div class="loader">
                <strong>{{ names[l] }}</strong>
                <span>{{ t.loaders[l] }}</span>
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

  protected readonly i18n = inject(I18n);
  protected readonly extraIcons: IconName[] = ['sparkles', 'server', 'sliders'];

  /** Texts in `compatibility.cards.<tone>`; Vanilla's name is translated too. */
  protected readonly works: {
    icon: IconName;
    /** The mod's own logo, shown instead of the icon. */
    logo?: string;
    tone: keyof CompatibilityTexts['cards'];
    title?: string;
    link?: string;
  }[] = [
    {
      icon: 'mountain',
      logo: 'img/logos/distant-horizons.webp',
      tone: 'dh',
      title: 'Distant Horizons',
      link: SITE.links.distantHorizons,
    },
    {
      icon: 'layers',
      logo: 'img/logos/voxy.webp',
      tone: 'voxy',
      title: 'Voxy',
      link: SITE.links.voxy,
    },
    { icon: 'box', tone: 'vanilla' },
  ];

  protected linkText(t: CompatibilityTexts, tone: keyof CompatibilityTexts['cards']): string {
    const card = t.cards[tone];
    return 'link' in card ? card.link : '';
  }
}
