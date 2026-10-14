/*
 * The players of the illustrations: skins made with MC Skin Creator (mcskincreator.app),
 * exported there as avatars ("Walk", animated, and "Full body") and packed into
 * public/img/figures/, one pixel per pixel of the avatar: `skin-N-walk.png` is the walk
 * cycle, frames side by side; `skin-N-body.png` the figure seen from the front.
 */

export const FIGURE_COUNT = 5;
export const WALK_FRAMES = 14;
/** Size of a frame: the avatar's own pixels (17 px blocks of the 512 px export). */
export const WALK_FRAME_W = 17;
export const WALK_FRAME_H = 23;
/** Delay between two frames of the walk, as exported. */
export const WALK_FRAME_MS = 70;

export interface Figure {
  walk: HTMLImageElement;
  body: HTMLImageElement;
}

export const figureUrl = (n: number, kind: 'walk' | 'body') => `img/figures/skin-${n}-${kind}.png`;

let loading: Promise<Figure[]> | null = null;

function image(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** Loads every figure once. Resolves to an empty list if they cannot be loaded. */
export function loadFigures(): Promise<Figure[]> {
  loading ??= Promise.all(
    Array.from({ length: FIGURE_COUNT }, async (_, i) => ({
      walk: await image(figureUrl(i + 1, 'walk')),
      body: await image(figureUrl(i + 1, 'body')),
    })),
  ).catch(() => []);
  return loading;
}
