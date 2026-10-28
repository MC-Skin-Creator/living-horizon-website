import { Messages } from './en';
import { plural } from './plural';

const p = plural('it');

export const it: Messages = {
  meta: {
    title: "Living Horizon: dà vita all'orizzonte",
    description:
      "Living Horizon è una mod per Minecraft che tiene in vita creature, villici, uccelli e altri giocatori all'orizzonte, oltre la tua distanza visiva e sul terreno lontano di Distant Horizons e Voxy. In giocatore singolo, in LAN e sui server. Fabric, Quilt, NeoForge e Forge. Ora in beta.",
  },

  language: {
    label: 'Lingua',
  },

  common: {
    download: 'Scarica',
    becomeTester: 'Diventa tester',
    needsTesters: 'Servono tester',
    tested: 'Testata',
    seenWorking: 'Vista funzionare in un mondo',
    new: 'Novità',
    beta: 'Beta',
    changelog: 'Changelog',
    logo: (name: string) => `Logo di ${name}`,
  },

  nav: {
    label: 'Principale',
    tag: 'beta',
    menu: 'Menu',
    features: 'Funzionalità',
    compatibility: 'Compatibilità',
    testers: 'Tester',
    contribute: 'Contribuisci',
    download: (version: string) => `Scarica v${version}`,
  },

  hero: {
    scene:
      'Illustrazione: un orizzonte al tramonto, fatto di colline a blocchi dove villici, animali, cavalieri e altri giocatori sono ancora vivi in lontananza, sotto uno stormo di oche in volo.',
    news: 'Ora la mod funziona anche sui server',
    tagline: 'Dà vita',
    taglineAccent: "all'orizzonte.",
    lede: {
      before:
        "Animali, villici, uccelli e altri giocatori continuano a vivere all'orizzonte, ben oltre la tua distanza visiva, direttamente sul terreno lontano di",
      between: 'e',
      after: ', o nel gioco vanilla. In giocatore singolo, in LAN e sui server.',
    },
    facts: 'Il progetto in breve',
    latest: 'Ultima versione',
    updated: 'Aggiornato',
    downloads: 'Download',
    minecraft: 'Minecraft',
    loaders: 'Loader',
  },

  concept: {
    eyebrow: 'Cosa fa',
    title: 'La tua distanza visiva finisce.',
    accent: 'Il mondo no.',
    text: "Minecraft smette di disegnare creature e giocatori a pochi chunk da te. Le mod per il terreno lontano estendono il paesaggio fino all'orizzonte, ma resta vuoto e immobile. Living Horizon lo riempie di nuovo di vita.",
    diagram:
      "Diagramma: senza Living Horizon, le creature esistono solo entro la tua distanza visiva e il terreno lontano è vuoto. Con la mod, creature, giocatori e uccelli vivono su tutto il terreno lontano, fino all'orizzonte.",
    you: 'Tu',
    renderDistance: 'La tua distanza visiva',
    farTerrain: 'Terreno lontano ·',
    horizon: 'Orizzonte',
    without: { before: '', mark: 'Senza', after: 'Living Horizon' },
    with: { before: '', mark: 'Con', after: 'Living Horizon' },
    empty: 'vuoto',
  },

  features: {
    eyebrow: 'Funzionalità',
    title: 'Tutto ciò che vive',
    accent: 'oltre la tua distanza visiva.',
    text: 'Creature, giocatori, giocatori disconnessi e uccelli, disegnati dal tuo stesso gioco e abbastanza leggeri da poterli lasciare sempre attivi.',
    offline: '(non in linea)',
    near: 'Da vicino: la creatura completa',
    far: "Da lontano: un'immagine piatta",
    preset: 'Qualità',
    presets: ['Bassa', 'Normale', 'Alta', 'Ultra'],
    mobDistance: 'Visibilità creature',
    items: {
      mobs: {
        title: "Ogni creatura, fino all'orizzonte",
        text: 'Gli animali brucano, i villici girano per villaggi lontani, i golem fanno la guardia. Qualsiasi creatura che il gioco sa disegnare, comprese quelle di altre mod.',
        points: [
          'Sul terreno di Voxy e Distant Horizons, o nel gioco vanilla',
          'Nascoste dietro i rilievi lontani, anche con i pacchetti di shader',
          'Scegli quali in Creature ed entità',
        ],
        where: 'Ovunque. Su un server con la mod, anche le creature che non hai mai incontrato.',
      },
      players: {
        title: 'Giocatori a qualsiasi distanza',
        text: "Vedi ogni altro giocatore, ovunque sia sulla mappa, con la sua skin, l'armatura, gli oggetti in mano e qualunque cosa cavalchi.",
        points: [
          'Cavalli, barche, vagonetti e ghast allegri',
          'Fluido: il server condivide le posizioni cinque volte al secondo',
          'Chi non ha la mod può comunque entrare',
        ],
        where: 'In LAN e sui server con la mod.',
      },
      offline: {
        title: 'I giocatori disconnessi vivono ancora',
        text: "Quando qualcuno si disconnette, una copia col suo nome resta dove se n'è andato. Passeggia, si siede, apre i bauli e di notte dorme, finché non torna.",
        points: [
          "(non in linea) dopo il nome, e quando è stato visto l'ultima volta",
          "Anche chi se n'è andato prima che tu entrassi",
          'Solo scenografia: non bloccano mai né te né le creature',
        ],
        where: 'Ovunque. Su un server con la mod, ogni giocatore che ci abbia mai giocato.',
      },
      birds: {
        title: 'Uccelli nel cielo',
        text: 'Stormi, oche in volo a V, rapaci, gabbiani, anatre e pipistrelli sorvolano il paesaggio, e li vedi anche da lontano.',
        points: [
          'Si posano su alberi, tetti, campi e spiagge',
          'Le anatre nuotano nel loro stagno',
          'Piccoli modelli 3D da vicino, immagini piatte da lontano',
        ],
        where: 'Ovunque, niente da configurare.',
      },
      light: {
        title: 'Pensata per restare leggera',
        text: 'Le creature lontane non hanno IA: riproducono animazioni già pronte che si adattano al terreno. Molto lontano, diventano immagini piatte di sé stesse.',
        points: [
          'Le creature nascoste dietro i rilievi non vengono disegnate',
          'Abbassa la distanza di simulazione e tieni un mondo vivo',
          'Entità semplificate: molte più creature allo stesso costo',
        ],
        where: 'Tutto gira nel tuo gioco. Il server condivide solo le posizioni.',
      },
      settings: {
        title: 'Impostazioni dove le cerchi',
        text: 'Nella schermata Opzioni, in Mod Menu, nelle Impostazioni video di Sodium o con /livinghorizon config. Ogni impostazione spiega cosa fa.',
        points: [
          'Le qualità Bassa, Normale, Alta e Ultra impostano tutto in un colpo',
          'In 14 lingue',
          "Ripristina predefiniti rimette tutto com'era",
        ],
        where: 'I valori predefiniti sono la scelta equilibrata.',
      },
    },
  },

  compare: {
    eyebrow: 'Prima / dopo',
    title: 'Stessa vista.',
    accent: 'Una mod.',
    text: "Trascina il cursore. A sinistra, il terreno lontano c'è ma è vuoto. A destra, Living Horizon lo riporta in vita.",
    tabs: 'Scene',
    shots: {
      shaders: {
        title: 'In gioco · Shader',
        text: 'Con un pacchetto di shader, distanza visiva e di simulazione a 12: gli animali sulle colline lontane sono tornati.',
      },
      vanilla: {
        title: 'In gioco · Vanilla',
        text: 'Senza shader, distanza visiva e di simulazione a 12: mandrie di mucche e cavalli riempiono le pianure lontane.',
      },
    },
    scenes: {
      village: {
        title: 'Villaggio in pianura',
        text: 'Villici, un golem e animali al pascolo attorno a un villaggio lontano.',
      },
      ridge: {
        title: 'Cavalieri sulla cresta',
        text: 'Altri giocatori e i loro cavalli sulle colline, nomi sopra la testa compresi.',
      },
      coast: {
        title: 'Costa a mezzogiorno',
        text: "Barche al largo, villici sulla riva lontana, gabbiani sull'acqua.",
      },
    },
    legendNear: 'La tua distanza visiva: viva in ogni caso',
    legendFar: 'Terreno lontano: vuoto senza la mod',
    note: {
      before:
        "Illustrazione stilizzata dell'effetto. Le prime schede sono vere schermate di gioco. Ne hai una bella anche tu?",
      link: 'Condividila su Discord',
      after: '.',
    },
    shotWithout: (text: string) => `Schermata di gioco senza Living Horizon. ${text}`,
    shotWith: (text: string) => `Schermata di gioco con Living Horizon. ${text}`,
    sceneWithout: (text: string) => `Senza Living Horizon: ${text}`,
    sceneWith: (text: string) => `Con Living Horizon: ${text}`,
    badgeWithout: 'Senza la mod',
    badgeWith: 'Con Living Horizon',
    slider: 'Sposta per confrontare la vista senza e con Living Horizon',
  },

  servers: {
    eyebrow: 'Multigiocatore',
    title: 'Mettila sul tuo server.',
    accent: 'Tutti vedono tutti.',
    text: 'Lo stesso jar funziona sui server. Il server condivide con chiunque abbia la mod dove si trova ogni giocatore, le creature intorno a lui e i giocatori disconnessi.',
    cover: 'Il titolo di Living Horizon davanti a una folla di teste di giocatori e creature.',
    since: (version: string) => `Supporto ai server dalla ${version}`,
    steps: {
      jar: {
        title: 'Metti il jar nella cartella mods del server',
        text: 'Lo stesso file del tuo gioco, per la versione di Minecraft e il loader del server, più la Fabric API su Fabric e Quilt. Tienilo aggiornato da entrambe le parti.',
      },
      start: {
        title: 'Avvia il server',
        text: 'Niente da configurare. Il server salva ciò che condivide nella cartella del mondo, quindi resta anche dopo un riavvio.',
      },
      see: {
        title: 'Chi ha la mod vede tutti',
        text: 'Ogni giocatore a qualsiasi distanza, con skin, armatura e cavalcatura, e le creature intorno a lui, anche quelle mai incontrate.',
      },
    },
    matrixTitle: 'Cosa vedi, in base a dove giochi',
    matrixText:
      'In giocatore singolo funziona tutto. Su un server, la mod installata sul server fa il resto.',
    matrixLabel: 'Funzionalità per modalità di gioco',
    feature: 'Funzionalità',
    places: ['Giocatore singolo', 'Mondo in LAN', 'Server con la mod', 'Server senza la mod'],
    rows: {
      mobs: "Creature all'orizzonte",
      players: 'Giocatori a qualsiasi distanza',
      offline: 'Giocatori disconnessi',
      birds: 'Uccelli',
    },
    cells: {
      mobsMet: 'Solo le creature che hai incontrato',
      offlineEven: 'Anche chi è uscito prima che entrassi',
      offlineSeen: 'Solo chi hai visto uscire',
    },
    yes: 'Sì',
    no: 'No',
    noOthers: 'Nessun altro giocatore',
    notApplicable: 'Non applicabile',
    notes: {
      lan: {
        title: 'LAN: niente da installare',
        text: 'Un mondo aperto in LAN condivide tutto tramite il gioco di chi lo ospita.',
      },
      join: {
        title: 'Chiunque può entrare',
        text: 'Chi non ha la mod può comunque entrare. Il server non gli invia nulla.',
      },
      tell: {
        title: 'Avvisa i tuoi giocatori',
        text: 'Il server condivide la posizione di ogni giocatore con chi ha la mod.',
      },
      datapack: {
        title: 'Usavi il pacchetto di dati?',
        text: 'Rimuovilo dalla cartella datapacks del mondo: la mod sul server lo sostituisce.',
      },
    },
  },

  compatibility: {
    eyebrow: 'Compatibilità',
    title: 'Fatta per il terreno lontano.',
    accent: 'Va bene anche senza.',
    text: 'Living Horizon trova da sola Distant Horizons o Voxy e disegna creature e giocatori direttamente sul loro terreno. Senza, tiene vivo il mondo oltre la tua distanza visiva.',
    works: 'Funziona',
    cards: {
      dh: {
        text: 'Creature e giocatori vengono disegnati sul suo terreno lontano e si nascondono dietro le sue colline. Da Distant Horizons 2.3 in poi.',
        link: 'Scarica Distant Horizons',
      },
      voxy: {
        text: "L'orizzonte del terreno di Voxy prende vita: animali al pascolo, villaggi lontani, giocatori in movimento.",
        link: 'Scarica Voxy',
      },
      vanilla: {
        title: 'Vanilla',
        text: 'Nessuna mod per il terreno lontano necessaria. Gioca con distanza visiva e di simulazione basse e vedi comunque un mondo vivo.',
      },
    },
    extras: [
      'Pacchetti di shader di Iris (Photon, Complementary…)',
      'Stesso jar sui server, oppure entra in qualsiasi server senza',
      'Impostazioni nelle Impostazioni video di Sodium (0.8+)',
    ],
    matrixTitle: 'Versioni di Minecraft e loader',
    matrixText: 'Un jar per ogni versione del gioco e loader.',
    builds: (builds: number, range: string) =>
      p(builds, { one: `{n} build, per ${range}.`, other: `{n} build, per ${range}.` }),
    keyUntested: 'Si avvia, servono tester',
    table: 'Tabella di compatibilità',
    untested: 'Si avvia nel gioco, ma non è ancora stata vista disegnare in un mondo',
    noBuild: 'Nessuna build',
    notAvailable: 'Non disponibile',
    fallback: (range: string) =>
      `Minecraft ${range} su Fabric, Quilt, NeoForge (dalla 1.20.6) e Forge.`,
    fullTable: 'Tabella completa su GitHub',
    loaders: {
      fabric: 'Con la Fabric API. Mod Menu facoltativo.',
      quilt: 'Con la Fabric API (QFAPI).',
      neoforge: 'Da Minecraft 1.20.6, non serve altro.',
      forge: 'Non serve altro.',
    },
  },

  performance: {
    eyebrow: 'Prestazioni',
    title: 'Un orizzonte vivo che',
    accent: 'ti restituisce FPS.',
    design: {
      eyebrow: 'Rendering ottimizzato',
      title: 'Un orizzonte vivo che',
      accent: 'non ti mangia gli FPS.',
      text: "Living Horizon è pensata fin dall'inizio per restare leggera: le figure lontane vengono disegnate nel modo più economico, e solo quando si possono vedere. Così puoi abbassare la distanza visiva e di simulazione e tenere comunque vivo il mondo.",
      cards: {
        pictures: {
          title: 'Immagini leggere in lontananza',
          text: "Oltre una certa distanza, una figura lontana viene disegnata come un'immagine piatta di sé stessa invece che come un modello completo. A quella dimensione sembra identica, per una frazione del lavoro.",
        },
        hidden: {
          title: 'Nascosto vuol dire saltato',
          text: 'Le creature dietro il terreno lontano non vengono disegnate affatto, e le animazioni si fermano quando una figura è troppo piccola o lontana per notarla.',
        },
        presets: {
          title: 'Livelli di qualità',
          text: 'Bassa, Normale, Alta e Ultra impostano in un colpo il numero di creature, la loro distanza e gli uccelli. I valori predefiniti sono la scelta equilibrata.',
        },
        server: {
          title: 'Leggera per il server',
          text: 'Ogni animazione gira nel gioco dei giocatori. Un server con la mod condivide solo le posizioni.',
        },
      },
    },
    numbers: 'In numeri',
    measured: "Misurati dai giocatori e dall'autore; la configurazione è sotto ogni valore.",
    noNumbers: {
      before:
        'Niente numeri inventati: questi valori si riempiono man mano che arrivano benchmark reali. Il pannello diagnostico integrato (',
      after: ') mostra il costo della mod per tick e per fotogramma.',
    },
    slots: {
      fps: { label: 'Guadagno di FPS', hint: 'la mod disegna la distanza al posto del gioco' },
      mobs: { label: "Creature all'orizzonte", hint: 'disegnate insieme' },
      distance: { label: 'Distanza coperta', hint: 'oltre la distanza visiva' },
      frame: { label: 'Costo per fotogramma', hint: 'dal pannello diagnostico' },
    },
    setups: {
      fps: "120 → 150 FPS per la stessa vista in lontananza: una distanza visiva più corta con Living Horizon che disegna le creature oltre, contro il gioco che disegna da solo fin lì. Misurato dall'autore.",
    },
    pending: (hint: string) => `Benchmark in arrivo · ${hint}`,
    share: "L'hai misurato sulla tua configurazione? Condividilo",
  },

  testers: {
    eyebrow: 'Attualmente in beta',
    title: "Aiutaci a dare vita all'orizzonte.",
    lede: 'Living Horizon è giovane e gira su tantissime combinazioni: versioni del gioco, loader, versioni di Distant Horizons e Voxy, pacchetti di shader, altre mod. Non sono ancora state provate tutte. Se ci giochi, dicci come va, bene o male: ogni segnalazione conta.',
    asks: [
      'La tua versione di Minecraft e il loader',
      'Distant Horizons o Voxy, e la loro versione',
      'Pacchetto di shader, se ne usi uno (Photon, Complementary…)',
      'Giocatore singolo, LAN o server, con la mod o senza',
      'Una schermata di ciò che vedi',
    ],
    report: 'Segnala compatibilità',
    discord: 'Entra su Discord',
    issue: 'Apri una issue',
    status: 'Stato dei test',
    waiting: (builds: number) =>
      p(builds, {
        one: 'su {n} build aspetta ancora un primo tester',
        other: 'su {n} build aspettano ancora un primo tester',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, { one: '{n} build vista funzionare', other: '{n} build viste funzionare' })}, ${waiting} in attesa`,
    seen: 'Vista funzionare',
    yours: 'Aspetta te',
    wanted: 'Le più ricercate',
    every: 'Ogni',
    everyRest: 'configurazione ci insegna qualcosa di nuovo',
    loading: 'Le combinazioni non testate compaiono qui appena si caricano i dati del progetto.',
  },

  contribute: {
    eyebrow: 'Contribuisci',
    title: 'Costruiscila con noi.',
    accent: "L'IA è benvenuta.",
    text: 'Living Horizon nasce in un solo posto, il suo repository GitHub. Codice, correzioni e traduzioni arrivano tutti lì come pull request.',
    steps: {
      talk: {
        title: 'Prima parliamone',
        text: 'Per tutto ciò che va oltre una piccola correzione, apri una issue, così la direzione è concordata prima di fare il lavoro.',
      },
      pr: {
        title: 'Apri una pull request',
        text: 'Lavora su un branch feature/* o fix/* e punta a develop. I commit sono in inglese, nel formato conventional commits.',
      },
      build: {
        title: 'Compila e testa',
        text: 'Una sola build Gradle compila la mod ed esegue i test. La CI la esegue anche su ogni pull request.',
      },
      credit: {
        title: 'Fatti accreditare',
        text: 'Aggiungiti a CREDITS.md, e aggiungi una riga al changelog se i giocatori vedranno la modifica.',
      },
    },
    aiTitle: "Usi l'IA? Fai pure.",
    aiText:
      "L'IA fa parte del modo in cui nasce questo progetto, e puoi usarla per contribuire, nessun problema. Continua solo a ragionare su ciò che scrive: leggi, capisci e testa la tua modifica prima di aprire la pull request.",
    claude: {
      before: 'Claude qui lavora al meglio: legge',
      between: 'e le skill in',
      after: 'in automatico.',
    },
    terms: {
      before: 'Aprendo una pull request accetti la sezione 3 della',
      link: 'licenza',
      after:
        ': mantieni il tuo copyright e resti accreditato come contributore, qualunque cosa succeda in futuro.',
    },
    guide: 'Leggi la guida per contribuire',
    issues: 'Issue aperte',
  },

  changelog: {
    eyebrow: 'Ultimi aggiornamenti',
    title: 'Rilasci frequenti,',
    accent: 'correzioni rapide.',
    text: 'Direttamente dal changelog del progetto su GitHub.',
    textEnglish: 'Direttamente dal changelog del progetto su GitHub, in inglese.',
    latest: 'Ultima',
    release: 'Release',
    sides: { server: 'Server', client: 'Client' },
    kinds: { new: 'Novità', improved: 'Migliorato', fixed: 'Corretto' },
    more: (n: number) =>
      p(n, { one: 'Mostra {n} altra modifica', other: 'Mostra altre {n} modifiche' }),
    failed: 'Al momento non è stato possibile caricare il changelog. Lo trovi sempre su GitHub.',
    full: 'Vedi il changelog completo su GitHub',
    releases: 'Tutte le release',
  },

  download: {
    eyebrow: 'Download',
    title: 'Scarica',
    accent: 'Living Horizon',
    text: {
      before:
        'Gratis, un jar per ogni versione del gioco e loader, per il tuo gioco e il tuo server. Mettilo nella cartella',
      after: "e l'orizzonte prende vita.",
    },
    latest: 'Ultima release',
    version: 'Versione di Minecraft',
    loader: 'Loader',
    needs: { before: '· richiede la', after: '' },
    untested:
      'Questa build si avvia nel gioco, ma nessuno ha ancora segnalato di averla vista disegnare in un mondo',
    jar: 'Scarica il jar',
    releasePage: 'Prendilo dalla pagina della release',
    sameJar: 'Lo stesso jar va sul tuo server',
    curseforge: 'o scaricalo da CurseForge',
    pick: 'Scegli il tuo file sulla pagina della release o su CurseForge.',
    total: 'Download, tutte le piattaforme',
    count: (n: number) => p(n, { one: '{n} download', other: '{n} download' }),
    noCount: 'Download non disponibili',
    soon: 'In arrivo',
    checking: 'Verifica in corso…',
    everyFile: 'tutti i file',
  },

  footer: {
    tagline:
      "Dà vita all'orizzonte. Una mod per Minecraft Java Edition, per il tuo gioco e il tuo server.",
    beta: 'Beta: aspettati dei bug, e segnalaceli.',
    project: 'Progetto',
    docs: 'Documentazione',
    license: 'Licenza',
    community: 'Community',
    bug: 'Segnala un bug',
    contribute: 'Contribuisci',
    official:
      'Non è un prodotto ufficiale di Minecraft. Non approvato da Mojang o Microsoft né associato a loro.',
  },
};
