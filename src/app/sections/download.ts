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
import { jarName } from '../data/parsers';
import { ProjectData } from '../data/project-data';
import { I18n } from '../i18n/i18n';
import { CountPipe, DayPipe } from '../shared/format';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'lh-download',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, CountPipe, DayPipe],
  template: `
    @let t = i18n.t().download;
    <section class="section" id="download">
      <div class="container">
        <header class="section-head center" lhReveal>
          <span class="eyebrow">{{ t.eyebrow }}</span>
          <h2>
            {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
          </h2>
          <p>{{ t.text.before }} <code>mods</code> {{ t.text.after }}</p>
        </header>

        <div class="layout">
          <div class="card picker" lhReveal>
            <div class="release">
              <div>
                <span class="label">{{ t.latest }}</span>
                <strong class="ver">v{{ data.version() }}</strong>
              </div>
              <div class="badges">
                <span class="badge beta"
                  ><span class="beta-dot"></span> {{ i18n.t().common.beta }}</span
                >
                <span class="badge">{{ data.updatedAt() | day }}</span>
              </div>
            </div>

            @if (data.targets().length) {
              <div class="field">
                <label for="mc-version">{{ t.version }}</label>
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
                <span class="label-text" id="loader-label">{{ t.loader }}</span>
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
                        {{ t.needs.before }}
                        <a [href]="site.links.fabricApi" target="_blank" rel="noopener"
                          >Fabric API</a
                        >
                        {{ t.needs.after }}
                      }
                    </span>
                  </div>
                  @if (r.loaders[loader()] === 'untested') {
                    <span class="flag" [title]="t.untested">{{
                      i18n.t().common.needsTesters
                    }}</span>
                  } @else {
                    <span class="flag ok">{{ i18n.t().common.tested }}</span>
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
                {{ jarDirect() ? t.jar : t.releasePage }}
              </a>
              <div class="secondary">
                <a href="#servers">{{ t.sameJar }}</a>
                <a [href]="site.links.curseforge" target="_blank" rel="noopener">{{
                  t.curseforge
                }}</a>
              </div>
            } @else {
              <p class="muted">{{ t.pick }}</p>
              <a
                class="btn primary wide"
                [href]="data.latest()?.url ?? site.links.releases"
                target="_blank"
                rel="noopener"
              >
                <lh-icon name="download" /> {{ t.latest }}
              </a>
            }
          </div>

          <div class="platforms" [lhReveal]="100">
            <div class="total">
              <span class="label">{{ t.total }}</span>
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
                  ><img [src]="p.logo" [alt]="i18n.t().common.logo(p.name)" width="26" height="26"
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
  protected readonly i18n = inject(I18n);
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

  protected readonly platforms = computed(() => {
    const d = this.data.downloads();
    const t = this.i18n.t().download;
    const count = (n: number | null) => (n === null ? t.noCount : t.count(n));
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
        detail: listed === false ? t.soon : listed ? count(d.modrinth) : t.checking,
        soon: listed === false,
      },
      {
        name: 'GitHub Releases',
        logo: 'img/logos/github.svg',
        tone: 'gh',
        url: SITE.links.releases,
        detail: `${count(d.github)} · ${t.everyFile}`,
        soon: false,
      },
      {
        name: 'Nexus Mods',
        logo: 'img/logos/nexusmods.png',
        tone: 'nx',
        url: SITE.links.nexus,
        detail: count(d.nexus),
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
