"""
Half-size versions of the players' avatars, for the far planes of the illustrations:
public/img/figures/skin-N-mascot.png and skin-N-drops.png give skin-N-mascot-small.png and
skin-N-drops-small.png.

    python3 scripts/figures.py

Each 2 x 2 block keeps its most frequent colour, the black outline is dropped and drawn
again one pixel wide around the smaller shape, as the full-size avatars have it.
"""

from collections import Counter
from pathlib import Path

from PIL import Image

DIR = Path('public/img/figures')
FRAMES = {'mascot': 8, 'drops': 1}
BLACK = (24, 20, 24, 255)


def is_outline(c):
    return c[3] > 0 and c[0] + c[1] + c[2] < 60


def shrink(frame: Image.Image) -> Image.Image:
    w, h = frame.size
    src = frame.load()
    small = Image.new('RGBA', ((w + 1) // 2, (h + 1) // 2), (0, 0, 0, 0))
    dst = small.load()
    for y in range(small.height):
        for x in range(small.width):
            block = [src[i, j] for i in (2 * x, 2 * x + 1) for j in (2 * y, 2 * y + 1) if i < w and j < h]
            colours = [c for c in block if c[3] > 0 and not is_outline(c)]
            if len(colours) >= 2 or (colours and len([c for c in block if c[3] > 0]) >= 3):
                dst[x, y] = Counter(colours).most_common(1)[0][0]
    # The outline, one pixel wide, around what is left.
    out = Image.new('RGBA', (small.width + 2, small.height + 2), (0, 0, 0, 0))
    alpha = small.getchannel('A').point(lambda a: 255 if a else 0)
    for dx in (0, 1, 2):
        for dy in (0, 1, 2):
            out.paste(BLACK, (dx, dy, dx + small.width, dy + small.height), alpha)
    out.alpha_composite(small, (1, 1))
    return out


def main():
    for path in sorted(DIR.glob('skin-*-*.png')):
        kind = path.stem.split('-')[-1]
        if kind not in FRAMES:
            continue
        sheet = Image.open(path).convert('RGBA')
        n = FRAMES[kind]
        fw = sheet.width // n
        frames = [shrink(sheet.crop((i * fw, 0, (i + 1) * fw, sheet.height))) for i in range(n)]
        out = Image.new('RGBA', (frames[0].width * n, frames[0].height))
        for i, f in enumerate(frames):
            out.paste(f, (i * f.width, 0))
        target = path.with_name(f'{path.stem}-small.png')
        out.save(target, optimize=True)
        print(target.name, frames[0].size)


if __name__ == '__main__':
    main()
