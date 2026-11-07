import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

const p = plural('es');

export const es: Messages = {
  meta: {
    title: 'Living Horizon: da vida a la distancia',
    description:
      'Living Horizon es un mod de Minecraft que da vida a criaturas, aldeanos, pájaros y otros jugadores en el horizonte, más allá de tu distancia de renderizado y sobre el terreno lejano de Distant Horizons y Voxy. En un jugador, en LAN y en servidores. Fabric, Quilt, NeoForge y Forge. Ya en beta.',
  },

  language: {
    label: 'Idioma',
  },

  common: {
    download: 'Descargar',
    becomeTester: 'Hazte tester',
    needsTesters: 'Faltan testers',
    tested: 'Probado',
    seenWorking: 'Visto funcionando en un mundo',
    new: 'Nuevo',
    beta: 'Beta',
    changelog: 'Cambios',
    logo: (name: string) => `Logo de ${name}`,
  },

  nav: {
    label: 'Principal',
    tag: 'beta',
    menu: 'Menú',
    features: 'Funciones',
    mods: 'Mods',
    modpacks: 'Modpacks',
    faq: 'FAQ',
    download: (version: string) => `Descargar v${version}`,
  },

  pages: {
    mods: {
      title: 'Mods compatibles',
      description:
        'Cómo funciona Living Horizon con otros mods de Minecraft: terreno lejano, shaders, rendimiento y mods de criaturas. Qué funciona, qué tiene un problema conocido y qué espera a un tester.',
    },
    modpacks: {
      title: 'Modpacks',
      description:
        'Los modpacks de Minecraft que incluyen Living Horizon, con sus enlaces de descarga en CurseForge y Modrinth.',
    },
    changelog: {
      title: 'Cambios',
      description: 'Cada versión de Living Horizon y lo que cambió en ella.',
    },
  },

  hero: {
    scene:
      'Ilustración: un horizonte al atardecer, con colinas de bloques donde aldeanos, animales, jinetes y otros jugadores siguen con vida a lo lejos, bajo una bandada de gansos.',
    news: 'Ahora sobre el terreno de Lodistance, Far View y Ecstatic',
    tagline: 'Da vida a',
    taglineAccent: 'la distancia.',
    lede: {
      before:
        'Animales, aldeanos, pájaros y otros jugadores siguen viviendo en el horizonte, mucho más allá de tu distancia de renderizado, justo sobre el terreno lejano de',
      between: 'y',
      after: ', o en vanilla. En un jugador, en LAN y en servidores.',
    },
    facts: 'El proyecto de un vistazo',
    latest: 'Última',
    updated: 'Actualizado',
    downloads: 'Descargas',
    minecraft: 'Minecraft',
    loaders: 'Loaders',
  },

  concept: {
    eyebrow: 'Qué hace',
    title: 'Tu distancia de renderizado se acaba.',
    accent: 'El mundo no.',
    text: 'Minecraft deja de dibujar criaturas y jugadores a pocos chunks de distancia. Los mods de terreno lejano extienden el paisaje hasta el horizonte, pero se queda vacío e inmóvil. Living Horizon lo vuelve a llenar de vida.',
    diagram:
      'Diagrama: sin Living Horizon, las criaturas solo existen dentro de tu distancia de renderizado y el terreno lejano está vacío. Con él, criaturas, jugadores y pájaros viven por todo el terreno lejano hasta el horizonte.',
    you: 'Tú',
    renderDistance: 'Tu distancia de renderizado',
    farTerrain: 'Terreno lejano ·',
    horizon: 'Horizonte',
    without: { before: '', mark: 'Sin', after: 'Living Horizon' },
    with: { before: '', mark: 'Con', after: 'Living Horizon' },
    empty: 'vacío',
  },

  features: {
    eyebrow: 'Funciones',
    title: 'Todo lo que vive',
    accent: 'más allá de tu distancia de renderizado.',
    text: 'Criaturas, jugadores, jugadores desconectados y pájaros, dibujados por tu propio juego y lo bastante ligeros como para dejarlos siempre activados.',
    offline: '(sin conexión)',
    near: 'De cerca: la criatura completa',
    far: 'De lejos: una imagen plana',
    /** The button of each card: it spreads the card across the section, and folds it back. */
    more: 'Más detalles',
    less: 'Menos detalles',
    items: {
      mobs: {
        title: 'Todas las criaturas, hasta el horizonte',
        text: 'Los animales pastan en las colinas lejanas, los aldeanos pasean por aldeas distantes, los gólems montan guardia. Todas las criaturas que el juego puede dibujar, también las de otros mods.',
        points: [
          'Con Voxy, Distant Horizons y otros terrenos lejanos, o en vanilla',
          'Incluso en tierras que nadie ha explorado todavía',
          'Ocultas tras las colinas lejanas, también con shaders',
        ],
        where:
          'En todas partes. En un servidor con el mod, incluso las criaturas con las que nunca te has cruzado.',
        details: details([
          {
            title: 'Criaturas reales, donde se vieron',
            body: [
              [
                'Cada criatura lejana es real, y aparece donde tu juego o el servidor la vio por última vez. Al acercarte, la criatura real toma el relevo sin más. Las criaturas lejanas son solo decorado: no se pueden golpear, y las granjas y la aparición de criaturas funcionan igual que sin el mod.',
              ],
            ],
          },
          {
            title: 'Como en casa en tu terreno lejano',
            body: [
              [
                'Con Voxy, Distant Horizons, Lodistance, Far View o Ecstatic, las criaturas lejanas caminan sobre su suelo, desaparecen tras sus colinas y se funden con su niebla. Sin un mod de terreno lejano, aparecen más allá de tu distancia de renderizado, sobre el terreno del propio juego (ver ',
                { link: 'compatibilitySection', text: 'Compatibilidad' },
                ').',
              ],
            ],
          },
          {
            title: 'Incluso donde nadie ha estado',
            body: [
              [
                'Las tierras que nunca has visitado también tienen sus manadas. Living Horizon las estima a partir de la semilla del mundo, así que pueden ser distintas, o haberse ido, cuando llegues. Mira por un catalejo para verlas hasta donde apuntes.',
              ],
            ],
          },
          {
            title: 'En un servidor con el mod',
            body: [
              [
                'También ves las criaturas que rodean a cada uno de los demás jugadores, incluso manadas con las que nunca te has cruzado. Para mostrar criaturas estimadas más lejos, el dueño del servidor puede compartir la semilla del mundo. Está desactivado por defecto, porque la semilla revela el mundo entero (ver los ',
                { link: 'serverSettings', text: 'ajustes del servidor' },
                ').',
              ],
            ],
          },
          {
            title: 'En los ajustes',
            body: [
              [
                'Elige qué criaturas se muestran en ',
                { em: 'Criaturas y entidades...' },
                ', y oculta las estimadas con ',
                { em: 'Criaturas adivinadas' },
                '.',
              ],
            ],
          },
        ]),
      },
      players: {
        title: 'Jugadores a cualquier distancia',
        text: 'Ve a todos los demás jugadores, estén donde estén en el mapa, con su aspecto, su equipo y lo que monten.',
        points: [
          'A caballo, en bote o planeando con élitros',
          'Se mueven con fluidez, incluso a lo lejos',
          'Los jugadores sin el mod también pueden entrar',
        ],
        where: 'En LAN y en servidores con el mod.',
        details: details([
          {
            title: 'Todos, en todas partes',
            body: [
              [
                'En un servidor con el mod, ves a todos los demás jugadores, estén donde estén, moviéndose con fluidez sobre su montura, con su nombre encima. En un mundo abierto en LAN, funciona sin instalar nada.',
              ],
            ],
          },
          {
            title: 'Decide el dueño del servidor',
            body: [
              [
                'El dueño elige hasta dónde se muestran los jugadores, si solo se ven entre compañeros de equipo y qué jugadores o dimensiones quedan ocultos. También puede desactivar del todo los jugadores lejanos (ver los ',
                { link: 'serverSettings', text: 'ajustes del servidor' },
                ').',
              ],
            ],
          },
          {
            title: 'Nunca se muestran',
            body: [
              [
                'Los jugadores en modo espectador y los invisibles nunca se muestran a lo lejos. Los que van agachados sí, por ahora (',
                { link: 'sneaking', text: '#269' },
                ').',
              ],
            ],
          },
          {
            title: 'En los ajustes',
            body: [
              [
                { em: 'Renderizado de jugadores' },
                ' fija hasta dónde se ven los jugadores, y ',
                { em: 'Mostrar jugadores' },
                ' los desactiva.',
              ],
            ],
          },
        ]),
      },
      offline: {
        title: 'Los jugadores desconectados siguen viviendo',
        text: 'Cuando alguien se desconecta, una copia suya se queda en el sitio donde estaba. Pasea, se sienta, pesca y duerme por la noche, hasta que vuelve.',
        points: [
          'Su nombre, con (sin conexión) y cuándo se le vio por última vez',
          'Incluso quienes se fueron antes de que tú entraras',
          'Solo decorado: camina hacia ellos para apartarlos',
        ],
        where:
          'En todas partes. En un servidor con el mod, todos los que han jugado allí alguna vez.',
        details: details([
          {
            title: 'Una vida propia',
            body: [
              [
                'De día pasean, se sientan o se entretienen junto a un cofre. De noche se van a la cama. Pescan junto al agua, se resguardan de la lluvia, se reúnen alrededor de una hoguera al atardecer y charlan de dos en dos.',
              ],
            ],
          },
          {
            title: 'Se fijan en ti',
            body: [
              [
                'Mira a uno de cerca y te devuelve la mirada. Agáchate, y él también se agacha. Cuando se acercan monstruos, levantan el escudo, pero nunca luchan.',
              ],
            ],
          },
          {
            title: 'Solo decorado',
            body: [
              [
                'El mundo no sabe que existen: las criaturas los ignoran y nunca te cortan el paso. Camina hacia ellos para apartarlos.',
              ],
            ],
          },
          {
            title: 'En un servidor con el mod',
            body: [
              [
                'Ves a todos los que han jugado allí alguna vez, con el aspecto que tenían, incluso a quienes se fueron antes de que tú entraras. En otros sitios, ves a los jugadores que viste irse.',
              ],
            ],
          },
          {
            title: 'En los ajustes',
            body: [
              [
                { em: 'Mostrar desconectados' },
                ' los muestra u oculta, y ',
                { em: 'Actividad sin conexión' },
                ' activa o desactiva su vida alrededor de su sitio.',
              ],
            ],
          },
        ]),
      },
      birds: {
        title: 'Pájaros en el cielo',
        text: 'Bandadas, gansos en V, aves rapaces, gaviotas y patos llenan el cielo, y los ves desde muy lejos.',
        points: [
          'Se posan en árboles, tejados, campos y playas',
          'Los patos nadan en estanques y ríos',
          'No se añade nada a tu mundo',
        ],
        where: 'En todas partes, sin nada que configurar.',
        details: details([
          {
            title: 'Pájaros de todo tipo',
            body: [
              [
                'Desde los gansos que vuelan en V hasta los patos de los estanques, cada tipo vive donde le corresponde: en los árboles, sobre la costa, en los tejados, en los campos. Los murciélagos salen de noche.',
              ],
            ],
          },
          {
            title: 'Reaccionan a ti',
            body: [
              [
                'Acércate y echan a volar para posarse un poco más allá. Nunca desaparecen de golpe: se dispersan y se alejan volando.',
              ],
            ],
          },
          {
            title: 'Solo en tu pantalla',
            body: [
              [
                'Los pájaros los dibuja solo tu juego: no se añade nada a tu mundo, y consumen muy poco.',
              ],
            ],
          },
          {
            title: 'En los ajustes',
            body: [
              [
                { em: 'Mostrar aves' },
                ' los activa o desactiva, y ',
                { em: 'Tipos de aves...' },
                ' te deja elegir qué tipos vuelan.',
              ],
            ],
          },
        ]),
      },
      light: {
        title: 'Pensado para ser ligero',
        text: 'En lugar de pensar, las criaturas lejanas reproducen animaciones sencillas ya hechas, y muy lejos se convierten en imágenes ligeras de sí mismas.',
        points: [
          'Las criaturas ocultas tras las colinas no se dibujan',
          'Baja tu distancia de simulación y conserva un mundo vivo',
          'Muchas más criaturas por el mismo coste',
        ],
        where: 'Todo funciona en tu juego. El servidor solo comparte posiciones.',
        details: details([
          {
            title: 'Animaciones sencillas a lo lejos',
            body: [
              [
                'Las criaturas lejanas no tienen IA: caminan, pastan y miran a su alrededor con animaciones que se adaptan al terreno. Tu juego no tiene que hacerlas pensar, así que sigue yendo rápido.',
              ],
            ],
          },
          {
            title: 'Imágenes simplificadas',
            body: [
              [
                'Como muchos juegos, Living Horizon dibuja las criaturas, los vehículos y los jugadores lejanos como imágenes ligeras en lugar de modelos 3D completos. A esa distancia se ven igual, por una fracción del coste. Con un paquete de shaders como Photon, las imágenes se iluminan como el resto del mundo.',
              ],
            ],
          },
          {
            title: 'Un mundo vivo por menos',
            body: [
              [
                'Las criaturas ocultas tras las colinas o el terreno lejano no se dibujan en absoluto. Baja tu distancia de simulación para ganar FPS y sigue viendo un mundo vivo a tu alrededor. Un servidor con el mod apenas tiene trabajo: tu juego se encarga de todo lo que ves.',
              ],
            ],
          },
          {
            title: 'Plantillas',
            body: [
              [
                'Elige una ',
                { em: 'Plantilla' },
                ', de ',
                { em: 'Bajo' },
                ' a ',
                { em: 'Ultra' },
                ', para ajustarlo todo de una vez; los valores por defecto son la opción equilibrada. Los ajustes están en la pantalla Opciones, en Mod Menu y en la configuración de gráficos de Sodium, en 14 idiomas.',
              ],
              [
                'Cuidado: ',
                { em: 'Máx. de criaturas' },
                ' y ',
                { em: 'Renderizado de criaturas' },
                ' a la vez en ',
                { em: 'Sin límite' },
                ' pueden hacer que el juego se cierre de golpe.',
              ],
            ],
          },
        ]),
      },
    },
  },

  compare: {
    eyebrow: 'Antes / después',
    title: 'La misma vista.',
    accent: 'Un mod.',
    text: 'Arrastra el control. A la izquierda, el terreno lejano está ahí, pero vacío. A la derecha, Living Horizon le devuelve la vida.',
    tabs: 'Escenas',
    shots: {
      shaders: {
        title: 'En el juego · Shaders',
        text: 'Con un paquete de shaders, distancia de renderizado y de simulación 12: los animales vuelven a las colinas lejanas.',
      },
      vanilla: {
        title: 'En el juego · Vanilla',
        text: 'Sin shaders, distancia de renderizado y de simulación 12: manadas de vacas y caballos llenan las llanuras lejanas.',
      },
    },
    scenes: {
      village: {
        title: 'Aldea en la llanura',
        text: 'Aldeanos, un gólem y animales pastando alrededor de una aldea lejana.',
      },
      ridge: {
        title: 'Jinetes en la cresta',
        text: 'Otros jugadores y sus caballos en las colinas, con su nombre encima y todo.',
      },
      coast: {
        title: 'Costa a mediodía',
        text: 'Barcas mar adentro, aldeanos en la orilla lejana, gaviotas sobre el agua.',
      },
    },
    legendNear: 'Tu distancia de renderizado: con vida en ambos casos',
    legendFar: 'Terreno lejano: vacío sin el mod',
    note: {
      before:
        'Ilustración estilizada del efecto. Las primeras pestañas son capturas reales del juego. ¿Tienes una buena?',
      link: 'Compártela en Discord',
      after: '.',
    },
    shotWithout: (text: string) => `Captura del juego sin Living Horizon. ${text}`,
    shotWith: (text: string) => `Captura del juego con Living Horizon. ${text}`,
    sceneWithout: (text: string) => `Sin Living Horizon: ${text}`,
    sceneWith: (text: string) => `Con Living Horizon: ${text}`,
    badgeWithout: 'Sin el mod',
    badgeWith: 'Con Living Horizon',
    slider: 'Desliza para comparar la vista sin y con Living Horizon',
  },

  servers: {
    eyebrow: 'Multijugador',
    title: 'Ponlo en tu servidor.',
    accent: 'Todos ven a todos.',
    text: 'El mismo jar funciona en servidores. El servidor comparte dónde está cada jugador, las criaturas a su alrededor y los jugadores desconectados con todos los que tienen el mod.',
    cover:
      'El título de Living Horizon delante de una multitud de cabezas de jugadores y criaturas.',
    matrixTitle: 'Qué ves, según dónde juegas',
    matrixText: 'Todo funciona en un jugador. En un servidor, el mod del servidor hace el resto.',
    matrixLabel: 'Funciones según dónde se juega',
    feature: 'Función',
    places: ['Un jugador', 'Mundo en LAN', 'Servidor con el mod', 'Servidor sin el mod'],
    rows: {
      mobs: 'Criaturas en el horizonte',
      players: 'Jugadores a cualquier distancia',
      offline: 'Jugadores desconectados',
      unexplored: 'Criaturas adivinadas a partir de la semilla',
      birds: 'Pájaros',
    },
    cells: {
      mobsMet: 'Solo las criaturas que has visto',
      offlineEven: 'Incluso los que se fueron antes de que entraras',
      offlineSeen: 'Solo los que has visto irse',
    },
    yes: 'Sí',
    no: 'No',
    noOthers: 'No hay otros jugadores',
    notApplicable: 'No aplicable',
    notes: {
      install: {
        title: 'Pon el jar en la carpeta mods del servidor',
        text: 'El mismo archivo que para tu juego, más Fabric API en Fabric y Quilt. Nada que configurar.',
      },
      lan: {
        title: 'LAN: nada que instalar',
        text: 'Un mundo abierto en LAN lo comparte todo a través del juego del anfitrión.',
      },
      join: {
        title: 'Cualquiera puede entrar',
        text: 'Los jugadores sin el mod pueden seguir entrando. El servidor no les envía nada.',
      },
      tell: {
        title: 'Avisa a tus jugadores',
        text: 'El servidor comparte la posición de cada jugador con los jugadores que tienen el mod.',
      },
    },
  },

  compatibility: {
    eyebrow: 'Compatibilidad',
    title: 'Distant Horizons, Voxy, Ecstatic…',
    accent: 'o nada en absoluto.',
    text: 'Living Horizon detecta tu mod de terreno lejano por sí solo: las criaturas y los jugadores caminan sobre su suelo, se ocultan tras sus colinas y se desvanecen en su niebla. Sin ninguno, mantiene el mundo con vida más allá de tu distancia de renderizado.',
    /** A card per mod; the names are the mods' own. */
    cards: {
      dh: { text: 'Desde la 2.3. Criaturas y jugadores sobre su terreno, tras sus colinas.' },
      voxy: { text: 'Criaturas y jugadores sobre su terreno, también con paquetes de shaders.' },
      lodistance: { text: 'Fabric, Minecraft 26.3, con OpenGL y sin shaders.' },
      farView: { text: 'Forge y NeoForge, Minecraft 1.20.1 a 1.21.4. Criaturas sobre su terreno.' },
      ecstatic: { text: 'NeoForge, Minecraft 1.21.1, un jugador. Criaturas sobre su terreno.' },
      bobby: {
        text: 'Criaturas y jugadores sobre el terreno que guarda más allá de la distancia de visión del servidor.',
      },
      iris: { text: 'Los paquetes de shaders funcionan, como Photon y Complementary Unbound.' },
      vanilla: {
        title: 'Vanilla',
        text: 'Sin mod de terreno lejano: baja tu distancia de renderizado y de simulación y sigue viendo un mundo vivo.',
      },
    },
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: '¿Y tus otros mods?',
      text: (n: number) =>
        p(n, {
          one: '{n} mod en la lista: shaders, rendimiento, mods de criaturas. Qué funciona y qué espera todavía a un tester.',
          many: '{n} de mods en la lista: shaders, rendimiento, mods de criaturas. Qué funciona y qué espera todavía a un tester.',
          other:
            '{n} mods en la lista: shaders, rendimiento, mods de criaturas. Qué funciona y qué espera todavía a un tester.',
        }),
      link: 'Ver los mods compatibles',
    },
    matrixTitle: 'Versiones de Minecraft y loaders',
    matrixText: 'Un jar por versión del juego y loader.',
    /** Next to the "?" of the table: a link to report a build. */
    report: '¿Has probado una? Cuéntanoslo',
    builds: (builds: number, range: string) =>
      p(builds, {
        one: `{n} compilación, para ${range}.`,
        many: `{n} compilaciones, para ${range}.`,
        other: `{n} compilaciones, para ${range}.`,
      }),
    keyUntested: 'Arranca, faltan testers',
    table: 'Tabla de compatibilidad',
    untested: 'Arranca en el juego, aún no se ha visto dibujando en un mundo',
    noBuild: 'Sin compilación',
    notAvailable: 'No disponible',
    fallback: (range: string) =>
      `Minecraft ${range} en Fabric, Quilt, NeoForge (1.20.6 y posteriores) y Forge.`,
    fullTable: 'Tabla completa en GitHub',
    loaders: {
      fabric: 'Con Fabric API. Mod Menu opcional.',
      quilt: 'Con Fabric API (QFAPI).',
      neoforge: 'Desde Minecraft 1.20.6, no hace falta nada más.',
      forge: 'No hace falta nada más.',
    },
  },

  /** Testing, contributing and the Discord, in one section. */
  help: {
    eyebrow: 'Participa',
    title: 'Una beta,',
    accent: 'hecha con sus jugadores.',
    test: {
      title: 'Pruébalo en tu configuración',
      text: 'Cuéntanos cómo va con tu versión del juego, tu loader y tus mods, bien o mal. Cada informe ayuda.',
      /** Under the text, once the builds are known. */
      untested: (n: number) =>
        p(n, {
          one: '{n} compilación aún espera a su primer tester',
          many: '{n} de compilaciones aún esperan a su primer tester',
          other: '{n} compilaciones aún esperan a su primer tester',
        }),
      report: 'Informar de compatibilidad',
    },
    code: {
      title: 'Contribuir',
      text: 'El código, las correcciones y las traducciones llegan como pull requests en GitHub. La IA es bienvenida, siempre que leas, entiendas y pruebes lo que escribe.',
      guide: 'Guía de contribución',
    },
    discord: {
      title: 'Únete al Discord',
      text: 'Preguntas, novedades, capturas y ayuda, con el autor y otros jugadores.',
      join: 'Únete al Discord',
    },
  },

  changelog: {
    eyebrow: 'Últimas novedades',
    title: 'Versiones frecuentes,',
    accent: 'arreglos rápidos.',
    text: 'Directamente del registro de cambios del proyecto en GitHub.',
    textEnglish: 'Directamente del registro de cambios del proyecto en GitHub, en inglés.',
    latest: 'Última',
    release: 'Versión',
    sides: { server: 'Servidor', client: 'Cliente' },
    kinds: { new: 'Nuevo', improved: 'Mejorado', fixed: 'Corregido' },
    more: (n: number) =>
      p(n, {
        one: 'Mostrar {n} cambio más',
        many: 'Mostrar {n} cambios más',
        other: 'Mostrar {n} cambios más',
      }),
    failed: 'No se ha podido cargar el registro de cambios ahora mismo. Siempre está en GitHub.',
    full: 'Ver el registro de cambios completo en GitHub',
    releases: 'Todas las versiones',
    /** The link to the changelog page, on the home page. */
    every: 'Ver todas las versiones',
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: '¿Preguntas?',
    accent: 'Respuestas.',
    text: 'Lo que más preguntan los jugadores. Para cualquier otra cosa, pregunta en el Discord.',
    groups: {
      how: 'Cómo funciona',
      compatibility: 'Compatibilidad',
      performance: 'Rendimiento y ajustes',
      multiplayer: 'Multijugador',
      downloads: 'Descargas y licencia',
      ai: 'IA',
    },
    questions: questions({
      visual: {
        q: '¿Es solo visual? ¿Rompe las granjas de criaturas?',
        a: [
          [
            'Es solo visual, sin IA. Las criaturas reales funcionan igual que sin el mod, así que las granjas, la aparición de criaturas y el límite de criaturas no cambian. No puedes golpear a una criatura lejana.',
          ],
        ],
      },
      real: {
        q: '¿Las criaturas lejanas son reales o están puestas al azar?',
        a: [
          [
            'Son criaturas reales, donde tu juego o el servidor las vio por última vez. Una que haya muerto o desaparecido desde entonces puede seguir viéndose hasta que te acerques a ella. Entonces se olvida.',
          ],
        ],
      },
      simulation: {
        q: '¿En qué se diferencia de subir la distancia de simulación o de entidades?',
        a: [
          [
            'Subir la distancia de simulación hace que el servidor ejecute más criaturas reales, lo que cuesta mucho, y aun así el servidor solo las envía hasta cierta distancia. Living Horizon dibuja copias que el servidor no ejecuta. Reproducen animaciones ya hechas y, a lo lejos, se convierten en imágenes planas (',
            { em: 'Entidades simplificadas' },
            ').',
          ],
        ],
      },
      range: {
        q: '¿Hasta dónde muestra criaturas y jugadores?',
        a: [
          [
            'Criaturas: 512 bloques por defecto, y ',
            { em: 'Renderizado de criaturas' },
            ' llega hasta ',
            { em: 'Sin límite' },
            '. Jugadores, barcas y vehículos: a cualquier distancia por defecto, y ',
            { em: 'Renderizado de jugadores' },
            ' y ',
            { em: 'Renderizado de entidades' },
            ' pueden limitarla. Una criatura solo aparece cuando tu juego o el servidor ya la ha visto.',
          ],
        ],
      },
      mods: {
        q: '¿Funciona con mi mod?',
        a: [
          [
            'Lo más probable es que sí. Voxy, Distant Horizons, Lodistance, Ecstatic, Bobby, Sodium, Iris y los paquetes de shaders funcionan con él (consulta ',
            { link: 'compatibilitySection', text: 'Compatibilidad' },
            '). Living Horizon solo añade sus propias figuras: no cambia cómo dibujan el mundo otros mods. Los mods que aún no se han probado están en la etiqueta ',
            { link: 'modCompatibility', text: 'mod compatibility' },
            ' de GitHub. Si algo falla, abre un ',
            { link: 'issues', text: 'issue' },
            ' con el nombre y la versión del mod.',
          ],
        ],
      },
      modMobs: {
        q: '¿Las criaturas de otros mods se ven a lo lejos?',
        a: [
          [
            'Sí, siempre que usen el sistema de entidades propio de Minecraft. Si las entidades de un mod funcionan de forma demasiado distinta, pide que se les dé soporte en un ',
            { link: 'issues', text: 'issue' },
            ' o en el ',
            { link: 'discord', text: 'Discord' },
            '.',
          ],
        ],
      },
      farTerrain: {
        q: '¿Necesito Voxy, Distant Horizons, Lodistance o Ecstatic?',
        a: [
          [
            'No. Sin ellos, las criaturas y los jugadores lejanos se ven sobre el terreno del propio juego, hasta tu distancia de renderizado. Con uno de ellos, también se ven sobre su terreno lejano.',
          ],
        ],
      },
      frameRate: {
        q: '¿Me bajará los FPS?',
        a: [
          [
            'Dibujar más entidades cuesta FPS. Si tu juego va lento, deja ',
            { em: 'Criaturas simplificadas' },
            ' y ',
            { em: 'Entidades simplificadas' },
            ' activados y elige una ',
            { em: 'Plantilla' },
            ' más baja. ',
            { em: 'Máx. de criaturas' },
            ' y ',
            { em: 'Renderizado de criaturas' },
            ' a la vez en ',
            { em: 'Sin límite' },
            ' pueden hacer que el juego se cierre de golpe.',
          ],
        ],
      },
      choose: {
        q: '¿Puedo elegir qué se muestra?',
        a: [
          [
            'Sí. ',
            { em: 'Mostrar criaturas' },
            ', ',
            { em: 'Mostrar jugadores' },
            ', ',
            { em: 'Mostrar desconectados' },
            ' y ',
            { em: 'Mostrar aves' },
            ' activan o desactivan cada parte. ',
            { em: 'Criaturas y entidades...' },
            ' permite elegir criatura por criatura.',
          ],
        ],
      },
      world: {
        q: '¿Cambia mi mundo o carga chunks?',
        a: [
          [
            'No. No cambia nada de tu mundo y no carga ningún chunk. Guarda lo que recuerda en archivos propios: en la carpeta ',
            { code: 'config' },
            ' y, para lo que comparte el servidor, en ',
            { code: 'livinghorizon-positions.dat' },
            ' dentro de la carpeta del mundo. Si quitas el mod, tu mundo queda como estaba.',
          ],
          ['En un servidor, el mod solo envía posiciones a los jugadores que lo tienen.'],
        ],
      },
      server: {
        q: '¿El servidor necesita el mod?',
        a: [
          [
            'No. Casi todo funciona en un jugador, y puedes entrar en cualquier servidor con él. Pero para ver jugadores a cualquier distancia hace falta el mod en el servidor, y entonces el servidor comparte además más criaturas y los jugadores desconectados. Consulta ',
            { link: 'serversSection', text: 'Multijugador' },
            '.',
          ],
        ],
      },
      paper: {
        q: '¿Funciona en servidores Paper o Spigot?',
        a: [
          [
            'Puedes jugar en ellos con el mod, como en cualquier servidor sin él. La parte del servidor solo funciona en Fabric, Quilt, NeoForge y Forge, así que un servidor Paper o Spigot no comparte nada. Un plugin para Paper se está discutiendo en ',
            { link: 'paperPlugin', text: '#156' },
            '.',
          ],
        ],
      },
      nothing: {
        q: 'No veo criaturas ni jugadores lejanos. ¿Por qué?',
        a: [
          {
            list: [
              [
                'Los jugadores lejanos necesitan el mod en el servidor. Su dueño también puede limitar a quién se comparte (consulta los ',
                { link: 'serverSettings', text: 'ajustes del servidor' },
                ').',
              ],
              ['En un servidor sin el mod, solo se ven las criaturas que ya has visto.'],
            ],
          },
        ],
      },
      cheat: {
        q: '¿Se puede usar para hacer trampas? ¿Está permitido en los servidores?',
        a: [
          [
            'Solo muestra a otros jugadores donde el servidor lo permite. Los jugadores lejanos solo se ven en un servidor que tiene el mod, y su dueño elige qué comparte: hasta qué distancia, solo con los compañeros de equipo, y qué jugadores y dimensiones quedan ocultos. ',
            { code: '"sharePlayers": false' },
            ' lo desactiva (consulta los ',
            { link: 'serverSettings', text: 'ajustes del servidor' },
            '). Los jugadores invisibles y los que están en modo espectador nunca se comparten. Los que van agachados sí, por ahora (',
            { link: 'sneaking', text: '#269' },
            ').',
          ],
          [
            'En otros servidores, solo ves lo que tu propio juego ha visto. El mod no envía nada al servidor. Aun así, cada servidor tiene sus propias normas sobre los mods: pregunta a sus administradores.',
          ],
        ],
      },
      bedrock: {
        q: '¿Hay una versión para Bedrock?',
        a: [['No. Living Horizon es un mod para Minecraft Java Edition.']],
      },
      version: {
        q: 'Mi versión del juego no es compatible. ¿Lo será?',
        a: [
          [
            'Di en el ',
            { link: 'discord', text: 'Discord' },
            ' con qué versión y qué loader juegas. Ayuda a decidir qué viene después.',
          ],
        ],
      },
      modpack: {
        q: '¿Puedo ponerlo en un modpack?',
        a: [['Sí. Usa el archivo oficial y da el crédito correspondiente.']],
      },
      abandoned: {
        q: '¿Y si el proyecto se abandona?',
        a: [
          [
            'La licencia lo tiene previsto. En cuanto el proyecto se declare abandonado (con su repositorio archivado, o su README indicándolo), su licencia pasa a ser la GPL: cualquiera puede continuar el proyecto, dando el crédito. Consulta la sección 5 de la ',
            { link: 'license', text: 'licencia' },
            '.',
          ],
        ],
      },
      ai: {
        q: '¿Está hecho con IA?',
        a: [
          [
            'Sí, en parte. La IA escribe gran parte del código. Su autor, clixmods, decide cómo funciona el mod, prueba cada cambio en el juego y arregla lo que sale mal. Sin IA, un proyecto de este tamaño no existiría.',
          ],
          [
            'Las ideas vienen del desarrollo de videojuegos, que es el oficio de clixmods: los impostores, los LOD y las animaciones ya hechas son trucos que los juegos usan desde hace años. clixmods hace mods desde 2017, como el mapa de Call of Duty: Black Ops III ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ', descargado más de un millón de veces en el Steam Workshop (consulta su ',
            { link: 'portfolio', text: 'portafolio' },
            ').',
          ],
        ],
      },
      modrinth: {
        q: '¿Está en Modrinth? ¿Por qué no aparece listado allí?',
        a: [
          [
            'Está en ',
            { link: 'modrinth', text: 'Modrinth' },
            ', pero no listado: no aparece en las búsquedas de Modrinth. Desde agosto de 2026, ',
            { link: 'modrinthRules', text: 'las reglas de Modrinth' },
            ' no permiten que un proyecto hecho principalmente con IA sea público, así que su equipo lo dejó sin listar. CurseForge, Nexus Mods y la ',
            { link: 'releases', text: 'página de versiones' },
            ' tienen los mismos archivos.',
          ],
          [
            'No estar listado no significa que no sea seguro. Tiene que ver con cómo se hace el mod, no con lo que hace:',
          ],
          {
            list: [
              [
                'El código es público: cualquiera puede leerlo en su ',
                { link: 'github', text: 'repositorio de GitHub' },
                '.',
              ],
              [
                'GitHub compila cada versión a partir de este código, y sus registros de compilación son públicos.',
              ],
              [
                'El mod no tiene código propio que se conecte a internet. Los aspectos de los jugadores vienen de Mojang a través del juego, y el enlace de Discord solo se abre cuando haces clic en él.',
              ],
            ],
          },
        ],
      },
    }),
    ask: 'Pregunta en Discord',
    issue: 'Abrir un issue',
  },

  download: {
    eyebrow: 'Descargar',
    title: 'Consigue',
    accent: 'Living Horizon',
    text: {
      before:
        'Gratis, un jar por versión del juego y loader, para tu juego y tu servidor. Ponlo en la carpeta',
      after: 'y el horizonte cobra vida.',
    },
    latest: 'Última versión',
    version: 'Versión de Minecraft',
    loader: 'Loader',
    needs: { before: '· necesita', after: '' },
    untested:
      'Esta compilación arranca en el juego, pero nadie ha informado todavía de que dibuje en un mundo',
    jar: 'Descargar el jar',
    releasePage: 'Descárgalo desde la página de la versión',
    sameJar: 'El mismo jar va en tu servidor',
    curseforge: 'o descárgalo en CurseForge',
    pick: 'Elige tu archivo en la página de la versión o en CurseForge.',
    total: 'Descargas, todas las plataformas',
    count: (n: number) =>
      p(n, { one: '{n} descarga', many: '{n} descargas', other: '{n} descargas' }),
    noCount: 'Descargas no disponibles',
    soon: 'Próximamente',
    checking: 'Comprobando…',
    everyFile: 'todos los archivos',
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) =>
      p(n, { one: '{n} modpack', many: '{n} de modpacks', other: '{n} modpacks' }),
  },

  modpacks: {
    eyebrow: 'Modpacks',
    title: 'Ya está en',
    accent: 'modpacks.',
    text: 'Packs que incluyen Living Horizon. ¿Has hecho uno con él? Aparecerá aquí solo.',
    by: (authors: string) => `por ${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `Descargar en ${platform}`,
    none: 'Ningún modpack incluye Living Horizon todavía. El tuyo podría ser el primero.',
    loading: 'Los modpacks aparecen aquí en un momento.',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) =>
      p(n, {
        one: 'Ver la página de modpacks',
        many: 'Ver los {n} de modpacks',
        other: 'Ver los {n} modpacks',
      }),
  },

  mods: {
    eyebrow: 'Compatibilidad',
    title: 'Se lleva bien',
    accent: 'con tus mods.',
    text: 'Directamente del proyecto en GitHub, al día con cada prueba: qué funciona, qué tiene un problema conocido y qué espera todavía a que alguien lo pruebe. Las notas están en inglés.',
    search: 'Buscar un mod',
    filter: 'Filtrar por estado',
    all: 'Todos',
    status: { works: 'Funciona', issue: 'Problema conocido', untested: 'Sin probar todavía' },
    /** The heading of the shader packs, after the mods. */
    shaders: 'Paquetes de shaders',
    issue: (n: number) => `Issue #${n}`,
    /** A link that only shows the platform's logo. */
    page: (platform: string) => `Página en ${platform}`,
    /**
     * The mods the modpacks that ship Living Horizon ship too: a pack runs them together, so
     * they work with it.
     */
    packs: {
      title: 'En modpacks con Living Horizon',
      chip: 'En modpacks',
      text: 'Los modpacks que incluyen Living Horizon también lo usan con estos mods.',
      count: (n: number) =>
        p(n, { one: 'En {n} modpack', many: 'En {n} de modpacks', other: 'En {n} modpacks' }),
      more: (n: number) =>
        p(n, {
          one: 'Mostrar {n} mod más',
          many: 'Mostrar {n} de mods más',
          other: 'Mostrar {n} mods más',
        }),
    },
    none: 'Ningún mod coincide con tu búsqueda.',
    missing: {
      title: '¿Falta un mod?',
      text: 'Cuéntanos cómo funciona Living Horizon con él, bien o mal: cada informe ayuda.',
      link: 'Informar de un mod',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: 'La lista no se ha podido cargar ahora. Siempre está en GitHub.',
    failedLink: 'Ver la lista en GitHub',
  },

  footer: {
    tagline:
      'Da vida a la distancia. Un mod para Minecraft Java Edition, para tu juego y tu servidor.',
    beta: 'Beta: habrá errores; cuéntanoslos.',
    project: 'Proyecto',
    docs: 'Documentación',
    license: 'Licencia',
    community: 'Comunidad',
    bug: 'Informar de un error',
    contribute: 'Contribuir',
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: 'Lista de modpacks de', after: '' },
    official:
      'No es un producto oficial de Minecraft. No está aprobado por Mojang ni Microsoft ni asociado a ellos.',
  },
};
