import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { SITE } from '../config/site';
import { HorizonScene } from '../scene/horizon-scene';

type SliderScene = 'village' | 'ridge' | 'coast';

/**
 * The same view without and with the mod, split by a handle. Real screenshots are used
 * when `SITE.screenshots` has them for this scene; otherwise the stylised illustration.
 */
@Component({
  selector: 'lh-before-after',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HorizonScene],
  template: `
    <div class="frame" [style.--pos.%]="pos()">
      <div class="layer before">
        @if (shots(); as s) {
          <img [src]="s.before" alt="In-game screenshot without Living Horizon" loading="lazy" />
        } @else {
          <lh-horizon
            [scene]="scene()"
            [aspect]="16 / 9"
            [resolution]="225"
            [alive]="false"
            [label]="'Without Living Horizon: ' + description()"
          />
        }
      </div>
      <div class="layer after">
        @if (shots(); as s) {
          <img [src]="s.after" alt="In-game screenshot with Living Horizon" loading="lazy" />
        } @else {
          <lh-horizon
            [scene]="scene()"
            [aspect]="16 / 9"
            [resolution]="225"
            [alive]="true"
            [label]="'With Living Horizon: ' + description()"
          />
        }
      </div>

      <span class="badge left">Without the mod</span>
      <span class="badge right">With Living Horizon</span>

      <div class="handle" aria-hidden="true"><span class="knob">‹ ›</span></div>

      <input
        type="range"
        min="0"
        max="100"
        step="0.5"
        [value]="pos()"
        (input)="onInput($event)"
        (pointerdown)="touched = true"
        aria-label="Move to compare the view without and with Living Horizon"
      />
    </div>
  `,
  styleUrl: './before-after.scss',
})
export class BeforeAfter {
  readonly scene = input.required<SliderScene>();
  readonly description = input('');

  protected readonly pos = signal(50);
  protected readonly shots = computed(() => SITE.screenshots[this.scene()] ?? null);
  protected touched = false;

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      // Once, when first seen: sweep the handle to show it can be moved.
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          this.sweep();
        },
        { threshold: 0.6 },
      );
      observer.observe(el);
    });
  }

  protected onInput(event: Event) {
    this.touched = true;
    this.pos.set(Number((event.target as HTMLInputElement).value));
  }

  private sweep() {
    const keys = [50, 22, 78, 50];
    const duration = 2600;
    const start = performance.now();
    const step = (now: number) => {
      if (this.touched) return;
      const t = Math.min(1, (now - start) / duration);
      const seg = Math.min(keys.length - 2, Math.floor(t * (keys.length - 1)));
      const local = t * (keys.length - 1) - seg;
      const eased = local < 0.5 ? 2 * local * local : 1 - (-2 * local + 2) ** 2 / 2;
      this.pos.set(keys[seg] + (keys[seg + 1] - keys[seg]) * eased);
      if (t < 1) requestAnimationFrame(step);
    };
    setTimeout(() => requestAnimationFrame(step), 400);
  }
}
