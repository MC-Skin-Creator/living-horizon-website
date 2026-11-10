import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

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
    news: 'Agora no terreno do Lodistance, do Far View e do Ecstatic',
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
    /** The button of each card: it spreads the card across the section, and folds it back. */
    more: 'Mais detalhes',
    less: 'Menos detalhes',
    items: {
      mobs: {
        title: 'Todas as criaturas, até o horizonte',
        text: 'Animais pastam nas colinas distantes, aldeões passeiam por vilas longínquas, golens montam guarda. Toda criatura que o jogo consegue desenhar, inclusive as de outros mods.',
        points: [
          'No Voxy, no Distant Horizons e em outros terrenos distantes, ou no vanilla',
          'Até em terras que ninguém explorou ainda',
          'Escondidas atrás de colinas distantes, inclusive com shaders',
        ],
        where: 'Em todo lugar. Em um servidor com o mod, até criaturas que você nunca encontrou.',
        details: details([
          {
            title: 'Criaturas reais, onde foram vistas',
            body: [
              [
                'Cada criatura distante é uma criatura real, mostrada onde o seu jogo ou o servidor a viu pela última vez. Quando você se aproxima, a criatura real simplesmente assume o lugar dela. As criaturas distantes são só cenário: não dá para atacá-las, e as farms e o surgimento de criaturas funcionam como sem o mod.',
              ],
            ],
          },
          {
            title: 'Em casa no seu terreno distante',
            body: [
              [
                'Com Voxy, Distant Horizons, Lodistance, Far View ou Ecstatic, as criaturas distantes andam sobre o terreno dele, somem atrás das colinas e se perdem na névoa. Sem um mod de terreno distante, elas aparecem além da sua distância de renderização, no terreno do próprio jogo (veja ',
                { link: 'compatibilitySection', text: 'Compatibilidade' },
                ').',
              ],
            ],
          },
          {
            title: 'Até onde ninguém foi',
            body: [
              [
                'As terras que você nunca visitou também têm os seus rebanhos. O Living Horizon os estima a partir da semente do mundo, então eles podem ser diferentes, ou ter sumido, quando você chegar lá. Olhe pela luneta para vê-los até onde você mirar.',
              ],
            ],
          },
          {
            title: 'Em um servidor com o mod',
            body: [
              [
                'Você também vê as criaturas ao redor de cada um dos outros jogadores, até rebanhos que nunca encontrou. Para mostrar criaturas estimadas mais longe, o dono do servidor pode compartilhar a semente do mundo. Isso vem desligado por padrão, já que a semente revela o mundo inteiro (veja as ',
                { link: 'serverSettings', text: 'configurações do servidor' },
                ').',
              ],
            ],
          },
          {
            title: 'Nos ajustes',
            body: [
              [
                'Escolha quais criaturas aparecem em ',
                { em: 'Criaturas e entidades...' },
                ' e esconda as estimadas com ',
                { em: 'Criaturas adivinhadas' },
                '.',
              ],
            ],
          },
        ]),
      },
      players: {
        title: 'Jogadores a qualquer distância',
        text: 'Veja todos os outros jogadores, onde quer que estejam no mapa, com a skin, o equipamento e o que estiverem montando.',
        points: [
          'A cavalo, de barco ou planando com élitros',
          'Eles se movem com suavidade, mesmo de longe',
          'Jogadores sem o mod também podem entrar',
        ],
        where: 'Em LAN e em servidores com o mod.',
        details: details([
          {
            title: 'Todo mundo, em todo lugar',
            body: [
              [
                'Em um servidor com o mod, você vê todos os outros jogadores, onde quer que estejam, se movendo com suavidade na montaria, com o nome acima da cabeça. Em um mundo aberto em LAN, funciona sem instalar nada.',
              ],
            ],
          },
          {
            title: 'Quem decide é o dono do servidor',
            body: [
              [
                'O dono escolhe até onde os jogadores aparecem, se só os colegas de equipe se veem e quais jogadores ou dimensões ficam escondidos. Ele também pode desligar de vez os jogadores distantes (veja as ',
                { link: 'serverSettings', text: 'configurações do servidor' },
                ').',
              ],
            ],
          },
          {
            title: 'Nunca mostrados',
            body: [
              [
                'Jogadores no modo espectador e jogadores invisíveis nunca aparecem de longe. Jogadores agachados ainda aparecem, por enquanto (',
                { link: 'sneaking', text: '#269' },
                ').',
              ],
            ],
          },
          {
            title: 'Nos ajustes',
            body: [
              [
                { em: 'Distância dos jogadores' },
                ' define até onde os jogadores aparecem, e ',
                { em: 'Mostrar jogadores' },
                ' os desliga.',
              ],
            ],
          },
        ]),
      },
      offline: {
        title: 'Os jogadores que saíram continuam vivos',
        text: 'Quando alguém sai, uma cópia dele fica onde ele estava. Ela passeia, senta, pesca e dorme à noite, até ele voltar.',
        points: [
          'O nome, com (offline) e quando foi visto pela última vez',
          'Até quem saiu antes de você entrar',
          'Só cenário: ande contra eles para empurrá-los para o lado',
        ],
        where: 'Em todo lugar. Em um servidor com o mod, todo jogador que já jogou lá.',
        details: details([
          {
            title: 'Uma vida própria',
            body: [
              [
                'De dia, eles passeiam, sentam ou se ocupam em frente a um baú. À noite, vão para a cama. Pescam perto da água, se abrigam da chuva, se reúnem em volta de uma fogueira ao entardecer e conversam em pares.',
              ],
            ],
          },
          {
            title: 'Eles notam você',
            body: [
              [
                'Olhe para um deles de perto e ele olha de volta. Agache, e ele agacha também. Quando monstros chegam perto, eles erguem o escudo, mas nunca lutam.',
              ],
            ],
          },
          {
            title: 'Só cenário',
            body: [
              [
                'O mundo não sabe que eles existem: as criaturas os ignoram e eles nunca bloqueiam o seu caminho. Ande contra eles para empurrá-los para o lado.',
              ],
            ],
          },
          {
            title: 'Em um servidor com o mod',
            body: [
              [
                'Você vê todo jogador que já jogou lá, com a aparência que tinha, até quem saiu antes de você entrar. Fora disso, você vê os jogadores que viu sair.',
              ],
            ],
          },
          {
            title: 'Nos ajustes',
            body: [
              [
                { em: 'Jogadores offline' },
                ' os mostra ou esconde, e ',
                { em: 'Atividade offline' },
                ' liga ou desliga a vida deles ao redor do lugar onde ficaram.',
              ],
            ],
          },
        ]),
      },
      birds: {
        title: 'Pássaros no céu',
        text: 'Bandos, gansos em V, aves de rapina, gaivotas e patos enchem o céu, e você os vê de muito longe.',
        points: [
          'Pousam em árvores, telhados, campos e praias',
          'Os patos nadam em lagoas e rios',
          'Nada é adicionado ao seu mundo',
        ],
        where: 'Em todo lugar, nada para configurar.',
        details: details([
          {
            title: 'Pássaros de todo tipo',
            body: [
              [
                'Dos gansos voando em V aos patos nas lagoas, cada tipo vive no seu lugar: nas árvores, sobre o litoral, nos telhados, nos campos. Os morcegos saem à noite.',
              ],
            ],
          },
          {
            title: 'Eles reagem a você',
            body: [
              [
                'Chegue perto e eles levantam voo para pousar um pouco mais adiante. Nunca somem de uma vez: se espalham e vão embora voando.',
              ],
            ],
          },
          {
            title: 'Só na sua tela',
            body: [
              [
                'Os pássaros são desenhados só pelo seu jogo: nada é adicionado ao seu mundo, e eles quase não pesam.',
              ],
            ],
          },
          {
            title: 'Nos ajustes',
            body: [
              [
                { em: 'Mostrar aves' },
                ' liga ou desliga os pássaros, e ',
                { em: 'Tipos de aves...' },
                ' deixa você escolher quais tipos voam.',
              ],
            ],
          },
        ]),
      },
      light: {
        title: 'Feito para continuar leve',
        text: 'Em vez de pensar, as criaturas distantes fazem animações simples e prontas, e muito longe viram imagens leves de si mesmas.',
        points: [
          'Criaturas escondidas atrás de colinas não são desenhadas',
          'Diminua a distância de simulação e mantenha um mundo vivo',
          'Muito mais criaturas pelo mesmo custo',
        ],
        where: 'Tudo roda no seu jogo. O servidor só compartilha posições.',
        details: details([
          {
            title: 'Animações simples ao longe',
            body: [
              [
                'As criaturas distantes não têm IA: andam, pastam e olham ao redor com animações que se ajustam ao terreno. O seu jogo não precisa fazê-las pensar, então continua rápido.',
              ],
            ],
          },
          {
            title: 'Imagens simplificadas',
            body: [
              [
                'Como muitos jogos, o Living Horizon desenha criaturas, veículos e jogadores distantes como imagens leves em vez de modelos 3D completos. Àquela distância, eles parecem iguais, por uma fração do custo. Com um pacote de shaders como o Photon, as imagens são iluminadas como o resto do mundo.',
              ],
            ],
          },
          {
            title: 'Um mundo vivo por menos',
            body: [
              [
                'Criaturas escondidas atrás de colinas ou do terreno distante nem são desenhadas. Diminua a distância de simulação para ganhar FPS e continue vendo um mundo vivo ao seu redor. Um servidor com o mod tem muito pouco a fazer: o seu jogo cuida de tudo o que você vê.',
              ],
            ],
          },
          {
            title: 'Predefinições',
            body: [
              [
                'Escolha uma ',
                { em: 'Predefinição' },
                ', de ',
                { em: 'Baixa' },
                ' a ',
                { em: 'Ultra' },
                ', para ajustar tudo de uma vez; os padrões são a escolha equilibrada. Os ajustes ficam na tela de Opções, no Mod Menu e nas Configurações de vídeo do Sodium, em 14 idiomas.',
              ],
              [
                'Cuidado: ',
                { em: 'Máx. de criaturas' },
                ' e ',
                { em: 'Distância das criaturas' },
                ' os dois em ',
                { em: 'Ilimitado' },
                ' podem fazer o jogo travar.',
              ],
            ],
          },
        ]),
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
    matrixTitle: 'O que você vê, onde você joga',
    matrixText: 'Tudo funciona em um jogador. Em um servidor, o mod no servidor faz o resto.',
    matrixLabel: 'Recursos por lugar de jogo',
    feature: 'Recurso',
    places: ['Um jogador', 'Mundo em LAN', 'Servidor com o mod', 'Servidor sem o mod'],
    rows: {
      mobs: 'Criaturas no horizonte',
      players: 'Jogadores a qualquer distância',
      offline: 'Jogadores que saíram',
      unexplored: 'Criaturas adivinhadas a partir da semente',
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
      install: {
        title: 'Coloque o jar na pasta mods do servidor',
        text: 'O mesmo arquivo do seu jogo, mais a Fabric API no Fabric e no Quilt. Nada para configurar.',
      },
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
    },
  },

  compatibility: {
    eyebrow: 'Compatibilidade',
    title: 'Distant Horizons, Voxy, Ecstatic…',
    accent: 'ou sem nenhum deles.',
    text: 'O Living Horizon encontra o seu mod de terreno distante sozinho: criaturas e jogadores andam no chão dele, se escondem atrás das colinas dele e somem na névoa dele. Sem nenhum, ele mantém o mundo vivo além da sua distância de renderização.',
    /** A card per mod; the names are the mods' own. */
    cards: {
      dh: {
        text: 'A partir da 2.3. Criaturas e jogadores no terreno dele, atrás das colinas dele.',
      },
      voxy: { text: 'Criaturas e jogadores no terreno dele, inclusive com pacotes de shaders.' },
      lodistance: { text: 'Fabric, Minecraft 26.3, com OpenGL e sem shaders.' },
      farView: { text: 'Forge e NeoForge, Minecraft 1.20.1 a 1.21.4. Criaturas no terreno dele.' },
      ecstatic: { text: 'NeoForge, Minecraft 1.21.1, em um jogador. Criaturas no terreno dele.' },
      bobby: {
        text: 'Criaturas e jogadores no terreno que ele guarda além da distância de visão do servidor.',
      },
      iris: { text: 'Os pacotes de shaders funcionam, como o Photon e o Complementary Unbound.' },
      vanilla: {
        title: 'Vanilla',
        text: 'Nenhum mod de terreno distante necessário: diminua sua distância de renderização e de simulação e ainda veja um mundo vivo.',
      },
    },
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
    /** Next to the "?" of the table: a link to report a build. */
    report: 'Testou uma? Conte para a gente',
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

  /** Testing, contributing and the Discord, in one section. */
  help: {
    eyebrow: 'Participe',
    title: 'Um beta,',
    accent: 'feito com os jogadores.',
    test: {
      title: 'Teste na sua configuração',
      text: 'Conte para a gente como ele roda na sua versão do jogo, no seu loader e com os seus mods, bem ou mal. Cada relato ajuda.',
      /** Under the text, once the builds are known. */
      untested: (n: number) =>
        p(n, {
          one: '{n} build ainda espera um primeiro testador',
          many: '{n} de builds ainda esperam um primeiro testador',
          other: '{n} builds ainda esperam um primeiro testador',
        }),
      report: 'Relatar compatibilidade',
    },
    code: {
      title: 'Contribuir',
      text: 'Código, correções e traduções chegam como pull requests no GitHub. A IA é bem-vinda, desde que você leia, entenda e teste o que ela escreve.',
      guide: 'Guia de contribuição',
    },
    discord: {
      title: 'Entre no Discord',
      text: 'Perguntas, novidades, capturas de tela e ajuda, com o autor e outros jogadores.',
      join: 'Entre no Discord',
    },
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
            '. Jogadores, botes e veículos: qualquer distância por padrão, que ',
            { em: 'Distância dos jogadores' },
            ' e ',
            { em: 'Distância das entidades' },
            ' podem limitar. Uma criatura só aparece depois que o seu jogo ou o servidor a viu.',
          ],
        ],
      },
      mods: {
        q: 'Funciona com o meu mod?',
        a: [
          [
            'Muito provavelmente. Voxy, Distant Horizons, Lodistance, Ecstatic, Bobby, Sodium, Iris e pacotes de shaders funcionam com ele (veja ',
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
        q: 'Preciso do Voxy, do Distant Horizons, do Lodistance ou do Ecstatic?',
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
            { em: 'Criaturas simplificadas' },
            ' e ',
            { em: 'Entidades simplificadas' },
            ' ligados e escolha uma ',
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
            'Sim, em parte. A IA escreve boa parte do código. O autor, clixmods, decide como o mod funciona, testa cada mudança no jogo e corrige o que dá errado. Sem IA, um projeto deste tamanho não existiria.',
          ],
          [
            'As ideias vêm do desenvolvimento de jogos, que é o trabalho do clixmods: impostores, LODs e animações prontas são truques que os jogos usam há anos. O clixmods faz mods desde 2017, como o mapa de Call of Duty: Black Ops III ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ', baixado mais de um milhão de vezes na Oficina da Steam (veja o ',
            { link: 'portfolio', text: 'portfólio' },
            ').',
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
    issue: (n: number) => `Issue #${n}`,
    /** A link that only shows the platform's logo. */
    page: (platform: string) => `Página no ${platform}`,
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
