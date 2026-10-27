import { plural } from './plural';

const p = plural('en');

/**
 * Every text of the site, in English: the source the other languages translate. Its shape
 * is the type of every other dictionary, so a text added here and missing in one of them
 * fails the build.
 *
 * - `{ before, …, after }` objects are a sentence around a link, a logo or a highlighted
 *   word: each language orders its own sentence around them, and may leave a part empty.
 * - Functions fill in numbers and names; plurals go through `plural()`.
 * - Names of the mod's settings are the mod's own words (its `lang/` files), names of the
 *   game's the game's.
 */
export const en = {
  meta: {
    title: 'Living Horizon: gives life to the distance',
    description:
      'Living Horizon is a Minecraft mod that keeps mobs, villagers, birds and other players alive on the horizon, past your render distance and on the far terrain of Distant Horizons and Voxy. In single player, on LAN and on servers. Fabric, Quilt, NeoForge and Forge. Now in beta.',
  },

  language: {
    label: 'Language',
  },

  common: {
    download: 'Download',
    becomeTester: 'Become a tester',
    needsTesters: 'Needs testers',
    tested: 'Tested',
    seenWorking: 'Seen working in a world',
    new: 'New',
    beta: 'Beta',
    changelog: 'Changelog',
    logo: (name: string) => `${name} logo`,
  },

  nav: {
    label: 'Main',
    tag: 'beta',
    menu: 'Menu',
    features: 'Features',
    compatibility: 'Compatibility',
    testers: 'Testers',
    contribute: 'Contribute',
    download: (version: string) => `Download v${version}`,
  },

  hero: {
    scene:
      'Illustration: a dusk horizon of blocky hills where villagers, animals, riders and other players are still alive far away, under a flight of geese.',
    news: 'The mod now runs on servers too',
    tagline: 'Gives life to',
    taglineAccent: 'the distance.',
    /** Around the Distant Horizons and Voxy logos. */
    lede: {
      before:
        'Animals, villagers, birds and other players keep living on the horizon, far past your render distance, right on the far terrain of',
      between: 'and',
      after: ', or in vanilla. In single player, on LAN, and on servers.',
    },
    facts: 'Project at a glance',
    latest: 'Latest',
    updated: 'Updated',
    downloads: 'Downloads',
    minecraft: 'Minecraft',
    loaders: 'Loaders',
  },

  concept: {
    eyebrow: 'What it does',
    title: 'Your render distance ends.',
    accent: "The world doesn't.",
    text: 'Minecraft stops drawing mobs and players a few chunks away. Far-terrain mods stretch the land to the horizon, but it stays empty and still. Living Horizon fills it back with life.',
    diagram:
      'Diagram: without Living Horizon, mobs only exist within your render distance and the far terrain is empty. With it, mobs, players and birds live across the far terrain up to the horizon.',
    you: 'You',
    renderDistance: 'Your render distance',
    farTerrain: 'Far terrain ·',
    horizon: 'Horizon',
    /** `mark` is highlighted. */
    without: { before: '', mark: 'Without', after: 'Living Horizon' },
    with: { before: '', mark: 'With', after: 'Living Horizon' },
    empty: 'empty',
  },

  features: {
    eyebrow: 'Features',
    title: 'Everything that lives',
    accent: 'past your render distance.',
    text: 'Mobs, players, players who logged off and birds, drawn by your own game and kept light enough to leave on.',
    /** The mod's `livinghorizon.offline.tag`. */
    offline: '(offline)',
    near: 'Up close: the full mob',
    far: 'Far away: a flat picture',
    /** The mod's settings screen, in the mod's words. */
    preset: 'Preset',
    presets: ['Low', 'Normal', 'High', 'Ultra'],
    mobDistance: 'Mob Render Distance',
    items: {
      mobs: {
        title: 'Every mob, out to the horizon',
        text: "Animals graze, villagers wander around far-off villages, golems keep watch. Any mob the game can draw, other mods' mobs included.",
        points: [
          'On Voxy and Distant Horizons terrain, or in vanilla',
          'Hidden behind far hills, shader packs included',
          'Choose which ones in Mobs & Entities',
        ],
        where: 'Everywhere. On a server with the mod, even mobs you never met.',
      },
      players: {
        title: 'Players at any distance',
        text: 'See every other player, wherever they are on the map, with their skin, armour, held items and whatever they ride.',
        points: [
          'Horses, boats, minecarts and happy ghasts',
          'Smooth: the server shares positions five times a second',
          'Players without the mod can still join',
        ],
        where: 'On LAN, and on servers with the mod.',
      },
      offline: {
        title: 'Players who logged off live on',
        text: 'When someone logs off, a copy with their name stays where they left. It strolls, sits, opens chests and sleeps at night, until they come back.',
        points: [
          '(offline) after their name, and when they were last seen',
          'Even players who left before you joined',
          'Only for show: they never block you or the mobs',
        ],
        where: 'Everywhere. On a server with the mod, every player who ever played there.',
      },
      birds: {
        title: 'Birds in the sky',
        text: 'Flocks, geese in a V, birds of prey, gulls, ducks and bats fly over the land, and you see them from far away.',
        points: [
          'They land on trees, roofs, fields and beaches',
          'Ducks swim around their pond',
          'Small 3D models up close, flat pictures far away',
        ],
        where: 'Everywhere, nothing to set up.',
      },
      light: {
        title: 'Built to stay light',
        text: 'Far mobs have no AI: they play ready-made animations that fit the ground. Very far away, they become flat pictures of themselves.',
        points: [
          'Mobs hidden behind hills are not drawn',
          'Lower your simulation distance and keep a living world',
          'Simplified Entities: many more mobs for the same cost',
        ],
        where: 'Everything runs on your game. The server only shares positions.',
      },
      settings: {
        title: 'Settings where you look for them',
        text: "In the Options screen, Mod Menu, Sodium's Video Settings, or with /livinghorizon config. Each setting says what it does.",
        points: [
          'Low, Normal, High and Ultra presets set everything at once',
          'In 14 languages',
          'Restore Defaults puts everything back',
        ],
        where: 'The defaults are the balanced choice.',
      },
    },
  },

  compare: {
    eyebrow: 'Before / after',
    title: 'Same view.',
    accent: 'One mod.',
    text: 'Drag the handle. On the left, the far terrain is there but empty. On the right, Living Horizon brings it back to life.',
    tabs: 'Scenes',
    /** The real screenshots of `SITE.screenshots`, by id. */
    shots: {
      shaders: {
        title: 'In game · Shaders',
        text: 'With a shader pack, render and simulation distance 12: the animals on the far hills are back.',
      },
      vanilla: {
        title: 'In game · Vanilla',
        text: 'No shaders, render and simulation distance 12: herds of cows and horses fill the far plains.',
      },
    },
    /** The stylised illustrations. */
    scenes: {
      village: {
        title: 'Village on the plains',
        text: 'Villagers, a golem and grazing animals around a far-off village.',
      },
      ridge: {
        title: 'Riders on the ridge',
        text: 'Other players and their horses on the hills, name tags and all.',
      },
      coast: {
        title: 'Coast at midday',
        text: 'Boats out at sea, villagers on the far shore, gulls over the water.',
      },
    },
    legendNear: 'Your render distance: alive either way',
    legendFar: 'Far terrain: empty without the mod',
    note: {
      before:
        'Stylised illustration of the effect. The first tabs are real in-game screenshots. Got a good one of your own?',
      link: 'Share it on Discord',
      after: '.',
    },
    shotWithout: (text: string) => `In-game screenshot without Living Horizon. ${text}`,
    shotWith: (text: string) => `In-game screenshot with Living Horizon. ${text}`,
    sceneWithout: (text: string) => `Without Living Horizon: ${text}`,
    sceneWith: (text: string) => `With Living Horizon: ${text}`,
    badgeWithout: 'Without the mod',
    badgeWith: 'With Living Horizon',
    slider: 'Move to compare the view without and with Living Horizon',
  },

  servers: {
    eyebrow: 'Multiplayer',
    title: 'Put it on your server.',
    accent: 'Everyone sees everyone.',
    text: 'The same jar runs on servers. The server shares where every player is, the mobs around them and the players who logged off, with everyone who has the mod.',
    cover: 'The Living Horizon title in front of a crowd of player and mob heads.',
    since: (version: string) => `Server support, since ${version}`,
    steps: {
      jar: {
        title: "Drop the jar in the server's mods folder",
        text: "The same file as for your game, for the server's Minecraft version and loader, plus the Fabric API on Fabric and Quilt. Keep it up to date on both sides.",
      },
      start: {
        title: 'Start the server',
        text: 'Nothing to set up. The server keeps what it shares in the world folder, so it is still there after a restart.',
      },
      see: {
        title: 'Players with the mod see everyone',
        text: 'Every player at any distance, with their skin, armour and mount, and the mobs around them, even ones they never met.',
      },
    },
    matrixTitle: 'What you see, where you play',
    matrixText:
      'Everything works in single player. On a server, the mod on the server does the rest.',
    matrixLabel: 'Features by place of play',
    feature: 'Feature',
    places: ['Single player', 'LAN world', 'Server with the mod', 'Server without the mod'],
    rows: {
      mobs: 'Mobs on the horizon',
      players: 'Players at any distance',
      offline: 'Players who logged off',
      birds: 'Birds',
    },
    /** Cells of the table that say more than yes or no. */
    cells: {
      mobsMet: 'Only the mobs you met',
      offlineEven: 'Even those who left before you joined',
      offlineSeen: 'Only those you saw leave',
    },
    yes: 'Yes',
    no: 'No',
    noOthers: 'No other players',
    notApplicable: 'Not applicable',
    notes: {
      lan: {
        title: 'LAN: nothing to install',
        text: "A world opened to LAN shares everything through the host's game.",
      },
      join: {
        title: 'Anyone can join',
        text: 'Players without the mod can still join. The server sends them nothing.',
      },
      tell: {
        title: 'Tell your players',
        text: "The server shares every player's position with the players who have the mod.",
      },
      datapack: {
        title: 'Used the data pack?',
        text: "Remove it from the world's datapacks folder: the mod on the server replaces it.",
      },
    },
  },

  compatibility: {
    eyebrow: 'Compatibility',
    title: 'Built for far terrain.',
    accent: 'Fine without it.',
    text: 'Living Horizon finds Distant Horizons or Voxy on its own and draws mobs and players right on their terrain. Without them, it keeps the world alive past your render distance.',
    works: 'Works',
    cards: {
      dh: {
        text: 'Mobs and players are drawn on its far terrain and hide behind its hills. From Distant Horizons 2.3 on.',
        link: 'Get Distant Horizons',
      },
      voxy: {
        text: "The horizon of Voxy's terrain comes alive: grazing animals, far villages, players on the move.",
        link: 'Get Voxy',
      },
      vanilla: {
        title: 'Vanilla',
        text: 'No far-terrain mod needed. Play with a low render and simulation distance and still see a living world.',
      },
    },
    extras: [
      'Iris shader packs (Photon, Complementary…)',
      'Same jar on servers, or join any server without it',
      "Settings in Sodium's Video Settings (0.8+)",
    ],
    matrixTitle: 'Minecraft versions and loaders',
    matrixText: 'One jar per game version and loader.',
    builds: (builds: number, range: string) =>
      p(builds, { one: `{n} build, from ${range}.`, other: `{n} builds, from ${range}.` }),
    keyUntested: 'Starts, needs testers',
    table: 'Compatibility table',
    untested: 'Starts in the game, not yet seen drawing in a world',
    noBuild: 'No build',
    notAvailable: 'Not available',
    fallback: (range: string) =>
      `Minecraft ${range} on Fabric, Quilt, NeoForge (1.20.6 and later) and Forge.`,
    fullTable: 'Full table on GitHub',
    loaders: {
      fabric: 'With the Fabric API. Mod Menu optional.',
      quilt: 'With the Fabric API (QFAPI).',
      neoforge: 'From Minecraft 1.20.6, nothing else needed.',
      forge: 'Nothing else needed.',
    },
  },

  performance: {
    eyebrow: 'Performance',
    title: 'A living horizon that',
    accent: 'gives you frames back.',
    /** The "Optimized rendering" explanation, hidden for now (`SHOW_DESIGN`). */
    design: {
      eyebrow: 'Optimized rendering',
      title: 'A living horizon that',
      accent: "doesn't eat your frames.",
      text: 'Living Horizon is designed from the start to stay light: far figures are drawn the cheap way, and only when they can be seen. That lets you lower your render and simulation distance and still keep the world alive.',
      cards: {
        pictures: {
          title: 'Light pictures far away',
          text: 'Past a set distance, a far figure is drawn as a flat picture of itself instead of a full model. At that size it looks the same, for a fraction of the work.',
        },
        hidden: {
          title: 'Hidden means skipped',
          text: 'Mobs behind the far terrain are not drawn at all, and animations stop once a figure is too small or too far to notice.',
        },
        presets: {
          title: 'Quality presets',
          text: 'Low, Normal, High and Ultra set the number of mobs, their range and the birds in one go. The defaults are the balanced choice.',
        },
        server: {
          title: 'Light on the server',
          text: "Every animation runs on the players' games. A server with the mod only shares positions.",
        },
      },
    },
    numbers: 'By the numbers',
    measured: 'Measured by players and the author; the setup is under each value.',
    /** Around `/livinghorizon debug`. */
    noNumbers: {
      before:
        'No made-up numbers here: these fill in as real benchmarks come in. The built-in debug panel (',
      after: ") shows the mod's own cost per tick and per frame.",
    },
    /** The measurements the section is laid out for (`SITE.benchmarks` fills them). */
    slots: {
      fps: { label: 'FPS gain', hint: 'the mod drawing the distance instead of the game' },
      mobs: { label: 'Mobs on the horizon', hint: 'drawn at once' },
      distance: { label: 'Distance covered', hint: 'past the render distance' },
      frame: { label: 'Frame cost', hint: 'from the debug panel' },
    },
    /** How each benchmark of `SITE.benchmarks` was measured, by slot. */
    setups: {
      fps: '120 → 150 FPS for the same view of the distance: a shorter render distance with Living Horizon drawing the mobs beyond it, against the game drawing that far itself. Measured by the author.',
    },
    pending: (hint: string) => `Benchmark pending · ${hint}`,
    share: 'Measured it on your setup? Share it',
  },

  testers: {
    eyebrow: 'Currently in beta',
    title: 'Help bring the horizon to life.',
    lede: 'Living Horizon is young and runs on a lot of combinations: game versions, loaders, Distant Horizons and Voxy versions, shader packs, other mods. Not all of them have been tried yet. If you play with it, tell us how it runs, good or bad: every report counts.',
    asks: [
      'Your Minecraft version and loader',
      'Distant Horizons or Voxy, and their version',
      'Shader pack, if any (Photon, Complementary…)',
      'Single player, LAN or server, with the mod or not',
      'A screenshot of what you see',
    ],
    report: 'Report compatibility',
    discord: 'Join the Discord',
    issue: 'Open an issue',
    status: 'Testing status',
    /** After the big number of builds that need a tester. */
    waiting: (builds: number) =>
      p(builds, {
        one: 'of {n} build still needs a first tester',
        other: 'of {n} builds still need a first tester',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, { one: '{n} build seen working', other: '{n} builds seen working' })}, ${waiting} waiting`,
    seen: 'Seen working',
    yours: 'Waiting for you',
    wanted: 'Most wanted',
    every: 'Every',
    everyRest: 'setup tells us something new',
    loading: 'Untested combinations show up here as soon as the project data loads.',
  },

  contribute: {
    eyebrow: 'Contribute',
    title: 'Build it with us.',
    accent: 'AI welcome.',
    text: 'Living Horizon is made in one place, its GitHub repository. Code, fixes and translations all land there as pull requests.',
    steps: {
      talk: {
        title: 'Talk first',
        text: 'For anything larger than a small fix, open an issue so the direction is agreed before the work is done.',
      },
      pr: {
        title: 'Open a pull request',
        text: 'Work on a feature/* or fix/* branch and target develop. Commits are in English, as conventional commits.',
      },
      build: {
        title: 'Build and test',
        text: 'One Gradle build compiles the mod and runs the tests. CI runs it on every pull request too.',
      },
      credit: {
        title: 'Get credited',
        text: 'Add yourself to CREDITS.md, and a line to the changelog if players will see the change.',
      },
    },
    aiTitle: 'Using AI? Go ahead.',
    aiText:
      'AI is part of how this project is made, and you can use it to contribute, no problem. Just keep thinking about what it writes: read, understand and test your change before you open the pull request.',
    /** Around `CLAUDE.md` and `.claude/skills/`. */
    claude: {
      before: 'Claude works best here: it reads',
      between: 'and the skills in',
      after: 'on its own.',
    },
    /** Around the link to the license. */
    terms: {
      before: 'By opening a pull request you accept section 3 of the',
      link: 'license',
      after:
        ': you keep your copyright, and you stay credited as a contributor whatever happens later.',
    },
    guide: 'Read the contributing guide',
    issues: 'Open issues',
  },

  changelog: {
    eyebrow: 'Latest updates',
    title: 'Shipping often,',
    accent: 'fixing fast.',
    text: "Straight from the project's changelog on GitHub.",
    /** Shown instead of `text` in a language the changelog is not written in. */
    textEnglish: "Straight from the project's changelog on GitHub, in English.",
    latest: 'Latest',
    release: 'Release',
    sides: { server: 'Server', client: 'Client' },
    kinds: { new: 'New', improved: 'Improved', fixed: 'Fixed' },
    more: (n: number) => p(n, { one: 'Show {n} more change', other: 'Show {n} more changes' }),
    failed: "The changelog couldn't be loaded right now. It's always on GitHub.",
    full: 'View full changelog on GitHub',
    releases: 'All releases',
  },

  download: {
    eyebrow: 'Download',
    title: 'Get',
    accent: 'Living Horizon',
    /** Around the `mods` folder's name. */
    text: {
      before:
        'Free, one jar per game version and loader, for your game and your server. Drop it in the',
      after: 'folder and the horizon comes alive.',
    },
    latest: 'Latest release',
    version: 'Minecraft version',
    loader: 'Loader',
    /** Around the link to the Fabric API. */
    needs: { before: '· needs the', after: '' },
    untested: 'This build starts in the game but nobody has reported it drawing in a world yet',
    jar: 'Download the jar',
    releasePage: 'Get it from the release page',
    sameJar: 'The same jar goes on your server',
    curseforge: 'or get it on CurseForge',
    pick: 'Pick your file on the release page or on CurseForge.',
    total: 'Downloads, all platforms',
    count: (n: number) => p(n, { one: '{n} download', other: '{n} downloads' }),
    noCount: 'Downloads not available',
    soon: 'Coming soon',
    checking: 'Checking…',
    everyFile: 'every file',
  },

  footer: {
    tagline:
      'Gives life to the distance. A mod for Minecraft Java Edition, for your game and your server.',
    beta: 'Beta: expect bugs, and tell us about them.',
    project: 'Project',
    docs: 'Documentation',
    license: 'License',
    community: 'Community',
    bug: 'Report a bug',
    contribute: 'Contribute',
    official:
      'Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.',
  },
};

export type Messages = typeof en;
