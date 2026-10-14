// Written by scripts/mobs.py: the size of a frame of each mob sheet, and where a
// rider sits on the horses. Every sheet faces left and has 8 frames.

export const MOB_FRAMES = 8;

export const MOB_SIZES: Record<string, [number, number]> = {
  'cow': [29, 26],
  'cow-small': [15, 14],
  'pig': [32, 23],
  'pig-small': [17, 12],
  'sheep': [28, 19],
  'sheep-small': [15, 11],
  'horse-brown': [34, 36],
  'horse-brown-small': [18, 19],
  'horse-chestnut': [34, 36],
  'horse-chestnut-small': [18, 19],
  'horse-white': [34, 36],
  'horse-white-small': [18, 19],
  'villager-farmer': [22, 36],
  'villager-farmer-small': [12, 19],
  'villager-librarian': [22, 36],
  'villager-librarian-small': [12, 19],
  'villager-cleric': [22, 36],
  'villager-cleric-small': [12, 19],
  'villager-fisherman': [22, 36],
  'villager-fisherman-small': [12, 19],
  'golem': [24, 40],
  'golem-small': [13, 21],
  'chicken': [23, 23],
  'chicken-small': [12, 10],
  'creeper': [22, 31],
  'creeper-small': [12, 16],
  'zombie': [25, 29],
  'zombie-small': [14, 15],
  'skeleton': [22, 29],
  'skeleton-small': [12, 15],
  'bee': [11, 12],
  'bee-small': [6, 8],
};

/** Where a rider sits on a horse sheet, full size and small. */
export const SADDLE = { x: 19, y: 14 };
export const SADDLE_SMALL = { x: 10, y: 7 };
