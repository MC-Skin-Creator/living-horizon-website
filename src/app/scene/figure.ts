import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { WALK_FRAMES, WALK_FRAME_H, WALK_FRAME_MS, WALK_FRAME_W, figureUrl } from './figures';

/** A player of the illustrations, from its skin: walking, or standing seen from the front. */
@Component({
  selector: 'lh-figure',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  host: {
    'aria-hidden': 'true',
    '[class.walking]': 'walk()',
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
    }
    :host {
      image-rendering: pixelated;
    }
    :host(.flip) {
      transform: scaleX(-1);
    }
    :host(.walking) {
      animation: walk var(--duration) steps(${WALK_FRAMES}) infinite;
    }
    @keyframes walk {
      to {
        background-position-x: calc(var(--step) * -${WALK_FRAMES});
      }
    }
    @media (prefers-reduced-motion: reduce) {
      :host(.walking) {
        animation: none;
      }
    }
  `,
})
export class FigureView {
  /** 1 to 5. */
  readonly skin = input.required<number>();
  /** Screen pixels per pixel of the avatar: whole, so that it stays sharp. */
  readonly pixel = input(2);
  readonly walk = input(true);
  readonly flip = input(false);
  readonly fade = input(0);

  protected readonly duration = WALK_FRAMES * WALK_FRAME_MS;

  protected readonly width = computed(() => (this.walk() ? WALK_FRAME_W : 16) * this.pixel());
  protected readonly height = computed(() => (this.walk() ? WALK_FRAME_H : 32) * this.pixel());
  protected readonly image = computed(
    () => `url(${figureUrl(this.skin(), this.walk() ? 'walk' : 'body')})`,
  );
  protected readonly size = computed(() =>
    this.walk() ? `${this.width() * WALK_FRAMES}px ${this.height()}px` : '100% 100%',
  );
}
