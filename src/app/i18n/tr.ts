import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

const p = plural('tr');

export const tr: Messages = {
  meta: {
    title: 'Living Horizon: uzaklara hayat verir',
    description:
      "Living Horizon; canlıları, köylüleri, kuşları ve diğer oyuncuları ufukta, görüş mesafenizin ötesinde ve Distant Horizons ile Voxy'nin uzak arazisinde yaşatan bir Minecraft modudur. Tek oyunculu oyunda, LAN'da ve sunucularda. Fabric, Quilt, NeoForge ve Forge. Şu anda beta aşamasında.",
  },

  language: {
    label: 'Dil',
  },

  common: {
    download: 'İndir',
    becomeTester: 'Testçi olun',
    needsTesters: 'Testçi aranıyor',
    tested: 'Test edildi',
    seenWorking: 'Bir dünyada çalışırken görüldü',
    new: 'Yeni',
    beta: 'Beta',
    changelog: 'Değişiklikler',
    logo: (name: string) => `${name} logosu`,
  },

  nav: {
    label: 'Ana menü',
    tag: 'beta',
    menu: 'Menü',
    features: 'Özellikler',
    mods: 'Modlar',
    modpacks: 'Mod paketleri',
    faq: 'SSS',
    download: (version: string) => `v${version} İndir`,
  },

  pages: {
    mods: {
      title: 'Uyumlu modlar',
      description:
        'Living Horizon diğer Minecraft modlarıyla nasıl çalışır: uzak arazi, gölgelendiriciler, performans ve canlı modları. Neyin çalıştığı, neyin bilinen bir sorunu olduğu ve neyin bir testçi beklediği.',
    },
    modpacks: {
      title: 'Mod paketleri',
      description:
        'Living Horizon içeren Minecraft mod paketleri, CurseForge ve Modrinth indirme bağlantılarıyla.',
    },
    changelog: {
      title: 'Değişiklikler',
      description: "Living Horizon'un her sürümü ve neyin değiştiği.",
    },
  },

  hero: {
    scene:
      'Çizim: köşeli tepelerle dolu, alacakaranlıkta bir ufuk; çok uzakta köylüler, hayvanlar, biniciler ve diğer oyuncular hâlâ yaşıyor, üstlerinden bir kaz sürüsü geçiyor.',
    news: 'Yeni: kimsenin keşfetmediği topraklarda sürüler',
    tagline: 'Uzaklara',
    taglineAccent: 'hayat verir.',
    lede: {
      before:
        'Hayvanlar, köylüler, kuşlar ve diğer oyuncular, görüş mesafenizin çok ötesinde, ufukta yaşamaya devam eder:',
      between: 've',
      after:
        " ile gelen uzak arazide de, vanilla oyunda da. Tek oyunculu oyunda, LAN'da ve sunucularda.",
    },
    facts: 'Bir bakışta proje',
    latest: 'Son sürüm',
    updated: 'Güncelleme',
    downloads: 'İndirmeler',
    minecraft: 'Minecraft',
    loaders: 'Yükleyiciler',
  },

  concept: {
    eyebrow: 'Ne yapar',
    title: 'Görüş mesafeniz biter.',
    accent: 'Dünya bitmez.',
    text: 'Minecraft, birkaç yığın ötedeki canlıları ve oyuncuları çizmeyi bırakır. Uzak arazi modları araziyi ufka kadar uzatır, ama orası boş ve hareketsiz kalır. Living Horizon onu yeniden hayatla doldurur.',
    diagram:
      'Şema: Living Horizon olmadan canlılar yalnızca görüş mesafeniz içinde vardır ve uzak arazi boştur. Onunla canlılar, oyuncular ve kuşlar ufka kadar tüm uzak arazide yaşar.',
    you: 'Siz',
    renderDistance: 'Görüş mesafeniz',
    farTerrain: 'Uzak arazi ·',
    horizon: 'Ufuk',
    without: { before: 'Living Horizon', mark: 'olmadan', after: '' },
    with: { before: 'Living Horizon', mark: 'ile', after: '' },
    empty: 'boş',
  },

  features: {
    eyebrow: 'Özellikler',
    title: 'Görüş mesafenizin ötesinde',
    accent: 'yaşayan her şey.',
    text: 'Canlılar, kimsenin keşfetmediği toprakların sürüleri, oyuncular, oyundan çıkmış oyuncular ve kuşlar; hepsini kendi oyununuz çizer ve açık bırakabileceğiniz kadar hafif kalır.',
    offline: '(çevrim dışı)',
    near: 'Yakında: canlının tamamı',
    far: 'Uzakta: düz bir resim',
    more: 'Daha fazla ayrıntı',
    close: 'Kapat',
    previous: 'Önceki özellik',
    next: 'Sonraki özellik',
    items: {
      mobs: {
        title: 'Ufka kadar her canlı',
        text: 'Hayvanlar otlar, köylüler uzak köylerde dolaşır, golemler nöbet tutar. Oyunun çizebildiği her canlı, diğer modların canlıları ve araçları dahil.',
        points: [
          'Voxy, Distant Horizons ve diğer uzak arazilerde ya da vanilla oyunda',
          'Uzak tepelerin arkasında gizlenirler, gölgelendirici paketleriyle de',
          "Hangilerinin görüneceğini Canlılar ve Varlıklar'dan seçin",
        ],
        where: 'Her yerde. Modlu bir sunucuda, hiç karşılaşmadığınız canlılar bile.',
        details: details([
          {
            title: 'Nereden geliyorlar',
            body: [
              [
                'Gerçek canlılardır; oyununuzun ya da sunucunun onları en son gördüğü yerdedirler. Oyununuz karşılaştığı her canlıyı hatırlar ve modlu bir sunucu her oyuncunun çevresindeki canlıları paylaşır; böylece hiç karşılaşmadığınız sürüleri de görürsünüz. O zamandan beri ölen ya da kaybolan bir canlı, siz yanına gelene kadar görünmeye devam edebilir. Sonra unutulur.',
              ],
            ],
          },
          {
            title: 'Uzak arazide',
            body: [
              [
                'Voxy, Distant Horizons, Lodistance, Far View ya da Ecstatic ile onun zemininde yürür, herhangi bir bloğun arkasındaymış gibi tepelerinin arkasında gizlenir ve sisinde kaybolurlar. Bobby ile onun sakladığı arazide kalırlar. Hiçbiri yoksa oyunun kendi arazisinde görünürler. Bkz. ',
                { link: 'compatibilitySection', text: 'Uyumluluk' },
                '.',
              ],
            ],
          },
          {
            title: 'Yaklaşınca gerçek canlı devralır',
            body: [
              [
                'Siz yaklaştıkça kopya, canlının en son görüldüğü yere geri yürür ve sunucu gerçek canlıyı gönderdiğinde onun yerini gerçek canlı alır. Uzak canlılar yalnızca görüntüdür: çiftlikler, canlıların doğması ve canlı sınırı mod yokmuş gibi çalışır ve onlara vuramazsınız.',
              ],
            ],
          },
          {
            title: 'Diğer modların canlıları',
            body: [
              [
                "Minecraft'ın kendi varlık sistemini kullanan her şey uzaktan görünür: modlu canlılar ve Immersive Aircraft'ın uçakları ya da Shippy Ships'in gemileri gibi araçlar, onları bıraktığınız yerde.",
              ],
            ],
          },
          {
            title: 'Ayarlar',
            body: [
              {
                list: [
                  [
                    { em: 'Canlıları Göster' },
                    ' ve ',
                    { em: 'Varlıkları Göster' },
                    ': onları açar ya da kapatır.',
                  ],
                  [{ em: 'Canlılar ve Varlıklar...' }, ': canlıları tek tek seçin.'],
                  [
                    { em: 'Canlı Görüş Mesafesi' },
                    ' ve ',
                    { em: 'En Fazla Canlı' },
                    ': ne kadar uzağa kadar ve aynı anda kaç tane.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      unexplored: {
        title: 'Kimsenin keşfetmediği topraklarda sürüler',
        text: 'Hiç gitmediğiniz toprakların da hayvanları var. Mod, oyunun oraya hangilerini ve nereye koyacağını dünyanın tohumundan hesaplar.',
        points: [
          'Oyunun her yeni yığın için yaptığı rastgele çekimlerin aynısı',
          'Dürbünle, nişan aldığınız kadar uzağa',
          'Canlıları Tahmin Et: çevrenizde 1.024 yığına kadar',
        ],
        where: 'Tek oyunculu oyunda ve modlu sunucularda.',
        details: details([
          {
            title: 'Nasıl tahmin eder',
            body: [
              [
                'Oyun bir yığın oluşturduğunda, ilk hayvanlarını dünyanın tohumundan ve yığının konumundan yapılan rastgele çekimlerle yerleştirir. Living Horizon, henüz oluşturulmamış yığınlar için aynı çekimleri dünya oluşturucunun verdiği biyom ve araziyle yapar: ovalarda atlar, tepelerde koyunlar, aşağı yukarı oyunun onları koyacağı yerde.',
              ],
            ],
          },
          {
            title: 'Bir tahmin, bir söz değil',
            body: [
              [
                'Okuduğu arazide henüz ne çimen ne de ağaç vardır. Oyun bu yüzden bir yeri uygun bulmadığında, oradaki sürü eksik ya da başka bir yerdedir: tahmin edilen hayvanların yaklaşık yarısı gerçeklerine iki blok mesafede durur. Tahmin edilen bir canlı, siz vardığınızda orada olmayabilir.',
              ],
            ],
          },
          {
            title: 'Dürbün ve Canlıları Tahmin Et',
            body: [
              [
                'Tahmin edilen canlıları, ne kadar uzak olursa olsun nişan aldığınız her yerde görmek için dürbünle bakın. ',
                { em: 'Canlıları Tahmin Et' },
                ' onları çevrenizde 1.024 yığına kadar tek seferde gösterir ve sonraki oturumlarınız için saklar.',
              ],
            ],
          },
          {
            title: 'Sunucuda',
            body: [
              [
                'Sunucu onları modu olan her oyuncunun çevresinde, varsayılan olarak 512 blokta tahmin eder (',
                { code: 'seedMobRange' },
                ', en fazla 2.048). Dürbün ve ',
                { em: 'Canlıları Tahmin Et' },
                ' dünyanın tohumunu gerektirir: sunucu onu ancak sahibi ',
                { code: 'shareSeed' },
                ' ayarını açarsa paylaşır, çünkü tohuma sahip olan herkes tüm dünyayı bilir (bkz. ',
                { link: 'serverSettings', text: 'sunucu ayarları' },
                ').',
              ],
            ],
          },
          {
            title: 'Ayarlar',
            body: [
              {
                list: [
                  [{ em: 'Tahmini Canlılar' }, ': onları gösterir ya da gizler.'],
                  [
                    { em: 'Tahmin Yarıçapı' },
                    ': ',
                    { em: 'Canlıları Tahmin Et' },
                    "'in ne kadar uzağa ulaştığı.",
                  ],
                ],
              },
            ],
          },
        ]),
      },
      players: {
        title: 'Her mesafede oyuncular',
        text: 'Diğer tüm oyuncuları, haritanın neresinde olurlarsa olsunlar, görünümleri, zırhları, ellerindeki eşyalar ve bindikleri şeyle birlikte görün.',
        points: [
          'Atlar, tekneler, vagonlar, elitralar ve mutlu ghastlar',
          'Akıcı: sunucu konumları saniyede beş kez paylaşır',
          'Modu olmayan oyuncular yine de katılabilir',
        ],
        where: "LAN'da ve modlu sunucularda.",
        details: details([
          {
            title: 'Nasıl çalışır',
            body: [
              [
                'Modlu bir sunucu, her oyuncunun nerede olduğunu, neye bindiğini ve elitrayla süzülüp süzülmediğini saniyede beş kez paylaşır. Her beş saniyede bir, en yakındakilerin nasıl göründüğünü de ekler: görünüm, zırh ve ellerinde tuttukları. Oyununuz onları görüş mesafesinin ötesinde, ad etiketleri ve binekleriyle birlikte çizer.',
              ],
            ],
          },
          {
            title: 'Seçim sunucu sahibinin',
            body: [
              [
                'Sunucu ilk başladığında ',
                { code: 'config/livinghorizon-server.json' },
                ' dosyasını yazar: oyuncuların ne kadar uzağa kadar paylaşılacağı, yalnızca takım arkadaşlarıyla mı, hangi oyuncuların ve boyutların gizli kalacağı. ',
                { code: '"sharePlayers": false' },
                ' bunu kapatır. Değişiklikler yeniden başlatma gerekmeden birkaç saniye sonra uygulanır (bkz. ',
                { link: 'serverSettings', text: 'sunucu ayarları' },
                ').',
              ],
            ],
          },
          {
            title: 'Asla paylaşılmaz',
            body: [
              [
                'İzleyici modundaki oyuncular ve görünmez oyuncular. Eğilen oyuncular ise şimdilik paylaşılıyor (',
                { link: 'sneaking', text: '#269' },
                '). Görüş mesafesi içinde oyuncular birbirini her zamanki gibi görür.',
              ],
            ],
          },
          {
            title: 'Ayarlar',
            body: [
              {
                list: [
                  [{ em: 'Oyuncuları Göster' }, ': onları açar ya da kapatır.'],
                  [{ em: 'Oyuncu Görüş Mesafesi' }, ': ne kadar uzağa kadar görünecekleri.'],
                  [{ em: 'Binekler ve Araçlar' }, ': bindikleri şeyler.'],
                ],
              },
            ],
          },
        ]),
      },
      offline: {
        title: 'Oyundan çıkan oyuncular yaşamaya devam eder',
        text: 'Biri oyundan çıktığında, adını taşıyan bir kopyası bıraktığı yerde kalır. O geri dönene kadar dolaşır, oturur, balık tutar, sandık açar ve geceleri uyur.',
        points: [
          'Adının yanında (çevrim dışı) ve en son ne zaman görüldüğü',
          'Siz katılmadan önce ayrılmış oyuncular bile',
          'Yalnızca görüntü: kenara itmek için içlerine doğru yürüyün',
        ],
        where: 'Her yerde. Modlu bir sunucuda, orada oynamış her oyuncu.',
        details: details([
          {
            title: 'Hayatlarından bir gün',
            body: [
              {
                list: [
                  [
                    'Gündüz dolaşır, oturur ya da bir sandığın, çalışma masasının veya bir meslek bloğunun başında dururlar.',
                  ],
                  ['Gece boş bir yatağa yürüyüp içinde uyurlar ya da ayakta kalırlar.'],
                  ['Su kenarında içlerinden biri kıyıda durup bir süre balık tutar.'],
                  [
                    'Yağmurda bazıları bir çatının ya da ağacın altına geçip yağmurun dinmesini bekler.',
                  ],
                  ['Akşam bir kamp ateşinin ya da ocağın önünde toplanırlar.'],
                  ['Birbirine yakın iki kişi birbirine doğru yürür ve yüz yüze sohbet eder.'],
                ],
              },
            ],
          },
          {
            title: 'Sizi fark ederler',
            body: [
              [
                'Yakından birine bakın, o da size bakar. Önünde eğilin, o da eğilir. Canavarlar yaklaştığında kılıç çekip kalkanlarını kaldırırlar, ama asla dövüşmezler.',
              ],
            ],
          },
          {
            title: 'Yalnızca görüntü',
            body: [
              [
                'Dünya onların var olduğunu bilmez: canlılar onları görmezden gelir ve sizi asla engellemez ya da itmezler. Kenara itmek için içlerine doğru yürüyün. Sizden uzakta, bulundukları yerde dolaşmaya devam ederler.',
              ],
            ],
          },
          {
            title: 'Nereden geliyorlar',
            body: [
              [
                'Oyununuz, ayrılırken gördüğü oyuncuları hatırlar. Modlu bir sunucu, orada oynamış her oyuncuyu göründükleri hâliyle paylaşır; siz katılmadan önce ayrılmış olanları bile.',
              ],
            ],
          },
          {
            title: 'Ayarlar',
            body: [
              {
                list: [
                  [
                    { em: 'Çevrim Dışı Oyuncu' },
                    ' ve ',
                    { em: 'En Fazla Çevrim Dışı' },
                    ': görünüp görünmeyecekleri ve kaç tane.',
                  ],
                  [{ em: 'Çevrim Dışı Etkinlik' }, ': bulundukları yerin çevresindeki hayatları.'],
                  [
                    { em: 'Dolaşma Yarıçapı' },
                    ': ne kadar uzağa dolaşacakları, varsayılan olarak 50 blok.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      birds: {
        title: 'Gökyüzünde kuşlar',
        text: 'Sürüler, V şeklinde uçan kazlar, yırtıcı kuşlar, martılar, ördekler ve yarasalar arazinin üzerinde uçar ve onları uzaktan görürsünüz.',
        points: [
          'Ağaçlara, çatılara, tarlalara ve kumsallara konarlar',
          'Ördekler göletlerinde yüzer',
          'Yakında küçük 3D modeller, uzakta düz resimler',
        ],
        where: 'Her yerde, ayarlanacak bir şey yok.',
        details: details([
          {
            title: 'Kim nerede uçar',
            body: [
              {
                list: [
                  ['Sürüler gökyüzünü geçer, kazlar V şeklinde uçar, yırtıcı kuşlar daire çizer.'],
                  ['Martılar kıyıyı izler ve arada bir kumsala konar.'],
                  [
                    'Güvercinler yüksek binalara tüner, kızılgerdanlar tarlalarda sekerek dolaşır, baştankaralar ağaçlardan ayrılmaz.',
                  ],
                  ['Ördekler göllerde ve nehirlerde yüzer. Yarasalar geceleri çıkar.'],
                ],
              },
            ],
          },
          {
            title: 'Size tepki verirler',
            body: [
              [
                'Küçük kuşlar siz yaklaşınca havalanır ve biraz ileriye konar. Ördekler yanlarına yaklaşmanıza asla izin vermez. Ayrılan kuşlar asla bir anda yok olmaz: dağılır ve küçülerek uzaklaşırlar.',
              ],
            ],
          },
          {
            title: 'Araziden okunur',
            body: [
              [
                "Her türün nereye gideceği araziden okunur, Voxy ile Distant Horizons'un uzak arazisine kadar: kızılgerdanlar için ekinler, baştankaralar için yapraklar, ördekler için su, martılar için kumsallar. Yalnızca oyununuzdaki resimlerdir: dünyada hiçbir şey oluşturulmaz.",
              ],
            ],
          },
          {
            title: 'Ayarlar',
            body: [
              {
                list: [
                  [{ em: 'Kuşları Göster' }, ': onları açar ya da kapatır.'],
                  [{ em: 'Kuş Türleri...' }, ': türleri tek tek seçin.'],
                  [
                    { em: 'Kuş Yoğunluğu' },
                    ' ve ',
                    { em: 'Kuş Mesafesi' },
                    ': ne kadar çok ve ne kadar uzağa.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      light: {
        title: 'Hafif kalmak için yapıldı',
        text: 'Uzak canlıların yapay zekâsı yoktur: zemine uyan hazır animasyonlar oynatırlar. Çok uzakta kendilerinin düz bir resmine dönüşürler.',
        points: [
          'Tepelerin arkasında kalan canlılar çizilmez',
          'Simülasyon mesafenizi düşürün, dünya yine canlı kalsın',
          'Basit Canlılar: aynı maliyetle çok daha fazla canlı',
        ],
        where: 'Her şey sizin oyununuzda çalışır. Sunucu yalnızca konumları paylaşır.',
        details: details([
          {
            title: 'Uzakta yapay zekâ yok',
            body: [
              [
                'Uzak canlılar, çevrelerindeki zemine uyan hazır animasyonlarla yürür, otlar ve etrafa bakınır. Oyundan çıkmış oyuncular ve kuşlar yalnızca size yakınken kendi başlarına hareket eder.',
              ],
            ],
          },
          {
            title: 'Uzakta düz resimler',
            body: [
              [
                'Pek çok oyun uzak nesneleri impostor olarak çizer: 3D model yerine düz bir resim. Living Horizon da uzak canlılar, araçlar ve oyuncular için aynısını yapar (',
                { em: 'Basit Canlılar' },
                ', ',
                { em: 'Basit Varlıklar' },
                ', ',
                { em: 'Basit Oyuncular' },
                '). O boyutta aynı görünürler, maliyetin çok küçük bir kısmıyla. Photon gibi normal haritalarını okuyan bir gölgelendirici paketiyle, resimler paket tarafından aydınlatılır (',
                { em: 'Gölgelendirici Işığı' },
                ').',
              ],
            ],
          },
          {
            title: 'Gizli olan atlanır',
            body: [
              [
                'Tepelerin ya da uzak arazinin arkasındaki canlılar hiç çizilmez ve bir figür fark edilemeyecek kadar küçüldüğünde animasyonlar durur.',
              ],
            ],
          },
          {
            title: 'Her şey sizin oyununuzda',
            body: [
              [
                'Animasyonları, oyundan çıkmış oyuncuları ve kuşları sizin oyununuz yönetir. Modlu bir sunucu yalnızca konumları paylaşır, bu yüzden ona maliyeti azdır. İki oyuncu aynı uzak canlıyı farklı şeyler yaparken bile görebilir.',
              ],
            ],
          },
          {
            title: 'Hazır ayarlar ve ayarlar',
            body: [
              [
                'Bir ',
                { em: 'Hazır Ayar' },
                ' (',
                { em: 'Düşük' },
                ', ',
                { em: 'Normal' },
                ', ',
                { em: 'Yüksek' },
                ', ',
                { em: 'Ultra' },
                ') her şeyi tek seferde ayarlar. Varsayılanlar dengeli seçimdir ve ',
                { em: 'Varsayılana Sıfırla' },
                " onları geri getirir. Ayarlar 14 dilde; Seçenekler ekranında, Mod Menu'de, Sodium'un Görüntü Ayarları'nda ya da ",
                { code: '/livinghorizon config' },
                ' komutuyla.',
              ],
              [
                'Dikkat: ',
                { em: 'En Fazla Canlı' },
                ' ve ',
                { em: 'Canlı Görüş Mesafesi' },
                ' ikisi birden ',
                { em: 'Sınırsız' },
                ' olursa oyun çökebilir.',
              ],
            ],
          },
        ]),
      },
    },
  },

  compare: {
    eyebrow: 'Önce / sonra',
    title: 'Aynı manzara.',
    accent: 'Tek bir mod.',
    text: 'Tutamacı sürükleyin. Solda uzak arazi var ama boş. Sağda Living Horizon ona yeniden hayat veriyor.',
    tabs: 'Sahneler',
    shots: {
      shaders: {
        title: 'Oyun içi · Gölgelendiriciler',
        text: 'Gölgelendirici paketiyle, görüş ve simülasyon mesafesi 12: uzak tepelerdeki hayvanlar geri döndü.',
      },
      vanilla: {
        title: 'Oyun içi · Vanilla',
        text: 'Gölgelendirici yok, görüş ve simülasyon mesafesi 12: inek ve at sürüleri uzak ovaları dolduruyor.',
      },
    },
    scenes: {
      village: {
        title: 'Ovadaki köy',
        text: 'Uzak bir köyün çevresinde köylüler, bir golem ve otlayan hayvanlar.',
      },
      ridge: {
        title: 'Sırttaki biniciler',
        text: 'Tepelerde diğer oyuncular ve atları, ad etiketleriyle birlikte.',
      },
      coast: {
        title: 'Öğle vakti kıyı',
        text: 'Denizde tekneler, uzak kıyıda köylüler, suyun üzerinde martılar.',
      },
    },
    legendNear: 'Görüş mesafeniz: her iki durumda da canlı',
    legendFar: 'Uzak arazi: mod olmadan boş',
    note: {
      before:
        'Etkinin stilize bir çizimi. İlk sekmeler gerçek oyun içi ekran görüntüleri. Sizin de güzel bir görüntünüz mü var?',
      link: "Discord'da paylaşın",
      after: '.',
    },
    shotWithout: (text: string) => `Living Horizon olmadan oyun içi ekran görüntüsü. ${text}`,
    shotWith: (text: string) => `Living Horizon ile oyun içi ekran görüntüsü. ${text}`,
    sceneWithout: (text: string) => `Living Horizon olmadan: ${text}`,
    sceneWith: (text: string) => `Living Horizon ile: ${text}`,
    badgeWithout: 'Mod olmadan',
    badgeWith: 'Living Horizon ile',
    slider: 'Görünümü Living Horizon olmadan ve onunla karşılaştırmak için kaydırın',
  },

  servers: {
    eyebrow: 'Çok oyunculu',
    title: 'Sunucunuza kurun.',
    accent: 'Herkes herkesi görsün.',
    text: 'Aynı jar sunucularda da çalışır. Sunucu, her oyuncunun nerede olduğunu, çevrelerindeki canlıları ve oyundan çıkmış oyuncuları modu olan herkesle paylaşır.',
    cover: 'Oyuncu ve canlı kafalarından oluşan bir kalabalığın önünde Living Horizon başlığı.',
    matrixTitle: 'Nerede oynarsanız ne görürsünüz',
    matrixText: 'Tek oyunculu oyunda her şey çalışır. Sunucuda geri kalanını sunucudaki mod yapar.',
    matrixLabel: 'Oynanan yere göre özellikler',
    feature: 'Özellik',
    places: ['Tek oyunculu', 'LAN dünyası', 'Modlu sunucu', 'Modsuz sunucu'],
    rows: {
      mobs: 'Ufuktaki canlılar',
      players: 'Her mesafede oyuncular',
      offline: 'Oyundan çıkan oyuncular',
      unexplored: 'Keşfedilmemiş topraklarda sürüler',
      birds: 'Kuşlar',
    },
    cells: {
      mobsMet: 'Yalnızca karşılaştığınız canlılar',
      offlineEven: 'Siz katılmadan önce ayrılanlar bile',
      offlineSeen: 'Yalnızca ayrılırken gördükleriniz',
    },
    yes: 'Evet',
    no: 'Hayır',
    noOthers: 'Başka oyuncu yok',
    notApplicable: 'Geçerli değil',
    notes: {
      install: {
        title: 'Jar dosyasını sunucunun mods klasörüne atın',
        text: "Oyununuz için olanla aynı dosya; Fabric ve Quilt'te ayrıca Fabric API. Ayarlanacak bir şey yok.",
      },
      lan: {
        title: 'LAN: kurulacak bir şey yok',
        text: "LAN'a açılmış bir dünya her şeyi ev sahibinin oyunu üzerinden paylaşır.",
      },
      join: {
        title: 'Herkes katılabilir',
        text: 'Modu olmayan oyuncular yine de katılabilir. Sunucu onlara hiçbir şey göndermez.',
      },
      tell: {
        title: 'Oyuncularınıza haber verin',
        text: 'Sunucu her oyuncunun konumunu, modu olan oyuncularla paylaşır.',
      },
    },
  },

  compatibility: {
    eyebrow: 'Uyumluluk',
    title: 'Distant Horizons, Voxy, Ecstatic…',
    accent: 'ya da hiçbiri.',
    text: 'Living Horizon uzak arazi modunuzu kendisi bulur: canlılar ve oyuncular onun zemininde yürür, tepelerinin arkasında gizlenir ve sisinde kaybolur. Böyle bir mod yoksa da dünyayı görüş mesafenizin ötesinde canlı tutar.',
    cards: {
      dh: { text: '2.3 ve sonrası. Canlılar ve oyuncular onun arazisinde, tepelerinin arkasında.' },
      voxy: { text: 'Canlılar ve oyuncular onun arazisinde, gölgelendirici paketleriyle de.' },
      lodistance: { text: 'Fabric, Minecraft 26.3; OpenGL ile ve gölgelendiriciler olmadan.' },
      farView: {
        text: 'Forge ve NeoForge, Minecraft 1.20.1 ile 1.21.4 arası. Canlılar onun arazisinde.',
      },
      ecstatic: { text: 'NeoForge, Minecraft 1.21.1, tek oyunculu. Canlılar onun arazisinde.' },
      bobby: {
        text: 'Canlılar ve oyuncular, onun sunucunun görüş mesafesinin ötesinde sakladığı arazide.',
      },
      iris: { text: 'Photon ve Complementary Unbound gibi gölgelendirici paketleri çalışır.' },
      vanilla: {
        title: 'Vanilla',
        text: 'Uzak arazi modu gerekmez: görüş ve simülasyon mesafenizi düşürün, yine de yaşayan bir dünya görün.',
      },
    },
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: 'Peki diğer modlarınız?',
      text: (n: number) =>
        p(n, {
          other:
            'Listede {n} mod: gölgelendiriciler, performans, canlı modları. Neyin çalıştığı ve neyin hâlâ bir testçi beklediği.',
        }),
      link: 'Uyumlu modları görün',
    },
    matrixTitle: 'Minecraft sürümleri ve yükleyiciler',
    matrixText: 'Her oyun sürümü ve yükleyici için bir jar.',
    report: 'Birini denediniz mi? Bildirin',
    builds: (builds: number, range: string) => p(builds, { other: `${range} için {n} derleme.` }),
    keyUntested: 'Açılıyor, testçi gerekli',
    table: 'Uyumluluk tablosu',
    untested: 'Oyunda açılıyor, ama henüz bir dünyada çizerken görülmedi',
    noBuild: 'Derleme yok',
    notAvailable: 'Mevcut değil',
    fallback: (range: string) =>
      `Fabric, Quilt, NeoForge (1.20.6 ve sonrası) ve Forge üzerinde Minecraft ${range}.`,
    fullTable: "GitHub'da tam tablo",
    loaders: {
      fabric: 'Fabric API ile. Mod Menu isteğe bağlı.',
      quilt: 'Fabric API (QFAPI) ile.',
      neoforge: 'Minecraft 1.20.6 ve sonrası, başka bir şey gerekmez.',
      forge: 'Başka bir şey gerekmez.',
    },
  },

  performance: {
    eyebrow: 'Performans',
    title: 'Yaşayan bir ufuk,',
    accent: 'üstelik size kare kazandırır.',
    numbers: 'Rakamlarla',
    measured: 'Oyuncular ve geliştirici tarafından ölçüldü; kurulum her değerin altında.',
    noNumbers: {
      before:
        'Burada uydurma rakam yok: gerçek ölçümler geldikçe dolacak. Yerleşik hata ayıklama paneli (',
      after: ') modun kendi maliyetini birim zaman ve kare başına gösterir.',
    },
    slots: {
      fps: { label: 'FPS kazancı', hint: 'uzakları oyun yerine mod çiziyor' },
      mobs: { label: 'Ufuktaki canlılar', hint: 'aynı anda çizilen' },
      distance: { label: 'Kapsanan mesafe', hint: 'görüş mesafesinin ötesinde' },
      frame: { label: 'Kare maliyeti', hint: 'hata ayıklama panelinden' },
    },
    setups: {
      fps: '120 → 150 FPS, uzakların aynı görüntüsü için: daha kısa bir görüş mesafesi ve ötesindeki canlıları çizen Living Horizon, oyunun o kadar uzağı kendisinin çizmesine karşı. Geliştirici tarafından ölçüldü.',
    },
    pending: (hint: string) => `Ölçüm bekleniyor · ${hint}`,
    share: 'Kendi sisteminizde ölçtünüz mü? Paylaşın',
  },

  help: {
    eyebrow: 'Siz de katılın',
    title: 'Bir beta,',
    accent: 'oyuncularıyla birlikte geliştiriliyor.',
    test: {
      title: 'Kendi sisteminizde test edin',
      text: 'Oyun sürümünüzde, yükleyicinizde ve modlarınızla nasıl çalıştığını, iyi ya da kötü, bize anlatın. Her rapor yardımcı olur.',
      untested: (n: number) => p(n, { other: '{n} derleme hâlâ ilk testçisini bekliyor' }),
      report: 'Uyumluluk bildirin',
    },
    code: {
      title: 'Katkıda bulunun',
      text: "Kod, düzeltmeler ve çeviriler GitHub'a pull request olarak gelir. Yapay zekâya açığız; yeter ki yazdığını okuyun, anlayın ve test edin.",
      guide: 'Katkı rehberi',
    },
    discord: {
      title: "Discord'a katılın",
      text: 'Modun yapımcısı ve diğer oyuncularla sorular, haberler, ekran görüntüleri ve yardım.',
      join: "Discord'a katılın",
    },
  },

  changelog: {
    eyebrow: 'Son güncellemeler',
    title: 'Sık sık yayınlıyoruz,',
    accent: 'hızla düzeltiyoruz.',
    text: "Doğrudan projenin GitHub'daki değişiklik günlüğünden.",
    textEnglish: "Doğrudan projenin GitHub'daki değişiklik günlüğünden, İngilizce olarak.",
    latest: 'Son',
    release: 'Sürüm',
    sides: { server: 'Sunucu', client: 'İstemci' },
    kinds: { new: 'Yeni', improved: 'İyileştirildi', fixed: 'Düzeltildi' },
    more: (n: number) => p(n, { other: '{n} değişiklik daha göster' }),
    failed: "Değişiklik günlüğü şu anda yüklenemedi. GitHub'da her zaman bulabilirsiniz.",
    full: "Tüm değişiklik günlüğünü GitHub'da görün",
    releases: 'Tüm sürümler',
    /** The link to the changelog page, on the home page. */
    every: 'Tüm sürümleri görün',
  },

  faq: {
    eyebrow: 'Sık sorulan sorular',
    title: 'Sorularınız mı var?',
    accent: 'Yanıtlar burada.',
    text: "Oyuncuların en sık sorduğu sorular. Başka bir şey için Discord'da sorun.",
    groups: {
      how: 'Nasıl çalışır',
      compatibility: 'Uyumluluk',
      performance: 'Performans ve ayarlar',
      multiplayer: 'Çok oyunculu',
      downloads: 'İndirmeler ve lisans',
      ai: 'Yapay zekâ',
    },
    questions: questions({
      visual: {
        q: 'Yalnızca görsel mi? Canlı çiftliklerini bozar mı?',
        a: [
          [
            'Yalnızca görseldir, yapay zekâ yoktur. Gerçek canlılar mod yokmuş gibi çalışır; bu yüzden çiftlikler, canlıların doğması ve canlı sınırı değişmez. Uzaktaki bir canlıya vuramazsınız.',
          ],
        ],
      },
      real: {
        q: 'Uzaktaki canlılar gerçek mi, yoksa rastgele mi yerleştiriliyor?',
        a: [
          [
            'Gerçek canlılardır; oyununuzun ya da sunucunun onları en son gördüğü yerdedirler. O zamandan beri ölen ya da kaybolan bir canlı, siz yanına gelene kadar görünmeye devam edebilir. Sonra unutulur.',
          ],
        ],
      },
      simulation: {
        q: 'Simülasyon ya da varlık mesafesini artırmaktan farkı ne?',
        a: [
          [
            'Daha yüksek bir simülasyon mesafesi, sunucunun daha fazla gerçek canlı çalıştırmasını sağlar; bu çok pahalıdır ve sunucu onları yine de ancak belli bir mesafeye kadar gönderir. Living Horizon, sunucunun çalıştırmadığı kopyalar çizer. Bu kopyalar hazır animasyonlar oynatır ve çok uzakta düz resimlere dönüşür (',
            { em: 'Basit Varlıklar' },
            ').',
          ],
        ],
      },
      range: {
        q: 'Canlıları ve oyuncuları ne kadar uzağa kadar gösterir?',
        a: [
          [
            'Canlılar: varsayılan olarak 512 blok; ',
            { em: 'Canlı Görüş Mesafesi' },
            ' ile ',
            { em: 'Sınırsız' },
            ' seçeneğine kadar çıkabilir. Oyuncular, tekneler ve araçlar: varsayılan olarak her mesafede; ',
            { em: 'Oyuncu Görüş Mesafesi' },
            ' ve ',
            { em: 'Varlık Görüş Mesafesi' },
            ' bunu sınırlayabilir. Bir canlı ancak oyununuz ya da sunucu onu gördükten sonra görünür.',
          ],
        ],
      },
      mods: {
        q: 'Kullandığım modla çalışır mı?',
        a: [
          [
            'Büyük olasılıkla evet. Voxy, Distant Horizons, Lodistance, Ecstatic, Bobby, Sodium, Iris ve gölgelendirici paketleri onunla çalışır (bkz. ',
            { link: 'compatibilitySection', text: 'Uyumluluk' },
            "). Living Horizon yalnızca kendi figürlerini ekler: diğer modların dünyayı nasıl çizdiğini değiştirmez. Henüz test edilmemiş modlar GitHub'da ",
            { link: 'modCompatibility', text: 'mod compatibility' },
            ' etiketi altında listelenir. Bir şey bozulursa, modun adı ve sürümüyle bir ',
            { link: 'issues', text: 'sorun kaydı' },
            ' açın.',
          ],
        ],
      },
      modMobs: {
        q: 'Diğer modların canlıları uzaktan görünür mü?',
        a: [
          [
            "Evet, Minecraft'ın kendi varlık sistemini kullandıkları sürece. Bir modun varlıkları çok farklı çalışıyorsa, onun için bir ",
            { link: 'issues', text: 'sorun kaydında' },
            ' ya da ',
            { link: 'discord', text: 'Discord' },
            "'da destek isteyin.",
          ],
        ],
      },
      farTerrain: {
        q: 'Voxy, Distant Horizons, Lodistance ya da Ecstatic gerekli mi?',
        a: [
          [
            'Hayır. Onlar olmadan, uzaktaki canlılar ve oyuncular oyunun kendi arazisinde, görüş mesafenize kadar görünür. Biri yüklüyse, onun uzak arazisinde de görünürler.',
          ],
        ],
      },
      frameRate: {
        q: "FPS'imi düşürür mü?",
        a: [
          [
            'Daha fazla varlık çizmek FPS düşürür. Oyununuz yavaşlarsa ',
            { em: 'Basit Canlılar' },
            ' ve ',
            { em: 'Basit Varlıklar' },
            ' ayarlarını açık tutun ve daha düşük bir ',
            { em: 'Hazır Ayar' },
            ' seçin. ',
            { em: 'En Fazla Canlı' },
            ' ve ',
            { em: 'Canlı Görüş Mesafesi' },
            ' ikisi birden ',
            { em: 'Sınırsız' },
            ' olursa oyun çökebilir.',
          ],
        ],
      },
      choose: {
        q: 'Neyin gösterileceğini seçebilir miyim?',
        a: [
          [
            'Evet. ',
            { em: 'Canlıları Göster' },
            ', ',
            { em: 'Oyuncuları Göster' },
            ', ',
            { em: 'Çevrim Dışı Oyuncu' },
            ' ve ',
            { em: 'Kuşları Göster' },
            ' her bir parçayı açar ya da kapatır. ',
            { em: 'Canlılar ve Varlıklar...' },
            ' ile canlıları tek tek seçebilirsiniz.',
          ],
        ],
      },
      world: {
        q: 'Dünyamı değiştirir mi, yığın yükler mi?',
        a: [
          [
            'Hayır. Dünyanızda hiçbir şeyi değiştirmez ve hiçbir yığın yüklemez. Hatırladıklarını kendi dosyalarında saklar: ',
            { code: 'config' },
            ' klasöründe ve sunucunun paylaştıkları için dünya klasöründeki ',
            { code: 'livinghorizon-positions.dat' },
            ' dosyasında. Modu kaldırmak dünyanızı olduğu gibi bırakır.',
          ],
          ['Sunucuda mod, konumları yalnızca modu olan oyunculara gönderir.'],
        ],
      },
      server: {
        q: 'Sunucuda da mod olması gerekir mi?',
        a: [
          [
            'Hayır. Tek oyunculu oyunda neredeyse her şey çalışır ve modla herhangi bir sunucuya katılabilirsiniz. Ama her mesafede oyuncuları görmek için sunucuda mod gerekir; sunucu o zaman daha fazla canlıyı ve oyundan çıkmış oyuncuları da paylaşır. ',
            { link: 'serversSection', text: 'Çok oyunculu' },
            ' bölümüne bakın.',
          ],
        ],
      },
      paper: {
        q: 'Paper ya da Spigot sunucularında çalışır mı?',
        a: [
          [
            'Modsuz herhangi bir sunucuda olduğu gibi, bu sunucularda da modla oynayabilirsiniz. Sunucu tarafı yalnızca Fabric, Quilt, NeoForge ve Forge üzerinde çalışır, bu yüzden bir Paper ya da Spigot sunucusu hiçbir şey paylaşmaz. Paper için bir eklenti ',
            { link: 'paperPlugin', text: '#156' },
            "'da tartışılıyor.",
          ],
        ],
      },
      nothing: {
        q: 'Uzakta hiç canlı ya da oyuncu görmüyorum. Neden?',
        a: [
          {
            list: [
              [
                'Uzaktaki oyuncular için sunucuda mod gerekir. Sunucunun sahibi kimlerin paylaşılacağını da sınırlayabilir (bkz. ',
                { link: 'serverSettings', text: 'sunucu ayarları' },
                ').',
              ],
              ['Modsuz bir sunucuda yalnızca karşılaştığınız canlılar görünür.'],
            ],
          },
        ],
      },
      cheat: {
        q: 'Hile yapmak için kullanılabilir mi? Sunucularda izin veriliyor mu?',
        a: [
          [
            'Diğer oyuncuları yalnızca sunucunun izin verdiği yerde gösterir. Uzaktaki oyuncular yalnızca modu olan bir sunucuda görünür ve neyin paylaşılacağını sunucunun sahibi seçer: ne kadar uzağa kadar, yalnızca takım arkadaşlarıyla mı, hangi oyuncuların ve boyutların gizli kalacağı. ',
            { code: '"sharePlayers": false' },
            ' bunu kapatır (bkz. ',
            { link: 'serverSettings', text: 'sunucu ayarları' },
            '). Görünmez oyuncular ve izleyici modundaki oyuncular asla paylaşılmaz. Eğilen oyuncular ise şimdilik paylaşılıyor (',
            { link: 'sneaking', text: '#269' },
            ').',
          ],
          [
            'Diğer sunucularda yalnızca kendi oyununuzun gördüğünü görürsünüz. Mod sunucuya hiçbir şey göndermez. Yine de her sunucunun modlarla ilgili kendi kuralları vardır: yetkililerine sorun.',
          ],
        ],
      },
      bedrock: {
        q: 'Bedrock sürümü var mı?',
        a: [['Hayır. Living Horizon, Minecraft Java Edition için bir moddur.']],
      },
      version: {
        q: 'Oyun sürümüm desteklenmiyor. Desteklenecek mi?',
        a: [
          [
            'Hangi sürümü ve yükleyiciyi oynadığınızı ',
            { link: 'discord', text: 'Discord' },
            "'da söyleyin. Bu, sırada ne olacağını seçmeye yardımcı olur.",
          ],
        ],
      },
      modpack: {
        q: "Bir modpack'e koyabilir miyim?",
        a: [['Evet. Resmî dosyayı kullanın ve kaynak gösterin.']],
      },
      abandoned: {
        q: 'Proje terk edilirse ne olur?',
        a: [
          [
            "Lisans bunu öngörür. Proje terk edilmiş ilan edildiğinde (deposu arşivlendiğinde ya da README'si bunu söylediğinde), lisansı GPL'ye dönüşür: herkes kaynak göstererek projeyi sürdürebilir. ",
            { link: 'license', text: 'Lisansın' },
            ' 5. bölümüne bakın.',
          ],
        ],
      },
      ai: {
        q: 'Yapay zekâyla mı yapıldı?',
        a: [
          [
            'Evet, kısmen. Kodun büyük kısmını yapay zekâ yazıyor. Modun yapımcısı clixmods, modun nasıl çalışacağına karar veriyor, her değişikliği oyunda test ediyor ve ters gideni düzeltiyor. Yapay zekâ olmasaydı, bu büyüklükte bir proje var olmazdı.',
          ],
          [
            "Fikirler, clixmods'un mesleği olan oyun geliştirmeden geliyor: impostor'lar, LOD'lar ve hazır animasyonlar, oyunların yıllardır kullandığı hilelerdir. clixmods 2017'den beri mod yapıyor; örneğin Steam Atölyesi'nde bir milyondan fazla indirilen Call of Duty: Black Ops III haritası ",
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ' (bkz. ',
            { link: 'portfolio', text: 'portfolyo' },
            ').',
          ],
        ],
      },
      modrinth: {
        q: "Modrinth'te var mı? Neden orada listelenmiyor?",
        a: [
          [
            { link: 'modrinth', text: 'Modrinth' },
            "'te var, ama listelenmemiş: Modrinth'in aramasında görünmüyor. Ağustos 2026'dan beri ",
            { link: 'modrinthRules', text: "Modrinth'in kuralları" },
            ', esas olarak yapay zekâyla yapılmış bir projenin herkese açık olmasına izin vermiyor, bu yüzden ekibi onu listeden kaldırdı. CurseForge, Nexus Mods ve ',
            { link: 'releases', text: 'sürümler sayfası' },
            ' aynı dosyaları sunar.',
          ],
          [
            'Listelenmemiş olması güvensiz olduğu anlamına gelmez. Bu, modun ne yaptığıyla değil, nasıl yapıldığıyla ilgilidir:',
          ],
          {
            list: [
              [
                'Kod herkese açık: herkes onu ',
                { link: 'github', text: 'GitHub deposunda' },
                ' okuyabilir.',
              ],
              ['GitHub her sürümü bu koddan derler ve derleme kayıtları herkese açıktır.'],
              [
                "Modun internete bağlanan kendine ait hiçbir kodu yoktur. Oyuncu görünümleri oyun üzerinden Mojang'dan gelir ve Discord bağlantısı yalnızca siz tıkladığınızda açılır.",
              ],
            ],
          },
        ],
      },
    }),
    ask: "Discord'da sorun",
    issue: 'Sorun kaydı açın',
  },

  download: {
    eyebrow: 'İndir',
    title: 'Hemen edinin:',
    accent: 'Living Horizon',
    text: {
      before:
        'Ücretsiz; her oyun sürümü ve yükleyici için bir jar, hem oyununuz hem sunucunuz için. Onu',
      after: 'klasörüne atın ve ufuk canlansın.',
    },
    latest: 'Son sürüm',
    version: 'Minecraft sürümü',
    loader: 'Yükleyici',
    needs: { before: '·', after: 'gerekir' },
    untested: 'Bu derleme oyunda açılıyor, ama bir dünyada çizdiğini henüz kimse bildirmedi',
    jar: "Jar'ı indirin",
    releasePage: 'Sürüm sayfasından edinin',
    sameJar: 'Aynı jar sunucunuza da kurulur',
    curseforge: "ya da CurseForge'dan edinin",
    pick: "Dosyanızı sürüm sayfasından ya da CurseForge'dan seçin.",
    total: 'İndirmeler, tüm platformlar',
    count: (n: number) => p(n, { other: '{n} indirme' }),
    noCount: 'İndirme sayısı mevcut değil',
    soon: 'Yakında',
    checking: 'Kontrol ediliyor…',
    everyFile: 'her dosya',
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) => p(n, { other: '{n} mod paketi' }),
  },

  modpacks: {
    eyebrow: 'Mod paketleri',
    title: 'Şimdiden',
    accent: 'mod paketlerinde.',
    text: 'Living Horizon içeren paketler. Onunla bir paket mi yaptınız? Kendiliğinden burada görünür.',
    by: (authors: string) => `${authors} tarafından`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `${platform} üzerinden indir`,
    none: 'Henüz hiçbir mod paketi Living Horizon içermiyor. İlki sizinki olabilir.',
    loading: 'Mod paketleri birazdan burada görünecek.',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) =>
      p(n, { one: 'Mod paketleri sayfasına gidin', other: 'Tüm {n} mod paketini görün' }),
  },

  mods: {
    eyebrow: 'Uyumluluk',
    title: 'Modlarınızla',
    accent: 'iyi anlaşır.',
    text: "Doğrudan GitHub'daki projeden, her testle güncel: neyin çalıştığı, neyin bilinen bir sorunu olduğu ve neyin hâlâ birinin denemesini beklediği. Notlar İngilizcedir.",
    search: 'Mod arayın',
    filter: 'Duruma göre süzün',
    all: 'Tümü',
    status: { works: 'Çalışıyor', issue: 'Bilinen sorun', untested: 'Henüz test edilmedi' },
    /** The heading of the shader packs, after the mods. */
    shaders: 'Gölgelendirici paketleri',
    /** The note of every mod still waiting for a tester, next to the link to its issue. */
    untested:
      'Henüz kimse nasıl çalıştığını söylemedi. Denediniz mi? Issue sayfasında bize anlatın.',
    issue: (n: number) => `Issue #${n}`,
    none: 'Aramanızla eşleşen mod yok.',
    missing: {
      title: 'Listede olmayan bir mod mu var?',
      text: "Living Horizon'un onunla nasıl çalıştığını, iyi ya da kötü, bize anlatın: her rapor yardımcı olur.",
      link: 'Mod bildirin',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: "Liste şu anda yüklenemedi. Her zaman GitHub'da.",
    failedLink: "Listeyi GitHub'da görün",
  },

  footer: {
    tagline:
      'Uzaklara hayat verir. Minecraft Java Edition için, oyununuz ve sunucunuz için bir mod.',
    beta: 'Beta: hatalar olabilir, lütfen bize bildirin.',
    project: 'Proje',
    docs: 'Belgeler',
    license: 'Lisans',
    community: 'Topluluk',
    bug: 'Hata bildirin',
    contribute: 'Katkıda bulunun',
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: 'Mod paketi listesi:', after: '' },
    official:
      'Resmî bir Minecraft ürünü değildir. Mojang veya Microsoft tarafından onaylanmamıştır ve onlarla ilişkili değildir.',
  },
};
