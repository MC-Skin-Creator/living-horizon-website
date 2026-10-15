import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { SITE } from '../config/site';
import { LOADERS, LOADER_NAMES, Loader } from '../data/models';
import { dataPackName, jarName } from '../data/parsers';
import { ProjectData } from '../data/project-data';
import { CountPipe, DayPipe } from '../shared/format';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'lh-download',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, CountPipe, DayPipe],
  template: `
    <section class="section" id="download">
      <div class="container">
        <header class="section-head center" lhReveal>
          <span class="eyebrow">Download</span>
          <h2>Get <span class="accent">Living Horizon</span></h2>
          <p>
            Free, client-side, one jar per game version and loader. Drop it in your
            <code>mods</code> folder and the horizon comes alive.
          </p>
        </header>

        <div class="layout">
          <div class="card picker" lhReveal>
            <div class="release">
              <div>
                <span class="label">Latest release</span>
                <strong class="ver">v{{ data.version() }}</strong>
              </div>
              <div class="badges">
                <span class="badge beta"><span class="beta-dot"></span> Beta</span>
                <span class="badge">{{ data.updatedAt() | day }}</span>
              </div>
            </div>

            @if (data.targets().length) {
              <div class="field">
                <label for="mc-version">Minecraft version</label>
                <div class="select">
                  <select id="mc-version" [value]="rowKey()" (change)="pickRow($event)">
                    @for (row of data.targets(); track row.key) {
                      <option [value]="row.key" [selected]="row.key === rowKey()">
                        {{ row.label }}
                      </option>
                    }
                  </select>
                </div>
              </div>

              <div class="field">
                <span class="label-text" id="loader-label">Loader</span>
                <div class="seg" role="radiogroup" aria-labelledby="loader-label">
                  @for (l of loaders; track l) {
                    <button
                      type="button"
                      role="radio"
                      [attr.aria-checked]="loader() === l"
                      [class.on]="loader() === l"
                      [disabled]="!row()?.loaders?.[l]"
                      (click)="loader.set(l)"
                    >
                      {{ names[l] }}
                    </button>
                  }
                </div>
              </div>

              @if (row(); as r) {
                <div class="file">
                  <lh-icon name="box" />
                  <div>
                    <code>{{ file() }}</code>
                    <span class="needs">
                      Java {{ r.java }}
                      @if (loader() === 'fabric' || loader() === 'quilt') {
                        · needs the
                        <a [href]="site.links.fabricApi" target="_blank" rel="noopener"
                          >Fabric API</a
                        >
                      }
                    </span>
                  </div>
                  @if (r.loaders[loader()] === 'untested') {
                    <span
                      class="flag"
                      title="This build starts in the game but nobody has reported it drawing in a world yet"
                      >Needs testers</span
                    >
                  } @else {
                    <span class="flag ok">Tested</span>
                  }
                </div>
              }

              <a
                class="btn primary wide"
                [href]="jarUrl()"
                [attr.target]="jarDirect() ? null : '_blank'"
                rel="noopener"
              >
                <lh-icon name="download" />
                {{ jarDirect() ? 'Download the jar' : 'Get it from the release page' }}
              </a>
              <div class="secondary">
                @if (packUrl(); as pack) {
                  <a [href]="pack">Data pack (optional, for servers)</a>
                }
                <a [href]="site.links.curseforge" target="_blank" rel="noopener"
                  >or get it on CurseForge</a
                >
              </div>
            } @else {
              <p class="muted">Pick your file on the release page or on CurseForge.</p>
              <a
                class="btn primary wide"
                [href]="data.latest()?.url ?? site.links.releases"
                target="_blank"
                rel="noopener"
              >
                <lh-icon name="download" /> Latest release
              </a>
            }
          </div>

          <div class="platforms" [lhReveal]="100">
            <div class="total">
              <span class="label">Downloads, all platforms</span>
              <strong>
                @if (data.downloads().total; as t) {
                  {{ t | count }}
                } @else {
                  <span class="skeleton"></span>
                }
              </strong>
            </div>

            @for (p of platforms(); track p.name) {
              <a
                class="card platform"
                [class.soon]="p.soon"
                [href]="p.url"
                target="_blank"
                rel="noopener"
              >
                <span class="mark" [class]="p.tone"
                  ><img [src]="p.logo" [alt]="p.name + ' logo'" width="26" height="26"
                /></span>
                <span class="pinfo">
                  <strong>{{ p.name }}</strong>
                  <span>{{ p.detail }}</span>
                </span>
                <lh-icon name="external" />
              </a>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './download.scss',
})
export class Download {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);
  protected readonly loaders = LOADERS;
  protected readonly names = LOADER_NAMES;

  /** The newest version until the visitor picks one. */
  protected readonly rowKey = linkedSignal(() => this.data.targets()[0]?.key ?? '');
  protected readonly row = computed(
    () => this.data.targets().find((r) => r.key === this.rowKey()) ?? null,
  );
  protected readonly loader = signal<Loader>('fabric');

  protected readonly file = computed(() => {
    const row = this.row();
    return row ? jarName(this.data.version(), row, this.loader()) : '';
  });

  private readonly asset = computed(
    () => this.data.latest()?.assets.find((a) => a.name === this.file()) ?? null,
  );

  protected readonly jarDirect = computed(() => !!this.asset());
  protected readonly jarUrl = computed(
    () => this.asset()?.browser_download_url ?? this.data.latest()?.url ?? SITE.links.releases,
  );

  protected readonly packUrl = computed(() => {
    const row = this.row();
    if (!row) return null;
    const name = dataPackName(this.data.version(), row);
    return this.data.latest()?.assets.find((a) => a.name === name)?.browser_download_url ?? null;
  });

  protected readonly platforms = computed(() => {
    const d = this.data.downloads();
    const count = (n: number | null) =>
      n === null ? 'Downloads not available' : `${new Intl.NumberFormat('en').format(n)} downloads`;
    const listed = this.data.modrinthListed();
    return [
      {
        name: 'CurseForge',
        logo: 'img/logos/curseforge.svg',
        tone: 'cf',
        url: SITE.links.curseforge,
        detail: count(d.curseforge),
        soon: false,
      },
      {
        name: 'Modrinth',
        logo: 'img/logos/modrinth.svg',
        tone: 'mr',
        url: SITE.links.modrinth,
        detail: listed === false ? 'Coming soon' : listed ? count(d.modrinth) : 'Checking…',
        soon: listed === false,
      },
      {
        name: 'GitHub Releases',
        logo: 'img/logos/github.svg',
        tone: 'gh',
        url: SITE.links.releases,
        detail: `${count(d.github)} · every file`,
        soon: false,
      },
      {
        name: 'Nexus Mods',
        logo: 'img/logos/nexusmods.png',
        tone: 'nx',
        url: SITE.links.nexus,
        detail: 'Mod page',
        soon: false,
      },
    ];
  });

  protected pickRow(event: Event) {
    const key = (event.target as HTMLSelectElement).value;
    this.rowKey.set(key);
    const row = this.data.targets().find((r) => r.key === key);
    if (row && !row.loaders[this.loader()]) {
      this.loader.set(LOADERS.find((l) => row.loaders[l]) ?? 'fabric');
    }
  }
}
