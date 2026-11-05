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
    news: 'Novo: rebanhos em terras que ninguém explorou',
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
    text: 'Criaturas, os rebanhos das terras que ninguém explorou, jogadores, jogadores que saíram e pássaros, desenhados pelo seu próprio jogo e leves o bastante para deixar sempre ligado.',
    offline: '(offline)',
    near: 'De perto: a criatura completa',
    far: 'De longe: uma imagem plana',
    /** The button of each card, and the window it opens. */
    more: 'Mais detalhes',
    close: 'Fechar',
    previous: 'Recurso anterior',
    next: 'Próximo recurso',
    items: {
      mobs: {
        title: 'Todas as criaturas, até o horizonte',
        text: 'Animais pastam, aldeões passeiam por vilas distantes, golens montam guarda. Qualquer criatura que o jogo consegue desenhar, incluindo as criaturas e os veículos de outros mods.',
        points: [
          'No Voxy, no Distant Horizons e em outros terrenos distantes, ou no vanilla',
          'Escondidas atrás de colinas distantes, inclusive com pacotes de shaders',
          'Escolha quais em Criaturas e entidades',
        ],
        where: 'Em todo lugar. Em um servidor com o mod, até criaturas que você nunca encontrou.',
        details: details([
          {
            title: 'De onde elas vêm',
            body: [
              [
                'São criaturas reais, onde o seu jogo ou o servidor as viu pela última vez. O seu jogo lembra de cada criatura que encontra, e um servidor com o mod compartilha as criaturas ao redor de cada jogador, então você também vê rebanhos que nunca encontrou. Uma que morreu ou desapareceu desde então ainda pode aparecer até você chegar perto dela. Aí ela é esquecida.',
              ],
            ],
          },
          {
            title: 'No terreno distante',
            body: [
              [
                'Com o Voxy, o Distant Horizons, o Lodistance, o Far View ou o Ecstatic, elas andam no chão dele, se escondem atrás das colinas dele como atrás de qualquer bloco e somem na névoa dele. Com o Bobby, ficam no terreno que ele guarda. Sem nenhum deles, aparecem no terreno do próprio jogo. Veja ',
                { link: 'compatibilitySection', text: 'Compatibilidade' },
                '.',
              ],
            ],
          },
          {
            title: 'De perto, a criatura real assume',
            body: [
              [
                'Quando você chega perto, a cópia volta andando até onde a criatura foi vista pela última vez, e a criatura real toma o lugar dela quando o servidor a envia. As criaturas distantes são só para enfeitar: as farms, a geração de criaturas e o limite de criaturas funcionam como sem o mod, e você não pode bater nelas.',
              ],
            ],
          },
          {
            title: 'Criaturas de outros mods',
            body: [
              [
                'Tudo o que usa o sistema de entidades do próprio Minecraft aparece de longe: criaturas de mods e veículos, como os aviões do Immersive Aircraft ou os navios do Shippy Ships, onde você os deixou.',
              ],
            ],
          },
          {
            title: 'Ajustes',
            body: [
              {
                list: [
                  [
                    { em: 'Mostrar criaturas' },
                    ' e ',
                    { em: 'Mostrar entidades' },
                    ': para ligar ou desligar.',
                  ],
                  [{ em: 'Criaturas e entidades...' }, ': escolha criatura por criatura.'],
                  [
                    { em: 'Distância das criaturas' },
                    ' e ',
                    { em: 'Máx. de criaturas' },
                    ': até que distância, e quantas ao mesmo tempo.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      unexplored: {
        title: 'Rebanhos em terras que ninguém explorou',
        text: 'As terras que você nunca visitou também têm os seus animais. O mod calcula a partir da semente do mundo quais o jogo vai colocar lá, e onde.',
        points: [
          'Os mesmos sorteios que o jogo faz para cada chunk novo',
          'Pela luneta, até onde você mirar',
          'Adivinhar criaturas: até 1.024 chunks ao seu redor',
        ],
        where: 'Em um jogador e em servidores com o mod.',
        details: details([
          {
            title: 'Como ele adivinha',
            body: [
              [
                'Quando o jogo gera um chunk, ele coloca os primeiros animais com sorteios aleatórios feitos a partir da semente do mundo e da posição do chunk. O Living Horizon faz os mesmos sorteios para os chunks ainda não gerados, com o bioma e o terreno que o gerador de mundos fornece: cavalos nas planícies, ovelhas nas colinas, mais ou menos onde o jogo vai colocá-los.',
              ],
            ],
          },
          {
            title: 'Um palpite, não uma promessa',
            body: [
              [
                'O terreno que ele lê ainda não tem grama nem árvores. Onde o jogo recusa um lugar por causa disso, o rebanho falta ou está em outro lugar: cerca de metade dos animais adivinhados fica a menos de dois blocos dos reais. Uma criatura adivinhada pode não estar lá quando você chegar.',
              ],
            ],
          },
          {
            title: 'A luneta e Adivinhar criaturas',
            body: [
              [
                'Olhe pela luneta para ver as criaturas adivinhadas onde quer que você mire, a qualquer distância. ',
                { em: 'Adivinhar criaturas' },
                ' as mostra até 1.024 chunks ao seu redor de uma vez, e as guarda para as próximas sessões.',
              ],
            ],
          },
          {
            title: 'Em um servidor',
            body: [
              [
                'O servidor as adivinha ao redor de cada jogador com o mod, 512 blocos por padrão (',
                { code: 'seedMobRange' },
                ', até 2.048). A luneta e ',
                { em: 'Adivinhar criaturas' },
                ' precisam da semente do mundo: o servidor só a compartilha se o dono dele ativar ',
                { code: 'shareSeed' },
                ', já que quem tem a semente conhece o mundo inteiro (veja as ',
                { link: 'serverSettings', text: 'configurações do servidor' },
                ').',
              ],
            ],
          },
          {
            title: 'Ajustes',
            body: [
              {
                list: [
                  [{ em: 'Criaturas adivinhadas' }, ': para mostrar ou esconder.'],
                  [
                    { em: 'Adivinhação' },
                    ': até onde ',
                    { em: 'Adivinhar criaturas' },
                    ' alcança.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      players: {
        title: 'Jogadores a qualquer distância',
        text: 'Veja todos os outros jogadores, onde quer que estejam no mapa, com a skin, a armadura, os itens na mão e o que estiverem montando.',
        points: [
          'Cavalos, botes, carrinhos de mina, élitros e ghasts felizes',
          'Suave: o servidor compartilha as posições cinco vezes por segundo',
          'Jogadores sem o mod ainda podem entrar',
        ],
        where: 'Em LAN e em servidores com o mod.',
        details: details([
          {
            title: 'Como funciona',
            body: [
              [
                'Um servidor com o mod compartilha onde cada jogador está cinco vezes por segundo, com o que ele está montando e se está planando com élitros. A cada cinco segundos, acrescenta a aparência dos mais próximos: skin, armadura e o que têm na mão. O seu jogo os desenha além da distância de visão, com nome e montaria.',
              ],
            ],
          },
          {
            title: 'O dono do servidor escolhe',
            body: [
              [
                'O servidor cria ',
                { code: 'config/livinghorizon-server.json' },
                ' na primeira vez que inicia: até que distância os jogadores são compartilhados, só com os colegas de equipe, quais jogadores e dimensões ficam escondidos. ',
                { code: '"sharePlayers": false' },
                ' desliga isso. As mudanças valem depois de alguns segundos, sem reiniciar (veja as ',
                { link: 'serverSettings', text: 'configurações do servidor' },
                ').',
              ],
            ],
          },
          {
            title: 'Nunca compartilhados',
            body: [
              [
                'Jogadores no modo espectador e jogadores invisíveis. Jogadores agachados são, por enquanto (',
                { link: 'sneaking', text: '#269' },
                '). Dentro da distância de visão, os jogadores se veem normalmente.',
              ],
            ],
          },
          {
            title: 'Ajustes',
            body: [
              {
                list: [
                  [{ em: 'Mostrar jogadores' }, ': para ligar ou desligar.'],
                  [{ em: 'Distância dos jogadores' }, ': até que distância eles aparecem.'],
                  [{ em: 'Montarias e veículos' }, ': o que eles estão montando.'],
                ],
              },
            ],
          },
        ]),
      },
      offline: {
        title: 'Jogadores que saíram continuam vivendo',
        text: 'Quando alguém sai, uma cópia com o nome dele fica onde ele estava. Ela passeia, senta, pesca, abre baús e dorme à noite, até ele voltar.',
        points: [
          '(offline) depois do nome, e quando foi visto pela última vez',
          'Até jogadores que saíram antes de você entrar',
          'Só para enfeitar: ande contra eles para tirá-los do caminho',
        ],
        where: 'Em todo lugar. Em um servidor com o mod, todos os jogadores que já jogaram lá.',
        details: details([
          {
            title: 'Um dia na vida deles',
            body: [
              {
                list: [
                  [
                    'De dia, eles passeiam, sentam ou ficam diante de um baú, de uma bancada de trabalho ou de uma estação de trabalho.',
                  ],
                  ['À noite, vão até uma cama livre e dormem nela, ou ficam de pé.'],
                  ['Perto da água, um deles para na margem para pescar um pouco.'],
                  [
                    'Na chuva, alguns vão para debaixo de um teto ou de uma árvore e esperam a chuva passar.',
                  ],
                  ['Ao entardecer, eles se reúnem diante de uma fogueira ou de uma fornalha.'],
                  ['Dois deles perto um do outro se aproximam e conversam, frente a frente.'],
                ],
              },
            ],
          },
          {
            title: 'Eles notam você',
            body: [
              [
                'Olhe para um deles de perto e ele olha de volta. Agache na frente dele e ele se agacha também. Quando monstros se aproximam, eles sacam uma espada e erguem o escudo, mas nunca lutam.',
              ],
            ],
          },
          {
            title: 'Só para enfeitar',
            body: [
              [
                'O mundo não sabe que eles existem: as criaturas os ignoram, e eles nunca bloqueiam nem empurram você. Ande contra eles para tirá-los do caminho. Longe de você, eles continuam passeando onde estão.',
              ],
            ],
          },
          {
            title: 'De onde eles vêm',
            body: [
              [
                'O seu jogo lembra dos jogadores que viu sair. Um servidor com o mod compartilha todos os jogadores que já jogaram lá, com a aparência que tinham, até os que saíram antes de você entrar.',
              ],
            ],
          },
          {
            title: 'Ajustes',
            body: [
              {
                list: [
                  [
                    { em: 'Jogadores offline' },
                    ' e ',
                    { em: 'Máx. offline' },
                    ': se eles aparecem, e quantos.',
                  ],
                  [{ em: 'Atividade offline' }, ': a vida deles ao redor do lugar onde saíram.'],
                  [{ em: 'Raio de passeio' }, ': até onde eles andam, 50 blocos por padrão.'],
                ],
              },
            ],
          },
        ]),
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
        details: details([
          {
            title: 'Quem voa onde',
            body: [
              {
                list: [
                  ['Bandos cruzam o céu, gansos voam em V, aves de rapina circulam no alto.'],
                  ['Gaivotas seguem o litoral e pousam na praia de vez em quando.'],
                  [
                    'Pombos ficam em construções altas, piscos saltitam nos campos, chapins ficam nas árvores.',
                  ],
                  ['Patos nadam em lagos e rios. Morcegos saem à noite.'],
                ],
              },
            ],
          },
          {
            title: 'Eles reagem a você',
            body: [
              [
                'Os passarinhos voam quando você chega perto e pousam um pouco mais longe. Os patos nunca deixam você se aproximar. Os pássaros que vão embora nunca somem de uma vez: eles se espalham e vão diminuindo até sumir.',
              ],
            ],
          },
          {
            title: 'Lidos do terreno',
            body: [
              [
                'Onde cada espécie vai é lido do terreno, até o terreno distante do Voxy e do Distant Horizons: plantações para os piscos, folhas para os chapins, água para os patos, praias para as gaivotas. São só imagens no seu jogo: nada é gerado no mundo.',
              ],
            ],
          },
          {
            title: 'Ajustes',
            body: [
              {
                list: [
                  [{ em: 'Mostrar aves' }, ': para ligar ou desligar.'],
                  [{ em: 'Tipos de aves...' }, ': escolha espécie por espécie.'],
                  [
                    { em: 'Densidade de aves' },
                    ' e ',
                    { em: 'Distância das aves' },
                    ': quantas, e até que distância.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      light: {
        title: 'Feito para ser leve',
        text: 'Criaturas distantes não têm IA: elas reproduzem animações prontas que se ajustam ao chão. Muito longe, viram imagens planas de si mesmas.',
        points: [
          'Criaturas escondidas atrás de colinas não são desenhadas',
          'Diminua sua distância de simulação e mantenha um mundo vivo',
          'Criaturas simplificadas: muito mais criaturas pelo mesmo custo',
        ],
        where: 'Tudo roda no seu jogo. O servidor só compartilha posições.',
        details: details([
          {
            title: 'Sem IA ao longe',
            body: [
              [
                'As criaturas distantes andam, pastam e olham ao redor com animações prontas que se ajustam ao chão em volta delas. Jogadores que saíram e pássaros só agem por conta própria perto de você.',
              ],
            ],
          },
          {
            title: 'Imagens planas ao longe',
            body: [
              [
                'Muitos jogos desenham objetos distantes como impostores: uma imagem plana em vez de um modelo 3D. O Living Horizon faz o mesmo com criaturas, veículos e jogadores distantes (',
                { em: 'Criaturas simplificadas' },
                ', ',
                { em: 'Entidades simplificadas' },
                ', ',
                { em: 'Jogadores simplificados' },
                '). Nesse tamanho, ficam iguais, por uma fração do custo. Com um pacote de shaders que lê mapas de normais, como o Photon, as imagens são iluminadas pelo pacote (',
                { em: 'Iluminação de shaders' },
                ').',
              ],
            ],
          },
          {
            title: 'Escondido não é desenhado',
            body: [
              [
                'Criaturas atrás de colinas ou do terreno distante não são desenhadas, e as animações param quando uma figura fica pequena demais para ser notada.',
              ],
            ],
          },
          {
            title: 'Tudo no seu jogo',
            body: [
              [
                'O seu jogo cuida das animações, dos jogadores que saíram e dos pássaros. Um servidor com o mod só compartilha posições, então isso custa pouco para ele. Dois jogadores podem até ver a mesma criatura distante fazendo coisas diferentes.',
              ],
            ],
          },
          {
            title: 'Predefinições e ajustes',
            body: [
              [
                'Uma ',
                { em: 'Predefinição' },
                ' (',
                { em: 'Baixa' },
                ', ',
                { em: 'Normal' },
                ', ',
                { em: 'Alta' },
                ', ',
                { em: 'Ultra' },
                ') ajusta tudo de uma vez. Os padrões são a escolha equilibrada, e ',
                { em: 'Restaurar padrões' },
                ' volta para eles. Os ajustes ficam na tela de Opções, no Mod Menu, nas Configurações de vídeo do Sodium ou em ',
                { code: '/livinghorizon config' },
                ', em 14 idiomas.',
              ],
              [
                'Cuidado: ',
                { em: 'Máx. de criaturas' },
                ' e ',
                { em: 'Distância das criaturas' },
                ' os dois em ',
                { em: 'Ilimitado' },
                ' podem fazer o jogo travar e fechar.',
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
      unexplored: 'Rebanhos em terras inexploradas',
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
