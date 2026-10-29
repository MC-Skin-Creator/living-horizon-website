import { Messages } from './en';
import { plural } from './plural';
import { questions } from './rich';

const p = plural('ja');

export const ja: Messages = {
  meta: {
    title: 'Living Horizon：遠くに命を吹き込む',
    description:
      'Living Horizonは、Mob、村人、鳥、ほかのプレイヤーが、描画距離の先やDistant Horizons・Voxyの遠方の地形の上で、地平線まで生き続けるようにするMinecraft MODです。シングルプレイ、LAN、サーバーに対応。Fabric、Quilt、NeoForge、Forge。現在ベータ版です。',
  },

  language: {
    label: '言語',
  },

  common: {
    download: 'ダウンロード',
    becomeTester: 'テスターになる',
    needsTesters: 'テスター募集中',
    tested: 'テスト済み',
    seenWorking: 'ワールドでの動作を確認済み',
    new: '新機能',
    beta: 'ベータ版',
    changelog: '更新履歴',
    logo: (name: string) => `${name}のロゴ`,
  },

  nav: {
    label: 'メイン',
    tag: 'ベータ',
    menu: 'メニュー',
    features: '機能',
    mods: 'MOD',
    modpacks: 'Modパック',
    testers: 'テスター',
    faq: 'よくある質問',
    download: (version: string) => `v${version}をダウンロード`,
  },

  pages: {
    mods: {
      title: '対応MOD',
      description:
        'Living HorizonとほかのMinecraft MODとの互換性：遠景地形、シェーダー、パフォーマンス、生き物のMOD。動作するもの、既知の問題があるもの、テスター待ちのもの。',
    },
    modpacks: {
      title: 'Modパック',
      description:
        'Living Horizonを含むMinecraftのModパックと、CurseForgeやModrinthでのダウンロードリンク。',
    },
    changelog: { title: '更新履歴', description: 'Living Horizonの各バージョンとその変更点。' },
  },

  hero: {
    scene:
      'イラスト：ブロックの丘が連なる夕暮れの地平線。遠くでは村人、動物、ウマに乗った人、ほかのプレイヤーが今も生きていて、空をガンの群れが飛んでいます。',
    news: 'サーバーでも動作するようになりました',
    tagline: '遠くに',
    taglineAccent: '命を吹き込む。',
    lede: {
      before:
        '動物、村人、鳥、ほかのプレイヤーが、描画距離のはるか先の地平線で生き続けます。舞台は',
      between: 'や',
      after: 'の遠方の地形の上でも、バニラでも。シングルプレイ、LAN、サーバーで動作します。',
    },
    facts: 'プロジェクト概要',
    latest: '最新版',
    updated: '更新日',
    downloads: 'ダウンロード数',
    minecraft: 'Minecraft',
    loaders: 'ローダー',
  },

  concept: {
    eyebrow: 'できること',
    title: '描画距離は、そこで終わる。',
    accent: 'でも、世界は終わらない。',
    text: 'Minecraftは、数チャンク先でMobやプレイヤーの描画をやめてしまいます。遠方の地形を描くMODは大地を地平線まで広げますが、そこは空っぽで動きがありません。Living Horizonは、そこに命を取り戻します。',
    diagram:
      '図：Living HorizonなしではMobは描画距離の中にしか存在せず、遠方の地形は空っぽです。ありでは、Mob、プレイヤー、鳥が遠方の地形全体で地平線まで暮らしています。',
    you: 'あなた',
    renderDistance: '描画距離',
    farTerrain: '遠方の地形 ·',
    horizon: '地平線',
    without: { before: 'Living Horizon', mark: 'なし', after: '' },
    with: { before: 'Living Horizon', mark: 'あり', after: '' },
    empty: '空っぽ',
  },

  features: {
    eyebrow: '機能',
    title: '描画距離の先で生きる、',
    accent: 'すべてのもの。',
    text: 'Mob、プレイヤー、ログアウトしたプレイヤー、そして鳥。すべてあなたのゲーム自身が描画し、オンのままにしておけるほど軽く保たれています。',
    offline: '（オフライン）',
    near: '近く：完全なMob',
    far: '遠く：平面の画像',
    preset: 'プリセット',
    presets: ['低', '標準', '高', 'ウルトラ'],
    mobDistance: 'Mobの描画距離',
    items: {
      mobs: {
        title: 'すべてのMobを、地平線まで',
        text: '動物は草を食べ、村人は遠くの村を歩き回り、ゴーレムは見張りを続けます。ゲームが描画できるMobなら何でも、ほかのMODのMobも含めて表示します。',
        points: [
          'VoxyやDistant Horizonsの地形の上でも、バニラでも',
          '遠くの丘の裏に隠れます。シェーダーパックでも',
          '表示するMobは「Mobとエンティティ」で選べます',
        ],
        where: 'どこでも。MOD入りのサーバーなら、出会ったことのないMobまで。',
      },
      players: {
        title: 'どれだけ離れたプレイヤーも',
        text: 'ほかのプレイヤー全員が、マップのどこにいても見えます。スキン、防具、手に持ったアイテム、乗っているものまで。',
        points: [
          'ウマ、ボート、トロッコ、ハッピーガスト',
          'なめらか：サーバーが位置を1秒に5回共有します',
          'MODを入れていないプレイヤーも参加できます',
        ],
        where: 'LANと、MOD入りのサーバーで。',
      },
      offline: {
        title: 'ログアウトしたプレイヤーも暮らし続ける',
        text: '誰かがログアウトすると、その名前を持つ分身が去った場所に残ります。散歩し、座り、チェストを開け、夜は眠って、本人が戻ってくるのを待ちます。',
        points: [
          '名前の後ろに（オフライン）と、最後に見かけた日時',
          'あなたが参加する前に去ったプレイヤーも',
          '見た目だけ：あなたやMobの邪魔は決してしません',
        ],
        where: 'どこでも。MOD入りのサーバーなら、そこで遊んだことのあるすべてのプレイヤーが。',
      },
      birds: {
        title: '空を飛ぶ鳥たち',
        text: '小鳥の群れ、V字に並ぶガン、猛禽類、カモメ、カモ、コウモリが大地の上を飛び、遠くからでも見えます。',
        points: [
          '木、屋根、畑、浜辺に降り立ちます',
          'カモは池を泳ぎ回ります',
          '近くでは小さな3Dモデル、遠くでは平面の画像',
        ],
        where: 'どこでも。設定は不要です。',
      },
      light: {
        title: '軽さを保つ設計',
        text: '遠くのMobにAIはありません。地面に合わせた既成のアニメーションを再生するだけです。とても遠くでは、自分自身の平面の画像になります。',
        points: [
          '丘の裏に隠れたMobは描画されません',
          'シミュレーション距離を下げても、生きた世界のまま',
          '簡略化エンティティ：同じ負荷でずっと多くのMobを',
        ],
        where: 'すべてあなたのゲーム側で動きます。サーバーは位置を共有するだけです。',
      },
      settings: {
        title: '設定は、探す場所に',
        text: 'ゲームの設定画面、Mod Menu、Sodiumのビデオ設定、または /livinghorizon config から開けます。どの設定にも、何をするかの説明があります。',
        points: [
          '低・標準・高・ウルトラのプリセットで一度に設定',
          '14言語に対応',
          '「デフォルトに戻す」ですべて元通り',
        ],
        where: 'デフォルトがバランスの取れた設定です。',
      },
    },
  },

  compare: {
    eyebrow: 'ビフォー/アフター',
    title: '同じ景色。',
    accent: 'MODひとつで。',
    text: 'ハンドルをドラッグしてください。左は、遠方の地形はあっても空っぽ。右は、Living Horizonが命を取り戻した景色です。',
    tabs: 'シーン',
    shots: {
      shaders: {
        title: 'ゲーム内 · シェーダー',
        text: 'シェーダーパックあり、描画距離とシミュレーション距離は12：遠くの丘に動物たちが戻っています。',
      },
      vanilla: {
        title: 'ゲーム内 · バニラ',
        text: 'シェーダーなし、描画距離とシミュレーション距離は12：ウシとウマの群れが遠くの平原を埋めています。',
      },
    },
    scenes: {
      village: {
        title: '平原の村',
        text: '遠くの村の周りに、村人、ゴーレム、草を食べる動物たち。',
      },
      ridge: {
        title: '尾根を行く騎手',
        text: 'ほかのプレイヤーとそのウマが丘の上に。名札もそのままです。',
      },
      coast: {
        title: '真昼の海岸',
        text: '沖に浮かぶボート、遠くの岸の村人、海の上を飛ぶカモメ。',
      },
    },
    legendNear: '描画距離：どちらでも生きている',
    legendFar: '遠方の地形：MODなしでは空っぽ',
    note: {
      before:
        '効果を表したイラストです。最初のタブはゲーム内の実際のスクリーンショットです。いい一枚が撮れましたか？',
      link: 'Discordで共有してください',
      after: '。',
    },
    shotWithout: (text: string) => `Living Horizonなしのゲーム内スクリーンショット。${text}`,
    shotWith: (text: string) => `Living Horizonありのゲーム内スクリーンショット。${text}`,
    sceneWithout: (text: string) => `Living Horizonなし：${text}`,
    sceneWith: (text: string) => `Living Horizonあり：${text}`,
    badgeWithout: 'MODなし',
    badgeWith: 'Living Horizonあり',
    slider: '動かして、Living Horizonなしとありの景色を比べる',
  },

  servers: {
    eyebrow: 'マルチプレイ',
    title: 'サーバーに入れよう。',
    accent: '全員から全員が見える。',
    text: '同じjarがサーバーでも動きます。サーバーは、各プレイヤーの位置、その周りのMob、ログアウトしたプレイヤーを、MODを入れている全員と共有します。',
    cover: 'プレイヤーとMobの頭がずらりと並ぶ前に、Living Horizonのタイトル。',
    since: (version: string) => `サーバー対応：${version}から`,
    steps: {
      jar: {
        title: 'サーバーのmodsフォルダーにjarを入れる',
        text: 'ゲームと同じファイルを、サーバーのMinecraftバージョンとローダーに合わせて。FabricとQuiltではFabric APIも必要です。両側とも最新版にしておいてください。',
      },
      start: {
        title: 'サーバーを起動する',
        text: '設定は不要です。サーバーは共有する情報をワールドフォルダーに保存するので、再起動後も残ります。',
      },
      see: {
        title: 'MODを入れたプレイヤーには全員が見える',
        text: 'どれだけ離れたプレイヤーも、スキン、防具、騎乗動物と一緒に見え、その周りのMobも見えます。出会ったことのないMobまで。',
      },
    },
    matrixTitle: 'どこで遊ぶと、何が見えるか',
    matrixText:
      'シングルプレイではすべて動作します。サーバーでは、サーバー側のMODが残りを担います。',
    matrixLabel: 'プレイ環境ごとの機能',
    feature: '機能',
    places: ['シングルプレイ', 'LANワールド', 'MOD入りのサーバー', 'MODなしのサーバー'],
    rows: {
      mobs: '地平線のMob',
      players: '遠くのプレイヤー',
      offline: 'ログアウトしたプレイヤー',
      birds: '鳥',
    },
    cells: {
      mobsMet: '出会ったMobのみ',
      offlineEven: '参加前に去ったプレイヤーも',
      offlineSeen: '去るのを見たプレイヤーのみ',
    },
    yes: '対応',
    no: '非対応',
    noOthers: 'ほかのプレイヤーなし',
    notApplicable: '該当なし',
    notes: {
      lan: {
        title: 'LAN：インストール不要',
        text: 'LANに公開したワールドは、ホストのゲームを通じてすべてを共有します。',
      },
      join: {
        title: '誰でも参加できる',
        text: 'MODを入れていないプレイヤーも参加できます。サーバーはそのプレイヤーには何も送りません。',
      },
      tell: {
        title: 'プレイヤーに伝えよう',
        text: 'サーバーは、全プレイヤーの位置をMODを入れているプレイヤーと共有します。',
      },
      datapack: {
        title: 'データパックを使っていましたか？',
        text: 'ワールドのdatapacksフォルダーから削除してください：サーバー側のMODがその代わりになります。',
      },
    },
  },

  compatibility: {
    eyebrow: '互換性',
    title: '遠方の地形のために。',
    accent: 'なくても大丈夫。',
    text: 'Living HorizonはDistant HorizonsやVoxyを自動で見つけ、その地形の上にMobやプレイヤーを描画します。それらがなくても、描画距離の先で世界を生かし続けます。',
    works: '対応',
    cards: {
      dh: {
        text: 'Mobとプレイヤーが遠方の地形の上に描画され、その丘の裏に隠れます。Distant Horizons 2.3以降。',
        link: 'Distant Horizonsを入手',
      },
      voxy: {
        text: 'Voxyの地形の地平線が動き出します：草を食べる動物、遠くの村、移動するプレイヤー。',
        link: 'Voxyを入手',
      },
      vanilla: {
        title: 'バニラ',
        text: '遠方の地形のMODは不要です。描画距離とシミュレーション距離を低くしても、生きた世界が見えます。',
      },
    },
    extras: [
      'Irisのシェーダーパック（Photon、Complementary…）',
      'サーバーにも同じjar。MODなしのサーバーにも参加可能',
      'Sodiumのビデオ設定から設定可能（0.8以降）',
    ],
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: 'ほかのMODは？',
      text: (n: number) =>
        p(n, {
          other:
            '{n}個のMODを掲載中：シェーダー、パフォーマンス、生き物のMOD。動作するものと、まだテスターを待っているもの。',
        }),
      link: '対応MODを見る',
    },
    matrixTitle: 'Minecraftのバージョンとローダー',
    matrixText: 'ゲームバージョンとローダーごとにjarがひとつ。',
    builds: (builds: number, range: string) => p(builds, { other: `{n}ビルド（${range}）。` }),
    keyUntested: '起動確認済み、テスター募集中',
    table: '互換性表',
    untested: 'ゲームは起動しますが、ワールドでの描画はまだ確認されていません',
    noBuild: 'ビルドなし',
    notAvailable: '利用不可',
    fallback: (range: string) =>
      `Minecraft ${range}、Fabric、Quilt、NeoForge（1.20.6以降）、Forgeに対応。`,
    fullTable: 'GitHubで表全体を見る',
    loaders: {
      fabric: 'Fabric APIが必要です。Mod Menuは任意。',
      quilt: 'Fabric API（QFAPI）が必要です。',
      neoforge: 'Minecraft 1.20.6から。ほかには何も不要です。',
      forge: 'ほかには何も不要です。',
    },
  },

  performance: {
    eyebrow: 'パフォーマンス',
    title: '生きた地平線が、',
    accent: 'フレームを取り戻す。',
    design: {
      eyebrow: '最適化された描画',
      title: '生きた地平線でも、',
      accent: 'フレームは削らない。',
      text: 'Living Horizonは最初から軽さを保つように設計されています。遠くの姿は負荷の低い方法で、しかも見えるときだけ描画されます。だから描画距離とシミュレーション距離を下げても、世界を生かし続けられます。',
      cards: {
        pictures: {
          title: '遠くでは軽い画像',
          text: '一定の距離を超えると、遠くの姿は完全なモデルではなく、自分自身の平面の画像として描画されます。その大きさなら見た目は同じで、負荷はごくわずかです。',
        },
        hidden: {
          title: '隠れたものは省略',
          text: '遠方の地形の裏にいるMobはまったく描画されず、小さすぎたり遠すぎたりして気づけない姿はアニメーションを止めます。',
        },
        presets: {
          title: '品質プリセット',
          text: '低・標準・高・ウルトラで、Mobの数とその範囲、鳥をまとめて設定します。デフォルトがバランスの取れた設定です。',
        },
        server: {
          title: 'サーバーにも軽い',
          text: 'アニメーションはすべてプレイヤーのゲームで動きます。MOD入りのサーバーは位置を共有するだけです。',
        },
      },
    },
    numbers: '数字で見る',
    measured: 'プレイヤーと作者による計測です。環境は各数値の下に記載しています。',
    noNumbers: {
      before:
        '作り話の数字は載せません：実際のベンチマークが集まり次第、ここに追加されます。内蔵のデバッグパネル（',
      after: '）で、MOD自体の1ティックあたり・1フレームあたりの負荷を確認できます。',
    },
    slots: {
      fps: { label: 'FPSの向上', hint: 'ゲームの代わりにMODが遠くを描画' },
      mobs: { label: '地平線のMob', hint: '同時に描画' },
      distance: { label: 'カバーする距離', hint: '描画距離の先まで' },
      frame: { label: 'フレームの負荷', hint: 'デバッグパネルより' },
    },
    setups: {
      fps: '遠くの同じ景色で120 → 150 FPS：描画距離を短くしてその先のMobをLiving Horizonが描画した場合と、ゲーム自体がそこまで描画した場合の比較。作者による計測。',
    },
    pending: (hint: string) => `ベンチマーク待ち · ${hint}`,
    share: 'あなたの環境で計測しましたか？共有してください',
  },

  testers: {
    eyebrow: '現在ベータ版',
    title: '地平線に命を吹き込むお手伝いを。',
    lede: 'Living Horizonはまだ新しいMODで、ゲームバージョン、ローダー、Distant HorizonsやVoxyのバージョン、シェーダーパック、ほかのMODなど、たくさんの組み合わせで動きます。まだすべてが試されたわけではありません。プレイしたら、良くても悪くても、どう動いたか教えてください。どの報告も役に立ちます。',
    asks: [
      'Minecraftのバージョンとローダー',
      'Distant HorizonsまたはVoxyと、そのバージョン',
      'シェーダーパック（使っていれば。Photon、Complementary…）',
      'シングルプレイ、LAN、サーバー（MODの有無も）',
      '見えている景色のスクリーンショット',
    ],
    report: '互換性を報告',
    discord: 'Discordに参加',
    issue: 'Issueを作成',
    status: 'テスト状況',
    waiting: (builds: number) =>
      p(builds, {
        other: '/ {n}ビルドが、最初のテスターを待っています',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, { other: '{n}ビルドで動作確認済み' })}、${waiting}ビルドが待機中`,
    seen: '動作確認済み',
    yours: 'あなたを待っています',
    wanted: '特に募集中',
    every: 'どの',
    everyRest: '環境からも、新しい発見があります',
    loading: 'プロジェクトのデータが読み込まれると、未テストの組み合わせがここに表示されます。',
  },

  contribute: {
    eyebrow: '開発に参加',
    title: '一緒に作ろう。',
    accent: 'AIも歓迎。',
    text: 'Living Horizonは、GitHubリポジトリという一か所で作られています。コードも修正も翻訳も、すべてプルリクエストとしてそこに集まります。',
    steps: {
      talk: {
        title: 'まず相談',
        text: '小さな修正を超えるものは、作業の前にIssueを作って方向性をすり合わせてください。',
      },
      pr: {
        title: 'プルリクエストを作成',
        text: 'feature/* または fix/* ブランチで作業し、developに向けて出してください。コミットは英語で、Conventional Commits形式です。',
      },
      build: {
        title: 'ビルドとテスト',
        text: 'Gradleのビルドひとつで、MODのコンパイルとテストが行われます。CIもすべてのプルリクエストで実行します。',
      },
      credit: {
        title: 'クレジットに載る',
        text: 'CREDITS.mdに自分を追加し、プレイヤーに見える変更なら更新履歴にも一行加えてください。',
      },
    },
    aiTitle: 'AIを使う？どうぞ。',
    aiText:
      'AIはこのプロジェクトの作り方の一部で、貢献に使っても問題ありません。ただ、AIが書いたものについて考えるのはやめないでください：プルリクエストを作る前に、変更を読み、理解し、テストしてください。',
    claude: {
      before: 'ここではClaudeが一番うまく働きます：',
      between: 'と',
      after: 'のスキルを自分で読み込みます。',
    },
    terms: {
      before: 'プルリクエストを作成すると、',
      link: 'ライセンス',
      after:
        'の第3条に同意したことになります：著作権はあなたに残り、この先何があってもコントリビューターとしてクレジットされ続けます。',
    },
    guide: 'コントリビューションガイドを読む',
    issues: '未解決のIssue',
  },

  changelog: {
    eyebrow: '最新の更新',
    title: '頻繁にリリース、',
    accent: '素早く修正。',
    text: 'GitHubにあるプロジェクトの更新履歴から直接。',
    textEnglish: 'GitHubにあるプロジェクトの更新履歴から直接（英語）。',
    latest: '最新',
    release: 'リリース',
    sides: { server: 'サーバー', client: 'クライアント' },
    kinds: { new: '新機能', improved: '改善', fixed: '修正' },
    more: (n: number) => p(n, { other: 'さらに{n}件の変更を表示' }),
    failed: '更新履歴を読み込めませんでした。GitHubでいつでも見られます。',
    full: 'GitHubで更新履歴をすべて見る',
    releases: 'すべてのリリース',
    /** The link to the changelog page, on the home page. */
    every: 'すべてのバージョンを見る',
  },

  faq: {
    eyebrow: 'よくある質問',
    title: '気になることは？',
    accent: 'ここで答えます。',
    text: 'プレイヤーからよく寄せられる質問です。ほかに聞きたいことは、Discordでどうぞ。',
    groups: {
      how: '仕組み',
      compatibility: '互換性',
      performance: 'パフォーマンスと設定',
      multiplayer: 'マルチプレイ',
      downloads: 'ダウンロードとライセンス',
      ai: 'AI',
    },
    questions: questions({
      visual: {
        q: '見た目だけですか？Mobトラップは壊れませんか？',
        a: [
          [
            '見た目だけで、AIはありません。本物のMobはMODなしのときと同じように動くので、トラップ、スポーン、Mobの湧き上限は変わりません。遠くのMobを攻撃することはできません。',
          ],
        ],
      },
      real: {
        q: '遠くのMobは本物ですか？それともランダムに置かれていますか？',
        a: [
          [
            'あなたのゲームかサーバーが最後に見た場所にいる、本物のMobです。その後に死んだり消えたりしたMobも、近づくまでは表示されることがあります。近づくと忘れられます。',
          ],
        ],
      },
      simulation: {
        q: 'シミュレーション距離やエンティティ表示距離を上げるのと何が違いますか？',
        a: [
          [
            'シミュレーション距離を上げると、サーバーが動かす本物のMobが増えて負荷が大きくなるうえ、サーバーが送るのは結局ある距離までです。Living Horizonは、サーバーが動かさないコピーを描画します。コピーは既成のアニメーションを再生し、遠くでは平面の画像になります（',
            { em: '簡略化エンティティ' },
            '）。',
          ],
        ],
      },
      range: {
        q: 'Mobやプレイヤーはどこまで表示されますか？',
        a: [
          [
            'Mobはデフォルトで512ブロック先まで表示され、',
            { em: 'Mobの描画距離' },
            'で',
            { em: '無制限' },
            'まで広げられます。プレイヤーはデフォルトでどれだけ離れていても表示され、',
            { em: 'プレイヤーの描画距離' },
            'で制限できます。Mobが表示されるのは、あなたのゲームかサーバーが一度見てからです。',
          ],
        ],
      },
      mods: {
        q: '自分のMODでも動きますか？',
        a: [
          [
            'おそらく動きます。Voxy、Distant Horizons、Sodium、Iris、シェーダーパックに対応しています（',
            { link: 'compatibilitySection', text: '互換性' },
            'を参照）。Living Horizonが加えるのは自分で描く姿だけで、ほかのMODがワールドを描く方法は変えません。まだテストされていないMODは、GitHubの',
            { link: 'modCompatibility', text: 'mod compatibility' },
            'ラベルにまとめてあります。何か問題が起きたら、MODの名前とバージョンを書いて',
            { link: 'issues', text: 'Issue' },
            'を作成してください。',
          ],
        ],
      },
      modMobs: {
        q: 'ほかのMODのMobも遠くに表示されますか？',
        a: [
          [
            'はい。Minecraft自体のエンティティの仕組みを使っていれば表示されます。仕組みが違いすぎるMODのエンティティは、',
            { link: 'issues', text: 'Issue' },
            'か',
            { link: 'discord', text: 'Discord' },
            'で対応をリクエストしてください。',
          ],
        ],
      },
      farTerrain: {
        q: 'VoxyやDistant Horizonsは必要ですか？',
        a: [
          [
            'いいえ。なくても、遠くのMobやプレイヤーはゲーム自体の地形の上に、描画距離いっぱいまで表示されます。どちらかを入れれば、その遠方の地形の上にも表示されます。',
          ],
        ],
      },
      frameRate: {
        q: 'フレームレートは下がりますか？',
        a: [
          [
            '描画するエンティティが増えれば、フレームレートは下がります。ゲームが重くなったら、',
            { em: '簡略化エンティティ' },
            'をオンのままにして、低めの',
            { em: 'プリセット' },
            'を選んでください。',
            { em: '最大Mob数' },
            'と',
            { em: 'Mobの描画距離' },
            'を両方',
            { em: '無制限' },
            'にすると、ゲームがクラッシュすることがあります。',
          ],
        ],
      },
      choose: {
        q: '表示するものを選べますか？',
        a: [
          [
            'はい。',
            { em: 'Mobを表示' },
            '、',
            { em: 'プレイヤーを表示' },
            '、',
            { em: 'オフラインのプレイヤー' },
            '、',
            { em: '鳥を表示' },
            'で、それぞれをオン・オフできます。',
            { em: 'Mobとエンティティ…' },
            'では、Mobを1種類ずつ選べます。',
          ],
        ],
      },
      world: {
        q: 'ワールドを変更したり、チャンクを読み込んだりしますか？',
        a: [
          [
            'いいえ。ワールドは何も変更せず、チャンクも読み込みません。覚えた内容は専用のファイルに保存します：',
            { code: 'config' },
            'フォルダーと、サーバーが共有する分はワールドフォルダーの',
            { code: 'livinghorizon-positions.dat' },
            'です。MODを外しても、ワールドは元のままです。',
          ],
          ['サーバーでは、MODはそれを入れているプレイヤーにだけ位置を送ります。'],
        ],
      },
      server: {
        q: 'サーバーにもMODが必要ですか？',
        a: [
          [
            'いいえ。ほとんどの機能はシングルプレイで動き、MODを入れたままどのサーバーにも参加できます。ただし、どれだけ離れたプレイヤーも見るにはサーバー側にMODが必要で、その場合はサーバーがさらに多くのMobやログアウトしたプレイヤーも共有します。',
            { link: 'serversSection', text: 'マルチプレイ' },
            'を参照してください。',
          ],
        ],
      },
      paper: {
        q: 'PaperやSpigotのサーバーでも動きますか？',
        a: [
          [
            'MODのないサーバーと同じように、MODを入れたままプレイできます。サーバー側はFabric、Quilt、NeoForge、Forgeでしか動かないので、PaperやSpigotのサーバーは何も共有しません。Paper用プラグインについては',
            { link: 'paperPlugin', text: '#156' },
            'で話し合われています。',
          ],
        ],
      },
      nothing: {
        q: '遠くのMobやプレイヤーが見えません。なぜですか？',
        a: [
          {
            list: [
              [
                '遠くのプレイヤーを見るには、サーバーにMODが必要です。また、サーバーの管理者が共有する相手を制限していることもあります（',
                { link: 'serverSettings', text: 'サーバーの設定' },
                'を参照）。',
              ],
              ['MODのないサーバーでは、出会ったMobだけが表示されます。'],
            ],
          },
        ],
      },
      cheat: {
        q: 'チートに使えますか？サーバーで使ってもいいですか？',
        a: [
          [
            'ほかのプレイヤーを表示するのは、サーバーが許可している場合だけです。遠くのプレイヤーはMOD入りのサーバーでしか表示されず、何を共有するかはその管理者が決めます：距離、チームメイトだけにするか、どのプレイヤーやディメンションを隠すか。',
            { code: '"sharePlayers": false' },
            'で共有をオフにできます（',
            { link: 'serverSettings', text: 'サーバーの設定' },
            'を参照）。透明化したプレイヤーとスペクテイターモードのプレイヤーは決して共有されません。スニーク中のプレイヤーは、今のところ共有されます（',
            { link: 'sneaking', text: '#269' },
            '）。',
          ],
          [
            'ほかのサーバーでは、あなたのゲーム自身が見たものしか表示されません。MODはサーバーに何も送りません。ただし、MODに関するルールはサーバーごとに違うので、スタッフに確認してください。',
          ],
        ],
      },
      bedrock: {
        q: '統合版（Bedrock Edition）はありますか？',
        a: [['いいえ。Living HorizonはMinecraft Java Edition用のMODです。']],
      },
      version: {
        q: '自分のゲームバージョンに対応していません。今後対応しますか？',
        a: [
          [
            { link: 'discord', text: 'Discord' },
            'で、プレイしているバージョンとローダーを教えてください。次に何に対応するかを決める参考になります。',
          ],
        ],
      },
      modpack: {
        q: 'MODパックに入れてもいいですか？',
        a: [['はい。公式のファイルを使い、クレジットを記載してください。']],
      },
      abandoned: {
        q: 'プロジェクトが放棄されたらどうなりますか？',
        a: [
          [
            'ライセンスにその場合の取り決めがあります。プロジェクトが放棄されたと宣言されると（リポジトリがアーカイブされるか、READMEにそう書かれると）、ライセンスはGPLに変わり、クレジットを記載すれば誰でもプロジェクトを引き継げます。',
            { link: 'license', text: 'ライセンス' },
            'の第5条を参照してください。',
          ],
        ],
      },
      ai: {
        q: 'AIを使って作られていますか？',
        a: [
          [
            'はい。私はclixmods、このMODの作者です。ビデオゲームを専門とするフルスタック開発者で、これが私の仕事です。2017年からMODを作っていて、Call of Duty: Black Ops IIIのマップ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            'などは、Steamワークショップで100万回以上ダウンロードされています（',
            { link: 'portfolio', text: 'ポートフォリオ' },
            'をご覧ください）。アイデアと技術はゲーム開発から来ています：インポスター、LOD、既成のアニメーションは、ゲームが何年も前から使ってきた手法です。',
          ],
          [
            'コードの多くはAIが書いています。MODの仕組みを決め、ゲーム内でテストし、うまくいかないところを直すのは私です。AIがなければ、この規模のプロジェクトは時間がかかりすぎて、そもそも作れなかったでしょう。',
          ],
        ],
      },
      modrinth: {
        q: 'Modrinthにありますか？なぜ限定公開なのですか？',
        a: [
          [
            { link: 'modrinth', text: 'Modrinth' },
            'にありますが、限定公開です：Modrinthの検索には表示されません。2026年8月から、',
            { link: 'modrinthRules', text: 'Modrinthのルール' },
            'では主にAIで作られたプロジェクトを公開することが認められていないため、Modrinthのスタッフが限定公開にしました。CurseForge、Nexus Mods、',
            { link: 'releases', text: 'リリースページ' },
            'にも同じファイルがあります。',
          ],
          [
            '限定公開は、危険という意味ではありません。MODの作り方の問題であって、MODが何をするかの問題ではありません：',
          ],
          {
            list: [
              [
                'コードは公開されています：誰でも',
                { link: 'github', text: 'GitHubリポジトリ' },
                'で読めます。',
              ],
              [
                'GitHubがすべてのリリースをこのコードからビルドしており、そのビルドログも公開されています。',
              ],
              [
                'このMODには、インターネットに接続する独自のコードはありません。プレイヤーのスキンはゲームを通じてMojangから届き、Discordのリンクはクリックしたときにだけ開きます。',
              ],
            ],
          },
        ],
      },
    }),
    ask: 'Discordで質問',
    issue: 'Issueを作成',
  },

  download: {
    eyebrow: 'ダウンロード',
    title: 'Living Horizonを',
    accent: '手に入れよう',
    text: {
      before: '無料。ゲームバージョンとローダーごとにjarがひとつ、ゲームにもサーバーにも。',
      after: 'フォルダーに入れれば、地平線が動き出します。',
    },
    latest: '最新リリース',
    version: 'Minecraftのバージョン',
    loader: 'ローダー',
    needs: { before: '·', after: 'が必要' },
    untested: 'このビルドはゲーム内で起動しますが、ワールドでの描画の報告はまだありません',
    jar: 'jarをダウンロード',
    releasePage: 'リリースページから入手',
    sameJar: '同じjarをサーバーにも',
    curseforge: 'またはCurseForgeで入手',
    pick: 'リリースページかCurseForgeでファイルを選んでください。',
    total: 'ダウンロード数（全プラットフォーム）',
    count: (n: number) => p(n, { other: '{n}回ダウンロード' }),
    noCount: 'ダウンロード数は取得できません',
    soon: '近日公開',
    checking: '確認中…',
    everyFile: 'すべてのファイル',
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) => p(n, { other: '{n}件のModパック' }),
  },

  modpacks: {
    eyebrow: 'Modパック',
    title: 'すでに',
    accent: 'Modパックに収録。',
    text: 'Living Horizonを含むModパックです。あなたも作った？自動でここに表示されます。',
    by: (authors: string) => `作者: ${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `${platform}でダウンロード`,
    none: 'Living Horizonを含むModパックはまだありません。あなたのパックが最初になるかも。',
    loading: 'Modパックはまもなくここに表示されます。',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) => p(n, { other: 'Modパックを{n}件すべて見る' }),
  },

  mods: {
    eyebrow: '互換性',
    title: 'あなたのMODと',
    accent: 'うまく動く。',
    text: 'GitHubのプロジェクトから直接取得し、テストのたびに更新：動作するもの、既知の問題があるもの、まだ誰かが試すのを待っているもの。メモは英語です。',
    search: 'MODを検索',
    filter: 'ステータスで絞り込む',
    all: 'すべて',
    status: { works: '動作', issue: '既知の問題', untested: '未テスト' },
    /** The heading of the shader packs, after the mods. */
    shaders: 'シェーダーパック',
    /** The note of every mod still waiting for a tester, next to the link to its issue. */
    untested: 'どう動くかはまだ誰からも聞いていません。試しましたか？そのissueで教えてください。',
    issue: (n: number) => `Issue #${n}`,
    none: '検索に一致するMODはありません。',
    missing: {
      title: '載っていないMODがありますか？',
      text: 'Living Horizonと一緒にどう動くか、良くも悪くも教えてください。どの報告も助けになります。',
      link: 'MODを報告',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: '一覧を読み込めませんでした。GitHubでいつでも見られます。',
    failedLink: 'GitHubで一覧を見る',
  },

  footer: {
    tagline: '遠くに命を吹き込む。Minecraft Java Edition用のMODです。ゲームにも、サーバーにも。',
    beta: 'ベータ版：バグがあるかもしれません。見つけたら教えてください。',
    project: 'プロジェクト',
    docs: 'ドキュメント',
    license: 'ライセンス',
    community: 'コミュニティ',
    bug: 'バグを報告',
    contribute: '開発に参加',
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: 'Modパック一覧の提供:', after: '' },
    official:
      'Minecraftの公式製品ではありません。MojangまたはMicrosoftから承認されておらず、関連もありません。',
  },
};
