import { Messages } from './en';
import { plural } from './plural';
import { questions } from './rich';

const p = plural('zh-TW');

export const zhTW: Messages = {
  meta: {
    title: 'Living Horizon：讓遠方充滿生機',
    description:
      'Living Horizon 是一款 Minecraft 模組，讓生物、村民、鳥類與其他玩家在地平線上繼續活動：超出您的顯示距離，也遍布 Distant Horizons 與 Voxy 的遠景地形。支援單人遊戲、區域網路與伺服器，適用於 Fabric、Quilt、NeoForge 與 Forge。目前為測試版。',
  },

  language: {
    label: '語言',
  },

  common: {
    download: '下載',
    becomeTester: '成為測試者',
    needsTesters: '需要測試者',
    tested: '已測試',
    seenWorking: '已確認在世界中正常顯示',
    new: '新',
    beta: '測試版',
    changelog: '更新日誌',
    logo: (name: string) => `${name} 標誌`,
  },

  nav: {
    label: '主要導覽',
    tag: '測試版',
    menu: '選單',
    features: '功能',
    compatibility: '相容性',
    testers: '測試者',
    contribute: '參與貢獻',
    faq: '常見問題',
    download: (version: string) => `下載 v${version}`,
  },

  hero: {
    scene:
      '插圖：黃昏時分，方塊山丘連到地平線，遠處的村民、動物、騎手和其他玩家依然在活動，一群大雁從空中飛過。',
    news: '本模組現在也能在伺服器上執行了',
    tagline: '讓遠方',
    taglineAccent: '充滿生機。',
    lede: {
      before: '動物、村民、鳥類與其他玩家在地平線上繼續生活，遠遠超出您的顯示距離，就在',
      between: '與',
      after: '的遠景地形上，原版也一樣。單人遊戲、區域網路與伺服器都支援。',
    },
    facts: '專案概覽',
    latest: '最新版本',
    updated: '更新時間',
    downloads: '下載次數',
    minecraft: 'Minecraft',
    loaders: '載入器',
  },

  concept: {
    eyebrow: '它的作用',
    title: '您的顯示距離有盡頭。',
    accent: '世界沒有。',
    text: 'Minecraft 只在幾個區塊之內繪製生物和玩家。遠景地形模組把大地延伸到地平線，但那裡空蕩蕩、靜悄悄。Living Horizon 讓那裡重新充滿生機。',
    diagram:
      '示意圖：沒有 Living Horizon 時，生物只存在於您的顯示距離之內，遠景地形空無一物。有了它，生物、玩家和鳥類遍布整片遠景地形，一直到地平線。',
    you: '您',
    renderDistance: '您的顯示距離',
    farTerrain: '遠景地形 ·',
    horizon: '地平線',
    without: { before: '', mark: '沒有', after: 'Living Horizon' },
    with: { before: '', mark: '有了', after: 'Living Horizon' },
    empty: '空蕩蕩',
  },

  features: {
    eyebrow: '功能',
    title: '顯示距離之外的一切，',
    accent: '都活著。',
    text: '生物、玩家、已登出的玩家和鳥類，由您自己的遊戲繪製，而且夠輕量，可以一直開著。',
    offline: '（離線）',
    near: '近處：完整的生物',
    far: '遠處：一張平面圖片',
    preset: '預設',
    presets: ['低', '普通', '高', '極高'],
    mobDistance: '生物顯示距離',
    items: {
      mobs: {
        title: '每一隻生物，直到地平線',
        text: '動物在吃草，村民在遠方的村莊裡閒逛，魔像在站崗。遊戲能繪製的任何生物都可以，其他模組的生物也不例外。',
        points: [
          '在 Voxy 與 Distant Horizons 的地形上，或在原版中',
          '會被遠處的山丘遮擋，使用光影包時也一樣',
          '在「生物與實體」中選擇要顯示哪些',
        ],
        where: '任何地方。在裝有本模組的伺服器上，連您從未遇到過的生物也看得到。',
      },
      players: {
        title: '任何距離的玩家',
        text: '看到其他每一位玩家，無論他們在地圖上的哪裡，連同他們的外觀、盔甲、手持物品和騎乘的東西。',
        points: [
          '馬、船、礦車和快樂幽靈',
          '流暢：伺服器每秒共享五次位置',
          '沒裝本模組的玩家照樣可以加入',
        ],
        where: '在區域網路中，以及裝有本模組的伺服器上。',
      },
      offline: {
        title: '登出的玩家繼續生活',
        text: '有人登出時，一個帶著他名字的分身會留在他離開的地方。它會散步、坐下、打開儲物箱，夜裡上床睡覺，直到本人回來。',
        points: [
          '名字後面顯示（離線），以及最後上線時間',
          '連您加入之前就離開的玩家也在',
          '僅供觀賞：他們從不擋住您或生物',
        ],
        where: '任何地方。在裝有本模組的伺服器上，每一位曾在那裡玩過的玩家都在。',
      },
      birds: {
        title: '天空中的鳥',
        text: '鳥群、排成 V 字的大雁、猛禽、海鷗、鴨子和蝙蝠飛過大地，遠遠就看得見。',
        points: [
          '牠們會停在樹上、屋頂、田野和海灘上',
          '鴨子在池塘裡游來游去',
          '近處是小巧的 3D 模型，遠處是平面圖片',
        ],
        where: '任何地方，不需要設定。',
      },
      light: {
        title: '專為輕量而設計',
        text: '遠處的生物沒有 AI：牠們播放貼合地面的現成動畫。到了非常遠的地方，牠們會變成自己的平面圖片。',
        points: [
          '被山丘擋住的生物不會被繪製',
          '調低模擬距離，世界依然生氣蓬勃',
          '簡化實體：同樣的開銷，多得多的生物',
        ],
        where: '一切都在您的遊戲裡執行。伺服器只共享位置。',
      },
      settings: {
        title: '設定就在您會找的地方',
        text: '在「選項」畫面、Mod Menu、Sodium 的顯示設定中，或使用 /livinghorizon config。每個設定都會說明它的作用。',
        points: [
          '「低」、「普通」、「高」和「極高」預設，一次調好所有設定',
          '支援 14 種語言',
          '「重設為預設值」讓一切恢復原狀',
        ],
        where: '預設值就是最均衡的選擇。',
      },
    },
  },

  compare: {
    eyebrow: '前後對比',
    title: '同樣的景色。',
    accent: '一個模組。',
    text: '拖動滑桿。左邊，遠景地形還在，卻空無一物。右邊，Living Horizon 讓它重新充滿生機。',
    tabs: '場景',
    shots: {
      shaders: {
        title: '遊戲內 · 光影',
        text: '使用光影包，顯示距離與模擬距離皆為 12：遠處山丘上的動物回來了。',
      },
      vanilla: {
        title: '遊戲內 · 原版',
        text: '不用光影，顯示距離與模擬距離皆為 12：成群的牛和馬布滿遠方的平原。',
      },
    },
    scenes: {
      village: {
        title: '平原上的村莊',
        text: '遠方村莊周圍的村民、一隻魔像和吃草的動物。',
      },
      ridge: {
        title: '山脊上的騎手',
        text: '山丘上的其他玩家和他們的馬，頭上的名字一個不少。',
      },
      coast: {
        title: '正午的海岸',
        text: '海上的船，遠岸的村民，水面上的海鷗。',
      },
    },
    legendNear: '您的顯示距離：有沒有模組都有生機',
    legendFar: '遠景地形：沒有模組就空無一物',
    note: {
      before: '效果示意插圖。前幾個分頁是真實的遊戲螢幕截圖。您也拍到了漂亮的？',
      link: '來 Discord 分享',
      after: '吧。',
    },
    shotWithout: (text: string) => `未安裝 Living Horizon 的遊戲螢幕截圖。${text}`,
    shotWith: (text: string) => `安裝 Living Horizon 後的遊戲螢幕截圖。${text}`,
    sceneWithout: (text: string) => `沒有 Living Horizon：${text}`,
    sceneWith: (text: string) => `有了 Living Horizon：${text}`,
    badgeWithout: '沒有模組',
    badgeWith: '有 Living Horizon',
    slider: '拖動以比較沒有和有 Living Horizon 時的畫面',
  },

  servers: {
    eyebrow: '多人遊戲',
    title: '裝到您的伺服器上。',
    accent: '人人都看得見彼此。',
    text: '同一個 jar 也能在伺服器上執行。伺服器會把每位玩家的位置、他們周圍的生物以及已登出的玩家，共享給所有裝有本模組的人。',
    cover: 'Living Horizon 標題前，是一大群玩家和生物的頭像。',
    since: (version: string) => `伺服器支援，自 ${version} 起`,
    steps: {
      jar: {
        title: '把 jar 放進伺服器的 mods 資料夾',
        text: '和您遊戲裡用的是同一個檔案，選擇伺服器對應的 Minecraft 版本與載入器；在 Fabric 與 Quilt 上還需要 Fabric API。兩邊都要保持最新版本。',
      },
      start: {
        title: '啟動伺服器',
        text: '不需要任何設定。伺服器把共享的內容儲存在世界資料夾裡，重新啟動後依然都在。',
      },
      see: {
        title: '裝有本模組的玩家看得到所有人',
        text: '任何距離的每一位玩家，連同外觀、盔甲和坐騎，還有他們周圍的生物，連從未遇到過的也看得到。',
      },
    },
    matrixTitle: '在哪裡玩，看得到什麼',
    matrixText: '單人遊戲中所有功能都能使用。在伺服器上，其餘的由伺服器上的模組完成。',
    matrixLabel: '依遊玩方式區分的功能',
    feature: '功能',
    places: ['單人遊戲', '區域網路世界', '裝有模組的伺服器', '未裝模組的伺服器'],
    rows: {
      mobs: '地平線上的生物',
      players: '任何距離的玩家',
      offline: '已登出的玩家',
      birds: '鳥類',
    },
    cells: {
      mobsMet: '僅限您遇到過的生物',
      offlineEven: '連您加入前離開的也在',
      offlineSeen: '僅限您看著離開的',
    },
    yes: '是',
    no: '否',
    noOthers: '沒有其他玩家',
    notApplicable: '不適用',
    notes: {
      lan: {
        title: '區域網路：不需額外安裝',
        text: '對區域網路開放的世界會透過主機的遊戲共享一切。',
      },
      join: {
        title: '任何人都能加入',
        text: '沒裝本模組的玩家照樣可以加入。伺服器不會傳送任何東西給他們。',
      },
      tell: {
        title: '告知您的玩家',
        text: '伺服器會把每位玩家的位置共享給裝有本模組的玩家。',
      },
      datapack: {
        title: '用過資料包？',
        text: '把它從世界的 datapacks 資料夾中移除：伺服器上的模組會取代它。',
      },
    },
  },

  compatibility: {
    eyebrow: '相容性',
    title: '為遠景地形而生。',
    accent: '沒有也無妨。',
    text: 'Living Horizon 會自動偵測 Distant Horizons 或 Voxy，直接在它們的地形上繪製生物和玩家。沒有它們時，它也能讓顯示距離之外的世界保持生機。',
    works: '可用',
    cards: {
      dh: {
        text: '生物和玩家繪製在它的遠景地形上，並會被它的山丘遮擋。需要 Distant Horizons 2.3 或更新版本。',
        link: '取得 Distant Horizons',
      },
      voxy: {
        text: 'Voxy 地形的地平線活了過來：吃草的動物、遠方的村莊、移動中的玩家。',
        link: '取得 Voxy',
      },
      vanilla: {
        title: '原版',
        text: '不需要遠景地形模組。用較低的顯示距離與模擬距離遊玩，依然看得到生氣蓬勃的世界。',
      },
    },
    extras: [
      'Iris 光影包（Photon、Complementary...）',
      '伺服器上用同一個 jar，不裝它也能加入任何伺服器',
      '設定也在 Sodium 的顯示設定中（0.8+）',
    ],
    matrixTitle: 'Minecraft 版本與載入器',
    matrixText: '每個遊戲版本與載入器各一個 jar。',
    builds: (builds: number, range: string) =>
      p(builds, { other: `{n} 個建置，適用於 ${range}。` }),
    keyUntested: '能啟動，需要測試者',
    table: '相容性表格',
    untested: '能在遊戲中啟動，但還沒人看到它在世界中繪製',
    noBuild: '無建置',
    notAvailable: '無法使用',
    fallback: (range: string) =>
      `Minecraft ${range}，支援 Fabric、Quilt、NeoForge（1.20.6 及更新版本）與 Forge。`,
    fullTable: '在 GitHub 上查看完整表格',
    loaders: {
      fabric: '需要 Fabric API。Mod Menu 可選用。',
      quilt: '需要 Fabric API（QFAPI）。',
      neoforge: '自 Minecraft 1.20.6 起，不需要其他前置。',
      forge: '不需要其他前置。',
    },
  },

  performance: {
    eyebrow: '效能',
    title: '生氣蓬勃的地平線，',
    accent: '還把幀數還給您。',
    design: {
      eyebrow: '最佳化繪製',
      title: '生氣蓬勃的地平線，',
      accent: '不吃您的幀數。',
      text: 'Living Horizon 從一開始就為輕量而設計：遠處的形體用低開銷的方式繪製，而且只在看得到時才繪製。這樣您可以調低顯示距離與模擬距離，世界依然生氣蓬勃。',
      cards: {
        pictures: {
          title: '遠處用輕量圖片',
          text: '超過設定的距離後，遠處的形體會以自己的平面圖片代替完整模型來繪製。在那個大小下看起來一模一樣，工作量卻只有一小部分。',
        },
        hidden: {
          title: '看不見就略過',
          text: '遠景地形後面的生物完全不繪製；形體一旦太小或太遠、察覺不到，動畫就會停止。',
        },
        presets: {
          title: '畫質預設',
          text: '「低」、「普通」、「高」和「極高」一次設定生物數量、顯示範圍和鳥類。預設值就是最均衡的選擇。',
        },
        server: {
          title: '伺服器負擔輕',
          text: '所有動畫都在玩家的遊戲裡執行。裝有本模組的伺服器只共享位置。',
        },
      },
    },
    numbers: '用數據說話',
    measured: '由玩家與作者實測；測試配置寫在每個數值下方。',
    noNumbers: {
      before: '這裡沒有捏造的數字：真實的基準測試結果出來後才會填上。內建的除錯面板（',
      after: '）會顯示模組本身每刻和每幀的開銷。',
    },
    slots: {
      fps: { label: 'FPS 提升', hint: '由模組而非遊戲來繪製遠方' },
      mobs: { label: '地平線上的生物', hint: '同時繪製' },
      distance: { label: '涵蓋距離', hint: '顯示距離之外' },
      frame: { label: '每幀開銷', hint: '來自除錯面板' },
    },
    setups: {
      fps: '同樣的遠方畫面，120 → 150 FPS：較短的顯示距離加上 Living Horizon 繪製更遠處的生物，對比遊戲自己繪製到那麼遠。由作者實測。',
    },
    pending: (hint: string) => `基準測試待補 · ${hint}`,
    share: '在您的配置上測過？分享一下',
  },

  testers: {
    eyebrow: '目前為測試版',
    title: '幫地平線注入生機。',
    lede: 'Living Horizon 還很年輕，要在大量組合上執行：遊戲版本、載入器、Distant Horizons 與 Voxy 的版本、光影包、其他模組。並不是每種組合都已經試過。如果您在用它，請告訴我們執行得怎麼樣，好壞都行：每一份回報都很重要。',
    asks: [
      '您的 Minecraft 版本與載入器',
      'Distant Horizons 或 Voxy，以及它們的版本',
      '光影包，如果有的話（Photon、Complementary...）',
      '單人遊戲、區域網路還是伺服器，伺服器是否裝了模組',
      '一張您所看到畫面的螢幕截圖',
    ],
    report: '回報相容性',
    discord: '加入 Discord',
    issue: '提交 Issue',
    status: '測試狀態',
    waiting: (builds: number) =>
      p(builds, {
        other: '個建置仍在等待第一位測試者（共 {n} 個）',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, { other: '{n} 個建置已確認可用' })}，${waiting} 個待測試`,
    seen: '已確認可用',
    yours: '等您來測',
    wanted: '最需要測試',
    every: '每一套配置',
    everyRest: '都會帶來新發現',
    loading: '專案資料載入完成後，未測試的組合會顯示在這裡。',
  },

  contribute: {
    eyebrow: '參與貢獻',
    title: '和我們一起打造它。',
    accent: '歡迎使用 AI。',
    text: 'Living Horizon 只在一個地方開發：它的 GitHub 儲存庫。程式碼、修正和翻譯都以 Pull Request 的形式提交到那裡。',
    steps: {
      talk: {
        title: '先討論',
        text: '小修正以外的變更，請先開一個 Issue，在動手之前把方向談好。',
      },
      pr: {
        title: '提交 Pull Request',
        text: '在 feature/* 或 fix/* 分支上作業，目標分支為 develop。Commit 訊息用英文，遵循 Conventional Commits 規範。',
      },
      build: {
        title: '建置與測試',
        text: '一次 Gradle 建置就能編譯模組並執行測試。CI 也會在每個 Pull Request 上執行它。',
      },
      credit: {
        title: '獲得署名',
        text: '把自己加進 CREDITS.md；如果玩家看得到這項變更，再在更新日誌裡加一行。',
      },
    },
    aiTitle: '用 AI？儘管用。',
    aiText:
      'AI 是這個專案開發方式的一部分，您也可以用它來貢獻，完全沒問題。只是要持續思考它寫了什麼：提交 Pull Request 之前，先閱讀、理解並測試您的變更。',
    claude: {
      before: 'Claude 在這裡效果最好：它會自動讀取',
      between: '以及',
      after: '中的技能。',
    },
    terms: {
      before: '提交 Pull Request 即表示您接受',
      link: '授權條款',
      after: '第 3 節：您保有自己的著作權，而且無論日後發生什麼，您都會一直以貢獻者身分被署名。',
    },
    guide: '閱讀貢獻指南',
    issues: '待處理的 Issue',
  },

  changelog: {
    eyebrow: '最新動態',
    title: '頻繁發布，',
    accent: '快速修正。',
    text: '直接取自專案在 GitHub 上的更新日誌。',
    textEnglish: '直接取自專案在 GitHub 上的更新日誌（英文）。',
    latest: '最新',
    release: '版本',
    sides: { server: '伺服器端', client: '用戶端' },
    kinds: { new: '新增', improved: '改進', fixed: '修正' },
    more: (n: number) => p(n, { other: '再顯示 {n} 項變更' }),
    failed: '目前無法載入更新日誌。它一直都在 GitHub 上。',
    full: '在 GitHub 上查看完整更新日誌',
    releases: '所有版本',
  },

  faq: {
    eyebrow: '常見問題',
    title: '有疑問？',
    accent: '這裡有答案。',
    text: '玩家最常問的問題。還有其他問題，就到 Discord 上問吧。',
    groups: {
      how: '運作方式',
      compatibility: '相容性',
      performance: '效能與設定',
      multiplayer: '多人遊戲',
      downloads: '下載與授權條款',
      ai: 'AI',
    },
    questions: questions({
      visual: {
        q: '它只是視覺效果嗎？會影響生物農場嗎？',
        a: [
          [
            '只是視覺效果，沒有 AI。真正的生物和沒裝本模組時一樣運作，所以農場、生物生成和生物數量上限都不會改變。您無法攻擊遠處的生物。',
          ],
        ],
      },
      real: {
        q: '遠處的生物是真實的，還是隨機放置的？',
        a: [
          [
            '牠們是真實的生物，位在您的遊戲或伺服器最後一次看到牠們的地方。之後死亡或消失的生物，在您走近之前可能仍會顯示。走近之後，牠就會被遺忘。',
          ],
        ],
      },
      simulation: {
        q: '它和調高模擬距離或實體顯示距離有什麼不同？',
        a: [
          [
            '調高模擬距離會讓伺服器執行更多真實的生物，開銷很大，而且伺服器傳送生物的距離依然有限。Living Horizon 繪製的是伺服器不執行的副本。牠們播放現成的動畫，到了遠處會變成平面圖片（',
            { em: '簡化實體' },
            '）。',
          ],
        ],
      },
      range: {
        q: '它能顯示多遠的生物和玩家？',
        a: [
          [
            '生物：預設 512 格，透過',
            { em: '生物顯示距離' },
            '最高可設為',
            { em: '無限' },
            '。玩家：預設不限距離，可用',
            { em: '玩家顯示距離' },
            '加以限制。生物只有在您的遊戲或伺服器看過之後才會顯示。',
          ],
        ],
      },
      mods: {
        q: '它能和我的模組一起使用嗎？',
        a: [
          [
            '很有可能。Voxy、Distant Horizons、Sodium、Iris 和光影包都能與它搭配使用（見',
            { link: 'compatibilitySection', text: '相容性' },
            '）。Living Horizon 只加入它自己的形象，不會改變其他模組繪製世界的方式。尚未測試的模組列在 GitHub 的 ',
            { link: 'modCompatibility', text: 'mod compatibility' },
            ' 標籤下。如果出了問題，請提交一個 ',
            { link: 'issues', text: 'Issue' },
            '，寫明那個模組的名稱和版本。',
          ],
        ],
      },
      modMobs: {
        q: '其他模組的生物也會在遠處顯示嗎？',
        a: [
          [
            '會，只要牠們使用 Minecraft 本身的實體系統。如果某個模組的實體運作方式差異太大，可以提交 ',
            { link: 'issues', text: 'Issue' },
            ' 或到 ',
            { link: 'discord', text: 'Discord' },
            ' 上請求支援它。',
          ],
        ],
      },
      farTerrain: {
        q: '我需要 Voxy 或 Distant Horizons 嗎？',
        a: [
          [
            '不需要。沒有它們時，遠處的生物和玩家會顯示在遊戲本身的地形上，直到您的顯示距離為止。裝了其中之一後，牠們也會顯示在它的遠景地形上。',
          ],
        ],
      },
      frameRate: {
        q: '它會降低我的幀數嗎？',
        a: [
          [
            '繪製更多實體會消耗幀數。如果遊戲變慢，請保持',
            { em: '簡化實體' },
            '開啟，並選擇較低的',
            { em: '預設' },
            '。',
            { em: '最大生物數量' },
            '和',
            { em: '生物顯示距離' },
            '都設為',
            { em: '無限' },
            '時，遊戲可能會當機。',
          ],
        ],
      },
      choose: {
        q: '我能選擇要顯示哪些內容嗎？',
        a: [
          [
            '可以。',
            { em: '顯示生物' },
            '、',
            { em: '顯示玩家' },
            '、',
            { em: '離線玩家' },
            '和',
            { em: '顯示鳥類' },
            '分別開關各個部分。',
            { em: '生物與實體...' },
            '可以逐一選擇生物。',
          ],
        ],
      },
      world: {
        q: '它會修改我的世界或載入區塊嗎？',
        a: [
          [
            '不會。它不改動您世界裡的任何東西，也不載入任何區塊。它把記住的內容儲存在自己的檔案裡：',
            { code: 'config' },
            ' 資料夾中，以及世界資料夾裡的 ',
            { code: 'livinghorizon-positions.dat' },
            '（存放伺服器共享的內容）。移除本模組後，您的世界會保持原樣。',
          ],
          ['在伺服器上，本模組只向裝有它的玩家傳送位置。'],
        ],
      },
      server: {
        q: '伺服器需要安裝本模組嗎？',
        a: [
          [
            '不需要。幾乎所有功能在單人遊戲中都能使用，您也可以裝著它加入任何伺服器。但要看到任何距離的玩家，伺服器上需要裝本模組，這樣伺服器還會共享更多生物和已登出的玩家。見',
            { link: 'serversSection', text: '多人遊戲' },
            '。',
          ],
        ],
      },
      paper: {
        q: '它能在 Paper 或 Spigot 伺服器上使用嗎？',
        a: [
          [
            '您可以裝著本模組在這些伺服器上玩，就像在任何沒裝它的伺服器上一樣。伺服器端只能在 Fabric、Quilt、NeoForge 和 Forge 上執行，所以 Paper 或 Spigot 伺服器不會共享任何東西。Paper 外掛的討論見 ',
            { link: 'paperPlugin', text: '#156' },
            '。',
          ],
        ],
      },
      nothing: {
        q: '我看不到遠處的生物或玩家，為什麼？',
        a: [
          {
            list: [
              [
                '遠處的玩家需要伺服器裝有本模組。伺服器擁有者也可能限制了共享哪些人（見',
                { link: 'serverSettings', text: '伺服器設定' },
                '）。',
              ],
              ['在沒裝本模組的伺服器上，只會顯示您遇到過的生物。'],
            ],
          },
        ],
      },
      cheat: {
        q: '它能用來作弊嗎？伺服器允許使用嗎？',
        a: [
          [
            '它只在伺服器允許的地方顯示其他玩家。遠處的玩家只會出現在裝有本模組的伺服器上，而共享什麼由伺服器擁有者決定：多遠、是否只限隊友，以及哪些玩家和維度保持隱藏。',
            { code: '"sharePlayers": false' },
            ' 可以關閉共享（見',
            { link: 'serverSettings', text: '伺服器設定' },
            '）。隱形的玩家和處於旁觀模式的玩家永遠不會被共享。潛行的玩家目前仍會被共享（',
            { link: 'sneaking', text: '#269' },
            '）。',
          ],
          [
            '在其他伺服器上，您只能看到您自己的遊戲看到過的東西。本模組不會向伺服器傳送任何內容。不過每個伺服器對模組都有自己的規定：請詢問其管理人員。',
          ],
        ],
      },
      bedrock: {
        q: '有基岩版嗎？',
        a: [['沒有。Living Horizon 是 Minecraft Java 版的模組。']],
      },
      version: {
        q: '我的遊戲版本不受支援。以後會支援嗎？',
        a: [
          [
            '到 ',
            { link: 'discord', text: 'Discord' },
            ' 上說說您玩的是哪個版本和載入器。這有助於決定接下來做什麼。',
          ],
        ],
      },
      modpack: {
        q: '我能把它放進模組包嗎？',
        a: [['可以。請使用官方檔案，並註明出處。']],
      },
      abandoned: {
        q: '如果專案停止維護了怎麼辦？',
        a: [
          [
            '授權條款對此早有安排。一旦專案被宣布停止維護（儲存庫被封存，或 README 中如此聲明），其授權條款就會轉為 GPL：任何人都可以在註明出處的前提下繼續這個專案。見',
            { link: 'license', text: '授權條款' },
            '第 5 節。',
          ],
        ],
      },
      ai: {
        q: '它是用 AI 做的嗎？',
        a: [
          [
            '是的。我是 clixmods，它的作者：一名專精電子遊戲的全端開發者，這就是我的工作。我從 2017 年開始製作模組：例如《決勝時刻：黑色行動 III》的地圖 ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            '，在 Steam 工作坊上的下載次數超過一百萬（見我的',
            { link: 'portfolio', text: '作品集' },
            '）。這些想法和技術都來自遊戲開發：替身貼圖（impostor）、LOD 和現成的動畫，都是遊戲多年來一直在用的技巧。',
          ],
          [
            '大部分程式碼由 AI 撰寫。我決定模組如何運作，在遊戲中測試，並修正出問題的地方。如果沒有 AI，這麼大的專案會花掉我太多時間，我根本做不出來。',
          ],
        ],
      },
      modrinth: {
        q: '它在 Modrinth 上嗎？為什麼在那裡是未列出狀態？',
        a: [
          [
            '它在 ',
            { link: 'modrinth', text: 'Modrinth' },
            ' 上，但處於未列出狀態：它不會出現在 Modrinth 的搜尋結果中。自 2026 年 8 月起，',
            { link: 'modrinthRules', text: 'Modrinth 的規則' },
            '不允許主要由 AI 製作的專案公開，所以其管理人員將它設為了未列出。CurseForge、Nexus Mods 和',
            { link: 'releases', text: '發布頁面' },
            '上有相同的檔案。',
          ],
          ['未列出並不代表不安全。這關乎模組的製作方式，而不是它做了什麼：'],
          {
            list: [
              [
                '程式碼是公開的：任何人都可以在它的 ',
                { link: 'github', text: 'GitHub 儲存庫' },
                '中閱讀。',
              ],
              ['GitHub 根據這些程式碼建置每一個版本，建置記錄也是公開的。'],
              [
                '本模組沒有任何自己連上網路的程式碼。玩家外觀由遊戲從 Mojang 取得，Discord 連結也只有在您點擊時才會開啟。',
              ],
            ],
          },
        ],
      },
    }),
    ask: '在 Discord 上提問',
    issue: '提交 Issue',
  },

  download: {
    eyebrow: '下載',
    title: '取得',
    accent: 'Living Horizon',
    text: {
      before: '免費，每個遊戲版本與載入器各一個 jar，用戶端和伺服器通用。把它放進',
      after: '資料夾，地平線就活了過來。',
    },
    latest: '最新版本',
    version: 'Minecraft 版本',
    loader: '載入器',
    needs: { before: '· 需要', after: '' },
    untested: '此建置能在遊戲中啟動，但還沒有人回報它能在世界中正常繪製',
    jar: '下載 jar',
    releasePage: '從發布頁面取得',
    sameJar: '伺服器上用同一個 jar',
    curseforge: '或在 CurseForge 上取得',
    pick: '在發布頁面或 CurseForge 上選擇您的檔案。',
    total: '下載次數，所有平台',
    count: (n: number) => p(n, { other: '{n} 次下載' }),
    noCount: '無法取得下載次數',
    soon: '即將推出',
    checking: '檢查中…',
    everyFile: '所有檔案',
  },

  modpacks: {
    eyebrow: '模組包',
    title: '已收錄於',
    accent: '這些模組包。',
    /** Around the link to ModpackIndex. */
    text: {
      before: '根據',
      after:
        '的資料，以下模組包包含 Living Horizon。你也做了一個？ModpackIndex 收錄後它就會出現在這裡。',
    },
    by: (authors: string) => `作者：${authors}`,
    none: '還沒有模組包收錄 Living Horizon。你的可能是第一個。',
    loading: 'ModpackIndex 一有回應，模組包就會顯示在這裡。',
    browse: '在 ModpackIndex 上瀏覽',
    all: (n: number) => p(n, { other: '在 ModpackIndex 上查看全部 {n} 個模組包' }),
  },

  footer: {
    tagline: '讓遠方充滿生機。一款 Minecraft Java Edition 模組，適用於您的遊戲和您的伺服器。',
    beta: '測試版：難免有錯誤，遇到了請告訴我們。',
    project: '專案',
    docs: '說明文件',
    license: '授權條款',
    community: '社群',
    bug: '回報錯誤',
    contribute: '參與貢獻',
    official:
      '非官方 Minecraft 產品。未經 Mojang 或 Microsoft 核准，也與 Mojang 或 Microsoft 無關。',
  },
};
