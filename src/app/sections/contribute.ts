import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../config/site';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'lh-contribute',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section class="section" id="contribute">
      <div class="container">
        <header class="section-head" lhReveal>
          <span class="eyebrow">Contribute</span>
          <h2>Build it with us. <span class="accent">AI welcome.</span></h2>
          <p>
            Living Horizon is made in one place, its GitHub repository. Code, fixes and translations
            all land there as pull requests.
          </p>
        </header>

        <div class="layout">
          <ol class="steps">
            @for (s of steps; track s.title; let i = $index) {
              <li class="card step" [lhReveal]="i * 60">
                <span class="icon"><lh-icon [name]="s.icon" /></span>
                <div>
                  <h3>{{ s.title }}</h3>
                  <p>{{ s.text }}</p>
                </div>
              </li>
            }
          </ol>

          <aside class="card ai" [lhReveal]="120" aria-labelledby="contribute-ai">
            <span class="icon"><lh-icon name="sparkles" /></span>
            <h3 id="contribute-ai">Using AI? Go ahead.</h3>
            <p>
              AI is part of how this project is made, and you can use it to contribute, no problem.
              Just keep thinking about what it writes: read, understand and test your change before
              you open the pull request.
            </p>
            <p>
              Claude works best here: it reads <code>CLAUDE.md</code> and the skills in
              <code>.claude/skills/</code> on its own.
            </p>
          </aside>
        </div>

        <p class="terms" lhReveal>
          By opening a pull request you accept section 3 of the
          <a [href]="site.links.license" target="_blank" rel="noopener">license</a>: you keep your
          copyright, and you stay credited as a contributor whatever happens later.
        </p>

        <div class="actions" lhReveal>
          <a class="btn primary" [href]="site.links.contributing" target="_blank" rel="noopener">
            <lh-icon name="github" /> Read the contributing guide
          </a>
          <a class="btn" [href]="site.links.issues" target="_blank" rel="noopener">
            <lh-icon name="message" /> Open issues
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contribute.scss',
})
export class Contribute {
  protected readonly site = SITE;

  protected readonly steps: { icon: IconName; title: string; text: string }[] = [
    {
      icon: 'message',
      title: 'Talk first',
      text: 'For anything larger than a small fix, open an issue so the direction is agreed before the work is done.',
    },
    {
      icon: 'github',
      title: 'Open a pull request',
      text: 'Work on a feature/* or fix/* branch and target develop. Commits are in English, as conventional commits.',
    },
    {
      icon: 'flask',
      title: 'Build and test',
      text: 'One Gradle build compiles the mod and runs the tests. CI runs it on every pull request too.',
    },
    {
      icon: 'users',
      title: 'Get credited',
      text: 'Add yourself to CREDITS.md, and a line to the changelog if players will see the change.',
    },
  ];
}
