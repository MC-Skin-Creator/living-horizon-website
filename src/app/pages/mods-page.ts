import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MOD_CATEGORIES, MOD_STATUSES, MODS, ModStatus, modIconKey, modLink } from '../config/mods';
import { SITE } from '../config/site';
import { ProjectData } from '../data/project-data';
import { I18n } from '../i18n/i18n';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { pageMeta } from './page-meta';

const PLATFORMS = {
  modrinth: { name: 'Modrinth', logo: 'img/logos/modrinth.svg' },
  curseforge: { name: 'CurseForge', logo: 'img/logos/curseforge.svg' },
};

const STATUS_ICONS: Record<ModStatus, IconName> = {
  works: 'check',
  issue: 'bug',
  untested: 'flask',
};

/** Seen working first, then known issues, then the ones waiting for a tester. */
const ORDER: Record<ModStatus, number> = { works: 0, issue: 1, untested: 2 };

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

        @for (group of groups(); track group.category) {
          <section class="group" [attr.aria-labelledby]="'mods-' + group.category">
            <h2 [id]="'mods-' + group.category">
              {{ t.categories[group.category] }} <span class="n">{{ group.mods.length }}</span>
            </h2>
            <ul class="mods">
              @for (mod of group.mods; track mod.name) {
                @let link = modLink(mod);
                <li class="card mod" [class]="mod.status">
                  <span class="icon">
                    @if (icons()[modIconKey(mod)]; as src) {
                      <img
                        [src]="src"
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
                  <p class="note">{{ mod.note ? mod.note(i18n.t()) : t.untested }}</p>
                  <div class="links">
                    <a
                      class="btn small get"
                      [class]="link.platform"
                      [href]="link.url"
                      target="_blank"
                      rel="noopener"
                    >
                      <img [src]="platforms[link.platform].logo" alt="" width="16" height="16" />
                      {{ i18n.t().modpacks.get(platforms[link.platform].name) }}
                    </a>
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
  private readonly data = inject(ProjectData);
  protected readonly statuses = MOD_STATUSES;
  protected readonly statusIcons = STATUS_ICONS;
  protected readonly platforms = PLATFORMS;
  protected readonly modLink = modLink;
  protected readonly modIconKey = modIconKey;
  protected readonly icons = this.data.modIcons;

  protected readonly query = signal('');
  protected readonly status = signal<ModStatus | null>(null);

  /** The mods the search matches, before the status filter: what the chips count. */
  private readonly searched = computed(() => {
    const q = this.query().trim().toLowerCase();
    return q ? MODS.filter((m) => m.name.toLowerCase().includes(q)) : MODS;
  });

  protected readonly counts = computed(() => {
    const list = this.searched();
    const n = (s: ModStatus) => list.filter((m) => m.status === s).length;
    return { all: list.length, works: n('works'), issue: n('issue'), untested: n('untested') };
  });

  protected readonly groups = computed(() => {
    const status = this.status();
    const shown = this.searched().filter((m) => !status || m.status === status);
    return MOD_CATEGORIES.map((category) => ({
      category,
      mods: shown
        .filter((m) => m.category === category)
        .sort((a, b) => ORDER[a.status] - ORDER[b.status] || a.name.localeCompare(b.name)),
    })).filter((g) => g.mods.length);
  });

  /** A new issue, in English, the language of the issues. */
  protected readonly reportUrl = `${SITE.links.newIssue}?${new URLSearchParams({
    title: 'Compatibility: ',
    labels: 'mod compatibility',
  })}`;

  constructor() {
    pageMeta('mods');
  }

  protected issueUrl(n: number): string {
    return `${SITE.links.issues}/${n}`;
  }
}
