import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

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
    mods: 'Mods',
    modpacks: 'Modpacks',
    faq: 'FAQ',
    download: (version: string) => `Download v${version}`,
  },

  pages: {
    mods: {
      title: 'Kompatible Mods',
      description:
        'Wie Living Horizon mit anderen Minecraft-Mods läuft: fernes Gelände, Shader, Performance und Kreaturen-Mods. Was funktioniert, was ein bekanntes Problem hat und was noch auf Tester wartet.',
    },
    modpacks: {
      title: 'Modpacks',
      description:
        'Die Minecraft-Modpacks, die Living Horizon enthalten, mit ihren Download-Links auf CurseForge und Modrinth.',
    },
    changelog: {
      title: 'Changelog',
      description: 'Jede Version von Living Horizon und was sich darin geändert hat.',
    },
  },

  hero: {
    scene:
      'Illustration: ein Horizont in der Abenddämmerung mit kantigen Hügeln, auf denen Dorfbewohner, Tiere, Reiter und andere Spieler in weiter Ferne noch leben, darüber ein Zug Wildgänse.',
    news: 'Jetzt auf dem Gelände von Lodistance, Far View und Ecstatic',
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
    more: 'Mehr Details',
    less: 'Weniger Details',
    items: {
      mobs: {
        title: 'Jede Kreatur, bis zum Horizont',
        text: 'Tiere grasen auf fernen Hügeln, Dorfbewohner streifen durch entfernte Dörfer, Golems halten Wache. Alle Kreaturen des Spiels sind dabei, auch die aus anderen Mods.',
        points: [
          'Mit Voxy, Distant Horizons und anderen Mods für fernes Gelände oder in Vanilla',
          'Sogar in Land, das noch niemand erkundet hat',
          'Hinter fernen Hügeln verborgen, auch mit Shadern',
        ],
        where: 'Überall. Auf einem Server mit der Mod sogar Kreaturen, denen du nie begegnet bist.',
        details: details([
          {
            title: 'Echte Kreaturen, dort, wo sie gesehen wurden',
            body: [
              [
                'Jede ferne Kreatur ist eine echte, zu sehen dort, wo dein Spiel oder der Server sie zuletzt gesehen hat. Kommst du näher, übernimmt einfach die echte Kreatur. Ferne Kreaturen sind nur zur Zierde: Du kannst sie nicht schlagen, und Farmen und das Spawnen funktionieren wie ohne die Mod.',
              ],
            ],
          },
          {
            title: 'Zu Hause auf deinem fernen Gelände',
            body: [
              [
                'Mit Voxy, Distant Horizons, Lodistance, Far View oder Ecstatic laufen ferne Kreaturen auf dessen Boden, verschwinden hinter dessen Hügeln und verblassen in dessen Nebel. Ohne eine Mod für fernes Gelände erscheinen sie jenseits deiner Sichtweite auf dem Gelände des Spiels selbst (siehe ',
                { link: 'compatibilitySection', text: 'Kompatibilität' },
                ').',
              ],
            ],
          },
          {
            title: 'Auch dort, wo noch niemand war',
            body: [
              [
                'Auch Land, das du nie besucht hast, hat seine Herden. Living Horizon schätzt sie anhand des Startwerts der Welt. Da es nur Schätzungen sind, können sie abweichen oder ganz fehlen, wenn du dort ankommst. Durch ein Fernrohr siehst du sie, so weit du zielst.',
              ],
            ],
          },
          {
            title: 'Auf einem Server mit der Mod',
            body: [
              [
                'Du siehst auch die Kreaturen rund um jeden anderen Spieler, sogar Herden, denen du nie begegnet bist. Damit geschätzte Kreaturen auch weiter weg erscheinen, kann der Serverbetreiber den Startwert der Welt teilen. Das ist standardmäßig aus, weil der Startwert die ganze Welt verrät (siehe die ',
                { link: 'serverSettings', text: 'Servereinstellungen' },
                ').',
              ],
            ],
          },
          {
            title: 'In den Einstellungen',
            body: [
              [
                'Wähle in ',
                { em: 'Kreaturen & Objekte …' },
                ' aus, welche Kreaturen erscheinen, und blende die geschätzten mit ',
                { em: 'Erratene Kreaturen' },
                ' aus.',
              ],
            ],
          },
        ]),
      },
      players: {
        title: 'Spieler in jeder Entfernung',
        text: 'Sieh jeden anderen Spieler, wo auch immer er auf der Karte ist, mit Skin, Ausrüstung und allem, worauf er reitet.',
        points: [
          'Zu Pferd, im Boot oder im Gleitflug mit Elytren',
          'Sie bewegen sich flüssig, auch in der Ferne',
          'Spieler ohne die Mod können trotzdem beitreten',
        ],
        where: 'Im LAN und auf Servern mit der Mod.',
        details: details([
          {
            title: 'Alle, überall',
            body: [
              [
                'Auf einem Server mit der Mod siehst du jeden anderen Spieler, wo auch immer er ist, samt Reittier und Namensschild, flüssig in Bewegung. In einer fürs LAN geöffneten Welt funktioniert es, ohne dass du etwas installieren musst.',
              ],
            ],
          },
          {
            title: 'Der Serverbetreiber entscheidet',
            body: [
              [
                'Der Betreiber legt fest, wie weit Spieler zu sehen sind, ob sich nur Teamkameraden sehen und welche Spieler oder Dimensionen verborgen bleiben. Ferne Spieler lassen sich auch ganz abschalten (siehe die ',
                { link: 'serverSettings', text: 'Servereinstellungen' },
                ').',
              ],
            ],
          },
          {
            title: 'Nie zu sehen',
            body: [
              [
                'Spieler im Zuschauermodus und unsichtbare Spieler werden in der Ferne nie gezeigt. Schleichende Spieler vorerst schon (',
                { link: 'sneaking', text: '#269' },
                ').',
              ],
            ],
          },
          {
            title: 'In den Einstellungen',
            body: [
              [
                { em: 'Spieler‐Sichtweite' },
                ' legt fest, wie weit Spieler erscheinen, und ',
                { em: 'Spieler anzeigen' },
                ' schaltet sie ab.',
              ],
            ],
          },
        ]),
      },
      offline: {
        title: 'Abgemeldete Spieler leben weiter',
        text: 'Meldet sich jemand ab, bleibt eine Kopie von ihm dort, wo er gegangen ist. Sie spaziert, sitzt, angelt und schläft nachts, bis er zurückkommt.',
        points: [
          'Ihr Name, mit (offline) und wann sie zuletzt gesehen wurden',
          'Auch Spieler, die gegangen sind, bevor du kamst',
          'Nur zur Zierde: Lauf in sie hinein, um sie beiseitezuschieben',
        ],
        where: 'Überall. Auf einem Server mit der Mod jeder Spieler, der dort je gespielt hat.',
        details: details([
          {
            title: 'Ein eigenes Leben',
            body: [
              [
                'Tagsüber spazieren sie, setzen sich oder machen sich an einer Truhe zu schaffen. Nachts gehen sie ins Bett. Sie angeln am Wasser, stellen sich bei Regen unter, versammeln sich abends am Lagerfeuer und plaudern zu zweit.',
              ],
            ],
          },
          {
            title: 'Sie bemerken dich',
            body: [
              [
                'Schau einen aus der Nähe an, und er schaut zurück. Gehst du in die Hocke, tut er es dir nach. Kommen Monster näher, heben sie ihren Schild, aber sie kämpfen nie.',
              ],
            ],
          },
          {
            title: 'Nur zur Zierde',
            body: [
              [
                'Die Welt weiß nicht, dass es sie gibt: Kreaturen ignorieren sie, und sie stehen dir nie im Weg. Lauf in sie hinein, um sie beiseitezuschieben.',
              ],
            ],
          },
          {
            title: 'Auf einem Server mit der Mod',
            body: [
              [
                'Du siehst jeden Spieler, der dort je gespielt hat, so wie er aussah, auch die, die gegangen sind, bevor du kamst. Anderswo siehst du die Spieler, die du hast gehen sehen.',
              ],
            ],
          },
          {
            title: 'In den Einstellungen',
            body: [
              [
                { em: 'Offline‐Spieler' },
                ' blendet sie ein oder aus, und ',
                { em: 'Offline‐Aktivität' },
                ' schaltet ihr Leben rund um ihren Platz ein oder aus.',
              ],
            ],
          },
        ]),
      },
      birds: {
        title: 'Vögel am Himmel',
        text: 'Schwärme, Gänse in V-Formation, Greifvögel, Möwen und Enten beleben den Himmel, und du siehst sie schon von Weitem.',
        points: [
          'Sie landen auf Bäumen, Dächern, Feldern und Stränden',
          'Enten schwimmen auf Teichen und Flüssen',
          'Deiner Welt wird nichts hinzugefügt',
        ],
        where: 'Überall, nichts einzurichten.',
        details: details([
          {
            title: 'Vögel aller Art',
            body: [
              [
                'Von Gänsen in V-Formation bis zu Enten auf dem Teich lebt jede Art dort, wo sie hingehört: in den Bäumen, über der Küste, auf den Dächern, auf den Feldern. Nachts kommen Fledermäuse heraus.',
              ],
            ],
          },
          {
            title: 'Sie reagieren auf dich',
            body: [
              [
                'Kommst du näher, fliegen sie auf und landen etwas weiter weg. Sie verschwinden nie auf einen Schlag: Sie zerstreuen sich und fliegen davon.',
              ],
            ],
          },
          {
            title: 'Nur auf deinem Bildschirm',
            body: [
              [
                'Die Vögel zeichnet allein dein Spiel: Deiner Welt wird nichts hinzugefügt, und sie kosten kaum Leistung.',
              ],
            ],
          },
          {
            title: 'In den Einstellungen',
            body: [
              [
                { em: 'Vögel anzeigen' },
                ' schaltet sie ein oder aus, und mit ',
                { em: 'Vogelarten …' },
                ' wählst du, welche Arten fliegen.',
              ],
            ],
          },
        ]),
      },
      light: {
        title: 'Von Grund auf leicht',
        text: 'Ferne Kreaturen denken nicht: Sie spielen einfache, fertige Animationen ab. In sehr weiter Ferne werden sie zu leichten Bildern ihrer selbst.',
        points: [
          'Hinter Hügeln verborgene Kreaturen werden nicht gezeichnet',
          'Senke deine Simulationsdistanz und behalte eine lebendige Welt',
          'Viel mehr Kreaturen für denselben Aufwand',
        ],
        where: 'Alles läuft in deinem Spiel. Der Server teilt nur Positionen.',
        details: details([
          {
            title: 'Einfache Animationen in der Ferne',
            body: [
              [
                'Ferne Kreaturen haben keine KI: Sie laufen, grasen und schauen sich um, mit Animationen, die zum Boden passen. Dein Spiel muss sie nicht steuern, so bleibt es flüssig.',
              ],
            ],
          },
          {
            title: 'Vereinfachte Bilder',
            body: [
              [
                'Wie viele Spiele zeichnet Living Horizon ferne Kreaturen, Fahrzeuge und Spieler als leichte Bilder statt als vollständige 3D-Modelle. Auf diese Entfernung sehen sie gleich aus, für einen Bruchteil des Aufwands. Mit einem Shaderpaket wie Photon werden die Bilder beleuchtet wie der Rest der Welt.',
              ],
            ],
          },
          {
            title: 'Lebendige Welt, wenig Aufwand',
            body: [
              [
                'Kreaturen hinter Hügeln oder fernem Gelände werden gar nicht erst gezeichnet. Senke deine Simulationsdistanz, um FPS zu gewinnen, und sieh trotzdem eine lebendige Welt um dich herum. Ein Server mit der Mod hat sehr wenig zu tun: Dein Spiel übernimmt alles, was du siehst.',
              ],
            ],
          },
          {
            title: 'Voreinstellungen',
            body: [
              [
                'Wähle eine ',
                { em: 'Voreinstellung' },
                ', von ',
                { em: 'Niedrig' },
                ' bis ',
                { em: 'Ultra' },
                ', um alles auf einmal einzustellen; die Standardwerte sind die ausgewogene Wahl. Die Einstellungen findest du in den Optionen, in Mod Menu und in den Grafikeinstellungen von Sodium, in 14 Sprachen.',
              ],
              [
                'Vorsicht: Stehen ',
                { em: 'Max. Kreaturen' },
                ' und ',
                { em: 'Kreaturen‐Sichtweite' },
                ' beide auf ',
                { em: 'Unbegrenzt' },
                ', kann das Spiel abstürzen.',
              ],
            ],
          },
        ]),
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
      unexplored: 'Aus dem Startwert erratene Kreaturen',
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
      install: {
        title: 'Leg die JAR in den mods-Ordner des Servers',
        text: 'Dieselbe Datei wie für dein Spiel, auf Fabric und Quilt dazu die Fabric API. Nichts einzurichten.',
      },
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
    },
  },

  compatibility: {
    eyebrow: 'Kompatibilität',
    title: 'Distant Horizons, Voxy, Ecstatic…',
    accent: 'oder gar nichts.',
    text: 'Living Horizon erkennt deine Mod für fernes Gelände von selbst: Kreaturen und Spieler laufen auf deren Boden, verschwinden hinter deren Hügeln und verblassen in deren Nebel. Ohne eine solche Mod hält Living Horizon die Welt jenseits deiner Sichtweite lebendig.',
    cards: {
      dh: { text: 'Ab 2.3. Kreaturen und Spieler auf seinem Gelände, hinter seinen Hügeln.' },
      voxy: { text: 'Kreaturen und Spieler auf seinem Gelände, auch mit Shaderpaketen.' },
      lodistance: { text: 'Fabric, Minecraft 26.3, mit OpenGL und ohne Shader.' },
      farView: {
        text: 'Forge und NeoForge, Minecraft 1.20.1 bis 1.21.4. Kreaturen auf seinem Gelände.',
      },
      ecstatic: {
        text: 'NeoForge, Minecraft 1.21.1, Einzelspieler. Kreaturen auf seinem Gelände.',
      },
      bobby: {
        text: 'Kreaturen und Spieler auf dem Gelände, das es über die Sichtweite des Servers hinaus behält.',
      },
      iris: { text: 'Shaderpakete funktionieren, etwa Photon und Complementary Unbound.' },
      vanilla: {
        title: 'Vanilla',
        text: 'Keine Mod für fernes Gelände nötig: Senk deine Sichtweite und Simulationsdistanz und sieh trotzdem eine lebendige Welt.',
      },
    },
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: 'Und deine anderen Mods?',
      text: (n: number) =>
        p(n, {
          one: '{n} Mod gelistet: Shader, Performance, Kreaturen-Mods. Was funktioniert und was noch auf Tester wartet.',
          other:
            '{n} Mods gelistet: Shader, Performance, Kreaturen-Mods. Was funktioniert und was noch auf Tester wartet.',
        }),
      link: 'Kompatible Mods ansehen',
    },
    matrixTitle: 'Minecraft-Versionen und Loader',
    matrixText: 'Eine JAR pro Spielversion und Loader.',
    report: 'Schon ausprobiert? Melde es',
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

  help: {
    eyebrow: 'Mitmachen',
    title: 'Eine Beta,',
    accent: 'gebaut mit ihren Spielern.',
    test: {
      title: 'Teste es auf deinem Setup',
      text: 'Sag uns, wie es auf deiner Spielversion, deinem Loader und mit deinen Mods läuft, gut oder schlecht. Jeder Bericht hilft.',
      untested: (n: number) =>
        p(n, {
          one: '{n} Build wartet noch auf einen ersten Tester',
          other: '{n} Builds warten noch auf einen ersten Tester',
        }),
      report: 'Kompatibilität melden',
    },
    code: {
      title: 'Beitragen',
      text: 'Code, Fixes und Übersetzungen landen als Pull Requests auf GitHub. KI ist willkommen, solange du liest, verstehst und testest, was sie schreibt.',
      guide: 'Beitragsleitfaden',
    },
    discord: {
      title: 'Discord beitreten',
      text: 'Fragen, Neuigkeiten, Screenshots und Hilfe, mit dem Autor und anderen Spielern.',
      join: 'Discord beitreten',
    },
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
    /** The link to the changelog page, on the home page. */
    every: 'Alle Versionen ansehen',
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
            '. Spieler, Boote und Fahrzeuge: standardmäßig in jeder Entfernung, was ',
            { em: 'Spieler‐Sichtweite' },
            ' und ',
            { em: 'Objekt‐Sichtweite' },
            ' begrenzen können. Eine Kreatur erscheint erst, wenn dein Spiel oder der Server sie gesehen hat.',
          ],
        ],
      },
      mods: {
        q: 'Funktioniert es mit meiner Mod?',
        a: [
          [
            'Sehr wahrscheinlich. Voxy, Distant Horizons, Lodistance, Ecstatic, Bobby, Sodium, Iris und Shaderpakete funktionieren damit (siehe ',
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
        q: 'Brauche ich Voxy, Distant Horizons, Lodistance oder Ecstatic?',
        a: [
          [
            'Nein. Ohne sie erscheinen ferne Kreaturen und Spieler auf dem Gelände des Spiels selbst, bis zu deiner Sichtweite. Mit einer davon erscheinen sie auch auf deren fernem Gelände.',
          ],
        ],
      },
      frameRate: {
        q: 'Kostet es mich FPS?',
        a: [
          [
            'Mehr Objekte zu zeichnen kostet FPS. Wird dein Spiel langsamer, lass ',
            { em: 'Vereinfachte Kreaturen' },
            ' und ',
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
            'Ja, zum Teil. KI schreibt einen Großteil des Codes. Der Autor, clixmods, entscheidet, wie die Mod funktioniert, testet jede Änderung im Spiel und behebt, was schiefgeht. Ohne KI gäbe es ein Projekt dieser Größe nicht.',
          ],
          [
            'Die Ideen kommen aus der Spieleentwicklung, dem Beruf von clixmods: Impostors, LODs und fertige Animationen sind Tricks, die Spiele seit Jahren nutzen. clixmods macht seit 2017 Mods, etwa die Karte ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ' für Call of Duty: Black Ops III, im Steam Workshop über eine Million Mal heruntergeladen (siehe das ',
            { link: 'portfolio', text: 'Portfolio' },
            ').',
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
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) => p(n, { one: '{n} Modpack', other: '{n} Modpacks' }),
  },

  modpacks: {
    eyebrow: 'Modpacks',
    title: 'Schon in',
    accent: 'Modpacks.',
    text: 'Packs, die Living Horizon enthalten. Du hast eins damit gebaut? Es erscheint hier von selbst.',
    by: (authors: string) => `von ${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `Auf ${platform} herunterladen`,
    none: 'Noch kein Modpack enthält Living Horizon. Deins könnte das erste sein.',
    loading: 'Die Modpacks erscheinen hier gleich.',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) => p(n, { one: 'Zur Modpack-Seite', other: 'Alle {n} Modpacks ansehen' }),
  },

  mods: {
    eyebrow: 'Kompatibilität',
    title: 'Verträgt sich',
    accent: 'mit deinen Mods.',
    text: 'Direkt aus dem Projekt auf GitHub, aktuell mit jedem Test: was funktioniert, was ein bekanntes Problem hat und was noch darauf wartet, ausprobiert zu werden. Die Notizen sind auf Englisch.',
    search: 'Mod suchen',
    filter: 'Nach Status filtern',
    all: 'Alle',
    status: { works: 'Funktioniert', issue: 'Bekanntes Problem', untested: 'Noch nicht getestet' },
    /** The heading of the shader packs, after the mods. */
    shaders: 'Shaderpakete',
    issue: (n: number) => `Issue #${n}`,
    /** A link that only shows the platform's logo. */
    page: (platform: string) => `${platform}-Seite`,
    none: 'Keine Mod passt zu deiner Suche.',
    missing: {
      title: 'Fehlt eine Mod?',
      text: 'Sag uns, wie Living Horizon damit läuft, gut oder schlecht: Jeder Bericht hilft.',
      link: 'Mod melden',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: 'Die Liste konnte gerade nicht geladen werden. Sie ist immer auf GitHub.',
    failedLink: 'Liste auf GitHub ansehen',
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
