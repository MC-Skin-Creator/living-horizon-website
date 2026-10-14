import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { HorizonRenderer } from './horizon-renderer';
import { SCENES, SceneId } from './scenes';

/** Time the illustrations are frozen at when motion is reduced. */
const STILL_TIME = 14;
const FRAME_MS = 1000 / 15;

/**
 * One illustrated horizon on a canvas. `aspect` fixes the shape (width / height); without
 * it the picture takes the shape of its box, as the hero's backdrop does.
 */
@Component({
  selector: 'lh-horizon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas [attr.aria-label]="label()" role="img"></canvas>`,
  styles: `
    :host {
      display: block;
      position: relative;
      overflow: hidden;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
    }
  `,
})
export class HorizonScene {
  readonly scene = input.required<SceneId>();
  readonly alive = input(true);
  readonly animate = input(true);
  /** Height of the picture in game-like pixels. */
  readonly resolution = input(200);
  readonly aspect = input<number | null>(null);
  readonly label = input('');

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  private renderer: HorizonRenderer | null = null;
  private builtScene: SceneId | null = null;
  private visible = false;
  private frame = 0;
  private last = 0;
  private readonly reduced =
    typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const resize = new ResizeObserver(() => this.rebuild());
      resize.observe(this.host.nativeElement);
      const seen = new IntersectionObserver(([entry]) => {
        this.visible = entry.isIntersecting;
        this.schedule();
      });
      seen.observe(this.host.nativeElement);
      destroyRef.onDestroy(() => {
        resize.disconnect();
        seen.disconnect();
        cancelAnimationFrame(this.frame);
      });
      this.rebuild();
    });

    // Rebuild when the scene or its shape changes; redraw when life is switched.
    effect(() => {
      this.scene();
      this.aspect();
      this.resolution();
      this.rebuild();
    });
    effect(() => {
      this.alive();
      this.animate();
      this.paint();
      this.schedule();
    });
  }

  private rebuild() {
    const el = this.host.nativeElement;
    const canvas = this.canvas?.();
    if (!canvas || !el.clientWidth) return;
    const height = this.resolution();
    const aspect = this.aspect() ?? el.clientWidth / Math.max(1, el.clientHeight);
    const width = Math.max(60, Math.round(height * aspect));
    const scene = this.scene();
    if (
      this.builtScene === scene &&
      this.renderer?.width === width &&
      this.renderer.height === height
    ) {
      return;
    }
    this.builtScene = scene;
    canvas.nativeElement.width = width;
    canvas.nativeElement.height = height;
    this.renderer = new HorizonRenderer(SCENES[scene], width, height);
    this.paint();
    this.schedule();
  }

  private paint() {
    const canvas = this.canvas?.()?.nativeElement;
    if (!canvas || !this.renderer) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const moving = this.animate() && !this.reduced;
    this.renderer.draw(ctx, moving ? performance.now() / 1000 : STILL_TIME, this.alive());
  }

  private schedule() {
    cancelAnimationFrame(this.frame);
    if (!this.visible || !this.animate() || this.reduced) return;
    const tick = (now: number) => {
      if (now - this.last >= FRAME_MS) {
        this.last = now;
        this.paint();
      }
      this.frame = requestAnimationFrame(tick);
    };
    this.frame = requestAnimationFrame(tick);
  }
}
