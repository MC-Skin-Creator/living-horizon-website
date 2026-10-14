import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Benchmark, SITE } from '../config/site';
import { Icon, IconName } from '../shared/icon';
import { Reveal } from '../shared/reveal';

/** The measurements the section is laid out for. Each one fills from `SITE.benchmarks`. */
const SLOTS: { label: string; hint: string }[] = [
  { label: 'FPS impact', hint: 'with the mod on vs off' },
  { label: 'Mobs on the horizon', hint: 'drawn at once' },
  { label: 'Distance covered', hint: 'past the render distance' },
  { label: 'Frame cost', hint: 'from the debug panel' },
];

@Component({
  selector: 'lh-performance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section class="section" id="performance">
      <div class="container grid">
        <header class="section-head" lhReveal>
          <span class="eyebrow">Optimized rendering</span>
          <h2>A living horizon that <span class="accent">doesn't eat your frames.</span></h2>
          <p>
            Living Horizon is designed from the start to stay light: far figures are drawn the cheap
            way, and only when they can be seen. That lets you lower your render and simulation
            distance and still keep the world alive.
          </p>
        </header>

        <div class="cards">
          @for (c of cards; track c.title; let i = $index) {
            <article class="card point" [lhReveal]="i * 60">
              <span class="icon"><lh-icon [name]="c.icon" /></span>
              <div>
                <h3>{{ c.title }}</h3>
                <p>{{ c.text }}</p>
              </div>
            </article>
          }
        </div>
      </div>

      <div class="container">
        <div class="bench card" lhReveal>
          <div class="bench-head">
            <h3>By the numbers</h3>
            <p>
              @if (hasNumbers) {
                Measured by players and the author; the setup is under each value.
              } @else {
                No made-up numbers here: these fill in as real benchmarks come in. The built-in
                debug panel (<code>/livinghorizon debug</code>) shows the mod's own cost per tick
                and per frame.
              }
            </p>
          </div>
          <div class="slots">
            @for (s of slots; track s.label) {
              <div class="slot" [class.filled]="!!s.bench">
                <span class="label">{{ s.label }}</span>
                @if (s.bench; as b) {
                  <strong class="value">{{ b.value }}</strong>
                  <span class="hint">{{ b.context }}</span>
                } @else {
                  <strong class="value pending">—</strong>
                  <span class="hint">Benchmark pending · {{ s.hint }}</span>
                }
              </div>
            }
          </div>
          @if (!hasNumbers) {
            <a class="btn small" [href]="discord" target="_blank" rel="noopener">
              <lh-icon name="gauge" /> Measured it on your setup? Share it
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './performance.scss',
})
export class Performance {
  protected readonly discord = SITE.links.discord;
  protected readonly hasNumbers = SITE.benchmarks.length > 0;
  protected readonly slots = SLOTS.map((s) => ({
    ...s,
    bench: SITE.benchmarks.find((b: Benchmark) => b.label === s.label) ?? null,
  }));

  protected readonly cards: { icon: IconName; title: string; text: string }[] = [
    {
      icon: 'feather',
      title: 'Light pictures far away',
      text: 'Past a set distance, a far figure is drawn as a flat picture of itself instead of a full model. At that size it looks the same, for a fraction of the work.',
    },
    {
      icon: 'eye',
      title: 'Hidden means skipped',
      text: 'Mobs behind the far terrain are not drawn at all, and animations stop once a figure is too small or too far to notice.',
    },
    {
      icon: 'sliders',
      title: 'Quality presets',
      text: 'Low, Normal, High and Ultra set the number of mobs, their range and the birds in one go. The defaults are the balanced choice.',
    },
    {
      icon: 'server-off',
      title: 'Nothing on the server',
      text: 'Client-side only. It uses what your game already receives, so servers carry no extra load.',
    },
  ];
}
