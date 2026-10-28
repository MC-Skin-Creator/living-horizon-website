import { Messages } from './en';
import { plural } from './plural';
import { questions } from './rich';

const p = plural('fr');

export const fr: Messages = {
  meta: {
    title: 'Living Horizon : donne vie au lointain',
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
    compatibility: 'Compatibilité',
    testers: 'Testeurs',
    contribute: 'Contribuer',
    faq: 'FAQ',
    download: (version: string) => `Télécharger v${version}`,
  },

  hero: {
    scene:
      "Illustration : un horizon au crépuscule, fait de collines en blocs où villageois, animaux, cavaliers et autres joueurs sont toujours en vie au loin, sous un vol d'oies.",
    news: 'Le mod tourne maintenant aussi sur serveur',
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
      "Schéma : sans Living Horizon, les mobs n'existent que dans ta distance d'affichage et le terrain lointain est vide. Avec, les mobs, les joueurs et les oiseaux vivent sur tout le terrain lointain, jusqu'à l'horizon.",
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
    near: 'De près : le mob complet',
    far: 'De loin : une image plate',
    preset: 'Préréglage',
    presets: ['Bas', 'Normal', 'Élevé', 'Ultra'],
    mobDistance: "Distance d'affichage des créatures",
    items: {
      mobs: {
        title: "Tous les mobs, jusqu'à l'horizon",
        text: 'Les animaux broutent, les villageois se baladent autour des villages lointains, les golems montent la garde. Tous les mobs que le jeu sait dessiner, y compris ceux des autres mods.',
        points: [
          'Sur le terrain de Voxy et Distant Horizons, ou en vanilla',
          'Masqués par le relief lointain, même avec un pack de shaders',
          'Choisis lesquels dans Créatures et entités',
        ],
        where: "Partout. Sur un serveur avec le mod, même les mobs que tu n'as jamais croisés.",
      },
      players: {
        title: 'Les joueurs à toute distance',
        text: "Tu vois tous les autres joueurs, où qu'ils soient sur la carte, avec leur skin, leur armure, ce qu'ils ont en main et ce qu'ils chevauchent.",
        points: [
          'Chevaux, bateaux, wagonnets et ghasts joyeux',
          'Fluide : le serveur partage les positions cinq fois par seconde',
          'Les joueurs sans le mod peuvent toujours rejoindre',
        ],
        where: 'En LAN, et sur les serveurs avec le mod.',
      },
      offline: {
        title: 'Les joueurs déconnectés continuent de vivre',
        text: "Quand quelqu'un se déconnecte, une copie à son nom reste là où il est parti. Elle se promène, s'assoit, ouvre des coffres et dort la nuit, jusqu'à son retour.",
        points: [
          '(hors ligne) après leur pseudo, et quand ils ont été vus pour la dernière fois',
          'Même les joueurs partis avant ton arrivée',
          'Juste pour le décor : ils ne gênent jamais ni toi ni les mobs',
        ],
        where: 'Partout. Sur un serveur avec le mod, tous les joueurs qui y ont déjà joué.',
      },
      birds: {
        title: 'Des oiseaux dans le ciel',
        text: 'Volées, oies en V, rapaces, mouettes, canards et chauves-souris survolent le paysage, et tu les vois de très loin.',
        points: [
          'Ils se posent sur les arbres, les toits, les champs et les plages',
          'Les canards nagent sur leur mare',
          'Petits modèles 3D de près, images plates au loin',
        ],
        where: 'Partout, rien à régler.',
      },
      light: {
        title: 'Pensé pour rester léger',
        text: "Les mobs lointains n'ont pas d'IA : ils jouent des animations toutes prêtes, adaptées au sol. Très loin, ils deviennent des images plates d'eux-mêmes.",
        points: [
          'Les mobs cachés derrière les collines ne sont pas dessinés',
          'Baisse ta distance de simulation et garde un monde vivant',
          'Entités simplifiées : bien plus de mobs pour le même coût',
        ],
        where: 'Tout tourne sur ton jeu. Le serveur ne fait que partager des positions.',
      },
      settings: {
        title: 'Des réglages là où tu les cherches',
        text: "Dans l'écran Options, Mod Menu, les Paramètres vidéo de Sodium, ou avec /livinghorizon config. Chaque réglage explique ce qu'il fait.",
        points: [
          "Les préréglages Bas, Normal, Élevé et Ultra règlent tout d'un coup",
          'En 14 langues',
          'Réinitialiser remet tout par défaut',
        ],
        where: 'Les valeurs par défaut sont le bon équilibre.',
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
        text: "Avec un pack de shaders, distance d'affichage et de simulation à 12 : les animaux sont de retour sur les collines lointaines.",
      },
      vanilla: {
        title: 'En jeu · Vanilla',
        text: "Sans shaders, distance d'affichage et de simulation à 12 : des troupeaux de vaches et de chevaux remplissent les plaines lointaines.",
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
    legendNear: "Ta distance d'affichage : vivante dans les deux cas",
    legendFar: 'Terrain lointain : vide sans le mod',
    note: {
      before:
        "Illustration stylisée de l'effet. Les premiers onglets sont de vraies captures d'écran en jeu. Tu en as une belle ?",
      link: 'Partage-la sur Discord',
      after: '.',
    },
    shotWithout: (text: string) => `Capture d'écran en jeu sans Living Horizon. ${text}`,
    shotWith: (text: string) => `Capture d'écran en jeu avec Living Horizon. ${text}`,
    sceneWithout: (text: string) => `Sans Living Horizon : ${text}`,
    sceneWith: (text: string) => `Avec Living Horizon : ${text}`,
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
    since: (version: string) => `Support serveur depuis la ${version}`,
    steps: {
      jar: {
        title: 'Mets le jar dans le dossier mods du serveur',
        text: 'Le même fichier que pour ton jeu, pour la version de Minecraft et le loader du serveur, plus la Fabric API sur Fabric et Quilt. Garde-le à jour des deux côtés.',
      },
      start: {
        title: 'Lance le serveur',
        text: "Rien à régler. Le serveur garde ce qu'il partage dans le dossier du monde, donc tout est encore là après un redémarrage.",
      },
      see: {
        title: 'Les joueurs avec le mod voient tout le monde',
        text: "Tous les joueurs à n'importe quelle distance, avec leur skin, leur armure et leur monture, et les mobs autour d'eux, même ceux qu'ils n'ont jamais croisés.",
      },
    },
    matrixTitle: 'Ce que tu vois, selon où tu joues',
    matrixText: "Tout marche en solo. Sur un serveur, c'est le mod côté serveur qui fait le reste.",
    matrixLabel: 'Fonctionnalités selon le mode de jeu',
    feature: 'Fonctionnalité',
    places: ['Solo', 'Monde LAN', 'Serveur avec le mod', 'Serveur sans le mod'],
    rows: {
      mobs: "Mobs à l'horizon",
      players: 'Joueurs à toute distance',
      offline: 'Joueurs déconnectés',
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
      lan: {
        title: 'LAN : rien à installer',
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
      datapack: {
        title: 'Tu utilisais le datapack ?',
        text: 'Retire-le du dossier datapacks du monde : le mod côté serveur le remplace.',
      },
    },
  },

  compatibility: {
    eyebrow: 'Compatibilité',
    title: 'Fait pour le terrain lointain.',
    accent: 'Très bien sans.',
    text: "Living Horizon détecte tout seul Distant Horizons ou Voxy et dessine les mobs et les joueurs directement sur leur terrain. Sans eux, il garde le monde vivant au-delà de ta distance d'affichage.",
    works: 'Compatible',
    cards: {
      dh: {
        text: 'Les mobs et les joueurs sont dessinés sur son terrain lointain et se cachent derrière ses collines. À partir de Distant Horizons 2.3.',
        link: 'Télécharger Distant Horizons',
      },
      voxy: {
        text: "L'horizon du terrain de Voxy prend vie : animaux qui broutent, villages lointains, joueurs en vadrouille.",
        link: 'Télécharger Voxy',
      },
      vanilla: {
        title: 'Vanilla',
        text: "Pas besoin de mod de terrain lointain. Joue avec une distance d'affichage et de simulation basse, et vois quand même un monde vivant.",
      },
    },
    extras: [
      'Packs de shaders Iris (Photon, Complementary…)',
      "Le même jar sur les serveurs, ou rejoins n'importe quel serveur qui ne l'a pas",
      'Réglages dans les Paramètres vidéo de Sodium (0.8+)',
    ],
    matrixTitle: 'Versions de Minecraft et loaders',
    matrixText: 'Un jar par version du jeu et par loader.',
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

  performance: {
    eyebrow: 'Performances',
    title: 'Un horizon vivant qui',
    accent: 'te fait gagner des FPS.',
    design: {
      eyebrow: 'Rendu optimisé',
      title: 'Un horizon vivant qui',
      accent: 'ne mange pas tes FPS.',
      text: "Living Horizon est conçu dès le départ pour rester léger : les silhouettes lointaines sont dessinées de la façon la moins coûteuse, et seulement quand elles sont visibles. Tu peux donc baisser ta distance d'affichage et de simulation et garder un monde vivant.",
      cards: {
        pictures: {
          title: 'Des images légères au loin',
          text: "Au-delà d'une certaine distance, une silhouette lointaine est dessinée comme une image plate d'elle-même au lieu d'un modèle complet. À cette taille, on ne voit pas la différence, pour une fraction du travail.",
        },
        hidden: {
          title: 'Caché, donc ignoré',
          text: "Les mobs derrière le terrain lointain ne sont pas dessinés du tout, et les animations s'arrêtent dès qu'une silhouette est trop petite ou trop loin pour qu'on la remarque.",
        },
        presets: {
          title: 'Préréglages de qualité',
          text: "Bas, Normal, Élevé et Ultra règlent d'un coup le nombre de mobs, leur portée et les oiseaux. Les valeurs par défaut sont le bon équilibre.",
        },
        server: {
          title: 'Léger pour le serveur',
          text: 'Toutes les animations tournent sur le jeu des joueurs. Un serveur avec le mod ne fait que partager des positions.',
        },
      },
    },
    numbers: 'En chiffres',
    measured: "Mesuré par des joueurs et par l'auteur ; la config est indiquée sous chaque valeur.",
    noNumbers: {
      before:
        'Pas de chiffres inventés ici : ils se rempliront au fil des vrais benchmarks. Le panneau de débogage intégré (',
      after: ') affiche ce que le mod coûte par tick et par image.',
    },
    slots: {
      fps: { label: 'Gain de FPS', hint: 'le mod dessine le lointain à la place du jeu' },
      mobs: { label: "Mobs à l'horizon", hint: 'dessinés en même temps' },
      distance: { label: 'Distance couverte', hint: "au-delà de la distance d'affichage" },
      frame: { label: 'Coût par image', hint: 'selon le panneau de débogage' },
    },
    setups: {
      fps: "120 → 150 FPS pour la même vue du lointain : une distance d'affichage plus courte avec Living Horizon qui dessine les mobs au-delà, contre le jeu qui dessine lui-même jusque-là. Mesuré par l'auteur.",
    },
    pending: (hint: string) => `Benchmark à venir · ${hint}`,
    share: 'Tu as mesuré sur ta config ? Partage-le',
  },

  testers: {
    eyebrow: 'Actuellement en bêta',
    title: "Aide-nous à donner vie à l'horizon.",
    lede: "Living Horizon est jeune et tourne sur énormément de combinaisons : versions du jeu, loaders, versions de Distant Horizons et Voxy, packs de shaders, autres mods. Elles n'ont pas encore toutes été essayées. Si tu joues avec, dis-nous comment ça tourne, en bien comme en mal : chaque retour compte.",
    asks: [
      'Ta version de Minecraft et ton loader',
      'Distant Horizons ou Voxy, et leur version',
      'Ton pack de shaders, si tu en as un (Photon, Complementary…)',
      'Solo, LAN ou serveur, avec ou sans le mod',
      "Une capture d'écran de ce que tu vois",
    ],
    report: 'Faire un retour',
    discord: 'Rejoindre le Discord',
    issue: 'Ouvrir une issue',
    status: 'État des tests',
    waiting: (builds: number) =>
      p(builds, {
        one: 'sur {n} build encore sans testeur',
        many: 'sur {n} de builds encore sans testeur',
        other: 'sur {n} builds encore sans testeur',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, {
        one: '{n} build vu fonctionner',
        many: '{n} de builds vus fonctionner',
        other: '{n} builds vus fonctionner',
      })}, ${waiting} en attente`,
    seen: 'Vu fonctionner',
    yours: "N'attend que toi",
    wanted: 'Les plus recherchés',
    every: 'Chaque',
    everyRest: 'config nous apprend quelque chose de nouveau',
    loading:
      "Les combinaisons pas encore testées s'affichent ici dès que les données du projet sont chargées.",
  },

  contribute: {
    eyebrow: 'Contribuer',
    title: 'Construis-le avec nous.',
    accent: "L'IA est la bienvenue.",
    text: 'Living Horizon se fait en un seul endroit : son dépôt GitHub. Le code, les corrections et les traductions y arrivent tous sous forme de pull requests.',
    steps: {
      talk: {
        title: "Discute d'abord",
        text: "Pour tout ce qui dépasse une petite correction, ouvre une issue, pour se mettre d'accord sur la direction avant de faire le travail.",
      },
      pr: {
        title: 'Ouvre une pull request',
        text: 'Travaille sur une branche feature/* ou fix/* et vise develop. Les commits sont en anglais, au format Conventional Commits.',
      },
      build: {
        title: 'Compile et teste',
        text: 'Un seul build Gradle compile le mod et lance les tests. La CI le lance aussi sur chaque pull request.',
      },
      credit: {
        title: 'Sois crédité',
        text: 'Ajoute-toi dans CREDITS.md, et une ligne au journal des modifications si les joueurs verront le changement.',
      },
    },
    aiTitle: "Tu utilises l'IA ? Vas-y.",
    aiText:
      "L'IA fait partie de la façon dont ce projet est fait, et tu peux t'en servir pour contribuer, aucun problème. Continue juste à réfléchir à ce qu'elle écrit : lis, comprends et teste ton changement avant d'ouvrir la pull request.",
    claude: {
      before: "Claude est le plus à l'aise ici : il lit",
      between: 'et les skills de',
      after: 'tout seul.',
    },
    terms: {
      before: 'En ouvrant une pull request, tu acceptes la section 3 de la',
      link: 'licence',
      after:
        " : tu gardes tes droits d'auteur, et tu restes crédité comme contributeur quoi qu'il arrive ensuite.",
    },
    guide: 'Lire le guide de contribution',
    issues: 'Issues ouvertes',
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
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Des questions ?',
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
        q: "C'est seulement visuel ? Ça casse les fermes à mobs ?",
        a: [
          [
            "C'est seulement visuel, sans IA. Les vrais mobs marchent comme sans le mod : les fermes, l'apparition des mobs et leur limite ne changent pas. Tu ne peux pas frapper un mob lointain.",
          ],
        ],
      },
      real: {
        q: 'Les mobs lointains sont-ils de vrais mobs, ou placés au hasard ?',
        a: [
          [
            "Ce sont de vrais mobs, là où ton jeu ou le serveur les a vus pour la dernière fois. Un mob mort ou disparu depuis peut encore s'afficher jusqu'à ce que tu t'en approches. Il est alors oublié.",
          ],
        ],
      },
      simulation: {
        q: "Quelle différence avec une distance de simulation ou d'entités plus grande ?",
        a: [
          [
            "Une distance de simulation plus grande fait tourner plus de vrais mobs au serveur, ce qui coûte cher, et le serveur ne les envoie quand même que jusqu'à une certaine distance. Living Horizon dessine des copies que le serveur ne fait pas tourner. Elles jouent des animations toutes prêtes, et de loin elles deviennent des images plates (",
            { em: 'Entités simplifiées' },
            ').',
          ],
        ],
      },
      range: {
        q: "Jusqu'où il affiche les mobs et les joueurs ?",
        a: [
          [
            "Les mobs : 512 blocs par défaut, jusqu'à ",
            { em: 'Illimité' },
            ' avec ',
            { em: "Distance d'affichage des créatures" },
            ". Les joueurs : à n'importe quelle distance par défaut, ce que ",
            { em: "Distance d'affichage des joueurs" },
            " peut limiter. Un mob ne s'affiche qu'une fois que ton jeu ou le serveur l'a vu.",
          ],
        ],
      },
      mods: {
        q: 'Ça marche avec mon mod ?',
        a: [
          [
            'Très probablement. Voxy, Distant Horizons, Sodium, Iris et les packs de shaders marchent avec (voir ',
            { link: 'compatibilitySection', text: 'Compatibilité' },
            "). Living Horizon ajoute seulement ses propres silhouettes : il ne change pas la façon dont les autres mods dessinent le monde. Les mods pas encore testés sont listés sous l'étiquette ",
            { link: 'modCompatibility', text: 'mod compatibility' },
            ' sur GitHub. Si quelque chose casse, ouvre une ',
            { link: 'issues', text: 'issue' },
            ' avec le nom du mod et sa version.',
          ],
        ],
      },
      modMobs: {
        q: "Les mobs des autres mods s'affichent-ils de loin ?",
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
        q: "J'ai besoin de Voxy ou de Distant Horizons ?",
        a: [
          [
            "Non. Sans eux, les mobs et les joueurs lointains s'affichent sur le terrain du jeu, jusqu'à ta distance d'affichage. Avec l'un des deux, ils s'affichent aussi sur son terrain lointain.",
          ],
        ],
      },
      frameRate: {
        q: 'Ça va baisser mes FPS ?',
        a: [
          [
            "Dessiner plus d'entités coûte des FPS. Si ton jeu ralentit, garde ",
            { em: 'Entités simplifiées' },
            ' activé et choisis un ',
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
        q: "Je peux choisir ce qui s'affiche ?",
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
        q: 'Ça modifie mon monde ou ça charge des chunks ?',
        a: [
          [
            'Non. Il ne change rien à ton monde et ne charge aucun chunk. Il garde ce dont il se souvient dans ses propres fichiers : dans le dossier ',
            { code: 'config' },
            ', et dans ',
            { code: 'livinghorizon-positions.dat' },
            ' dans le dossier du monde pour ce que partage le serveur. Retirer le mod laisse ton monde tel quel.',
          ],
          ["Sur un serveur, le mod n'envoie les positions qu'aux joueurs qui l'ont."],
        ],
      },
      server: {
        q: 'Le serveur a besoin du mod ?',
        a: [
          [
            "Non. Presque tout marche en solo, et tu peux rejoindre n'importe quel serveur avec. Mais les joueurs à n'importe quelle distance demandent le mod sur le serveur, qui partage alors plus de mobs et les joueurs déconnectés. Voir ",
            { link: 'serversSection', text: 'Multijoueur' },
            '.',
          ],
        ],
      },
      paper: {
        q: 'Ça marche sur les serveurs Paper ou Spigot ?',
        a: [
          [
            "Tu peux y jouer avec le mod, comme sur n'importe quel serveur sans lui. Le côté serveur ne tourne que sur Fabric, Quilt, NeoForge et Forge : un serveur Paper ou Spigot ne partage donc rien. Un plugin pour Paper est en discussion dans ",
            { link: 'paperPlugin', text: '#156' },
            '.',
          ],
        ],
      },
      nothing: {
        q: 'Je ne vois aucun mob ni joueur lointain. Pourquoi ?',
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
        q: 'Ça peut servir à tricher ? Est-ce autorisé sur les serveurs ?',
        a: [
          [
            "Il ne montre les autres joueurs que là où le serveur le permet. Les joueurs lointains ne s'affichent que sur un serveur qui a le mod, et son propriétaire choisit ce qu'il partage : jusqu'où, avec les coéquipiers seulement, et quels joueurs et dimensions restent cachés. ",
            { code: '"sharePlayers": false' },
            ' le désactive (voir les ',
            { link: 'serverSettings', text: 'réglages du serveur' },
            '). Les joueurs invisibles et en mode spectateur ne sont jamais partagés. Les joueurs accroupis le sont, pour le moment (',
            { link: 'sneaking', text: '#269' },
            ').',
          ],
          [
            "Sur les autres serveurs, tu ne vois que ce que ton propre jeu a vu. Le mod n'envoie rien au serveur. Chaque serveur a quand même ses propres règles sur les mods : demande à son équipe.",
          ],
        ],
      },
      bedrock: {
        q: 'Il existe une version Bedrock ?',
        a: [['Non. Living Horizon est un mod pour Minecraft Java Edition.']],
      },
      version: {
        q: "Ma version du jeu n'est pas prise en charge. Elle le sera ?",
        a: [
          [
            'Dis sur le ',
            { link: 'discord', text: 'Discord' },
            ' quelle version et quel loader tu joues. Ça aide à choisir la suite.',
          ],
        ],
      },
      modpack: {
        q: 'Je peux le mettre dans un modpack ?',
        a: [['Oui. Utilise le fichier officiel et crédite-le.']],
      },
      abandoned: {
        q: 'Et si le projet est abandonné ?',
        a: [
          [
            "La licence le prévoit. Une fois le projet déclaré abandonné (son dépôt archivé, ou son README qui le dit), sa licence devient la GPL : n'importe qui peut reprendre le projet, en le créditant. Voir la section 5 de la ",
            { link: 'license', text: 'licence' },
            '.',
          ],
        ],
      },
      ai: {
        q: "Il a été fait avec de l'IA ?",
        a: [
          [
            "Oui. Je suis clixmods, l'auteur : développeur full-stack spécialisé dans le jeu vidéo, c'est mon métier. Je fais des mods depuis 2017 : des maps pour Call of Duty: Black Ops III comme ",
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ", avec plus d'un million de téléchargements sur le Steam Workshop (voir mon ",
            { link: 'portfolio', text: 'portfolio' },
            '). Les idées et les techniques viennent du développement de jeux : les impostors, les LOD et les animations toutes prêtes sont des astuces que les jeux utilisent depuis des années.',
          ],
          [
            "L'IA écrit une grande partie du code. Je décide comment le mod fonctionne, je le teste en jeu et je corrige ce qui ne va pas. Sans l'IA, un projet de cette taille m'aurait pris bien trop de temps pour exister.",
          ],
        ],
      },
      modrinth: {
        q: 'Il est sur Modrinth ? Pourquoi y est-il non listé ?',
        a: [
          [
            'Il est sur ',
            { link: 'modrinth', text: 'Modrinth' },
            ", mais non listé : il n'apparaît pas dans la recherche de Modrinth. Depuis août 2026, les ",
            { link: 'modrinthRules', text: 'règles de Modrinth' },
            " n'autorisent pas un projet fait principalement avec de l'IA à être public, donc son équipe l'a retiré des listes. CurseForge, Nexus Mods et la ",
            { link: 'releases', text: 'page des versions' },
            ' ont les mêmes fichiers.',
          ],
          [
            "Non listé ne veut pas dire dangereux. Ça concerne la façon dont le mod est fait, pas ce qu'il fait :",
          ],
          {
            list: [
              [
                "Le code est public : n'importe qui peut le lire dans son ",
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
  },

  footer: {
    tagline:
      'Donne vie au lointain. Un mod pour Minecraft Java Edition, pour ton jeu et ton serveur.',
    beta: 'Bêta : attends-toi à des bugs, et parle-nous-en.',
    project: 'Projet',
    docs: 'Documentation',
    license: 'Licence',
    community: 'Communauté',
    bug: 'Signaler un bug',
    contribute: 'Contribuer',
    official:
      'Pas un produit officiel de Minecraft. Non approuvé par Mojang ou Microsoft, ni associé à eux.',
  },
};
