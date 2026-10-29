import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SITE } from '../config/site';
import { CompatMod, CompatStatus } from '../data/models';
import { ProjectData } from '../data/project-data';
import { I18n } from '../i18n/i18n';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { pageMeta } from './page-meta';

const STATUSES: readonly CompatStatus[] = ['works', 'issue', 'untested'];

const STATUS_ICONS: Record<CompatStatus, IconName> = {
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
  imports: [Icon, Reveal],
  template: `
    @let t = i18n.t().mods;
    <section class="section page-top">
      <div class="container">
        <header class="section-head">
          <span class="eyebrow">{{ t.eyebrow }}</span>
          <h1>
            {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
          </h1>
          <p>{{ t.text }}</p>
        </header>

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

          @for (group of groups(); track group.status) {
            <section class="group" [attr.aria-labelledby]="'mods-' + group.status">
              <h2 [id]="'mods-' + group.status" [class]="group.status">
                <lh-icon [name]="statusIcons[group.status]" /> {{ t.status[group.status] }}
                <span class="n">{{ group.mods.length }}</span>
              </h2>
              <ul class="mods">
                @for (mod of group.mods; track mod.name + mod.issue) {
                  <li class="card mod" [class]="mod.status">
                    <span class="icon">
                      @if (mod.icon) {
                        <img
                          [src]="mod.icon"
                          alt=""
                          width="48"
                          height="48"
                          loading="lazy"
                          referrerpolicy="no-referrer"
                        />
                      } @else {
                        <lh-icon name="box" />
                      }
                    </span>
                    <span class="head">
                      <h3>{{ mod.name }}</h3>
                      <span class="status" [class]="mod.status">
                        <lh-icon [name]="statusIcons[mod.status]" /> {{ t.status[mod.status] }}
                      </span>
                    </span>
                    @if (mod.note) {
                      <p class="note" lang="en">{{ mod.note }}</p>
                    } @else if (mod.status === 'untested') {
                      <p class="note">{{ t.untested }}</p>
                    }
                    <div class="links">
                      @for (p of platforms; track p.key) {
                        @if (mod[p.key]; as url) {
                          <a
                            class="btn small get"
                            [class]="p.key"
                            [href]="url"
                            target="_blank"
                            rel="noopener"
                            [attr.aria-label]="i18n.t().modpacks.get(p.name)"
                            [title]="i18n.t().modpacks.get(p.name)"
                          >
                            <img [src]="p.logo" alt="" width="16" height="16" />
                            {{ p.name }}
                          </a>
                        }
                      }
                      @if (mod.issue) {
                        <a
                          class="issue-link"
                          [href]="issueUrl(mod.issue)"
                          target="_blank"
                          rel="noopener"
                        >
                          <lh-icon name="github" /> {{ t.issue(mod.issue) }}
                        </a>
                      }
                    </div>
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
  protected readonly statusIcons = STATUS_ICONS;
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

  /** Seen working first, then known issues, then the mods waiting for a tester. */
  protected readonly groups = computed(() => {
    const only = this.status();
    return STATUSES.filter((s) => !only || s === only)
      .map((status) => ({
        status,
        mods: this.searched().filter((m) => m.status === status),
      }))
      .filter((g) => g.mods.length);
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
