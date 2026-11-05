import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

const p = plural('zh-CN');

export const zhCN: Messages = {
  meta: {
    title: 'Living Horizon：让远方充满生机',
    description:
      'Living Horizon 是一款 Minecraft 模组，让生物、村民、鸟类和其他玩家在地平线上继续活动：超出你的渲染距离，也遍布 Distant Horizons 和 Voxy 的远景地形。支持单人游戏、局域网和服务器，适用于 Fabric、Quilt、NeoForge 和 Forge。现处于测试阶段。',
  },

  language: {
    label: '语言',
  },

  common: {
    download: '下载',
    becomeTester: '成为测试者',
    needsTesters: '需要测试者',
    tested: '已测试',
    seenWorking: '已确认在世界中正常显示',
    new: '新',
    beta: '测试版',
    changelog: '更新日志',
    logo: (name: string) => `${name} 标志`,
  },

  nav: {
    label: '主导航',
    tag: '测试版',
    menu: '菜单',
    features: '功能',
    mods: '模组',
    modpacks: '整合包',
    faq: '常见问题',
    download: (version: string) => `下载 v${version}`,
  },

  pages: {
    mods: {
      title: '兼容模组',
      description:
        'Living Horizon 与其他 Minecraft 模组的兼容情况：远景地形、光影、性能和生物模组。哪些可用，哪些有已知问题，哪些还在等人测试。',
    },
    modpacks: {
      title: '整合包',
      description:
        '收录 Living Horizon 的 Minecraft 整合包，以及它们在 CurseForge 和 Modrinth 上的下载链接。',
    },
    changelog: { title: '更新日志', description: 'Living Horizon 的每个版本及其改动。' },
  },

  hero: {
    scene:
      '插图：黄昏时分，方块山丘连到地平线，远处的村民、动物、骑手和其他玩家依然在活动，一群大雁从空中飞过。',
    news: '新功能：无人探索之地也有兽群了',
    tagline: '让远方',
    taglineAccent: '充满生机。',
    lede: {
      before: '动物、村民、鸟类和其他玩家在地平线上继续生活，远远超出你的渲染距离，就在',
      between: '和',
      after: '的远景地形上，原版也一样。单人游戏、局域网和服务器都支持。',
    },
    facts: '项目概览',
    latest: '最新版本',
    updated: '更新时间',
    downloads: '下载量',
    minecraft: 'Minecraft',
    loaders: '加载器',
  },

  concept: {
    eyebrow: '它的作用',
    title: '你的渲染距离有尽头。',
    accent: '世界没有。',
    text: 'Minecraft 只在几个区块之内绘制生物和玩家。远景地形模组把大地延伸到地平线，但那里空荡荡、静悄悄。Living Horizon 让那里重新充满生机。',
    diagram:
      '示意图：没有 Living Horizon 时，生物只存在于你的渲染距离之内，远景地形空无一物。有了它，生物、玩家和鸟类遍布整片远景地形，一直到地平线。',
    you: '你',
    renderDistance: '你的渲染距离',
    farTerrain: '远景地形 ·',
    horizon: '地平线',
    without: { before: '', mark: '没有', after: 'Living Horizon' },
    with: { before: '', mark: '有了', after: 'Living Horizon' },
    empty: '空荡荡',
  },

  features: {
    eyebrow: '功能',
    title: '渲染距离之外的一切，',
    accent: '都活着。',
    text: '生物、无人探索之地的兽群、玩家、已下线的玩家和鸟类，由你自己的游戏绘制，而且足够轻量，可以一直开着。',
    offline: '（离线）',
    near: '近处：完整的生物',
    far: '远处：一张平面图片',
    more: '更多详情',
    close: '关闭',
    previous: '上一个功能',
    next: '下一个功能',
    items: {
      mobs: {
        title: '每一个生物，直到地平线',
        text: '动物在吃草，村民在远方的村庄里闲逛，傀儡在站岗。游戏能绘制的任何生物都行，其他模组的生物和载具也不例外。',
        points: [
          '在 Voxy、Distant Horizons 和其他远景地形上，或在原版中',
          '会被远处的山丘遮挡，使用光影包时也一样',
          '在“生物与实体”中选择显示哪些',
        ],
        where: '任何地方。在装有本模组的服务器上，连你从未遇到过的生物也能看到。',
        details: details([
          {
            title: '它们从哪里来',
            body: [
              [
                '它们是真实的生物，位于你的游戏或服务器最后一次看到它们的地方。你的游戏会记住它遇到的每一个生物，而装有本模组的服务器会共享每位玩家周围的生物，所以你也能看到从未遇到过的兽群。此后死亡或消失的生物，在你走近之前可能仍会显示。走近之后，它就会被遗忘。',
              ],
            ],
          },
          {
            title: '在远景地形上',
            body: [
              [
                '有了 Voxy、Distant Horizons、Lodistance、Far View 或 Ecstatic，它们会走在它的地面上，像被任何方块挡住一样藏在它的山丘后面，并渐渐隐入它的雾中。有了 Bobby，它们会留在它保存的地形上。这些模组都没有时，它们会显示在游戏自身的地形上。见',
                { link: 'compatibilitySection', text: '兼容性' },
                '。',
              ],
            ],
          },
          {
            title: '走近后，由真正的生物接替',
            body: [
              [
                '你走近时，副本会走回最后一次看到该生物的位置，等服务器发来真正的生物后，就由它取而代之。远处的生物仅供观赏：刷怪塔、生物生成和生物数量上限都和没装本模组时一样运作，你也无法攻击它们。',
              ],
            ],
          },
          {
            title: '其他模组的生物',
            body: [
              [
                '任何使用 Minecraft 自身实体系统的东西都会在远处显示：模组生物，以及载具，比如 Immersive Aircraft 的飞机或 Shippy Ships 的船，就停在你离开它们的地方。',
              ],
            ],
          },
          {
            title: '设置',
            body: [
              {
                list: [
                  [{ em: '显示生物' }, '和', { em: '显示实体' }, '：开启或关闭。'],
                  [{ em: '生物与实体…' }, '：逐个选择生物。'],
                  [
                    { em: '生物渲染距离' },
                    '和',
                    { em: '最大生物数量' },
                    '：显示多远，同时显示多少。',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      unexplored: {
        title: '无人探索之地的兽群',
        text: '你从未去过的土地上也有动物。本模组根据世界种子推算出游戏会在那里放置哪些动物，以及放在哪里。',
        points: [
          '与游戏为每个新区块进行的随机抽取完全相同',
          '用望远镜看，瞄多远就能看多远',
          '推测附近生物：最多覆盖你周围 1024 个区块',
        ],
        where: '单人游戏中，以及装有本模组的服务器上。',
        details: details([
          {
            title: '如何推测',
            body: [
              [
                '游戏生成一个区块时，会根据世界种子和区块位置进行随机抽取，放置最初的动物。Living Horizon 对尚未生成的区块进行同样的抽取，并使用世界生成器给出的生物群系和地形：平原上的马、山丘上的羊，大致就在游戏会放置它们的地方。',
              ],
            ],
          },
          {
            title: '只是推测，不是保证',
            body: [
              [
                '它读取的地形上还没有草，也没有树。如果游戏因此否决了某个位置，那里的兽群就会缺失或出现在别处：推测出的动物中，大约一半与真实动物相距不到两格。你到达时，推测的生物可能并不在那里。',
              ],
            ],
          },
          {
            title: '望远镜与推测附近生物',
            body: [
              [
                '用望远镜观察，无论多远，瞄准的地方都会显示推测的生物。',
                { em: '推测附近生物' },
                '会一次性显示你周围最多 1024 个区块内的推测生物，并为你之后的游戏保留下来。',
              ],
            ],
          },
          {
            title: '在服务器上',
            body: [
              [
                '服务器会在每位装有本模组的玩家周围推测它们，默认范围为 512 格（',
                { code: 'seedMobRange' },
                '，最高 2048）。望远镜和',
                { em: '推测附近生物' },
                '需要世界种子：只有服主开启 ',
                { code: 'shareSeed' },
                ' 后，服务器才会共享种子，因为拿到种子的人就知道整个世界（见',
                { link: 'serverSettings', text: '服务器设置' },
                '）。',
              ],
            ],
          },
          {
            title: '设置',
            body: [
              {
                list: [
                  [{ em: '推测的生物' }, '：显示或隐藏它们。'],
                  [{ em: '推测半径' }, '：', { em: '推测附近生物' }, '的覆盖范围。'],
                ],
              },
            ],
          },
        ]),
      },
      players: {
        title: '任意距离的玩家',
        text: '看到其他每一位玩家，无论他们在地图上的什么位置，连同他们的皮肤、盔甲、手持物品和骑乘的东西。',
        points: [
          '马、船、矿车、鞘翅和快乐恶魂',
          '流畅：服务器每秒共享五次位置',
          '没装本模组的玩家照样可以加入',
        ],
        where: '在局域网中，以及装有本模组的服务器上。',
        details: details([
          {
            title: '工作原理',
            body: [
              [
                '装有本模组的服务器每秒五次共享每位玩家的位置，包括他们骑乘的东西，以及是否正在用鞘翅滑翔。每隔五秒，它还会附上距离最近的玩家的外观：皮肤、盔甲和手持物品。你的游戏会在视距之外绘制他们，名牌和坐骑也一并显示。',
              ],
            ],
          },
          {
            title: '由服主决定',
            body: [
              [
                '服务器首次启动时会写入 ',
                { code: 'config/livinghorizon-server.json' },
                '：玩家共享多远、是否只与队友共享、哪些玩家和维度保持隐藏。',
                { code: '"sharePlayers": false' },
                ' 可以关闭共享。更改几秒后即生效，无需重启（见',
                { link: 'serverSettings', text: '服务器设置' },
                '）。',
              ],
            ],
          },
          {
            title: '永远不会共享',
            body: [
              [
                '处于旁观模式的玩家和隐身的玩家。潜行的玩家目前仍会被共享（',
                { link: 'sneaking', text: '#269' },
                '）。在视距之内，玩家照常看到彼此。',
              ],
            ],
          },
          {
            title: '设置',
            body: [
              {
                list: [
                  [{ em: '显示玩家' }, '：开启或关闭。'],
                  [{ em: '玩家渲染距离' }, '：显示多远。'],
                  [{ em: '坐骑与载具' }, '：他们骑乘的东西。'],
                ],
              },
            ],
          },
        ]),
      },
      offline: {
        title: '下线的玩家继续生活',
        text: '有人下线时，一个带着他名字的分身会留在他离开的地方。它会散步、坐下、钓鱼、打开箱子，夜里上床睡觉，直到本人回来。',
        points: [
          '名字后面显示（离线），以及最后上线时间',
          '连你加入之前就离开的玩家也在',
          '仅供观赏：走过去就能把他们推开',
        ],
        where: '任何地方。在装有本模组的服务器上，每一位曾在那里玩过的玩家都在。',
        details: details([
          {
            title: '他们的一天',
            body: [
              {
                list: [
                  ['白天，他们会散步、坐下，或站在箱子、工作台或工作站点方块前。'],
                  ['夜里，他们会走到一张空床上睡觉，或者一直站着。'],
                  ['在水边，其中一人会在岸边停下来，钓一会儿鱼。'],
                  ['下雨时，有些人会走到屋檐或树下，等雨停。'],
                  ['傍晚，他们会聚集在营火或熔炉前。'],
                  ['两人离得近时，会走到一起，面对面聊天。'],
                ],
              },
            ],
          },
          {
            title: '他们会注意到你',
            body: [
              [
                '在近处看着其中一人，他也会回看你。你在他面前蹲下，他也会跟着蹲下。怪物靠近时，他们会拔剑举盾，但从不战斗。',
              ],
            ],
          },
          {
            title: '仅供观赏',
            body: [
              [
                '世界并不知道他们存在：生物会无视他们，他们也从不挡住或推开你。走过去就能把他们推开。离你远的时候，他们会在原地继续闲逛。',
              ],
            ],
          },
          {
            title: '他们从哪里来',
            body: [
              [
                '你的游戏会记住它看着离开的玩家。装有本模组的服务器会共享每一位曾在那里玩过的玩家，保持他们当时的样子，连你加入之前就离开的玩家也在。',
              ],
            ],
          },
          {
            title: '设置',
            body: [
              {
                list: [
                  [
                    { em: '离线玩家' },
                    '和',
                    { em: '最大离线玩家数' },
                    '：是否显示，以及显示多少。',
                  ],
                  [{ em: '离线玩家活动' }, '：他们在自己位置周围的生活。'],
                  [{ em: '活动半径' }, '：他们走动的范围，默认 50 格。'],
                ],
              },
            ],
          },
        ]),
      },
      birds: {
        title: '天空中的鸟',
        text: '鸟群、排成 V 字的大雁、猛禽、海鸥、鸭子和蝙蝠飞过大地，远远就能看见。',
        points: [
          '它们会落在树上、屋顶、田野和海滩上',
          '鸭子在池塘里游来游去',
          '近处是小巧的 3D 模型，远处是平面图片',
        ],
        where: '任何地方，无需设置。',
        details: details([
          {
            title: '谁在哪里飞',
            body: [
              {
                list: [
                  ['鸟群飞越天空，大雁排成 V 字飞行，猛禽在空中盘旋。'],
                  ['海鸥沿着海岸飞，不时落在海滩上。'],
                  ['鸽子停在高楼上，知更鸟在田里跳来跳去，山雀待在树上。'],
                  ['鸭子在湖泊和河流上游泳。蝙蝠在夜里出来。'],
                ],
              },
            ],
          },
          {
            title: '它们会对你作出反应',
            body: [
              [
                '你靠近时，小鸟会飞走，落在稍远的地方。鸭子从不让你靠近。离开的鸟从不会一下子消失：它们会四散飞开，渐渐变小远去。',
              ],
            ],
          },
          {
            title: '根据地形而定',
            body: [
              [
                '每种鸟去哪里，都根据地形来判断，一直延伸到 Voxy 和 Distant Horizons 的远景地形：知更鸟找农作物，山雀找树叶，鸭子找水，海鸥找海滩。它们只是你游戏里的图像：世界中不会生成任何东西。',
              ],
            ],
          },
          {
            title: '设置',
            body: [
              {
                list: [
                  [{ em: '显示鸟类' }, '：开启或关闭。'],
                  [{ em: '鸟类种类…' }, '：逐种选择。'],
                  [{ em: '鸟类密度' }, '和', { em: '鸟类距离' }, '：数量多少，距离多远。'],
                ],
              },
            ],
          },
        ]),
      },
      light: {
        title: '专为轻量设计',
        text: '远处的生物没有 AI：它们播放贴合地面的现成动画。到了非常远的地方，它们会变成自己的平面图片。',
        points: [
          '被山丘挡住的生物不会被绘制',
          '调低模拟距离，世界依然生机勃勃',
          '简化生物：同样的开销，多得多的生物',
        ],
        where: '一切都在你的游戏里运行。服务器只共享位置。',
        details: details([
          {
            title: '远处没有 AI',
            body: [
              [
                '远处的生物靠贴合周围地面的现成动画来走动、吃草和四处张望。已下线的玩家和鸟类只有在你附近时才会自主行动。',
              ],
            ],
          },
          {
            title: '远处用平面图片',
            body: [
              [
                '许多游戏会把远处的物体绘制成替身贴图（impostor）：用一张平面图片代替 3D 模型。Living Horizon 对远处的生物、载具和玩家也是这样做的（',
                { em: '简化生物' },
                '、',
                { em: '简化实体' },
                '、',
                { em: '简化玩家' },
                '）。在那个大小下它们看起来一模一样，开销却只有一小部分。搭配能读取法线贴图的光影包（例如 Photon）时，这些图片会由光影包来照明（',
                { em: '光影照明' },
                '）。',
              ],
            ],
          },
          {
            title: '看不见就跳过',
            body: [['山丘或远景地形后面的生物完全不绘制；形象一旦小到察觉不到，动画就会停止。']],
          },
          {
            title: '一切都在你的游戏里',
            body: [
              [
                '动画、已下线的玩家和鸟类都由你的游戏处理。装有本模组的服务器只共享位置，所以负担很小。两位玩家甚至可能看到同一个远处的生物在做不同的事。',
              ],
            ],
          },
          {
            title: '预设与设置',
            body: [
              [
                { em: '预设' },
                '（',
                { em: '低' },
                '、',
                { em: '普通' },
                '、',
                { em: '高' },
                '、',
                { em: '极高' },
                '）一次调好所有设置。默认值就是均衡之选，',
                { em: '重置为默认' },
                '可以让它们恢复原样。设置位于选项界面、Mod Menu、Sodium 的视频设置中，也可以使用 ',
                { code: '/livinghorizon config' },
                '，支持 14 种语言。',
              ],
              [
                '注意：',
                { em: '最大生物数量' },
                '和',
                { em: '生物渲染距离' },
                '都设为',
                { em: '无限制' },
                '时，游戏可能会崩溃。',
              ],
            ],
          },
        ]),
      },
    },
  },

  compare: {
    eyebrow: '前后对比',
    title: '同样的视野。',
    accent: '一个模组。',
    text: '拖动滑块。左边，远景地形还在，却空无一物。右边，Living Horizon 让它重新充满生机。',
    tabs: '场景',
    shots: {
      shaders: {
        title: '游戏内 · 光影',
        text: '使用光影包，渲染距离和模拟距离均为 12：远处山丘上的动物回来了。',
      },
      vanilla: {
        title: '游戏内 · 原版',
        text: '不用光影，渲染距离和模拟距离均为 12：成群的牛和马布满远方的平原。',
      },
    },
    scenes: {
      village: {
        title: '平原上的村庄',
        text: '远方村庄周围的村民、一只傀儡和吃草的动物。',
      },
      ridge: {
        title: '山脊上的骑手',
        text: '山丘上的其他玩家和他们的马，头顶的名字一个不少。',
      },
      coast: {
        title: '正午的海岸',
        text: '海上的船，远岸的村民，水面上的海鸥。',
      },
    },
    legendNear: '你的渲染距离：有没有模组都有生机',
    legendFar: '远景地形：没有模组就空无一物',
    note: {
      before: '效果示意插图。前几个标签页是真实的游戏截图。你也拍到了好看的？',
      link: '来 Discord 分享',
      after: '吧。',
    },
    shotWithout: (text: string) => `未安装 Living Horizon 的游戏截图。${text}`,
    shotWith: (text: string) => `安装 Living Horizon 后的游戏截图。${text}`,
    sceneWithout: (text: string) => `没有 Living Horizon：${text}`,
    sceneWith: (text: string) => `有了 Living Horizon：${text}`,
    badgeWithout: '没有模组',
    badgeWith: '有 Living Horizon',
    slider: '拖动以对比没有和有 Living Horizon 时的画面',
  },

  servers: {
    eyebrow: '多人游戏',
    title: '装到你的服务器上。',
    accent: '人人都能看见彼此。',
    text: '同一个 jar 也能在服务器上运行。服务器会把每位玩家的位置、他们周围的生物以及已下线的玩家，共享给所有装有本模组的人。',
    cover: 'Living Horizon 标题前，是一大群玩家和生物的头像。',
    matrixTitle: '在哪里玩，能看到什么',
    matrixText: '单人游戏中一切功能都可用。在服务器上，其余的由服务器上的模组完成。',
    matrixLabel: '按游戏方式划分的功能',
    feature: '功能',
    places: ['单人游戏', '局域网世界', '装有模组的服务器', '未装模组的服务器'],
    rows: {
      mobs: '地平线上的生物',
      players: '任意距离的玩家',
      offline: '已下线的玩家',
      unexplored: '无人探索之地的兽群',
      birds: '鸟类',
    },
    cells: {
      mobsMet: '仅限你遇到过的生物',
      offlineEven: '连你加入前离开的也在',
      offlineSeen: '仅限你看着离开的',
    },
    yes: '是',
    no: '否',
    noOthers: '没有其他玩家',
    notApplicable: '不适用',
    notes: {
      install: {
        title: '把 jar 放进服务器的 mods 文件夹',
        text: '和你游戏里用的是同一个文件；在 Fabric 和 Quilt 上还需要 Fabric API。无需任何设置。',
      },
      lan: {
        title: '局域网：无需额外安装',
        text: '对局域网开放的世界会通过主机的游戏共享一切。',
      },
      join: {
        title: '任何人都能加入',
        text: '没装本模组的玩家照样可以加入。服务器不会向他们发送任何东西。',
      },
      tell: {
        title: '告诉你的玩家',
        text: '服务器会把每位玩家的位置共享给装有本模组的玩家。',
      },
    },
  },

  compatibility: {
    eyebrow: '兼容性',
    title: 'Distant Horizons、Voxy、Ecstatic……',
    accent: '或者什么都不装。',
    text: 'Living Horizon 会自动识别你的远景地形模组：生物和玩家走在它的地面上，藏在它的山丘后面，渐渐隐入它的雾中。没有远景地形模组时，它也能让渲染距离之外的世界保持生机。',
    cards: {
      dh: { text: '2.3 及更高版本。生物和玩家显示在它的地形上，会被它的山丘遮挡。' },
      voxy: { text: '生物和玩家显示在它的地形上，使用光影包时也一样。' },
      lodistance: { text: 'Fabric，Minecraft 26.3，需使用 OpenGL，且不开光影。' },
      farView: { text: 'Forge 和 NeoForge，Minecraft 1.20.1 至 1.21.4。生物显示在它的地形上。' },
      ecstatic: { text: 'NeoForge，Minecraft 1.21.1，单人游戏。生物显示在它的地形上。' },
      bobby: { text: '生物和玩家显示在它保存的、超出服务器视距的地形上。' },
      iris: { text: '光影包可以正常使用，例如 Photon 和 Complementary Unbound。' },
      vanilla: {
        title: '原版',
        text: '无需远景地形模组：调低渲染距离和模拟距离，依然能看到生机勃勃的世界。',
      },
    },
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: '你的其他模组呢？',
      text: (n: number) =>
        p(n, { other: '已列出 {n} 个模组：光影、性能、生物模组。哪些可用，哪些还在等人测试。' }),
      link: '查看兼容模组',
    },
    matrixTitle: 'Minecraft 版本和加载器',
    matrixText: '每个游戏版本和加载器各一个 jar。',
    report: '试过其中一个？报告一下',
    builds: (builds: number, range: string) =>
      p(builds, { other: `{n} 个构建，适用于 ${range}。` }),
    keyUntested: '能启动，需要测试者',
    table: '兼容性表格',
    untested: '能在游戏中启动，但还没人看到它在世界中绘制',
    noBuild: '无构建',
    notAvailable: '不可用',
    fallback: (range: string) =>
      `Minecraft ${range}，支持 Fabric、Quilt、NeoForge（1.20.6 及更高版本）和 Forge。`,
    fullTable: '在 GitHub 上查看完整表格',
    loaders: {
      fabric: '需要 Fabric API。Mod Menu 可选。',
      quilt: '需要 Fabric API（QFAPI）。',
      neoforge: '从 Minecraft 1.20.6 起，无需其他前置。',
      forge: '无需其他前置。',
    },
  },

  performance: {
    eyebrow: '性能',
    title: '鲜活的地平线，',
    accent: '还把帧数还给你。',
    design: {
      eyebrow: '优化渲染',
      title: '鲜活的地平线，',
      accent: '不吃你的帧数。',
      text: 'Living Horizon 从一开始就为轻量而设计：远处的形象用低开销的方式绘制，而且只在能被看到时才绘制。这样你可以调低渲染距离和模拟距离，世界依然生机勃勃。',
      cards: {
        pictures: {
          title: '远处用轻量图片',
          text: '超过设定的距离后，远处的形象会以自己的平面图片代替完整模型来绘制。在那个大小下看起来一模一样，工作量却只有一小部分。',
        },
        hidden: {
          title: '看不见就跳过',
          text: '远景地形后面的生物完全不绘制；形象一旦太小或太远、察觉不到，动画就会停止。',
        },
        presets: {
          title: '画质预设',
          text: '低、普通、高和极高一次性设定生物数量、显示范围和鸟类。默认值就是均衡之选。',
        },
        server: {
          title: '服务器负担轻',
          text: '所有动画都在玩家的游戏里运行。装有本模组的服务器只共享位置。',
        },
      },
    },
    numbers: '用数据说话',
    measured: '由玩家和作者实测；测试配置写在每个数值下方。',
    noNumbers: {
      before: '这里没有编造的数字：真实的基准测试结果出来后才会填上。内置的调试面板（',
      after: '）会显示模组自身每刻和每帧的开销。',
    },
    slots: {
      fps: { label: 'FPS 提升', hint: '由模组而非游戏来绘制远方' },
      mobs: { label: '地平线上的生物', hint: '同时绘制' },
      distance: { label: '覆盖距离', hint: '渲染距离之外' },
      frame: { label: '每帧开销', hint: '来自调试面板' },
    },
    setups: {
      fps: '同样的远方画面，120 → 150 FPS：较短的渲染距离加上 Living Horizon 绘制更远处的生物，对比游戏自己绘制到那么远。由作者实测。',
    },
    pending: (hint: string) => `基准测试待补充 · ${hint}`,
    share: '在你的配置上测过？分享一下',
  },

  help: {
    eyebrow: '参与其中',
    title: '一个测试版，',
    accent: '和玩家一起打造。',
    test: {
      title: '在你的配置上测试',
      text: '告诉我们它在你的游戏版本、加载器和模组上运行得怎么样，好坏都行。每份报告都有帮助。',
      untested: (n: number) => p(n, { other: '{n} 个构建仍在等待第一位测试者' }),
      report: '报告兼容性',
    },
    code: {
      title: '参与贡献',
      text: '代码、修复和翻译都以拉取请求的形式提交到 GitHub。欢迎使用 AI，只要你阅读、理解并测试它写的东西。',
      guide: '贡献指南',
    },
    discord: {
      title: '加入 Discord',
      text: '提问、新闻、截图和求助，与作者和其他玩家一起交流。',
      join: '加入 Discord',
    },
  },

  changelog: {
    eyebrow: '最新动态',
    title: '频繁发布，',
    accent: '快速修复。',
    text: '直接来自项目在 GitHub 上的更新日志。',
    textEnglish: '直接来自项目在 GitHub 上的更新日志（英文）。',
    latest: '最新',
    release: '版本',
    sides: { server: '服务端', client: '客户端' },
    kinds: { new: '新增', improved: '改进', fixed: '修复' },
    more: (n: number) => p(n, { other: '再显示 {n} 项更改' }),
    failed: '暂时无法加载更新日志。它一直在 GitHub 上。',
    full: '在 GitHub 上查看完整更新日志',
    releases: '所有版本',
    /** The link to the changelog page, on the home page. */
    every: '查看所有版本',
  },

  faq: {
    eyebrow: '常见问题',
    title: '有疑问？',
    accent: '这里有答案。',
    text: '玩家最常问的问题。还有别的问题，就到 Discord 上问吧。',
    groups: {
      how: '工作原理',
      compatibility: '兼容性',
      performance: '性能与设置',
      multiplayer: '多人游戏',
      downloads: '下载与许可证',
      ai: 'AI',
    },
    questions: questions({
      visual: {
        q: '它只是视觉效果吗？会影响刷怪塔吗？',
        a: [
          [
            '只是视觉效果，没有 AI。真正的生物和没装本模组时一样运作，所以刷怪塔、生物生成和生物数量上限都不会改变。你无法攻击远处的生物。',
          ],
        ],
      },
      real: {
        q: '远处的生物是真实的，还是随机放置的？',
        a: [
          [
            '它们是真实的生物，位于你的游戏或服务器最后一次看到它们的地方。此后死亡或消失的生物，在你走近之前可能仍会显示。走近之后，它就会被遗忘。',
          ],
        ],
      },
      simulation: {
        q: '它和调高模拟距离或实体渲染距离有什么不同？',
        a: [
          [
            '调高模拟距离会让服务器运行更多真实的生物，开销很大，而且服务器发送生物的距离依然有限。Living Horizon 绘制的是服务器不运行的副本。它们播放现成的动画，到了远处会变成平面图片（',
            { em: '简化实体' },
            '）。',
          ],
        ],
      },
      range: {
        q: '它能显示多远的生物和玩家？',
        a: [
          [
            '生物：默认 512 格，通过',
            { em: '生物渲染距离' },
            '最高可设为',
            { em: '无限制' },
            '。玩家、船和载具：默认不限距离，可用',
            { em: '玩家渲染距离' },
            '和',
            { em: '实体渲染距离' },
            '加以限制。生物只有在你的游戏或服务器见过之后才会显示。',
          ],
        ],
      },
      mods: {
        q: '它能和我的模组一起用吗？',
        a: [
          [
            '很有可能。Voxy、Distant Horizons、Lodistance、Ecstatic、Bobby、Sodium、Iris 和光影包都能与它配合使用（见',
            { link: 'compatibilitySection', text: '兼容性' },
            '）。Living Horizon 只添加它自己的形象，不会改变其他模组绘制世界的方式。尚未测试的模组列在 GitHub 的 ',
            { link: 'modCompatibility', text: 'mod compatibility' },
            ' 标签下。如果出了问题，请提交一个 ',
            { link: 'issues', text: 'Issue' },
            '，写明那个模组的名称和版本。',
          ],
        ],
      },
      modMobs: {
        q: '其他模组的生物也会在远处显示吗？',
        a: [
          [
            '会，只要它们使用 Minecraft 自身的实体系统。如果某个模组的实体运作方式差别太大，可以提交 ',
            { link: 'issues', text: 'Issue' },
            ' 或到 ',
            { link: 'discord', text: 'Discord' },
            ' 上请求支持它。',
          ],
        ],
      },
      farTerrain: {
        q: '我需要 Voxy、Distant Horizons、Lodistance 或 Ecstatic 吗？',
        a: [
          [
            '不需要。没有它们时，远处的生物和玩家会显示在游戏自身的地形上，直到你的渲染距离为止。装了其中之一后，它们也会显示在它的远景地形上。',
          ],
        ],
      },
      frameRate: {
        q: '它会降低我的帧数吗？',
        a: [
          [
            '绘制更多实体会消耗帧数。如果游戏变卡，请保持',
            { em: '简化生物' },
            '和',
            { em: '简化实体' },
            '开启，并选择较低的',
            { em: '预设' },
            '。',
            { em: '最大生物数量' },
            '和',
            { em: '生物渲染距离' },
            '都设为',
            { em: '无限制' },
            '时，游戏可能会崩溃。',
          ],
        ],
      },
      choose: {
        q: '我能选择显示哪些内容吗？',
        a: [
          [
            '可以。',
            { em: '显示生物' },
            '、',
            { em: '显示玩家' },
            '、',
            { em: '离线玩家' },
            '和',
            { em: '显示鸟类' },
            '分别开关各个部分。',
            { em: '生物与实体…' },
            '可以逐个选择生物。',
          ],
        ],
      },
      world: {
        q: '它会修改我的世界或加载区块吗？',
        a: [
          [
            '不会。它不改动你世界里的任何东西，也不加载任何区块。它把记住的内容保存在自己的文件里：',
            { code: 'config' },
            ' 文件夹中，以及世界文件夹里的 ',
            { code: 'livinghorizon-positions.dat' },
            '（存放服务器共享的内容）。移除本模组后，你的世界会保持原样。',
          ],
          ['在服务器上，本模组只向装有它的玩家发送位置。'],
        ],
      },
      server: {
        q: '服务器需要安装本模组吗？',
        a: [
          [
            '不需要。几乎所有功能在单人游戏中都可用，你也可以装着它加入任何服务器。但要看到任意距离的玩家，服务器上需要装本模组，这样服务器还会共享更多生物和已下线的玩家。见',
            { link: 'serversSection', text: '多人游戏' },
            '。',
          ],
        ],
      },
      paper: {
        q: '它能在 Paper 或 Spigot 服务器上用吗？',
        a: [
          [
            '你可以装着本模组在这些服务器上玩，就像在任何没装它的服务器上一样。服务器端只能在 Fabric、Quilt、NeoForge 和 Forge 上运行，所以 Paper 或 Spigot 服务器不会共享任何东西。Paper 插件的讨论见 ',
            { link: 'paperPlugin', text: '#156' },
            '。',
          ],
        ],
      },
      nothing: {
        q: '我看不到远处的生物或玩家，为什么？',
        a: [
          {
            list: [
              [
                '远处的玩家需要服务器装有本模组。服主也可能限制了共享哪些人（见',
                { link: 'serverSettings', text: '服务器设置' },
                '）。',
              ],
              ['在没装本模组的服务器上，只会显示你遇到过的生物。'],
            ],
          },
        ],
      },
      cheat: {
        q: '它能用来作弊吗？服务器允许使用吗？',
        a: [
          [
            '它只在服务器允许的地方显示其他玩家。远处的玩家只会出现在装有本模组的服务器上，而共享什么由服主决定：多远、是否只限队友，以及哪些玩家和维度保持隐藏。',
            { code: '"sharePlayers": false' },
            ' 可以关闭共享（见',
            { link: 'serverSettings', text: '服务器设置' },
            '）。隐身的玩家和处于旁观模式的玩家永远不会被共享。潜行的玩家目前仍会被共享（',
            { link: 'sneaking', text: '#269' },
            '）。',
          ],
          [
            '在其他服务器上，你只能看到你自己的游戏看到过的东西。本模组不会向服务器发送任何内容。不过每个服务器对模组都有自己的规定：请询问其管理人员。',
          ],
        ],
      },
      bedrock: {
        q: '有基岩版吗？',
        a: [['没有。Living Horizon 是 Minecraft Java版的模组。']],
      },
      version: {
        q: '我的游戏版本不受支持。以后会支持吗？',
        a: [
          [
            '到 ',
            { link: 'discord', text: 'Discord' },
            ' 上说说你玩的是哪个版本和加载器。这有助于决定接下来做什么。',
          ],
        ],
      },
      modpack: {
        q: '我能把它放进整合包吗？',
        a: [['可以。请使用官方文件，并注明出处。']],
      },
      abandoned: {
        q: '如果项目停止维护了怎么办？',
        a: [
          [
            '许可证对此早有安排。一旦项目被宣布停止维护（仓库被归档，或 README 中如此声明），其许可证就会转为 GPL：任何人都可以在注明出处的前提下继续这个项目。见',
            { link: 'license', text: '许可证' },
            '第 5 节。',
          ],
        ],
      },
      ai: {
        q: '它是用 AI 做的吗？',
        a: [
          [
            '是的，部分如此。大部分代码由 AI 编写。作者 clixmods 决定模组如何运作，在游戏中测试每一项改动，并修复出问题的地方。如果没有 AI，这么大的项目根本不会存在。',
          ],
          [
            '这些想法来自游戏开发，而这正是 clixmods 的本职工作：替身贴图（impostor）、LOD 和现成的动画，都是游戏多年来一直在用的技巧。clixmods 从 2017 年开始制作模组，比如《使命召唤：黑色行动 III》的地图 ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            '，在 Steam 创意工坊上的下载量超过一百万（见',
            { link: 'portfolio', text: '作品集' },
            '）。',
          ],
        ],
      },
      modrinth: {
        q: '它在 Modrinth 上吗？为什么在那里是未列出状态？',
        a: [
          [
            '它在 ',
            { link: 'modrinth', text: 'Modrinth' },
            ' 上，但处于未列出状态：它不会出现在 Modrinth 的搜索结果中。自 2026 年 8 月起，',
            { link: 'modrinthRules', text: 'Modrinth 的规则' },
            '不允许主要由 AI 制作的项目公开，所以其管理人员将它设为了未列出。CurseForge、Nexus Mods 和',
            { link: 'releases', text: '发布页面' },
            '上有相同的文件。',
          ],
          ['未列出并不代表不安全。这关乎模组的制作方式，而不是它做了什么：'],
          {
            list: [
              [
                '代码是公开的：任何人都可以在它的 ',
                { link: 'github', text: 'GitHub 仓库' },
                '中阅读。',
              ],
              ['GitHub 根据这些代码构建每一个版本，构建日志也是公开的。'],
              [
                '本模组没有任何自己连接互联网的代码。玩家皮肤由游戏从 Mojang 获取，Discord 链接也只有在你点击时才会打开。',
              ],
            ],
          },
        ],
      },
    }),
    ask: '在 Discord 上提问',
    issue: '提交 Issue',
  },

  download: {
    eyebrow: '下载',
    title: '获取',
    accent: 'Living Horizon',
    text: {
      before: '免费，每个游戏版本和加载器各一个 jar，客户端和服务器通用。把它放进',
      after: '文件夹，地平线就活了过来。',
    },
    latest: '最新版本',
    version: 'Minecraft 版本',
    loader: '加载器',
    needs: { before: '· 需要', after: '' },
    untested: '此构建能在游戏中启动，但还没有人报告它能在世界中正常绘制',
    jar: '下载 jar',
    releasePage: '从发布页面获取',
    sameJar: '服务器上用同一个 jar',
    curseforge: '或在 CurseForge 上获取',
    pick: '在发布页面或 CurseForge 上选择你的文件。',
    total: '下载量，所有平台',
    count: (n: number) => p(n, { other: '{n} 次下载' }),
    noCount: '下载量不可用',
    soon: '即将推出',
    checking: '检查中…',
    everyFile: '所有文件',
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) => p(n, { other: '{n} 个整合包' }),
  },

  modpacks: {
    eyebrow: '整合包',
    title: '已收录于',
    accent: '这些整合包。',
    text: '以下整合包包含 Living Horizon。你也做了一个？它会自动出现在这里。',
    by: (authors: string) => `作者：${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `在 ${platform} 下载`,
    none: '还没有整合包收录 Living Horizon。你的可能是第一个。',
    loading: '整合包马上就会显示在这里。',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) => p(n, { other: '查看全部 {n} 个整合包' }),
  },

  mods: {
    eyebrow: '兼容性',
    title: '与你的模组',
    accent: '和睦相处。',
    text: '直接取自 GitHub 上的项目，随测试更新：哪些可用，哪些有已知问题，哪些还在等人试一试。说明为英文。',
    search: '搜索模组',
    filter: '按状态筛选',
    all: '全部',
    status: { works: '可用', issue: '已知问题', untested: '尚未测试' },
    /** The heading of the shader packs, after the mods. */
    shaders: '光影包',
    /** The note of every mod still waiting for a tester, next to the link to its issue. */
    untested: '还没有人告诉我们它运行得怎么样。试过了吗？在它的 issue 里告诉我们。',
    issue: (n: number) => `Issue #${n}`,
    none: '没有符合搜索的模组。',
    missing: {
      title: '列表里缺了某个模组？',
      text: '告诉我们 Living Horizon 和它一起运行得如何，好坏都行：每份反馈都有帮助。',
      link: '报告模组',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: '列表暂时无法加载。它始终在 GitHub 上。',
    failedLink: '在 GitHub 上查看列表',
  },

  footer: {
    tagline: '让远方充满生机。一款 Minecraft Java Edition 模组，适用于你的游戏和你的服务器。',
    beta: '测试版：难免有 bug，遇到了请告诉我们。',
    project: '项目',
    docs: '文档',
    license: '许可证',
    community: '社区',
    bug: '报告 bug',
    contribute: '参与贡献',
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: '整合包列表来自', after: '' },
    official:
      '非官方 Minecraft 产品。未经 Mojang 或 Microsoft 批准，也与 Mojang 或 Microsoft 无关。',
  },
};
