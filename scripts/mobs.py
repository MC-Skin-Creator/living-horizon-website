"""
Builds the mobs of the illustrations from the game's own textures, in the style of MC Skin
Creator's "Mascot" avatar: a big head (front face at twice the size, its side face beside it,
darker), a small body, a black outline around every part, and a short animation.

    python3 scripts/mobs.py <minecraft client jar>

The client jar is the official one (1.21.4 layouts), downloaded from Mojang's launcher
metadata. Writes public/img/mobs/<name>.png, the frames side by side, one pixel per pixel,
and src/app/scene/mob-sheets.ts, their sizes.
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


def compose(parts, size, frame):
    """Parts are drawn back to front: (image, x, y, nods)."""
    w, h = size
    canvas = Image.new('RGBA', (w + 2, h + 3), (0, 0, 0, 0))
    for im, x, y, nods in parts:
        o = outlined(im)
        canvas.alpha_composite(o, (x, y + (NOD[frame] if nods else 0)))
    return canvas


def sheet(parts, size):
    """The frames side by side, cropped to what any of them covers. Returns the crop's corner."""
    frames = [compose(parts, size, f) for f in range(FRAMES)]
    boxes = [f.getbbox() for f in frames]
    box = (min(b[0] for b in boxes), min(b[1] for b in boxes),
           max(b[2] for b in boxes), max(b[3] for b in boxes))
    frames = [f.crop(box) for f in frames]
    out = Image.new('RGBA', (frames[0].width * FRAMES, frames[0].height))
    for i, f in enumerate(frames):
        out.paste(f, (i * f.width, 0))
    return out, box[:2]


# Every mob faces left: head on the left, its side face beside it, the body behind.


def cow(tex):
    head = region(tex, 6, 6, 8, 8, 2, 2)
    side = region(tex, 0, 6, 6, 8, 1, 2, 0.72)
    horn = region(tex, 23, 1, 1, 3, 2, 1)
    body = region(tex, 18, 14, 10, 18, rotate=True)
    leg = region(tex, 0, 26, 4, 6)
    back = region(tex, 0, 26, 4, 6, shade=0.7)
    return [
        (back, 16, 17, False), (back, 27, 17, False),
        (body, 12, 7, False),
        (leg, 13, 18, False), (leg, 24, 18, False),
        (horn, 0, 0, True), (horn, 14, 0, True),
        (side, 17, 2, True), (head, 0, 2, True),
    ], (32, 24)


def pig(tex):
    head = region(tex, 8, 8, 8, 8, 2, 2)
    snout = region(tex, 17, 17, 4, 3, 2, 2)
    side = region(tex, 0, 8, 8, 8, 1, 2, 0.72)
    body = region(tex, 28, 16, 8, 16, rotate=True)
    leg = region(tex, 0, 20, 4, 4)
    back = region(tex, 0, 20, 4, 4, shade=0.7)
    return [
        (back, 15, 18, False), (back, 26, 18, False),
        (body, 12, 9, False),
        (leg, 12, 19, False), (leg, 23, 19, False),
        (side, 17, 2, True), (head, 0, 2, True), (snout, 4, 11, True),
    ], (30, 23)


def sheep(tex, fur):
    wool = region(fur, 6, 6, 6, 6, 2, 2)
    face = region(tex, 8, 9, 6, 5, 2, 2)
    side = region(fur, 0, 6, 6, 6, 1, 2, 0.75)
    body = region(fur, 28, 14, 6, 16, rotate=True)
    body = body.resize((body.width, body.height * 2), Image.NEAREST)
    leg = region(tex, 0, 27, 4, 5)
    back = region(tex, 0, 27, 4, 5, shade=0.7)
    return [
        (back, 15, 18, False), (back, 25, 18, False),
        (body, 11, 6, False),
        (leg, 12, 19, False), (leg, 22, 19, False),
        (side, 13, 1, True), (wool, 1, 1, True), (face, 1, 5, True),
    ], (29, 24)


def horse(tex):
    """A horse seen from the side, facing left: long legs, the neck raised, the head on top.
    Its parts are the model's side faces (1.21.4 horse layout), drawn at their own size."""
    head = region(tex, 0, 20, 7, 5, flip=True)
    mouth = region(tex, 0, 30, 5, 5, flip=True)
    ear = region(tex, 19, 17, 2, 3)
    neck = region(tex, 0, 42, 7, 12, flip=True)
    mane = region(tex, 56, 40, 4, 16, shade=0.8)
    body = region(tex, 0, 54, 22, 10, flip=True)
    tail = region(tex, 42, 40, 4, 12, shade=0.85)
    leg = region(tex, 48, 25, 4, 11)
    back = region(tex, 48, 25, 4, 11, shade=0.7)
    return [
        (tail, 29, 12, False),
        (back, 11, 21, False), (back, 26, 21, False),
        (body, 8, 13, False),
        (leg, 8, 22, False), (leg, 23, 22, False),
        (mane, 11, 2, True), (neck, 6, 4, True),
        (ear, 9, 0, True), (head, 4, 2, True), (mouth, 1, 5, True),
    ], (33, 33)


def villager(tex):
    # The head with its hat layer (a profession's hat), front and side.
    head = Image.alpha_composite(tex.crop((8, 8, 16, 18)), tex.crop((40, 8, 48, 18)))
    head = head.resize((16, 20), Image.NEAREST)
    side = Image.alpha_composite(tex.crop((0, 8, 8, 18)), tex.crop((32, 8, 40, 18)))
    side = region(side, 0, 0, 8, 10, 1, 2, 0.72)
    nose = region(tex, 24, 2, 2, 4, 2, 2)
    robe = region(tex, 6, 44, 8, 14)
    robe_side = region(tex, 0, 44, 3, 14, shade=0.72)
    arms = region(tex, 44, 42, 8, 4)
    return [
        (robe_side, 13, 20, False), (robe, 5, 20, False), (arms, 5, 23, False),
        (side, 16, 0, True), (head, 0, 0, True), (nose, 0, 12, True),
    ], (26, 36)


def golem(tex):
    head = region(tex, 8, 8, 8, 10, 2, 2)
    side = region(tex, 0, 8, 8, 10, 1, 2, 0.72)
    nose = region(tex, 24, 2, 2, 4, 2, 2)
    body = region(tex, 11, 51, 18, 12)
    arm = region(tex, 66, 27, 4, 16)
    leg = region(tex, 42, 13, 6, 8)
    return [
        (leg, 8, 30, False), (leg, 16, 30, False),
        (arm, 1, 19, False), (arm, 25, 19, False),
        (body, 5, 19, False),
        (side, 18, 0, True), (head, 2, 0, True), (nose, 2, 12, True),
    ], (30, 38)


def humanoid(tex, arm, leg, reach=False):
    """Zombies and skeletons: the player's layout, as the mascot avatar draws a player."""
    ox = 7 if reach else 0
    head = region(tex, 8, 8, 8, 8, 2, 2)
    side = region(tex, 0, 8, 8, 8, 1, 2, 0.72)
    body = region(tex, 20, 20, 8, 7)
    lw = leg[2]
    front = region(tex, leg[0], leg[1] + 8, lw, 4)
    behind = region(tex, leg[0], leg[1] + 8, lw, 4, shade=0.75)
    if reach:
        # A zombie's arms, held out in front at the height of the chest.
        a = region(tex, arm[0], arm[1], arm[2], 10, rotate=True)
        arms = [(region(tex, arm[0], arm[1], arm[2], 10, rotate=True, shade=0.75), 1, 15, False),
                (a, 0, 18, False)]
    else:
        a = region(tex, arm[0], arm[1], arm[2], 7)
        arms = [(region(tex, arm[0], arm[1], arm[2], 7, shade=0.75), ox + 13 - arm[2] // 2, 17, False),
                (a, ox + 5 - arm[2], 17, False)]
    parts = [
        (behind, ox + 9, 23, False), (front, ox + 8 - lw, 23, False),
        (body, ox + 4, 16, False),
        (side, ox + 16, 0, True), (head, ox, 0, True),
    ]
    # Arms reaching forward are in front of everything; arms at the sides go behind the head.
    return (parts + arms if reach else parts[:3] + arms + parts[3:]), (26 + ox, 30)


def creeper(tex):
    head = region(tex, 8, 8, 8, 8, 2, 2)
    side = region(tex, 0, 8, 8, 8, 1, 2, 0.72)
    body = region(tex, 20, 20, 8, 9)
    leg = region(tex, 4, 20, 4, 5)
    back = region(tex, 4, 20, 4, 5, shade=0.7)
    return [
        (back, 9, 25, False), (back, 14, 25, False),
        (body, 6, 16, False),
        (leg, 4, 25, False), (leg, 11, 25, False),
        (side, 16, 0, True), (head, 0, 0, True),
    ], (26, 32)


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
    face = region(tex, 10, 10, 7, 7, 2, 2)
    side = region(tex, 0, 10, 10, 7, 1, 2, 0.8)
    wing = region(tex, 8, 18, 6, 4)
    return [
        (side, 13, 3, True), (wing, 15, 0, False),
        (face, 0, 3, True),
    ], (23, 18)


# Where a rider's seat is on a horse, in the parts' coordinates: the middle of its back.
SADDLE = (20, 13)


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
    saddle = None
    for name, (parts, size) in mobs.items():
        s, (x0, y0) = sheet(parts, size)
        s.save(out / f'{name}.png', optimize=True)
        sizes.append(f"  '{name}': [{s.width // FRAMES}, {s.height}],")
        if name.startswith('horse'):
            saddle = (SADDLE[0] - x0, SADDLE[1] - y0)
        print(name, s.width // FRAMES, s.height)
    Path('src/app/scene/mob-sheets.ts').write_text(
        '// Written by scripts/mobs.py: the size of a frame of each mob sheet, and where a\n'
        '// rider sits on the horses. Every sheet faces left and has '
        + str(FRAMES) + ' frames.\n\n'
        + f'export const MOB_FRAMES = {FRAMES};\n\n'
        + 'export const MOB_SIZES: Record<string, [number, number]> = {\n'
        + '\n'.join(sizes) + '\n};\n\n'
        + f'export const SADDLE = {{ x: {saddle[0]}, y: {saddle[1]} }};\n'
    )


if __name__ == '__main__':
    main()
