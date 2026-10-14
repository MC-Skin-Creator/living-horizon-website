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
  avatars — *Walk* (animated GIF, transparent, 512 px) and *Full body* — and packed into
  `public/img/figures/skin-N-walk.png` (the 14 frames side by side, 17×23 each: the export's
  own pixels, 17 px blocks at 512 px) and `skin-N-body.png` (16×32). To add one, export both,
  pack them the same way and raise
  `FIGURE_COUNT` in `src/app/scene/figures.ts`.
- **Screenshots**: the before / after slider draws stylised illustrations
  (`src/app/scene/`). To use real shots, put them in `public/img/` and fill
  `SITE.screenshots` (`village`, `ridge`, `coast`; same framing, mod off then on).

## Deploy

`.github/workflows/deploy.yml` builds every pull request and deploys `main` to GitHub
Pages. In the repository settings, set **Pages → Source** to **GitHub Actions** once.
