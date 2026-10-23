import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SITE } from '../config/site';
import { LOADERS, LOADER_NAMES } from '../data/models';
import { ProjectData } from '../data/project-data';
import { I18n } from '../i18n/i18n';
import { HorizonScene } from '../scene/horizon-scene';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'lh-testers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, HorizonScene],
  template: `
    @let t = i18n.t().testers;
    <section class="section" id="testers">
      <div class="container">
        <div class="panel" lhReveal>
          <lh-horizon
            class="backdrop"
            scene="ridge"
            [resolution]="160"
            [animate]="false"
            aria-hidden="true"
          />

          <div class="copy">
            <span class="eyebrow">{{ t.eyebrow }}</span>
            <h2>{{ t.title }}</h2>
            <p class="lede">{{ t.lede }}</p>

            <ul class="asks">
              @for (ask of t.asks; track $index) {
                <li><lh-icon name="check" /> {{ ask }}</li>
              }
            </ul>

            <div class="ctas">
              <a class="btn primary" [href]="reportUrl()" target="_blank" rel="noopener">
                <lh-icon name="flask" /> {{ t.report }}
              </a>
              <a class="btn discord" [href]="site.links.discord" target="_blank" rel="noopener">
                <lh-icon name="discord" /> {{ t.discord }}
              </a>
              <a class="btn" [href]="site.links.newIssue" target="_blank" rel="noopener">
                <lh-icon name="bug" /> {{ t.issue }}
              </a>
            </div>
          </div>

          <aside class="status card" [attr.aria-label]="t.status">
            @if (data.targets().length) {
              <p class="big">
                <strong>{{ data.targetStats().untested }}</strong>
                <span>{{ t.waiting(data.targetStats().builds) }}</span>
              </p>
              <div
                class="bar"
                role="img"
                [attr.aria-label]="t.bar(data.targetStats().tested, data.targetStats().untested)"
              >
                <span class="tested" [style.width.%]="testedShare()"></span>
              </div>
              <div class="bar-key">
                <span><i class="tested"></i> {{ t.seen }}</span>
                <span><i class="untested"></i> {{ t.yours }}</span>
              </div>
              <h3>{{ t.wanted }}</h3>
              <ul class="wanted">
                @for (w of wanted(); track w) {
                  <li>{{ w }}</li>
                }
              </ul>
            } @else {
              <p class="big">
                <strong>{{ t.every }}</strong> <span>{{ t.everyRest }}</span>
              </p>
              <p class="muted">{{ t.loading }}</p>
            }
          </aside>
        </div>
      </div>
    </section>
  `,
  styleUrl: './testers.scss',
})
export class Testers {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);
  protected readonly i18n = inject(I18n);

  protected readonly testedShare = computed(() => {
    const s = this.data.targetStats();
    return s.builds ? (100 * s.tested) / s.builds : 0;
  });

  /** The newest game versions first: that is where most players are. */
  protected readonly wanted = computed(() => {
    const out: string[] = [];
    for (const row of this.data.targets()) {
      for (const l of LOADERS) {
        if (row.loaders[l] === 'untested') out.push(`${LOADER_NAMES[l]} · ${row.label}`);
      }
    }
    return out.slice(0, 6);
  });

  /** In English, the language of the issues. */
  protected readonly reportUrl = computed(() => {
    const version = this.data.version();
    const body = [
      '**Living Horizon version:** ' + version,
      '**Minecraft version:** ',
      '**Loader:** Fabric / Quilt / NeoForge / Forge',
      '**Distant Horizons or Voxy (and version):** ',
      '**Shader pack (and Iris version):** ',
      '**Where:** single player / LAN / server with the mod / server without the mod',
      '**Other mods:** ',
      '',
      '**How does it run?** (works / something looks wrong / crash)',
      '',
      '**Screenshots or log:**',
      '',
    ].join('\n');
    const params = new URLSearchParams({ title: 'Compatibility report: ', body });
    return `${SITE.links.newIssue}?${params}`;
  });
}
