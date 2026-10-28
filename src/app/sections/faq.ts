import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE } from '../config/site';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { Block, LinkKey, Segment } from '../i18n/rich';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

type Groups = Messages['faq']['groups'];
type Questions = Messages['faq']['questions'];

/** The groups and their questions, in the order of the mod's README. */
const GROUPS: { key: keyof Groups; questions: (keyof Questions)[] }[] = [
  { key: 'how', questions: ['visual', 'real', 'simulation', 'range'] },
  { key: 'compatibility', questions: ['mods', 'modMobs', 'farTerrain'] },
  { key: 'performance', questions: ['frameRate', 'choose', 'world'] },
  { key: 'multiplayer', questions: ['server', 'paper', 'nothing', 'cheat'] },
  { key: 'downloads', questions: ['bedrock', 'version', 'modpack', 'abandoned'] },
  { key: 'ai', questions: ['ai', 'modrinth'] },
];

@Component({
  selector: 'lh-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, NgTemplateOutlet],
  template: `
    <ng-template #rich let-parts>
      @for (p of asSegments(parts); track $index) {
        @if (isText(p)) {
          <!-- In a container: no space is added around the text, it carries its own. -->
          <ng-container>{{ p }}</ng-container>
        } @else if ('em' in p) {
          <em>{{ p.em }}</em>
        } @else if ('code' in p) {
          <code>{{ p.code }}</code>
        } @else if (isAnchor(p.link)) {
          <a [href]="site.links[p.link]">{{ p.text }}</a>
        } @else {
          <a [href]="site.links[p.link]" target="_blank" rel="noopener">{{ p.text }}</a>
        }
      }
    </ng-template>

    @let t = i18n.t().faq;
    <section class="section" id="faq">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">{{ t.eyebrow }}</span>
          <h2>
            {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
          </h2>
          <p>{{ t.text }}</p>
        </header>

        <div class="groups">
          @for (g of groups; track g.key) {
            <section class="group" lhReveal [attr.aria-labelledby]="'faq-' + g.key">
              <h3 [id]="'faq-' + g.key">{{ t.groups[g.key] }}</h3>
              <div class="questions">
                @for (key of g.questions; track key) {
                  @let item = t.questions[key];
                  <details class="card question">
                    <summary>
                      <span>{{ item.q }}</span>
                      <lh-icon name="plus" />
                    </summary>
                    <div class="answer">
                      @for (block of item.a; track $index) {
                        @if (listOf(block); as items) {
                          <ul>
                            @for (li of items; track $index) {
                              <li>
                                <ng-container
                                  *ngTemplateOutlet="rich; context: { $implicit: li }"
                                />
                              </li>
                            }
                          </ul>
                        } @else {
                          <p>
                            <ng-container *ngTemplateOutlet="rich; context: { $implicit: block }" />
                          </p>
                        }
                      }
                    </div>
                  </details>
                }
              </div>
            </section>
          }
        </div>

        <div class="actions" lhReveal>
          <a class="btn primary" [href]="site.links.discord" target="_blank" rel="noopener">
            <lh-icon name="discord" /> {{ t.ask }}
          </a>
          <a class="btn" [href]="site.links.issues" target="_blank" rel="noopener">
            <lh-icon name="message" /> {{ t.issue }}
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly site = SITE;
  protected readonly i18n = inject(I18n);
  protected readonly groups = GROUPS;

  /** The template outlet's context is untyped. */
  protected asSegments(parts: unknown): Segment[] {
    return parts as Segment[];
  }

  protected isText(p: Segment): p is string {
    return typeof p === 'string';
  }

  protected isAnchor(link: LinkKey): boolean {
    return SITE.links[link].startsWith('#');
  }

  protected listOf(block: Block): Segment[][] | null {
    return Array.isArray(block) ? null : block.list;
  }
}
