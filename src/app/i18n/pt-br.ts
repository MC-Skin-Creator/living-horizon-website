import { Messages } from './en';
import { plural } from './plural';
import { questions } from './rich';

const p = plural('pt-BR');

export const ptBR: Messages = {
  meta: {
    title: 'Living Horizon: dá vida à distância',
    description:
      'Living Horizon é um mod de Minecraft que mantém criaturas, aldeões, pássaros e outros jogadores vivos no horizonte, além da sua distância de renderização e no terreno distante do Distant Horizons e do Voxy. Em um jogador, em LAN e em servidores. Fabric, Quilt, NeoForge e Forge. Agora em beta.',
  },

  language: {
    label: 'Idioma',
  },

  common: {
    download: 'Baixar',
    becomeTester: 'Seja um testador',
    needsTesters: 'Precisa de testadores',
    tested: 'Testado',
    seenWorking: 'Visto funcionando em um mundo',
    new: 'Novo',
    beta: 'Beta',
    changelog: 'Novidades',
    logo: (name: string) => `Logo do ${name}`,
  },

  nav: {
    label: 'Principal',
    tag: 'beta',
    menu: 'Menu',
    features: 'Recursos',
    mods: 'Mods',
    modpacks: 'Modpacks',
    testers: 'Testadores',
    faq: 'FAQ',
    download: (version: string) => `Baixar v${version}`,
  },

  pages: {
    mods: {
      title: 'Mods compatíveis',
      description:
        'Como o Living Horizon funciona com outros mods de Minecraft: terreno distante, shaders, desempenho e mods de criaturas. O que funciona, o que tem um problema conhecido e o que espera um testador.',
    },
    modpacks: {
      title: 'Modpacks',
      description:
        'Os modpacks de Minecraft que trazem o Living Horizon, com os links de download no CurseForge e no Modrinth.',
    },
    changelog: {
      title: 'Novidades',
      description: 'Cada versão do Living Horizon e o que mudou nela.',
    },
  },

  hero: {
    scene:
      'Ilustração: um horizonte ao entardecer, com colinas de blocos onde aldeões, animais, cavaleiros e outros jogadores continuam vivos ao longe, sob um bando de gansos.',
    news: 'Agora o mod também funciona em servidores',
    tagline: 'Dá vida',
    taglineAccent: 'à distância.',
    lede: {
      before:
        'Animais, aldeões, pássaros e outros jogadores continuam vivendo no horizonte, muito além da sua distância de renderização, direto no terreno distante do',
      between: 'e do',
      after: ', ou no vanilla. Em um jogador, em LAN e em servidores.',
    },
    facts: 'O projeto em resumo',
    latest: 'Última',
    updated: 'Atualizado',
    downloads: 'Downloads',
    minecraft: 'Minecraft',
    loaders: 'Loaders',
  },

  concept: {
    eyebrow: 'O que ele faz',
    title: 'Sua distância de renderização acaba.',
    accent: 'O mundo não.',
    text: 'O Minecraft para de desenhar criaturas e jogadores a poucos chunks de distância. Mods de terreno distante estendem a paisagem até o horizonte, mas ela continua vazia e parada. O Living Horizon a enche de vida de novo.',
    diagram:
      'Diagrama: sem o Living Horizon, as criaturas só existem dentro da sua distância de renderização e o terreno distante fica vazio. Com ele, criaturas, jogadores e pássaros vivem por todo o terreno distante até o horizonte.',
    you: 'Você',
    renderDistance: 'Sua distância de renderização',
    farTerrain: 'Terreno distante ·',
    horizon: 'Horizonte',
    without: { before: '', mark: 'Sem', after: 'Living Horizon' },
    with: { before: '', mark: 'Com', after: 'Living Horizon' },
    empty: 'vazio',
  },

  features: {
    eyebrow: 'Recursos',
    title: 'Tudo o que vive',
    accent: 'além da sua distância de renderização.',
    text: 'Criaturas, jogadores, jogadores que saíram e pássaros, desenhados pelo seu próprio jogo e leves o bastante para deixar sempre ligado.',
    offline: '(offline)',
    near: 'De perto: a criatura completa',
    far: 'De longe: uma imagem plana',
    preset: 'Predefinição',
    presets: ['Baixa', 'Normal', 'Alta', 'Ultra'],
    mobDistance: 'Distância das criaturas',
    items: {
      mobs: {
        title: 'Todas as criaturas, até o horizonte',
        text: 'Animais pastam, aldeões passeiam por vilas distantes, golens montam guarda. Qualquer criatura que o jogo consegue desenhar, incluindo as de outros mods.',
        points: [
          'No terreno do Voxy e do Distant Horizons, ou no vanilla',
          'Escondidas atrás de colinas distantes, inclusive com pacotes de shaders',
          'Escolha quais em Criaturas e entidades',
        ],
        where: 'Em todo lugar. Em um servidor com o mod, até criaturas que você nunca encontrou.',
      },
      players: {
        title: 'Jogadores a qualquer distância',
        text: 'Veja todos os outros jogadores, onde quer que estejam no mapa, com a skin, a armadura, os itens na mão e o que estiverem montando.',
        points: [
          'Cavalos, botes, carrinhos de mina e ghasts felizes',
          'Suave: o servidor compartilha as posições cinco vezes por segundo',
          'Jogadores sem o mod ainda podem entrar',
        ],
        where: 'Em LAN e em servidores com o mod.',
      },
      offline: {
        title: 'Jogadores que saíram continuam vivendo',
        text: 'Quando alguém sai, uma cópia com o nome dele fica onde ele estava. Ela passeia, senta, abre baús e dorme à noite, até ele voltar.',
        points: [
          '(offline) depois do nome, e quando foi visto pela última vez',
          'Até jogadores que saíram antes de você entrar',
          'Só para enfeitar: nunca bloqueiam você nem as criaturas',
        ],
        where: 'Em todo lugar. Em um servidor com o mod, todos os jogadores que já jogaram lá.',
      },
      birds: {
        title: 'Pássaros no céu',
        text: 'Bandos, gansos em V, aves de rapina, gaivotas, patos e morcegos voam sobre a paisagem, e você os vê de muito longe.',
        points: [
          'Pousam em árvores, telhados, campos e praias',
          'Os patos nadam na sua lagoa',
          'Pequenos modelos 3D de perto, imagens planas de longe',
        ],
        where: 'Em todo lugar, nada para configurar.',
      },
      light: {
        title: 'Feito para ser leve',
        text: 'Criaturas distantes não têm IA: elas reproduzem animações prontas que se ajustam ao chão. Muito longe, viram imagens planas de si mesmas.',
        points: [
          'Criaturas escondidas atrás de colinas não são desenhadas',
          'Diminua sua distância de simulação e mantenha um mundo vivo',
          'Entidades simplificadas: muito mais criaturas pelo mesmo custo',
        ],
        where: 'Tudo roda no seu jogo. O servidor só compartilha posições.',
      },
      settings: {
        title: 'Ajustes onde você procura',
        text: 'Na tela de Opções, no Mod Menu, nas Configurações de vídeo do Sodium ou com /livinghorizon config. Cada ajuste explica o que faz.',
        points: [
          'As predefinições Baixa, Normal, Alta e Ultra ajustam tudo de uma vez',
          'Em 14 idiomas',
          'Restaurar padrões volta tudo ao que era',
        ],
        where: 'Os padrões são a escolha equilibrada.',
      },
    },
  },

  compare: {
    eyebrow: 'Antes / depois',
    title: 'Mesma vista.',
    accent: 'Um mod.',
    text: 'Arraste o controle. À esquerda, o terreno distante está lá, mas vazio. À direita, o Living Horizon o traz de volta à vida.',
    tabs: 'Cenas',
    shots: {
      shaders: {
        title: 'No jogo · Shaders',
        text: 'Com um pacote de shaders, distância de renderização e de simulação 12: os animais voltaram às colinas distantes.',
      },
      vanilla: {
        title: 'No jogo · Vanilla',
        text: 'Sem shaders, distância de renderização e de simulação 12: rebanhos de vacas e cavalos enchem as planícies distantes.',
      },
    },
    scenes: {
      village: {
        title: 'Vila na planície',
        text: 'Aldeões, um golem e animais pastando ao redor de uma vila distante.',
      },
      ridge: {
        title: 'Cavaleiros na serra',
        text: 'Outros jogadores e seus cavalos nas colinas, com nome e tudo.',
      },
      coast: {
        title: 'Litoral ao meio-dia',
        text: 'Botes no mar, aldeões na margem distante, gaivotas sobre a água.',
      },
    },
    legendNear: 'Sua distância de renderização: viva de qualquer jeito',
    legendFar: 'Terreno distante: vazio sem o mod',
    note: {
      before:
        'Ilustração estilizada do efeito. As primeiras abas são capturas de tela reais do jogo. Tem uma boa?',
      link: 'Compartilhe no Discord',
      after: '.',
    },
    shotWithout: (text: string) => `Captura de tela do jogo sem o Living Horizon. ${text}`,
    shotWith: (text: string) => `Captura de tela do jogo com o Living Horizon. ${text}`,
    sceneWithout: (text: string) => `Sem o Living Horizon: ${text}`,
    sceneWith: (text: string) => `Com o Living Horizon: ${text}`,
    badgeWithout: 'Sem o mod',
    badgeWith: 'Com o Living Horizon',
    slider: 'Mova para comparar a vista sem e com o Living Horizon',
  },

  servers: {
    eyebrow: 'Multijogador',
    title: 'Coloque no seu servidor.',
    accent: 'Todo mundo vê todo mundo.',
    text: 'O mesmo jar roda em servidores. O servidor compartilha onde cada jogador está, as criaturas ao redor dele e os jogadores que saíram com todos que têm o mod.',
    cover: 'O título do Living Horizon diante de uma multidão de cabeças de jogadores e criaturas.',
    since: (version: string) => `Suporte a servidores desde a ${version}`,
    steps: {
      jar: {
        title: 'Coloque o jar na pasta mods do servidor',
        text: 'O mesmo arquivo do seu jogo, para a versão do Minecraft e o loader do servidor, mais a Fabric API no Fabric e no Quilt. Mantenha atualizado dos dois lados.',
      },
      start: {
        title: 'Inicie o servidor',
        text: 'Nada para configurar. O servidor guarda o que compartilha na pasta do mundo, então tudo continua lá depois de reiniciar.',
      },
      see: {
        title: 'Jogadores com o mod veem todo mundo',
        text: 'Cada jogador a qualquer distância, com a skin, a armadura e a montaria, e as criaturas ao redor, até as que eles nunca encontraram.',
      },
    },
    matrixTitle: 'O que você vê, onde você joga',
    matrixText: 'Tudo funciona em um jogador. Em um servidor, o mod no servidor faz o resto.',
    matrixLabel: 'Recursos por lugar de jogo',
    feature: 'Recurso',
    places: ['Um jogador', 'Mundo em LAN', 'Servidor com o mod', 'Servidor sem o mod'],
    rows: {
      mobs: 'Criaturas no horizonte',
      players: 'Jogadores a qualquer distância',
      offline: 'Jogadores que saíram',
      birds: 'Pássaros',
    },
    cells: {
      mobsMet: 'Só as criaturas que você encontrou',
      offlineEven: 'Até os que saíram antes de você entrar',
      offlineSeen: 'Só os que você viu sair',
    },
    yes: 'Sim',
    no: 'Não',
    noOthers: 'Nenhum outro jogador',
    notApplicable: 'Não se aplica',
    notes: {
      lan: {
        title: 'LAN: nada para instalar',
        text: 'Um mundo aberto em LAN compartilha tudo pelo jogo do anfitrião.',
      },
      join: {
        title: 'Qualquer um pode entrar',
        text: 'Jogadores sem o mod ainda podem entrar. O servidor não envia nada para eles.',
      },
      tell: {
        title: 'Avise seus jogadores',
        text: 'O servidor compartilha a posição de cada jogador com os jogadores que têm o mod.',
      },
      datapack: {
        title: 'Usou o pacote de dados?',
        text: 'Remova-o da pasta datapacks do mundo: o mod no servidor o substitui.',
      },
    },
  },

  compatibility: {
    eyebrow: 'Compatibilidade',
    title: 'Feito para terreno distante.',
    accent: 'Bem sem ele também.',
    text: 'O Living Horizon encontra o Distant Horizons ou o Voxy sozinho e desenha criaturas e jogadores direto no terreno deles. Sem eles, mantém o mundo vivo além da sua distância de renderização.',
    works: 'Funciona',
    cards: {
      dh: {
        text: 'Criaturas e jogadores são desenhados no terreno distante dele e se escondem atrás das suas colinas. A partir do Distant Horizons 2.3.',
        link: 'Baixar Distant Horizons',
      },
      voxy: {
        text: 'O horizonte do terreno do Voxy ganha vida: animais pastando, vilas distantes, jogadores em movimento.',
        link: 'Baixar Voxy',
      },
      vanilla: {
        title: 'Vanilla',
        text: 'Nenhum mod de terreno distante necessário. Jogue com pouca distância de renderização e de simulação e ainda veja um mundo vivo.',
      },
    },
    extras: [
      'Pacotes de shaders do Iris (Photon, Complementary…)',
      'O mesmo jar em servidores, ou entre em qualquer servidor sem ele',
      'Ajustes nas Configurações de vídeo do Sodium (0.8+)',
    ],
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: 'E os seus outros mods?',
      text: (n: number) =>
        p(n, {
          one: '{n} mod na lista: shaders, desempenho, mods de criaturas. O que funciona e o que ainda espera um testador.',
          many: '{n} de mods na lista: shaders, desempenho, mods de criaturas. O que funciona e o que ainda espera um testador.',
          other:
            '{n} mods na lista: shaders, desempenho, mods de criaturas. O que funciona e o que ainda espera um testador.',
        }),
      link: 'Ver mods compatíveis',
    },
    matrixTitle: 'Versões do Minecraft e loaders',
    matrixText: 'Um jar por versão do jogo e loader.',
    builds: (builds: number, range: string) =>
      p(builds, {
        one: `{n} build, para ${range}.`,
        many: `{n} builds, para ${range}.`,
        other: `{n} builds, para ${range}.`,
      }),
    keyUntested: 'Inicia, precisa de testadores',
    table: 'Tabela de compatibilidade',
    untested: 'Inicia no jogo, ainda não foi vista desenhando em um mundo',
    noBuild: 'Sem build',
    notAvailable: 'Indisponível',
    fallback: (range: string) =>
      `Minecraft ${range} no Fabric, Quilt, NeoForge (1.20.6 em diante) e Forge.`,
    fullTable: 'Tabela completa no GitHub',
    loaders: {
      fabric: 'Com a Fabric API. Mod Menu opcional.',
      quilt: 'Com a Fabric API (QFAPI).',
      neoforge: 'A partir do Minecraft 1.20.6, nada mais é necessário.',
      forge: 'Nada mais é necessário.',
    },
  },

  performance: {
    eyebrow: 'Desempenho',
    title: 'Um horizonte vivo que',
    accent: 'devolve seus quadros.',
    design: {
      eyebrow: 'Renderização otimizada',
      title: 'Um horizonte vivo que',
      accent: 'não devora seus quadros.',
      text: 'O Living Horizon foi pensado desde o início para ser leve: figuras distantes são desenhadas do jeito mais barato, e só quando podem ser vistas. Assim você pode diminuir a distância de renderização e de simulação e ainda manter o mundo vivo.',
      cards: {
        pictures: {
          title: 'Imagens leves ao longe',
          text: 'A partir de certa distância, uma figura distante é desenhada como uma imagem plana de si mesma em vez de um modelo completo. Nesse tamanho, fica igual, por uma fração do trabalho.',
        },
        hidden: {
          title: 'Escondido não é desenhado',
          text: 'Criaturas atrás do terreno distante não são desenhadas, e as animações param quando uma figura fica pequena ou distante demais para ser notada.',
        },
        presets: {
          title: 'Predefinições de qualidade',
          text: 'Baixa, Normal, Alta e Ultra definem de uma vez o número de criaturas, o alcance delas e os pássaros. Os padrões são a escolha equilibrada.',
        },
        server: {
          title: 'Leve no servidor',
          text: 'Todas as animações rodam no jogo dos jogadores. Um servidor com o mod só compartilha posições.',
        },
      },
    },
    numbers: 'Em números',
    measured: 'Medido por jogadores e pelo autor; a configuração está abaixo de cada valor.',
    noNumbers: {
      before:
        'Nada de números inventados: eles aparecem aqui conforme chegam benchmarks reais. O painel de depuração embutido (',
      after: ') mostra o custo do próprio mod por tique e por quadro.',
    },
    slots: {
      fps: { label: 'Ganho de FPS', hint: 'o mod desenhando a distância em vez do jogo' },
      mobs: { label: 'Criaturas no horizonte', hint: 'desenhadas ao mesmo tempo' },
      distance: { label: 'Distância coberta', hint: 'além da distância de renderização' },
      frame: { label: 'Custo por quadro', hint: 'do painel de depuração' },
    },
    setups: {
      fps: '120 → 150 FPS para a mesma vista da distância: uma distância de renderização menor com o Living Horizon desenhando as criaturas além dela, contra o próprio jogo desenhando até lá. Medido pelo autor.',
    },
    pending: (hint: string) => `Benchmark pendente · ${hint}`,
    share: 'Mediu na sua máquina? Compartilhe',
  },

  testers: {
    eyebrow: 'Agora em beta',
    title: 'Ajude a dar vida ao horizonte.',
    lede: 'O Living Horizon é novo e roda em muitas combinações: versões do jogo, loaders, versões do Distant Horizons e do Voxy, pacotes de shaders, outros mods. Nem todas foram testadas ainda. Se você joga com ele, conte para a gente como está rodando, bem ou mal: cada relato conta.',
    asks: [
      'Sua versão do Minecraft e seu loader',
      'Distant Horizons ou Voxy, e a versão',
      'Pacote de shaders, se usar (Photon, Complementary…)',
      'Um jogador, LAN ou servidor, com ou sem o mod',
      'Uma captura de tela do que você vê',
    ],
    report: 'Relatar compatibilidade',
    discord: 'Entre no Discord',
    issue: 'Abrir uma issue',
    status: 'Status dos testes',
    waiting: (builds: number) =>
      p(builds, {
        one: 'de {n} build ainda precisa de um primeiro testador',
        many: 'de {n} builds ainda precisam de um primeiro testador',
        other: 'de {n} builds ainda precisam de um primeiro testador',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, {
        one: '{n} build vista funcionando',
        many: '{n} builds vistas funcionando',
        other: '{n} builds vistas funcionando',
      })}, ${waiting} aguardando`,
    seen: 'Visto funcionando',
    yours: 'Esperando por você',
    wanted: 'Mais procurados',
    every: 'Cada',
    everyRest: 'configuração nos ensina algo novo',
    loading: 'As combinações não testadas aparecem aqui assim que os dados do projeto carregarem.',
  },

  contribute: {
    eyebrow: 'Contribuir',
    title: 'Construa com a gente.',
    accent: 'IA é bem-vinda.',
    text: 'O Living Horizon é feito em um só lugar, o repositório no GitHub. Código, correções e traduções chegam todos lá como pull requests.',
    steps: {
      talk: {
        title: 'Converse primeiro',
        text: 'Para qualquer coisa maior que uma correção pequena, abra uma issue para combinar a direção antes de fazer o trabalho.',
      },
      pr: {
        title: 'Abra um pull request',
        text: 'Trabalhe em um branch feature/* ou fix/* com destino ao develop. Os commits são em inglês, no padrão conventional commits.',
      },
      build: {
        title: 'Compile e teste',
        text: 'Um único build do Gradle compila o mod e roda os testes. A CI também roda em cada pull request.',
      },
      credit: {
        title: 'Ganhe os créditos',
        text: 'Adicione seu nome ao CREDITS.md, e uma linha ao changelog se os jogadores forem notar a mudança.',
      },
    },
    aiTitle: 'Usando IA? Pode usar.',
    aiText:
      'A IA faz parte de como este projeto é feito, e você pode usá-la para contribuir, sem problema. Só continue pensando no que ela escreve: leia, entenda e teste sua mudança antes de abrir o pull request.',
    claude: {
      before: 'O Claude funciona melhor aqui: ele lê o',
      between: 'e as skills em',
      after: 'sozinho.',
    },
    terms: {
      before: 'Ao abrir um pull request, você aceita a seção 3 da',
      link: 'licença',
      after:
        ': você mantém seus direitos autorais e continua creditado como colaborador, aconteça o que acontecer.',
    },
    guide: 'Leia o guia de contribuição',
    issues: 'Issues abertas',
  },

  changelog: {
    eyebrow: 'Últimas atualizações',
    title: 'Lançamentos frequentes,',
    accent: 'correções rápidas.',
    text: 'Direto do changelog do projeto no GitHub.',
    textEnglish: 'Direto do changelog do projeto no GitHub, em inglês.',
    latest: 'Última',
    release: 'Versão',
    sides: { server: 'Servidor', client: 'Cliente' },
    kinds: { new: 'Novo', improved: 'Melhorado', fixed: 'Corrigido' },
    more: (n: number) =>
      p(n, {
        one: 'Mostrar mais {n} mudança',
        many: 'Mostrar mais {n} mudanças',
        other: 'Mostrar mais {n} mudanças',
      }),
    failed: 'Não foi possível carregar o changelog agora. Ele está sempre no GitHub.',
    full: 'Ver o changelog completo no GitHub',
    releases: 'Todas as versões',
    /** The link to the changelog page, on the home page. */
    every: 'Ver todas as versões',
  },

  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'Dúvidas?',
    accent: 'Respostas.',
    text: 'O que os jogadores mais perguntam. Para qualquer outra coisa, pergunte no Discord.',
    groups: {
      how: 'Como funciona',
      compatibility: 'Compatibilidade',
      performance: 'Desempenho e ajustes',
      multiplayer: 'Multijogador',
      downloads: 'Downloads e licença',
      ai: 'IA',
    },
    questions: questions({
      visual: {
        q: 'É só visual? Quebra as farms de criaturas?',
        a: [
          [
            'É só visual, sem IA. As criaturas reais funcionam como sem o mod, então as farms, a geração de criaturas e o limite de criaturas não mudam. Você não pode bater em uma criatura distante.',
          ],
        ],
      },
      real: {
        q: 'As criaturas distantes são reais ou colocadas ao acaso?',
        a: [
          [
            'São criaturas reais, onde o seu jogo ou o servidor as viu pela última vez. Uma que morreu ou desapareceu desde então ainda pode aparecer até você chegar perto dela. Aí ela é esquecida.',
          ],
        ],
      },
      simulation: {
        q: 'Qual a diferença para uma distância de simulação ou de entidades maior?',
        a: [
          [
            'Uma distância de simulação maior faz o servidor rodar mais criaturas reais, o que custa muito, e mesmo assim o servidor só as envia até certo ponto. O Living Horizon desenha cópias que o servidor não roda. Elas reproduzem animações prontas e, de longe, viram imagens planas (',
            { em: 'Entidades simplificadas' },
            ').',
          ],
        ],
      },
      range: {
        q: 'Até que distância ele mostra criaturas e jogadores?',
        a: [
          [
            'Criaturas: 512 blocos por padrão, até ',
            { em: 'Ilimitado' },
            ' com ',
            { em: 'Distância das criaturas' },
            '. Jogadores: qualquer distância por padrão, que ',
            { em: 'Distância dos jogadores' },
            ' pode limitar. Uma criatura só aparece depois que o seu jogo ou o servidor a viu.',
          ],
        ],
      },
      mods: {
        q: 'Funciona com o meu mod?',
        a: [
          [
            'Muito provavelmente. Voxy, Distant Horizons, Sodium, Iris e pacotes de shaders funcionam com ele (veja ',
            { link: 'compatibilitySection', text: 'Compatibilidade' },
            '). O Living Horizon só adiciona as próprias figuras: ele não muda como outros mods desenham o mundo. Os mods ainda não testados estão listados com a etiqueta ',
            { link: 'modCompatibility', text: 'mod compatibility' },
            ' no GitHub. Se algo quebrar, abra uma ',
            { link: 'issues', text: 'issue' },
            ' com o nome e a versão do mod.',
          ],
        ],
      },
      modMobs: {
        q: 'Criaturas de outros mods aparecem de longe?',
        a: [
          [
            'Sim, desde que usem o sistema de entidades do próprio Minecraft. Se as entidades de um mod funcionam de um jeito muito diferente, peça suporte a elas em uma ',
            { link: 'issues', text: 'issue' },
            ' ou no ',
            { link: 'discord', text: 'Discord' },
            '.',
          ],
        ],
      },
      farTerrain: {
        q: 'Preciso do Voxy ou do Distant Horizons?',
        a: [
          [
            'Não. Sem eles, criaturas e jogadores distantes aparecem no terreno do próprio jogo, até a sua distância de renderização. Com um deles, também aparecem no terreno distante dele.',
          ],
        ],
      },
      frameRate: {
        q: 'Vai baixar o meu FPS?',
        a: [
          [
            'Desenhar mais entidades custa FPS. Se o jogo ficar lento, deixe ',
            { em: 'Entidades simplificadas' },
            ' ligado e escolha uma ',
            { em: 'Predefinição' },
            ' mais baixa. ',
            { em: 'Máx. de criaturas' },
            ' e ',
            { em: 'Distância das criaturas' },
            ' os dois em ',
            { em: 'Ilimitado' },
            ' podem fazer o jogo travar e fechar.',
          ],
        ],
      },
      choose: {
        q: 'Posso escolher o que aparece?',
        a: [
          [
            'Sim. ',
            { em: 'Mostrar criaturas' },
            ', ',
            { em: 'Mostrar jogadores' },
            ', ',
            { em: 'Jogadores offline' },
            ' e ',
            { em: 'Mostrar aves' },
            ' ligam ou desligam cada parte. ',
            { em: 'Criaturas e entidades...' },
            ' escolhe criatura por criatura.',
          ],
        ],
      },
      world: {
        q: 'Ele muda o meu mundo ou carrega chunks?',
        a: [
          [
            'Não. Ele não muda nada no seu mundo e não carrega nenhum chunk. Ele guarda o que lembra em arquivos próprios: na pasta ',
            { code: 'config' },
            ' e, para o que o servidor compartilha, em ',
            { code: 'livinghorizon-positions.dat' },
            ' na pasta do mundo. Remover o mod deixa o seu mundo como estava.',
          ],
          ['Em um servidor, o mod só envia posições para os jogadores que o têm.'],
        ],
      },
      server: {
        q: 'O servidor precisa do mod?',
        a: [
          [
            'Não. Quase tudo funciona em um jogador, e você pode entrar em qualquer servidor com ele. Mas jogadores a qualquer distância precisam do mod no servidor, e aí o servidor também compartilha mais criaturas e os jogadores que saíram. Veja ',
            { link: 'serversSection', text: 'Multijogador' },
            '.',
          ],
        ],
      },
      paper: {
        q: 'Funciona em servidores Paper ou Spigot?',
        a: [
          [
            'Você pode jogar neles com o mod, como em qualquer servidor sem ele. A parte do servidor só roda no Fabric, Quilt, NeoForge e Forge, então um servidor Paper ou Spigot não compartilha nada. Um plugin para Paper está sendo discutido na ',
            { link: 'paperPlugin', text: '#156' },
            '.',
          ],
        ],
      },
      nothing: {
        q: 'Não vejo criaturas nem jogadores distantes. Por quê?',
        a: [
          {
            list: [
              [
                'Jogadores distantes precisam do mod no servidor. O dono dele também pode limitar quem é compartilhado (veja as ',
                { link: 'serverSettings', text: 'configurações do servidor' },
                ').',
              ],
              ['Em um servidor sem o mod, só aparecem as criaturas que você encontrou.'],
            ],
          },
        ],
      },
      cheat: {
        q: 'Dá para usar para trapacear? É permitido em servidores?',
        a: [
          [
            'Ele só mostra outros jogadores onde o servidor permite. Jogadores distantes só aparecem em um servidor que tem o mod, e o dono escolhe o que ele compartilha: até que distância, só com os colegas de equipe, e quais jogadores e dimensões ficam escondidos. ',
            { code: '"sharePlayers": false' },
            ' desliga isso (veja as ',
            { link: 'serverSettings', text: 'configurações do servidor' },
            '). Jogadores invisíveis e jogadores no modo espectador nunca são compartilhados. Jogadores agachados são, por enquanto (',
            { link: 'sneaking', text: '#269' },
            ').',
          ],
          [
            'Em outros servidores, você só vê o que o seu próprio jogo viu. O mod não envia nada para o servidor. Mas cada servidor tem as próprias regras sobre mods: pergunte à equipe dele.',
          ],
        ],
      },
      bedrock: {
        q: 'Existe uma versão para Bedrock?',
        a: [['Não. O Living Horizon é um mod para Minecraft Java Edition.']],
      },
      version: {
        q: 'Minha versão do jogo não é suportada. Ela vai ser?',
        a: [
          [
            'Diga no ',
            { link: 'discord', text: 'Discord' },
            ' qual versão e qual loader você joga. Isso ajuda a escolher o que vem depois.',
          ],
        ],
      },
      modpack: {
        q: 'Posso colocar em um modpack?',
        a: [['Sim. Use o arquivo oficial e dê os créditos.']],
      },
      abandoned: {
        q: 'E se o projeto for abandonado?',
        a: [
          [
            'A licença já prevê isso. Quando o projeto for declarado abandonado (o repositório arquivado, ou o README dizendo isso), a licença vira GPL: qualquer pessoa pode continuar o projeto, com os créditos. Veja a seção 5 da ',
            { link: 'license', text: 'licença' },
            '.',
          ],
        ],
      },
      ai: {
        q: 'Ele foi feito com IA?',
        a: [
          [
            'Sim. Eu sou o clixmods, o autor: desenvolvedor full-stack especializado em videogames, e esse é o meu trabalho. Faço mods desde 2017: mapas de Call of Duty: Black Ops III como ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ', com mais de um milhão de downloads na Oficina da Steam (veja o meu ',
            { link: 'portfolio', text: 'portfólio' },
            '). As ideias e as técnicas vêm do desenvolvimento de jogos: impostores, LODs e animações prontas são truques que os jogos usam há anos.',
          ],
          [
            'A IA escreve boa parte do código. Eu decido como o mod funciona, testo no jogo e corrijo o que dá errado. Sem IA, um projeto deste tamanho teria me levado tempo demais para conseguir fazê-lo.',
          ],
        ],
      },
      modrinth: {
        q: 'Está no Modrinth? Por que ele não está listado lá?',
        a: [
          [
            'Está no ',
            { link: 'modrinth', text: 'Modrinth' },
            ', mas não listado: ele não aparece na busca do Modrinth. Desde agosto de 2026, ',
            { link: 'modrinthRules', text: 'as regras do Modrinth' },
            ' não permitem que um projeto feito principalmente com IA seja público, então a equipe deles o deixou não listado. O CurseForge, o Nexus Mods e a ',
            { link: 'releases', text: 'página de lançamentos' },
            ' têm os mesmos arquivos.',
          ],
          [
            'Não listado não quer dizer inseguro. Tem a ver com como o mod é feito, não com o que ele faz:',
          ],
          {
            list: [
              [
                'O código é público: qualquer pessoa pode lê-lo no ',
                { link: 'github', text: 'repositório no GitHub' },
                '.',
              ],
              [
                'O GitHub compila cada versão a partir deste código, e os logs dessas compilações são públicos.',
              ],
              [
                'O mod não tem nenhum código próprio que se conecte à internet. As skins dos jogadores vêm da Mojang pelo jogo, e o link do Discord só abre quando você clica nele.',
              ],
            ],
          },
        ],
      },
    }),
    ask: 'Pergunte no Discord',
    issue: 'Abrir uma issue',
  },

  download: {
    eyebrow: 'Download',
    title: 'Baixe o',
    accent: 'Living Horizon',
    text: {
      before:
        'Grátis, um jar por versão do jogo e loader, para o seu jogo e o seu servidor. Coloque na pasta',
      after: 'e o horizonte ganha vida.',
    },
    latest: 'Última versão',
    version: 'Versão do Minecraft',
    loader: 'Loader',
    needs: { before: '· requer a', after: '' },
    untested: 'Esta build inicia no jogo, mas ninguém relatou ainda vê-la desenhando em um mundo',
    jar: 'Baixar o jar',
    releasePage: 'Baixe na página da versão',
    sameJar: 'O mesmo jar vai no seu servidor',
    curseforge: 'ou baixe no CurseForge',
    pick: 'Escolha seu arquivo na página da versão ou no CurseForge.',
    total: 'Downloads, todas as plataformas',
    count: (n: number) =>
      p(n, { one: '{n} download', many: '{n} downloads', other: '{n} downloads' }),
    noCount: 'Downloads indisponíveis',
    soon: 'Em breve',
    checking: 'Verificando…',
    everyFile: 'todos os arquivos',
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) =>
      p(n, { one: '{n} modpack', many: '{n} de modpacks', other: '{n} modpacks' }),
  },

  modpacks: {
    eyebrow: 'Modpacks',
    title: 'Já está em',
    accent: 'modpacks.',
    text: 'Pacotes que trazem o Living Horizon. Fez um com ele? Ele aparece aqui sozinho.',
    by: (authors: string) => `por ${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `Baixar no ${platform}`,
    none: 'Nenhum modpack traz o Living Horizon ainda. O seu pode ser o primeiro.',
    loading: 'Os modpacks aparecem aqui em instantes.',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) =>
      p(n, {
        one: 'Ver a página de modpacks',
        many: 'Ver os {n} de modpacks',
        other: 'Ver os {n} modpacks',
      }),
  },

  mods: {
    eyebrow: 'Compatibilidade',
    title: 'Combina',
    accent: 'com os seus mods.',
    text: 'Direto do projeto no GitHub, atualizado a cada teste: o que funciona, o que tem um problema conhecido e o que ainda espera alguém testar. As notas estão em inglês.',
    search: 'Buscar um mod',
    filter: 'Filtrar por status',
    all: 'Todos',
    status: { works: 'Funciona', issue: 'Problema conhecido', untested: 'Ainda não testado' },
    /** The heading of the shader packs, after the mods. */
    shaders: 'Pacotes de shaders',
    /** The note of every mod still waiting for a tester, next to the link to its issue. */
    untested: 'Ninguém nos contou ainda como ele roda. Já testou? Conte na issue dele.',
    issue: (n: number) => `Issue #${n}`,
    none: 'Nenhum mod corresponde à sua busca.',
    missing: {
      title: 'Falta algum mod?',
      text: 'Conte como o Living Horizon roda com ele, bem ou mal: cada relato ajuda.',
      link: 'Relatar um mod',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: 'Não foi possível carregar a lista agora. Ela está sempre no GitHub.',
    failedLink: 'Ver a lista no GitHub',
  },

  footer: {
    tagline:
      'Dá vida à distância. Um mod para Minecraft Java Edition, para o seu jogo e o seu servidor.',
    beta: 'Beta: espere bugs, e conte para a gente.',
    project: 'Projeto',
    docs: 'Documentação',
    license: 'Licença',
    community: 'Comunidade',
    bug: 'Relatar um bug',
    contribute: 'Contribuir',
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: 'Lista de modpacks do', after: '' },
    official:
      'Não é um produto oficial do Minecraft. Não aprovado pela Mojang ou pela Microsoft, nem associado a elas.',
  },
};
