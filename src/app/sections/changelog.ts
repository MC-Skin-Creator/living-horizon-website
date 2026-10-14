import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SITE } from '../config/site';
import { ChangelogVersion, Inline } from '../data/models';
import { ProjectData } from '../data/project-data';
import { DayPipe } from '../shared/format';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

const SHOWN_VERSIONS = 3;
/** Entries shown for an older version before "show more". */
const PREVIEW_ENTRIES = 3;

@Component({
  selector: 'lh-changelog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, DayPipe, NgTemplateOutlet],
  template: `
    <ng-template #inline let-parts>
      @for (p of asInline(parts); track $index) {
        @switch (p.kind) {
          @case ('strong') {
            <strong>{{ p.text }}</strong>
          }
          @case ('em') {
            <em>{{ p.text }}</em>
          }
          @case ('code') {
            <code>{{ p.text }}</code>
          }
          @default {
            {{ p.text }}
          }
        }
      }
    </ng-template>

    <section class="section" id="changelog">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">Latest updates</span>
          <h2>Shipping often, <span class="accent">fixing fast.</span></h2>
          <p>Straight from the project's changelog on GitHub.</p>
        </header>

        @if (versions().length) {
          <ol class="timeline">
            @for (v of versions(); track v.version; let first = $first) {
              <li class="card version" [class.latest]="first" lhReveal>
                <div class="meta">
                  <span class="num">v{{ v.version }}</span>
                  @if (first) {
                    <span class="new-tag">Latest</span>
                  }
                  @if (v.date) {
                    <time [attr.datetime]="v.date"
                      ><lh-icon name="calendar" /> {{ v.date | day }}</time
                    >
                  }
                  @if (releaseUrl(v.version); as url) {
                    <a class="rel" [href]="url" target="_blank" rel="noopener"
                      >Release <lh-icon name="external"
                    /></a>
                  }
                </div>
                <div class="groups">
                  @for (g of v.groups; track g.title) {
                    @if (visible(v, g.entries.length, $index); as limit) {
                      <div class="group">
                        <span class="kind" [class]="g.kind">{{ g.title }}</span>
                        <ul>
                          @for (e of g.entries.slice(0, limit); track $index) {
                            <li>
                              @if (e.subject.length) {
                                <span class="subject"
                                  ><ng-container
                                    *ngTemplateOutlet="inline; context: { $implicit: e.subject }"
                                /></span>
                                —
                              }
                              <ng-container
                                *ngTemplateOutlet="inline; context: { $implicit: e.body }"
                              />
                            </li>
                          }
                        </ul>
                      </div>
                    }
                  }
                  @if (hidden(v, first); as more) {
                    <button type="button" class="more" (click)="expand(v.version)">
                      Show {{ more }} more {{ more === 1 ? 'change' : 'changes' }}
                    </button>
                  }
                </div>
              </li>
            }
          </ol>
        } @else if (data.settled()) {
          <p class="card empty">
            The changelog couldn't be loaded right now. It's always on GitHub.
          </p>
        } @else {
          <div class="card empty"><span class="skeleton" style="width: 70%"></span></div>
        }

        <div class="actions" lhReveal>
          <a class="btn" [href]="site.links.changelog" target="_blank" rel="noopener">
            View full changelog on GitHub <lh-icon name="arrow-right" />
          </a>
          <a class="btn ghost" [href]="site.links.releases" target="_blank" rel="noopener">
            All releases <lh-icon name="external" />
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './changelog.scss',
})
export class Changelog {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);
  private readonly expanded = signal<ReadonlySet<string>>(new Set());

  protected readonly versions = computed(() => this.data.changelog().slice(0, SHOWN_VERSIONS));

  protected asInline(parts: unknown): Inline[] {
    return parts as Inline[];
  }

  protected releaseUrl(version: string): string | null {
    return this.data.releases().find((r) => r.version === version)?.url ?? null;
  }

  private isOpen(v: ChangelogVersion): boolean {
    return v === this.versions()[0] || this.expanded().has(v.version);
  }

  /** How many entries of group `index` to show; 0 hides the group. */
  protected visible(v: ChangelogVersion, count: number, index: number): number {
    if (this.isOpen(v)) return count;
    const before = v.groups.slice(0, index).reduce((n, g) => n + g.entries.length, 0);
    return Math.max(0, Math.min(count, PREVIEW_ENTRIES - before));
  }

  protected hidden(v: ChangelogVersion, first: boolean): number {
    if (first || this.isOpen(v)) return 0;
    const total = v.groups.reduce((n, g) => n + g.entries.length, 0);
    return Math.max(0, total - PREVIEW_ENTRIES);
  }

  protected expand(version: string) {
    this.expanded.update((s) => new Set([...s, version]));
  }
}
