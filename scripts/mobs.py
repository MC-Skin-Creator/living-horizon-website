"""
Builds the mobs of the illustrations from the game itself: its own 3D models and its own
textures, drawn as small pixel-art figures with a black outline, like the players' avatars.

    python3 scripts/mobs.py <minecraft client jar>

The client jar is the official one, 26.3 (its classes are not obfuscated), downloaded from
Mojang's launcher metadata. `javap` (any JDK) must be on the path, and Pillow and NumPy
installed. Nothing is drawn by eye: each model is read from the method that builds it in the
game (`CowModel.createBodyLayer`...) by replaying its bytecode, so every box, pivot,
rotation and texture offset is the game's. The model is then posed, seen from the front (or
the side, for the long animals) and a little from above, and drawn one pixel per pixel of
its texture.

Writes public/img/mobs/<name>.png, the frames side by side, <name>-small.png at half size
for the mobs far away, and src/app/scene/mob-sheets.ts, their sizes.
"""

import io
import math
import re
import subprocess
import sys
import zipfile
from collections import Counter
from pathlib import Path

import numpy as np
from PIL import Image

FRAMES = 8
BLACK = (24, 20, 24, 255)
TEXTURES = 'assets/minecraft/textures/entity/'
MODELS = 'net/minecraft/client/model/'


# --- The game's models ----------------------------------------------------------------------
#
# A model is built by a static method out of CubeListBuilder, PartPose and PartDefinition
# calls. `javap -c` prints its bytecode; the few instructions those methods use are replayed
# here, the builders standing in as small Python objects.


class Deform:
    def __init__(self, x, y=None, z=None):
        self.g = (x, x if y is None else y, x if z is None else z)


class Cubes:
    def __init__(self):
        self.cubes, self.uv, self.mirror = [], (0, 0), False


class Pose:
    def __init__(self, x=0.0, y=0.0, z=0.0, xr=0.0, yr=0.0, zr=0.0):
        self.pos, self.rot = (x, y, z), (xr, yr, zr)


class Part:
    def __init__(self, cubes, pose):
        self.cubes, self.pose, self.children = cubes, pose, {}


class Mesh:
    def __init__(self):
        self.root = Part([], Pose())


class Layer:
    def __init__(self, mesh, w, h):
        self.root = mesh.root


def arg_count(desc):
    inner, n, i = desc[1:desc.index(')')], 0, 0
    while i < len(inner):
        while inner[i] == '[':
            i += 1
        if inner[i] == 'L':
            i = inner.index(';', i)
        n, i = n + 1, i + 1
    return n


class Bytecode:
    LINE = re.compile(r'^\s+(\d+): (\w+)\s*(.*?)\s*(?://\s*(.*))?$')
    HEAD = re.compile(r'^  \S.*?([\w$]+)\(.*\);$')

    def __init__(self, jar):
        self.jar, self.classes = jar, {}

    def methods(self, cls):
        if cls not in self.classes:
            text = subprocess.run(['javap', '-c', '-p', '-s', '-cp', self.jar, cls.replace('/', '.')],
                                  capture_output=True, text=True, check=True).stdout
            methods, name, code = {}, None, None
            for line in text.splitlines():
                head = self.HEAD.match(line)
                if head:
                    name, code = head.group(1), None
                elif line.strip().startswith('descriptor:') and name:
                    code = methods[name + line.split(':', 1)[1].strip()] = []
                elif code is not None and (m := self.LINE.match(line)):
                    code.append((int(m.group(1)), m.group(2), m.group(3).rstrip(','), m.group(4) or ''))
            self.classes[cls] = methods
        return self.classes[cls]

    def call(self, cls, method, args):
        code = self.methods(cls)[method]
        at = {off: i for i, (off, *_) in enumerate(code)}
        local, stack, i = dict(enumerate(args)), [], 0
        while True:
            off, op, arg, note = code[i]
            i += 1
            if op[:5] in ('aload', 'fload', 'iload'):
                stack.append(local[int(op[6:]) if '_' in op else int(arg)])
            elif op[:6] in ('astore', 'fstore', 'istore'):
                local[int(op[7:]) if '_' in op else int(arg)] = stack.pop()
            elif op[:6] in ('iconst', 'fconst'):
                stack.append(-1 if op.endswith('m1') else int(op[-1]))
            elif op in ('bipush', 'sipush'):
                stack.append(int(arg))
            elif op.startswith('ldc'):
                kind, value = note.split(' ', 1)
                stack.append(value if kind == 'String' else float(value.rstrip('fd')) if kind in ('float', 'double') else int(value))
            elif op in ('fadd', 'fsub', 'fmul', 'fdiv', 'iadd', 'isub', 'imul'):
                b, a = stack.pop(), stack.pop()
                stack.append(a + b if op[1:] == 'add' else a - b if op[1:] == 'sub' else a * b if op[1:] == 'mul' else a / b)
            elif op in ('fneg', 'ineg'):
                stack.append(-stack.pop())
            elif op in ('i2f', 'f2d', 'd2f', 'checkcast'):
                pass
            elif op == 'dup':
                stack.append(stack[-1])
            elif op == 'pop':
                stack.pop()
            elif op == 'new':
                stack.append(None)
            elif op == 'goto':
                i = at[int(arg)]
            elif op in ('ifeq', 'ifne'):
                if (stack.pop() == 0) == (op == 'ifeq'):
                    i = at[int(arg)]
            elif op in ('areturn', 'freturn', 'ireturn'):
                return stack.pop()
            elif op == 'return':
                return None
            elif op == 'getstatic' and note.split()[-1].split(':')[0].endswith('CubeDeformation.NONE'):
                stack.append(Deform(0.0))
            elif op == 'getstatic' and note.split()[-1].split(':')[0].endswith('PartPose.ZERO'):
                stack.append(Pose())
            elif op.startswith('invoke'):
                self.invoke(cls, op, note, stack)
            else:
                raise ValueError(f'{cls}.{method} at {off}: {op} {arg} {note}')

    def invoke(self, cls, op, note, stack):
        name, desc = note.split(' ', 1)[1].split(':', 1)
        owner, _, name = name.rpartition('.')
        owner, name = owner or cls, name.strip('"')
        n = arg_count(desc)
        args = stack[len(stack) - n:] if n else []
        del stack[len(stack) - n:]
        this = stack.pop() if op != 'invokestatic' else None
        short = owner.rsplit('/', 1)[-1] + '.' + name
        if name == '<init>':
            # `new X; dup; <args>; invokespecial <init>`: the copy left on the stack becomes it.
            stack[-1] = {'MeshDefinition': Mesh, 'CubeDeformation': Deform}[short.split('.')[0]](*args)
            return
        if short == 'MeshDefinition.getRoot':
            result = this.root
        elif short == 'CubeListBuilder.create':
            result = Cubes()
        elif short == 'CubeListBuilder.texOffs':
            this.uv, result = tuple(args), this
        elif short == 'CubeListBuilder.mirror':
            this.mirror, result = (bool(args[0]) if args else True), this
        elif short == 'CubeListBuilder.addBox':
            nums = [a for a in args if isinstance(a, (int, float))]
            grow = next((a.g for a in args if isinstance(a, Deform)), (0.0, 0.0, 0.0))
            mirror, uv = this.mirror, this.uv
            if desc.startswith('(Ljava/lang/String;FFFIIIII)'):
                uv, nums = (nums[6], nums[7]), nums[:6]
            elif desc.startswith('(FFFFFFZ)'):
                mirror = bool(nums[6])
            this.cubes.append({'box': [float(x) for x in nums[:6]], 'uv': uv, 'grow': grow, 'mirror': mirror})
            result = this
        elif short in ('PartPose.offset', 'PartPose.offsetAndRotation'):
            result = Pose(*args)
        elif short == 'PartPose.rotation':
            result = Pose(0, 0, 0, *args)
        elif short in ('PartPose.x', 'PartPose.y', 'PartPose.z'):
            result = this.pos['xyz'.index(name)]
        elif short == 'CubeDeformation.extend':
            result = Deform(*(g + args[0] for g in this.g))
        elif short == 'PartDefinition.addOrReplaceChild':
            result = this.children[args[0]] = Part(args[1].cubes, args[2])
        elif short == 'PartDefinition.getChild':
            result = this.children[args[0]]
        elif short == 'LayerDefinition.create':
            result = Layer(*args)
        elif owner.startswith(MODELS) and '/geom/' not in owner:
            result = self.call(owner, name + desc, args)
        else:
            raise ValueError(f'unknown call {owner}.{name}{desc}')
        if not desc.endswith(')V'):
            stack.append(result)

    def model(self, cls, method, *args):
        """The root part a model method builds, called with `args` (a CubeDeformation is
        given as Deform(0.0))."""
        cls = MODELS + cls
        key = next(k for k in self.methods(cls) if k.startswith(method + '('))
        out = self.call(cls, key, list(args))
        return out.root


# --- Drawing --------------------------------------------------------------------------------


def rotation(xr, yr, zr):
    """The game's order: z, then y, then x."""
    cx, sx, cy, sy, cz, sz = math.cos(xr), math.sin(xr), math.cos(yr), math.sin(yr), math.cos(zr), math.sin(zr)
    rx = np.array([[1, 0, 0], [0, cx, -sx], [0, sx, cx]])
    ry = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    rz = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]])
    return rz @ ry @ rx


def box_faces(cube):
    """The six faces of a box as the game lays them out on its texture: for each, the corners
    at the top left, top right and bottom left of its texture rectangle, the rectangle
    (u0, v0, u1, v1) and the outward normal. Model y points down."""
    x, y, z, w, h, d = cube['box']
    gx, gy, gz = cube['grow']
    x0, y0, z0, x1, y1, z1 = x - gx, y - gy, z - gz, x + w + gx, y + h + gy, z + d + gz
    sx = 1
    if cube['mirror']:
        x0, x1, sx = x1, x0, -1
    u, v = cube['uv']
    P = lambda a, b, c: np.array([a, b, c], float)
    return [
        ((P(x0, y0, z1), P(x1, y0, z1), P(x0, y0, z0)), (u + d, v, u + d + w, v + d), (0, -1, 0)),
        ((P(x0, y1, z1), P(x1, y1, z1), P(x0, y1, z0)), (u + d + w, v, u + d + 2 * w, v + d), (0, 1, 0)),
        ((P(x0, y0, z1), P(x0, y0, z0), P(x0, y1, z1)), (u, v + d, u + d, v + d + h), (-sx, 0, 0)),
        ((P(x0, y0, z0), P(x1, y0, z0), P(x0, y1, z0)), (u + d, v + d, u + d + w, v + d + h), (0, 0, -1)),
        ((P(x1, y0, z0), P(x1, y0, z1), P(x1, y1, z0)), (u + d + w, v + d, u + 2 * d + w, v + d + h), (sx, 0, 0)),
        ((P(x1, y0, z1), P(x0, y0, z1), P(x1, y1, z1)), (u + 2 * d + w, v + d, u + 2 * d + 2 * w, v + d + h), (0, 0, 1)),
    ]


def collect(part, tex, pose, M, t, group, out, moved=True):
    """Every face of the part and its children, placed. `pose` moves the parts it names
    (extra rotation 'xr', 'yr', 'zr' and offset 'dx', 'dy', 'dz', as the game's animations
    do). A part takes its name as its group if it is the root's child or named in `pose`;
    the others belong to their parent's, which moves them along."""
    p = pose.get(group, {}) if moved else {}
    px, py, pz = (a + p.get(k, 0) for a, k in zip(part.pose.pos, ('dx', 'dy', 'dz')))
    rot = (a + p.get(k, 0) for a, k in zip(part.pose.rot, ('xr', 'yr', 'zr')))
    t = t + M @ np.array([px, py, pz])
    M = M @ rotation(*rot)
    for cube in part.cubes:
        for corners, uv, normal in box_faces(cube):
            out.append(([t + M @ c for c in corners], uv, M @ np.array(normal, float), tex, group))
    for name, child in part.children.items():
        own = group == '' or name in pose
        collect(child, tex, pose, M, t, name if own else group, out, own)
    return out


class View:
    """An oblique view, the mob looking to the left. `front`: it looks at us, its right side
    shows to the right, squeezed by `k`; otherwise it is seen from that side, its face
    squeezed by `k`. `lift` shows a little of the tops."""

    def __init__(self, front, k=0.5, lift=0.3):
        self.front = front
        self.A = np.array([[1, 0, k], [0, 1, -lift]] if front else [[k, 0, 1], [lift, 1, 0]], float)
        d = np.cross(self.A[0], self.A[1])
        self.d = d / np.linalg.norm(d)

    def project(self, p):
        return np.array([*(self.A @ p), self.d @ p])

    def brightness(self, n):
        """Faces turned to us keep their colours, the others darken: the top a little, the
        side more, as in the avatars."""
        n = n / (np.linalg.norm(n) or 1)
        facing, side = (-n[2], n[0]) if self.front else (n[0], -n[2])
        w = np.array([max(facing, 0), max(side, 0), max(-n[1], 0), max(n[1], 0)]) ** 2
        return float((w * [1.0, 0.72, 0.9, 0.5]).sum() / w.sum()) if w.sum() else 0.6


FRONT = View(True)
SIDE = View(False)


def rasterise(faces, view, scale, lo, size, ss):
    """Draws the faces with a depth buffer at ss x ss samples per pixel, then keeps each
    pixel's most common colour, if the faces cover enough of it. Also returns which group
    each pixel shows."""
    W, H = size
    colour = np.zeros((H * ss, W * ss, 4), np.uint8)
    depth = np.full((H * ss, W * ss), np.inf)
    owner = np.full((H * ss, W * ss), -1)
    groups = []
    for cs, (u0, v0, u1, v1), normal, tex, group in faces:
        o, a, b = (view.project(c) * scale for c in cs)
        e1, e2 = (a - o)[:2], (b - o)[:2]
        det = e1[0] * e2[1] - e1[1] * e2[0]
        if abs(det) < 1e-9:
            continue
        corners = np.array([o, a, b, a + b - o])[:, :2]
        x0, y0 = np.maximum(np.floor((corners.min(0) - lo) * ss).astype(int), 0)
        x1, y1 = np.ceil((corners.max(0) - lo) * ss).astype(int)
        ys, xs = np.mgrid[y0:y1, x0:x1]
        sx = (xs + 0.5) / ss + lo[0] - o[0]
        sy = (ys + 0.5) / ss + lo[1] - o[1]
        s = (sx * e2[1] - sy * e2[0]) / det
        t = (e1[0] * sy - e1[1] * sx) / det
        inside = (s >= 0) & (s < 1) & (t >= 0) & (t < 1)
        if not inside.any():
            continue
        z = o[2] + s * (a[2] - o[2]) + t * (b[2] - o[2])
        th, tw = tex.shape[:2]
        tu = np.clip(np.floor(u0 + np.clip(s, 0, 0.9999) * (u1 - u0)), 0, tw - 1).astype(int)
        tv = np.clip(np.floor(v0 + np.clip(t, 0, 0.9999) * (v1 - v0)), 0, th - 1).astype(int)
        pix = tex[tv, tu]
        region = (slice(y0, y1), slice(x0, x1))
        keep = inside & (pix[..., 3] > 0) & (z < depth[region] - 1e-6)
        lit = pix.astype(float)
        lit[..., :3] *= view.brightness(normal)
        if group not in groups:
            groups.append(group)
        colour[region][keep] = np.clip(lit, 0, 255).astype(np.uint8)[keep]
        depth[region][keep] = z[keep]
        owner[region][keep] = groups.index(group)
    img = np.zeros((H, W, 4), np.uint8)
    part = np.full((H, W), -1)
    for y in range(H):
        for x in range(W):
            block = colour[y * ss:(y + 1) * ss, x * ss:(x + 1) * ss].reshape(-1, 4)
            who = owner[y * ss:(y + 1) * ss, x * ss:(x + 1) * ss].reshape(-1)
            solid = block[:, 3] > 0
            if solid.sum() < ss * ss * 0.4:
                continue
            img[y, x] = Counter(map(tuple, block[solid])).most_common(1)[0][0]
            part[y, x] = Counter(who[solid].tolist()).most_common(1)[0][0]
    return img, part, groups


def outline(img, part, groups, inner):
    """A black line one pixel wide around the figure, and around the groups in `inner` (the
    head) where they stand in front of another part."""
    H, W = part.shape
    out = np.zeros((H + 2, W + 2, 4), np.uint8)
    out[1:-1, 1:-1] = img
    who = np.full((H + 2, W + 2), -1)
    who[1:-1, 1:-1] = part
    filled = who >= 0
    ids = [groups.index(g) for g in inner if g in groups]
    edge = np.zeros_like(filled)
    for dy, dx in ((0, 1), (0, -1), (1, 0), (-1, 0)):
        nb = np.roll(np.roll(who, dy, 0), dx, 1)
        edge |= ~filled & (nb >= 0)
        if ids:
            edge |= filled & np.isin(nb, ids) & ~np.isin(who, ids)
    out[edge] = BLACK
    return Image.fromarray(out, 'RGBA')


# --- The mobs -------------------------------------------------------------------------------

# A slow nod, one pixel down and back, as when grazing or looking around.
NOD = [0, 0, 0, 1, 1, 1, 0, 0]


def nod(part='head'):
    return lambda f: {part: {'dy': NOD[f]}}


def zombie(f):
    # AnimationUtils.animateZombieArms, not attacking: both arms held out at -pi / 2.25.
    return {'head': {'dy': NOD[f]}, 'right_arm': {'xr': -math.pi / 2.25}, 'left_arm': {'xr': -math.pi / 2.25}}


def bee(f):
    # BeeModel.setupAnim, flying: the wings beat around z, opposite each other.
    beat = math.pi * 0.15 * (1 if f % 2 else -1)
    return {'right_wing': {'zr': beat}, 'left_wing': {'zr': -beat}}


class Mob:
    def __init__(self, layers, view, pose, scale=1.0, inner=('head',)):
        self.layers, self.view, self.pose, self.scale, self.inner = layers, view, pose, scale, inner

    def faces(self, frame):
        # A layer's MeshTransformer.scaling: the whole model sized around its feet.
        M = np.eye(3) * self.scale
        t = np.array([0.0, 24 * (1 - self.scale), 0.0])
        out = []
        for root, tex in self.layers:
            collect(root, tex, self.pose(frame), M, t, '', out, moved=False)
        return out

    def sheet(self, scale, ss):
        frames = [self.faces(f) for f in range(FRAMES)]
        pts = np.array([self.view.project(c)[:2] * scale for faces in frames for cs, *_ in faces for c in cs])
        lo = np.floor(pts.min(0)) - 1
        size = tuple((np.ceil(pts.max(0)) + 1 - lo).astype(int))
        images = [outline(*rasterise(faces, self.view, scale, lo, size, ss), self.inner) for faces in frames]
        boxes = [im.getbbox() for im in images]
        box = (min(b[0] for b in boxes), min(b[1] for b in boxes), max(b[2] for b in boxes), max(b[3] for b in boxes))
        out = Image.new('RGBA', ((box[2] - box[0]) * FRAMES, box[3] - box[1]))
        for i, im in enumerate(images):
            out.paste(im.crop(box), (i * (box[2] - box[0]), 0))
        # Where a model point lands on the sheet: from the image's corner (`lo`, then the
        # outline's pixel), less the crop.
        place = lambda p: tuple(np.round(self.view.A @ (np.array(p) * self.scale + [0, 24 * (1 - self.scale), 0]) * scale - lo + 1 - box[:2]).astype(int))
        return out, place


def main():
    jar = sys.argv[1]
    zf = zipfile.ZipFile(jar)
    code = Bytecode(jar)

    def tex(*paths):
        """The texture, with the others laid over it (a villager's biome and profession)."""
        base = None
        for p in paths:
            im = Image.open(io.BytesIO(zf.read(TEXTURES + p + '.png'))).convert('RGBA')
            base = im if base is None else Image.alpha_composite(base, im)
        return np.asarray(base)

    none = Deform(0.0)
    cow = code.model('animal/cow/CowModel', 'createBodyLayer')
    pig = code.model('animal/pig/PigModel', 'createBodyLayer', none)
    sheep = code.model('animal/sheep/SheepModel', 'createBodyLayer')
    wool = code.model('animal/sheep/SheepFurModel', 'createFurLayer')
    horse = code.model('animal/equine/AbstractEquineModel', 'createBodyMesh', none)
    villager = code.model('npc/VillagerModel', 'createBodyModel')
    mobs = {
        'cow': Mob([(cow, tex('cow/cow_temperate'))], SIDE, nod()),
        'pig': Mob([(pig, tex('pig/pig_temperate'))], SIDE, nod()),
        'sheep': Mob([(sheep, tex('sheep/sheep')), (wool, tex('sheep/sheep_wool'))], SIDE, nod()),
        # LayerDefinitions: the horse's layer is scaled by 1.1, the villager's by 0.9375.
        **{f'horse-{coat}': Mob([(horse, tex(f'horse/horse_{coat}'))], SIDE, nod('head_parts'), 1.1, ('head_parts',))
           for coat in ('brown', 'chestnut', 'white')},
        **{f'villager-{job}': Mob([(villager, tex('villager/villager', 'villager/type/plains', f'villager/profession/{job}'))],
                                  FRONT, nod(), 0.9375)
           for job in ('farmer', 'librarian', 'cleric', 'fisherman')},
        'golem': Mob([(code.model('animal/golem/IronGolemModel', 'createBodyLayer'), tex('iron_golem/iron_golem'))], FRONT, nod()),
        'chicken': Mob([(code.model('animal/chicken/AdultChickenModel', 'createBodyLayer'), tex('chicken/chicken_temperate'))], SIDE, nod()),
        'creeper': Mob([(code.model('monster/creeper/CreeperModel', 'createBodyLayer', none), tex('creeper/creeper'))], FRONT, nod()),
        'zombie': Mob([(code.model('HumanoidModel', 'createMesh', none, 0.0), tex('zombie/zombie'))], FRONT, zombie),
        'skeleton': Mob([(code.model('monster/skeleton/SkeletonModel', 'createBodyLayer'), tex('skeleton/skeleton'))], FRONT, nod()),
        'bee': Mob([(code.model('animal/bee/AdultBeeModel', 'createBodyLayer'), tex('bee/bee'))], SIDE, bee, inner=()),
    }

    out = Path('public/img/mobs')
    out.mkdir(parents=True, exist_ok=True)
    sizes, saddle = [], {}
    for name, mob in mobs.items():
        for small in (False, True):
            key = name + ('-small' if small else '')
            sheet, place = mob.sheet(0.5 if small else 1.0, 8 if small else 6)
            sheet.save(out / f'{key}.png', optimize=True)
            quoted = f"'{key}'" if '-' in key else key  # as Prettier writes object keys
            sizes.append(f"  {quoted}: [{sheet.width // FRAMES}, {sheet.height}],")
            if name.startswith('horse'):
                # The seat: the top of the body (offset y 11, box from -8, grown 0.05), at its middle.
                saddle[small] = place((0, 2.95, -1))
            print(key, sheet.width // FRAMES, sheet.height)
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
