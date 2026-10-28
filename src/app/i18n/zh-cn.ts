import { Messages } from './en';
import { plural } from './plural';

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
    compatibility: '兼容性',
    testers: '测试者',
    contribute: '参与贡献',
    download: (version: string) => `下载 v${version}`,
  },

  hero: {
    scene:
      '插图：黄昏时分，方块山丘连到地平线，远处的村民、动物、骑手和其他玩家依然在活动，一群大雁从空中飞过。',
    news: '本模组现在也能在服务器上运行了',
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
    text: '生物、玩家、已下线的玩家和鸟类，由你自己的游戏绘制，而且足够轻量，可以一直开着。',
    offline: '（离线）',
    near: '近处：完整的生物',
    far: '远处：一张平面图片',
    preset: '预设',
    presets: ['低', '普通', '高', '极高'],
    mobDistance: '生物渲染距离',
    items: {
      mobs: {
        title: '每一个生物，直到地平线',
        text: '动物在吃草，村民在远方的村庄里闲逛，傀儡在站岗。游戏能绘制的任何生物都行，其他模组的生物也不例外。',
        points: [
          '在 Voxy 和 Distant Horizons 的地形上，或在原版中',
          '会被远处的山丘遮挡，使用光影包时也一样',
          '在“生物与实体”中选择显示哪些',
        ],
        where: '任何地方。在装有本模组的服务器上，连你从未遇到过的生物也能看到。',
      },
      players: {
        title: '任意距离的玩家',
        text: '看到其他每一位玩家，无论他们在地图上的什么位置，连同他们的皮肤、盔甲、手持物品和骑乘的东西。',
        points: [
          '马、船、矿车和快乐恶魂',
          '流畅：服务器每秒共享五次位置',
          '没装本模组的玩家照样可以加入',
        ],
        where: '在局域网中，以及装有本模组的服务器上。',
      },
      offline: {
        title: '下线的玩家继续生活',
        text: '有人下线时，一个带着他名字的分身会留在他离开的地方。它会散步、坐下、打开箱子，夜里上床睡觉，直到本人回来。',
        points: [
          '名字后面显示（离线），以及最后上线时间',
          '连你加入之前就离开的玩家也在',
          '仅供观赏：他们从不挡住你或生物',
        ],
        where: '任何地方。在装有本模组的服务器上，每一位曾在那里玩过的玩家都在。',
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
      },
      light: {
        title: '专为轻量设计',
        text: '远处的生物没有 AI：它们播放贴合地面的现成动画。到了非常远的地方，它们会变成自己的平面图片。',
        points: [
          '被山丘挡住的生物不会被绘制',
          '调低模拟距离，世界依然生机勃勃',
          '简化实体：同样的开销，多得多的生物',
        ],
        where: '一切都在你的游戏里运行。服务器只共享位置。',
      },
      settings: {
        title: '设置就在你会找的地方',
        text: '在选项界面、Mod Menu、Sodium 的视频设置中，或使用 /livinghorizon config。每项设置都会说明它的作用。',
        points: [
          '低、普通、高和极高预设，一次调好所有设置',
          '支持 14 种语言',
          '“重置为默认”让一切恢复原样',
        ],
        where: '默认值就是均衡之选。',
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
    since: (version: string) => `服务器支持，自 ${version} 起`,
    steps: {
      jar: {
        title: '把 jar 放进服务器的 mods 文件夹',
        text: '和你游戏里用的是同一个文件，选择服务器对应的 Minecraft 版本和加载器；在 Fabric 和 Quilt 上还需要 Fabric API。两边都要保持最新。',
      },
      start: {
        title: '启动服务器',
        text: '无需任何设置。服务器把共享的内容保存在世界文件夹里，重启后依然都在。',
      },
      see: {
        title: '装有本模组的玩家能看到所有人',
        text: '任意距离的每一位玩家，连同皮肤、盔甲和坐骑，还有他们周围的生物，连从未遇到过的也能看到。',
      },
    },
    matrixTitle: '在哪里玩，能看到什么',
    matrixText: '单人游戏中一切功能都可用。在服务器上，其余的由服务器上的模组完成。',
    matrixLabel: '按游戏方式划分的功能',
    feature: '功能',
    places: ['单人游戏', '局域网世界', '装有模组的服务器', '未装模组的服务器'],
    rows: {
      mobs: '地平线上的生物',
      players: '任意距离的玩家',
      offline: '已下线的玩家',
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
      datapack: {
        title: '用过数据包？',
        text: '把它从世界的 datapacks 文件夹中删除：服务器上的模组会取代它。',
      },
    },
  },

  compatibility: {
    eyebrow: '兼容性',
    title: '为远景地形而生。',
    accent: '没有也无妨。',
    text: 'Living Horizon 会自动识别 Distant Horizons 或 Voxy，直接在它们的地形上绘制生物和玩家。没有它们时，它也能让渲染距离之外的世界保持生机。',
    works: '可用',
    cards: {
      dh: {
        text: '生物和玩家绘制在它的远景地形上，并会被它的山丘遮挡。需要 Distant Horizons 2.3 或更高版本。',
        link: '获取 Distant Horizons',
      },
      voxy: {
        text: 'Voxy 地形的地平线活了过来：吃草的动物、远方的村庄、行进中的玩家。',
        link: '获取 Voxy',
      },
      vanilla: {
        title: '原版',
        text: '无需远景地形模组。用较低的渲染距离和模拟距离游玩，依然能看到生机勃勃的世界。',
      },
    },
    extras: [
      'Iris 光影包（Photon、Complementary……）',
      '服务器上用同一个 jar，不装它也能加入任何服务器',
      '设置也在 Sodium 的视频设置中（0.8+）',
    ],
    matrixTitle: 'Minecraft 版本和加载器',
    matrixText: '每个游戏版本和加载器各一个 jar。',
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

  testers: {
    eyebrow: '目前处于测试阶段',
    title: '帮地平线焕发生机。',
    lede: 'Living Horizon 还很年轻，要在大量组合上运行：游戏版本、加载器、Distant Horizons 和 Voxy 的版本、光影包、其他模组。并不是每种组合都已经试过。如果你在用它，请告诉我们运行得怎么样，好坏都行：每一份报告都有用。',
    asks: [
      '你的 Minecraft 版本和加载器',
      'Distant Horizons 或 Voxy，以及它们的版本',
      '光影包，如果有的话（Photon、Complementary……）',
      '单人游戏、局域网还是服务器，服务器是否装了模组',
      '一张你所看到画面的截图',
    ],
    report: '报告兼容性',
    discord: '加入 Discord',
    issue: '提交 Issue',
    status: '测试状态',
    waiting: (builds: number) =>
      p(builds, {
        other: '个构建仍在等待第一位测试者（共 {n} 个）',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, { other: '{n} 个构建已确认可用' })}，${waiting} 个待测试`,
    seen: '已确认可用',
    yours: '等你来测',
    wanted: '最需要测试',
    every: '每一套配置',
    everyRest: '都会带来新发现',
    loading: '项目数据加载完成后，未测试的组合会显示在这里。',
  },

  contribute: {
    eyebrow: '参与贡献',
    title: '和我们一起打造它。',
    accent: '欢迎使用 AI。',
    text: 'Living Horizon 只在一个地方开发：它的 GitHub 仓库。代码、修复和翻译都以拉取请求的形式提交到那里。',
    steps: {
      talk: {
        title: '先沟通',
        text: '小修复以外的改动，请先开一个 Issue，在动手之前把方向商量好。',
      },
      pr: {
        title: '提交拉取请求',
        text: '在 feature/* 或 fix/* 分支上工作，目标分支为 develop。提交信息用英文，遵循 Conventional Commits 规范。',
      },
      build: {
        title: '构建和测试',
        text: '一次 Gradle 构建就能编译模组并运行测试。CI 也会在每个拉取请求上运行它。',
      },
      credit: {
        title: '获得署名',
        text: '把自己加入 CREDITS.md；如果玩家能看到这项改动，再在更新日志里加一行。',
      },
    },
    aiTitle: '用 AI？尽管用。',
    aiText:
      'AI 是这个项目开发方式的一部分，你也可以用它来贡献，完全没问题。只是要一直思考它写了什么：提交拉取请求之前，先阅读、理解并测试你的改动。',
    claude: {
      before: 'Claude 在这里效果最好：它会自动读取',
      between: '以及',
      after: '中的技能。',
    },
    terms: {
      before: '提交拉取请求即表示你接受',
      link: '许可证',
      after: '第 3 节：你保留自己的版权，并且无论以后发生什么，你都会一直作为贡献者被署名。',
    },
    guide: '阅读贡献指南',
    issues: '待解决的 Issue',
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
    official:
      '非官方 Minecraft 产品。未经 Mojang 或 Microsoft 批准，也与 Mojang 或 Microsoft 无关。',
  },
};
