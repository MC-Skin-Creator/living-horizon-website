import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  DROPS_H,
  DROPS_W,
  FigureKind,
  MASCOT_FRAMES,
  MASCOT_FRAME_MS,
  MASCOT_H,
  MASCOT_W,
  Skin,
  figureUrl,
} from './figures';

/** A player of the illustrations, from its skin: the animated mascot, or the drops bust. */
@Component({
  selector: 'lh-figure',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  host: {
    'aria-hidden': 'true',
    '[class.animated]': "kind() === 'mascot' && animate()",
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
      background-position: 0 0;
      image-rendering: pixelated;
    }
    :host(.flip) {
      transform: scaleX(-1);
    }
    :host(.animated) {
      animation: frames var(--duration) steps(${MASCOT_FRAMES}) infinite;
    }
    @keyframes frames {
      to {
        background-position-x: calc(var(--step) * -${MASCOT_FRAMES});
      }
    }
    @media (prefers-reduced-motion: reduce) {
      :host(.animated) {
        animation: none;
      }
    }
  `,
})
export class FigureView {
  readonly skin = input.required<Skin>();
  readonly kind = input<FigureKind>('mascot');
  readonly animate = input(true);
  /** Screen pixels per pixel of the avatar: whole, so that it stays sharp. */
  readonly pixel = input(2);
  readonly flip = input(false);
  readonly fade = input(0);

  protected readonly duration = MASCOT_FRAMES * MASCOT_FRAME_MS;

  protected readonly width = computed(
    () => (this.kind() === 'mascot' ? MASCOT_W : DROPS_W) * this.pixel(),
  );
  protected readonly height = computed(
    () => (this.kind() === 'mascot' ? MASCOT_H : DROPS_H) * this.pixel(),
  );
  protected readonly image = computed(() => `url(${figureUrl(this.skin(), this.kind())})`);
  protected readonly size = computed(() =>
    this.kind() === 'mascot'
      ? `${this.width() * MASCOT_FRAMES}px ${this.height()}px`
      : `${this.width()}px ${this.height()}px`,
  );
}
