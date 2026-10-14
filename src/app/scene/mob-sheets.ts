// Written by scripts/mobs.py: the size of a frame of each mob sheet, and where a
// rider sits on the horses. Every sheet faces left and has 8 frames.

export const MOB_FRAMES = 8;

export const MOB_SIZES: Record<string, [number, number]> = {
  cow: [33, 26],
  pig: [32, 23],
  sheep: [30, 25],
  'horse-brown': [38, 35],
  'horse-chestnut': [38, 35],
  'horse-white': [38, 35],
  'villager-farmer': [26, 36],
  'villager-librarian': [26, 36],
  'villager-shepherd': [26, 36],
  golem: [30, 40],
};

export const SADDLE = { x: 23, y: 17 };
