// Written by scripts/mobs.py: the size of a frame of each mob sheet, and where a
// rider sits on the horses. Every sheet faces left and has 8 frames.

export const MOB_FRAMES = 8;

export const MOB_SIZES: Record<string, [number, number]> = {
  cow: [33, 26],
  'cow-small': [17, 14],
  pig: [32, 23],
  'pig-small': [17, 12],
  sheep: [30, 25],
  'sheep-small': [16, 14],
  'horse-brown': [34, 35],
  'horse-brown-small': [18, 19],
  'horse-chestnut': [34, 35],
  'horse-chestnut-small': [18, 19],
  'horse-white': [34, 35],
  'horse-white-small': [18, 19],
  'villager-farmer': [26, 36],
  'villager-farmer-small': [14, 19],
  'villager-librarian': [26, 36],
  'villager-librarian-small': [14, 19],
  'villager-cleric': [26, 36],
  'villager-cleric-small': [14, 19],
  'villager-fisherman': [26, 36],
  'villager-fisherman-small': [14, 19],
  golem: [30, 40],
  'golem-small': [16, 21],
  chicken: [23, 23],
  'chicken-small': [12, 10],
  creeper: [26, 32],
  'creeper-small': [14, 17],
  zombie: [33, 29],
  'zombie-small': [17, 15],
  skeleton: [26, 29],
  'skeleton-small': [14, 15],
  bee: [25, 20],
  'bee-small': [13, 10],
};

/** Where a rider sits on a horse sheet, full size and small. */
export const SADDLE = { x: 19, y: 13 };
export const SADDLE_SMALL = { x: 10, y: 6 };
