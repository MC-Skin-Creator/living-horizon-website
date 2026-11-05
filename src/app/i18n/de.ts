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
    news: 'Neu: Herden in unerkundetem Land',
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
    text: 'Kreaturen, die Herden in Land, das noch niemand erkundet hat, Spieler, abgemeldete Spieler und Vögel, gezeichnet von deinem eigenen Spiel und so leicht, dass du die Mod einfach anlassen kannst.',
    offline: '(offline)',
    near: 'Aus der Nähe: die ganze Kreatur',
    far: 'Aus der Ferne: ein flaches Bild',
    more: 'Mehr Details',
    close: 'Schließen',
    previous: 'Vorherige Funktion',
    next: 'Nächste Funktion',
    items: {
      mobs: {
        title: 'Jede Kreatur, bis zum Horizont',
        text: 'Tiere grasen, Dorfbewohner streifen durch ferne Dörfer, Golems halten Wache. Jede Kreatur, die das Spiel zeichnen kann, auch Kreaturen und Fahrzeuge aus anderen Mods.',
        points: [
          'Auf Voxy, Distant Horizons und anderem fernen Gelände oder in Vanilla',
          'Hinter fernen Hügeln verborgen, auch mit Shaderpaketen',
          'Unter „Kreaturen & Objekte“ einzeln auswählbar',
        ],
        where: 'Überall. Auf einem Server mit der Mod sogar Kreaturen, denen du nie begegnet bist.',
        details: details([
          {
            title: 'Woher sie kommen',
            body: [
              [
                'Es sind echte Kreaturen, dort, wo dein Spiel oder der Server sie zuletzt gesehen hat. Dein Spiel merkt sich jede Kreatur, der es begegnet, und ein Server mit der Mod teilt die Kreaturen um jeden Spieler herum, so siehst du auch Herden, denen du nie begegnet bist. Eine, die seitdem gestorben oder verschwunden ist, kann noch zu sehen sein, bis du in ihre Nähe kommst. Dann wird sie vergessen.',
              ],
            ],
          },
          {
            title: 'Auf dem fernen Gelände',
            body: [
              [
                'Mit Voxy, Distant Horizons, Lodistance, Far View oder Ecstatic laufen sie auf dessen Boden, verschwinden hinter dessen Hügeln wie hinter jedem Block und verblassen in dessen Nebel. Mit Bobby bleiben sie auf dem Gelände, das es behält. Ohne eine dieser Mods erscheinen sie auf dem Gelände des Spiels selbst. Siehe ',
                { link: 'compatibilitySection', text: 'Kompatibilität' },
                '.',
              ],
            ],
          },
          {
            title: 'Aus der Nähe übernimmt die echte Kreatur',
            body: [
              [
                'Kommst du näher, läuft die Kopie dorthin zurück, wo die Kreatur zuletzt gesehen wurde, und die echte Kreatur nimmt ihren Platz ein, sobald der Server sie schickt. Ferne Kreaturen sind nur zur Zierde: Farmen, das Spawnen und die Kreaturenobergrenze funktionieren wie ohne die Mod, und du kannst sie nicht schlagen.',
              ],
            ],
          },
          {
            title: 'Kreaturen aus anderen Mods',
            body: [
              [
                'Alles, was das Objektsystem von Minecraft selbst nutzt, erscheint in der Ferne: Kreaturen aus Mods und Fahrzeuge wie die Flugzeuge von Immersive Aircraft oder die Schiffe von Shippy Ships, dort, wo du sie gelassen hast.',
              ],
            ],
          },
          {
            title: 'Einstellungen',
            body: [
              {
                list: [
                  [
                    { em: 'Kreaturen anzeigen' },
                    ' und ',
                    { em: 'Objekte anzeigen' },
                    ': schalten sie ein oder aus.',
                  ],
                  [{ em: 'Kreaturen & Objekte …' }, ': Kreatur für Kreatur auswählen.'],
                  [
                    { em: 'Kreaturen‐Sichtweite' },
                    ' und ',
                    { em: 'Max. Kreaturen' },
                    ': wie weit und wie viele auf einmal.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      unexplored: {
        title: 'Herden in Land, das noch niemand erkundet hat',
        text: 'Auch Land, das du nie besucht hast, hat seine Tiere. Die Mod berechnet aus dem Startwert der Welt, welche das Spiel dort hinsetzen wird, und wo.',
        points: [
          'Dieselben Zufallsziehungen, die das Spiel für jeden neuen Chunk macht',
          'Durch ein Fernrohr, so weit du zielst',
          'Kreaturen erraten: bis zu 1.024 Chunks um dich herum',
        ],
        where: 'Im Einzelspieler und auf Servern mit der Mod.',
        details: details([
          {
            title: 'Wie es rät',
            body: [
              [
                'Wenn das Spiel einen Chunk generiert, setzt es seine ersten Tiere mit Zufallsziehungen aus dem Startwert der Welt und der Position des Chunks. Living Horizon macht dieselben Ziehungen für die noch nicht generierten Chunks, mit dem Biom und dem Gelände, die der Weltgenerator liefert: Pferde in den Ebenen, Schafe auf den Hügeln, ungefähr dort, wo das Spiel sie hinsetzen wird.',
              ],
            ],
          },
          {
            title: 'Eine Vermutung, kein Versprechen',
            body: [
              [
                'Das Gelände, das es liest, hat noch kein Gras und keine Bäume. Wo das Spiel deswegen eine Stelle verwirft, fehlt die Herde oder steht woanders: Etwa die Hälfte der erratenen Tiere steht höchstens zwei Blöcke von den echten entfernt. Eine erratene Kreatur ist vielleicht nicht da, wenn du ankommst.',
              ],
            ],
          },
          {
            title: 'Fernrohr und Kreaturen erraten',
            body: [
              [
                'Schau durch ein Fernrohr, um die erratenen Kreaturen zu sehen, wohin du auch zielst, egal wie weit. ',
                { em: 'Kreaturen erraten' },
                ' zeigt sie bis zu 1.024 Chunks um dich herum auf einmal und behält sie für deine nächsten Sitzungen.',
              ],
            ],
          },
          {
            title: 'Auf einem Server',
            body: [
              [
                'Der Server errät sie um jeden Spieler mit der Mod, standardmäßig 512 Blöcke weit (',
                { code: 'seedMobRange' },
                ', bis zu 2.048). Das Fernrohr und ',
                { em: 'Kreaturen erraten' },
                ' brauchen den Startwert der Welt: Der Server teilt ihn nur, wenn sein Betreiber ',
                { code: 'shareSeed' },
                ' einschaltet, denn wer den Startwert hat, kennt die ganze Welt (siehe die ',
                { link: 'serverSettings', text: 'Servereinstellungen' },
                ').',
              ],
            ],
          },
          {
            title: 'Einstellungen',
            body: [
              {
                list: [
                  [{ em: 'Erratene Kreaturen' }, ': zeigt oder verbirgt sie.'],
                  [{ em: 'Raterradius' }, ': wie weit ', { em: 'Kreaturen erraten' }, ' reicht.'],
                ],
              },
            ],
          },
        ]),
      },
      players: {
        title: 'Spieler in jeder Entfernung',
        text: 'Sieh jeden anderen Spieler, wo auch immer er auf der Karte ist, mit Skin, Rüstung, Gegenständen in der Hand und allem, worauf er reitet.',
        points: [
          'Pferde, Boote, Loren, Elytren und Glückliche Ghasts',
          'Flüssig: Der Server teilt die Positionen fünfmal pro Sekunde',
          'Spieler ohne die Mod können trotzdem beitreten',
        ],
        where: 'Im LAN und auf Servern mit der Mod.',
        details: details([
          {
            title: 'So funktioniert es',
            body: [
              [
                'Ein Server mit der Mod teilt fünfmal pro Sekunde, wo jeder Spieler ist, worauf er reitet und ob er mit Elytren gleitet. Alle fünf Sekunden kommt hinzu, wie die nächsten aussehen: Skin, Rüstung und was sie in der Hand halten. Dein Spiel zeichnet sie über die Sichtweite hinaus, samt Namensschild und Reittier.',
              ],
            ],
          },
          {
            title: 'Der Serverbetreiber entscheidet',
            body: [
              [
                'Der Server schreibt beim ersten Start ',
                { code: 'config/livinghorizon-server.json' },
                ': wie weit Spieler geteilt werden, nur mit Teamkameraden, welche Spieler und Dimensionen verborgen bleiben. ',
                { code: '"sharePlayers": false' },
                ' schaltet es ab. Änderungen gelten nach ein paar Sekunden, ohne Neustart (siehe die ',
                { link: 'serverSettings', text: 'Servereinstellungen' },
                ').',
              ],
            ],
          },
          {
            title: 'Nie geteilt',
            body: [
              [
                'Spieler im Zuschauermodus und unsichtbare Spieler. Schleichende Spieler vorerst schon (',
                { link: 'sneaking', text: '#269' },
                '). Innerhalb der Sichtweite sehen sich Spieler wie gewohnt.',
              ],
            ],
          },
          {
            title: 'Einstellungen',
            body: [
              {
                list: [
                  [{ em: 'Spieler anzeigen' }, ': schaltet sie ein oder aus.'],
                  [{ em: 'Spieler‐Sichtweite' }, ': wie weit sie erscheinen.'],
                  [{ em: 'Reittiere & Fahrmittel' }, ': worauf sie reiten.'],
                ],
              },
            ],
          },
        ]),
      },
      offline: {
        title: 'Abgemeldete Spieler leben weiter',
        text: 'Meldet sich jemand ab, bleibt eine Kopie mit seinem Namen dort, wo er gegangen ist. Sie spaziert, sitzt, angelt, öffnet Truhen und schläft nachts, bis er zurückkommt.',
        points: [
          '(offline) hinter dem Namen, dazu wann er zuletzt gesehen wurde',
          'Auch Spieler, die gegangen sind, bevor du kamst',
          'Nur zur Zierde: Lauf in sie hinein, um sie beiseitezuschieben',
        ],
        where: 'Überall. Auf einem Server mit der Mod jeder Spieler, der dort je gespielt hat.',
        details: details([
          {
            title: 'Ein Tag in ihrem Leben',
            body: [
              {
                list: [
                  [
                    'Tagsüber spazieren sie, setzen sich oder stehen an einer Truhe, einer Werkbank oder einem Arbeitsblock.',
                  ],
                  [
                    'Nachts gehen sie zu einem freien Bett und schlafen darin, oder sie bleiben auf den Beinen.',
                  ],
                  [
                    'In der Nähe von Wasser bleibt einer von ihnen am Ufer stehen und angelt eine Weile.',
                  ],
                  [
                    'Bei Regen gehen manche unter ein Dach oder einen Baum und warten, bis er aufhört.',
                  ],
                  ['Abends versammeln sie sich vor einem Lagerfeuer oder einem Ofen.'],
                  [
                    'Zwei, die nah beieinander sind, gehen aufeinander zu und plaudern, von Angesicht zu Angesicht.',
                  ],
                ],
              },
            ],
          },
          {
            title: 'Sie bemerken dich',
            body: [
              [
                'Schau einen aus der Nähe an, und er schaut zurück. Geh vor ihm in die Hocke, und er tut es dir nach. Kommen Monster näher, ziehen sie ein Schwert und heben ihren Schild, aber sie kämpfen nie.',
              ],
            ],
          },
          {
            title: 'Nur zur Zierde',
            body: [
              [
                'Die Welt weiß nicht, dass es sie gibt: Kreaturen ignorieren sie, und sie blockieren oder schubsen dich nie. Lauf in sie hinein, um sie beiseitezuschieben. Fern von dir spazieren sie weiter dort umher, wo sie sind.',
              ],
            ],
          },
          {
            title: 'Woher sie kommen',
            body: [
              [
                'Dein Spiel merkt sich die Spieler, die es gehen gesehen hat. Ein Server mit der Mod teilt jeden Spieler, der dort je gespielt hat, so wie er aussah, auch die, die gegangen sind, bevor du kamst.',
              ],
            ],
          },
          {
            title: 'Einstellungen',
            body: [
              {
                list: [
                  [
                    { em: 'Offline‐Spieler' },
                    ' und ',
                    { em: 'Max. Offline' },
                    ': ob sie erscheinen und wie viele.',
                  ],
                  [{ em: 'Offline‐Aktivität' }, ': ihr Leben rund um ihren Platz.'],
                  [
                    { em: 'Bewegungsradius' },
                    ': wie weit sie umherstreifen, standardmäßig 50 Blöcke.',
                  ],
                ],
              },
            ],
          },
        ]),
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
        details: details([
          {
            title: 'Wer wo fliegt',
            body: [
              {
                list: [
                  [
                    'Schwärme ziehen über den Himmel, Gänse fliegen in V-Formation, Greifvögel kreisen.',
                  ],
                  ['Möwen folgen der Küste und landen ab und zu am Strand.'],
                  [
                    'Tauben sitzen auf hohen Gebäuden, Rotkehlchen hüpfen über Felder, Meisen bleiben in den Bäumen.',
                  ],
                  ['Enten schwimmen auf Seen und Flüssen. Fledermäuse kommen nachts heraus.'],
                ],
              },
            ],
          },
          {
            title: 'Sie reagieren auf dich',
            body: [
              [
                'Kleine Vögel fliegen auf, wenn du näher kommst, und landen etwas weiter weg. Enten lassen dich nie heran. Vögel, die davonfliegen, verschwinden nie auf einen Schlag: Sie zerstreuen sich und werden immer kleiner.',
              ],
            ],
          },
          {
            title: 'Am Gelände abgelesen',
            body: [
              [
                'Wohin jede Art fliegt, wird am Gelände abgelesen, bis auf das ferne Gelände von Voxy und Distant Horizons: Feldfrüchte für Rotkehlchen, Laub für Meisen, Wasser für Enten, Strände für Möwen. Sie sind nur Bilder in deinem Spiel: In der Welt wird nichts gespawnt.',
              ],
            ],
          },
          {
            title: 'Einstellungen',
            body: [
              {
                list: [
                  [{ em: 'Vögel anzeigen' }, ': schaltet sie ein oder aus.'],
                  [{ em: 'Vogelarten …' }, ': Art für Art auswählen.'],
                  [
                    { em: 'Vogeldichte' },
                    ' und ',
                    { em: 'Vogelreichweite' },
                    ': wie viele und wie weit.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      light: {
        title: 'Von Grund auf leicht',
        text: 'Ferne Kreaturen haben keine KI: Sie spielen fertige Animationen ab, die zum Boden passen. In sehr weiter Ferne werden sie zu flachen Bildern ihrer selbst.',
        points: [
          'Hinter Hügeln verborgene Kreaturen werden nicht gezeichnet',
          'Senk deine Simulationsdistanz und behalte trotzdem eine lebendige Welt',
          'Vereinfachte Kreaturen: viel mehr Kreaturen für denselben Aufwand',
        ],
        where: 'Alles läuft in deinem Spiel. Der Server teilt nur Positionen.',
        details: details([
          {
            title: 'Keine KI in der Ferne',
            body: [
              [
                'Ferne Kreaturen laufen, grasen und schauen sich um, mit fertigen Animationen, die zum Boden um sie herum passen. Abgemeldete Spieler und Vögel handeln nur in deiner Nähe von selbst.',
              ],
            ],
          },
          {
            title: 'Flache Bilder in der Ferne',
            body: [
              [
                'Viele Spiele zeichnen ferne Objekte als Impostors: ein flaches Bild statt eines 3D-Modells. Living Horizon macht dasselbe für ferne Kreaturen, Fahrzeuge und Spieler (',
                { em: 'Vereinfachte Kreaturen' },
                ', ',
                { em: 'Vereinfachte Objekte' },
                ', ',
                { em: 'Vereinfachte Spieler' },
                '). In dieser Größe sehen sie gleich aus, für einen Bruchteil des Aufwands. Mit einem Shaderpaket, das Normal Maps liest, etwa Photon, werden die Bilder vom Paket beleuchtet (',
                { em: 'Shader-Beleuchtung' },
                ').',
              ],
            ],
          },
          {
            title: 'Verdeckt heißt übersprungen',
            body: [
              [
                'Kreaturen hinter Hügeln oder dem fernen Gelände werden gar nicht gezeichnet, und Animationen stoppen, sobald eine Figur zu klein ist, um aufzufallen.',
              ],
            ],
          },
          {
            title: 'Alles in deinem Spiel',
            body: [
              [
                'Dein Spiel übernimmt die Animationen, die abgemeldeten Spieler und die Vögel. Ein Server mit der Mod teilt nur Positionen, das kostet ihn also wenig. Zwei Spieler können sogar dieselbe ferne Kreatur verschiedene Dinge tun sehen.',
              ],
            ],
          },
          {
            title: 'Voreinstellungen und Einstellungen',
            body: [
              [
                'Eine ',
                { em: 'Voreinstellung' },
                ' (',
                { em: 'Niedrig' },
                ', ',
                { em: 'Normal' },
                ', ',
                { em: 'Hoch' },
                ', ',
                { em: 'Ultra' },
                ') stellt alles auf einmal ein. Die Standardwerte sind die ausgewogene Wahl, und ',
                { em: 'Auf Standard zurücksetzen' },
                ' stellt sie wieder her. Die Einstellungen findest du in den Optionen, in Mod Menu, in den Grafikeinstellungen von Sodium oder mit ',
                { code: '/livinghorizon config' },
                ', in 14 Sprachen.',
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
      unexplored: 'Herden in unerkundetem Land',
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
    /** The note of every mod still waiting for a tester, next to the link to its issue. */
    untested:
      'Noch hat uns niemand erzählt, wie es läuft. Schon ausprobiert? Sag es uns in seinem Issue.',
    issue: (n: number) => `Issue #${n}`,
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
