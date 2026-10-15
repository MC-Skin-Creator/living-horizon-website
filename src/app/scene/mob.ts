import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MOB_FRAME_MS, mobUrl } from './figures';
import { MOB_FRAMES, MOB_SIZES } from './mob-sheets';

/** A mob of the game in the mascot style, nodding (see scripts/mobs.py). Faces left. */
@Component({
  selector: 'lh-mob',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  host: {
    'aria-hidden': 'true',
    '[class.flip]': 'flip()',
    '[style.width.px]': 'width()',
    '[style.height.px]': 'height()',
    '[style.background-image]': 'image()',
    '[style.background-size]': 'size()',
    '[style.--step.px]': 'width()',
    '[style.--duration.ms]': 'duration',
    '[style.opacity]': '1 - fade() * 0.35',
    '[style.filter]': "fade() ? 'saturate(' + (1 - fade() * 0.5) + ')' : null",
  },
  styles: `
    :host {
      display: inline-block;
      flex: none;
      background-repeat: no-repeat;
      image-rendering: pixelated;
      animation: frames var(--duration) steps(${MOB_FRAMES}) infinite;
    }
    :host(.flip) {
      transform: scaleX(-1);
    }
    @keyframes frames {
      to {
        background-position-x: calc(var(--step) * -${MOB_FRAMES});
      }
    }
    @media (prefers-reduced-motion: reduce) {
      :host {
        animation: none;
      }
    }
  `,
})
export class MobView {
  readonly name = input.required<string>();
  /** Screen pixels per pixel of the sheet: whole, so that it stays sharp. */
  readonly pixel = input(1);
  readonly flip = input(false);
  readonly fade = input(0);

  protected readonly duration = MOB_FRAMES * MOB_FRAME_MS;
  protected readonly width = computed(() => MOB_SIZES[this.name()][0] * this.pixel());
  protected readonly height = computed(() => MOB_SIZES[this.name()][1] * this.pixel());
  protected readonly image = computed(() => `url(${mobUrl(this.name())})`);
  protected readonly size = computed(() => `${this.width() * MOB_FRAMES}px ${this.height()}px`);
}
