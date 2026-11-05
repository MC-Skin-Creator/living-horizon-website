import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Benchmark, SITE } from '../config/site';
import { Messages } from '../i18n/en';
import { I18n } from '../i18n/i18n';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { SectionHead } from '../shared/section-head';

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
  imports: [Icon, Reveal, SectionHead],
  template: `
    @let t = i18n.t().performance;
    <section class="section" id="performance">
      <div class="container">
        <header lhHead [texts]="t" lhReveal></header>
        <div class="bench card" lhReveal>
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
  protected readonly discord = SITE.links.discord;
  protected readonly hasNumbers = SITE.benchmarks.length > 0;
  protected readonly slots = SLOTS.map((slot) => ({
    slot,
    bench: SITE.benchmarks.find((b: Benchmark) => b.slot === slot) ?? null,
  }));
  protected readonly shown = this.hasNumbers ? this.slots.filter((s) => s.bench) : this.slots;

  /** How a benchmark was measured, from `performance.setups`. */
  protected setup(t: PerformanceTexts, slot: Slot): string {
    return (t.setups as Partial<Record<Slot, string>>)[slot] ?? '';
  }
}
