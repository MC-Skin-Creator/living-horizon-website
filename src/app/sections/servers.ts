import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

type ServerTexts = Messages['servers'];

/** One cell of the table: a tick, a cross, a dash, or a few words of `servers.cells`. */
type Cell = 'yes' | 'no' | 'none' | { words: keyof ServerTexts['cells'] };

/** The column of "Server with the mod", highlighted. */
const WITH_MOD = 2;

@Component({
  selector: 'lh-servers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    @let t = i18n.t().servers;
    <div class="part" id="servers">
      <div class="glow" aria-hidden="true"></div>
      <div class="container">
        <div class="intro">
          <header class="section-head sub" lhReveal>
            <span class="eyebrow">{{ t.eyebrow }}</span>
            <h2>
              {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
            </h2>
            <p>{{ t.text }}</p>
          </header>

          <figure class="cover" [lhReveal]="80">
            <img
              src="img/brand/cover.webp"
              width="1280"
              height="720"
              loading="lazy"
              [alt]="t.cover"
            />
            <figcaption>
              <span class="tag">{{ i18n.t().common.new }}</span> {{ t.since('0.10.0') }}
            </figcaption>
          </figure>
        </div>

        <ol class="steps">
          @for (s of steps; track s.key; let i = $index) {
            <li class="card step" [lhReveal]="i * 80">
              <span class="num">{{ i + 1 }}</span>
              <span class="icon"><lh-icon [name]="s.icon" /></span>
              <h3>{{ t.steps[s.key].title }}</h3>
              <p>{{ t.steps[s.key].text }}</p>
            </li>
          }
        </ol>

        <div class="card matrix" lhReveal>
          <div class="matrix-head">
            <h3>{{ t.matrixTitle }}</h3>
            <p>{{ t.matrixText }}</p>
          </div>
          <div class="scroll" tabindex="0" role="region" [attr.aria-label]="t.matrixLabel">
            <table>
              <thead>
                <tr>
                  <th scope="col">
                    <span class="visually-hidden">{{ t.feature }}</span>
                  </th>
                  @for (p of t.places; track $index) {
                    <th scope="col" [class.hl]="$index === withMod">{{ p }}</th>
                  }
                </tr>
              </thead>
              <tbody>
                @for (row of rows; track row.feature) {
                  <tr>
                    <th scope="row">{{ t.rows[row.feature] }}</th>
                    @for (c of row.cells; track $index) {
                      <td [class.hl]="$index === withMod" [attr.data-place]="t.places[$index]">
                        @switch (kind(c)) {
                          @case ('yes') {
                            <span class="st yes"
                              ><lh-icon name="check" /><span class="visually-hidden">{{
                                t.yes
                              }}</span></span
                            >
                          }
                          @case ('no') {
                            <span class="st no"
                              ><lh-icon name="close" /><span class="visually-hidden">{{
                                t.no
                              }}</span></span
                            >
                          }
                          @case ('none') {
                            <span class="st none" [title]="t.noOthers"
                              >–<span class="visually-hidden">{{ t.notApplicable }}</span></span
                            >
                          }
                          @default {
                            <span class="words">{{ words(t, c) }}</span>
                          }
                        }
                      </td>
                    }
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>

        <ul class="notes">
          @for (n of notes; track n.key; let i = $index) {
            <li [lhReveal]="i * 60">
              <lh-icon [name]="n.icon" />
              <div>
                <strong>{{ t.notes[n.key].title }}</strong>
                <span>{{ t.notes[n.key].text }}</span>
              </div>
            </li>
          }
        </ul>
      </div>
    </div>
  `,
  styleUrl: './servers.scss',
})
export class Servers {
  protected readonly i18n = inject(I18n);
  protected readonly withMod = WITH_MOD;

  protected readonly steps: { key: keyof ServerTexts['steps']; icon: IconName }[] = [
    { key: 'jar', icon: 'download' },
    { key: 'start', icon: 'server' },
    { key: 'see', icon: 'users' },
  ];

  /** Single player, LAN world, server with the mod, server without it. */
  protected readonly rows: { feature: keyof ServerTexts['rows']; cells: Cell[] }[] = [
    { feature: 'mobs', cells: ['yes', 'yes', 'yes', { words: 'mobsMet' }] },
    { feature: 'players', cells: ['none', 'yes', 'yes', 'no'] },
    {
      feature: 'offline',
      cells: ['yes', 'yes', { words: 'offlineEven' }, { words: 'offlineSeen' }],
    },
    { feature: 'birds', cells: ['yes', 'yes', 'yes', 'yes'] },
  ];

  protected readonly notes: { key: keyof ServerTexts['notes']; icon: IconName }[] = [
    { key: 'lan', icon: 'wifi' },
    { key: 'join', icon: 'check' },
    { key: 'tell', icon: 'shield' },
    { key: 'datapack', icon: 'box' },
  ];

  protected kind(cell: Cell): 'yes' | 'no' | 'none' | 'words' {
    return typeof cell === 'string' ? cell : 'words';
  }

  protected words(t: ServerTexts, cell: Cell): string {
    return typeof cell === 'string' ? '' : t.cells[cell.words];
  }
}
