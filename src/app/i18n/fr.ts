import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

const p = plural('fr');

export const fr: Messages = {
  meta: {
    title: 'Living Horizon : donne vie au lointain',
    description:
      "Living Horizon est un mod Minecraft qui garde les mobs, les villageois, les oiseaux et les autres joueurs en vie à l'horizon, au-delà de ta distance d'affichage et sur le terrain lointain de Distant Horizons et Voxy. En solo, en LAN et sur serveur. Fabric, Quilt, NeoForge et Forge. En bêta.",
  },

  language: {
    label: 'Langue',
  },

  common: {
    download: 'Télécharger',
    becomeTester: 'Devenir testeur',
    needsTesters: 'Testeurs recherchés',
    tested: 'Testé',
    seenWorking: 'Vu fonctionner dans un monde',
    new: 'Nouveau',
    beta: 'Bêta',
    changelog: 'Mises à jour',
    logo: (name: string) => `Logo ${name}`,
  },

  nav: {
    label: 'Principal',
    tag: 'bêta',
    menu: 'Menu',
    features: 'Fonctionnalités',
    mods: 'Mods',
    modpacks: 'Modpacks',
    faq: 'FAQ',
    download: (version: string) => `Télécharger v${version}`,
  },

  pages: {
    mods: {
      title: 'Mods compatibles',
      description:
        'Comment Living Horizon fonctionne avec les autres mods Minecraft : terrain lointain, shaders, performances et mods de créatures. Ce qui marche, ce qui a un problème connu, et ce qui attend un testeur.',
    },
    modpacks: {
      title: 'Modpacks',
      description:
        'Les modpacks Minecraft qui embarquent Living Horizon, avec leurs liens de téléchargement sur CurseForge et Modrinth.',
    },
    changelog: {
      title: 'Mises à jour',
      description: 'Chaque version de Living Horizon et ce qui a changé.',
    },
  },

  hero: {
    scene:
      "Illustration : un horizon au crépuscule, fait de collines en blocs où villageois, animaux, cavaliers et autres joueurs sont toujours en vie au loin, sous un vol d'oies.",
    news: 'Désormais sur le terrain de Lodistance, Far View et Ecstatic',
    tagline: 'Donne vie',
    taglineAccent: 'au lointain.',
    lede: {
      before:
        "Animaux, villageois, oiseaux et autres joueurs continuent de vivre à l'horizon, bien au-delà de ta distance d'affichage, directement sur le terrain lointain de",
      between: 'et',
      after: ', ou en vanilla. En solo, en LAN et sur serveur.',
    },
    facts: 'Le projet en bref',
    latest: 'Dernière version',
    updated: 'Mis à jour',
    downloads: 'Téléchargements',
    minecraft: 'Minecraft',
    loaders: 'Loaders',
  },

  concept: {
    eyebrow: 'Le principe',
    title: "Ta distance d'affichage s'arrête.",
    accent: 'Le monde, non.',
    text: "Minecraft arrête d'afficher les mobs et les joueurs à quelques chunks de toi. Les mods de terrain lointain étirent le paysage jusqu'à l'horizon, mais il reste vide et figé. Living Horizon lui redonne vie.",
    diagram:
      "Schéma : sans Living Horizon, les mobs n'existent que dans ta distance d'affichage et le terrain lointain est vide. Avec, les mobs, les joueurs et les oiseaux vivent sur tout le terrain lointain, jusqu'à l'horizon.",
    you: 'Toi',
    renderDistance: "Ta distance d'affichage",
    farTerrain: 'Terrain lointain ·',
    horizon: 'Horizon',
    without: { before: '', mark: 'Sans', after: 'Living Horizon' },
    with: { before: '', mark: 'Avec', after: 'Living Horizon' },
    empty: 'vide',
  },

  features: {
    eyebrow: 'Fonctionnalités',
    title: 'Tout ce qui vit',
    accent: "au-delà de ta distance d'affichage.",
    text: 'Les mobs, les joueurs, les joueurs déconnectés et les oiseaux, dessinés par ton propre jeu, et assez légers pour tout laisser activé.',
    offline: '(hors ligne)',
    near: 'De près : le mob complet',
    far: 'De loin : une image plate',
    more: 'Plus de détails',
    less: 'Moins de détails',
    items: {
      mobs: {
        title: "Toutes les créatures, jusqu'à l'horizon",
        text: 'Les animaux broutent sur les collines lointaines, les villageois flânent autour des villages au loin, les golems montent la garde. Toutes les créatures du jeu sont là, même celles des autres mods.',
        points: [
          "Avec Voxy, Distant Horizons et d'autres mods de terrain lointain, ou en vanilla",
          "Même sur les terres que personne n'a encore explorées",
          'Cachées derrière les collines lointaines, même avec des shaders',
        ],
        where:
          "Partout. Sur un serveur avec le mod, même les créatures que tu n'as jamais croisées.",
        details: details([
          {
            title: 'De vraies créatures, là où elles ont été vues',
            body: [
              [
                "Chaque créature lointaine est une vraie créature, affichée là où ton jeu ou le serveur l'a vue pour la dernière fois. Quand tu t'approches, la vraie créature prend simplement le relais. Les créatures lointaines sont juste pour le décor : tu ne peux pas les frapper, et les fermes et l'apparition des créatures fonctionnent comme sans le mod.",
              ],
            ],
          },
          {
            title: 'Chez elles sur ton terrain lointain',
            body: [
              [
                "Avec Voxy, Distant Horizons, Lodistance, Far View ou Ecstatic, les créatures lointaines marchent sur son sol, disparaissent derrière ses collines et se fondent dans son brouillard. Sans mod de terrain lointain, elles apparaissent au-delà de ta distance d'affichage, sur le terrain du jeu (voir ",
                { link: 'compatibilitySection', text: 'Compatibilité' },
                ').',
              ],
            ],
          },
          {
            title: "Même là où personne n'est allé",
            body: [
              [
                "Les terres que tu n'as jamais visitées ont aussi leurs troupeaux. Living Horizon les estime à partir de la seed du monde : une fois sur place, ils peuvent donc être différents, ou avoir disparu. Regarde dans une longue-vue pour les voir aussi loin que tu vises.",
              ],
            ],
          },
          {
            title: 'Sur un serveur avec le mod',
            body: [
              [
                "Tu vois aussi les créatures autour de tous les autres joueurs, même des troupeaux que tu n'as jamais croisés. Pour afficher les créatures estimées plus loin, le propriétaire du serveur peut partager la seed du monde. C'est désactivé par défaut, car la seed révèle le monde entier (voir les ",
                { link: 'serverSettings', text: 'réglages du serveur' },
                ').',
              ],
            ],
          },
          {
            title: 'Dans les réglages',
            body: [
              [
                "Choisis quelles créatures s'affichent dans ",
                { em: 'Créatures et entités...' },
                ', et masque les créatures estimées avec ',
                { em: 'Créatures devinées' },
                '.',
              ],
            ],
          },
        ]),
      },
      players: {
        title: 'Les joueurs, à toute distance',
        text: "Tu vois tous les autres joueurs, où qu'ils soient sur la carte, avec leur skin, leur équipement et leur monture.",
        points: [
          'À cheval, en bateau ou en plein vol avec des élytres',
          'Ils se déplacent avec fluidité, même au loin',
          "Les joueurs qui n'ont pas le mod peuvent quand même se connecter",
        ],
        where: 'En LAN, et sur les serveurs avec le mod.',
        details: details([
          {
            title: 'Tout le monde, partout',
            body: [
              [
                "Sur un serveur avec le mod, tu vois tous les autres joueurs où qu'ils soient, avec leur pseudo, se déplacer avec fluidité sur leur monture. Dans un monde ouvert en LAN, ça marche sans rien installer.",
              ],
            ],
          },
          {
            title: 'Le propriétaire du serveur décide',
            body: [
              [
                "Il choisit jusqu'où les joueurs s'affichent, si seuls les coéquipiers se voient entre eux, et quels joueurs ou dimensions restent cachés. Il peut aussi désactiver complètement l'affichage des joueurs lointains (voir les ",
                { link: 'serverSettings', text: 'réglages du serveur' },
                ').',
              ],
            ],
          },
          {
            title: 'Jamais affichés',
            body: [
              [
                "Les joueurs en mode spectateur et les joueurs invisibles ne sont jamais affichés au loin. Les joueurs accroupis, eux, le sont encore pour l'instant (",
                { link: 'sneaking', text: '#269' },
                ').',
              ],
            ],
          },
          {
            title: 'Dans les réglages',
            body: [
              [
                { em: "Distance d'affichage des joueurs" },
                " règle jusqu'où les joueurs s'affichent, et ",
                { em: 'Afficher les joueurs' },
                ' permet de les masquer.',
              ],
            ],
          },
        ]),
      },
      offline: {
        title: 'Les joueurs déconnectés continuent de vivre',
        text: "Quand quelqu'un se déconnecte, une copie de lui reste là où il est parti. Elle se promène, s'assoit, pêche et dort la nuit, jusqu'à son retour.",
        points: [
          'Leur pseudo, avec (hors ligne) et la date de leur dernier passage',
          'Même ceux qui sont partis avant ton arrivée',
          'Juste pour le décor : bouscule-les pour les écarter',
        ],
        where: 'Partout. Sur un serveur avec le mod, tous les joueurs qui y ont déjà joué.',
        details: details([
          {
            title: 'Une vie à eux',
            body: [
              [
                "Le jour, ils se promènent, s'assoient ou s'affairent devant un coffre. La nuit, ils vont se coucher. Ils pêchent au bord de l'eau, s'abritent de la pluie, se retrouvent le soir autour d'un feu de camp et discutent à deux.",
              ],
            ],
          },
          {
            title: 'Ils te remarquent',
            body: [
              [
                "Regarde-en un de près et il te regarde à son tour. Accroupis-toi, et il s'accroupit aussi. Quand des monstres approchent, ils lèvent leur bouclier, mais ne se battent jamais.",
              ],
            ],
          },
          {
            title: 'Juste pour le décor',
            body: [
              [
                "Le monde ne sait pas qu'ils existent : les créatures les ignorent et ils ne te barrent jamais la route. Bouscule-les pour les écarter.",
              ],
            ],
          },
          {
            title: 'Sur un serveur avec le mod',
            body: [
              [
                "Tu vois tous les joueurs qui y ont déjà joué, tels qu'ils étaient, même ceux partis avant ton arrivée. Ailleurs, tu vois les joueurs que tu as vus partir.",
              ],
            ],
          },
          {
            title: 'Dans les réglages',
            body: [
              [
                { em: 'Joueurs déconnectés' },
                ' les affiche ou les masque, et ',
                { em: 'Vie des déconnectés' },
                " active ou désactive leur vie autour de l'endroit où ils sont partis.",
              ],
            ],
          },
        ]),
      },
      birds: {
        title: 'Des oiseaux dans le ciel',
        text: 'Des volées, des oies en V, des rapaces, des mouettes et des canards animent le ciel, et tu les vois de très loin.',
        points: [
          'Ils se posent sur les arbres, les toits, les champs et les plages',
          'Les canards nagent sur les mares et les rivières',
          "Rien n'est ajouté à ton monde",
        ],
        where: 'Partout, rien à régler.',
        details: details([
          {
            title: 'Des oiseaux de toutes sortes',
            body: [
              [
                'Des oies qui volent en V aux canards sur les mares, chaque espèce est à sa place : dans les arbres, au-dessus de la côte, sur les toits, dans les champs. Les chauves-souris sortent la nuit.',
              ],
            ],
          },
          {
            title: 'Ils réagissent à toi',
            body: [
              [
                "Approche-toi et ils s'envolent pour se poser un peu plus loin. Ils ne disparaissent jamais d'un coup : ils s'éparpillent et s'éloignent.",
              ],
            ],
          },
          {
            title: 'Seulement sur ton écran',
            body: [
              [
                "Les oiseaux n'existent que dans ton jeu : rien n'est ajouté à ton monde, et ils ne coûtent presque rien.",
              ],
            ],
          },
          {
            title: 'Dans les réglages',
            body: [
              [
                { em: 'Afficher les oiseaux' },
                ' les active ou les désactive, et ',
                { em: "Types d'oiseaux..." },
                ' te laisse choisir quelles espèces volent.',
              ],
            ],
          },
        ]),
      },
      light: {
        title: 'Pensé pour rester léger',
        text: "Les créatures lointaines ne réfléchissent pas : elles jouent des animations simples, toutes prêtes. Très loin, elles deviennent des images simplifiées d'elles-mêmes, bien plus légères.",
        points: [
          'Les créatures cachées derrière les collines ne sont pas dessinées',
          'Baisse ta distance de simulation et garde un monde vivant',
          'Bien plus de créatures pour le même coût',
        ],
        where: 'Tout tourne sur ton jeu. Le serveur ne fait que partager des positions.',
        details: details([
          {
            title: 'Des animations simples au loin',
            body: [
              [
                "Les créatures lointaines n'ont pas d'IA : elles marchent, broutent et regardent autour d'elles avec des animations adaptées au terrain. Ton jeu n'a pas à les faire réfléchir, il reste donc fluide.",
              ],
            ],
          },
          {
            title: 'Des images simplifiées',
            body: [
              [
                "Comme beaucoup de jeux, Living Horizon affiche les créatures, les véhicules et les joueurs lointains sous forme d'images légères plutôt qu'en modèles 3D complets. À cette distance, on ne voit pas la différence, pour une fraction du coût. Avec un pack de shaders comme Photon, ces images sont éclairées comme le reste du monde.",
              ],
            ],
          },
          {
            title: 'Un monde vivant à moindre coût',
            body: [
              [
                "Les créatures cachées derrière les collines ou le terrain lointain ne sont pas dessinées du tout. Baisse ta distance de simulation pour gagner des FPS, tout en gardant un monde vivant autour de toi. Un serveur avec le mod n'a presque rien à faire : ton jeu s'occupe de tout ce que tu vois.",
              ],
            ],
          },
          {
            title: 'Préréglages',
            body: [
              [
                'Choisis un ',
                { em: 'Préréglage' },
                ', de ',
                { em: 'Bas' },
                ' à ',
                { em: 'Ultra' },
                ", pour tout régler d'un coup ; les valeurs par défaut sont le bon équilibre. Les réglages sont dans l'écran Options, Mod Menu et les Paramètres vidéo de Sodium, en 14 langues.",
              ],
              [
                'Attention : mettre ',
                { em: 'Créatures max' },
                ' et ',
                { em: "Distance d'affichage des créatures" },
                ' sur ',
                { em: 'Illimité' },
                ' en même temps peut faire planter le jeu.',
              ],
            ],
          },
        ]),
      },
    },
  },

  compare: {
    eyebrow: 'Avant / après',
    title: 'Même vue.',
    accent: 'Un seul mod.',
    text: 'Fais glisser la poignée. À gauche, le terrain lointain est là, mais vide. À droite, Living Horizon lui redonne vie.',
    tabs: 'Scènes',
    shots: {
      shaders: {
        title: 'En jeu · Shaders',
        text: "Avec un pack de shaders, distance d'affichage et de simulation à 12 : les animaux sont de retour sur les collines lointaines.",
      },
      vanilla: {
        title: 'En jeu · Vanilla',
        text: "Sans shaders, distance d'affichage et de simulation à 12 : des troupeaux de vaches et de chevaux remplissent les plaines lointaines.",
      },
    },
    scenes: {
      village: {
        title: 'Village dans les plaines',
        text: "Des villageois, un golem et des animaux qui broutent autour d'un village lointain.",
      },
      ridge: {
        title: 'Cavaliers sur la crête',
        text: "D'autres joueurs et leurs chevaux sur les collines, pseudo au-dessus de la tête.",
      },
      coast: {
        title: 'La côte à midi',
        text: "Des bateaux au large, des villageois sur la rive d'en face, des mouettes au-dessus de l'eau.",
      },
    },
    legendNear: "Ta distance d'affichage : vivante dans les deux cas",
    legendFar: 'Terrain lointain : vide sans le mod',
    note: {
      before:
        "Illustration stylisée de l'effet. Les premiers onglets sont de vraies captures d'écran en jeu. Tu en as une belle ?",
      link: 'Partage-la sur Discord',
      after: '.',
    },
    shotWithout: (text: string) => `Capture d'écran en jeu sans Living Horizon. ${text}`,
    shotWith: (text: string) => `Capture d'écran en jeu avec Living Horizon. ${text}`,
    sceneWithout: (text: string) => `Sans Living Horizon : ${text}`,
    sceneWith: (text: string) => `Avec Living Horizon : ${text}`,
    badgeWithout: 'Sans le mod',
    badgeWith: 'Avec Living Horizon',
    slider: 'Déplace pour comparer la vue sans et avec Living Horizon',
  },

  servers: {
    eyebrow: 'Multijoueur',
    title: 'Mets-le sur ton serveur.',
    accent: 'Tout le monde voit tout le monde.',
    text: 'Le même jar tourne sur les serveurs. Le serveur partage où se trouve chaque joueur, les mobs autour de lui et les joueurs déconnectés, avec tous ceux qui ont le mod.',
    cover: 'Le titre Living Horizon devant une foule de têtes de joueurs et de mobs.',
    matrixTitle: 'Ce que tu vois, selon où tu joues',
    matrixText: "Tout marche en solo. Sur un serveur, c'est le mod côté serveur qui fait le reste.",
    matrixLabel: 'Fonctionnalités selon le mode de jeu',
    feature: 'Fonctionnalité',
    places: ['Solo', 'Monde LAN', 'Serveur avec le mod', 'Serveur sans le mod'],
    rows: {
      mobs: "Mobs à l'horizon",
      players: 'Joueurs à toute distance',
      offline: 'Joueurs déconnectés',
      unexplored: 'Mobs devinés à partir de la graine',
      birds: 'Oiseaux',
    },
    cells: {
      mobsMet: 'Seulement les mobs croisés',
      offlineEven: 'Même ceux partis avant ton arrivée',
      offlineSeen: 'Seulement ceux que tu as vus partir',
    },
    yes: 'Oui',
    no: 'Non',
    noOthers: "Pas d'autres joueurs",
    notApplicable: 'Sans objet',
    notes: {
      install: {
        title: 'Mets le jar dans le dossier mods du serveur',
        text: 'Le même fichier que pour ton jeu, plus la Fabric API sur Fabric et Quilt. Rien à régler.',
      },
      lan: {
        title: 'LAN : rien à installer',
        text: "Un monde ouvert au LAN partage tout via le jeu de l'hôte.",
      },
      join: {
        title: 'Tout le monde peut rejoindre',
        text: 'Les joueurs sans le mod peuvent toujours rejoindre. Le serveur ne leur envoie rien.',
      },
      tell: {
        title: 'Préviens tes joueurs',
        text: 'Le serveur partage la position de chaque joueur avec les joueurs qui ont le mod.',
      },
    },
  },

  compatibility: {
    eyebrow: 'Compatibilité',
    title: 'Distant Horizons, Voxy, Ecstatic…',
    accent: 'ou rien du tout.',
    text: "Living Horizon détecte tout seul ton mod de terrain lointain : les mobs et les joueurs marchent sur son sol, se cachent derrière ses collines et se fondent dans son brouillard. Sans lui, il garde le monde vivant au-delà de ta distance d'affichage.",
    cards: {
      dh: {
        text: 'À partir de la 2.3. Les mobs et les joueurs sur son terrain, derrière ses collines.',
      },
      voxy: { text: 'Les mobs et les joueurs sur son terrain, même avec un pack de shaders.' },
      lodistance: { text: 'Fabric, Minecraft 26.3, avec OpenGL et sans shaders.' },
      farView: { text: 'Forge et NeoForge, Minecraft 1.20.1 à 1.21.4. Les mobs sur son terrain.' },
      ecstatic: { text: 'NeoForge, Minecraft 1.21.1, en solo. Les mobs sur son terrain.' },
      bobby: {
        text: "Les mobs et les joueurs sur le terrain qu'il garde au-delà de la distance d'affichage du serveur.",
      },
      iris: { text: 'Les packs de shaders marchent, comme Photon et Complementary Unbound.' },
      vanilla: {
        title: 'Vanilla',
        text: "Pas besoin de mod de terrain lointain : baisse ta distance d'affichage et de simulation, et vois quand même un monde vivant.",
      },
    },
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: 'Et tes autres mods ?',
      text: (n: number) =>
        p(n, {
          one: '{n} mod listé : shaders, performances, mods de créatures. Ce qui marche, et ce qui attend encore un testeur.',
          many: '{n} de mods listés : shaders, performances, mods de créatures. Ce qui marche, et ce qui attend encore un testeur.',
          other:
            '{n} mods listés : shaders, performances, mods de créatures. Ce qui marche, et ce qui attend encore un testeur.',
        }),
      link: 'Voir les mods compatibles',
    },
    matrixTitle: 'Versions de Minecraft et loaders',
    matrixText: 'Un jar par version du jeu et par loader.',
    report: 'Tu en as testé un ? Dis-le-nous',
    builds: (builds: number, range: string) =>
      p(builds, {
        one: `{n} build, pour ${range}.`,
        many: `{n} de builds, pour ${range}.`,
        other: `{n} builds, pour ${range}.`,
      }),
    keyUntested: 'Se lance, testeurs recherchés',
    table: 'Tableau de compatibilité',
    untested: 'Se lance dans le jeu, pas encore vu fonctionner dans un monde',
    noBuild: 'Pas de build',
    notAvailable: 'Non disponible',
    fallback: (range: string) =>
      `Minecraft ${range} sur Fabric, Quilt, NeoForge (1.20.6 et plus) et Forge.`,
    fullTable: 'Tableau complet sur GitHub',
    loaders: {
      fabric: 'Avec la Fabric API. Mod Menu en option.',
      quilt: 'Avec la Fabric API (QFAPI).',
      neoforge: "À partir de Minecraft 1.20.6, rien d'autre à installer.",
      forge: "Rien d'autre à installer.",
    },
  },

  help: {
    eyebrow: 'Participer',
    title: 'Une bêta,',
    accent: 'construite avec ses joueurs.',
    test: {
      title: 'Teste-le sur ta config',
      text: 'Dis-nous comment il tourne sur ta version du jeu, ton loader et tes mods, en bien comme en mal. Chaque retour aide.',
      untested: (n: number) =>
        p(n, {
          one: '{n} build attend encore un premier testeur',
          many: '{n} de builds attendent encore un premier testeur',
          other: '{n} builds attendent encore un premier testeur',
        }),
      report: 'Faire un retour',
    },
    code: {
      title: 'Contribuer',
      text: "Le code, les corrections et les traductions arrivent sous forme de pull requests sur GitHub. L'IA est la bienvenue, tant que tu lis, comprends et testes ce qu'elle écrit.",
      guide: 'Guide de contribution',
    },
    discord: {
      title: 'Rejoins le Discord',
      text: "Questions, nouveautés, captures d'écran et entraide, avec l'auteur et d'autres joueurs.",
      join: 'Rejoindre le Discord',
    },
  },

  changelog: {
    eyebrow: 'Dernières mises à jour',
    title: 'Des sorties fréquentes,',
    accent: 'des correctifs rapides.',
    text: 'Directement tiré du journal des modifications du projet, sur GitHub.',
    textEnglish: 'Directement tiré du journal des modifications du projet, sur GitHub, en anglais.',
    latest: 'Dernière',
    release: 'Release',
    sides: { server: 'Serveur', client: 'Client' },
    kinds: { new: 'Nouveautés', improved: 'Améliorations', fixed: 'Corrections' },
    more: (n: number) =>
      p(n, {
        one: 'Voir {n} autre changement',
        many: "Voir {n} d'autres changements",
        other: 'Voir {n} autres changements',
      }),
    failed:
      "Impossible de charger le journal des modifications pour l'instant. Il est toujours sur GitHub.",
    full: 'Journal complet sur GitHub',
    releases: 'Toutes les releases',
    /** The link to the changelog page, on the home page. */
    every: 'Voir toutes les versions',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Des questions ?',
    accent: 'Des réponses.',
    text: 'Ce que les joueurs demandent le plus souvent. Pour le reste, demande sur le Discord.',
    groups: {
      how: 'Comment ça marche',
      compatibility: 'Compatibilité',
      performance: 'Performances et réglages',
      multiplayer: 'Multijoueur',
      downloads: 'Téléchargements et licence',
      ai: 'IA',
    },
    questions: questions({
      visual: {
        q: "C'est seulement visuel ? Ça casse les fermes à mobs ?",
        a: [
          [
            "C'est seulement visuel, sans IA. Les vrais mobs marchent comme sans le mod : les fermes, l'apparition des mobs et leur limite ne changent pas. Tu ne peux pas frapper un mob lointain.",
          ],
        ],
      },
      real: {
        q: 'Les mobs lointains sont-ils de vrais mobs, ou placés au hasard ?',
        a: [
          [
            "Ce sont de vrais mobs, là où ton jeu ou le serveur les a vus pour la dernière fois. Un mob mort ou disparu depuis peut encore s'afficher jusqu'à ce que tu t'en approches. Il est alors oublié.",
          ],
        ],
      },
      simulation: {
        q: "Quelle différence avec une distance de simulation ou d'entités plus grande ?",
        a: [
          [
            "Une distance de simulation plus grande fait tourner plus de vrais mobs au serveur, ce qui coûte cher, et le serveur ne les envoie quand même que jusqu'à une certaine distance. Living Horizon dessine des copies que le serveur ne fait pas tourner. Elles jouent des animations toutes prêtes, et de loin elles deviennent des images plates (",
            { em: 'Entités simplifiées' },
            ').',
          ],
        ],
      },
      range: {
        q: "Jusqu'où il affiche les mobs et les joueurs ?",
        a: [
          [
            "Les mobs : 512 blocs par défaut, jusqu'à ",
            { em: 'Illimitée' },
            ' avec ',
            { em: "Distance d'affichage des créatures" },
            ". Les joueurs, les bateaux et les véhicules : à n'importe quelle distance par défaut, ce que ",
            { em: "Distance d'affichage des joueurs" },
            ' et ',
            { em: "Distance d'affichage des entités" },
            " peuvent limiter. Un mob ne s'affiche qu'une fois que ton jeu ou le serveur l'a vu.",
          ],
        ],
      },
      mods: {
        q: 'Ça marche avec mon mod ?',
        a: [
          [
            'Très probablement. Voxy, Distant Horizons, Lodistance, Ecstatic, Bobby, Sodium, Iris et les packs de shaders marchent avec (voir ',
            { link: 'compatibilitySection', text: 'Compatibilité' },
            "). Living Horizon ajoute seulement ses propres silhouettes : il ne change pas la façon dont les autres mods dessinent le monde. Les mods pas encore testés sont listés sous l'étiquette ",
            { link: 'modCompatibility', text: 'mod compatibility' },
            ' sur GitHub. Si quelque chose casse, ouvre une ',
            { link: 'issues', text: 'issue' },
            ' avec le nom du mod et sa version.',
          ],
        ],
      },
      modMobs: {
        q: "Les mobs des autres mods s'affichent-ils de loin ?",
        a: [
          [
            "Oui, tant qu'ils utilisent le système d'entités de Minecraft. Si les entités d'un mod marchent trop différemment, demande qu'il soit pris en charge dans une ",
            { link: 'issues', text: 'issue' },
            ' ou sur le ',
            { link: 'discord', text: 'Discord' },
            '.',
          ],
        ],
      },
      farTerrain: {
        q: "J'ai besoin de Voxy, de Distant Horizons, de Lodistance ou d'Ecstatic ?",
        a: [
          [
            "Non. Sans eux, les mobs et les joueurs lointains s'affichent sur le terrain du jeu, jusqu'à ta distance d'affichage. Avec l'un d'eux, ils s'affichent aussi sur son terrain lointain.",
          ],
        ],
      },
      frameRate: {
        q: 'Ça va baisser mes FPS ?',
        a: [
          [
            "Dessiner plus d'entités coûte des FPS. Si ton jeu ralentit, garde ",
            { em: 'Créatures simplifiées' },
            ' et ',
            { em: 'Entités simplifiées' },
            ' activés et choisis un ',
            { em: 'Préréglage' },
            ' plus bas. ',
            { em: 'Créatures max' },
            ' et ',
            { em: "Distance d'affichage des créatures" },
            ' tous les deux sur ',
            { em: 'Illimité' },
            ' peuvent faire planter le jeu.',
          ],
        ],
      },
      choose: {
        q: "Je peux choisir ce qui s'affiche ?",
        a: [
          [
            'Oui. ',
            { em: 'Afficher les créatures' },
            ', ',
            { em: 'Afficher les joueurs' },
            ', ',
            { em: 'Joueurs déconnectés' },
            ' et ',
            { em: 'Afficher les oiseaux' },
            ' activent ou désactivent chaque partie. ',
            { em: 'Créatures et entités...' },
            ' permet de choisir mob par mob.',
          ],
        ],
      },
      world: {
        q: 'Ça modifie mon monde ou ça charge des chunks ?',
        a: [
          [
            'Non. Il ne change rien à ton monde et ne charge aucun chunk. Il garde ce dont il se souvient dans ses propres fichiers : dans le dossier ',
            { code: 'config' },
            ', et dans ',
            { code: 'livinghorizon-positions.dat' },
            ' dans le dossier du monde pour ce que partage le serveur. Retirer le mod laisse ton monde tel quel.',
          ],
          ["Sur un serveur, le mod n'envoie les positions qu'aux joueurs qui l'ont."],
        ],
      },
      server: {
        q: 'Le serveur a besoin du mod ?',
        a: [
          [
            "Non. Presque tout marche en solo, et tu peux rejoindre n'importe quel serveur avec. Mais les joueurs à n'importe quelle distance demandent le mod sur le serveur, qui partage alors plus de mobs et les joueurs déconnectés. Voir ",
            { link: 'serversSection', text: 'Multijoueur' },
            '.',
          ],
        ],
      },
      paper: {
        q: 'Ça marche sur les serveurs Paper ou Spigot ?',
        a: [
          [
            "Tu peux y jouer avec le mod, comme sur n'importe quel serveur sans lui. Le côté serveur ne tourne que sur Fabric, Quilt, NeoForge et Forge : un serveur Paper ou Spigot ne partage donc rien. Un plugin pour Paper est en discussion dans ",
            { link: 'paperPlugin', text: '#156' },
            '.',
          ],
        ],
      },
      nothing: {
        q: 'Je ne vois aucun mob ni joueur lointain. Pourquoi ?',
        a: [
          {
            list: [
              [
                'Les joueurs lointains demandent le mod sur le serveur. Son propriétaire peut aussi limiter qui est partagé (voir les ',
                { link: 'serverSettings', text: 'réglages du serveur' },
                ').',
              ],
              ["Sur un serveur sans le mod, seuls les mobs que tu as croisés s'affichent."],
            ],
          },
        ],
      },
      cheat: {
        q: 'Ça peut servir à tricher ? Est-ce autorisé sur les serveurs ?',
        a: [
          [
            "Il ne montre les autres joueurs que là où le serveur le permet. Les joueurs lointains ne s'affichent que sur un serveur qui a le mod, et son propriétaire choisit ce qu'il partage : jusqu'où, avec les coéquipiers seulement, et quels joueurs et dimensions restent cachés. ",
            { code: '"sharePlayers": false' },
            ' le désactive (voir les ',
            { link: 'serverSettings', text: 'réglages du serveur' },
            '). Les joueurs invisibles et en mode spectateur ne sont jamais partagés. Les joueurs accroupis le sont, pour le moment (',
            { link: 'sneaking', text: '#269' },
            ').',
          ],
          [
            "Sur les autres serveurs, tu ne vois que ce que ton propre jeu a vu. Le mod n'envoie rien au serveur. Chaque serveur a quand même ses propres règles sur les mods : demande à son équipe.",
          ],
        ],
      },
      bedrock: {
        q: 'Il existe une version Bedrock ?',
        a: [['Non. Living Horizon est un mod pour Minecraft Java Edition.']],
      },
      version: {
        q: "Ma version du jeu n'est pas prise en charge. Elle le sera ?",
        a: [
          [
            'Dis sur le ',
            { link: 'discord', text: 'Discord' },
            ' quelle version et quel loader tu joues. Ça aide à choisir la suite.',
          ],
        ],
      },
      modpack: {
        q: 'Je peux le mettre dans un modpack ?',
        a: [['Oui. Utilise le fichier officiel et crédite-le.']],
      },
      abandoned: {
        q: 'Et si le projet est abandonné ?',
        a: [
          [
            "La licence le prévoit. Une fois le projet déclaré abandonné (son dépôt archivé, ou son README qui le dit), sa licence devient la GPL : n'importe qui peut reprendre le projet, en le créditant. Voir la section 5 de la ",
            { link: 'license', text: 'licence' },
            '.',
          ],
        ],
      },
      ai: {
        q: "Il a été fait avec de l'IA ?",
        a: [
          [
            "Oui, en partie. L'IA écrit une grande partie du code. L'auteur, clixmods, décide comment le mod fonctionne, teste chaque changement en jeu et corrige ce qui ne va pas. Sans l'IA, un projet de cette taille n'existerait pas.",
          ],
          [
            'Les idées viennent du développement de jeux vidéo, le métier de clixmods : les impostors, les LOD et les animations toutes prêtes sont des astuces que les jeux utilisent depuis des années. clixmods fait des mods depuis 2017, comme la map ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            " pour Call of Duty: Black Ops III, téléchargée plus d'un million de fois sur le Steam Workshop (voir son ",
            { link: 'portfolio', text: 'portfolio' },
            ').',
          ],
        ],
      },
      modrinth: {
        q: 'Il est sur Modrinth ? Pourquoi y est-il non listé ?',
        a: [
          [
            'Il est sur ',
            { link: 'modrinth', text: 'Modrinth' },
            ", mais non listé : il n'apparaît pas dans la recherche de Modrinth. Depuis août 2026, les ",
            { link: 'modrinthRules', text: 'règles de Modrinth' },
            " n'autorisent pas un projet fait principalement avec de l'IA à être public, donc son équipe l'a retiré des listes. CurseForge, Nexus Mods et la ",
            { link: 'releases', text: 'page des versions' },
            ' ont les mêmes fichiers.',
          ],
          [
            "Non listé ne veut pas dire dangereux. Ça concerne la façon dont le mod est fait, pas ce qu'il fait :",
          ],
          {
            list: [
              [
                "Le code est public : n'importe qui peut le lire dans son ",
                { link: 'github', text: 'dépôt GitHub' },
                '.',
              ],
              [
                'GitHub compile chaque version à partir de ce code, et ses journaux de compilation sont publics.',
              ],
              [
                "Le mod n'a aucun code à lui qui se connecte à internet. Les skins des joueurs viennent de Mojang par le jeu, et le lien Discord ne s'ouvre que quand tu cliques dessus.",
              ],
            ],
          },
        ],
      },
    }),
    ask: 'Demander sur Discord',
    issue: 'Ouvrir une issue',
  },

  download: {
    eyebrow: 'Téléchargement',
    title: 'Télécharge',
    accent: 'Living Horizon',
    text: {
      before:
        'Gratuit, un jar par version du jeu et par loader, pour ton jeu et ton serveur. Mets-le dans le dossier',
      after: "et l'horizon prend vie.",
    },
    latest: 'Dernière version',
    version: 'Version de Minecraft',
    loader: 'Loader',
    needs: { before: '· nécessite la', after: '' },
    untested:
      "Ce build se lance dans le jeu, mais personne n'a encore signalé l'avoir vu fonctionner dans un monde",
    jar: 'Télécharger le jar',
    releasePage: 'Voir la page de la release',
    sameJar: 'Le même jar va sur ton serveur',
    curseforge: 'ou télécharge-le sur CurseForge',
    pick: 'Choisis ton fichier sur la page de la release ou sur CurseForge.',
    total: 'Téléchargements, toutes plateformes',
    count: (n: number) =>
      p(n, {
        one: '{n} téléchargement',
        many: '{n} de téléchargements',
        other: '{n} téléchargements',
      }),
    noCount: 'Téléchargements indisponibles',
    soon: 'Bientôt',
    checking: 'Vérification…',
    everyFile: 'tous les fichiers',
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) =>
      p(n, { one: '{n} modpack', many: '{n} de modpacks', other: '{n} modpacks' }),
  },

  modpacks: {
    eyebrow: 'Modpacks',
    title: 'Déjà dans des',
    accent: 'modpacks.',
    text: 'Les packs qui embarquent Living Horizon. Tu en as fait un avec ? Il apparaîtra ici tout seul.',
    by: (authors: string) => `par ${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `Télécharger sur ${platform}`,
    none: "Aucun modpack n'embarque encore Living Horizon. Le tien pourrait être le premier.",
    loading: 'Les modpacks apparaissent ici dans un instant.',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) =>
      p(n, {
        one: 'Voir la page des modpacks',
        many: 'Voir les {n} de modpacks',
        other: 'Voir les {n} modpacks',
      }),
  },

  mods: {
    eyebrow: 'Compatibilité',
    title: 'Va bien',
    accent: 'avec tes mods.',
    text: "Tiré directement du projet sur GitHub, à jour au fil des tests : ce qui marche, ce qui a un problème connu, et ce qui attend encore quelqu'un pour l'essayer. Les notes sont en anglais.",
    search: 'Chercher un mod',
    filter: 'Filtrer par statut',
    all: 'Tous',
    status: { works: 'Fonctionne', issue: 'Problème connu', untested: 'Pas encore testé' },
    /** The heading of the shader packs, after the mods. */
    shaders: 'Packs de shaders',
    issue: (n: number) => `Issue #${n}`,
    /** A link that only shows the platform's logo. */
    page: (platform: string) => `Page ${platform}`,
    none: 'Aucun mod ne correspond à ta recherche.',
    missing: {
      title: 'Un mod manque à la liste ?',
      text: 'Dis-nous comment Living Horizon tourne avec, en bien ou en mal : chaque retour aide.',
      link: 'Signaler un mod',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: "La liste n'a pas pu être chargée pour l'instant. Elle est toujours sur GitHub.",
    failedLink: 'Voir la liste sur GitHub',
  },

  footer: {
    tagline:
      'Donne vie au lointain. Un mod pour Minecraft Java Edition, pour ton jeu et ton serveur.',
    beta: 'Bêta : attends-toi à des bugs, et parle-nous-en.',
    project: 'Projet',
    docs: 'Documentation',
    license: 'Licence',
    community: 'Communauté',
    bug: 'Signaler un bug',
    contribute: 'Contribuer',
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: 'Liste des modpacks fournie par', after: '' },
    official:
      'Pas un produit officiel de Minecraft. Non approuvé par Mojang ou Microsoft, ni associé à eux.',
  },
};
