"""
Builds the mobs of the illustrations from the game's own textures, in the style of MC Skin
Creator's "Mascot" avatar: a big head (front face at twice the size, its side face beside it,
darker), a small body, a black outline around every part, and a short animation.

    python3 scripts/mobs.py <minecraft client jar>

The client jar is the official one (1.21.4 layouts), downloaded from Mojang's launcher
metadata. Writes public/img/mobs/<name>.png, the frames side by side, one pixel per pixel,
and <name>-small.png at half size for the mobs far away, and src/app/scene/mob-sheets.ts,
their sizes.
"""

import io
import sys
import zipfile
from pathlib import Path

from PIL import Image

FRAMES = 8
# Head offset per frame: a slow nod, as when grazing or looking around.
NOD = [0, 0, 0, 1, 1, 1, 0, 0]
BLACK = (24, 20, 24, 255)

ROOT = 'assets/minecraft/textures/entity/'


def load(jar: zipfile.ZipFile, *paths: str) -> Image.Image:
    """The texture of the first path, with the others laid over it (villager overlays)."""
    base = None
    for p in paths:
        im = Image.open(io.BytesIO(jar.read(ROOT + p))).convert('RGBA')
        base = im if base is None else Image.alpha_composite(base, im)
    return base


def region(tex, x, y, w, h, sx=1, sy=1, shade=1.0, rotate=False, flip=False):
    """A face of a box of the model: its pixels, scaled by whole numbers, maybe shaded."""
    im = tex.crop((x, y, x + w, y + h))
    if rotate:
        im = im.transpose(Image.Transpose.ROTATE_90)
    if flip:
        im = im.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
    im = im.resize((im.width * sx, im.height * sy), Image.NEAREST)
    if shade != 1.0:
        px = im.load()
        for j in range(im.height):
            for i in range(im.width):
                r, g, b, a = px[i, j]
                px[i, j] = (int(r * shade), int(g * shade), int(b * shade), a)
    return im


def outlined(part: Image.Image) -> Image.Image:
    """The part with a one-pixel black outline around its shape."""
    w, h = part.size
    out = Image.new('RGBA', (w + 2, h + 2), (0, 0, 0, 0))
    alpha = part.getchannel('A')
    for dx in (0, 1, 2):
        for dy in (0, 1, 2):
            out.paste(BLACK, (dx, dy, dx + w, dy + h), alpha.point(lambda a: 255 if a > 0 else 0))
    out.alpha_composite(part, (1, 1))
    return out


def half(im: Image.Image) -> Image.Image:
    """Every other pixel: a part scaled up twice comes back to the texture's own pixels."""
    return im.resize((max(1, (im.width + 1) // 2), max(1, (im.height + 1) // 2)), Image.NEAREST)


def compose(parts, size, frame, small=False):
    """Parts are drawn back to front: (image, x, y, nods). `small`: everything at half size,
    the outline still one pixel wide, for the mobs far away."""
    w, h = size
    canvas = Image.new('RGBA', (w + 2, h + 3), (0, 0, 0, 0))
    for im, x, y, nods in parts:
        if small:
            im, x, y = half(im), x // 2, y // 2
        o = outlined(im)
        canvas.alpha_composite(o, (x, y + (NOD[frame] if nods else 0)))
    return canvas


def sheet(parts, size, small=False):
    """The frames side by side, cropped to what any of them covers. Returns the crop's corner."""
    frames = [compose(parts, size, f, small) for f in range(FRAMES)]
    boxes = [f.getbbox() for f in frames]
    box = (min(b[0] for b in boxes), min(b[1] for b in boxes),
           max(b[2] for b in boxes), max(b[3] for b in boxes))
    frames = [f.crop(box) for f in frames]
    out = Image.new('RGBA', (frames[0].width * FRAMES, frames[0].height))
    for i, f in enumerate(frames):
        out.paste(f, (i * f.width, 0))
    return out, box[:2]


# Every mob faces left, seen three-quarters as in the mascot avatars: the head big and
# turned to us, a narrow darker band of its side behind it, the body behind that, and short
# legs tucked under the body.


def front(tex, x, y, w, h, scale=2):
    return region(tex, x, y, w, h, scale, scale)


def side(tex, x, y, w, h, scale=2):
    """A head's side face, squeezed to a narrow band: half its width, darker."""
    im = tex.crop((x, y, x + w, y + h))
    im = im.resize((max(2, (w * scale) // 4), h * scale), Image.NEAREST)
    return region(im, 0, 0, im.width, im.height, shade=0.7)


def feet(tex, x, y, w, h, rows=3, shade=1.0):
    """The bottom of a leg's front face: the hoof or paw that shows under the body."""
    return region(tex, x, y + h - rows, w, rows, shade=shade)


def legs(tex, leg, under, y, rows=3):
    """Four short legs: a front and a back pair, the far leg of each darker and set back."""
    x0, x1 = under
    lx, ly, lw, lh = leg
    far = feet(tex, lx, ly, lw, lh, rows, 0.7)
    near = feet(tex, lx, ly, lw, lh, rows)
    return [(far, x0 + 2, y, False), (far, x1 + 2, y, False), (near, x0, y, False), (near, x1, y, False)]


def cow(tex):
    head = front(tex, 6, 6, 8, 8)
    band = side(tex, 0, 6, 6, 8)
    horn = region(tex, 23, 1, 1, 3, 2, 1)
    body = region(tex, 18, 14, 10, 18, rotate=True)
    return [
        *legs(tex, (4, 20, 4, 12), (10, 21), 21)[:2],
        (body, 9, 11, False),
        *legs(tex, (4, 20, 4, 12), (10, 21), 21)[2:],
        (horn, 1, 0, True), (horn, 13, 0, True),
        (band, 16, 2, True), (head, 0, 2, True),
    ], (28, 25)


def pig(tex):
    head = region(tex, 8, 8, 8, 8, 2, 2)
    snout = region(tex, 17, 17, 4, 3, 2, 2)
    band = region(tex, 0, 8, 8, 8, 1, 2, 0.72)
    body = region(tex, 28, 16, 8, 16, rotate=True)
    leg = region(tex, 0, 20, 4, 4)
    back = region(tex, 0, 20, 4, 4, shade=0.7)
    return [
        (back, 15, 18, False), (back, 26, 18, False),
        (body, 12, 9, False),
        (leg, 12, 19, False), (leg, 23, 19, False),
        (band, 17, 2, True), (head, 0, 2, True), (snout, 4, 11, True),
    ], (30, 23)


def sheep(tex, fur):
    face = front(tex, 8, 8, 6, 6)
    band = side(fur, 0, 6, 6, 6)
    body = region(fur, 28, 14, 6, 16, rotate=True).resize((18, 10), Image.NEAREST)
    lg = legs(tex, (4, 20, 4, 12), (10, 20), 14)
    return [
        *lg[:2], (body, 8, 4, False), *lg[2:],
        (band, 12, 0, True), (face, 0, 0, True),
    ], (27, 18)


def horse(tex):
    """Side on: long legs, the neck raised, and the head one tilted rectangle, muzzle down."""
    muzzle = tex.crop((0, 30, 5, 35)).transpose(Image.Transpose.FLIP_LEFT_RIGHT)
    skull = tex.crop((0, 20, 7, 25)).transpose(Image.Transpose.FLIP_LEFT_RIGHT)
    head = Image.new('RGBA', (12, 5))
    head.paste(muzzle, (0, 0))
    head.paste(skull, (5, 0))
    head = head.rotate(40, resample=Image.NEAREST, expand=True)
    ear = region(tex, 19, 17, 2, 3)
    neck = region(tex, 0, 42, 7, 12, flip=True)
    mane = region(tex, 56, 40, 4, 16, shade=0.8)
    body = region(tex, 0, 54, 22, 10, flip=True)
    tail = region(tex, 42, 40, 4, 12, shade=0.85)
    leg = region(tex, 48, 25, 4, 11)
    back = region(tex, 48, 25, 4, 11, shade=0.7)
    return [
        (tail, 29, 13, False),
        (back, 11, 22, False), (back, 26, 22, False),
        (body, 8, 14, False),
        (leg, 8, 23, False), (leg, 23, 23, False),
        (mane, 13, 4, True), (neck, 8, 6, True),
        (ear, 12, 0, True), (head, 0, 1, True),
    ], (33, 34)


def villager(tex):
    # The head with its hat layer (a profession's hat), front and side.
    head = Image.alpha_composite(tex.crop((8, 8, 16, 18)), tex.crop((40, 8, 48, 18)))
    head = head.resize((16, 20), Image.NEAREST)
    band = Image.alpha_composite(tex.crop((0, 8, 8, 18)), tex.crop((32, 8, 40, 18)))
    band = side(band, 0, 0, 8, 10)
    nose = front(tex, 26, 2, 2, 4)
    robe = region(tex, 6, 44, 8, 14)
    robe_side = region(tex, 0, 44, 3, 14, shade=0.72)
    arms = region(tex, 44, 42, 8, 4)
    return [
        (robe_side, 12, 20, False), (robe, 4, 20, False), (arms, 4, 23, False),
        (band, 16, 0, True), (head, 0, 0, True), (nose, 6, 15, True),
    ], (22, 35)


def golem(tex):
    head = front(tex, 8, 8, 8, 10)
    band = side(tex, 0, 8, 8, 10)
    nose = front(tex, 26, 2, 2, 4)
    body = region(tex, 11, 51, 18, 12)
    arm = region(tex, 66, 27, 4, 16)
    leg = region(tex, 42, 13, 6, 8)
    far_arm = region(tex, 66, 27, 4, 16, shade=0.7)
    return [
        (leg, 6, 30, False), (leg, 14, 30, False),
        (far_arm, 18, 19, False),
        (body, 3, 19, False),
        (arm, 0, 19, False),
        (band, 16, 0, True), (head, 0, 0, True), (nose, 6, 15, True),
    ], (28, 38)


def humanoid(tex, arm, leg, reach=False):
    """Zombies and skeletons: the player's layout, as the mascot avatar draws a player. The
    body stands under the back of the head, so that the head sits forward."""
    ox = 6 if reach else 0
    head = front(tex, 8, 8, 8, 8)
    band = side(tex, 0, 8, 8, 8)
    body = region(tex, 20, 20, 8, 7)
    lw = leg[2]
    near = region(tex, leg[0], leg[1] + 8, lw, 4)
    far = region(tex, leg[0], leg[1] + 8, lw, 4, shade=0.75)
    bx = ox + 7
    parts = [(far, bx + 4, 23, False), (near, bx + 1, 23, False), (body, bx, 16, False)]
    if reach:
        # A zombie's arms, held out in front from the shoulders: the hand ends on the left.
        a = region(tex, arm[0], arm[1], arm[2], 10)
        a = a.transpose(Image.Transpose.ROTATE_270)
        far_arm = region(a, 0, 0, a.width, a.height, shade=0.75)
        return [(far_arm, bx - 8, 15, False), *parts, (a, bx - 10, 17, False),
                (band, ox + 16, 0, True), (head, ox, 0, True)], (22 + ox, 30)
    a = region(tex, arm[0], arm[1], arm[2], 7)
    far_arm = region(tex, arm[0], arm[1], arm[2], 7, shade=0.75)
    return [(far_arm, bx + 8, 17, False), *parts, (a, bx - arm[2], 17, False),
            (band, 16, 0, True), (head, 0, 0, True)], (22, 30)


def creeper(tex):
    head = front(tex, 8, 8, 8, 8)
    band = side(tex, 0, 8, 8, 8)
    body = region(tex, 20, 20, 8, 9)
    far = feet(tex, 4, 20, 4, 6, 4, 0.7)
    near = feet(tex, 4, 20, 4, 6, 4)
    return [
        (far, 9, 25, False), (far, 14, 25, False),
        (body, 7, 16, False),
        (near, 6, 25, False), (near, 12, 25, False),
        (band, 16, 0, True), (head, 0, 0, True),
    ], (22, 30)


def chicken(tex):
    head = region(tex, 3, 3, 4, 6, 2, 2)
    beak = region(tex, 16, 2, 4, 2, 2, 1)
    wattle = region(tex, 16, 6, 2, 2, 2, 2)
    body = region(tex, 6, 15, 6, 8, 2, 2, rotate=True)
    wing = region(tex, 24, 19, 6, 4, 2, 2, 0.88)
    leg = region(tex, 35, 3, 3, 5)
    return [
        (leg, 9, 16, False), (leg, 15, 16, False),
        (body, 5, 5, False), (wing, 9, 7, False),
        (head, 1, 0, True), (beak, 0, 6, True), (wattle, 3, 8, True),
    ], (23, 22)


def bee(tex):
    """Small, as a bee is: its face at the texture's own size, the wings folded on its back."""
    face = front(tex, 10, 10, 7, 7, 1)
    band = side(tex, 0, 10, 10, 7, 1)
    # The wing's own colour, the lightest of its texture, as a small folded wing.
    pixels = [p for p in tex.crop((8, 18, 15, 23)).get_flattened_data() if p[3]]
    light = max(pixels, key=lambda p: p[0] + p[1] + p[2])
    wing = Image.new('RGBA', (3, 3), light)
    return [
        (band, 7, 2, True),
        (region(wing, 0, 0, 3, 3, shade=0.85), 5, 0, True),
        (face, 0, 2, True),
        (wing, 2, 0, True),
    ], (11, 10)


# Where a rider's seat is on a horse, in the parts' coordinates: the middle of its back.
SADDLE = (20, 14)


def main():
    jar = zipfile.ZipFile(sys.argv[1])
    out = Path('public/img/mobs')
    out.mkdir(parents=True, exist_ok=True)
    mobs = {
        'cow': cow(load(jar, 'cow/cow.png')),
        'pig': pig(load(jar, 'pig/pig.png')),
        'sheep': sheep(load(jar, 'sheep/sheep.png'), load(jar, 'sheep/sheep_fur.png')),
        'horse-brown': horse(load(jar, 'horse/horse_brown.png')),
        'horse-chestnut': horse(load(jar, 'horse/horse_chestnut.png')),
        'horse-white': horse(load(jar, 'horse/horse_white.png')),
        **{
            f'villager-{job}': villager(
                load(jar, 'villager/villager.png', 'villager/type/plains.png', f'villager/profession/{job}.png')
            )
            for job in ('farmer', 'librarian', 'cleric', 'fisherman')
        },
        'golem': golem(load(jar, 'iron_golem/iron_golem.png')),
        'chicken': chicken(load(jar, 'chicken.png')),
        'creeper': creeper(load(jar, 'creeper/creeper.png')),
        'zombie': humanoid(load(jar, 'zombie/zombie.png'), (44, 20, 4), (4, 20, 4), reach=True),
        'skeleton': humanoid(load(jar, 'skeleton/skeleton.png'), (42, 18, 2), (2, 18, 2)),
        'bee': bee(load(jar, 'bee/bee.png')),
    }
    sizes = []
    saddle = {}
    for name, (parts, size) in mobs.items():
        for small in (False, True):
            key = name + ('-small' if small else '')
            s, (x0, y0) = sheet(parts, size, small)
            s.save(out / f'{key}.png', optimize=True)
            sizes.append(f"  '{key}': [{s.width // FRAMES}, {s.height}],")
            if name.startswith('horse'):
                d = 2 if small else 1
                saddle[small] = (SADDLE[0] // d - x0, SADDLE[1] // d - y0)
            print(key, s.width // FRAMES, s.height)
    Path('src/app/scene/mob-sheets.ts').write_text(
        '// Written by scripts/mobs.py: the size of a frame of each mob sheet, and where a\n'
        '// rider sits on the horses. Every sheet faces left and has '
        + str(FRAMES) + ' frames.\n\n'
        + f'export const MOB_FRAMES = {FRAMES};\n\n'
        + 'export const MOB_SIZES: Record<string, [number, number]> = {\n'
        + '\n'.join(sizes) + '\n};\n\n'
        + '/** Where a rider sits on a horse sheet, full size and small. */\n'
        + f'export const SADDLE = {{ x: {saddle[False][0]}, y: {saddle[False][1]} }};\n'
        + f'export const SADDLE_SMALL = {{ x: {saddle[True][0]}, y: {saddle[True][1]} }};\n'
    )


if __name__ == '__main__':
    main()
