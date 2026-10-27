import { Messages } from './en';
import { plural } from './plural';

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
    compatibility: '互換性',
    testers: 'テスター',
    contribute: '開発に参加',
    download: (version: string) => `v${version}をダウンロード`,
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
    official:
      'Minecraftの公式製品ではありません。MojangまたはMicrosoftから承認されておらず、関連もありません。',
  },
};
