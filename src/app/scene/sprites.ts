/*
 * Pixel sprites of the illustrations, one character per pixel, facing right.
 * '.' is transparent; every other character is a colour of PALETTE.
 */

export type RGB = readonly [number, number, number];

export const PALETTE: Record<string, RGB> = {
  W: [236, 236, 232], // white wool, cow patches, gulls
  K: [44, 38, 38], // black
  g: [150, 146, 140], // grey face / legs
  G: [214, 210, 198], // iron golem
  v: [86, 132, 60], // golem vine
  P: [238, 160, 158], // pig
  p: [196, 112, 112], // pig snout and legs
  E: [128, 86, 52], // horse
  e: [72, 46, 28], // mane, hooves
  s: [214, 162, 122], // skin
  h: [74, 50, 30], // hair
  C: [32, 172, 176], // shirt
  U: [58, 64, 160], // trousers
  R: [134, 92, 58], // villager robe
  r: [88, 56, 38], // villager belt, roofs
  w: [176, 136, 84], // planks
  d: [74, 50, 30], // door
  c: [190, 186, 176], // cobblestone
  t: [92, 64, 40], // trunk
  l: [52, 104, 44], // leaves
  L: [70, 128, 56], // leaves, light
  B: [120, 84, 50], // boat
};

export type SpriteName =
  | 'cow'
  | 'sheep'
  | 'pig'
  | 'horse'
  | 'villager'
  | 'golem'
  | 'player'
  | 'player2'
  | 'player3'
  | 'rider'
  | 'boat'
  | 'house'
  | 'tower'
  | 'tree'
  | 'treeSmall'
  | 'bird'
  | 'hull';

const horse = ['......ee', '.....eEE', 'eEEEEEEE', '.EEEEEE.', '.E....E.', '.e....e.'];

const player = ['hh', 'ss', 'CC', 'CC', 'UU', 'UU'];

/** Lays `top` over `base`, `top`'s corner at (dx, dy) of `base`; grows the grid as needed. */
function overlay(base: string[], top: string[], dx: number, dy: number): string[] {
  const minY = Math.min(0, dy);
  const minX = Math.min(0, dx);
  const width = Math.max(base[0].length, dx + top[0].length) - minX;
  const height = Math.max(base.length, dy + top.length) - minY;
  const grid = Array.from({ length: height }, () => Array(width).fill('.'));
  const paint = (src: string[], ox: number, oy: number) =>
    src.forEach((row, y) =>
      [...row].forEach((ch, x) => {
        if (ch !== '.') grid[y + oy - minY][x + ox - minX] = ch;
      }),
    );
  paint(base, 0, 0);
  paint(top, dx, dy);
  return grid.map((r) => r.join(''));
}

const recolor = (sprite: string[], from: string, to: string) =>
  sprite.map((row) => row.replaceAll(from, to));

export const SPRITES: Record<SpriteName, string[]> = {
  cow: ['......K', 'KWWKWKW', 'WKWWKK.', 'K.K..K.'],
  sheep: ['.....gg', 'WWWWWgg', 'WWWWWW.', '.g..g..'],
  pig: ['......P', 'PPPPPPp', 'PPPPPP.', '.p..p..'],
  horse,
  villager: ['ss', 'ss', 'RR', 'rr', 'RR', 'RR'],
  golem: ['.GG.', '.GG.', 'GGGG', 'GvGG', 'GGvG', '.GG.', '.GG.'],
  player,
  player2: recolor(recolor(player, 'C', 'R'), 'h', 'K'),
  player3: recolor(recolor(player, 'C', 'L'), 'U', 'e'),
  rider: overlay(horse, ['hh', 'ss', 'CC', 'CC', 'UU'], 2, -4),
  boat: overlay(['B.....B', 'BBBBBBB'], ['hh', 'ss', 'CC'], 3, -2),
  house: ['..rr..', '.rrrr.', 'rrrrrr', '.wwdw.', '.wwdw.'],
  tower: ['rrrr', 'cccc', 'cwcc', 'cccc', 'ccdc'],
  tree: ['.lLl.', 'lLlLl', 'lllLl', '.lll.', '..t..', '..t..'],
  treeSmall: ['lL', 'll', '.t'],
  bird: ['K...K', '.K.K.', '..K..'],
  hull: ['B.....B', 'BBBBBBB'],
};

/** Two frames of a bird's wings: up, then down. */
export const BIRD_FRAMES = [
  ['X.X', '.X.'],
  ['.X.', 'X.X'],
];
