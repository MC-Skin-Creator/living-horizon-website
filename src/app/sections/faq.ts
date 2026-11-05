import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE } from '../config/site';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { RichText } from '../shared/rich-text';

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
  imports: [Icon, Reveal, RichText],
  template: `
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
                    <lh-rich class="answer" [blocks]="item.a" />
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
}
