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
    news: 'Now on Lodistance, Far View and Ecstatic terrain',
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
    /** The button of each card: it spreads the card across the section, and folds it back. */
    more: 'More details',
    less: 'Fewer details',
    items: {
      mobs: {
        title: 'Every mob, out to the horizon',
        text: "Animals graze on the far hills, villagers wander around distant villages, golems keep watch. Every mob the game can draw, other mods' mobs included.",
        points: [
          'On Voxy, Distant Horizons and other far terrain, or in vanilla',
          'Even in land nobody has explored yet',
          'Hidden behind far hills, shaders included',
        ],
        where: 'Everywhere. On a server with the mod, even mobs you never met.',
        details: details([
          {
            title: 'Real mobs, where they were seen',
            body: [
              [
                'Each distant mob is a real one, shown where your game or the server last saw it. As you come near, the real mob simply takes over. Distant mobs are only for show: they cannot be hit, and farms and spawning work as without the mod.',
              ],
            ],
          },
          {
            title: 'At home on your far terrain',
            body: [
              [
                "With Voxy, Distant Horizons, Lodistance, Far View or Ecstatic, distant mobs walk on its ground, disappear behind its hills and fade into its fog. Without a far-terrain mod, they show past your render distance on the game's own terrain (see ",
                { link: 'compatibilitySection', text: 'Compatibility' },
                ').',
              ],
            ],
          },
          {
            title: 'Even where nobody has been',
            body: [
              [
                "Land you have never visited has its herds too. Living Horizon estimates them from the world's seed, so they may differ, or be gone, once you get there. Look through a spyglass to see them as far as you aim.",
              ],
            ],
          },
          {
            title: 'On a server with the mod',
            body: [
              [
                "You also see the mobs around every other player, even herds you never met. To show estimated mobs farther away, the server's owner can share the world's seed. This is off by default, as the seed reveals the whole world (see the ",
                { link: 'serverSettings', text: 'server settings' },
                ').',
              ],
            ],
          },
          {
            title: 'In the settings',
            body: [
              [
                'Choose which mobs show in ',
                { em: 'Mobs & Entities...' },
                ', and hide the estimated ones with ',
                { em: 'Show Guessed Mobs' },
                '.',
              ],
            ],
          },
        ]),
      },
      players: {
        title: 'Players at any distance',
        text: 'See every other player, wherever they are on the map, with their skin, their gear and whatever they ride.',
        points: [
          'On horseback, in a boat or gliding with an elytra',
          'They move smoothly, even far away',
          'Players without the mod can still join',
        ],
        where: 'On LAN, and on servers with the mod.',
        details: details([
          {
            title: 'Everyone, everywhere',
            body: [
              [
                'On a server with the mod, you see every other player, wherever they are, moving smoothly on their mount, name tag included. In a world opened to LAN, it works with nothing to install.',
              ],
            ],
          },
          {
            title: 'The server owner decides',
            body: [
              [
                'The owner chooses how far players are shown, whether only teammates see each other, and which players or dimensions stay hidden. Showing distant players can also be turned off entirely (see the ',
                { link: 'serverSettings', text: 'server settings' },
                ').',
              ],
            ],
          },
          {
            title: 'Never shown',
            body: [
              [
                'Players in spectator mode and invisible players are never shown far away. Sneaking players still are, for now (',
                { link: 'sneaking', text: '#269' },
                ').',
              ],
            ],
          },
          {
            title: 'In the settings',
            body: [
              [
                { em: 'Player Render Distance' },
                ' sets how far players show, and ',
                { em: 'Show Players' },
                ' turns them off.',
              ],
            ],
          },
        ]),
      },
      offline: {
        title: 'Players who logged off live on',
        text: 'When someone logs off, a copy of them stays where they left. It strolls, sits, fishes and sleeps at night, until they come back.',
        points: [
          'Their name, with (offline) and when they were last seen',
          'Even players who left before you joined',
          'Only for show: walk into them to push them aside',
        ],
        where: 'Everywhere. On a server with the mod, every player who ever played there.',
        details: details([
          {
            title: 'A life of their own',
            body: [
              [
                'By day they stroll, sit down or busy themselves at a chest. At night they go to bed. They fish by the water, take shelter from the rain, gather by a campfire in the evening and chat in pairs.',
              ],
            ],
          },
          {
            title: 'They notice you',
            body: [
              [
                'Look at one from close by and it looks back at you. Crouch, and it crouches too. When monsters come near, they raise their shield, but they never fight.',
              ],
            ],
          },
          {
            title: 'Only for show',
            body: [
              [
                'The world does not know they exist: mobs ignore them and they never block your way. Walk into them to push them aside.',
              ],
            ],
          },
          {
            title: 'On a server with the mod',
            body: [
              [
                'You see every player who ever played there, as they looked, even those who left before you joined. Elsewhere, you see the players you saw leave.',
              ],
            ],
          },
          {
            title: 'In the settings',
            body: [
              [
                { em: 'Offline Players' },
                ' shows or hides them, and ',
                { em: 'Offline Player Activity' },
                ' turns their life around their spot on or off.',
              ],
            ],
          },
        ]),
      },
      birds: {
        title: 'Birds in the sky',
        text: 'Flocks, geese in a V, birds of prey, gulls and ducks fill the sky, and you see them from far away.',
        points: [
          'They land on trees, roofs, fields and beaches',
          'Ducks swim on ponds and rivers',
          'Nothing added to your world',
        ],
        where: 'Everywhere, nothing to set up.',
        details: details([
          {
            title: 'Birds of every kind',
            body: [
              [
                'From geese flying in a V to ducks on the ponds, each kind lives where it belongs: in the trees, over the coast, on the roofs, in the fields. Bats come out at night.',
              ],
            ],
          },
          {
            title: 'They react to you',
            body: [
              [
                'Come close and they fly off to land a little farther away. They never vanish at once: they scatter and fly off.',
              ],
            ],
          },
          {
            title: 'Only on your screen',
            body: [
              [
                'Birds are drawn by your game alone: nothing is added to your world, and they cost very little.',
              ],
            ],
          },
          {
            title: 'In the settings',
            body: [
              [
                { em: 'Show Birds' },
                ' turns them on or off, and ',
                { em: 'Bird Types...' },
                ' lets you choose which kinds fly.',
              ],
            ],
          },
        ]),
      },
      light: {
        title: 'Built to stay light',
        text: 'Distant mobs play simple ready-made animations instead of thinking, and very far away they become light images of themselves.',
        points: [
          'Mobs hidden behind hills are not drawn',
          'Lower your simulation distance and keep a living world',
          'Many more mobs for the same cost',
        ],
        where: 'Everything runs on your game. The server only shares positions.',
        details: details([
          {
            title: 'Simple animations far away',
            body: [
              [
                'Distant mobs have no AI: they walk, graze and look around with animations that fit the ground. Your game does not have to run them, so it stays fast.',
              ],
            ],
          },
          {
            title: 'Simplified images',
            body: [
              [
                'Like many games, Living Horizon draws distant mobs, vehicles and players as light images instead of full 3D models. At that distance they look the same, for a fraction of the cost. With a shader pack such as Photon, the images are lit like the rest of the world.',
              ],
            ],
          },
          {
            title: 'A living world for less',
            body: [
              [
                'Mobs hidden behind hills or far terrain are not drawn at all. Lower your simulation distance to gain frames, and still see a living world around you. A server with the mod has very little to do: your game handles everything you see.',
              ],
            ],
          },
          {
            title: 'Presets',
            body: [
              [
                'Pick a ',
                { em: 'Preset' },
                ', from ',
                { em: 'Low' },
                ' to ',
                { em: 'Ultra' },
                ", to set everything at once; the defaults are the balanced choice. The settings are in the Options screen, Mod Menu and Sodium's Video Settings, in 14 languages.",
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
      unexplored: 'Mobs guessed from the seed',
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
    issue: (n: number) => `Issue #${n}`,
    /** A link that only shows the platform's logo. */
    page: (platform: string) => `${platform} page`,
    /**
     * The mods the modpacks that ship Living Horizon ship too: a pack runs them together, so
     * they work with it.
     */
    packs: {
      title: 'In modpacks with Living Horizon',
      chip: 'In modpacks',
      text: 'The modpacks that ship Living Horizon run it with these mods too.',
      count: (n: number) => p(n, { one: 'In {n} modpack', other: 'In {n} modpacks' }),
      more: (n: number) => p(n, { one: 'Show {n} more mod', other: 'Show {n} more mods' }),
    },
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
