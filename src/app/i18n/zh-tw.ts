import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

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
    mods: '模組',
    modpacks: '模組包',
    faq: '常見問題',
    download: (version: string) => `下載 v${version}`,
  },

  pages: {
    mods: {
      title: '相容模組',
      description:
        'Living Horizon 與其他 Minecraft 模組的相容情況：遠景地形、光影、效能和生物模組。哪些可用，哪些有已知問題，哪些還在等人測試。',
    },
    modpacks: {
      title: '模組包',
      description:
        '收錄 Living Horizon 的 Minecraft 模組包，以及它們在 CurseForge 和 Modrinth 上的下載連結。',
    },
    changelog: { title: '更新日誌', description: 'Living Horizon 的每個版本及其變更。' },
  },

  hero: {
    scene:
      '插圖：黃昏時分，方塊山丘連到地平線，遠處的村民、動物、騎手和其他玩家依然在活動，一群大雁從空中飛過。',
    news: '新功能：無人探索之地也有獸群了',
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
    text: '生物、無人探索之地的獸群、玩家、已登出的玩家和鳥類，由您自己的遊戲繪製，而且夠輕量，可以一直開著。',
    offline: '（離線）',
    near: '近處：完整的生物',
    far: '遠處：一張平面圖片',
    more: '更多詳情',
    close: '關閉',
    previous: '上一項功能',
    next: '下一項功能',
    items: {
      mobs: {
        title: '每一隻生物，直到地平線',
        text: '動物在吃草，村民在遠方的村莊裡閒逛，魔像在站崗。遊戲能繪製的任何生物都可以，其他模組的生物和載具也不例外。',
        points: [
          '在 Voxy、Distant Horizons 和其他遠景地形上，或在原版中',
          '會被遠處的山丘遮擋，使用光影包時也一樣',
          '在「生物與實體」中選擇要顯示哪些',
        ],
        where: '任何地方。在裝有本模組的伺服器上，連您從未遇到過的生物也看得到。',
        details: details([
          {
            title: '牠們從哪裡來',
            body: [
              [
                '牠們是真實的生物，位在您的遊戲或伺服器最後一次看到牠們的地方。您的遊戲會記住遇到的每一隻生物，而裝有本模組的伺服器會共享每位玩家周圍的生物，所以您也看得到從未遇到過的獸群。之後死亡或消失的生物，在您走近之前可能仍會顯示。走近之後，牠就會被遺忘。',
              ],
            ],
          },
          {
            title: '在遠景地形上',
            body: [
              [
                '裝了 Voxy、Distant Horizons、Lodistance、Far View 或 Ecstatic，牠們會走在它的地面上，像被任何方塊擋住一樣躲在它的山丘後面，並漸漸隱沒在它的霧中。裝了 Bobby，牠們會留在它保存的地形上。這些模組都沒有時，牠們會顯示在遊戲本身的地形上。見',
                { link: 'compatibilitySection', text: '相容性' },
                '。',
              ],
            ],
          },
          {
            title: '走近後，由真正的生物接手',
            body: [
              [
                '您走近時，副本會走回最後一次看到該生物的位置，等伺服器傳來真正的生物後，就由牠取而代之。遠處的生物僅供觀賞：生物農場、生物生成和生物數量上限都和沒裝本模組時一樣運作，您也無法攻擊牠們。',
              ],
            ],
          },
          {
            title: '其他模組的生物',
            body: [
              [
                '任何使用 Minecraft 本身實體系統的東西都會在遠處顯示：模組生物，以及載具，例如 Immersive Aircraft 的飛機或 Shippy Ships 的船，就停在您離開它們的地方。',
              ],
            ],
          },
          {
            title: '設定',
            body: [
              {
                list: [
                  [{ em: '顯示生物' }, '和', { em: '顯示實體' }, '：開啟或關閉。'],
                  [{ em: '生物與實體...' }, '：逐一選擇生物。'],
                  [
                    { em: '生物顯示距離' },
                    '和',
                    { em: '最大生物數量' },
                    '：顯示多遠，同時顯示多少。',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      unexplored: {
        title: '無人探索之地的獸群',
        text: '您從未去過的土地上也有動物。本模組根據世界種子碼推算出遊戲會在那裡放置哪些動物，以及放在哪裡。',
        points: [
          '與遊戲為每個新區塊進行的隨機抽選完全相同',
          '用望遠鏡看，瞄多遠就看得到多遠',
          '推測附近生物：最多涵蓋您周圍 1024 個區塊',
        ],
        where: '在單人遊戲中，以及裝有本模組的伺服器上。',
        details: details([
          {
            title: '如何推測',
            body: [
              [
                '遊戲生成一個區塊時，會根據世界種子碼和區塊位置進行隨機抽選，放置最初的動物。Living Horizon 對尚未生成的區塊進行同樣的抽選，並使用世界生成器給出的生態域和地形：平原上的馬、山丘上的羊，大致就在遊戲會放置牠們的地方。',
              ],
            ],
          },
          {
            title: '只是推測，不是保證',
            body: [
              [
                '它讀取的地形上還沒有草，也沒有樹。如果遊戲因此否決了某個位置，那裡的獸群就會缺少或出現在別處：推測出的動物中，大約一半與真實動物相距不到兩格。您抵達時，推測的生物可能並不在那裡。',
              ],
            ],
          },
          {
            title: '望遠鏡與推測附近生物',
            body: [
              [
                '透過望遠鏡觀看，無論多遠，瞄準的地方都會顯示推測的生物。',
                { em: '推測附近生物' },
                '會一次顯示您周圍最多 1024 個區塊內的推測生物，並為您之後的遊玩保留下來。',
              ],
            ],
          },
          {
            title: '在伺服器上',
            body: [
              [
                '伺服器會在每位裝有本模組的玩家周圍推測牠們，預設範圍為 512 格（',
                { code: 'seedMobRange' },
                '，最高 2048）。望遠鏡和',
                { em: '推測附近生物' },
                '需要世界種子碼：只有伺服器擁有者開啟 ',
                { code: 'shareSeed' },
                ' 後，伺服器才會共享種子碼，因為拿到種子碼的人就知道整個世界（見',
                { link: 'serverSettings', text: '伺服器設定' },
                '）。',
              ],
            ],
          },
          {
            title: '設定',
            body: [
              {
                list: [
                  [{ em: '推測的生物' }, '：顯示或隱藏牠們。'],
                  [{ em: '推測半徑' }, '：', { em: '推測附近生物' }, '的涵蓋範圍。'],
                ],
              },
            ],
          },
        ]),
      },
      players: {
        title: '任何距離的玩家',
        text: '看到其他每一位玩家，無論他們在地圖上的哪裡，連同他們的外觀、盔甲、手持物品和騎乘的東西。',
        points: [
          '馬、船、礦車、鞘翅和快樂幽靈',
          '流暢：伺服器每秒共享五次位置',
          '沒裝本模組的玩家照樣可以加入',
        ],
        where: '在區域網路中，以及裝有本模組的伺服器上。',
        details: details([
          {
            title: '運作方式',
            body: [
              [
                '裝有本模組的伺服器每秒五次共享每位玩家的位置，包括他們騎乘的東西，以及是否正用鞘翅滑翔。每隔五秒，它還會附上距離最近的玩家的樣子：外觀、盔甲和手持物品。您的遊戲會在視野距離之外繪製他們，名牌和坐騎也一併顯示。',
              ],
            ],
          },
          {
            title: '由伺服器擁有者決定',
            body: [
              [
                '伺服器第一次啟動時會寫入 ',
                { code: 'config/livinghorizon-server.json' },
                '：玩家共享多遠、是否只與隊友共享、哪些玩家和維度保持隱藏。',
                { code: '"sharePlayers": false' },
                ' 可以關閉共享。變更幾秒後就會生效，不需要重新啟動（見',
                { link: 'serverSettings', text: '伺服器設定' },
                '）。',
              ],
            ],
          },
          {
            title: '永遠不會共享',
            body: [
              [
                '處於旁觀模式的玩家和隱形的玩家。潛行的玩家目前仍會被共享（',
                { link: 'sneaking', text: '#269' },
                '）。在視野距離之內，玩家照常看得到彼此。',
              ],
            ],
          },
          {
            title: '設定',
            body: [
              {
                list: [
                  [{ em: '顯示玩家' }, '：開啟或關閉。'],
                  [{ em: '玩家顯示距離' }, '：顯示多遠。'],
                  [{ em: '坐騎與載具' }, '：他們騎乘的東西。'],
                ],
              },
            ],
          },
        ]),
      },
      offline: {
        title: '登出的玩家繼續生活',
        text: '有人登出時，一個帶著他名字的分身會留在他離開的地方。它會散步、坐下、釣魚、打開儲物箱，夜裡上床睡覺，直到本人回來。',
        points: [
          '名字後面顯示（離線），以及最後上線時間',
          '連您加入之前就離開的玩家也在',
          '僅供觀賞：走過去就能把他們推開',
        ],
        where: '任何地方。在裝有本模組的伺服器上，每一位曾在那裡玩過的玩家都在。',
        details: details([
          {
            title: '他們的一天',
            body: [
              {
                list: [
                  ['白天，他們會散步、坐下，或站在儲物箱、工作台或工作站方塊前。'],
                  ['夜裡，他們會走到一張空床上睡覺，或者一直站著。'],
                  ['在水邊，其中一人會在岸邊停下來，釣一會兒魚。'],
                  ['下雨時，有些人會走到屋簷或樹下，等雨停。'],
                  ['傍晚，他們會聚在營火或熔爐前。'],
                  ['兩個人離得近時，會走到一起，面對面聊天。'],
                ],
              },
            ],
          },
          {
            title: '他們會注意到您',
            body: [
              [
                '在近處看著其中一人，他也會回看您。您在他面前蹲下，他也會跟著蹲下。怪物靠近時，他們會拔劍舉盾，但從不戰鬥。',
              ],
            ],
          },
          {
            title: '僅供觀賞',
            body: [
              [
                '世界並不知道他們存在：生物會無視他們，他們也從不擋住或推開您。走過去就能把他們推開。離您遠的時候，他們會在原地繼續閒逛。',
              ],
            ],
          },
          {
            title: '他們從哪裡來',
            body: [
              [
                '您的遊戲會記住它看著離開的玩家。裝有本模組的伺服器會共享每一位曾在那裡玩過的玩家，保持他們當時的模樣，連您加入之前就離開的玩家也在。',
              ],
            ],
          },
          {
            title: '設定',
            body: [
              {
                list: [
                  [
                    { em: '離線玩家' },
                    '和',
                    { em: '最大離線玩家數' },
                    '：是否顯示，以及顯示多少。',
                  ],
                  [{ em: '離線玩家活動' }, '：他們在自己位置周圍的生活。'],
                  [{ em: '活動半徑' }, '：他們走動的範圍，預設 50 格。'],
                ],
              },
            ],
          },
        ]),
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
        details: details([
          {
            title: '誰在哪裡飛',
            body: [
              {
                list: [
                  ['鳥群飛越天空，大雁排成 V 字飛行，猛禽在空中盤旋。'],
                  ['海鷗沿著海岸飛，不時停在海灘上。'],
                  ['鴿子停在高樓上，知更鳥在田裡跳來跳去，山雀待在樹上。'],
                  ['鴨子在湖泊和河流上游泳。蝙蝠在夜裡出來。'],
                ],
              },
            ],
          },
          {
            title: '牠們會對您做出反應',
            body: [
              [
                '您靠近時，小鳥會飛走，停在稍遠的地方。鴨子從不讓您靠近。離開的鳥從不會一下子消失：牠們會四散飛開，漸漸變小遠去。',
              ],
            ],
          },
          {
            title: '依地形而定',
            body: [
              [
                '每種鳥去哪裡，都依地形來判斷，一直延伸到 Voxy 和 Distant Horizons 的遠景地形：知更鳥找農作物，山雀找樹葉，鴨子找水，海鷗找海灘。牠們只是您遊戲裡的圖像：世界中不會生成任何東西。',
              ],
            ],
          },
          {
            title: '設定',
            body: [
              {
                list: [
                  [{ em: '顯示鳥類' }, '：開啟或關閉。'],
                  [{ em: '鳥類種類...' }, '：逐一選擇種類。'],
                  [{ em: '鳥類密度' }, '和', { em: '鳥類距離' }, '：數量多少，距離多遠。'],
                ],
              },
            ],
          },
        ]),
      },
      light: {
        title: '專為輕量而設計',
        text: '遠處的生物沒有 AI：牠們播放貼合地面的現成動畫。到了非常遠的地方，牠們會變成自己的平面圖片。',
        points: [
          '被山丘擋住的生物不會被繪製',
          '調低模擬距離，世界依然生氣蓬勃',
          '簡化生物：同樣的開銷，多得多的生物',
        ],
        where: '一切都在您的遊戲裡執行。伺服器只共享位置。',
        details: details([
          {
            title: '遠處沒有 AI',
            body: [
              [
                '遠處的生物靠貼合周圍地面的現成動畫來走動、吃草和四處張望。已登出的玩家和鳥類只有在您附近時才會自主行動。',
              ],
            ],
          },
          {
            title: '遠處用平面圖片',
            body: [
              [
                '許多遊戲會把遠處的物體繪製成替身貼圖（impostor）：用一張平面圖片代替 3D 模型。Living Horizon 對遠處的生物、載具和玩家也是這麼做的（',
                { em: '簡化生物' },
                '、',
                { em: '簡化實體' },
                '、',
                { em: '簡化玩家' },
                '）。在那個大小下看起來一模一樣，開銷卻只有一小部分。搭配能讀取法線貼圖的光影包（例如 Photon）時，這些圖片會由光影包來打光（',
                { em: '光影照明' },
                '）。',
              ],
            ],
          },
          {
            title: '看不見就略過',
            body: [['山丘或遠景地形後面的生物完全不繪製；形體一旦小到察覺不到，動畫就會停止。']],
          },
          {
            title: '一切都在您的遊戲裡',
            body: [
              [
                '動畫、已登出的玩家和鳥類都由您的遊戲處理。裝有本模組的伺服器只共享位置，所以負擔很小。兩位玩家甚至可能看到同一隻遠處的生物在做不同的事。',
              ],
            ],
          },
          {
            title: '預設與設定',
            body: [
              [
                { em: '預設' },
                '（',
                { em: '低' },
                '、',
                { em: '普通' },
                '、',
                { em: '高' },
                '、',
                { em: '極高' },
                '）一次調好所有設定。預設值就是最均衡的選擇，',
                { em: '重設為預設值' },
                '可以讓它們恢復原狀。設定位於「選項」畫面、Mod Menu、Sodium 的顯示設定中，也可以使用 ',
                { code: '/livinghorizon config' },
                '，支援 14 種語言。',
              ],
              [
                '注意：',
                { em: '最大生物數量' },
                '和',
                { em: '生物顯示距離' },
                '都設為',
                { em: '無限' },
                '時，遊戲可能會當機。',
              ],
            ],
          },
        ]),
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
    matrixTitle: '在哪裡玩，看得到什麼',
    matrixText: '單人遊戲中所有功能都能使用。在伺服器上，其餘的由伺服器上的模組完成。',
    matrixLabel: '依遊玩方式區分的功能',
    feature: '功能',
    places: ['單人遊戲', '區域網路世界', '裝有模組的伺服器', '未裝模組的伺服器'],
    rows: {
      mobs: '地平線上的生物',
      players: '任何距離的玩家',
      offline: '已登出的玩家',
      unexplored: '無人探索之地的獸群',
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
      install: {
        title: '把 jar 放進伺服器的 mods 資料夾',
        text: '和您遊戲裡用的是同一個檔案；在 Fabric 與 Quilt 上還需要 Fabric API。不需要任何設定。',
      },
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
    },
  },

  compatibility: {
    eyebrow: '相容性',
    title: 'Distant Horizons、Voxy、Ecstatic…',
    accent: '或什麼都不裝。',
    text: 'Living Horizon 會自動偵測您的遠景地形模組：生物和玩家走在它的地面上，躲在它的山丘後面，漸漸隱沒在它的霧中。沒有遠景地形模組時，它也能讓顯示距離之外的世界保持生機。',
    cards: {
      dh: { text: '2.3 或更新版本。生物和玩家顯示在它的地形上，會被它的山丘遮擋。' },
      voxy: { text: '生物和玩家顯示在它的地形上，使用光影包時也一樣。' },
      lodistance: { text: 'Fabric，Minecraft 26.3，需使用 OpenGL，且不開光影。' },
      farView: { text: 'Forge 與 NeoForge，Minecraft 1.20.1 至 1.21.4。生物顯示在它的地形上。' },
      ecstatic: { text: 'NeoForge，Minecraft 1.21.1，單人遊戲。生物顯示在它的地形上。' },
      bobby: { text: '生物和玩家顯示在它保存的、超出伺服器視野距離的地形上。' },
      iris: { text: '光影包可以正常使用，例如 Photon 和 Complementary Unbound。' },
      vanilla: {
        title: '原版',
        text: '不需要遠景地形模組：調低顯示距離與模擬距離，依然看得到生氣蓬勃的世界。',
      },
    },
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: '你的其他模組呢？',
      text: (n: number) =>
        p(n, { other: '已列出 {n} 個模組：光影、效能、生物模組。哪些可用，哪些還在等人測試。' }),
      link: '查看相容模組',
    },
    matrixTitle: 'Minecraft 版本與載入器',
    matrixText: '每個遊戲版本與載入器各一個 jar。',
    report: '試過其中一個？回報一下',
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

  help: {
    eyebrow: '一起參與',
    title: '一個測試版，',
    accent: '與玩家一起打造。',
    test: {
      title: '在您的配置上測試',
      text: '告訴我們它在您的遊戲版本、載入器和模組上執行得怎麼樣，好壞都行。每一份回報都有幫助。',
      untested: (n: number) => p(n, { other: '{n} 個建置仍在等待第一位測試者' }),
      report: '回報相容性',
    },
    code: {
      title: '參與貢獻',
      text: '程式碼、修正和翻譯都以 Pull Request 的形式提交到 GitHub。歡迎使用 AI，只要您閱讀、理解並測試它寫的內容。',
      guide: '貢獻指南',
    },
    discord: {
      title: '加入 Discord',
      text: '提問、最新消息、螢幕截圖和協助，與作者及其他玩家一起交流。',
      join: '加入 Discord',
    },
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
    /** The link to the changelog page, on the home page. */
    every: '查看所有版本',
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
            '。玩家、船和載具：預設不限距離，可用',
            { em: '玩家顯示距離' },
            '和',
            { em: '實體顯示距離' },
            '加以限制。生物只有在您的遊戲或伺服器看過之後才會顯示。',
          ],
        ],
      },
      mods: {
        q: '它能和我的模組一起使用嗎？',
        a: [
          [
            '很有可能。Voxy、Distant Horizons、Lodistance、Ecstatic、Bobby、Sodium、Iris 和光影包都能與它搭配使用（見',
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
        q: '我需要 Voxy、Distant Horizons、Lodistance 或 Ecstatic 嗎？',
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
            { em: '簡化生物' },
            '和',
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
            '是的，有一部分是。大部分程式碼由 AI 撰寫。作者 clixmods 決定模組如何運作，在遊戲中測試每一項變更，並修正出問題的地方。如果沒有 AI，這麼大的專案根本不會存在。',
          ],
          [
            '這些想法來自遊戲開發，而這正是 clixmods 的本業：替身貼圖（impostor）、LOD 和現成的動畫，都是遊戲多年來一直在用的技巧。clixmods 從 2017 年開始製作模組，例如《決勝時刻：黑色行動 III》的地圖 ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            '，在 Steam 工作坊上的下載次數超過一百萬（見',
            { link: 'portfolio', text: '作品集' },
            '）。',
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
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) => p(n, { other: '{n} 個模組包' }),
  },

  modpacks: {
    eyebrow: '模組包',
    title: '已收錄於',
    accent: '這些模組包。',
    text: '以下模組包包含 Living Horizon。你也做了一個？它會自動出現在這裡。',
    by: (authors: string) => `作者：${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `在 ${platform} 下載`,
    none: '還沒有模組包收錄 Living Horizon。你的可能是第一個。',
    loading: '模組包馬上就會顯示在這裡。',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) => p(n, { other: '查看全部 {n} 個模組包' }),
  },

  mods: {
    eyebrow: '相容性',
    title: '與你的模組',
    accent: '和睦相處。',
    text: '直接取自 GitHub 上的專案，隨測試更新：哪些可用，哪些有已知問題，哪些還在等人試一試。說明為英文。',
    search: '搜尋模組',
    filter: '依狀態篩選',
    all: '全部',
    status: { works: '可用', issue: '已知問題', untested: '尚未測試' },
    /** The heading of the shader packs, after the mods. */
    shaders: '光影包',
    /** The note of every mod still waiting for a tester, next to the link to its issue. */
    untested: '還沒有人告訴我們它執行得怎麼樣。試過了嗎？在它的 issue 裡告訴我們。',
    issue: (n: number) => `Issue #${n}`,
    none: '沒有符合搜尋的模組。',
    missing: {
      title: '清單裡少了某個模組？',
      text: '告訴我們 Living Horizon 和它一起執行得如何，好壞都行：每份回報都有幫助。',
      link: '回報模組',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: '清單暫時無法載入。它一直都在 GitHub 上。',
    failedLink: '在 GitHub 上查看清單',
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
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: '模組包列表來自', after: '' },
    official:
      '非官方 Minecraft 產品。未經 Mojang 或 Microsoft 核准，也與 Mojang 或 Microsoft 無關。',
  },
};
