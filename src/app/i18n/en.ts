import { plural } from './plural';
import { details, questions } from './rich';

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
    mods: 'Mods',
    modpacks: 'Modpacks',
    faq: 'FAQ',
    download: (version: string) => `Download v${version}`,
  },

  pages: {
    mods: {
      title: 'Compatible mods',
      description:
        'How Living Horizon runs with other Minecraft mods: far terrain, shaders, performance and creature mods. What works, what has a known issue, and what waits for a tester.',
    },
    modpacks: {
      title: 'Modpacks',
      description:
        'The Minecraft modpacks that ship Living Horizon, with their download links on CurseForge and Modrinth.',
    },
    changelog: {
      title: 'Changelog',
      description: 'Every version of Living Horizon and what changed in it.',
    },
  },

  hero: {
    scene:
      'Illustration: a dusk horizon of blocky hills where villagers, animals, riders and other players are still alive far away, under a flight of geese.',
    news: 'New: herds in land nobody has explored',
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
    text: 'Mobs, the herds of land nobody has explored, players, players who logged off and birds, drawn by your own game and kept light enough to leave on.',
    /** The mod's `livinghorizon.offline.tag`. */
    offline: '(offline)',
    near: 'Up close: the full mob',
    far: 'Far away: a flat picture',
    /** The button of each card, and the window it opens. */
    more: 'More details',
    close: 'Close',
    previous: 'Previous feature',
    next: 'Next feature',
    items: {
      mobs: {
        title: 'Every mob, out to the horizon',
        text: "Animals graze, villagers wander around far-off villages, golems keep watch. Any mob the game can draw, other mods' mobs and vehicles included.",
        points: [
          'On Voxy, Distant Horizons and other far terrain, or in vanilla',
          'Hidden behind far hills, shader packs included',
          'Choose which ones in Mobs & Entities',
        ],
        where: 'Everywhere. On a server with the mod, even mobs you never met.',
        details: details([
          {
            title: 'Where they come from',
            body: [
              [
                'They are real mobs, where your game or the server last saw them. Your game remembers every mob it meets, and a server with the mod shares the mobs around every player, so you also see herds you never met. One that died or despawned since can still show until you come near it. Then it is forgotten.',
              ],
            ],
          },
          {
            title: 'On the far terrain',
            body: [
              [
                "With Voxy, Distant Horizons, Lodistance, Far View or Ecstatic, they walk on its ground, hide behind its hills like behind any block, and fade into its fog. With Bobby, they stay on the terrain it keeps. Without any of them, they show on the game's own terrain. See ",
                { link: 'compatibilitySection', text: 'Compatibility' },
                '.',
              ],
            ],
          },
          {
            title: 'Up close, the real mob takes over',
            body: [
              [
                'As you come near, the copy walks back to where the mob was last seen, and the real mob takes its place when the server sends it. Far mobs are only for show: farms, spawning and the mob cap work as without the mod, and you cannot hit them.',
              ],
            ],
          },
          {
            title: "Other mods' mobs",
            body: [
              [
                "Anything that uses Minecraft's own entity system shows far away: modded mobs, and vehicles such as Immersive Aircraft's planes or Shippy Ships' ships, where you left them.",
              ],
            ],
          },
          {
            title: 'Settings',
            body: [
              {
                list: [
                  [{ em: 'Show Mobs' }, ' and ', { em: 'Show Entities' }, ': turn them on or off.'],
                  [{ em: 'Mobs & Entities...' }, ': choose mob by mob.'],
                  [
                    { em: 'Mob Render Distance' },
                    ' and ',
                    { em: 'Max Mobs' },
                    ': how far, and how many at once.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      unexplored: {
        title: 'Herds in land nobody has explored',
        text: "Land you have never visited has its animals too. The mod works out from the world's seed which ones the game will put there, and where.",
        points: [
          'The same draws the game makes for each new chunk',
          'Through a spyglass, as far as you aim',
          'Guess Nearby Mobs: up to 1,024 chunks around you',
        ],
        where: 'In single player, and on servers with the mod.',
        details: details([
          {
            title: 'How it guesses',
            body: [
              [
                "When the game generates a chunk, it places its first animals with random draws made from the world's seed and the chunk's position. Living Horizon makes the same draws for the chunks not generated yet, with the biome and terrain the world generator gives: horses on the plains, sheep on the hills, about where the game will put them.",
              ],
            ],
          },
          {
            title: 'A guess, not a promise',
            body: [
              [
                'The terrain it reads has no grass and no trees yet. Where the game turns a spot down for that, its herd is missing or elsewhere: about half of the guessed animals stand within two blocks of the real ones. A guessed mob may not be there when you arrive.',
              ],
            ],
          },
          {
            title: 'Spyglass and Guess Nearby Mobs',
            body: [
              [
                'Look through a spyglass to see the guessed mobs wherever you aim, however far. ',
                { em: 'Guess Nearby Mobs' },
                ' shows them up to 1,024 chunks around you at once, and keeps them for your next sessions.',
              ],
            ],
          },
          {
            title: 'On a server',
            body: [
              [
                'The server guesses them around each player with the mod, 512 blocks by default (',
                { code: 'seedMobRange' },
                ', up to 2,048). The spyglass and ',
                { em: 'Guess Nearby Mobs' },
                " need the world's seed: the server only shares it if its owner turns on ",
                { code: 'shareSeed' },
                ', since whoever has the seed knows the whole world (see the ',
                { link: 'serverSettings', text: 'server settings' },
                ').',
              ],
            ],
          },
          {
            title: 'Settings',
            body: [
              {
                list: [
                  [{ em: 'Show Guessed Mobs' }, ': show or hide them.'],
                  [{ em: 'Guess Radius' }, ': how far ', { em: 'Guess Nearby Mobs' }, ' reaches.'],
                ],
              },
            ],
          },
        ]),
      },
      players: {
        title: 'Players at any distance',
        text: 'See every other player, wherever they are on the map, with their skin, armour, held items and whatever they ride.',
        points: [
          'Horses, boats, minecarts, elytra and happy ghasts',
          'Smooth: the server shares positions five times a second',
          'Players without the mod can still join',
        ],
        where: 'On LAN, and on servers with the mod.',
        details: details([
          {
            title: 'How it works',
            body: [
              [
                'A server with the mod shares where every player is five times a second, with what they ride and whether they glide with an elytra. Every five seconds it adds how the nearest ones look: skin, armour and what they hold. Your game draws them past the view distance, name tag and mount included.',
              ],
            ],
          },
          {
            title: 'The server owner chooses',
            body: [
              [
                'The server writes ',
                { code: 'config/livinghorizon-server.json' },
                ' the first time it starts: how far players are shared, with teammates only, which players and dimensions stay hidden. ',
                { code: '"sharePlayers": false' },
                ' turns it off. Changes apply after a few seconds, without a restart (see the ',
                { link: 'serverSettings', text: 'server settings' },
                ').',
              ],
            ],
          },
          {
            title: 'Never shared',
            body: [
              [
                'Players in spectator mode and invisible players. Sneaking players are, for now (',
                { link: 'sneaking', text: '#269' },
                '). Within the view distance, players see each other as usual.',
              ],
            ],
          },
          {
            title: 'Settings',
            body: [
              {
                list: [
                  [{ em: 'Show Players' }, ': turn them on or off.'],
                  [{ em: 'Player Render Distance' }, ': how far they show.'],
                  [{ em: 'Mounts & Vehicles' }, ': what they ride.'],
                ],
              },
            ],
          },
        ]),
      },
      offline: {
        title: 'Players who logged off live on',
        text: 'When someone logs off, a copy with their name stays where they left. It strolls, sits, fishes, opens chests and sleeps at night, until they come back.',
        points: [
          '(offline) after their name, and when they were last seen',
          'Even players who left before you joined',
          'Only for show: walk into them to push them aside',
        ],
        where: 'Everywhere. On a server with the mod, every player who ever played there.',
        details: details([
          {
            title: 'A day in their life',
            body: [
              {
                list: [
                  [
                    'By day, they stroll, sit down, or stand at a chest, a crafting table or a workstation.',
                  ],
                  ['At night, they walk to a free bed and sleep in it, or stay on their feet.'],
                  ['Near water, one of them stops at the shore to fish for a while.'],
                  ['In the rain, some walk under a roof or a tree and wait for it to stop.'],
                  ['In the evening, they gather in front of a campfire or a furnace.'],
                  ['Two of them close to each other walk up and chat, face to face.'],
                ],
              },
            ],
          },
          {
            title: 'They notice you',
            body: [
              [
                'Look at one from close by and it looks back. Crouch in front of it and it crouches too. When monsters come near, they draw a sword and raise their shield, but they never fight.',
              ],
            ],
          },
          {
            title: 'Only for show',
            body: [
              [
                'The world does not know they exist: mobs ignore them, and they never block or push you. Walk into them to push them aside. Far from you, they keep strolling where they are.',
              ],
            ],
          },
          {
            title: 'Where they come from',
            body: [
              [
                'Your game remembers the players it saw leave. A server with the mod shares every player who ever played there, as they looked, even those who left before you joined.',
              ],
            ],
          },
          {
            title: 'Settings',
            body: [
              {
                list: [
                  [
                    { em: 'Offline Players' },
                    ' and ',
                    { em: 'Max Offline' },
                    ': whether they show, and how many.',
                  ],
                  [{ em: 'Offline Player Activity' }, ': their life around their spot.'],
                  [{ em: 'Roaming Radius' }, ': how far they wander, 50 blocks by default.'],
                ],
              },
            ],
          },
        ]),
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
        details: details([
          {
            title: 'Who flies where',
            body: [
              {
                list: [
                  ['Flocks cross the sky, geese fly in a V, birds of prey circle.'],
                  ['Gulls follow the coast and land on the beach now and then.'],
                  ['Pigeons sit on tall buildings, robins hop in fields, tits stay in the trees.'],
                  ['Ducks swim on lakes and rivers. Bats come out at night.'],
                ],
              },
            ],
          },
          {
            title: 'They react to you',
            body: [
              [
                'Small birds fly off when you come close and land a little farther. Ducks never let you near. Birds that leave never vanish at once: they scatter and shrink away.',
              ],
            ],
          },
          {
            title: 'Read off the terrain',
            body: [
              [
                'Where each kind goes is read off the terrain, out to the far terrain of Voxy and Distant Horizons: crops for robins, leaves for tits, water for ducks, beaches for gulls. They are only pictures on your game: nothing is spawned in the world.',
              ],
            ],
          },
          {
            title: 'Settings',
            body: [
              {
                list: [
                  [{ em: 'Show Birds' }, ': turn them on or off.'],
                  [{ em: 'Bird Types...' }, ': choose kind by kind.'],
                  [
                    { em: 'Bird Density' },
                    ' and ',
                    { em: 'Bird Distance' },
                    ': how many, and how far.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      light: {
        title: 'Built to stay light',
        text: 'Far mobs have no AI: they play ready-made animations that fit the ground. Very far away, they become flat pictures of themselves.',
        points: [
          'Mobs hidden behind hills are not drawn',
          'Lower your simulation distance and keep a living world',
          'Simplified Mobs: many more mobs for the same cost',
        ],
        where: 'Everything runs on your game. The server only shares positions.',
        details: details([
          {
            title: 'No AI far away',
            body: [
              [
                'Far mobs walk, graze and look around with ready-made animations that fit the ground around them. Players who logged off and birds only act on their own close to you.',
              ],
            ],
          },
          {
            title: 'Flat pictures far away',
            body: [
              [
                'Many games draw far objects as impostors: a flat picture instead of a 3D model. Living Horizon does the same for far mobs, vehicles and players (',
                { em: 'Simplified Mobs' },
                ', ',
                { em: 'Simplified Entities' },
                ', ',
                { em: 'Simplified Players' },
                '). At that size they look the same, for a fraction of the cost. With a shader pack that reads normal maps, such as Photon, the pictures are lit by the pack (',
                { em: 'Shader Lighting' },
                ').',
              ],
            ],
          },
          {
            title: 'Hidden means skipped',
            body: [
              [
                'Mobs behind hills or the far terrain are not drawn at all, and animations stop once a figure is too small to notice.',
              ],
            ],
          },
          {
            title: 'Everything on your game',
            body: [
              [
                'Your game handles the animations, the players who logged off and the birds. A server with the mod only shares positions, so it costs it little. Two players can even see the same far mob doing different things.',
              ],
            ],
          },
          {
            title: 'Presets and settings',
            body: [
              [
                'A ',
                { em: 'Preset' },
                ' (',
                { em: 'Low' },
                ', ',
                { em: 'Normal' },
                ', ',
                { em: 'High' },
                ', ',
                { em: 'Ultra' },
                ') sets everything at once. The defaults are the balanced choice, and ',
                { em: 'Restore Defaults' },
                " puts them back. The settings are in the Options screen, Mod Menu, Sodium's Video Settings or ",
                { code: '/livinghorizon config' },
                ', in 14 languages.',
              ],
              [
                'Careful: ',
                { em: 'Max Mobs' },
                ' and ',
                { em: 'Mob Render Distance' },
                ' both on ',
                { em: 'Unlimited' },
                ' can crash the game.',
              ],
            ],
          },
        ]),
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
      unexplored: 'Herds in unexplored land',
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
      install: {
        title: "Drop the jar in the server's mods folder",
        text: 'The same file as for your game, plus the Fabric API on Fabric and Quilt. Nothing to set up.',
      },
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
    },
  },

  compatibility: {
    eyebrow: 'Compatibility',
    title: 'Distant Horizons, Voxy, Ecstatic…',
    accent: 'or nothing at all.',
    text: 'Living Horizon finds your far-terrain mod on its own: mobs and players walk on its ground, hide behind its hills and fade into its fog. Without one, it keeps the world alive past your render distance.',
    /** A card per mod; the names are the mods' own. */
    cards: {
      dh: { text: 'From 2.3 on. Mobs and players on its terrain, behind its hills.' },
      voxy: { text: 'Mobs and players on its terrain, shader packs included.' },
      lodistance: { text: 'Fabric, Minecraft 26.3, with OpenGL and without shaders.' },
      farView: { text: 'Forge and NeoForge, Minecraft 1.20.1 to 1.21.4. Mobs on its terrain.' },
      ecstatic: { text: 'NeoForge, Minecraft 1.21.1, single player. Mobs on its terrain.' },
      bobby: { text: "Mobs and players on the terrain it keeps past the server's view distance." },
      iris: { text: 'Shader packs work, such as Photon and Complementary Unbound.' },
      vanilla: {
        title: 'Vanilla',
        text: 'No far-terrain mod needed: lower your render and simulation distance and still see a living world.',
      },
    },
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: 'And your other mods?',
      text: (n: number) =>
        p(n, {
          one: '{n} mod listed: shaders, performance, creature mods. What works, and what still waits for a tester.',
          other:
            '{n} mods listed: shaders, performance, creature mods. What works, and what still waits for a tester.',
        }),
      link: 'See compatible mods',
    },
    matrixTitle: 'Minecraft versions and loaders',
    matrixText: 'One jar per game version and loader.',
    /** Next to the "?" of the table: a link to report a build. */
    report: 'Tried one? Report it',
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

  /** Testing, contributing and the Discord, in one section. */
  help: {
    eyebrow: 'Get involved',
    title: 'A beta,',
    accent: 'built with its players.',
    test: {
      title: 'Test it on your setup',
      text: 'Tell us how it runs on your game version, loader and mods, good or bad. Every report helps.',
      /** Under the text, once the builds are known. */
      untested: (n: number) =>
        p(n, {
          one: '{n} build still waits for a first tester',
          other: '{n} builds still wait for a first tester',
        }),
      report: 'Report compatibility',
    },
    code: {
      title: 'Contribute',
      text: 'Code, fixes and translations land as pull requests on GitHub. AI is welcome, as long as you read, understand and test what it writes.',
      guide: 'Contributing guide',
    },
    discord: {
      title: 'Join the Discord',
      text: 'Questions, news, screenshots and help, with the author and other players.',
      join: 'Join the Discord',
    },
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
    /** The link to the changelog page, on the home page. */
    every: 'See every version',
  },

  /**
   * The questions of the mod's README. An answer is a list of blocks (`rich.ts`): pieces of
   * text, `em` for a setting's name, `code`, and links to `SITE.links`.
   */
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions?',
    accent: 'Answers.',
    text: 'What players ask most often. Anything else, ask on the Discord.',
    groups: {
      how: 'How it works',
      compatibility: 'Compatibility',
      performance: 'Performance and settings',
      multiplayer: 'Multiplayer',
      downloads: 'Downloads and license',
      ai: 'AI',
    },
    questions: questions({
      visual: {
        q: 'Is it only visual? Does it break mob farms?',
        a: [
          [
            'It is only visual, no AI. The real mobs work as without the mod, so farms, spawning and the mob cap do not change. You cannot hit a distant mob.',
          ],
        ],
      },
      real: {
        q: 'Are the distant mobs real, or placed at random?',
        a: [
          [
            'They are real mobs, where your game or the server last saw them. One that died or despawned since can still show until you come near it. Then it is forgotten.',
          ],
        ],
      },
      simulation: {
        q: 'How is it different from a higher simulation or entity distance?',
        a: [
          [
            'A higher simulation distance makes the server run more real mobs, which costs a lot, and the server still only sends them so far. Living Horizon draws copies that the server does not run. They play ready-made animations, and far away they become flat pictures (',
            { em: 'Simplified Entities' },
            ').',
          ],
        ],
      },
      range: {
        q: 'How far does it show mobs and players?',
        a: [
          [
            'Mobs: 512 blocks by default, up to ',
            { em: 'Unlimited' },
            ' with ',
            { em: 'Mob Render Distance' },
            '. Players, boats and vehicles: any distance by default, which ',
            { em: 'Player Render Distance' },
            ' and ',
            { em: 'Entity Render Distance' },
            ' can limit. A mob only shows once your game or the server has seen it.',
          ],
        ],
      },
      mods: {
        q: 'Does it work with my mod?',
        a: [
          [
            'Most likely. Voxy, Distant Horizons, Lodistance, Ecstatic, Bobby, Sodium, Iris and shader packs work with it (see ',
            { link: 'compatibilitySection', text: 'Compatibility' },
            '). Living Horizon only adds its own figures: it does not change how other mods draw the world. Mods not tested yet are listed under the ',
            { link: 'modCompatibility', text: 'mod compatibility' },
            ' label on GitHub. If something breaks, open an ',
            { link: 'issues', text: 'issue' },
            " with the mod's name and version.",
          ],
        ],
      },
      modMobs: {
        q: 'Do mobs from other mods show far away?',
        a: [
          [
            "Yes, as long as they use Minecraft's own entity system. If a mod's entities work too differently, ask for support for it in an ",
            { link: 'issues', text: 'issue' },
            ' or on the ',
            { link: 'discord', text: 'Discord' },
            '.',
          ],
        ],
      },
      farTerrain: {
        q: 'Do I need Voxy, Distant Horizons, Lodistance or Ecstatic?',
        a: [
          [
            "No. Without them, distant mobs and players show on the game's own terrain, out to your render distance. With one of them, they also show on its far terrain.",
          ],
        ],
      },
      frameRate: {
        q: 'Will it lower my frame rate?',
        a: [
          [
            'Drawing more entities costs frame rate. If your game slows down, keep ',
            { em: 'Simplified Mobs' },
            ' and ',
            { em: 'Simplified Entities' },
            ' on and pick a lower ',
            { em: 'Preset' },
            '. ',
            { em: 'Max Mobs' },
            ' and ',
            { em: 'Mob Render Distance' },
            ' both on ',
            { em: 'Unlimited' },
            ' can crash the game.',
          ],
        ],
      },
      choose: {
        q: 'Can I choose what is shown?',
        a: [
          [
            'Yes. ',
            { em: 'Show Mobs' },
            ', ',
            { em: 'Show Players' },
            ', ',
            { em: 'Offline Players' },
            ' and ',
            { em: 'Show Birds' },
            ' turn each part on or off. ',
            { em: 'Mobs & Entities...' },
            ' chooses mob by mob.',
          ],
        ],
      },
      world: {
        q: 'Does it change my world or load chunks?',
        a: [
          [
            'No. It changes nothing in your world and loads no chunk. It keeps what it remembers in files of its own: in the ',
            { code: 'config' },
            ' folder, and in ',
            { code: 'livinghorizon-positions.dat' },
            ' in the world folder for what the server shares. Removing the mod leaves your world as it was.',
          ],
          ['On a server, the mod only sends positions to the players who have it.'],
        ],
      },
      server: {
        q: 'Does the server need the mod?',
        a: [
          [
            'No. Almost everything works in single player, and you can join any server with it. But players at any distance need the mod on the server, and the server then shares more mobs and players who logged off. See ',
            { link: 'serversSection', text: 'Multiplayer' },
            '.',
          ],
        ],
      },
      paper: {
        q: 'Does it work on Paper or Spigot servers?',
        a: [
          [
            'You can play on them with the mod, as on any server without it. The server side runs on Fabric, Quilt, NeoForge and Forge only, so a Paper or Spigot server shares nothing. A plugin for Paper is discussed in ',
            { link: 'paperPlugin', text: '#156' },
            '.',
          ],
        ],
      },
      nothing: {
        q: 'I see no distant mobs or players. Why?',
        a: [
          {
            list: [
              [
                'Distant players need the mod on the server. Its owner may also limit who is shared (see the ',
                { link: 'serverSettings', text: 'server settings' },
                ').',
              ],
              ['On a server without the mod, only the mobs you met show.'],
            ],
          },
        ],
      },
      cheat: {
        q: 'Can it be used to cheat? Is it allowed on servers?',
        a: [
          [
            'It only shows other players where the server allows it. Distant players only show on a server that has the mod, and its owner chooses what it shares: how far, with teammates only, and which players and dimensions stay hidden. ',
            { code: '"sharePlayers": false' },
            ' turns it off (see the ',
            { link: 'serverSettings', text: 'server settings' },
            '). Invisible players and players in spectator mode are never shared. Sneaking players are, for now (',
            { link: 'sneaking', text: '#269' },
            ').',
          ],
          [
            'On other servers, you only see what your own game saw. The mod sends nothing to the server. Each server has its own rules about mods, though: ask its staff.',
          ],
        ],
      },
      bedrock: {
        q: 'Is there a Bedrock version?',
        a: [['No. Living Horizon is a mod for Minecraft Java Edition.']],
      },
      version: {
        q: 'My game version is not supported. Will it be?',
        a: [
          [
            'Say on the ',
            { link: 'discord', text: 'Discord' },
            ' which version and loader you play. It helps choose what comes next.',
          ],
        ],
      },
      modpack: {
        q: 'Can I put it in a modpack?',
        a: [['Yes. Use the official file and credit it.']],
      },
      abandoned: {
        q: 'What if the project is abandoned?',
        a: [
          [
            'The license plans for it. Once the project is declared abandoned (its repository archived, or its README saying so), its license turns into the GPL: anyone may carry the project on, with credit. See section 5 of the ',
            { link: 'license', text: 'license' },
            '.',
          ],
        ],
      },
      ai: {
        q: 'Was it made with AI?',
        a: [
          [
            'Yes, in part. AI writes much of the code. The author, clixmods, decides how the mod works, tests every change in the game and fixes what goes wrong. Without AI, a project this size would not exist.',
          ],
          [
            "The ideas come from game development, which is clixmods' job: impostors, LODs and ready-made animations are tricks games have used for years. clixmods has made mods since 2017, such as the Call of Duty: Black Ops III map ",
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ', downloaded over a million times on the Steam Workshop (see the ',
            { link: 'portfolio', text: 'portfolio' },
            ').',
          ],
        ],
      },
      modrinth: {
        q: 'Is it on Modrinth? Why is it unlisted there?',
        a: [
          [
            'It is on ',
            { link: 'modrinth', text: 'Modrinth' },
            ", but unlisted: it does not show in Modrinth's search. Since August 2026, ",
            { link: 'modrinthRules', text: "Modrinth's rules" },
            ' do not allow a project made mainly with AI to be public, so its staff unlisted it. CurseForge, Nexus Mods and the ',
            { link: 'releases', text: 'releases page' },
            ' have the same files.',
          ],
          [
            'Unlisted does not mean unsafe. It is about how the mod is made, not about what it does:',
          ],
          {
            list: [
              [
                'The code is public: anyone can read it in its ',
                { link: 'github', text: 'GitHub repository' },
                '.',
              ],
              ['GitHub builds every release from this code, and its build logs are public.'],
              [
                'The mod has no code of its own that connects to the internet. Player skins come from Mojang through the game, and the Discord link opens only when you click it.',
              ],
            ],
          },
        ],
      },
    }),
    ask: 'Ask on Discord',
    issue: 'Open an issue',
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
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) => p(n, { one: '{n} modpack', other: '{n} modpacks' }),
  },

  modpacks: {
    eyebrow: 'Modpacks',
    title: 'Already in',
    accent: 'modpacks.',
    text: 'Packs that ship Living Horizon. Made one with it? It shows up here on its own.',
    by: (authors: string) => `by ${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `Download on ${platform}`,
    none: 'No modpack ships Living Horizon yet. Yours could be the first.',
    loading: 'The modpacks show up here in a moment.',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) => p(n, { one: 'See the modpacks page', other: 'See all {n} modpacks' }),
  },

  mods: {
    eyebrow: 'Compatibility',
    title: 'Plays well',
    accent: 'with your mods.',
    text: 'Straight from the project on GitHub, updated as tests come in: what works, what has a known issue, and what still waits for someone to try it. Notes are in English.',
    search: 'Search a mod',
    filter: 'Filter by status',
    all: 'All',
    status: { works: 'Works', issue: 'Known issue', untested: 'Not tested yet' },
    /** The heading of the shader packs, after the mods. */
    shaders: 'Shader packs',
    /** The note of every mod still waiting for a tester, next to the link to its issue. */
    untested: 'Nobody has told us how it runs yet. Tried it? Tell us on its issue.',
    issue: (n: number) => `Issue #${n}`,
    none: 'No mod matches your search.',
    missing: {
      title: 'A mod missing from the list?',
      text: 'Tell us how Living Horizon runs with it, good or bad: every report helps.',
      link: 'Report a mod',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: "The list couldn't be loaded right now. It's always on GitHub.",
    failedLink: 'Open the list on GitHub',
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
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: 'Modpack list from', after: '' },
    official:
      'Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.',
  },
};

export type Messages = typeof en;
