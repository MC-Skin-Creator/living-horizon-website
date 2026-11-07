import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

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
    mods: 'Mod',
    modpacks: 'Modpack',
    faq: 'FAQ',
    download: (version: string) => `Scarica v${version}`,
  },

  pages: {
    mods: {
      title: 'Mod compatibili',
      description:
        'Come funziona Living Horizon con altre mod di Minecraft: terreno lontano, shader, prestazioni e mod di creature. Cosa funziona, cosa ha un problema noto e cosa aspetta un tester.',
    },
    modpacks: {
      title: 'Modpack',
      description:
        'I modpack di Minecraft che includono Living Horizon, con i link per scaricarli su CurseForge e Modrinth.',
    },
    changelog: {
      title: 'Changelog',
      description: 'Ogni versione di Living Horizon e cosa è cambiato.',
    },
  },

  hero: {
    scene:
      'Illustrazione: un orizzonte al tramonto, fatto di colline a blocchi dove villici, animali, cavalieri e altri giocatori sono ancora vivi in lontananza, sotto uno stormo di oche in volo.',
    news: 'Ora sul terreno di Lodistance, Far View ed Ecstatic',
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
    /** The button of each card: it spreads the card across the section, and folds it back. */
    more: 'Più dettagli',
    less: 'Meno dettagli',
    items: {
      mobs: {
        title: "Ogni creatura, fino all'orizzonte",
        text: 'Gli animali brucano sulle colline lontane, i villici girano per villaggi distanti, i golem fanno la guardia. Ogni creatura che il gioco sa disegnare, comprese quelle di altre mod.',
        points: [
          'Su Voxy, Distant Horizons e altri terreni lontani, o nel gioco vanilla',
          'Anche nelle terre che nessuno ha ancora esplorato',
          'Nascoste dietro le colline lontane, anche con gli shader',
        ],
        where: 'Ovunque. Su un server con la mod, anche le creature che non hai mai incontrato.',
        details: details([
          {
            title: 'Creature vere, dove sono state viste',
            body: [
              [
                "Ogni creatura lontana è una creatura vera, mostrata dove il tuo gioco o il server l'ha vista l'ultima volta. Quando ti avvicini, la creatura vera prende semplicemente il suo posto. Le creature lontane sono solo scenografia: non puoi colpirle, e le farm e la generazione delle creature funzionano come senza la mod.",
              ],
            ],
          },
          {
            title: 'Di casa sul tuo terreno lontano',
            body: [
              [
                'Con Voxy, Distant Horizons, Lodistance, Far View o Ecstatic, le creature lontane camminano sul suo suolo, spariscono dietro le sue colline e svaniscono nella sua nebbia. Senza una mod di terreno lontano, compaiono oltre la tua distanza visiva, sul terreno del gioco stesso (vedi ',
                { link: 'compatibilitySection', text: 'Compatibilità' },
                ').',
              ],
            ],
          },
          {
            title: 'Anche dove nessuno è stato',
            body: [
              [
                'Anche le terre che non hai mai visitato hanno le loro mandrie. Living Horizon le stima a partire dal seme del mondo, quindi quando arrivi potrebbero essere diverse, o non esserci più. Guarda nel cannocchiale per vederle fin dove punti.',
              ],
            ],
          },
          {
            title: 'Su un server con la mod',
            body: [
              [
                'Vedi anche le creature intorno a ogni altro giocatore, persino mandrie che non hai mai incontrato. Per mostrare le creature stimate più lontano, il gestore del server può condividere il seme del mondo. È disattivato per impostazione predefinita, perché il seme rivela tutto il mondo (vedi le ',
                { link: 'serverSettings', text: 'impostazioni del server' },
                ').',
              ],
            ],
          },
          {
            title: 'Nelle impostazioni',
            body: [
              [
                'Scegli quali creature mostrare in ',
                { em: 'Creature ed entità...' },
                ' e nascondi quelle stimate con ',
                { em: 'Creature indovinate' },
                '.',
              ],
            ],
          },
        ]),
      },
      players: {
        title: 'Giocatori a qualsiasi distanza',
        text: 'Vedi ogni altro giocatore, ovunque sia sulla mappa, con la sua skin, il suo equipaggiamento e qualunque cosa cavalchi.',
        points: [
          'A cavallo, in barca o planando con le elitre',
          'Si muovono in modo fluido, anche da lontano',
          'Chi non ha la mod può comunque entrare',
        ],
        where: 'In LAN e sui server con la mod.',
        details: details([
          {
            title: 'Tutti, ovunque',
            body: [
              [
                'Su un server con la mod, vedi ogni altro giocatore, ovunque sia, muoversi in modo fluido sulla sua cavalcatura, col suo nome sopra la testa. In un mondo aperto in LAN funziona senza installare nulla.',
              ],
            ],
          },
          {
            title: 'Decide il gestore del server',
            body: [
              [
                'Il gestore sceglie fino a che distanza si vedono i giocatori, se si vedono solo tra compagni di squadra e quali giocatori o dimensioni restano nascosti. Può anche disattivare del tutto i giocatori lontani (vedi le ',
                { link: 'serverSettings', text: 'impostazioni del server' },
                ').',
              ],
            ],
          },
          {
            title: 'Mai mostrati',
            body: [
              [
                'I giocatori in modalità spettatore e quelli invisibili non vengono mai mostrati da lontano. Quelli accovacciati sì, per ora (',
                { link: 'sneaking', text: '#269' },
                ').',
              ],
            ],
          },
          {
            title: 'Nelle impostazioni',
            body: [
              [
                { em: 'Visibilità giocatori' },
                ' regola fino a che distanza si vedono i giocatori, e ',
                { em: 'Mostra giocatori' },
                ' li disattiva.',
              ],
            ],
          },
        ]),
      },
      offline: {
        title: 'I giocatori disconnessi vivono ancora',
        text: "Quando qualcuno si disconnette, una sua copia resta dove se n'è andato. Passeggia, si siede, pesca e di notte dorme, finché non torna.",
        points: [
          "Il suo nome, con (non in linea) e quando è stato visto l'ultima volta",
          "Anche chi se n'è andato prima che tu entrassi",
          'Solo scenografia: cammina contro di loro per spostarli',
        ],
        where: 'Ovunque. Su un server con la mod, ogni giocatore che ci abbia mai giocato.',
        details: details([
          {
            title: 'Una vita tutta loro',
            body: [
              [
                "Di giorno passeggiano, si siedono o si danno da fare davanti a un baule. Di notte vanno a letto. Pescano vicino all'acqua, si riparano dalla pioggia, la sera si radunano intorno a un falò e chiacchierano a due a due.",
              ],
            ],
          },
          {
            title: 'Si accorgono di te',
            body: [
              [
                'Guardane uno da vicino e lui ricambia lo sguardo. Accovacciati, e si accovaccia anche lui. Quando arrivano dei mostri alzano lo scudo, ma non combattono mai.',
              ],
            ],
          },
          {
            title: 'Solo scenografia',
            body: [
              [
                'Il mondo non sa che esistono: le creature li ignorano e non ti sbarrano mai la strada. Cammina contro di loro per spostarli.',
              ],
            ],
          },
          {
            title: 'Su un server con la mod',
            body: [
              [
                "Vedi ogni giocatore che ci abbia mai giocato, con l'aspetto che aveva, anche chi se n'è andato prima che tu entrassi. Altrove, vedi i giocatori che hai visto uscire.",
              ],
            ],
          },
          {
            title: 'Nelle impostazioni',
            body: [
              [
                { em: 'Giocatori disconnessi' },
                ' li mostra o li nasconde, e ',
                { em: 'Attività dei disconnessi' },
                ' attiva o disattiva la loro vita intorno al loro posto.',
              ],
            ],
          },
        ]),
      },
      birds: {
        title: 'Uccelli nel cielo',
        text: 'Stormi, oche in volo a V, rapaci, gabbiani e anatre riempiono il cielo, e li vedi da molto lontano.',
        points: [
          'Si posano su alberi, tetti, campi e spiagge',
          'Le anatre nuotano in stagni e fiumi',
          'Nulla viene aggiunto al tuo mondo',
        ],
        where: 'Ovunque, niente da configurare.',
        details: details([
          {
            title: 'Uccelli di ogni tipo',
            body: [
              [
                'Dalle oche in volo a V alle anatre negli stagni, ogni tipo vive dove deve: sugli alberi, lungo la costa, sui tetti, nei campi. Di notte escono i pipistrelli.',
              ],
            ],
          },
          {
            title: 'Reagiscono a te',
            body: [
              [
                "Avvicinati e volano via per posarsi un po' più in là. Non spariscono mai di colpo: si disperdono e si allontanano in volo.",
              ],
            ],
          },
          {
            title: 'Solo sul tuo schermo',
            body: [
              [
                'Gli uccelli li disegna solo il tuo gioco: nel tuo mondo non viene aggiunto nulla, e costano pochissimo.',
              ],
            ],
          },
          {
            title: 'Nelle impostazioni',
            body: [
              [
                { em: 'Mostra uccelli' },
                ' li attiva o disattiva, e ',
                { em: 'Tipi di uccelli...' },
                ' ti fa scegliere quali tipi volano.',
              ],
            ],
          },
        ]),
      },
      light: {
        title: 'Pensata per restare leggera',
        text: 'Invece di pensare, le creature lontane riproducono semplici animazioni già pronte, e molto lontano diventano immagini leggere di sé stesse.',
        points: [
          'Le creature nascoste dietro le colline non vengono disegnate',
          'Abbassa la distanza di simulazione e tieni un mondo vivo',
          'Molte più creature allo stesso costo',
        ],
        where: 'Tutto gira nel tuo gioco. Il server condivide solo le posizioni.',
        details: details([
          {
            title: 'Animazioni semplici da lontano',
            body: [
              [
                'Le creature lontane non hanno IA: camminano, brucano e si guardano intorno con animazioni che si adattano al terreno. Il tuo gioco non deve farle ragionare, quindi resta veloce.',
              ],
            ],
          },
          {
            title: 'Immagini semplificate',
            body: [
              [
                'Come molti giochi, Living Horizon disegna creature, veicoli e giocatori lontani come immagini leggere invece che come modelli 3D completi. A quella distanza sembrano identici, per una frazione del costo. Con un pacchetto di shader come Photon, le immagini sono illuminate come il resto del mondo.',
              ],
            ],
          },
          {
            title: 'Un mondo vivo che costa meno',
            body: [
              [
                'Le creature nascoste dietro le colline o il terreno lontano non vengono disegnate affatto. Abbassa la distanza di simulazione per guadagnare FPS e continua a vedere un mondo vivo intorno a te. Un server con la mod ha pochissimo da fare: il tuo gioco gestisce tutto ciò che vedi.',
              ],
            ],
          },
          {
            title: 'Livelli di qualità',
            body: [
              [
                'Scegli un livello di ',
                { em: 'Qualità' },
                ', da ',
                { em: 'Bassa' },
                ' a ',
                { em: 'Ultra' },
                ', per impostare tutto in un colpo; i valori predefiniti sono la scelta equilibrata. Le impostazioni sono nella schermata Opzioni, in Mod Menu e nelle Impostazioni video di Sodium, in 14 lingue.',
              ],
              [
                'Attenzione: con ',
                { em: 'Limite creature' },
                ' e ',
                { em: 'Visibilità creature' },
                ' entrambi su ',
                { em: 'Illimitato' },
                ', il gioco può andare in crash.',
              ],
            ],
          },
        ]),
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
      unexplored: 'Creature indovinate dal seme',
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
      install: {
        title: 'Metti il jar nella cartella mods del server',
        text: 'Lo stesso file del tuo gioco, più la Fabric API su Fabric e Quilt. Niente da configurare.',
      },
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
    },
  },

  compatibility: {
    eyebrow: 'Compatibilità',
    title: 'Distant Horizons, Voxy, Ecstatic…',
    accent: 'o niente del tutto.',
    text: 'Living Horizon trova da sola la tua mod per il terreno lontano: creature e giocatori camminano sul suo suolo, si nascondono dietro le sue colline e svaniscono nella sua nebbia. Senza, tiene vivo il mondo oltre la tua distanza visiva.',
    /** A card per mod; the names are the mods' own. */
    cards: {
      dh: {
        text: 'Dalla 2.3 in poi. Creature e giocatori sul suo terreno, dietro le sue colline.',
      },
      voxy: { text: 'Creature e giocatori sul suo terreno, anche con i pacchetti di shader.' },
      lodistance: { text: 'Fabric, Minecraft 26.3, con OpenGL e senza shader.' },
      farView: {
        text: 'Forge e NeoForge, Minecraft dalla 1.20.1 alla 1.21.4. Creature sul suo terreno.',
      },
      ecstatic: {
        text: 'NeoForge, Minecraft 1.21.1, giocatore singolo. Creature sul suo terreno.',
      },
      bobby: {
        text: 'Creature e giocatori sul terreno che conserva oltre la distanza visiva del server.',
      },
      iris: { text: 'I pacchetti di shader funzionano, come Photon e Complementary Unbound.' },
      vanilla: {
        title: 'Vanilla',
        text: 'Nessuna mod per il terreno lontano necessaria: abbassa la distanza visiva e di simulazione e vedi comunque un mondo vivo.',
      },
    },
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: 'E le tue altre mod?',
      text: (n: number) =>
        p(n, {
          one: '{n} mod in elenco: shader, prestazioni, mod di creature. Cosa funziona e cosa aspetta ancora un tester.',
          many: '{n} di mod in elenco: shader, prestazioni, mod di creature. Cosa funziona e cosa aspetta ancora un tester.',
          other:
            '{n} mod in elenco: shader, prestazioni, mod di creature. Cosa funziona e cosa aspetta ancora un tester.',
        }),
      link: 'Vedi le mod compatibili',
    },
    matrixTitle: 'Versioni di Minecraft e loader',
    matrixText: 'Un jar per ogni versione del gioco e loader.',
    /** Next to the "?" of the table: a link to report a build. */
    report: 'Ne hai provata una? Segnalala',
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

  /** Testing, contributing and the Discord, in one section. */
  help: {
    eyebrow: 'Partecipa',
    title: 'Una beta,',
    accent: 'costruita con i suoi giocatori.',
    test: {
      title: 'Provala sulla tua configurazione',
      text: 'Dicci come gira con la tua versione del gioco, il tuo loader e le tue mod, bene o male. Ogni segnalazione aiuta.',
      /** Under the text, once the builds are known. */
      untested: (n: number) =>
        p(n, {
          one: '{n} build aspetta ancora un primo tester',
          other: '{n} build aspettano ancora un primo tester',
        }),
      report: 'Segnala compatibilità',
    },
    code: {
      title: 'Contribuisci',
      text: "Codice, correzioni e traduzioni arrivano come pull request su GitHub. L'IA è benvenuta, purché tu legga, capisca e testi ciò che scrive.",
      guide: 'Guida per contribuire',
    },
    discord: {
      title: 'Entra su Discord',
      text: "Domande, novità, schermate e aiuto, con l'autore e gli altri giocatori.",
      join: 'Entra su Discord',
    },
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
    /** The link to the changelog page, on the home page. */
    every: 'Vedi tutte le versioni',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Domande?',
    accent: 'Risposte.',
    text: 'Le domande più frequenti dei giocatori. Per tutto il resto, chiedi su Discord.',
    groups: {
      how: 'Come funziona',
      compatibility: 'Compatibilità',
      performance: 'Prestazioni e impostazioni',
      multiplayer: 'Multigiocatore',
      downloads: 'Download e licenza',
      ai: 'IA',
    },
    questions: questions({
      visual: {
        q: 'È solo visiva? Rompe le farm di creature?',
        a: [
          [
            'È solo visiva, nessuna IA. Le creature vere funzionano come senza la mod, quindi farm, generazione delle creature e limite di creature non cambiano. Non puoi colpire una creatura lontana.',
          ],
        ],
      },
      real: {
        q: 'Le creature lontane sono vere o messe a caso?',
        a: [
          [
            "Sono creature vere, dove il tuo gioco o il server le ha viste l'ultima volta. Una che nel frattempo è morta o sparita può ancora comparire finché non ti avvicini. A quel punto viene dimenticata.",
          ],
        ],
      },
      simulation: {
        q: 'In cosa è diversa da una distanza di simulazione o delle entità più alta?',
        a: [
          [
            'Una distanza di simulazione più alta fa gestire al server più creature vere, il che costa molto, e il server le invia comunque solo fino a una certa distanza. Living Horizon disegna copie che il server non gestisce. Riproducono animazioni già pronte e, da lontano, diventano immagini piatte (',
            { em: 'Entità semplificate' },
            ').',
          ],
        ],
      },
      range: {
        q: 'Fino a che distanza mostra creature e giocatori?',
        a: [
          [
            'Creature: 512 blocchi per impostazione predefinita, fino a ',
            { em: 'Illimitata' },
            ' con ',
            { em: 'Visibilità creature' },
            '. Giocatori, barche e veicoli: a qualsiasi distanza per impostazione predefinita, che ',
            { em: 'Visibilità giocatori' },
            ' e ',
            { em: 'Visibilità entità' },
            " possono limitare. Una creatura compare solo dopo che il tuo gioco o il server l'ha vista.",
          ],
        ],
      },
      mods: {
        q: 'Funziona con la mia mod?',
        a: [
          [
            'Molto probabilmente. Voxy, Distant Horizons, Lodistance, Ecstatic, Bobby, Sodium, Iris e i pacchetti di shader funzionano con essa (vedi ',
            { link: 'compatibilitySection', text: 'Compatibilità' },
            "). Living Horizon aggiunge solo le sue figure: non cambia il modo in cui le altre mod disegnano il mondo. Le mod non ancora testate sono elencate con l'etichetta ",
            { link: 'modCompatibility', text: 'mod compatibility' },
            ' su GitHub. Se qualcosa si rompe, apri una ',
            { link: 'issues', text: 'issue' },
            ' con il nome e la versione della mod.',
          ],
        ],
      },
      modMobs: {
        q: 'Le creature di altre mod si vedono da lontano?',
        a: [
          [
            'Sì, purché usino il sistema di entità di Minecraft. Se le entità di una mod funzionano in modo troppo diverso, chiedi di supportarle in una ',
            { link: 'issues', text: 'issue' },
            ' o su ',
            { link: 'discord', text: 'Discord' },
            '.',
          ],
        ],
      },
      farTerrain: {
        q: 'Mi servono Voxy, Distant Horizons, Lodistance o Ecstatic?',
        a: [
          [
            'No. Senza, creature e giocatori lontani compaiono sul terreno del gioco stesso, fino alla tua distanza visiva. Con uno dei due, compaiono anche sul suo terreno lontano.',
          ],
        ],
      },
      frameRate: {
        q: 'Abbasserà i miei FPS?',
        a: [
          [
            'Disegnare più entità costa FPS. Se il gioco rallenta, lascia ',
            { em: 'Creature semplificate' },
            ' e ',
            { em: 'Entità semplificate' },
            ' su Sì e abbassa la ',
            { em: 'Qualità' },
            '. Con ',
            { em: 'Limite creature' },
            ' e ',
            { em: 'Visibilità creature' },
            ' entrambi su ',
            { em: 'Illimitato' },
            ', il gioco può andare in crash.',
          ],
        ],
      },
      choose: {
        q: 'Posso scegliere cosa mostrare?',
        a: [
          [
            'Sì. ',
            { em: 'Mostra creature' },
            ', ',
            { em: 'Mostra giocatori' },
            ', ',
            { em: 'Giocatori disconnessi' },
            ' e ',
            { em: 'Mostra uccelli' },
            ' attivano o disattivano ogni parte. Con ',
            { em: 'Creature ed entità...' },
            ' scegli creatura per creatura.',
          ],
        ],
      },
      world: {
        q: 'Modifica il mio mondo o carica chunk?',
        a: [
          [
            'No. Non cambia nulla nel tuo mondo e non carica alcun chunk. Ciò che ricorda lo tiene in file suoi: nella cartella ',
            { code: 'config' },
            ' e, per ciò che il server condivide, in ',
            { code: 'livinghorizon-positions.dat' },
            " nella cartella del mondo. Se rimuovi la mod, il tuo mondo resta com'era.",
          ],
          ["Su un server, la mod invia le posizioni solo ai giocatori che ce l'hanno."],
        ],
      },
      server: {
        q: 'Il server ha bisogno della mod?',
        a: [
          [
            'No. Quasi tutto funziona in giocatore singolo, e con la mod puoi entrare in qualsiasi server. Ma per i giocatori a qualsiasi distanza serve la mod sul server, che così condivide anche più creature e i giocatori disconnessi. Vedi ',
            { link: 'serversSection', text: 'Multigiocatore' },
            '.',
          ],
        ],
      },
      paper: {
        q: 'Funziona sui server Paper o Spigot?',
        a: [
          [
            'Puoi giocarci con la mod, come su qualsiasi server senza di essa. La parte server gira solo su Fabric, Quilt, NeoForge e Forge, quindi un server Paper o Spigot non condivide nulla. Un plugin per Paper è in discussione in ',
            { link: 'paperPlugin', text: '#156' },
            '.',
          ],
        ],
      },
      nothing: {
        q: 'Non vedo creature o giocatori lontani. Perché?',
        a: [
          {
            list: [
              [
                'I giocatori lontani richiedono la mod sul server. Il suo gestore può anche limitare chi viene condiviso (vedi le ',
                { link: 'serverSettings', text: 'impostazioni del server' },
                ').',
              ],
              ['Su un server senza la mod compaiono solo le creature che hai incontrato.'],
            ],
          },
        ],
      },
      cheat: {
        q: 'Si può usare per barare? È permessa sui server?',
        a: [
          [
            'Mostra gli altri giocatori solo dove il server lo permette. I giocatori lontani compaiono solo su un server con la mod, e il suo gestore sceglie cosa condividere: fino a che distanza, solo con i compagni di squadra, e quali giocatori e dimensioni restano nascosti. ',
            { code: '"sharePlayers": false' },
            ' disattiva la condivisione (vedi le ',
            { link: 'serverSettings', text: 'impostazioni del server' },
            '). I giocatori invisibili e quelli in modalità spettatore non vengono mai condivisi. Quelli accovacciati sì, per ora (',
            { link: 'sneaking', text: '#269' },
            ').',
          ],
          [
            'Sugli altri server vedi solo ciò che ha visto il tuo gioco. La mod non invia nulla al server. Ogni server ha però le sue regole sulle mod: chiedi al suo staff.',
          ],
        ],
      },
      bedrock: {
        q: 'Esiste una versione Bedrock?',
        a: [['No. Living Horizon è una mod per Minecraft Java Edition.']],
      },
      version: {
        q: 'La mia versione del gioco non è supportata. Lo sarà?',
        a: [
          [
            'Scrivi su ',
            { link: 'discord', text: 'Discord' },
            ' con quale versione e quale loader giochi. Aiuta a scegliere cosa arriverà dopo.',
          ],
        ],
      },
      modpack: {
        q: 'Posso metterla in un modpack?',
        a: [["Sì. Usa il file ufficiale e cita l'autore."]],
      },
      abandoned: {
        q: 'E se il progetto venisse abbandonato?',
        a: [
          [
            'La licenza lo prevede. Quando il progetto viene dichiarato abbandonato (il suo repository archiviato, o il suo README che lo dice), la sua licenza diventa la GPL: chiunque può portare avanti il progetto, citandone gli autori. Vedi la sezione 5 della ',
            { link: 'license', text: 'licenza' },
            '.',
          ],
        ],
      },
      ai: {
        q: "È stata fatta con l'IA?",
        a: [
          [
            "Sì, in parte. L'IA scrive gran parte del codice. L'autore, clixmods, decide come funziona la mod, prova ogni modifica nel gioco e corregge ciò che va storto. Senza l'IA, un progetto di queste dimensioni non esisterebbe.",
          ],
          [
            'Le idee vengono dallo sviluppo di videogiochi, che è il lavoro di clixmods: impostor, LOD e animazioni già pronte sono trucchi che i giochi usano da anni. clixmods crea mod dal 2017, come la mappa di Call of Duty: Black Ops III ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ', scaricata oltre un milione di volte sullo Steam Workshop (vedi il ',
            { link: 'portfolio', text: 'portfolio' },
            ').',
          ],
        ],
      },
      modrinth: {
        q: 'È su Modrinth? Perché lì non è in elenco?',
        a: [
          [
            'È su ',
            { link: 'modrinth', text: 'Modrinth' },
            ', ma non in elenco: non compare nella ricerca di Modrinth. Da agosto 2026 ',
            { link: 'modrinthRules', text: 'le regole di Modrinth' },
            " non permettono che un progetto fatto principalmente con l'IA sia pubblico, quindi lo staff l'ha tolta dall'elenco. CurseForge, Nexus Mods e la ",
            { link: 'releases', text: 'pagina delle release' },
            ' hanno gli stessi file.',
          ],
          [
            'Non in elenco non vuol dire non sicura. Riguarda il modo in cui la mod è fatta, non ciò che fa:',
          ],
          {
            list: [
              [
                'Il codice è pubblico: chiunque può leggerlo nel suo ',
                { link: 'github', text: 'repository GitHub' },
                '.',
              ],
              [
                'GitHub compila ogni release da questo codice, e i suoi log di compilazione sono pubblici.',
              ],
              [
                'La mod non ha codice suo che si connette a internet. Le skin dei giocatori arrivano da Mojang tramite il gioco, e il link a Discord si apre solo quando ci clicchi.',
              ],
            ],
          },
        ],
      },
    }),
    ask: 'Chiedi su Discord',
    issue: 'Apri una issue',
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
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) =>
      p(n, { one: '{n} modpack', many: '{n} di modpack', other: '{n} modpack' }),
  },

  modpacks: {
    eyebrow: 'Modpack',
    title: 'Già in alcuni',
    accent: 'modpack.',
    text: 'I pack che includono Living Horizon. Ne hai creato uno? Comparirà qui da solo.',
    by: (authors: string) => `di ${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `Scarica su ${platform}`,
    none: 'Nessun modpack include ancora Living Horizon. Il tuo potrebbe essere il primo.',
    loading: 'I modpack compaiono qui tra un attimo.',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) =>
      p(n, {
        one: 'Vai alla pagina dei modpack',
        many: 'Vedi tutti i {n} di modpack',
        other: 'Vedi tutti i {n} modpack',
      }),
  },

  mods: {
    eyebrow: 'Compatibilità',
    title: "Va d'accordo",
    accent: 'con le tue mod.',
    text: 'Direttamente dal progetto su GitHub, aggiornato a ogni test: cosa funziona, cosa ha un problema noto e cosa aspetta ancora qualcuno che la provi. Le note sono in inglese.',
    search: 'Cerca una mod',
    filter: 'Filtra per stato',
    all: 'Tutte',
    status: { works: 'Funziona', issue: 'Problema noto', untested: 'Non ancora testata' },
    /** The heading of the shader packs, after the mods. */
    shaders: 'Pacchetti di shader',
    issue: (n: number) => `Issue #${n}`,
    /** A link that only shows the platform's logo. */
    page: (platform: string) => `Pagina su ${platform}`,
    /**
     * The mods the modpacks that ship Living Horizon ship too: a pack runs them together, so
     * they work with it.
     */
    packs: {
      title: 'Nei modpack con Living Horizon',
      chip: 'Nei modpack',
      text: 'I modpack che includono Living Horizon lo usano anche con queste mod.',
      count: (n: number) =>
        p(n, { one: 'In {n} modpack', many: 'In {n} di modpack', other: 'In {n} modpack' }),
      more: (n: number) =>
        p(n, {
          one: 'Mostra {n} mod in più',
          many: 'Mostra {n} di mod in più',
          other: 'Mostra {n} mod in più',
        }),
    },
    none: 'Nessuna mod corrisponde alla ricerca.',
    missing: {
      title: 'Manca una mod?',
      text: 'Dicci come gira Living Horizon con lei, bene o male: ogni segnalazione aiuta.',
      link: 'Segnala una mod',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: "Non è stato possibile caricare l'elenco. È sempre su GitHub.",
    failedLink: "Vedi l'elenco su GitHub",
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
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: 'Elenco dei modpack da', after: '' },
    official:
      'Non è un prodotto ufficiale di Minecraft. Non approvato da Mojang o Microsoft né associato a loro.',
  },
};
