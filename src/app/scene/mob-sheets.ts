// Written by scripts/mobs.py: the size of a frame of each mob sheet, and where a
// rider sits on the horses. Every sheet faces left and has 8 frames.

export const MOB_FRAMES = 8;

export const MOB_SIZES: Record<string, [number, number]> = {
  cow: [32, 31],
  'cow-small': [17, 16],
  pig: [30, 21],
  'pig-small': [16, 12],
  sheep: [31, 28],
  'sheep-small': [16, 15],
  'horse-brown': [48, 42],
  'horse-brown-small': [24, 22],
  'horse-chestnut': [48, 42],
  'horse-chestnut-small': [24, 22],
  'horse-white': [48, 42],
  'horse-white-small': [24, 22],
  'villager-farmer': [21, 37],
  'villager-farmer-small': [12, 19],
  'villager-librarian': [20, 37],
  'villager-librarian-small': [11, 19],
  'villager-cleric': [20, 36],
  'villager-cleric-small': [11, 19],
  'villager-fisherman': [20, 36],
  'villager-fisherman-small': [11, 19],
  golem: [32, 46],
  'golem-small': [16, 25],
  chicken: [17, 19],
  'chicken-small': [10, 10],
  creeper: [16, 31],
  'creeper-small': [10, 17],
  zombie: [24, 36],
  'zombie-small': [14, 19],
  skeleton: [16, 35],
  'skeleton-small': [8, 19],
  bee: [18, 17],
  'bee-small': [10, 9],
};

/** Where a rider sits on a horse sheet, full size and small. */
export const SADDLE = { x: 27, y: 16 };
export const SADDLE_SMALL = { x: 13, y: 8 };
