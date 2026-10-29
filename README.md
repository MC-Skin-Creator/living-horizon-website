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
| Changelog | `changelog/en.md` of the mod repository, or `changelog/<lang>.md` when the mod has the visitor's language |
| Minecraft versions, loaders, tested / needs testers | `stonecutter.properties.toml` of the mod (`mod.release_type = "alpha"` = needs testers) |
| CurseForge downloads | api.cfwidget.com |
| Modrinth downloads | Modrinth API (shows "Coming soon" while the project does not exist) |
| Nexus Mods downloads | Nexus Mods GraphQL API (`api.nexusmods.com/v2/graphql`, no key) |
| Modpacks that ship the mod | ModpackIndex API (`/mod/<id>/modpacks`, then `/modpack/<id>` for the authors and game versions of the 30 most downloaded; its filtered search refuses browsers), credited in the footer |

The page first shows `public/data/snapshot.json`, then asks every source from the browser
(cached 30 minutes in `localStorage`, GitHub allows 60 anonymous calls an hour). A source
that fails keeps the snapshot; with neither, each section shows a fallback.
The deploy workflow refreshes the snapshot before every build and once a day.

## Languages

The site speaks the 14 languages of the mod; the visitor picks one in the nav (the browser's
is the default, `?lang=de` forces one). Every text lives in `src/app/i18n/`: `en.ts` is the
source, and its shape is the type of the 13 other dictionaries, so a text missing in one of them
fails the build. **Any text added or changed goes into every language in the same change** (see
`CLAUDE.md`). Each language other than English is its own small chunk, loaded before the page
starts so it never shows English first.

## Editing

- Links, platform ids, fallbacks: `src/app/config/site.ts`. Texts: `src/app/i18n/`, in every
  language.
- **FAQ**: the questions of the mod's README, in `faq.questions` of every dictionary, grouped
  and ordered by `GROUPS` in `src/app/sections/faq.ts`. An answer is a list of paragraphs and
  lists made of pieces (`src/app/i18n/rich.ts`): text, a setting's name, code, or a link of
  `LINKS`. When the mod's README FAQ changes, change it here too.
- **Benchmarks**: add real measurements to `SITE.benchmarks` (`slot` of the performance
  section and the value), and how it was measured to `performance.setups` of every dictionary.
  Until then the slots say "Benchmark pending" — never invent numbers.
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
  On a layer marked `silhouettes` in `src/app/scene/scenes.ts` (the hero's far mountains),
  the mobs are drawn as walking shapes in the colour of the mountain, 45 % of the size they
  have on the nearer hills.
- **Icon**: `scripts/logo.py` draws the mod's icon from the same figures: Steve in front
  (his skin in `art/skins/steve.png`, its Mascot avatar packed in `art/logo/steve-mascot.png`),
  a creeper, the horizon, hills and mountains behind him, each with a figure and birds. Run
  it like `scripts/mobs.py`, with the client jar. It writes the site's icons and
  `art/logo/icon.png`, which the mod ships as `assets/livinghorizon/icon.png`.
- **Title and cover**: `public/img/brand/` holds the 3D titles (*Minecraft* above *Living
  Horizon* for the hero, *Living Horizon* alone for the footer) and the cover with the crowd
  of heads, from the [media kit](https://github.com/MC-Skin-Creator/media-kit)
  (`out/media-kit/living-horizon-media-kit/`: `living-horizon_ruban_mix-couchant.png` for the hero,
  `living-horizon_seul_ligne-3D_mix-couchant.png` for the footer), trimmed and saved as
  WebP. `public/img/og-cover.jpg` is that cover cut to 1200×629 for link previews.
- **Modpacks**: `src/app/sections/modpacks.ts` lists the modpacks ModpackIndex finds with the
  mod (`SITE.modpackIndexModId`), most downloaded first, six before "Show more". Each one's
  buttons go straight to its own CurseForge and Modrinth pages; ModpackIndex is only named in
  the footer's credits. Nothing to edit when a pack is added: it shows up once ModpackIndex
  lists it.
- **Features and servers**: the feature cards are in `src/app/sections/features.ts`, the
  multiplayer section and its table (what works in single player, on LAN, on a server with or
  without the mod) in `src/app/sections/servers.ts`, their texts under `features` and `servers`
  in the dictionaries. Keep both in step with the mod's README.
- **Logos**: `public/img/logos/` holds the Distant Horizons and Voxy logos, from their
  Modrinth pages, shown where the site names them; the compatibility cards take their
  colours (Distant Horizons' blue, Voxy's green). The CurseForge, Modrinth and GitHub marks
  come from [Simple Icons](https://simpleicons.org/) in their brand colours, the Nexus Mods
  one from its site's icon; they mark the download platforms. All belong to their owners.
- **Screenshots**: the before / after slider opens on real in-game screenshots, listed in
  `SITE.screenshots` (the two shots in `public/img/compare/`, same framing, mod off then on;
  the tab's title and sentence in `compare.shots` of every dictionary), then shows the
  stylised illustrations (`src/app/scene/`).

## Deploy

`.github/workflows/deploy.yml` builds every pull request and deploys `main` to GitHub
Pages. In the repository settings, set **Pages → Source** to **GitHub Actions** once.
