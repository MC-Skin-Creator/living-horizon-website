import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE } from '../config/site';
import { ProjectData } from '../data/project-data';
import { DayPipe } from '../shared/format';
import { Icon } from '../shared/icon';

@Component({
  selector: 'lh-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, DayPipe],
  template: `
    <footer>
      <div class="container">
        <div class="top">
          <div class="brand">
            <a href="#top" class="logo">
              <img src="img/icon-128.webp" alt="" width="44" height="44" loading="lazy" />
              <img
                class="wordmark"
                src="img/brand/title.webp"
                alt="Living Horizon"
                width="640"
                height="81"
                loading="lazy"
              />
            </a>
            <p>
              Gives life to the distance. A mod for Minecraft Java Edition, for your game and your
              server.
            </p>
            <p class="beta">
              <span class="beta-dot"></span> Beta: expect bugs, and tell us about them.
            </p>
          </div>

          <nav aria-label="Project">
            <h3>Project</h3>
            <a [href]="site.links.github" target="_blank" rel="noopener">GitHub</a>
            <a [href]="site.links.changelog" target="_blank" rel="noopener">Changelog</a>
            <a [href]="site.links.readme" target="_blank" rel="noopener">Documentation</a>
            <a [href]="site.links.license" target="_blank" rel="noopener">License</a>
          </nav>
          <nav aria-label="Download">
            <h3>Download</h3>
            <a [href]="site.links.curseforge" target="_blank" rel="noopener"
              ><img src="img/logos/curseforge.svg" alt="" width="16" height="16" />CurseForge</a
            >
            <a [href]="site.links.modrinth" target="_blank" rel="noopener"
              ><img src="img/logos/modrinth.svg" alt="" width="16" height="16" />Modrinth</a
            >
            <a [href]="site.links.nexus" target="_blank" rel="noopener"
              ><img src="img/logos/nexusmods.png" alt="" width="16" height="16" />Nexus Mods</a
            >
            <a [href]="site.links.releases" target="_blank" rel="noopener"
              ><img src="img/logos/github.svg" alt="" width="16" height="16" />GitHub Releases</a
            >
          </nav>
          <nav aria-label="Community">
            <h3>Community</h3>
            <a [href]="site.links.discord" target="_blank" rel="noopener"
              ><lh-icon name="discord" /> Discord</a
            >
            <a [href]="site.links.issues" target="_blank" rel="noopener"
              ><lh-icon name="bug" /> Report a bug</a
            >
            <a href="#testers"><lh-icon name="flask" /> Become a tester</a>
            <a [href]="site.links.contributing" target="_blank" rel="noopener"
              ><lh-icon name="github" /> Contribute</a
            >
          </nav>
        </div>

        <div class="bottom">
          <p>© {{ year }} {{ site.author }} · Living Horizon</p>
          <p>
            Not an official Minecraft product. Not approved by or associated with Mojang or
            Microsoft.
          </p>
          @if (data.fetchedAt(); as at) {
            <p class="data">
              Project data: live from GitHub, CurseForge and Modrinth, with a copy from
              {{ at | day }}.
            </p>
          }
        </div>
      </div>
    </footer>
  `,
  styles: `
    footer {
      border-top: 1px solid var(--line);
      background: var(--bg-deep);
      padding: 64px 0 32px;
    }
    .top {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 32px;
    }
    .brand {
      display: grid;
      gap: 12px;
      align-content: start;
    }
    .brand p {
      color: var(--muted);
      font-size: 0.95rem;
      max-width: 340px;
    }
    .logo {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      font: 700 1.2rem var(--font-display);
    }
    .logo img {
      border-radius: 10px;
    }
    .logo .wordmark {
      width: 230px;
      height: auto;
      border-radius: 0;
    }
    .beta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
    nav {
      display: grid;
      gap: 10px;
      align-content: start;
    }
    h3 {
      font: 0.7rem var(--font-pixel);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--dim);
      margin-bottom: 4px;
    }
    nav a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--muted);
      text-decoration: none;
      font-size: 0.95rem;
    }
    nav a:hover {
      color: var(--text);
    }
    nav lh-icon {
      width: 16px;
      height: 16px;
    }
    .bottom {
      margin-top: 48px;
      padding-top: 24px;
      border-top: 1px solid var(--line);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 8px 24px;
      font-size: 0.82rem;
      color: var(--dim);
    }
    .data {
      flex-basis: 100%;
    }
    @media (max-width: 860px) {
      .top {
        grid-template-columns: 1fr 1fr;
      }
      .brand {
        grid-column: 1 / -1;
      }
    }
    @media (max-width: 480px) {
      .top {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class Footer {
  protected readonly site = SITE;
  protected readonly data = inject(ProjectData);
  protected readonly year = new Date().getFullYear();
}
