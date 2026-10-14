/*
 * The players of the illustrations: skins made with MC Skin Creator (mcskincreator.app),
 * exported there as avatars and packed into public/img/figures/, one pixel per pixel of the
 * avatar (the export's 15 or 17 px blocks):
 * - `skin-N-mascot.png`: the "Mascot" avatar, its animation's frames side by side;
 * - `skin-N-drops.png`: the "Drops" avatar, head and shoulders, for seated players.
 */

export const FIGURE_COUNT = 5;

export const MASCOT_FRAMES = 8;
export const MASCOT_W = 27;
export const MASCOT_H = 27;
/** Delay between two frames of the mascot, as exported. */
export const MASCOT_FRAME_MS = 80;

export const DROPS_W = 22;
export const DROPS_H = 23;

export type FigureKind = 'mascot' | 'drops';

export interface Figure {
  mascot: HTMLImageElement;
  drops: HTMLImageElement;
}

export const figureUrl = (n: number, kind: FigureKind) => `img/figures/skin-${n}-${kind}.png`;

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
      mascot: await image(figureUrl(i + 1, 'mascot')),
      drops: await image(figureUrl(i + 1, 'drops')),
    })),
  ).catch(() => []);
  return loading;
}
