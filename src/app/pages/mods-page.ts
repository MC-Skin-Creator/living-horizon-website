import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SITE } from '../config/site';
import { CompatMod, CompatStatus } from '../data/models';
import { ProjectData } from '../data/project-data';
import { I18n } from '../i18n/i18n';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { SectionHead } from '../shared/section-head';
import { pageMeta } from './page-meta';

const STATUSES: readonly CompatStatus[] = ['works', 'issue', 'untested'];

const ICONS: Record<CompatStatus, IconName> = {
  works: 'check',
  issue: 'bug',
  untested: 'flask',
};

const PLATFORMS = [
  { key: 'modrinth', name: 'Modrinth', logo: 'img/logos/modrinth.svg' },
  { key: 'curseforge', name: 'CurseForge', logo: 'img/logos/curseforge.svg' },
] as const;

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
                  <lh-icon [name]="statusIcons[s]" /> {{ t.status[s] }}
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
                <span class="n">{{ group.mods.length }}</span>
              </h2>
              <ul class="mods">
                @for (mod of group.mods; track mod.name + mod.issue) {
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
                    <span class="name">{{ mod.name }}</span>
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
  protected readonly statuses = STATUSES;
  protected readonly statusIcons = ICONS;
  protected readonly platforms = PLATFORMS;

  protected readonly mods = this.data.compat;
  protected readonly query = signal('');
  protected readonly status = signal<CompatStatus | null>(null);

  /** The mods the search matches, before the status filter: what the chips count. */
  private readonly searched = computed<CompatMod[]>(() => {
    const q = this.query().trim().toLowerCase();
    const all = this.mods() ?? [];
    return q ? all.filter((m) => m.name.toLowerCase().includes(q)) : all;
  });

  protected readonly counts = computed(() => {
    const list = this.searched();
    const n = (s: CompatStatus) => list.filter((m) => m.status === s).length;
    return { all: list.length, works: n('works'), issue: n('issue'), untested: n('untested') };
  });

  /**
   * Mods seen working first, then the shader packs, in a section of their own, then known
   * issues, then the mods waiting for a tester.
   */
  protected readonly groups = computed(() => {
    const t = this.i18n.t().mods;
    const only = this.status();
    const shown = this.searched().filter((m) => !only || m.status === only);
    const mods = shown.filter((m) => m.kind !== 'shader');
    const byStatus = (s: CompatStatus) => ({
      id: s as string,
      title: t.status[s],
      icon: ICONS[s],
      mods: mods.filter((m) => m.status === s),
    });
    return [
      byStatus('works'),
      {
        id: 'shaders',
        title: t.shaders,
        icon: 'sparkles' as IconName,
        mods: shown.filter((m) => m.kind === 'shader'),
      },
      byStatus('issue'),
      byStatus('untested'),
    ].filter((g) => g.mods.length);
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
  }

  protected issueUrl(n: number): string {
    return `${SITE.links.issues}/${n}`;
  }
}
