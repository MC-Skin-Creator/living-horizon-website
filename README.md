# Living Horizon — website

The one-page landing site of [Living Horizon](https://github.com/MC-Skin-Creator/living-horizon),
the Minecraft mod that gives life to the distance. Angular, fully static, deployed to GitHub Pages.

## Run it

Node 24 (Angular 22 needs 22.22.3+ or 24.15+).

```bash
npm ci
npm start            # http://localhost:4200
npm run build        # dist/living-horizon-website/browser, relative base href
npm run snapshot     # refresh public/data/snapshot.json
```

## Where the data comes from

Nothing about the project is hardcoded that a source can answer. `src/app/data/sources.ts`
lists them:

| Data | Source |
|---|---|
| Latest version, date, release files, GitHub downloads | GitHub releases API (`-dev.N` builds skipped) |
| Changelog | `changelog/en.md` of the mod repository |
| Minecraft versions, loaders, tested / needs testers | `stonecutter.properties.toml` of the mod (`mod.release_type = "alpha"` = needs testers) |
| CurseForge downloads | api.cfwidget.com |
| Modrinth downloads | Modrinth API (shows "Coming soon" while the project does not exist) |

The page first shows `public/data/snapshot.json`, then asks every source from the browser
(cached 30 minutes in `localStorage`, GitHub allows 60 anonymous calls an hour). A source
that fails keeps the snapshot; with neither, each section shows a fallback.
The deploy workflow refreshes the snapshot before every build and once a day.

## Editing

- Links, platform ids, fallbacks: `src/app/config/site.ts`.
- **Benchmarks**: add real measurements to `SITE.benchmarks` (label matching a slot of the
  performance section). Until then the slots say "Benchmark pending" — never invent numbers.
- **Players**: the people in the illustrations are skins made with
  [MC Skin Creator](https://mcskincreator.app/) (sources in `art/skins/`), exported there as
  avatars (transparent, 512 px): *Mascot* (animated GIF) for players standing in the
  landscape, *Drops* for riders and boaters. They are packed into `public/img/figures/` one
  pixel per pixel of the avatar, so they stay sharp: `skin-N-mascot.png` (the 8 frames side
  by side, 27×27 each, from 15 px blocks) and `skin-N-drops.png` (22×23, from 17 px blocks).
  Steve (`skin-steve-*`, from `art/skins/steve.png`) is the player of the nearest plane;
  the others take turns behind him. To add one, export both, pack them the same way, run
  `python3 scripts/figures.py` for the half-size versions the far planes use, and add it to
  `SKINS` in `src/app/scene/figures.ts`.
- **Mobs**: cows, sheep, pigs, chickens, horses, villagers, iron golems, bees, creepers,
  zombies and skeletons are built by `scripts/mobs.py` from the game itself: it reads each
  model out of the method that builds it in the client (by replaying its bytecode, through
  `javap`), poses it, and draws it one pixel per pixel of its texture, with the players'
  black outline. It writes `public/img/mobs/` and `src/app/scene/mob-sheets.ts`. Run it with
  the official 26.3 client jar (from Mojang's launcher metadata), a JDK, Pillow and NumPy:
  `python3 scripts/mobs.py client.jar`. The models and textures belong to Mojang Studios.
- **Icon**: `scripts/logo.py` draws the mod's icon from the same figures: Steve in front
  (his skin in `art/skins/steve.png`, its Mascot avatar packed in `art/logo/steve-mascot.png`),
  a creeper, the horizon, hills and mountains behind him, each with a figure and birds. Run
  it like `scripts/mobs.py`, with the client jar. It writes the site's icons and
  `art/logo/icon.png`, which the mod ships as `assets/livinghorizon/icon.png`.
- **Screenshots**: the before / after slider opens on real in-game screenshots, listed in
  `SITE.screenshots` (title, one sentence, and the two shots in `public/img/compare/`, same
  framing, mod off then on), then shows the stylised illustrations (`src/app/scene/`).

## Deploy

`.github/workflows/deploy.yml` builds every pull request and deploys `main` to GitHub
Pages. In the repository settings, set **Pages → Source** to **GitHub Actions** once.
