import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

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
    news: 'Lodistance、Far View、Ecstaticの地形にも対応',
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
    more: '詳しく見る',
    less: '詳細を閉じる',
    items: {
      mobs: {
        title: 'すべてのMobを、地平線まで',
        text: '遠くの丘では動物が草を食べ、遠くの村では村人が歩き回り、ゴーレムが見張りを続けます。ゲームが描画できるMobなら、ほかのMODのMobも含めてすべて表示します。',
        points: [
          'Voxy、Distant Horizonsなどの遠方の地形でも、バニラでも',
          'まだ誰も探索していない土地にも',
          '遠くの丘の裏に隠れます。シェーダーパックでも',
        ],
        where: 'どこでも。MOD入りのサーバーなら、出会ったことのないMobまで。',
        details: details([
          {
            title: '見かけた場所にいる、本物のMob',
            body: [
              [
                '遠くのMobはどれも本物で、あなたのゲームかサーバーが最後に見た場所に表示されます。近づくと、本物のMobが自然に入れ替わります。遠くのMobは見た目だけです：攻撃はできず、トラップやスポーンはMODなしのときと同じように働きます。',
              ],
            ],
          },
          {
            title: '遠方の地形になじむ',
            body: [
              [
                'Voxy、Distant Horizons、Lodistance、Far View、Ecstaticがあれば、遠くのMobはその地面を歩き、その丘の裏に隠れ、その霧の中に消えていきます。遠方の地形のMODがなくても、描画距離の先で、ゲーム自体の地形の上に表示されます（',
                { link: 'compatibilitySection', text: '互換性' },
                'を参照）。',
              ],
            ],
          },
          {
            title: '誰も行ったことのない場所にも',
            body: [
              [
                '一度も訪れたことのない土地にも、動物の群れがいます。Living Horizonはワールドのシード値から推測するので、着いたときには違っていたり、いなくなっていたりすることがあります。望遠鏡をのぞけば、狙った先まで見えます。',
              ],
            ],
          },
          {
            title: 'MOD入りのサーバーでは',
            body: [
              [
                'ほかのプレイヤー全員の周りのMobも見えます。出会ったことのない群れまで。推測したMobをもっと遠くまで表示するために、サーバーの管理者はワールドのシード値を共有できます。シード値からワールド全体がわかってしまうため、これはデフォルトでオフです（',
                { link: 'serverSettings', text: 'サーバーの設定' },
                'を参照）。',
              ],
            ],
          },
          {
            title: '設定では',
            body: [
              [
                '表示するMobは',
                { em: 'Mobとエンティティ…' },
                'で選べます。推測したMobは',
                { em: '推測したMob' },
                'で非表示にできます。',
              ],
            ],
          },
        ]),
      },

      players: {
        title: 'どれだけ離れたプレイヤーも',
        text: 'ほかのプレイヤー全員が、マップのどこにいても見えます。スキン、装備、乗っているものまで。',
        points: [
          'ウマに乗っていても、ボートでも、エリトラで滑空中でも',
          '遠くでも、なめらかに動きます',
          'MODを入れていないプレイヤーも参加できます',
        ],
        where: 'LANと、MOD入りのサーバーで。',
        details: details([
          {
            title: '全員を、どこにいても',
            body: [
              [
                'MOD入りのサーバーでは、ほかのプレイヤー全員が、どこにいても見えます。乗っているものと一緒になめらかに動き、名札も表示されます。LANに公開したワールドなら、何もインストールしなくても使えます。',
              ],
            ],
          },
          {
            title: '決めるのはサーバーの管理者',
            body: [
              [
                '管理者は、プレイヤーをどこまで表示するか、チームメイト同士だけに見せるか、どのプレイヤーやディメンションを隠すかを選べます。遠くのプレイヤーの表示を完全にオフにすることもできます（',
                { link: 'serverSettings', text: 'サーバーの設定' },
                'を参照）。',
              ],
            ],
          },
          {
            title: '表示されないプレイヤー',
            body: [
              [
                'スペクテイターモードのプレイヤーと透明化したプレイヤーは、遠くに表示されることはありません。スニーク中のプレイヤーは、今のところ表示されます（',
                { link: 'sneaking', text: '#269' },
                '）。',
              ],
            ],
          },
          {
            title: '設定では',
            body: [
              [
                { em: 'プレイヤーの描画距離' },
                'でプレイヤーを表示する距離を決め、',
                { em: 'プレイヤーを表示' },
                'でオフにできます。',
              ],
            ],
          },
        ]),
      },
      offline: {
        title: 'ログアウトしたプレイヤーも暮らし続ける',
        text: '誰かがログアウトすると、その分身が去った場所に残ります。散歩し、座り、釣りをし、夜は眠って、本人が戻るのを待ちます。',
        points: [
          '名前に（オフライン）と、最後に見かけた日時',
          'あなたが参加する前に去ったプレイヤーも',
          '見た目だけ：歩いてぶつかれば押しのけられます',
        ],
        where: 'どこでも。MOD入りのサーバーなら、そこで遊んだことのあるすべてのプレイヤーが。',
        details: details([
          {
            title: '分身たちの暮らし',
            body: [
              [
                '昼は散歩したり、座ったり、チェストの前で作業したりします。夜はベッドで眠ります。水辺で釣りをし、雨が降れば雨宿りをし、夕方には焚き火を囲み、ふたりでおしゃべりもします。',
              ],
            ],
          },
          {
            title: 'あなたに気づく',
            body: [
              [
                '近くから見つめると、見つめ返してきます。スニークすると、相手もスニークします。モンスターが近づくと盾を構えますが、決して戦いません。',
              ],
            ],
          },
          {
            title: '見た目だけ',
            body: [
              [
                'ワールドは分身の存在を知りません：Mobは分身を無視し、分身があなたの行く手をふさぐこともありません。歩いてぶつかれば押しのけられます。',
              ],
            ],
          },
          {
            title: 'MOD入りのサーバーでは',
            body: [
              [
                'そこで遊んだことのあるすべてのプレイヤーが、そのときの姿で見えます。あなたが参加する前に去ったプレイヤーも。それ以外の場所では、去るところを見たプレイヤーが見えます。',
              ],
            ],
          },
          {
            title: '設定では',
            body: [
              [
                { em: 'オフラインのプレイヤー' },
                'で表示・非表示を切り替え、',
                { em: 'オフライン時の活動' },
                'で自分の場所の周りでの暮らしをオン・オフできます。',
              ],
            ],
          },
        ]),
      },
      birds: {
        title: '空を飛ぶ鳥たち',
        text: '小鳥の群れ、V字に並ぶガン、猛禽類、カモメ、カモが空を彩り、遠くからでも見えます。',
        points: [
          '木、屋根、畑、浜辺に降り立ちます',
          'カモは池や川を泳ぎます',
          'ワールドには何も追加されません',
        ],
        where: 'どこでも。設定は不要です。',
        details: details([
          {
            title: 'いろいろな鳥たち',
            body: [
              [
                'V字に飛ぶガンから池のカモまで、どの鳥もそれぞれの居場所で暮らします：木の上、海岸の空、屋根の上、畑。夜にはコウモリが出てきます。',
              ],
            ],
          },
          {
            title: 'あなたに反応する',
            body: [
              [
                '近づくと飛び立ち、少し先に降ります。一瞬で消えることはなく、散らばりながら飛び去っていきます。',
              ],
            ],
          },
          {
            title: 'あなたの画面の中だけ',
            body: [
              [
                '鳥はあなたのゲームだけが描画します：ワールドには何も追加されず、負荷もごくわずかです。',
              ],
            ],
          },
          {
            title: '設定では',
            body: [
              [
                { em: '鳥を表示' },
                'でオン・オフを切り替え、',
                { em: '鳥の種類…' },
                'で飛ばす種類を選べます。',
              ],
            ],
          },
        ]),
      },
      light: {
        title: '軽さを保つ設計',
        text: '遠くのMobは考える代わりに、シンプルな既成のアニメーションを再生します。とても遠くでは、自分自身の軽い画像になります。',
        points: [
          '丘の裏に隠れたMobは描画されません',
          'シミュレーション距離を下げても、生きた世界のまま',
          '同じ負荷で、ずっと多くのMobを',
        ],
        where: 'すべてあなたのゲーム側で動きます。サーバーは位置を共有するだけです。',
        details: details([
          {
            title: '遠くではシンプルなアニメーション',
            body: [
              [
                '遠くのMobにAIはありません：地面に合わせたアニメーションで歩き、草を食べ、あたりを見回します。ゲームがAIを動かす必要がないので、軽いままです。',
              ],
            ],
          },
          {
            title: '簡略化した画像',
            body: [
              [
                '多くのゲームと同じように、Living Horizonは遠くのMob、乗り物、プレイヤーを、完全な3Dモデルの代わりに軽い画像で描画します。その距離なら見た目は同じで、負荷はごくわずかです。Photonなどのシェーダーパックを使えば、画像もワールドのほかの部分と同じように照らされます。',
              ],
            ],
          },
          {
            title: '少ない負荷で、生きた世界を',
            body: [
              [
                '丘や遠方の地形の裏に隠れたMobは、まったく描画されません。シミュレーション距離を下げてフレームレートを上げても、周りの世界は生きたままです。MOD入りのサーバーの負担はごくわずか：見えるものはすべてあなたのゲームが処理します。',
              ],
            ],
          },
          {
            title: 'プリセット',
            body: [
              [
                { em: 'プリセット' },
                'を',
                { em: '低' },
                'から',
                { em: 'ウルトラ' },
                'まで選べば、すべてを一度に設定できます。デフォルトがバランスの取れた設定です。設定は、ゲームの設定画面、Mod Menu、Sodiumのビデオ設定にあり、14言語に対応しています。',
              ],
              [
                '注意：',
                { em: '最大Mob数' },
                'と',
                { em: 'Mobの描画距離' },
                'を両方',
                { em: '無制限' },
                'にすると、ゲームがクラッシュすることがあります。',
              ],
            ],
          },
        ]),
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
      unexplored: 'シード値から推測したMob',
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
      install: {
        title: 'サーバーのmodsフォルダーにjarを入れる',
        text: 'ゲームと同じファイルに加えて、FabricとQuiltではFabric APIも。設定は不要です。',
      },
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
    },
  },

  compatibility: {
    eyebrow: '互換性',
    title: 'Distant Horizons、Voxy、Ecstatic…',
    accent: 'あるいは、何もなくても。',
    text: 'Living Horizonは、遠方の地形のMODを自動で見つけます：Mobとプレイヤーはその地面を歩き、その丘の裏に隠れ、その霧の中に消えていきます。MODがなくても、描画距離の先で世界を生かし続けます。',
    /** A card per mod; the names are the mods' own. */
    cards: {
      dh: { text: '2.3以降。Mobとプレイヤーがその地形の上に、その丘の裏に。' },
      voxy: { text: 'Mobとプレイヤーがその地形の上に。シェーダーパックでも。' },
      lodistance: { text: 'Fabric、Minecraft 26.3。OpenGLで、シェーダーなし。' },
      farView: { text: 'ForgeとNeoForge、Minecraft 1.20.1〜1.21.4。Mobがその地形の上に。' },
      ecstatic: { text: 'NeoForge、Minecraft 1.21.1、シングルプレイ。Mobがその地形の上に。' },
      bobby: { text: 'サーバーの描画距離の先にBobbyが保持する地形の上に、Mobとプレイヤー。' },
      iris: { text: 'PhotonやComplementary Unboundなどのシェーダーパックが使えます。' },
      vanilla: {
        title: 'バニラ',
        text: '遠方の地形のMODは不要です：描画距離とシミュレーション距離を下げても、生きた世界が見えます。',
      },
    },
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
    /** Next to the "?" of the table: a link to report a build. */
    report: '試しましたか？報告してください',
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

  /** Testing, contributing and the Discord, in one section. */
  help: {
    eyebrow: '参加しよう',
    title: 'プレイヤーと一緒に作る、',
    accent: 'ベータ版。',
    test: {
      title: 'あなたの環境でテスト',
      text: 'ゲームバージョン、ローダー、MODの組み合わせでどう動いたか、良くても悪くても教えてください。どの報告も役に立ちます。',
      /** Under the text, once the builds are known. */
      untested: (n: number) =>
        p(n, {
          other: '{n}ビルドが、まだ最初のテスターを待っています',
        }),
      report: '互換性を報告',
    },
    code: {
      title: '開発に参加',
      text: 'コード、修正、翻訳は、GitHubへのプルリクエストとして集まります。AIも歓迎です。ただし、AIが書いたものを読み、理解し、テストしてください。',
      guide: 'コントリビューションガイド',
    },
    discord: {
      title: 'Discordに参加',
      text: '質問、ニュース、スクリーンショット、サポート。作者やほかのプレイヤーと一緒に。',
      join: 'Discordに参加',
    },
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
            'まで広げられます。プレイヤー、ボート、乗り物はデフォルトでどれだけ離れていても表示され、',
            { em: 'プレイヤーの描画距離' },
            'と',
            { em: 'エンティティの描画距離' },
            'で制限できます。Mobが表示されるのは、あなたのゲームかサーバーが一度見てからです。',
          ],
        ],
      },
      mods: {
        q: '自分のMODでも動きますか？',
        a: [
          [
            'おそらく動きます。Voxy、Distant Horizons、Lodistance、Ecstatic、Bobby、Sodium、Iris、シェーダーパックに対応しています（',
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
        q: 'Voxy、Distant Horizons、Lodistance、Ecstaticは必要ですか？',
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
            { em: '簡略化Mob' },
            'と',
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
            'はい、部分的には。コードの多くはAIが書いています。作者のclixmodsは、MODの仕組みを決め、すべての変更をゲーム内でテストし、うまくいかないところを直しています。AIがなければ、この規模のプロジェクトは存在しなかったでしょう。',
          ],
          [
            'アイデアは、clixmodsの仕事であるゲーム開発から来ています：インポスター、LOD、既成のアニメーションは、ゲームが何年も前から使ってきた手法です。clixmodsは2017年からMODを作っていて、Call of Duty: Black Ops IIIのマップ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            'などは、Steamワークショップで100万回以上ダウンロードされています（',
            { link: 'portfolio', text: 'ポートフォリオ' },
            'を参照）。',
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
    issue: (n: number) => `Issue #${n}`,
    /** A link that only shows the platform's logo. */
    page: (platform: string) => `${platform}のページ`,
    /**
     * The mods the modpacks that ship Living Horizon ship too: a pack runs them together, so
     * they work with it.
     */
    packs: {
      title: 'Living Horizonと同じModパックに',
      chip: 'Modパックに収録',
      text: 'Living Horizonを含むModパックは、これらのMODとも一緒に動かしています。',
      count: (n: number) => p(n, { other: '{n}件のModパックに収録' }),
      more: (n: number) => p(n, { other: 'さらに{n}件のMODを表示' }),
    },
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
