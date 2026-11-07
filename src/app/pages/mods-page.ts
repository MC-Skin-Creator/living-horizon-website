import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SITE } from '../config/site';
import { CompatMod, CompatStatus, PackMod } from '../data/models';
import { ProjectData } from '../data/project-data';
import { I18n } from '../i18n/i18n';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { SectionHead } from '../shared/section-head';
import { pageMeta } from './page-meta';

const STATUSES: readonly CompatStatus[] = ['works', 'issue', 'untested'];

/** A filter chip: a status, or the mods seen in modpacks. */
type Filter = CompatStatus | 'packs';

const ICONS: Record<Filter, IconName> = {
  works: 'check',
  issue: 'bug',
  untested: 'flask',
  packs: 'box',
};

const PLATFORMS = [
  { key: 'modrinth', name: 'Modrinth', logo: 'img/logos/modrinth.svg' },
  { key: 'curseforge', name: 'CurseForge', logo: 'img/logos/curseforge.svg' },
] as const;

/** The modpacks' mods shown before "show more", while nothing is searched. */
const PACK_PREVIEW = 24;

/** A tile of the page: a checked mod, or one seen in modpacks. */
interface Tile {
  key: string;
  name: string;
  icon: string | null;
  modrinth: string | null;
  curseforge: string | null;
  issue: number | null;
  /** What the README or the issue says, in English: the tile's tooltip. */
  note: string | null;
  /** In how many modpacks with Living Horizon. */
  packs: number;
}

const fromCompat = (m: CompatMod): Tile => ({
  key: m.name + m.issue,
  name: m.name,
  icon: m.icon,
  modrinth: m.modrinth,
  curseforge: m.curseforge,
  issue: m.issue,
  note: m.note,
  packs: 0,
});

const fromPack = (m: PackMod): Tile => ({
  key: 'pack:' + m.name,
  name: m.name,
  icon: m.icon,
  modrinth: m.modrinth && `https://modrinth.com/mod/${m.modrinth}`,
  curseforge: m.curseforge && `https://www.curseforge.com/minecraft/mc-mods/${m.curseforge}`,
  issue: null,
  note: null,
  packs: m.packs.length,
});

/** The last part of a page's address, to tell the same mod under two names. */
const slugOf = (url: string | null) => url?.replace(/\/+$/, '').split('/').pop()?.toLowerCase();

/**
 * The mods Living Horizon was checked with. Nothing here is written by hand: the list, each
 * status and each note come from the mod's README and issues, the icons and links from
 * ModpackIndex, Modrinth and CurseForge (the `compat` source, `data/sources.ts`).
 */
@Component({
  selector: 'lh-mods-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHead],
  template: `
    @let t = i18n.t().mods;
    <section class="section page-top">
      <div class="container">
        <header lhHead [texts]="t" [text]="t.text" [page]="true"></header>

        @if (mods(); as all) {
          <div class="toolbar">
            <label class="search">
              <lh-icon name="search" />
              <span class="visually-hidden">{{ t.search }}</span>
              <input
                type="search"
                [placeholder]="t.search"
                [value]="query()"
                (input)="query.set($any($event.target).value)"
              />
            </label>
            <div class="chips" role="group" [attr.aria-label]="t.filter">
              <button
                type="button"
                [class.on]="status() === null"
                [attr.aria-pressed]="status() === null"
                (click)="status.set(null)"
              >
                {{ t.all }} <span class="n">{{ counts().all }}</span>
              </button>
              @for (s of statuses; track s) {
                <button
                  type="button"
                  [class]="s"
                  [class.on]="status() === s"
                  [attr.aria-pressed]="status() === s"
                  (click)="status.set(status() === s ? null : s)"
                >
                  <lh-icon [name]="statusIcons[s]" />
                  {{ s === 'packs' ? t.packs.chip : t.status[s] }}
                  <span class="n">{{ counts()[s] }}</span>
                </button>
              }
            </div>
          </div>

          @for (group of groups(); track group.id) {
            <section class="group" [attr.aria-labelledby]="'mods-' + group.id">
              <h2 [id]="'mods-' + group.id" [class]="group.id">
                <lh-icon [name]="group.icon" />
                {{ group.title }}
                <span class="n">{{ group.total }}</span>
              </h2>
              @if (group.id === 'packs') {
                <p class="lede">{{ t.packs.text }}</p>
              }
              <ul class="mods">
                @for (mod of group.mods; track mod.key) {
                  <li
                    class="mod"
                    [title]="mod.note ?? mod.name"
                    [attr.lang]="mod.note ? 'en' : null"
                  >
                    <span class="icon">
                      @if (mod.icon) {
                        <img
                          [src]="mod.icon"
                          alt=""
                          width="32"
                          height="32"
                          loading="lazy"
                          referrerpolicy="no-referrer"
                        />
                      } @else {
                        <lh-icon name="box" />
                      }
                    </span>
                    <span class="name">
                      <strong>{{ mod.name }}</strong>
                      @if (mod.packs) {
                        <small>{{ t.packs.count(mod.packs) }}</small>
                      }
                    </span>
                    <span class="links">
                      @for (p of platforms; track p.key) {
                        @if (mod[p.key]; as url) {
                          <a
                            [class]="p.key"
                            [href]="url"
                            target="_blank"
                            rel="noopener"
                            [attr.aria-label]="t.page(p.name) + ': ' + mod.name"
                            [title]="t.page(p.name)"
                          >
                            <img [src]="p.logo" alt="" width="16" height="16" />
                          </a>
                        }
                      }
                      @if (mod.issue) {
                        <a
                          class="issue"
                          [href]="issueUrl(mod.issue)"
                          target="_blank"
                          rel="noopener"
                          [attr.aria-label]="t.issue(mod.issue) + ': ' + mod.name"
                          [title]="mod.note ?? t.issue(mod.issue)"
                        >
                          <lh-icon name="github" />
                        </a>
                      }
                    </span>
                  </li>
                }
              </ul>
              @if (group.hidden) {
                <button type="button" class="btn small all" (click)="showAll.set(true)">
                  {{ t.packs.more(group.hidden) }}
                </button>
              }
            </section>
          } @empty {
            <p class="card empty"><lh-icon name="search" /> {{ t.none }}</p>
          }
        } @else if (data.settled()) {
          <p class="card empty">
            {{ t.failed }}
            <a [href]="labelUrl" target="_blank" rel="noopener">{{ t.failedLink }}</a>
          </p>
        } @else {
          <p class="card empty"><span class="skeleton" style="width: 60%"></span></p>
        }

        <aside class="card missing" lhReveal>
          <span class="mark"><lh-icon name="plus" /></span>
          <div>
            <h2>{{ t.missing.title }}</h2>
            <p>{{ t.missing.text }}</p>
          </div>
          <a class="btn primary" [href]="reportUrl" target="_blank" rel="noopener">
            <lh-icon name="message" /> {{ t.missing.link }}
          </a>
        </aside>
      </div>
    </section>
  `,
  styleUrl: './mods-page.scss',
})
export class ModsPage {
  protected readonly i18n = inject(I18n);
  protected readonly data = inject(ProjectData);
  protected readonly statuses: readonly Filter[] = [...STATUSES, 'packs'];
  protected readonly statusIcons = ICONS;
  protected readonly platforms = PLATFORMS;

  protected readonly mods = this.data.compat;
  protected readonly query = signal('');
  protected readonly status = signal<Filter | null>(null);
  protected readonly showAll = signal(false);

  /**
   * The mods of the modpacks that ship Living Horizon, but not those already checked: a
   * checked mod has its own tile, with its status.
   */
  private readonly packMods = computed<Tile[]>(() => {
    const checked = this.mods() ?? [];
    const names = new Set(checked.map((m) => m.name.toLowerCase()));
    const slugs = new Set(checked.flatMap((m) => [slugOf(m.modrinth), slugOf(m.curseforge)]));
    return (this.data.packMods()?.mods ?? [])
      .filter(
        (m) =>
          !names.has(m.name.toLowerCase()) &&
          !(m.modrinth && slugs.has(m.modrinth.toLowerCase())) &&
          !(m.curseforge && slugs.has(m.curseforge.toLowerCase())),
      )
      .map(fromPack);
  });

  private readonly matches = (name: string) => {
    const q = this.query().trim().toLowerCase();
    return !q || name.toLowerCase().includes(q);
  };

  /** The mods the search matches, before the status filter: what the chips count. */
  private readonly searched = computed(() => ({
    checked: (this.mods() ?? []).filter((m) => this.matches(m.name)),
    packs: this.packMods().filter((m) => this.matches(m.name)),
  }));

  protected readonly counts = computed(() => {
    const { checked, packs } = this.searched();
    const n = (s: CompatStatus) => checked.filter((m) => m.status === s).length;
    return {
      all: checked.length + packs.length,
      works: n('works'),
      issue: n('issue'),
      untested: n('untested'),
      packs: packs.length,
    };
  });

  /**
   * Mods seen working first, then the shader packs, the mods modpacks ship with it, known
   * issues, and the mods waiting for a tester.
   */
  protected readonly groups = computed(() => {
    const t = this.i18n.t().mods;
    const only = this.status();
    const { checked, packs } = this.searched();
    const shown = checked.filter((m) => !only || m.status === only);
    const mods = shown.filter((m) => m.kind !== 'shader');
    const group = (id: string, title: string, icon: IconName, tiles: Tile[], hidden = 0) => ({
      id,
      title,
      icon,
      mods: tiles,
      total: tiles.length + hidden,
      hidden,
    });
    const byStatus = (s: CompatStatus) =>
      group(s, t.status[s], ICONS[s], mods.filter((m) => m.status === s).map(fromCompat));
    // Long: a preview, unless a search or the chip asks for them.
    const full = this.showAll() || !!this.query().trim() || only === 'packs';
    const packsShown = full ? packs : packs.slice(0, PACK_PREVIEW);
    return [
      byStatus('works'),
      group(
        'shaders',
        t.shaders,
        'sparkles',
        shown.filter((m) => m.kind === 'shader').map(fromCompat),
      ),
      ...(only && only !== 'packs'
        ? []
        : [
            group(
              'packs',
              t.packs.title,
              ICONS.packs,
              packsShown,
              packs.length - packsShown.length,
            ),
          ]),
      byStatus('issue'),
      byStatus('untested'),
    ].filter(
      (g) => g.mods.length && (!only || g.id === only || (only === 'works' && g.id === 'shaders')),
    );
  });

  /** A new issue, in English, the language of the issues. */
  protected readonly reportUrl = `${SITE.links.newIssue}?${new URLSearchParams({
    title: 'Compatibility: ',
    labels: 'mod compatibility',
  })}`;

  /** The issues the list is read from. */
  protected readonly labelUrl = SITE.links.modCompatibility;

  constructor() {
    pageMeta('mods');
    this.data.need('packMods');
  }

  protected issueUrl(n: number): string {
    return `${SITE.links.issues}/${n}`;
  }
}
