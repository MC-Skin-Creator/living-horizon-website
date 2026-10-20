/*
 * Draws the stylised horizons of the page: layers of blocky terrain fading into the haze,
 * with mobs, players and birds on them. Everything is drawn at a low resolution and scaled
 * up without smoothing, like the game's own pixels.
 *
 * `alive = false` keeps life on the near layer only (the game's render distance): the far
 * terrain stays, empty, as with Voxy or Distant Horizons alone. `alive = true` brings it to
 * life, as Living Horizon does. Every motion is a function of time, so two scenes built
 * from the same preset move in step.
 */
import { BIRD_FRAMES, PALETTE, RGB, SPRITES, SpriteName } from './sprites';
import {
  FIGURE_SIZES,
  FigureKind,
  Figures,
  MOB_FRAME_MS,
  MOB_SHEETS,
  MASCOT_FRAMES,
  MASCOT_FRAME_MS,
} from './figures';
import { MOB_FRAMES, MOB_SIZES, SADDLE, SADDLE_SMALL } from './mob-sheets';
import { SceneSpec } from './scenes';

type Canvas = HTMLCanvasElement;

/** How big the mobs of a `silhouettes` layer are, next to those of the nearer planes. */
const SHAPE_SIZE = 0.6;

interface BuiltLayer {
  surface: Int16Array;
  canvas: Canvas;
  haze: number;
  scale: number;
  vanilla: boolean;
  /** The colour of its mobs' shapes, for a layer drawn as `silhouettes`. */
  tint: RGB | null;
}

interface Mob {
  layer: number;
  sprite: SpriteName;
  x0: number;
  wander: number;
  speed: number;
  phase: number;
  floats: boolean;
  /** Index of the player figure drawn for it, or -1 for a pixel sprite. */
  figure: number;
  /** The mob sheet drawn for it (a rider's horse), or null for a pixel sprite. */
  sheet: string | null;
}

interface Bird {
  x0: number;
  y0: number;
  speed: number;
  phase: number;
  color: RGB;
  scale: number;
}

interface Cloud {
  x0: number;
  y: number;
  cells: [number, number][];
  cell: number;
}

const mix = (a: RGB, b: RGB, t: number): RGB => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];

const shade = (c: RGB, f: number): RGB => [c[0] * f, c[1] * f, c[2] * f];

function rgb(c: RGB, alpha = 1): string {
  const [r, g, b] = c.map((v) => Math.max(0, Math.min(255, Math.round(v))));
  return alpha === 1 ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${alpha})`;
}

/** A small, fast seeded generator: the same seed always draws the same scene. */
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(x: number, y: number, seed: number): number {
  let h = (x * 374761393 + y * 668265263 + seed * 2147483647) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

function valueNoise(x: number, seed: number): number {
  const i = Math.floor(x);
  const f = x - i;
  const s = f * f * (3 - 2 * f);
  return hash(i, 0, seed) * (1 - s) + hash(i + 1, 0, seed) * s;
}

function fractal(x: number, seed: number): number {
  return (
    0.6 * valueNoise(x, seed) +
    0.3 * valueNoise(x * 2.3, seed + 7) +
    0.1 * valueNoise(x * 5.1, seed + 13)
  );
}

function makeCanvas(w: number, h: number): Canvas {
  const c = document.createElement('canvas');
  c.width = Math.max(1, w);
  c.height = Math.max(1, h);
  return c;
}

function context(c: Canvas): CanvasRenderingContext2D {
  const ctx = c.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;
  return ctx;
}

/** Paints a sprite into a canvas of its own, scaled and faded into the haze. */
function spriteCanvas(rows: string[], scale: number, fog: RGB, haze: number, flip: boolean) {
  const w = rows[0].length;
  const c = makeCanvas(w * scale, rows.length * scale);
  const ctx = context(c);
  rows.forEach((row, y) =>
    [...row].forEach((ch, x) => {
      const color = PALETTE[ch];
      if (!color) return;
      ctx.fillStyle = rgb(mix(color, fog, haze));
      ctx.fillRect((flip ? w - 1 - x : x) * scale, y * scale, scale, scale);
    }),
  );
  return c;
}

export class HorizonRenderer {
  private readonly sky: Canvas;
  private readonly layers: BuiltLayer[] = [];
  private readonly mobs: Mob[] = [];
  private readonly birds: Bird[] = [];
  private readonly clouds: Cloud[] = [];
  private readonly spriteCache = new Map<string, Canvas>();
  /** Low-resolution work surface: one band of the scene at a time, before it is scaled up. */
  private readonly band: Canvas;

  constructor(
    private readonly spec: SceneSpec,
    readonly width: number,
    readonly height: number,
    /** Players drawn from real skins and the game's mobs; a mob without its image is left out. */
    private readonly figures: Figures = { players: [], mobs: {} },
  ) {
    const rand = mulberry32(spec.seed);
    this.band = makeCanvas(width, height);
    this.sky = this.buildSky(rand);
    this.buildClouds(rand);
    spec.layers.forEach((layer, i) => this.layers.push(this.buildLayer(i, rand)));
    this.placeMobs(rand);
    this.placeBirds(rand);
  }

  /**
   * Draws the scene at `t` seconds into `target`, a canvas of any size: the scene's pixels
   * are scaled up whole, band by band, and the players drawn from skins go between the
   * bands at the canvas's own resolution, so that their pixels stay sharp.
   */
  draw(target: CanvasRenderingContext2D, t: number, alive: boolean) {
    const { width: w, height: h } = this;
    const tw = target.canvas.width;
    const th = target.canvas.height;
    const k = tw / w;
    const band = context(this.band);
    const flush = () => target.drawImage(this.band, 0, 0, w, h, 0, 0, tw, th);
    target.imageSmoothingEnabled = false;
    target.clearRect(0, 0, tw, th);

    band.clearRect(0, 0, w, h);
    band.drawImage(this.sky, 0, 0);
    this.drawClouds(band, t);
    flush();

    this.layers.forEach((layer, i) => {
      band.clearRect(0, 0, w, h);
      band.drawImage(layer.canvas, 0, 0);
      const players: (() => void)[] = [];
      if (alive || layer.vanilla) {
        for (const mob of this.mobs) {
          if (mob.layer === i) this.drawMob(band, target, k, mob, layer, t, players);
        }
      }
      flush();
      for (const draw of players) draw();
    });

    if (alive) {
      band.clearRect(0, 0, w, h);
      this.drawBirds(band, t);
      flush();
    }
  }

  private buildSky(rand: () => number): Canvas {
    const { width: w, height: h, spec } = this;
    const c = makeCanvas(w, h);
    const ctx = context(c);
    const stops = spec.sky;
    // Bands two pixels high, like a low-resolution sky.
    for (let y = 0; y < h; y += 2) {
      const f = y / h;
      let k = 0;
      while (k < stops.length - 2 && f > stops[k + 1][0]) k++;
      const [f0, c0] = stops[k];
      const [f1, c1] = stops[k + 1];
      const local = Math.max(0, Math.min(1, (f - f0) / (f1 - f0)));
      ctx.fillStyle = rgb(mix(c0, c1, local));
      ctx.fillRect(0, y, w, 2);
    }
    for (let i = 0; i < (spec.stars ?? 0) * (w / 100); i++) {
      const y = Math.floor(rand() * h * 0.32);
      ctx.fillStyle = `rgba(255,255,255,${0.35 + rand() * 0.5 * (1 - y / (h * 0.32))})`;
      ctx.fillRect(Math.floor(rand() * w), y, 1, 1);
    }
    if (spec.sun) {
      // Square, as the game's: a core and two fading halos.
      const { x, y, size, color } = spec.sun;
      const cx = Math.round(x * w);
      const cy = Math.round(y * h);
      [
        [size * 2.6, 0.08],
        [size * 1.7, 0.16],
        [size, 1],
      ].forEach(([s, a]) => {
        ctx.fillStyle = rgb(color, a);
        ctx.fillRect(Math.round(cx - s / 2), Math.round(cy - s / 2), Math.round(s), Math.round(s));
      });
    }
    return c;
  }

  private buildClouds(rand: () => number) {
    const { width: w, height: h, spec } = this;
    const count = Math.round((spec.clouds?.count ?? 0) * (w / 100));
    for (let i = 0; i < count; i++) {
      const cell = rand() < 0.5 ? 3 : 4;
      const cells: [number, number][] = [];
      const len = 3 + Math.floor(rand() * 5);
      for (let x = 0; x < len; x++) {
        cells.push([x, 0]);
        if (x > 0 && x < len - 1 && rand() < 0.55) cells.push([x, -1]);
      }
      this.clouds.push({
        x0: rand() * (w + 40),
        y: Math.round(h * (0.06 + rand() * 0.28)),
        cells,
        cell,
      });
    }
  }

  private buildLayer(index: number, rand: () => number): BuiltLayer {
    const { width: w, height: h, spec } = this;
    const layer = spec.layers[index];
    const haze = layer.haze ?? 0.8 * Math.pow(1 - layer.depth, 1.5);
    const step = layer.step;
    const surface = new Int16Array(w);
    const seed = spec.seed * 31 + index * 101;
    const offset = rand() * 1000;

    for (let x = 0; x < w; x += step) {
      const col = Math.floor(x / step) * step;
      const n = layer.flat ? 0.5 : fractal((col + offset) / layer.wavelength, seed);
      const tilt = (layer.tilt ?? 0) * (col / w - 0.5);
      let y = h * (layer.base + tilt - layer.amp * (n - 0.5) * 2);
      y = Math.round(y / step) * step;
      for (let k = 0; k < step && x + k < w; k++) surface[x + k] = y;
    }

    const c = makeCanvas(w, h);
    const ctx = context(c);
    const [from, to] = layer.extent ?? [0, 1];
    const top = layer.top ?? layer.body;
    const topRows = layer.topRows ?? 1;

    const outside = (x: number) => x < from * w || x >= to * w;
    for (let x = 0; x < w; x += step) {
      const sy = surface[x];
      if (outside(x)) continue;
      const bx = Math.floor(x / step);
      for (let y = sy; y < h; y += step) {
        const by = Math.floor((y - sy) / step);
        let base = by < topRows ? top : layer.body;
        if (layer.snowLine !== undefined && sy < layer.snowLine * h && by < topRows + 1) {
          base = layer.snow ?? [240, 244, 250];
        }
        if (layer.water) {
          base = by === 0 ? mix(layer.body, [255, 255, 255], 0.25) : layer.body;
        }
        // Each block a shade lighter or darker, and valleys deeper in the haze.
        const jitter = layer.water ? 1 : 0.93 + hash(bx, by, seed) * 0.14;
        const valley = Math.min(1, (y - sy) / (h * 0.35));
        const fogged = mix(
          shade(base, jitter),
          spec.fog,
          Math.min(1, haze + (1 - haze) * 0.2 * valley),
        );
        ctx.fillStyle = rgb(fogged);
        ctx.fillRect(x, y, Math.min(step, w - x), step);
      }
    }

    if (layer.water) {
      // Glints on the water, in short runs.
      const glints = Math.round(w / 6);
      for (let i = 0; i < glints; i++) {
        const y = surface[0] + 2 + Math.floor(rand() * (h - surface[0] - 2));
        ctx.fillStyle = `rgba(255,255,255,${0.12 + rand() * 0.18})`;
        ctx.fillRect(Math.floor(rand() * w), y, 2 + Math.floor(rand() * 6), 1);
      }
    }

    const scale = layer.scale;
    const decorate = (sprite: SpriteName, x: number) => {
      const xi = Math.max(0, Math.min(w - 1, Math.round(x)));
      if (outside(xi)) return;
      const img = this.sprite(sprite, scale, haze, false);
      ctx.drawImage(img, Math.round(xi - img.width / 2), surface[xi] - img.height + scale);
    };
    const trees = Math.round((layer.trees ?? 0) * (w / 100) * (step === 1 ? 2 : 1));
    for (let i = 0; i < trees; i++) decorate(scale <= 1 ? 'treeSmall' : 'tree', rand() * w);
    for (const b of layer.buildings ?? []) {
      const [from, to] = b.spread;
      for (let i = 0; i < b.count; i++)
        decorate(b.sprite, w * (from + ((to - from) * (i + 0.5)) / b.count) + (rand() - 0.5) * 6);
    }

    // As far as the terrain itself, a shade darker so that the shapes read against it.
    const tint = layer.silhouettes ? shade(mix(layer.body, spec.fog, haze), 0.8) : null;
    return { surface, canvas: c, haze, scale, vanilla: !!layer.vanilla, tint };
  }

  private placeMobs(rand: () => number) {
    const { width: w } = this;
    let players = 0;
    const variants = new Map<string, number>();
    const sheetFor = (sprite: string) => {
      const options = (MOB_SHEETS[sprite] ?? []).filter((n) => this.figures.mobs[n]);
      if (!options.length) return null;
      const n = variants.get(sprite) ?? 0;
      variants.set(sprite, n + 1);
      return options[n % options.length];
    };
    const roster = this.figures.players;
    const isPlayer = (sprite: string) => /^(player|rider|boat)/.test(sprite);
    // Steve (the first skin) is the player of the nearest plane that has one; the other
    // skins take turns everywhere else.
    let front = -1;
    this.spec.layers.forEach((layer, index) => {
      if (layer.mobs?.some((g) => isPlayer(g.sprite))) front = index;
    });
    this.spec.layers.forEach((layer, index) => {
      for (const group of layer.mobs ?? []) {
        const [from, to] = group.spread ?? [0.04, 0.96];
        const count = Math.max(
          1,
          Math.round(group.count * (group.fixed ? 1 : Math.min(1.6, w / 400))),
        );
        for (let i = 0; i < count; i++) {
          let x0 = w * (from + rand() * (to - from));
          if (group.onPeak) x0 = this.peak(index, w * from, w * to);
          const player = roster.length > 0 && isPlayer(group.sprite);
          const sheet = sheetFor(group.sprite);
          // Only the figures from skins and the game's mobs are drawn: until their images
          // are loaded (or if one cannot be), the mob is left out rather than drawn as an
          // old pixel sprite.
          if (!player && !sheet) continue;
          this.mobs.push({
            layer: index,
            sprite: group.sprite,
            x0,
            // Mascots bounce on the spot rather than walk.
            wander: group.still ? 0 : (player ? 0.3 : 1) * (4 + rand() * 10) * layer.scale,
            speed: 0.08 + rand() * 0.22,
            phase: rand() * Math.PI * 2,
            floats: !!layer.water,
            figure: !player
              ? -1
              : index === front || roster.length === 1
                ? 0
                : 1 + (players++ % (roster.length - 1)),
            sheet,
          });
        }
      }
    });
  }

  private peak(index: number, from: number, to: number): number {
    const surface = this.layers[index].surface;
    let best = Math.round(from);
    for (let x = Math.round(from); x < Math.min(to, this.width); x++)
      if (surface[x] < surface[best]) best = x;
    return best;
  }

  private placeBirds(rand: () => number) {
    const { width: w, height: h } = this;
    for (const flock of this.spec.birds ?? []) {
      const x0 = rand() * w;
      const y0 = flock.y * h;
      const speed = flock.speed * (rand() < 0.5 ? 1 : 1.1);
      for (let i = 0; i < flock.count; i++) {
        // A V for geese, a loose cloud for the others.
        const row = Math.ceil(i / 2);
        const side = i % 2 ? 1 : -1;
        const dx = flock.formation === 'v' ? -row * 5 : (rand() - 0.5) * 40;
        const dy = flock.formation === 'v' ? row * 3 * side : (rand() - 0.5) * 14;
        this.birds.push({
          x0: x0 + dx,
          y0: y0 + dy,
          speed,
          phase: rand() * 10,
          color: flock.color,
          scale: flock.scale ?? 1,
        });
      }
    }
  }

  private drawClouds(ctx: CanvasRenderingContext2D, t: number) {
    const spec = this.spec.clouds;
    if (!spec) return;
    const span = this.width + 60;
    for (const cloud of this.clouds) {
      const x = ((((cloud.x0 + t * spec.speed) % span) + span) % span) - 40;
      for (const [cx, cy] of cloud.cells) {
        ctx.fillStyle = rgb(cy < 0 ? spec.color : shade(spec.color, 0.93), spec.alpha);
        ctx.fillRect(
          Math.round(x + cx * cloud.cell),
          cloud.y + cy * Math.round(cloud.cell * 0.6),
          cloud.cell,
          Math.round(cloud.cell * 0.6),
        );
      }
    }
  }

  private drawMob(
    band: CanvasRenderingContext2D,
    target: CanvasRenderingContext2D,
    k: number,
    mob: Mob,
    layer: BuiltLayer,
    t: number,
    players: (() => void)[],
  ) {
    const angle = t * mob.speed + mob.phase;
    const x = mob.x0 + mob.wander * Math.sin(angle);
    const flip = mob.wander > 0 ? Math.cos(angle) < 0 : mob.phase > Math.PI;
    const xi = Math.max(0, Math.min(this.width - 1, Math.round(x)));
    const bob = mob.floats ? Math.round(Math.sin(t * 1.6 + mob.phase) * 0.6) : 0;
    if (mob.figure >= 0) {
      this.drawFigure(band, target, k, mob, layer, xi, flip, t, bob, players);
      return;
    }
    if (mob.sheet && layer.tint) {
      // Smaller than on the nearer planes: the sheet they would draw, shrunk.
      const { p, small } = this.size(layer, k);
      const sheet = mob.sheet + (small ? '-small' : '');
      const img = this.shapeImage(sheet, this.mobFrame(mob, t), !flip, layer.tint);
      const bottom = layer.surface[xi] * k + p;
      players.push(() => this.blit(target, img, xi * k, bottom, p));
      return;
    }
    if (mob.sheet) {
      const { p, small } = this.size(layer, k);
      const sheet = mob.sheet + (small ? '-small' : '');
      const img = this.mobImage(sheet, this.mobFrame(mob, t), layer.haze * 0.8, !flip);
      // Bees fly above the grass, bobbing.
      const lift = mob.sprite === 'bee' ? (6 + Math.sin(t * 3 + mob.phase) * 1.5) * layer.scale : 0;
      const bottom = (layer.surface[xi] - lift) * k + p;
      players.push(() => this.blit(target, img, xi * k, bottom, p));
      return;
    }
    this.drawSprite(band, mob, layer, xi, flip, bob);
  }

  private drawBirds(ctx: CanvasRenderingContext2D, t: number) {
    const span = this.width + 80;
    for (const bird of this.birds) {
      const x = ((((bird.x0 + t * bird.speed) % span) + span) % span) - 40;
      const y = Math.round(bird.y0 + Math.sin(t * 0.8 + bird.phase) * 2);
      const frame = BIRD_FRAMES[Math.floor(t * 5 + bird.phase) % 2];
      ctx.fillStyle = rgb(bird.color);
      frame.forEach((row, ry) =>
        [...row].forEach((ch, rx) => {
          if (ch === 'X')
            ctx.fillRect(
              Math.round(x) + rx * bird.scale,
              y + ry * bird.scale,
              bird.scale,
              bird.scale,
            );
        }),
      );
    }
  }

  /** Draws a pixel sprite standing at `xi`; returns the top of what was drawn. */
  private drawSprite(
    ctx: CanvasRenderingContext2D,
    mob: Mob,
    layer: BuiltLayer,
    xi: number,
    flip: boolean,
    bob: number,
  ): number {
    const img = this.sprite(mob.sprite, layer.scale, layer.haze * 0.8, flip);
    const top = layer.surface[xi] - img.height + (mob.floats ? layer.scale : 0) + bob;
    ctx.drawImage(img, Math.round(xi - img.width / 2), top);
    return top;
  }

  /**
   * A player from its skin: walking, on a horse or in a boat. The horse and the hull are
   * pixel sprites of the band; the player is queued in `players`, drawn after the band at
   * the canvas's resolution, `p` canvas pixels per pixel of the avatar.
   */
  private drawFigure(
    band: CanvasRenderingContext2D,
    target: CanvasRenderingContext2D,
    k: number,
    mob: Mob,
    layer: BuiltLayer,
    xi: number,
    flip: boolean,
    t: number,
    bob: number,
    players: (() => void)[],
  ) {
    const s = layer.scale;
    const haze = layer.haze * 0.8;
    const ground = layer.surface[xi];
    const { p, small } = this.size(layer, k);
    const drops: FigureKind = small ? 'drops-small' : 'drops';

    if (mob.sprite === 'rider' && mob.sheet) {
      // On a horse of the game: the rider's drops bust in the saddle.
      const sheet = mob.sheet + (small ? '-small' : '');
      const saddle = small ? SADDLE_SMALL : SADDLE;
      const horse = this.mobImage(sheet, this.mobFrame(mob, t), haze, !flip);
      const bottom = ground * k + p;
      const left = Math.round(xi * k - (horse.width * p) / 2);
      const top = Math.round(bottom) - horse.height * p;
      const sx = flip ? saddle.x : horse.width - saddle.x;
      const img = this.figureImage(mob.figure, drops, 0, haze, flip);
      const sink = small ? 2 : 3;
      players.push(() => {
        this.blit(target, horse, xi * k, bottom, p);
        this.blit(target, img, left + sx * p, top + (saddle.y + sink) * p, p);
      });
      return;
    }

    if (mob.sprite === 'rider' || mob.sprite === 'boat') {
      const seat = this.sprite(mob.sprite === 'rider' ? 'horse' : 'hull', s, haze, flip);
      const seatLeft = Math.round(xi - seat.width / 2);
      const seatTop = ground - seat.height + (mob.floats ? s : 0) + bob;
      band.drawImage(seat, seatLeft, seatTop);
      // The drops avatar, head and shoulders: the legs are in the saddle or the hull.
      const img = this.figureImage(mob.figure, drops, 0, haze, flip);
      const along = mob.sprite === 'rider' ? (flip ? 0.62 : 0.38) : 0.5;
      const cx = (seatLeft + seat.width * along) * k;
      const bottom = (seatTop + (mob.sprite === 'rider' ? 2 * s : s)) * k;
      players.push(() => this.blit(target, img, cx, bottom, p));
      return;
    }

    const frame = Math.floor((t * 1000) / MASCOT_FRAME_MS + mob.phase * 5) % MASCOT_FRAMES;
    const img = this.figureImage(mob.figure, small ? 'mascot-small' : 'mascot', frame, haze, flip);
    // The bottom row of the avatar is its outline: let it sink into the grass.
    players.push(() => this.blit(target, img, xi * k, ground * k + p, p));
  }

  /**
   * How big the avatars of a layer are drawn: `p` canvas pixels per pixel, always whole so
   * that they stay sharp, and the half-size sheets (`small`) for the far planes. The
   * foreground (the game's own render distance) is much bigger: right in front of you.
   */
  private size(layer: BuiltLayer, k: number): { p: number; small: boolean } {
    const e = ((layer.vanilla ? 2.6 : 1) * layer.scale * k) / 6.5;
    return e < 0.75 ? { p: 1, small: true } : { p: Math.max(1, Math.round(e)), small: false };
  }

  private mobFrame(mob: Mob, t: number): number {
    return Math.floor((t * 1000) / MOB_FRAME_MS + mob.phase * 5) % MOB_FRAMES;
  }

  /** Draws `img` scaled by `p`, centred on `cx`, standing on `bottom`; returns its top. */
  private blit(
    target: CanvasRenderingContext2D,
    img: Canvas,
    cx: number,
    bottom: number,
    p: number,
  ): number {
    const w = img.width * p;
    const h = img.height * p;
    const top = Math.round(bottom) - h;
    target.drawImage(img, Math.round(cx - w / 2), top, w, h);
    return top;
  }

  /** One frame of a skin's avatar, faded into the haze. */
  private figureImage(
    index: number,
    kind: FigureKind,
    frame: number,
    haze: number,
    flip: boolean,
  ): Canvas {
    const key = `fig:${index}:${kind}:${frame}:${haze.toFixed(3)}:${flip}`;
    let c = this.spriteCache.get(key);
    if (c) return c;
    const [w, rows] = FIGURE_SIZES[kind];
    c = makeCanvas(w, rows);
    const ctx = c.getContext('2d', { willReadFrequently: true })!;
    if (flip) {
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(this.figures.players[index][kind], frame * w, 0, w, rows, 0, 0, w, rows);
    this.fade(ctx, w, rows, haze);
    this.spriteCache.set(key, c);
    return c;
  }

  /** One frame of a mob sheet, faded into the haze. Sheets face left: `flip` turns it right. */
  private mobImage(name: string, frame: number, haze: number, flip: boolean): Canvas {
    const key = `mob:${name}:${frame}:${haze.toFixed(3)}:${flip}`;
    let c = this.spriteCache.get(key);
    if (c) return c;
    const [w, h] = MOB_SIZES[name];
    c = makeCanvas(w, h);
    const ctx = c.getContext('2d', { willReadFrequently: true })!;
    if (flip) {
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(this.figures.mobs[name], frame * w, 0, w, h, 0, 0, w, h);
    this.fade(ctx, w, h, haze);
    this.spriteCache.set(key, c);
    return c;
  }

  /**
   * One frame of a mob sheet as a flat shape of one colour, `SHAPE_SIZE` of its size, for
   * the farthest planes: only its outline and its walk are left. A pixel is kept where the
   * mob covers at least half of the area it stands for.
   */
  private shapeImage(name: string, frame: number, flip: boolean, tint: RGB): Canvas {
    const key = `shape:${name}:${frame}:${flip}:${tint.join(',')}`;
    let c = this.spriteCache.get(key);
    if (c) return c;
    const src = this.mobImage(name, frame, 0, flip);
    const { width: sw, height: sh } = src;
    const alpha = src
      .getContext('2d', { willReadFrequently: true })!
      .getImageData(0, 0, sw, sh).data;
    const w = Math.max(1, Math.round(sw * SHAPE_SIZE));
    const h = Math.max(1, Math.round(sh * SHAPE_SIZE));
    c = makeCanvas(w, h);
    const ctx = context(c);
    ctx.fillStyle = rgb(tint);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const x0 = Math.floor((x * sw) / w);
        const x1 = Math.max(x0 + 1, Math.floor(((x + 1) * sw) / w));
        const y0 = Math.floor((y * sh) / h);
        const y1 = Math.max(y0 + 1, Math.floor(((y + 1) * sh) / h));
        let solid = 0;
        for (let sy = y0; sy < y1; sy++)
          for (let sx = x0; sx < x1; sx++) if (alpha[(sy * sw + sx) * 4 + 3] > 96) solid++;
        if (solid * 2 >= (x1 - x0) * (y1 - y0)) ctx.fillRect(x, y, 1, 1);
      }
    }
    this.spriteCache.set(key, c);
    return c;
  }

  private fade(ctx: CanvasRenderingContext2D, w: number, h: number, haze: number) {
    const data = ctx.getImageData(0, 0, w, h);
    const px = data.data;
    const fog = this.spec.fog;
    for (let i = 0; i < px.length; i += 4) {
      if (!px[i + 3]) continue;
      for (let ch = 0; ch < 3; ch++) px[i + ch] += (fog[ch] - px[i + ch]) * haze;
    }
    ctx.putImageData(data, 0, 0);
  }

  private sprite(name: SpriteName, scale: number, haze: number, flip: boolean): Canvas {
    const key = `${name}:${scale}:${haze.toFixed(3)}:${flip}`;
    let c = this.spriteCache.get(key);
    if (!c) {
      c = spriteCanvas(SPRITES[name], scale, this.spec.fog, haze, flip);
      this.spriteCache.set(key, c);
    }
    return c;
  }
}
