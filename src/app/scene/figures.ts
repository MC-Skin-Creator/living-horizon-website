/*
 * The players of the illustrations: skins made with MC Skin Creator (mcskincreator.app),
 * exported there as avatars and packed into public/img/figures/, one pixel per pixel of the
 * avatar (the export's 15 or 17 px blocks):
 * - `skin-N-mascot.png`: the "Mascot" avatar, its animation's frames side by side;
 * - `skin-N-drops.png`: the "Drops" avatar, head and shoulders, for seated players.
 *
 * The mobs are drawn from the game's own models and textures by scripts/mobs.py, into
 * public/img/mobs/ (sizes in mob-sheets.ts).
 */

import { MOB_SIZES } from './mob-sheets';

export const FIGURE_COUNT = 5;

export const MASCOT_FRAMES = 8;
export const MASCOT_W = 27;
export const MASCOT_H = 27;
/** Delay between two frames of the mascot, as exported. */
export const MASCOT_FRAME_MS = 80;

export const DROPS_W = 22;
export const DROPS_H = 23;

/** `-small`: half size, for the far planes (scripts/figures.py). */
export type FigureKind = 'mascot' | 'drops' | 'mascot-small' | 'drops-small';

export const FIGURE_SIZES: Record<FigureKind, [number, number]> = {
  mascot: [MASCOT_W, MASCOT_H],
  drops: [DROPS_W, DROPS_H],
  'mascot-small': [16, 16],
  'drops-small': [13, 14],
};

export type Figure = Record<FigureKind, HTMLImageElement>;

export const figureUrl = (n: number, kind: FigureKind) => `img/figures/skin-${n}-${kind}.png`;
export const mobUrl = (name: string) => `img/mobs/${name}.png`;

/** Delay between two frames of a mob: a slow nod. */
export const MOB_FRAME_MS = 140;

/** The mob sheets that stand in for each pixel sprite; a mob takes one of the variants. */
export const MOB_SHEETS: Partial<Record<string, string[]>> = {
  cow: ['cow'],
  sheep: ['sheep'],
  pig: ['pig'],
  horse: ['horse-brown', 'horse-chestnut', 'horse-white'],
  rider: ['horse-brown', 'horse-chestnut', 'horse-white'],
  villager: ['villager-farmer', 'villager-librarian', 'villager-cleric', 'villager-fisherman'],
  golem: ['golem'],
  chicken: ['chicken'],
  creeper: ['creeper'],
  zombie: ['zombie'],
  skeleton: ['skeleton'],
  bee: ['bee'],
};

export interface Figures {
  players: Figure[];
  mobs: Record<string, HTMLImageElement>;
}

let loading: Promise<Figures> | null = null;

function image(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** Loads every figure once. A part that cannot be loaded is left empty. */
export function loadFigures(): Promise<Figures> {
  loading ??= Promise.all([
    Promise.all(
      Array.from({ length: FIGURE_COUNT }, async (_, i) => {
        const kinds = Object.keys(FIGURE_SIZES) as FigureKind[];
        const images = await Promise.all(kinds.map((kind) => image(figureUrl(i + 1, kind))));
        return Object.fromEntries(kinds.map((kind, j) => [kind, images[j]])) as Figure;
      }),
    ).catch(() => [] as Figure[]),
    Promise.all(
      Object.keys(MOB_SIZES).map(async (name) => [name, await image(mobUrl(name))] as const),
    )
      .then((pairs) => Object.fromEntries(pairs))
      .catch(() => ({})),
  ]).then(([players, mobs]) => ({ players, mobs }));
  return loading;
}
