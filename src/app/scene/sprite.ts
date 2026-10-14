import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterRenderEffect,
  input,
  viewChild,
} from '@angular/core';
import { PALETTE, SPRITES, SpriteName } from './sprites';

/** One pixel sprite of the illustrations, drawn crisp at `scale` CSS pixels per pixel. */
@Component({
  selector: 'lh-sprite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas
    #canvas
    [style.width.px]="width() * scale()"
    [style.height.px]="height() * scale()"
  ></canvas>`,
  styles: `
    :host {
      display: inline-block;
      line-height: 0;
    }
    canvas {
      image-rendering: pixelated;
      image-rendering: crisp-edges;
    }
  `,
  host: { 'aria-hidden': 'true' },
})
export class Sprite {
  readonly name = input.required<SpriteName>();
  readonly scale = input(4);
  readonly flip = input(false);
  /** 0 to 1: fades the colours, as distance does. */
  readonly fade = input(0);

  private readonly canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');

  protected width() {
    return SPRITES[this.name()][0].length;
  }

  protected height() {
    return SPRITES[this.name()].length;
  }

  constructor() {
    afterRenderEffect(() => {
      const canvas = this.canvas()?.nativeElement;
      if (!canvas) return;
      const rows = SPRITES[this.name()];
      const w = rows[0].length;
      canvas.width = w;
      canvas.height = rows.length;
      const ctx = canvas.getContext('2d')!;
      const fade = this.fade();
      const flip = this.flip();
      rows.forEach((row, y) =>
        [...row].forEach((ch, x) => {
          const c = PALETTE[ch];
          if (!c) return;
          const [r, g, b] = c.map((v) => Math.round(v + (150 - v) * fade * 0.6));
          ctx.fillStyle = `rgba(${r},${g},${b},${1 - fade * 0.35})`;
          ctx.fillRect(flip ? w - 1 - x : x, y, 1, 1);
        }),
      );
    });
  }
}
