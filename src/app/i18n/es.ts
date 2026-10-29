import { Messages } from './en';
import { plural } from './plural';
import { questions } from './rich';

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
    testers: 'Testers',
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
    news: 'El mod ya funciona también en servidores',
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
    preset: 'Plantilla',
    presets: ['Bajo', 'Normal', 'Alto', 'Ultra'],
    mobDistance: 'Renderizado de criaturas',
    items: {
      mobs: {
        title: 'Todas las criaturas, hasta el horizonte',
        text: 'Los animales pastan, los aldeanos pasean por aldeas lejanas, los gólems montan guardia. Cualquier criatura que el juego pueda dibujar, incluidas las de otros mods.',
        points: [
          'Sobre el terreno de Voxy y Distant Horizons, o en vanilla',
          'Ocultas tras las colinas lejanas, también con paquetes de shaders',
          'Elige cuáles en Criaturas y entidades',
        ],
        where: 'En todas partes. En un servidor con el mod, incluso criaturas que nunca has visto.',
      },
      players: {
        title: 'Jugadores a cualquier distancia',
        text: 'Ve a todos los demás jugadores, estén donde estén en el mapa, con su aspecto, su armadura, lo que llevan en la mano y lo que montan.',
        points: [
          'Caballos, barcas, vagonetas y ghasts felices',
          'Fluido: el servidor comparte las posiciones cinco veces por segundo',
          'Los jugadores sin el mod pueden seguir entrando',
        ],
        where: 'En LAN y en servidores con el mod.',
      },
      offline: {
        title: 'Los jugadores desconectados siguen viviendo',
        text: 'Cuando alguien se desconecta, una copia con su nombre se queda donde estaba. Pasea, se sienta, abre cofres y duerme por la noche, hasta que vuelve.',
        points: [
          '(sin conexión) tras su nombre, y cuándo se le vio por última vez',
          'Incluso jugadores que se fueron antes de que entraras',
          'Solo de adorno: nunca te bloquean ni a ti ni a las criaturas',
        ],
        where:
          'En todas partes. En un servidor con el mod, todos los jugadores que han jugado allí alguna vez.',
      },
      birds: {
        title: 'Pájaros en el cielo',
        text: 'Bandadas, gansos en V, aves rapaces, gaviotas, patos y murciélagos sobrevuelan el paisaje, y los ves desde muy lejos.',
        points: [
          'Se posan en árboles, tejados, campos y playas',
          'Los patos nadan por su estanque',
          'Pequeños modelos 3D de cerca, imágenes planas de lejos',
        ],
        where: 'En todas partes, sin nada que configurar.',
      },
      light: {
        title: 'Pensado para ser ligero',
        text: 'Las criaturas lejanas no tienen IA: reproducen animaciones ya hechas que se adaptan al suelo. Muy a lo lejos, se convierten en imágenes planas de sí mismas.',
        points: [
          'Las criaturas ocultas tras las colinas no se dibujan',
          'Baja tu distancia de simulación y conserva un mundo vivo',
          'Entidades simplificadas: muchas más criaturas por el mismo coste',
        ],
        where: 'Todo funciona en tu juego. El servidor solo comparte posiciones.',
      },
      settings: {
        title: 'Los ajustes, donde los buscas',
        text: 'En la pantalla Opciones, en Mod Menu, en la configuración de gráficos de Sodium o con /livinghorizon config. Cada ajuste explica lo que hace.',
        points: [
          'Las plantillas Bajo, Normal, Alto y Ultra lo ajustan todo de una vez',
          'En 14 idiomas',
          'Restablecer por defecto lo devuelve todo a como estaba',
        ],
        where: 'Los valores por defecto son la opción equilibrada.',
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
    since: (version: string) => `Soporte para servidores desde la ${version}`,
    steps: {
      jar: {
        title: 'Pon el jar en la carpeta mods del servidor',
        text: 'El mismo archivo que para tu juego, para la versión de Minecraft y el loader del servidor, más Fabric API en Fabric y Quilt. Mantenlo actualizado en ambos lados.',
      },
      start: {
        title: 'Inicia el servidor',
        text: 'Nada que configurar. El servidor guarda lo que comparte en la carpeta del mundo, así que sigue ahí después de reiniciar.',
      },
      see: {
        title: 'Los jugadores con el mod ven a todos',
        text: 'Cada jugador a cualquier distancia, con su aspecto, su armadura y su montura, y las criaturas a su alrededor, incluso las que nunca han visto.',
      },
    },
    matrixTitle: 'Qué ves, según dónde juegas',
    matrixText: 'Todo funciona en un jugador. En un servidor, el mod del servidor hace el resto.',
    matrixLabel: 'Funciones según dónde se juega',
    feature: 'Función',
    places: ['Un jugador', 'Mundo en LAN', 'Servidor con el mod', 'Servidor sin el mod'],
    rows: {
      mobs: 'Criaturas en el horizonte',
      players: 'Jugadores a cualquier distancia',
      offline: 'Jugadores desconectados',
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
      datapack: {
        title: '¿Usabas el paquete de datos?',
        text: 'Quítalo de la carpeta datapacks del mundo: el mod en el servidor lo sustituye.',
      },
    },
  },

  compatibility: {
    eyebrow: 'Compatibilidad',
    title: 'Hecho para el terreno lejano.',
    accent: 'Y bien sin él.',
    text: 'Living Horizon detecta Distant Horizons o Voxy por sí solo y dibuja criaturas y jugadores justo sobre su terreno. Sin ellos, mantiene el mundo con vida más allá de tu distancia de renderizado.',
    works: 'Funciona',
    cards: {
      dh: {
        text: 'Las criaturas y los jugadores se dibujan sobre su terreno lejano y se ocultan tras sus colinas. Desde Distant Horizons 2.3.',
        link: 'Descargar Distant Horizons',
      },
      voxy: {
        text: 'El horizonte del terreno de Voxy cobra vida: animales pastando, aldeas lejanas, jugadores en movimiento.',
        link: 'Descargar Voxy',
      },
      vanilla: {
        title: 'Vanilla',
        text: 'Sin mod de terreno lejano. Juega con poca distancia de renderizado y de simulación y sigue viendo un mundo vivo.',
      },
    },
    extras: [
      'Paquetes de shaders de Iris (Photon, Complementary…)',
      'El mismo jar en servidores, o entra en cualquier servidor sin él',
      'Ajustes en la configuración de gráficos de Sodium (0.8+)',
    ],
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

  performance: {
    eyebrow: 'Rendimiento',
    title: 'Un horizonte vivo que',
    accent: 'te devuelve fotogramas.',
    design: {
      eyebrow: 'Renderizado optimizado',
      title: 'Un horizonte vivo que',
      accent: 'no se come tus fotogramas.',
      text: 'Living Horizon está pensado desde el principio para ser ligero: las figuras lejanas se dibujan de la forma más barata, y solo cuando se pueden ver. Así puedes bajar tu distancia de renderizado y de simulación y mantener el mundo con vida.',
      cards: {
        pictures: {
          title: 'Imágenes ligeras a lo lejos',
          text: 'A partir de cierta distancia, una figura lejana se dibuja como una imagen plana de sí misma en lugar de un modelo completo. A ese tamaño se ve igual, por una fracción del trabajo.',
        },
        hidden: {
          title: 'Lo oculto no se dibuja',
          text: 'Las criaturas detrás del terreno lejano no se dibujan en absoluto, y las animaciones se detienen cuando una figura es demasiado pequeña o está demasiado lejos para notarlas.',
        },
        presets: {
          title: 'Plantillas de calidad',
          text: 'Bajo, Normal, Alto y Ultra ajustan de una vez el número de criaturas, su alcance y los pájaros. Los valores por defecto son la opción equilibrada.',
        },
        server: {
          title: 'Ligero para el servidor',
          text: 'Todas las animaciones se ejecutan en el juego de los jugadores. Un servidor con el mod solo comparte posiciones.',
        },
      },
    },
    numbers: 'En cifras',
    measured: 'Medido por jugadores y por el autor; la configuración está bajo cada valor.',
    noNumbers: {
      before:
        'Aquí no hay cifras inventadas: se irán rellenando a medida que lleguen benchmarks reales. El panel de depuración integrado (',
      after: ') muestra el coste del propio mod por tic y por fotograma.',
    },
    slots: {
      fps: { label: 'Ganancia de FPS', hint: 'el mod dibuja la distancia en lugar del juego' },
      mobs: { label: 'Criaturas en el horizonte', hint: 'dibujadas a la vez' },
      distance: { label: 'Distancia cubierta', hint: 'más allá de la distancia de renderizado' },
      frame: { label: 'Coste por fotograma', hint: 'del panel de depuración' },
    },
    setups: {
      fps: '120 → 150 FPS para la misma vista de la distancia: una distancia de renderizado más corta con Living Horizon dibujando las criaturas más allá, frente al juego dibujando él mismo hasta tan lejos. Medido por el autor.',
    },
    pending: (hint: string) => `Benchmark pendiente · ${hint}`,
    share: '¿Lo has medido en tu equipo? Compártelo',
  },

  testers: {
    eyebrow: 'Ahora en beta',
    title: 'Ayuda a dar vida al horizonte.',
    lede: 'Living Horizon es joven y funciona con muchísimas combinaciones: versiones del juego, loaders, versiones de Distant Horizons y Voxy, paquetes de shaders, otros mods. Todavía no se han probado todas. Si juegas con él, cuéntanos cómo va, bien o mal: cada informe cuenta.',
    asks: [
      'Tu versión de Minecraft y tu loader',
      'Distant Horizons o Voxy, y su versión',
      'Paquete de shaders, si usas uno (Photon, Complementary…)',
      'Un jugador, LAN o servidor, con el mod o sin él',
      'Una captura de lo que ves',
    ],
    report: 'Informar de compatibilidad',
    discord: 'Únete al Discord',
    issue: 'Abrir un issue',
    status: 'Estado de las pruebas',
    waiting: (builds: number) =>
      p(builds, {
        one: 'de {n} compilación aún necesita un primer tester',
        many: 'de {n} compilaciones aún necesitan un primer tester',
        other: 'de {n} compilaciones aún necesitan un primer tester',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, {
        one: '{n} compilación vista funcionando',
        many: '{n} compilaciones vistas funcionando',
        other: '{n} compilaciones vistas funcionando',
      })}, ${waiting} en espera`,
    seen: 'Visto funcionando',
    yours: 'Te esperan',
    wanted: 'Los más buscados',
    every: 'Cada',
    everyRest: 'configuración nos enseña algo nuevo',
    loading:
      'Las combinaciones sin probar aparecen aquí en cuanto se cargan los datos del proyecto.',
  },

  contribute: {
    eyebrow: 'Contribuir',
    title: 'Constrúyelo con nosotros.',
    accent: 'IA bienvenida.',
    text: 'Living Horizon se hace en un solo sitio, su repositorio de GitHub. El código, las correcciones y las traducciones llegan ahí como pull requests.',
    steps: {
      talk: {
        title: 'Habla primero',
        text: 'Para cualquier cosa más grande que un arreglo pequeño, abre un issue para acordar el rumbo antes de hacer el trabajo.',
      },
      pr: {
        title: 'Abre una pull request',
        text: 'Trabaja en una rama feature/* o fix/* y apunta a develop. Los commits van en inglés, como conventional commits.',
      },
      build: {
        title: 'Compila y prueba',
        text: 'Una sola compilación de Gradle compila el mod y ejecuta los tests. La CI también la ejecuta en cada pull request.',
      },
      credit: {
        title: 'Recibe el crédito',
        text: 'Añádete a CREDITS.md, y añade una línea al registro de cambios si los jugadores van a notar el cambio.',
      },
    },
    aiTitle: '¿Usas IA? Adelante.',
    aiText:
      'La IA forma parte de cómo se hace este proyecto, y puedes usarla para contribuir, sin problema. Solo sigue pensando en lo que escribe: lee, entiende y prueba tu cambio antes de abrir la pull request.',
    claude: {
      before: 'Claude funciona mejor aquí: lee',
      between: 'y las skills de',
      after: 'por su cuenta.',
    },
    terms: {
      before: 'Al abrir una pull request aceptas la sección 3 de la',
      link: 'licencia',
      after:
        ': conservas tus derechos de autor y sigues figurando como colaborador, pase lo que pase.',
    },
    guide: 'Lee la guía de contribución',
    issues: 'Issues abiertos',
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
            '. Jugadores: a cualquier distancia por defecto, y ',
            { em: 'Renderizado de jugadores' },
            ' puede limitarla. Una criatura solo aparece cuando tu juego o el servidor ya la ha visto.',
          ],
        ],
      },
      mods: {
        q: '¿Funciona con mi mod?',
        a: [
          [
            'Lo más probable es que sí. Voxy, Distant Horizons, Sodium, Iris y los paquetes de shaders funcionan con él (consulta ',
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
        q: '¿Necesito Voxy o Distant Horizons?',
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
            { em: 'Entidades simplificadas' },
            ' activado y elige una ',
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
            'Sí. Soy clixmods, su autor: desarrollador full-stack especializado en videojuegos, y es mi oficio. Hago mods desde 2017: mapas de Call of Duty: Black Ops III como ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ', con más de un millón de descargas en el Steam Workshop (consulta mi ',
            { link: 'portfolio', text: 'portafolio' },
            '). Las ideas y las técnicas vienen del desarrollo de videojuegos: los impostores, los LOD y las animaciones ya hechas son trucos que los juegos usan desde hace años.',
          ],
          [
            'La IA escribe gran parte del código. Yo decido cómo funciona el mod, lo pruebo en el juego y arreglo lo que sale mal. Sin IA, un proyecto de este tamaño me habría llevado demasiado tiempo como para llegar a hacerlo.',
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
    /** The note of every mod still waiting for a tester, next to the link to its issue. */
    untested:
      'Nadie nos ha contado todavía cómo funciona. ¿Lo has probado? Cuéntanoslo en su issue.',
    issue: (n: number) => `Issue #${n}`,
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
