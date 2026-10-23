import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE } from '../config/site';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'lh-contribute',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    @let t = i18n.t().contribute;
    <section class="section" id="contribute">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">{{ t.eyebrow }}</span>
          <h2>
            {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
          </h2>
          <p>{{ t.text }}</p>
        </header>

        <div class="layout">
          <ol class="steps">
            @for (s of steps; track s.key; let i = $index) {
              <li class="card step" [lhReveal]="i * 60">
                <span class="icon"><lh-icon [name]="s.icon" /></span>
                <div>
                  <h3>{{ t.steps[s.key].title }}</h3>
                  <p>{{ t.steps[s.key].text }}</p>
                </div>
              </li>
            }
          </ol>

          <aside class="card ai" [lhReveal]="120" aria-labelledby="contribute-ai">
            <span class="icon"><lh-icon name="sparkles" /></span>
            <h3 id="contribute-ai">{{ t.aiTitle }}</h3>
            <p>{{ t.aiText }}</p>
            <p>
              {{ t.claude.before }} <code>CLAUDE.md</code> {{ t.claude.between }}
              <code>.claude/skills/</code> {{ t.claude.after }}
            </p>
          </aside>
        </div>

        <p class="terms" lhReveal>
          {{ t.terms.before }}
          <a [href]="site.links.license" target="_blank" rel="noopener">{{ t.terms.link }}</a
          >{{ t.terms.after }}
        </p>

        <div class="actions" lhReveal>
          <a class="btn primary" [href]="site.links.contributing" target="_blank" rel="noopener">
            <lh-icon name="github" /> {{ t.guide }}
          </a>
          <a class="btn" [href]="site.links.issues" target="_blank" rel="noopener">
            <lh-icon name="message" /> {{ t.issues }}
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contribute.scss',
})
export class Contribute {
  protected readonly site = SITE;

  protected readonly i18n = inject(I18n);

  protected readonly steps: { key: keyof Messages['contribute']['steps']; icon: IconName }[] = [
    { key: 'talk', icon: 'message' },
    { key: 'pr', icon: 'github' },
    { key: 'build', icon: 'flask' },
    { key: 'credit', icon: 'users' },
  ];
}
