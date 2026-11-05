import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../config/site';
import { LOADERS, LOADER_NAMES } from '../data/models';
import { ProjectData } from '../data/project-data';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { compatibilityReport } from '../shared/report';

type CompatibilityTexts = Messages['compatibility'];

@Component({
  selector: 'lh-compatibility',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, RouterLink, NgTemplateOutlet],
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

        <ul class="works">
          @for (w of works; track w.tone; let i = $index) {
            @let title = w.title ?? t.cards.vanilla.title;
            <li [lhReveal]="(i % 4) * 60">
              @if (w.link) {
                <a
                  class="card work"
                  [class]="w.tone"
                  [href]="w.link"
                  target="_blank"
                  rel="noopener"
                >
                  <ng-container *ngTemplateOutlet="work; context: { $implicit: w, title }" />
                </a>
              } @else {
                <div class="card work" [class]="w.tone">
                  <ng-container *ngTemplateOutlet="work; context: { $implicit: w, title }" />
                </div>
              }
            </li>
          }
        </ul>

        <ng-template #work let-w let-title="title">
          @if (w.logo) {
            <img
              class="logo"
              [src]="w.logo"
              [alt]="i18n.t().common.logo(title)"
              width="40"
              height="40"
              loading="lazy"
            />
          } @else {
            <span class="icon"><lh-icon [name]="w.icon" /></span>
          }
          <span class="copy">
            <strong
              >{{ title }}
              @if (w.link) {
                <lh-icon name="external" />
              }
            </strong>
            <span>{{ cardText(t, w.tone) }}</span>
          </span>
        </ng-template>

        <a class="card others" routerLink="/mods" lhReveal>
          <span class="faces" aria-hidden="true">
            @for (m of others(); track m.name) {
              <img [src]="m.icon" alt="" width="40" height="40" loading="lazy" />
            }
          </span>
          <span class="copy">
            <strong>{{ t.others.title }}</strong>
            @if (data.compat()?.length; as n) {
              <span>{{ t.others.text(n) }}</span>
            }
          </span>
          <span class="go">{{ t.others.link }} <lh-icon name="arrow-right" /></span>
        </a>

        <details class="matrix card" lhReveal>
          <summary class="matrix-head">
            <span>
              <h3>{{ t.matrixTitle }}</h3>
              <p>
                {{ t.matrixText }}
                @if (data.targets().length) {
                  {{ t.builds(data.targetStats().builds, data.mcRange()) }}
                }
              </p>
            </span>
            <lh-icon name="plus" />
          </summary>

          <ul class="key">
            <li>
              <span class="st tested"><lh-icon name="check" /></span>
              {{ i18n.t().common.seenWorking }}
            </li>
            <li>
              <span class="st untested">?</span> {{ t.keyUntested }} ·
              <a [href]="reportUrl()" target="_blank" rel="noopener">{{ t.report }}</a>
            </li>
          </ul>

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
        </details>
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
  /**
   * Faces of the link to the mods page: the mods seen working first, other than the far
   * terrain ones the cards above show.
   */
  protected readonly others = computed(() =>
    (this.data.compat() ?? [])
      .filter((m) => m.icon && !/distant horizons|voxy/i.test(m.name))
      .sort((a, b) => +(b.status === 'works') - +(a.status === 'works'))
      .slice(0, 6),
  );

  /** A card per far-terrain mod, and vanilla; texts in `compatibility.cards.<tone>`. */
  protected readonly works: {
    icon: IconName;
    /** The mod's own logo, shown instead of the icon. */
    logo?: string;
    tone: keyof CompatibilityTexts['cards'];
    /** The mod's name; vanilla's is translated. */
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
    {
      icon: 'mountain',
      logo: 'img/logos/lodistance.webp',
      tone: 'lodistance',
      title: 'Lodistance',
      link: SITE.links.lodistance,
    },
    {
      icon: 'mountain',
      logo: 'img/logos/far-view.webp',
      tone: 'farView',
      title: 'Far View',
      link: SITE.links.farView,
    },
    {
      icon: 'mountain',
      logo: 'img/logos/ecstatic.webp',
      tone: 'ecstatic',
      title: 'Ecstatic',
      link: SITE.links.ecstatic,
    },
    {
      icon: 'box',
      logo: 'img/logos/bobby.webp',
      tone: 'bobby',
      title: 'Bobby',
      link: SITE.links.bobby,
    },
    {
      icon: 'sparkles',
      logo: 'img/logos/iris.webp',
      tone: 'iris',
      title: 'Iris',
      link: SITE.links.iris,
    },
    { icon: 'box', tone: 'vanilla' },
  ];

  protected cardText(t: CompatibilityTexts, tone: keyof CompatibilityTexts['cards']): string {
    return t.cards[tone].text;
  }

  /** A compatibility report, prefilled; in English, the language of the issues. */
  protected readonly reportUrl = computed(() => compatibilityReport(this.data.version()));
}
