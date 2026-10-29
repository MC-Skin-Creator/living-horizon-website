import { Messages } from './en';
import { plural } from './plural';
import { questions } from './rich';

const p = plural('de');

export const de: Messages = {
  meta: {
    title: 'Living Horizon: bringt Leben in die Ferne',
    description:
      'Living Horizon ist eine Minecraft-Mod, die Kreaturen, Dorfbewohner, Vögel und andere Spieler am Horizont lebendig hält, über deine Sichtweite hinaus und auf dem fernen Gelände von Distant Horizons und Voxy. Im Einzelspieler, im LAN und auf Servern. Fabric, Quilt, NeoForge und Forge. Jetzt als Beta.',
  },

  language: {
    label: 'Sprache',
  },

  common: {
    download: 'Download',
    becomeTester: 'Tester werden',
    needsTesters: 'Tester gesucht',
    tested: 'Getestet',
    seenWorking: 'Läuft nachweislich in einer Welt',
    new: 'Neu',
    beta: 'Beta',
    changelog: 'Changelog',
    logo: (name: string) => `Logo von ${name}`,
  },

  nav: {
    label: 'Hauptnavigation',
    tag: 'beta',
    menu: 'Menü',
    features: 'Funktionen',
    compatibility: 'Kompatibilität',
    testers: 'Tester',
    contribute: 'Mitmachen',
    faq: 'FAQ',
    download: (version: string) => `Download v${version}`,
  },

  hero: {
    scene:
      'Illustration: ein Horizont in der Abenddämmerung mit kantigen Hügeln, auf denen Dorfbewohner, Tiere, Reiter und andere Spieler in weiter Ferne noch leben, darüber ein Zug Wildgänse.',
    news: 'Die Mod läuft jetzt auch auf Servern',
    tagline: 'Bringt Leben',
    taglineAccent: 'in die Ferne.',
    lede: {
      before:
        'Tiere, Dorfbewohner, Vögel und andere Spieler leben am Horizont weiter, weit über deine Sichtweite hinaus, direkt auf dem fernen Gelände von',
      between: 'und',
      after: ', oder in Vanilla. Im Einzelspieler, im LAN und auf Servern.',
    },
    facts: 'Das Projekt auf einen Blick',
    latest: 'Aktuell',
    updated: 'Aktualisiert',
    downloads: 'Downloads',
    minecraft: 'Minecraft',
    loaders: 'Loader',
  },

  concept: {
    eyebrow: 'Worum es geht',
    title: 'Deine Sichtweite endet.',
    accent: 'Die Welt nicht.',
    text: 'Minecraft zeichnet Kreaturen und Spieler nur bis wenige Chunks um dich herum. Mods für fernes Gelände ziehen die Landschaft bis zum Horizont, doch dort bleibt sie leer und still. Living Horizon bringt das Leben dorthin zurück.',
    diagram:
      'Diagramm: Ohne Living Horizon gibt es Kreaturen nur innerhalb deiner Sichtweite, und das ferne Gelände ist leer. Mit der Mod leben Kreaturen, Spieler und Vögel auf dem ganzen fernen Gelände bis zum Horizont.',
    you: 'Du',
    renderDistance: 'Deine Sichtweite',
    farTerrain: 'Fernes Gelände ·',
    horizon: 'Horizont',
    without: { before: '', mark: 'Ohne', after: 'Living Horizon' },
    with: { before: '', mark: 'Mit', after: 'Living Horizon' },
    empty: 'leer',
  },

  features: {
    eyebrow: 'Funktionen',
    title: 'Alles, was lebt,',
    accent: 'auch jenseits deiner Sichtweite.',
    text: 'Kreaturen, Spieler, abgemeldete Spieler und Vögel, gezeichnet von deinem eigenen Spiel und so leicht, dass du die Mod einfach anlassen kannst.',
    offline: '(offline)',
    near: 'Aus der Nähe: die ganze Kreatur',
    far: 'Aus der Ferne: ein flaches Bild',
    preset: 'Voreinstellung',
    presets: ['Niedrig', 'Normal', 'Hoch', 'Ultra'],
    mobDistance: 'Kreaturen‐Sichtweite',
    items: {
      mobs: {
        title: 'Jede Kreatur, bis zum Horizont',
        text: 'Tiere grasen, Dorfbewohner streifen durch ferne Dörfer, Golems halten Wache. Jede Kreatur, die das Spiel zeichnen kann, auch die aus anderen Mods.',
        points: [
          'Auf dem Gelände von Voxy und Distant Horizons oder in Vanilla',
          'Hinter fernen Hügeln verborgen, auch mit Shaderpaketen',
          'Unter „Kreaturen & Objekte“ einzeln auswählbar',
        ],
        where: 'Überall. Auf einem Server mit der Mod sogar Kreaturen, denen du nie begegnet bist.',
      },
      players: {
        title: 'Spieler in jeder Entfernung',
        text: 'Sieh jeden anderen Spieler, wo auch immer er auf der Karte ist, mit Skin, Rüstung, Gegenständen in der Hand und allem, worauf er reitet.',
        points: [
          'Pferde, Boote, Loren und Glückliche Ghasts',
          'Flüssig: Der Server teilt die Positionen fünfmal pro Sekunde',
          'Spieler ohne die Mod können trotzdem beitreten',
        ],
        where: 'Im LAN und auf Servern mit der Mod.',
      },
      offline: {
        title: 'Abgemeldete Spieler leben weiter',
        text: 'Meldet sich jemand ab, bleibt eine Kopie mit seinem Namen dort, wo er gegangen ist. Sie spaziert, sitzt, öffnet Truhen und schläft nachts, bis er zurückkommt.',
        points: [
          '(offline) hinter dem Namen, dazu wann er zuletzt gesehen wurde',
          'Auch Spieler, die gegangen sind, bevor du kamst',
          'Nur zur Zierde: Sie blockieren weder dich noch Kreaturen',
        ],
        where: 'Überall. Auf einem Server mit der Mod jeder Spieler, der dort je gespielt hat.',
      },
      birds: {
        title: 'Vögel am Himmel',
        text: 'Schwärme, Gänse in V-Formation, Greifvögel, Möwen, Enten und Fledermäuse fliegen über das Land, und du siehst sie schon von Weitem.',
        points: [
          'Sie landen auf Bäumen, Dächern, Feldern und Stränden',
          'Enten schwimmen auf ihrem Teich umher',
          'Kleine 3D-Modelle aus der Nähe, flache Bilder aus der Ferne',
        ],
        where: 'Überall, nichts einzurichten.',
      },
      light: {
        title: 'Von Grund auf leicht',
        text: 'Ferne Kreaturen haben keine KI: Sie spielen fertige Animationen ab, die zum Boden passen. In sehr weiter Ferne werden sie zu flachen Bildern ihrer selbst.',
        points: [
          'Hinter Hügeln verborgene Kreaturen werden nicht gezeichnet',
          'Senk deine Simulationsdistanz und behalte trotzdem eine lebendige Welt',
          'Vereinfachte Objekte: viel mehr Kreaturen für denselben Aufwand',
        ],
        where: 'Alles läuft in deinem Spiel. Der Server teilt nur Positionen.',
      },
      settings: {
        title: 'Einstellungen, wo du sie suchst',
        text: 'In den Optionen, in Mod Menu, in den Grafikeinstellungen von Sodium oder mit /livinghorizon config. Jede Einstellung erklärt, was sie tut.',
        points: [
          'Die Voreinstellungen Niedrig, Normal, Hoch und Ultra stellen alles auf einmal ein',
          'In 14 Sprachen',
          '„Auf Standard zurücksetzen“ stellt alles wieder her',
        ],
        where: 'Die Standardwerte sind die ausgewogene Wahl.',
      },
    },
  },

  compare: {
    eyebrow: 'Vorher / nachher',
    title: 'Gleiche Aussicht.',
    accent: 'Eine Mod.',
    text: 'Zieh am Regler. Links ist das ferne Gelände da, aber leer. Rechts erweckt Living Horizon es wieder zum Leben.',
    tabs: 'Szenen',
    shots: {
      shaders: {
        title: 'Im Spiel · Shader',
        text: 'Mit Shaderpaket, Sichtweite und Simulationsdistanz 12: Die Tiere auf den fernen Hügeln sind zurück.',
      },
      vanilla: {
        title: 'Im Spiel · Vanilla',
        text: 'Ohne Shader, Sichtweite und Simulationsdistanz 12: Herden von Kühen und Pferden füllen die fernen Ebenen.',
      },
    },
    scenes: {
      village: {
        title: 'Dorf in der Ebene',
        text: 'Dorfbewohner, ein Golem und grasende Tiere rund um ein fernes Dorf.',
      },
      ridge: {
        title: 'Reiter auf dem Kamm',
        text: 'Andere Spieler mit ihren Pferden auf den Hügeln, samt Namen über dem Kopf.',
      },
      coast: {
        title: 'Küste am Mittag',
        text: 'Boote auf dem Meer, Dorfbewohner am fernen Ufer, Möwen über dem Wasser.',
      },
    },
    legendNear: 'Deine Sichtweite: so oder so lebendig',
    legendFar: 'Fernes Gelände: ohne die Mod leer',
    note: {
      before:
        'Stilisierte Darstellung des Effekts. Die ersten Tabs sind echte Screenshots aus dem Spiel. Hast du selbst einen guten?',
      link: 'Teil ihn auf Discord',
      after: '.',
    },
    shotWithout: (text: string) => `Screenshot aus dem Spiel ohne Living Horizon. ${text}`,
    shotWith: (text: string) => `Screenshot aus dem Spiel mit Living Horizon. ${text}`,
    sceneWithout: (text: string) => `Ohne Living Horizon: ${text}`,
    sceneWith: (text: string) => `Mit Living Horizon: ${text}`,
    badgeWithout: 'Ohne die Mod',
    badgeWith: 'Mit Living Horizon',
    slider: 'Verschieben, um die Ansicht ohne und mit Living Horizon zu vergleichen',
  },

  servers: {
    eyebrow: 'Mehrspieler',
    title: 'Pack sie auf deinen Server.',
    accent: 'Alle sehen alle.',
    text: 'Dieselbe JAR-Datei läuft auf Servern. Der Server teilt mit allen, die die Mod haben, wo jeder Spieler ist, die Kreaturen um ihn herum und die abgemeldeten Spieler.',
    cover: 'Der Schriftzug von Living Horizon vor einer Menge von Spieler- und Kreaturenköpfen.',
    since: (version: string) => `Serverunterstützung seit ${version}`,
    steps: {
      jar: {
        title: 'Leg die JAR in den mods-Ordner des Servers',
        text: 'Dieselbe Datei wie für dein Spiel, passend zur Minecraft-Version und zum Loader des Servers, auf Fabric und Quilt dazu die Fabric API. Halte sie auf beiden Seiten aktuell.',
      },
      start: {
        title: 'Starte den Server',
        text: 'Nichts einzurichten. Der Server speichert, was er teilt, im Weltordner, so bleibt es auch nach einem Neustart erhalten.',
      },
      see: {
        title: 'Spieler mit der Mod sehen alle',
        text: 'Jeden Spieler in jeder Entfernung, mit Skin, Rüstung und Reittier, und die Kreaturen um ihn herum, auch solche, denen sie nie begegnet sind.',
      },
    },
    matrixTitle: 'Was du siehst, je nachdem, wo du spielst',
    matrixText:
      'Im Einzelspieler funktioniert alles. Auf einem Server erledigt die Mod auf dem Server den Rest.',
    matrixLabel: 'Funktionen nach Spielart',
    feature: 'Funktion',
    places: ['Einzelspieler', 'LAN-Welt', 'Server mit der Mod', 'Server ohne die Mod'],
    rows: {
      mobs: 'Kreaturen am Horizont',
      players: 'Spieler in jeder Entfernung',
      offline: 'Abgemeldete Spieler',
      birds: 'Vögel',
    },
    cells: {
      mobsMet: 'Nur Kreaturen, denen du begegnet bist',
      offlineEven: 'Auch wer ging, bevor du kamst',
      offlineSeen: 'Nur wen du gehen gesehen hast',
    },
    yes: 'Ja',
    no: 'Nein',
    noOthers: 'Keine anderen Spieler',
    notApplicable: 'Nicht zutreffend',
    notes: {
      lan: {
        title: 'LAN: nichts zu installieren',
        text: 'Eine im LAN geöffnete Welt teilt alles über das Spiel des Hosts.',
      },
      join: {
        title: 'Jeder kann beitreten',
        text: 'Spieler ohne die Mod können trotzdem beitreten. Der Server schickt ihnen nichts.',
      },
      tell: {
        title: 'Sag es deinen Spielern',
        text: 'Der Server teilt die Position jedes Spielers mit den Spielern, die die Mod haben.',
      },
      datapack: {
        title: 'Das Datenpaket benutzt?',
        text: 'Entferne es aus dem datapacks-Ordner der Welt: Die Mod auf dem Server ersetzt es.',
      },
    },
  },

  compatibility: {
    eyebrow: 'Kompatibilität',
    title: 'Gemacht für fernes Gelände.',
    accent: 'Gut auch ohne.',
    text: 'Living Horizon erkennt Distant Horizons oder Voxy von selbst und zeichnet Kreaturen und Spieler direkt auf deren Gelände. Ohne sie hält die Mod die Welt jenseits deiner Sichtweite lebendig.',
    works: 'Funktioniert',
    cards: {
      dh: {
        text: 'Kreaturen und Spieler werden auf seinem fernen Gelände gezeichnet und verschwinden hinter seinen Hügeln. Ab Distant Horizons 2.3.',
        link: 'Distant Horizons holen',
      },
      voxy: {
        text: 'Der Horizont von Voxys Gelände erwacht zum Leben: grasende Tiere, ferne Dörfer, Spieler unterwegs.',
        link: 'Voxy holen',
      },
      vanilla: {
        title: 'Vanilla',
        text: 'Keine Mod für fernes Gelände nötig. Spiel mit niedriger Sichtweite und Simulationsdistanz und sieh trotzdem eine lebendige Welt.',
      },
    },
    extras: [
      'Iris-Shaderpakete (Photon, Complementary…)',
      'Dieselbe JAR auf Servern, oder ohne sie jedem Server beitreten',
      'Einstellungen in den Grafikeinstellungen von Sodium (0.8+)',
    ],
    matrixTitle: 'Minecraft-Versionen und Loader',
    matrixText: 'Eine JAR pro Spielversion und Loader.',
    builds: (builds: number, range: string) =>
      p(builds, { one: `{n} Build, für ${range}.`, other: `{n} Builds, für ${range}.` }),
    keyUntested: 'Startet, Tester gesucht',
    table: 'Kompatibilitätstabelle',
    untested: 'Startet im Spiel, in einer Welt noch nicht beim Zeichnen gesehen',
    noBuild: 'Kein Build',
    notAvailable: 'Nicht verfügbar',
    fallback: (range: string) =>
      `Minecraft ${range} auf Fabric, Quilt, NeoForge (ab 1.20.6) und Forge.`,
    fullTable: 'Ganze Tabelle auf GitHub',
    loaders: {
      fabric: 'Mit der Fabric API. Mod Menu optional.',
      quilt: 'Mit der Fabric API (QFAPI).',
      neoforge: 'Ab Minecraft 1.20.6, sonst nichts nötig.',
      forge: 'Sonst nichts nötig.',
    },
  },

  performance: {
    eyebrow: 'Leistung',
    title: 'Ein lebendiger Horizont,',
    accent: 'der dir FPS zurückgibt.',
    design: {
      eyebrow: 'Optimiertes Rendering',
      title: 'Ein lebendiger Horizont,',
      accent: 'der dir keine FPS frisst.',
      text: 'Living Horizon ist von Anfang an darauf ausgelegt, leicht zu bleiben: Ferne Figuren werden auf die günstige Art gezeichnet, und nur, wenn man sie sehen kann. So kannst du Sichtweite und Simulationsdistanz senken und die Welt trotzdem lebendig halten.',
      cards: {
        pictures: {
          title: 'Leichte Bilder in der Ferne',
          text: 'Ab einer bestimmten Entfernung wird eine ferne Figur als flaches Bild ihrer selbst gezeichnet statt als volles Modell. In dieser Größe sieht sie gleich aus, für einen Bruchteil des Aufwands.',
        },
        hidden: {
          title: 'Verdeckt heißt übersprungen',
          text: 'Kreaturen hinter dem fernen Gelände werden gar nicht gezeichnet, und Animationen stoppen, sobald eine Figur zu klein oder zu weit weg ist, um aufzufallen.',
        },
        presets: {
          title: 'Qualitätsvoreinstellungen',
          text: 'Niedrig, Normal, Hoch und Ultra legen in einem Rutsch die Zahl der Kreaturen, ihre Reichweite und die Vögel fest. Die Standardwerte sind die ausgewogene Wahl.',
        },
        server: {
          title: 'Leicht für den Server',
          text: 'Jede Animation läuft im Spiel der Spieler. Ein Server mit der Mod teilt nur Positionen.',
        },
      },
    },
    numbers: 'In Zahlen',
    measured: 'Gemessen von Spielern und vom Autor; das Setup steht unter jedem Wert.',
    noNumbers: {
      before:
        'Hier gibt es keine erfundenen Zahlen: Die Werte füllen sich, sobald echte Benchmarks eintreffen. Das eingebaute Debug-Panel (',
      after: ') zeigt die eigenen Kosten der Mod pro Tick und pro Bild.',
    },
    slots: {
      fps: { label: 'FPS-Gewinn', hint: 'die Mod zeichnet die Ferne statt des Spiels' },
      mobs: { label: 'Kreaturen am Horizont', hint: 'gleichzeitig gezeichnet' },
      distance: { label: 'Abgedeckte Entfernung', hint: 'jenseits der Sichtweite' },
      frame: { label: 'Kosten pro Bild', hint: 'aus dem Debug-Panel' },
    },
    setups: {
      fps: '120 → 150 FPS bei gleicher Sicht in die Ferne: eine kürzere Sichtweite, bei der Living Horizon die Kreaturen dahinter zeichnet, gegenüber dem Spiel, das selbst so weit zeichnet. Vom Autor gemessen.',
    },
    pending: (hint: string) => `Benchmark ausstehend · ${hint}`,
    share: 'Auf deinem Setup gemessen? Teil es',
  },

  testers: {
    eyebrow: 'Derzeit in der Beta',
    title: 'Hilf mit, den Horizont zum Leben zu erwecken.',
    lede: 'Living Horizon ist jung und läuft auf sehr vielen Kombinationen: Spielversionen, Loader, Versionen von Distant Horizons und Voxy, Shaderpakete, andere Mods. Noch nicht alle wurden ausprobiert. Wenn du damit spielst, sag uns, wie es läuft, gut oder schlecht: Jeder Bericht zählt.',
    asks: [
      'Deine Minecraft-Version und dein Loader',
      'Distant Horizons oder Voxy und deren Version',
      'Shaderpaket, falls vorhanden (Photon, Complementary…)',
      'Einzelspieler, LAN oder Server, mit oder ohne die Mod',
      'Ein Screenshot von dem, was du siehst',
    ],
    report: 'Kompatibilität melden',
    discord: 'Discord beitreten',
    issue: 'Issue eröffnen',
    status: 'Teststand',
    waiting: (builds: number) =>
      p(builds, {
        one: 'von {n} Build braucht noch einen ersten Tester',
        other: 'von {n} Builds brauchen noch einen ersten Tester',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, { one: '{n} Build läuft nachweislich', other: '{n} Builds laufen nachweislich' })}, ${waiting} warten noch`,
    seen: 'Läuft nachweislich',
    yours: 'Wartet auf dich',
    wanted: 'Am meisten gesucht',
    every: 'Jedes',
    everyRest: 'Setup verrät uns etwas Neues',
    loading: 'Ungetestete Kombinationen erscheinen hier, sobald die Projektdaten geladen sind.',
  },

  contribute: {
    eyebrow: 'Mitmachen',
    title: 'Bau mit uns.',
    accent: 'KI willkommen.',
    text: 'Living Horizon entsteht an einem einzigen Ort, seinem GitHub-Repository. Code, Fixes und Übersetzungen landen dort alle als Pull Requests.',
    steps: {
      talk: {
        title: 'Erst reden',
        text: 'Öffne bei allem, was über einen kleinen Fix hinausgeht, ein Issue, damit die Richtung abgestimmt ist, bevor die Arbeit gemacht wird.',
      },
      pr: {
        title: 'Pull Request öffnen',
        text: 'Arbeite auf einem Branch feature/* oder fix/* mit develop als Ziel. Commits sind auf Englisch, als Conventional Commits.',
      },
      build: {
        title: 'Bauen und testen',
        text: 'Ein einziger Gradle-Build kompiliert die Mod und führt die Tests aus. Die CI führt ihn auch bei jedem Pull Request aus.',
      },
      credit: {
        title: 'Werde genannt',
        text: 'Trag dich in CREDITS.md ein, und schreib eine Zeile ins Changelog, wenn Spieler die Änderung bemerken werden.',
      },
    },
    aiTitle: 'Du nutzt KI? Nur zu.',
    aiText:
      'KI gehört dazu, wie dieses Projekt entsteht, und du kannst sie problemlos für deinen Beitrag nutzen. Denk nur weiter über das nach, was sie schreibt: Lies, verstehe und teste deine Änderung, bevor du den Pull Request öffnest.',
    claude: {
      before: 'Claude funktioniert hier am besten: Es liest',
      between: 'und die Skills in',
      after: 'von selbst.',
    },
    terms: {
      before: 'Mit dem Öffnen eines Pull Requests akzeptierst du Abschnitt 3 der',
      link: 'Lizenz',
      after:
        ': Du behältst dein Urheberrecht und bleibst als Mitwirkender genannt, egal was später passiert.',
    },
    guide: 'Beitragsleitfaden lesen',
    issues: 'Offene Issues',
  },

  changelog: {
    eyebrow: 'Neueste Updates',
    title: 'Oft veröffentlicht,',
    accent: 'schnell behoben.',
    text: 'Direkt aus dem Changelog des Projekts auf GitHub.',
    textEnglish: 'Direkt aus dem Changelog des Projekts auf GitHub, auf Englisch.',
    latest: 'Neueste',
    release: 'Release',
    sides: { server: 'Server', client: 'Client' },
    kinds: { new: 'Neu', improved: 'Verbessert', fixed: 'Behoben' },
    more: (n: number) =>
      p(n, { one: '{n} weitere Änderung zeigen', other: '{n} weitere Änderungen zeigen' }),
    failed: 'Das Changelog konnte gerade nicht geladen werden. Auf GitHub findest du es immer.',
    full: 'Ganzes Changelog auf GitHub',
    releases: 'Alle Releases',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Fragen?',
    accent: 'Antworten.',
    text: 'Was Spieler am häufigsten fragen. Alles andere frag einfach auf dem Discord.',
    groups: {
      how: 'So funktioniert es',
      compatibility: 'Kompatibilität',
      performance: 'Leistung und Einstellungen',
      multiplayer: 'Mehrspieler',
      downloads: 'Downloads und Lizenz',
      ai: 'KI',
    },
    questions: questions({
      visual: {
        q: 'Ist es nur optisch? Macht es Kreaturenfarmen kaputt?',
        a: [
          [
            'Es ist rein optisch, ohne KI. Die echten Kreaturen verhalten sich wie ohne die Mod, Farmen, das Spawnen und die Kreaturenobergrenze ändern sich also nicht. Eine ferne Kreatur kannst du nicht schlagen.',
          ],
        ],
      },
      real: {
        q: 'Sind die fernen Kreaturen echt oder zufällig platziert?',
        a: [
          [
            'Es sind echte Kreaturen, dort, wo dein Spiel oder der Server sie zuletzt gesehen hat. Eine, die seitdem gestorben oder verschwunden ist, kann noch zu sehen sein, bis du in ihre Nähe kommst. Dann wird sie vergessen.',
          ],
        ],
      },
      simulation: {
        q: 'Was ist der Unterschied zu einer höheren Simulationsdistanz oder Objektweite?',
        a: [
          [
            'Bei einer höheren Simulationsdistanz berechnet der Server mehr echte Kreaturen, was viel kostet, und trotzdem schickt er sie nur bis zu einer gewissen Entfernung. Living Horizon zeichnet Kopien, die der Server nicht berechnet. Sie spielen fertige Animationen ab und werden in der Ferne zu flachen Bildern (',
            { em: 'Vereinfachte Objekte' },
            ').',
          ],
        ],
      },
      range: {
        q: 'Wie weit zeigt es Kreaturen und Spieler?',
        a: [
          [
            'Kreaturen: standardmäßig 512 Blöcke, mit ',
            { em: 'Kreaturen‐Sichtweite' },
            ' bis zu ',
            { em: 'Unbegrenzt' },
            '. Spieler: standardmäßig in jeder Entfernung, was ',
            { em: 'Spieler‐Sichtweite' },
            ' begrenzen kann. Eine Kreatur erscheint erst, wenn dein Spiel oder der Server sie gesehen hat.',
          ],
        ],
      },
      mods: {
        q: 'Funktioniert es mit meiner Mod?',
        a: [
          [
            'Sehr wahrscheinlich. Voxy, Distant Horizons, Sodium, Iris und Shaderpakete funktionieren damit (siehe ',
            { link: 'compatibilitySection', text: 'Kompatibilität' },
            '). Living Horizon fügt nur seine eigenen Figuren hinzu: Es ändert nicht, wie andere Mods die Welt zeichnen. Noch nicht getestete Mods stehen auf GitHub unter dem Label ',
            { link: 'modCompatibility', text: 'mod compatibility' },
            '. Wenn etwas kaputtgeht, eröffne ein ',
            { link: 'issues', text: 'Issue' },
            ' mit dem Namen und der Version der Mod.',
          ],
        ],
      },
      modMobs: {
        q: 'Erscheinen Kreaturen aus anderen Mods auch in der Ferne?',
        a: [
          [
            'Ja, solange sie das Objektsystem von Minecraft selbst nutzen. Wenn die Objekte einer Mod zu anders funktionieren, frag in einem ',
            { link: 'issues', text: 'Issue' },
            ' oder auf dem ',
            { link: 'discord', text: 'Discord' },
            ' nach Unterstützung dafür.',
          ],
        ],
      },
      farTerrain: {
        q: 'Brauche ich Voxy oder Distant Horizons?',
        a: [
          [
            'Nein. Ohne sie erscheinen ferne Kreaturen und Spieler auf dem Gelände des Spiels selbst, bis zu deiner Sichtweite. Mit einem von beiden erscheinen sie auch auf dessen fernem Gelände.',
          ],
        ],
      },
      frameRate: {
        q: 'Kostet es mich FPS?',
        a: [
          [
            'Mehr Objekte zu zeichnen kostet FPS. Wird dein Spiel langsamer, lass ',
            { em: 'Vereinfachte Objekte' },
            ' an und wähl eine niedrigere ',
            { em: 'Voreinstellung' },
            '. Stehen ',
            { em: 'Max. Kreaturen' },
            ' und ',
            { em: 'Kreaturen‐Sichtweite' },
            ' beide auf ',
            { em: 'Unbegrenzt' },
            ', kann das Spiel abstürzen.',
          ],
        ],
      },
      choose: {
        q: 'Kann ich wählen, was angezeigt wird?',
        a: [
          [
            'Ja. ',
            { em: 'Kreaturen anzeigen' },
            ', ',
            { em: 'Spieler anzeigen' },
            ', ',
            { em: 'Offline‐Spieler' },
            ' und ',
            { em: 'Vögel anzeigen' },
            ' schalten jeden Teil ein oder aus. Mit ',
            { em: 'Kreaturen & Objekte …' },
            ' wählst du Kreatur für Kreatur.',
          ],
        ],
      },
      world: {
        q: 'Verändert es meine Welt oder lädt es Chunks?',
        a: [
          [
            'Nein. Es ändert nichts an deiner Welt und lädt keinen Chunk. Was es sich merkt, speichert es in eigenen Dateien: im Ordner ',
            { code: 'config' },
            ' und, für das, was der Server teilt, in ',
            { code: 'livinghorizon-positions.dat' },
            ' im Weltordner. Entfernst du die Mod, bleibt deine Welt, wie sie war.',
          ],
          ['Auf einem Server schickt die Mod Positionen nur an die Spieler, die sie haben.'],
        ],
      },
      server: {
        q: 'Braucht der Server die Mod?',
        a: [
          [
            'Nein. Fast alles funktioniert im Einzelspieler, und du kannst damit jedem Server beitreten. Für Spieler in jeder Entfernung braucht der Server aber die Mod, und dann teilt er auch mehr Kreaturen und abgemeldete Spieler. Siehe ',
            { link: 'serversSection', text: 'Mehrspieler' },
            '.',
          ],
        ],
      },
      paper: {
        q: 'Funktioniert es auf Paper- oder Spigot-Servern?',
        a: [
          [
            'Du kannst mit der Mod darauf spielen, wie auf jedem Server ohne sie. Die Serverseite läuft nur auf Fabric, Quilt, NeoForge und Forge, ein Paper- oder Spigot-Server teilt also nichts. Ein Plugin für Paper wird in ',
            { link: 'paperPlugin', text: '#156' },
            ' besprochen.',
          ],
        ],
      },
      nothing: {
        q: 'Ich sehe keine fernen Kreaturen oder Spieler. Warum?',
        a: [
          {
            list: [
              [
                'Ferne Spieler brauchen die Mod auf dem Server. Sein Betreiber kann außerdem einschränken, wer geteilt wird (siehe die ',
                { link: 'serverSettings', text: 'Servereinstellungen' },
                ').',
              ],
              [
                'Auf einem Server ohne die Mod erscheinen nur die Kreaturen, denen du begegnet bist.',
              ],
            ],
          },
        ],
      },
      cheat: {
        q: 'Kann man damit cheaten? Ist es auf Servern erlaubt?',
        a: [
          [
            'Es zeigt andere Spieler nur, wo der Server es erlaubt. Ferne Spieler erscheinen nur auf einem Server mit der Mod, und sein Betreiber wählt, was er teilt: wie weit, nur mit Teamkameraden, und welche Spieler und Dimensionen verborgen bleiben. ',
            { code: '"sharePlayers": false' },
            ' schaltet es ab (siehe die ',
            { link: 'serverSettings', text: 'Servereinstellungen' },
            '). Unsichtbare Spieler und Spieler im Zuschauermodus werden nie geteilt. Schleichende Spieler vorerst schon (',
            { link: 'sneaking', text: '#269' },
            ').',
          ],
          [
            'Auf anderen Servern siehst du nur, was dein eigenes Spiel gesehen hat. Die Mod schickt nichts an den Server. Jeder Server hat aber seine eigenen Regeln zu Mods: Frag sein Team.',
          ],
        ],
      },
      bedrock: {
        q: 'Gibt es eine Bedrock-Version?',
        a: [['Nein. Living Horizon ist eine Mod für Minecraft Java Edition.']],
      },
      version: {
        q: 'Meine Spielversion wird nicht unterstützt. Kommt sie noch?',
        a: [
          [
            'Sag auf dem ',
            { link: 'discord', text: 'Discord' },
            ', welche Version und welchen Loader du spielst. Das hilft bei der Wahl, was als Nächstes kommt.',
          ],
        ],
      },
      modpack: {
        q: 'Darf ich es in ein Modpack packen?',
        a: [['Ja. Nimm die offizielle Datei und nenne den Urheber.']],
      },
      abandoned: {
        q: 'Was, wenn das Projekt aufgegeben wird?',
        a: [
          [
            'Die Lizenz sieht das vor. Sobald das Projekt für aufgegeben erklärt ist (sein Repository archiviert oder seine README sagt es), wird seine Lizenz zur GPL: Jeder darf das Projekt mit Namensnennung weiterführen. Siehe Abschnitt 5 der ',
            { link: 'license', text: 'Lizenz' },
            '.',
          ],
        ],
      },
      ai: {
        q: 'Wurde es mit KI gemacht?',
        a: [
          [
            'Ja. Ich bin clixmods, der Autor: ein Full-Stack-Entwickler mit Schwerpunkt Videospiele, und das ist mein Beruf. Ich mache seit 2017 Mods: Karten für Call of Duty: Black Ops III wie ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ', mit über einer Million Downloads im Steam Workshop (siehe mein ',
            { link: 'portfolio', text: 'Portfolio' },
            '). Die Ideen und Techniken kommen aus der Spieleentwicklung: Impostors, LODs und fertige Animationen sind Tricks, die Spiele seit Jahren nutzen.',
          ],
          [
            'KI schreibt einen Großteil des Codes. Ich entscheide, wie die Mod funktioniert, teste sie im Spiel und behebe, was schiefgeht. Ohne KI hätte ich für ein Projekt dieser Größe so lange gebraucht, dass ich es gar nicht erst gemacht hätte.',
          ],
        ],
      },
      modrinth: {
        q: 'Ist es auf Modrinth? Warum ist es dort nicht gelistet?',
        a: [
          [
            'Es ist auf ',
            { link: 'modrinth', text: 'Modrinth' },
            ', aber nicht gelistet: Es erscheint nicht in der Suche von Modrinth. Seit August 2026 erlauben ',
            { link: 'modrinthRules', text: 'die Regeln von Modrinth' },
            ' nicht, dass ein hauptsächlich mit KI gemachtes Projekt öffentlich ist, deshalb hat das Team von Modrinth es aus der Liste genommen. CurseForge, Nexus Mods und die ',
            { link: 'releases', text: 'Release-Seite' },
            ' haben dieselben Dateien.',
          ],
          [
            'Nicht gelistet heißt nicht unsicher. Es geht darum, wie die Mod gemacht ist, nicht darum, was sie tut:',
          ],
          {
            list: [
              [
                'Der Code ist öffentlich: Jeder kann ihn in seinem ',
                { link: 'github', text: 'GitHub-Repository' },
                ' lesen.',
              ],
              ['GitHub baut jedes Release aus diesem Code, und seine Build-Logs sind öffentlich.'],
              [
                'Die Mod hat keinen eigenen Code, der sich mit dem Internet verbindet. Spieler-Skins kommen über das Spiel von Mojang, und der Discord-Link öffnet sich nur, wenn du ihn anklickst.',
              ],
            ],
          },
        ],
      },
    }),
    ask: 'Auf Discord fragen',
    issue: 'Issue eröffnen',
  },

  download: {
    eyebrow: 'Download',
    title: 'Hol dir',
    accent: 'Living Horizon',
    text: {
      before:
        'Kostenlos, eine JAR pro Spielversion und Loader, für dein Spiel und deinen Server. Leg sie in den Ordner',
      after: 'und der Horizont erwacht zum Leben.',
    },
    latest: 'Neuestes Release',
    version: 'Minecraft-Version',
    loader: 'Loader',
    needs: { before: '· benötigt die', after: '' },
    untested:
      'Dieser Build startet im Spiel, aber noch niemand hat gemeldet, dass er in einer Welt zeichnet',
    jar: 'JAR herunterladen',
    releasePage: 'Von der Release-Seite holen',
    sameJar: 'Dieselbe JAR kommt auf deinen Server',
    curseforge: 'oder hol sie dir auf CurseForge',
    pick: 'Wähle deine Datei auf der Release-Seite oder auf CurseForge.',
    total: 'Downloads, alle Plattformen',
    count: (n: number) => p(n, { one: '{n} Download', other: '{n} Downloads' }),
    noCount: 'Downloads nicht verfügbar',
    soon: 'Bald verfügbar',
    checking: 'Wird geprüft…',
    everyFile: 'alle Dateien',
  },

  modpacks: {
    eyebrow: 'Modpacks',
    title: 'Schon in',
    accent: 'Modpacks.',
    text: 'Packs, die Living Horizon enthalten. Du hast eins damit gebaut? Es erscheint hier von selbst.',
    /** The word after the number of modpacks, in bold before it. */
    packs: (n: number) => p(n, { one: 'Modpack', other: 'Modpacks' }),
    /** The word after the number of their downloads, in bold before it. */
    downloads: (n: number) => p(n, { one: 'Download', other: 'Downloads' }),
    by: (authors: string) => `von ${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `Auf ${platform} herunterladen`,
    none: 'Noch kein Modpack enthält Living Horizon. Deins könnte das erste sein.',
    loading: 'Die Modpacks erscheinen hier gleich.',
    more: (n: number) =>
      p(n, { one: 'Noch {n} Modpack zeigen', other: 'Noch {n} Modpacks zeigen' }),
    less: 'Weniger zeigen',
  },

  footer: {
    tagline:
      'Bringt Leben in die Ferne. Eine Mod für Minecraft Java Edition, für dein Spiel und deinen Server.',
    beta: 'Beta: Rechne mit Bugs und erzähl uns davon.',
    project: 'Projekt',
    docs: 'Dokumentation',
    license: 'Lizenz',
    community: 'Community',
    bug: 'Bug melden',
    contribute: 'Mitmachen',
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: 'Modpack-Liste von', after: '' },
    official:
      'Kein offizielles Minecraft-Produkt. Nicht von Mojang oder Microsoft genehmigt oder mit ihnen verbunden.',
  },
};
