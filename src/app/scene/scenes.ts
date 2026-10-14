/*
 * The illustrated horizons. Layers go from the farthest to the nearest; positions and
 * heights are fractions of the picture, so a scene fits any width.
 */
import { RGB, SpriteName } from './sprites';

export interface MobGroup {
  sprite: SpriteName;
  /** For a 400 px wide picture; wider pictures get a few more, unless `fixed`. */
  count: number;
  /** Range of x, as fractions of the width. */
  spread?: [number, number];
  /** Stands on the highest point of its range. */
  onPeak?: boolean;
  still?: boolean;
  fixed?: boolean;
}

export interface LayerSpec {
  /** 0 the farthest, 1 the nearest: sets the haze. */
  depth: number;
  haze?: number;
  /** Mean height of the ground, as a fraction of the picture (0 top, 1 bottom). */
  base: number;
  amp: number;
  /** Width of a hill, in pixels. */
  wavelength: number;
  /** Size of a block, in pixels. */
  step: number;
  /** Size of a pixel of the mobs drawn on this layer. */
  scale: number;
  body: RGB;
  top?: RGB;
  topRows?: number;
  snowLine?: number;
  snow?: RGB;
  trees?: number;
  tilt?: number;
  /** The part of the width the layer covers, as fractions (a cliff ending in the sea). */
  extent?: [number, number];
  flat?: boolean;
  water?: boolean;
  /** Within the game's render distance: alive with or without the mod. */
  vanilla?: boolean;
  buildings?: { sprite: SpriteName; count: number; spread: [number, number] }[];
  mobs?: MobGroup[];
}

export interface BirdFlock {
  count: number;
  y: number;
  speed: number;
  formation: 'v' | 'loose';
  color: RGB;
  scale?: number;
}

export interface SceneSpec {
  seed: number;
  /** Colour stops of the sky: [fraction of the height, colour]. */
  sky: [number, RGB][];
  stars?: number;
  sun?: { x: number; y: number; size: number; color: RGB };
  fog: RGB;
  clouds?: { count: number; speed: number; color: RGB; alpha: number };
  layers: LayerSpec[];
  birds?: BirdFlock[];
}

export type SceneId = 'hero' | 'village' | 'ridge' | 'coast';

const GOOSE: RGB = [46, 40, 44];
const GULL: RGB = [246, 246, 240];

export const SCENES: Record<SceneId, SceneSpec> = {
  hero: {
    seed: 7,
    sky: [
      [0, [18, 16, 48]],
      [0.3, [52, 38, 98]],
      [0.5, [132, 66, 128]],
      [0.64, [246, 128, 104]],
      [0.74, [255, 178, 118]],
      [1, [255, 200, 140]],
    ],
    stars: 6,
    sun: { x: 0.7, y: 0.63, size: 12, color: [255, 230, 168] },
    fog: [196, 112, 146],
    clouds: { count: 1.2, speed: 1.6, color: [255, 176, 180], alpha: 0.4 },
    layers: [
      { depth: 0, base: 0.65, amp: 0.07, wavelength: 36, step: 1, scale: 1, body: [96, 70, 136] },
      {
        depth: 0.3,
        base: 0.705,
        amp: 0.045,
        wavelength: 30,
        step: 1,
        scale: 1,
        body: [66, 62, 112],
        top: [132, 118, 128],
        trees: 0.5,
        buildings: [{ sprite: 'house', count: 3, spread: [0.16, 0.3] }],
        mobs: [
          { sprite: 'villager', count: 4, spread: [0.14, 0.33] },
          { sprite: 'golem', count: 1, spread: [0.2, 0.28] },
          { sprite: 'cow', count: 3, spread: [0.48, 0.64] },
          { sprite: 'sheep', count: 3, spread: [0.76, 0.92] },
        ],
      },
      {
        depth: 0.55,
        base: 0.77,
        amp: 0.045,
        wavelength: 26,
        step: 2,
        scale: 1,
        body: [42, 50, 88],
        top: [104, 128, 92],
        trees: 0.35,
        mobs: [
          { sprite: 'rider', count: 1, spread: [0.36, 0.5], onPeak: true, fixed: true },
          { sprite: 'player2', count: 1, spread: [0.56, 0.66] },
          { sprite: 'horse', count: 2, spread: [0.06, 0.2] },
          { sprite: 'sheep', count: 3, spread: [0.68, 0.86] },
          { sprite: 'pig', count: 2, spread: [0.86, 0.98] },
        ],
      },
      {
        depth: 0.78,
        base: 0.86,
        amp: 0.045,
        wavelength: 22,
        step: 2,
        scale: 2,
        body: [28, 36, 62],
        top: [78, 124, 72],
        trees: 0.45,
        mobs: [
          { sprite: 'cow', count: 2, spread: [0.04, 0.26] },
          { sprite: 'player3', count: 1, spread: [0.58, 0.72], fixed: true },
          { sprite: 'sheep', count: 2, spread: [0.78, 0.96] },
        ],
      },
      {
        depth: 1,
        base: 0.98,
        amp: 0.035,
        wavelength: 18,
        step: 4,
        scale: 3,
        vanilla: true,
        body: [18, 20, 36],
        top: [44, 74, 52],
        trees: 0.15,
      },
    ],
    birds: [
      { count: 7, y: 0.3, speed: 5, formation: 'v', color: GOOSE },
      { count: 4, y: 0.44, speed: 3.5, formation: 'loose', color: GOOSE },
    ],
  },

  village: {
    seed: 21,
    sky: [
      [0, [70, 132, 222]],
      [0.5, [128, 182, 242]],
      [0.72, [196, 226, 252]],
      [1, [214, 234, 252]],
    ],
    sun: { x: 0.16, y: 0.16, size: 10, color: [255, 250, 216] },
    fog: [186, 214, 240],
    clouds: { count: 1.4, speed: 2, color: [255, 255, 255], alpha: 0.85 },
    layers: [
      {
        depth: 0,
        base: 0.52,
        amp: 0.12,
        wavelength: 28,
        step: 1,
        scale: 1,
        body: [112, 124, 156],
        snowLine: 0.47,
        snow: [244, 248, 255],
      },
      {
        depth: 0.3,
        base: 0.605,
        amp: 0.045,
        wavelength: 34,
        step: 1,
        scale: 1,
        body: [56, 100, 62],
        top: [92, 150, 76],
        trees: 1.1,
        mobs: [
          { sprite: 'cow', count: 3, spread: [0.06, 0.24] },
          { sprite: 'sheep', count: 3, spread: [0.7, 0.92] },
        ],
      },
      {
        depth: 0.55,
        base: 0.69,
        amp: 0.02,
        wavelength: 40,
        step: 2,
        scale: 1,
        body: [74, 124, 66],
        top: [108, 176, 80],
        trees: 0.2,
        buildings: [
          { sprite: 'house', count: 4, spread: [0.3, 0.54] },
          { sprite: 'tower', count: 1, spread: [0.4, 0.44] },
        ],
        mobs: [
          { sprite: 'villager', count: 6, spread: [0.27, 0.57] },
          { sprite: 'golem', count: 1, spread: [0.38, 0.48] },
          { sprite: 'horse', count: 2, spread: [0.72, 0.86] },
          { sprite: 'player', count: 1, spread: [0.6, 0.68], fixed: true },
        ],
      },
      {
        depth: 0.8,
        base: 0.79,
        amp: 0.03,
        wavelength: 26,
        step: 2,
        scale: 2,
        body: [86, 134, 70],
        top: [116, 188, 84],
        trees: 0.3,
        mobs: [
          { sprite: 'sheep', count: 3, spread: [0.08, 0.26] },
          { sprite: 'pig', count: 2, spread: [0.4, 0.52] },
          { sprite: 'cow', count: 2, spread: [0.62, 0.8] },
        ],
      },
      {
        depth: 1,
        base: 0.93,
        amp: 0.03,
        wavelength: 20,
        step: 4,
        scale: 3,
        vanilla: true,
        body: [128, 92, 60],
        top: [106, 180, 76],
        topRows: 1,
        trees: 0.12,
        mobs: [
          { sprite: 'sheep', count: 1, spread: [0.12, 0.2], fixed: true },
          { sprite: 'cow', count: 1, spread: [0.8, 0.9], fixed: true },
        ],
      },
    ],
    birds: [{ count: 5, y: 0.3, speed: 4, formation: 'loose', color: [60, 60, 70] }],
  },

  ridge: {
    seed: 42,
    sky: [
      [0, [48, 60, 124]],
      [0.4, [128, 104, 150]],
      [0.6, [222, 140, 122]],
      [0.8, [255, 196, 130]],
      [1, [255, 210, 150]],
    ],
    sun: { x: 0.82, y: 0.5, size: 12, color: [255, 232, 172] },
    fog: [236, 170, 140],
    clouds: { count: 1, speed: 1.4, color: [255, 214, 196], alpha: 0.55 },
    layers: [
      {
        depth: 0,
        base: 0.56,
        amp: 0.15,
        wavelength: 24,
        step: 1,
        scale: 1,
        body: [104, 86, 128],
        snowLine: 0.47,
        snow: [255, 228, 216],
      },
      {
        depth: 0.3,
        base: 0.64,
        amp: 0.08,
        wavelength: 22,
        step: 1,
        scale: 1,
        body: [72, 84, 92],
        top: [112, 132, 86],
        trees: 0.6,
        mobs: [
          { sprite: 'player2', count: 1, spread: [0.12, 0.26] },
          { sprite: 'horse', count: 2, spread: [0.6, 0.78] },
          { sprite: 'sheep', count: 2, spread: [0.3, 0.42] },
        ],
      },
      {
        depth: 0.55,
        base: 0.71,
        amp: 0.075,
        wavelength: 18,
        step: 2,
        scale: 1,
        body: [64, 88, 66],
        top: [110, 154, 76],
        trees: 0.45,
        mobs: [
          { sprite: 'rider', count: 1, spread: [0.24, 0.42], onPeak: true, fixed: true },
          { sprite: 'player3', count: 1, spread: [0.56, 0.68] },
          { sprite: 'player', count: 1, spread: [0.7, 0.8] },
          { sprite: 'cow', count: 2, spread: [0.84, 0.97] },
        ],
      },
      {
        depth: 0.8,
        base: 0.81,
        amp: 0.05,
        wavelength: 20,
        step: 2,
        scale: 2,
        body: [58, 94, 58],
        top: [104, 164, 74],
        trees: 0.45,
        mobs: [
          { sprite: 'rider', count: 1, spread: [0.62, 0.78], onPeak: true, fixed: true },
          { sprite: 'sheep', count: 3, spread: [0.06, 0.3] },
        ],
      },
      {
        depth: 1,
        base: 0.94,
        amp: 0.03,
        wavelength: 18,
        step: 4,
        scale: 3,
        vanilla: true,
        body: [104, 74, 50],
        top: [92, 154, 68],
        trees: 0.15,
        mobs: [{ sprite: 'player', count: 1, spread: [0.2, 0.28], fixed: true }],
      },
    ],
    birds: [{ count: 7, y: 0.34, speed: 5, formation: 'v', color: GOOSE }],
  },

  coast: {
    seed: 5,
    sky: [
      [0, [64, 122, 206]],
      [0.5, [124, 178, 236]],
      [0.66, [210, 230, 248]],
      [1, [220, 236, 250]],
    ],
    sun: { x: 0.8, y: 0.18, size: 10, color: [255, 250, 220] },
    fog: [198, 222, 242],
    clouds: { count: 1.2, speed: 2, color: [255, 255, 255], alpha: 0.85 },
    layers: [
      { depth: 0, base: 0.58, amp: 0.07, wavelength: 26, step: 1, scale: 1, body: [104, 124, 150] },
      {
        depth: 0.3,
        base: 0.625,
        amp: 0.035,
        wavelength: 20,
        step: 1,
        scale: 1,
        body: [64, 104, 74],
        top: [104, 156, 86],
        trees: 0.6,
        buildings: [{ sprite: 'house', count: 2, spread: [0.56, 0.66] }],
        mobs: [
          { sprite: 'villager', count: 3, spread: [0.52, 0.7] },
          { sprite: 'sheep', count: 2, spread: [0.12, 0.3] },
        ],
      },
      {
        depth: 0.5,
        base: 0.645,
        amp: 0,
        wavelength: 1,
        step: 1,
        scale: 2,
        flat: true,
        water: true,
        body: [52, 112, 196],
        mobs: [
          { sprite: 'boat', count: 1, spread: [0.44, 0.56], fixed: true },
          { sprite: 'boat', count: 1, spread: [0.7, 0.84], fixed: true },
        ],
      },
      {
        depth: 0.8,
        base: 0.76,
        amp: 0.04,
        wavelength: 26,
        step: 2,
        scale: 2,
        tilt: 0.2,
        extent: [0, 0.4],
        body: [132, 128, 120],
        top: [100, 168, 78],
        topRows: 2,
        trees: 0.25,
        mobs: [
          { sprite: 'sheep', count: 2, spread: [0.04, 0.22] },
          { sprite: 'player3', count: 1, spread: [0.26, 0.34], fixed: true },
        ],
      },
      {
        depth: 1,
        base: 0.95,
        amp: 0.02,
        wavelength: 20,
        step: 4,
        scale: 3,
        vanilla: true,
        body: [212, 194, 138],
        top: [230, 214, 160],
        topRows: 1,
        mobs: [{ sprite: 'sheep', count: 1, spread: [0.62, 0.7], fixed: true }],
      },
    ],
    birds: [
      { count: 6, y: 0.48, speed: 3.5, formation: 'loose', color: GULL, scale: 1 },
      { count: 3, y: 0.3, speed: 4.5, formation: 'loose', color: GULL, scale: 1 },
    ],
  },
};
