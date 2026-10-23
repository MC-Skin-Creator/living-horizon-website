import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Benchmark, SITE } from '../config/site';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/**
 * The "Optimized rendering" explanation above the numbers. Off for now: the section shows
 * the measured stats alone.
 */
const SHOW_DESIGN = false;

type PerformanceTexts = Messages['performance'];
type Slot = keyof PerformanceTexts['slots'];

/**
 * The measurements the section is laid out for (`performance.slots`). Each one fills from
 * `SITE.benchmarks`; once one is measured, only the measured ones are shown.
 */
const SLOTS: Slot[] = ['fps', 'mobs', 'distance', 'frame'];

@Component({
  selector: 'lh-performance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    @let t = i18n.t().performance;
    <section class="section" id="performance">
      @if (showDesign) {
        <div class="container grid">
          <header class="section-head" lhReveal>
            <span class="eyebrow">{{ t.design.eyebrow }}</span>
            <h2>
              {{ t.design.title }}{{ i18n.gap() }}<span class="accent">{{ t.design.accent }}</span>
            </h2>
            <p>{{ t.design.text }}</p>
          </header>

          <div class="cards">
            @for (c of cards; track c.key; let i = $index) {
              <article class="card point" [lhReveal]="i * 60">
                <span class="icon"><lh-icon [name]="c.icon" /></span>
                <div>
                  <h3>{{ t.design.cards[c.key].title }}</h3>
                  <p>{{ t.design.cards[c.key].text }}</p>
                </div>
              </article>
            }
          </div>
        </div>
      }

      <div class="container">
        @if (!showDesign) {
          <header class="section-head" lhReveal>
            <span class="eyebrow">{{ t.eyebrow }}</span>
            <h2>
              {{ t.title }}{{ i18n.gap() }}<span class="accent">{{ t.accent }}</span>
            </h2>
          </header>
        }
        <div class="bench card" [class.alone]="!showDesign" lhReveal>
          <div class="bench-head">
            <h3>{{ t.numbers }}</h3>
            <p>
              @if (hasNumbers) {
                {{ t.measured }}
              } @else {
                {{ t.noNumbers.before }}<code>/livinghorizon debug</code>{{ t.noNumbers.after }}
              }
            </p>
          </div>
          <div class="slots">
            @for (s of shown; track s.slot) {
              <div class="slot" [class.filled]="!!s.bench">
                <span class="label">{{ t.slots[s.slot].label }}</span>
                @if (s.bench; as b) {
                  <strong class="value">{{ b.value }}</strong>
                  <span class="hint">{{ setup(t, s.slot) }}</span>
                } @else {
                  <strong class="value pending">?</strong>
                  <span class="hint">{{ t.pending(t.slots[s.slot].hint) }}</span>
                }
              </div>
            }
          </div>
          @if (!hasNumbers) {
            <a class="btn small" [href]="discord" target="_blank" rel="noopener">
              <lh-icon name="gauge" /> {{ t.share }}
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './performance.scss',
})
export class Performance {
  protected readonly i18n = inject(I18n);
  protected readonly showDesign = SHOW_DESIGN;
  protected readonly discord = SITE.links.discord;
  protected readonly hasNumbers = SITE.benchmarks.length > 0;
  protected readonly slots = SLOTS.map((slot) => ({
    slot,
    bench: SITE.benchmarks.find((b: Benchmark) => b.slot === slot) ?? null,
  }));
  protected readonly shown = this.hasNumbers ? this.slots.filter((s) => s.bench) : this.slots;

  protected readonly cards: { key: keyof PerformanceTexts['design']['cards']; icon: IconName }[] = [
    { key: 'pictures', icon: 'feather' },
    { key: 'hidden', icon: 'eye' },
    { key: 'presets', icon: 'sliders' },
    { key: 'server', icon: 'server' },
  ];

  /** How a benchmark was measured, from `performance.setups`. */
  protected setup(t: PerformanceTexts, slot: Slot): string {
    return (t.setups as Partial<Record<Slot, string>>)[slot] ?? '';
  }
}
