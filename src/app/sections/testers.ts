import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SITE } from '../config/site';
import { LOADERS, LOADER_NAMES } from '../data/models';
import { ProjectData } from '../data/project-data';
import { HorizonScene } from '../scene/horizon-scene';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'lh-testers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, HorizonScene],
  template: `
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
            <span class="eyebrow">Currently in beta</span>
            <h2>Help bring the horizon to life.</h2>
            <p class="lede">
              Living Horizon is young and runs on a lot of combinations: game versions, loaders,
              Distant Horizons and Voxy versions, shader packs, other mods. Not all of them have
              been tried yet. If you play with it, tell us how it runs — good or bad, every report
              counts.
            </p>

            <ul class="asks">
              <li><lh-icon name="check" /> Your Minecraft version and loader</li>
              <li><lh-icon name="check" /> Distant Horizons or Voxy, and their version</li>
              <li><lh-icon name="check" /> Shader pack, if any (Photon, Complementary…)</li>
              <li><lh-icon name="check" /> A screenshot of what you see</li>
            </ul>

            <div class="ctas">
              <a class="btn primary" [href]="reportUrl()" target="_blank" rel="noopener">
                <lh-icon name="flask" /> Report compatibility
              </a>
              <a class="btn discord" [href]="site.links.discord" target="_blank" rel="noopener">
                <lh-icon name="discord" /> Join the Discord
              </a>
              <a class="btn" [href]="site.links.newIssue" target="_blank" rel="noopener">
                <lh-icon name="bug" /> Open an issue
              </a>
            </div>
          </div>

          <aside class="status card" aria-label="Testing status">
            @if (data.targets().length) {
              <p class="big">
                <strong>{{ data.targetStats().untested }}</strong>
                <span>of {{ data.targetStats().builds }} builds still need a first tester</span>
              </p>
              <div
                class="bar"
                role="img"
                [attr.aria-label]="
                  data.targetStats().tested +
                  ' builds seen working, ' +
                  data.targetStats().untested +
                  ' waiting'
                "
              >
                <span class="tested" [style.width.%]="testedShare()"></span>
              </div>
              <div class="bar-key">
                <span><i class="tested"></i> Seen working</span>
                <span><i class="untested"></i> Waiting for you</span>
              </div>
              <h3>Most wanted</h3>
              <ul class="wanted">
                @for (w of wanted(); track w) {
                  <li>{{ w }}</li>
                }
              </ul>
            } @else {
              <p class="big"><strong>Every</strong> <span>setup tells us something new</span></p>
              <p class="muted">
                Untested combinations show up here as soon as the project data loads.
              </p>
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

  protected readonly reportUrl = computed(() => {
    const version = this.data.version();
    const body = [
      '**Living Horizon version:** ' + version,
      '**Minecraft version:** ',
      '**Loader:** Fabric / Quilt / NeoForge / Forge',
      '**Distant Horizons or Voxy (and version):** ',
      '**Shader pack (and Iris version):** ',
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
