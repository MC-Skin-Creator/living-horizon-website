import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SITE } from '../config/site';
import { ProjectData } from '../data/project-data';
import { I18n } from '../i18n/i18n';
import { Icon } from '../shared/icon';
import { compatibilityReport } from '../shared/report';
import { Reveal } from '../shared/reveal';

/** Testing, contributing and the Discord: one short section near the end of the page. */
@Component({
  selector: 'lh-help',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    @let t = i18n.t().help;
    <section class="section" id="help">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">{{ t.eyebrow }}</span>
          <h2>
            {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
          </h2>
        </header>

        <div class="ways">
          <article class="card way test" lhReveal>
            <span class="icon"><lh-icon name="flask" /></span>
            <h3>{{ t.test.title }}</h3>
            <p>{{ t.test.text }}</p>
            @if (untested(); as n) {
              <p class="stat"><span class="dot"></span> {{ t.test.untested(n) }}</p>
            }
            <a class="btn primary small" [href]="reportUrl()" target="_blank" rel="noopener">
              <lh-icon name="bug" /> {{ t.test.report }}
            </a>
          </article>

          <article class="card way" [lhReveal]="80">
            <span class="icon"><lh-icon name="github" /></span>
            <h3>{{ t.code.title }}</h3>
            <p>{{ t.code.text }}</p>
            <a class="btn small" [href]="site.links.contributing" target="_blank" rel="noopener">
              <lh-icon name="github" /> {{ t.code.guide }}
            </a>
          </article>

          <article class="card way" [lhReveal]="160">
            <span class="icon"><lh-icon name="discord" /></span>
            <h3>{{ t.discord.title }}</h3>
            <p>{{ t.discord.text }}</p>
            <a class="btn discord small" [href]="site.links.discord" target="_blank" rel="noopener">
              <lh-icon name="discord" /> {{ t.discord.join }}
            </a>
          </article>
        </div>
      </div>
    </section>
  `,
  styleUrl: './help.scss',
})
export class Help {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);
  protected readonly i18n = inject(I18n);

  /** Builds that start in the game but nobody has seen drawing in a world yet. */
  protected readonly untested = computed(() => this.data.targetStats().untested);
  protected readonly reportUrl = computed(() => compatibilityReport(this.data.version()));
}
