"""
The mod's icon: Steve in front, and life on every plane behind him out to the mountains, a
morning sky with an orange sun. The figures are the site's own: Steve's "Mascot" avatar from
MC Skin Creator (art/logo/steve-mascot.png, from the skin art/skins/steve.png), the other
players' avatars from public/img/figures/, the mobs built from the game by scripts/mobs.py.

    python3 scripts/logo.py <minecraft client jar>

Writes the site's icons (public/favicon.png, public/img/icon-*.png, icon-128.webp,
apple-touch-icon.png) and art/logo/icon.png, the 512 px icon the mod ships as
src/main/resources/assets/livinghorizon/icon.png.
"""

import io
import math
import random
import sys
import zipfile
from pathlib import Path

import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).parent))
import mobs  # noqa: E402

N = 512
# The landscape's pixel: blocks, birds and trees are drawn in squares of this size.
U = 4
SEED = 3

MORNING = dict(
    sky=[(0, (84, 120, 196)), (0.32, (140, 160, 220)), (0.5, (214, 176, 196)), (0.62, (255, 190, 150)),
         (0.72, (255, 214, 158)), (1, (255, 232, 190))],
    fog=(236, 196, 178), sun=((0.62, 0.16), 9, (255, 138, 44)),
    cloud=(255, 222, 214, 170),
    far=(150, 132, 176), mid_body=(92, 112, 120), mid_top=(150, 168, 120),
    near_body=(70, 104, 84), near_top=(112, 164, 88), fg_body=(70, 56, 52), fg_top=(84, 150, 70),
    dirt=(96, 70, 52), birds=(70, 56, 64),
)


def mix(a, b, t):
    return tuple(int(round(x + (y - x) * t)) for x, y in zip(a, b))


def fade(img, fog, t):
    """A figure taken into the haze, as the site's renderer does."""
    a = np.asarray(img).astype(float)
    a[..., :3] = a[..., :3] + (np.array(fog) - a[..., :3]) * t
    return Image.fromarray(a.astype(np.uint8), 'RGBA')


def big(im, k):
    return im.resize((im.width * k, im.height * k), Image.NEAREST)


def first_frame(path):
    """The first frame of an 8-frame sheet, cropped to the figure."""
    im = Image.open(path).convert('RGBA')
    frame = im.crop((0, 0, im.width // 8, im.height))
    return frame.crop(frame.getbbox())


class Cast:
    """The mobs, built from the game's models, and the players' avatars."""

    def __init__(self, jar):
        code = mobs.Bytecode(jar)
        zf = zipfile.ZipFile(jar)

        def tex(*paths):
            base = None
            for p in paths:
                im = Image.open(io.BytesIO(zf.read(mobs.TEXTURES + p + '.png'))).convert('RGBA')
                base = im if base is None else Image.alpha_composite(base, im)
            return np.asarray(base)

        none = mobs.Deform(0.0)
        self.models = {
            'creeper': mobs.Mob([(code.model('monster/creeper/CreeperModel', 'createBodyLayer', none), tex('creeper/creeper'))],
                                mobs.FRONT, mobs.nod()),
            'zombie': mobs.Mob([(code.model('HumanoidModel', 'createMesh', none, 0.0), tex('zombie/zombie'))], mobs.FRONT, mobs.zombie),
            'sheep': mobs.Mob([(code.model('animal/sheep/SheepModel', 'createBodyLayer'), tex('sheep/sheep')),
                               (code.model('animal/sheep/SheepFurModel', 'createFurLayer'), tex('sheep/sheep_wool'))],
                              mobs.SIDE, mobs.nod()),
            'cow': mobs.Mob([(code.model('animal/cow/CowModel', 'createBodyLayer'), tex('cow/cow_temperate'))], mobs.SIDE, mobs.nod()),
            **{f'villager-{job}': mobs.Mob([(code.model('npc/VillagerModel', 'createBodyModel'),
                                             tex('villager/villager', 'villager/type/plains', f'villager/profession/{job}'))],
                                           mobs.FRONT, mobs.nod(), 0.9375)
               for job in ('farmer', 'librarian')},
        }

    def mob(self, name):
        sheet, _ = self.models[name].sheet(1.0, 6)
        frame = sheet.crop((0, 0, sheet.width // mobs.FRAMES, sheet.height))
        return frame.crop(frame.getbbox())

    @staticmethod
    def player(who):
        if who == 'steve':
            return first_frame(Path('art/logo/steve-mascot.png'))
        return first_frame(Path(f'public/img/figures/skin-{who}-mascot.png'))


def ridge(rng, base, amp, wave, step, phase):
    """Ground height per column, in blocks of `step` pixels."""
    h = []
    for x in range(N):
        xs = (x // step) * step
        y = base + amp * (math.sin(xs / wave + phase) * 0.6 + math.sin(xs / (wave * 0.47) + phase * 2.3) * 0.4)
        h.append(int(round(y / step) * step))
    return h


def paint_ground(px, heights, body, top, top_rows, dirt=None):
    for x, y0 in enumerate(heights):
        for y in range(max(y0, 0), N):
            if y - y0 < top_rows:
                px[x, y] = top + (255,)
            elif dirt and y - y0 < top_rows + 6 * U:
                px[x, y] = dirt + (255,)
            else:
                px[x, y] = body + (255,)


def tree(img, x, ground, k, leaf, trunk):
    """A small oak, `k` pixels a block."""
    for j in range(2):
        img.paste(trunk + (255,), (x, ground - (j + 1) * k, x + k, ground - j * k))
    for bx, by in ((-1, 2), (0, 2), (1, 2), (-1, 3), (0, 3), (1, 3), (0, 4)):
        X, Y = x + bx * k, ground - (by + 1) * k
        img.paste(leaf + (255,), (X, Y, X + k, Y + k))


def flock(img, x, y, k, colour, v=True):
    """A few birds, in a V or loose, `k` pixels a pixel of a bird."""
    spots = ((0, 0), (-4, 2), (4, 2), (-8, 4), (8, 4)) if v else ((0, 0), (6, -2), (13, 1))
    for dx, dy in spots:
        for ox, oy in ((-1, 0), (1, 0), (0, 1)):
            X, Y = x + (dx + ox) * k, y + (dy + oy) * k
            img.paste(colour + (255,), (X, Y, X + k, Y + k))


def place(img, fig, cx, ground, sink=1):
    """A figure standing on the ground at column cx."""
    img.alpha_composite(fig, (int(cx - fig.width / 2), ground - fig.height + sink))


def icon(cast, pal):
    rng = random.Random(SEED)
    img = Image.new('RGBA', (N, N))
    px = img.load()
    # The sky's colours run down to the mountains, a quarter of the way and a little more.
    stops = pal['sky']
    for y in range(N):
        t = min(1.0, y / (N * 0.4))
        for (a, ca), (b, cb) in zip(stops, stops[1:]):
            if a <= t <= b:
                c = mix(ca, cb, (t - a) / (b - a))
                break
        for x in range(N):
            px[x, y] = c + (255,)
    (sx, sy), r, sc = pal['sun']
    r *= U
    cx, cy = int(sx * N), int(sy * N)
    glow = Image.new('RGBA', (N, N))
    gp = glow.load()
    for y in range(cy - r * 2, cy + r * 2):
        for x in range(cx - r * 2, cx + r * 2):
            d = max(abs(x - cx), abs(y - cy))
            if 0 <= x < N and 0 <= y < N and d < r * 2:
                # The disc, then rings of glow fading out, in steps as pixel art does.
                gp[x, y] = sc + ((255,) if d < r // 2 + 2 * U else (90,) if d < r * 0.75 else
                                 (48,) if d < r * 1.15 else (24,) if d < r * 1.6 else (10,))
    img.alpha_composite(glow)
    for cxl, cyl, w in ((0.06, 0.06, 18), (0.84, 0.035, 14)):
        cl = Image.new('RGBA', (w * U, 3 * U), pal['cloud'])
        cl.paste(Image.new('RGBA', (w // 2 * U, 2 * U), pal['cloud']), (w // 4 * U, 0))
        img.alpha_composite(cl, (int(cxl * N), int(cyl * N)))
    fog, birds = pal['fog'], pal['birds']

    def ground(base, amp, wave, step, body, top, rows, haze):
        h = ridge(rng, N * base, N * amp, wave * U, step * U, rng.random() * 6)
        layer = Image.new('RGBA', (N, N))
        paint_ground(layer.load(), h, mix(body, fog, haze), mix(top, fog, haze), rows * U)
        return h, layer

    def stand(layer, h, who, fx, size, haze):
        """A player (a skin number) or a mob, `size` times its own size, in the haze."""
        fig = cast.mob(who) if isinstance(who, str) and who != 'steve' else cast.player(who)
        x = int(fx * N)
        place(layer, fade(big(fig, size), fog, haze), x, h[x], sink=size if size > 1 else 1)

    # Fifth plane: the far mountains, a player on a peak, the smallest birds.
    h5, layer = ground(0.3, 0.075, 9, 1, pal['far'], pal['far'], 0, 0.3)
    peak = min(range(int(N * 0.8), int(N * 0.96)), key=lambda x: h5[x]) / N
    stand(layer, h5, 5, peak, 1, 0.3)
    img.alpha_composite(layer)
    flock(img, int(N * 0.3), int(N * 0.15), U - 1, mix(birds, fog, 0.45), v=False)

    # Fourth plane: hills, villagers above Steve's head, a player and a cow.
    h4, layer = ground(0.41, 0.04, 10, 1, mix(pal['far'], pal['mid_body'], 0.5), mix(pal['far'], pal['mid_top'], 0.5), 1, 0.32)
    for who, fx in (('villager-farmer', 0.1), ('villager-librarian', 0.3), (4, 0.56), ('cow', 0.74)):
        stand(layer, h4, who, fx, 1, 0.24)
    img.alpha_composite(layer)
    flock(img, int(N * 0.86), int(N * 0.3), U, mix(birds, fog, 0.35))

    # Third plane: the horizon, a zombie and a sheep at twice their size.
    h3, layer = ground(0.52, 0.03, 11, 1, pal['mid_body'], pal['mid_top'], 1, 0.26)
    for x in (int(N * 0.1), int(N * 0.7)):
        tree(layer, x, h3[x] + U, U, mix((56, 110, 54), fog, 0.3), mix((92, 66, 44), fog, 0.3))
    for who, fx in (('zombie', 0.9), ('sheep', 0.52)):
        stand(layer, h3, who, fx, 2, 0.14)
    img.alpha_composite(layer)
    flock(img, int(N * 0.6), int(N * 0.4), U + 1, mix(birds, fog, 0.22), v=False)

    # Second plane: the creeper, three times its size.
    h2, layer = ground(0.69, 0.035, 14, 2, pal['near_body'], pal['near_top'], 2, 0.1)
    tree(layer, int(N * 0.9), h2[int(N * 0.9)] + 2 * U, 2 * U, mix((50, 104, 50), fog, 0.12), mix((86, 60, 40), fog, 0.12))
    stand(layer, h2, 'creeper', 0.66, 3, 0.05)
    img.alpha_composite(layer)
    flock(img, int(N * 0.42), int(N * 0.08), U + 2, mix(birds, fog, 0.1))

    # Foreground: Steve, the avatar's pixels eight times as big.
    h1 = [int(N * 0.93)] * N
    for x in range(N):
        if x // (8 * U) % 5 == 1:
            h1[x] -= 4 * U
    layer = Image.new('RGBA', (N, N))
    paint_ground(layer.load(), h1, pal['fg_body'], pal['fg_top'], 3 * U, pal['dirt'])
    img.alpha_composite(layer)
    x = int(0.24 * N)
    place(img, big(cast.player('steve'), 2 * U), x, h1[x], sink=2 * U)
    return img.convert('RGB')


def main():
    full = icon(Cast(sys.argv[1]), MORNING)
    Path('art/logo').mkdir(parents=True, exist_ok=True)
    full.save('art/logo/icon.png', optimize=True)
    full.save('public/img/icon-512.png', optimize=True)
    # The smaller ones are scaled down smoothly: at these sizes the pixels cannot stay whole.
    small = lambda n: full.resize((n, n), Image.LANCZOS)
    small(192).save('public/img/icon-192.png', optimize=True)
    small(180).save('public/img/apple-touch-icon.png', optimize=True)
    small(128).save('public/img/icon-128.webp', quality=92)
    small(32).save('public/favicon.png', optimize=True)


if __name__ == '__main__':
    main()
