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
    news: 'Artık Lodistance, Far View ve Ecstatic arazisinde',
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
    text: 'Canlılar, oyuncular, oyundan çıkmış oyuncular ve kuşlar; hepsini kendi oyununuz çizer ve açık bırakabileceğiniz kadar hafif kalır.',
    offline: '(çevrim dışı)',
    near: 'Yakında: canlının tamamı',
    far: 'Uzakta: düz bir resim',
    /** The button of each card: it spreads the card across the section, and folds it back. */
    more: 'Daha fazla ayrıntı',
    less: 'Daha az ayrıntı',
    items: {
      mobs: {
        title: 'Ufka kadar her canlı',
        text: 'Hayvanlar uzak tepelerde otlar, köylüler uzak köylerde dolaşır, golemler nöbet tutar. Oyunun çizebildiği her canlı, diğer modların canlıları da dahil.',
        points: [
          'Voxy, Distant Horizons ve diğer uzak arazilerde ya da vanilla oyunda',
          'Henüz kimsenin keşfetmediği topraklarda bile',
          'Uzak tepelerin arkasında gizlenirler, gölgelendiricilerle de',
        ],
        where: 'Her yerde. Modlu bir sunucuda, hiç karşılaşmadığınız canlılar bile.',
        details: details([
          {
            title: 'Görüldükleri yerde gerçek canlılar',
            body: [
              [
                'Her uzak canlı gerçektir ve oyununuzun ya da sunucunun onu en son gördüğü yerde durur. Yaklaştığınızda yerini doğrudan gerçek canlı alır. Uzak canlılar yalnızca görüntüdür: onlara vurulamaz, çiftlikler ve canlıların doğması mod yokmuş gibi çalışır.',
              ],
            ],
          },
          {
            title: 'Uzak arazinizde evlerindeymiş gibi',
            body: [
              [
                'Voxy, Distant Horizons, Lodistance, Far View ya da Ecstatic ile uzak canlılar onun zemininde yürür, tepelerinin arkasında kaybolur ve sisine karışır. Uzak arazi modu yoksa görüş mesafenizin ötesinde, oyunun kendi arazisinde görünürler (bkz. ',
                { link: 'compatibilitySection', text: 'Uyumluluk' },
                ').',
              ],
            ],
          },
          {
            title: 'Kimsenin gitmediği yerlerde bile',
            body: [
              [
                'Hiç gitmediğiniz toprakların da kendi sürüleri vardır. Living Horizon onları dünyanın tohumundan tahmin eder; bu yüzden oraya vardığınızda farklı olabilir ya da gitmiş olabilirler. Nişan aldığınız yere kadar görmek için dürbünle bakın.',
              ],
            ],
          },
          {
            title: 'Modlu bir sunucuda',
            body: [
              [
                'Diğer her oyuncunun çevresindeki canlıları, hiç karşılaşmadığınız sürüleri bile görürsünüz. Tahmini canlıları daha da uzakta göstermek için sunucunun sahibi dünyanın tohumunu paylaşabilir. Tohum tüm dünyayı ortaya çıkardığı için bu varsayılan olarak kapalıdır (bkz. ',
                { link: 'serverSettings', text: 'sunucu ayarları' },
                ').',
              ],
            ],
          },
          {
            title: 'Ayarlarda',
            body: [
              [
                'Hangi canlıların görüneceğini ',
                { em: 'Canlılar ve Varlıklar...' },
                ' içinden seçin, tahmini olanları ise ',
                { em: 'Tahmini Canlılar' },
                ' ile gizleyin.',
              ],
            ],
          },
        ]),
      },
      players: {
        title: 'Her mesafede oyuncular',
        text: 'Haritanın neresinde olurlarsa olsunlar diğer tüm oyuncuları; görünümleri, teçhizatları ve bindikleri şeyle birlikte görün.',
        points: [
          'At sırtında, teknede ya da elitrayla süzülürken',
          'Uzakta bile akıcı hareket ederler',
          'Modu olmayan oyuncular da katılabilir',
        ],
        where: 'LAN üzerinde ve modlu sunucularda.',
        details: details([
          {
            title: 'Herkes, her yerde',
            body: [
              [
                "Modlu bir sunucuda diğer tüm oyuncuları, nerede olurlarsa olsunlar, bineklerinin üstünde akıcı biçimde hareket ederken ve adlarıyla birlikte görürsünüz. LAN'a açılmış bir dünyada hiçbir şey kurmadan çalışır.",
              ],
            ],
          },
          {
            title: 'Karar sunucu sahibinin',
            body: [
              [
                'Sahibi, oyuncuların ne kadar uzaktan görüneceğini, yalnızca takım arkadaşlarının birbirini görüp görmeyeceğini ve hangi oyuncuların ya da boyutların gizli kalacağını seçer. Uzak oyuncuları göstermek tamamen de kapatılabilir (bkz. ',
                { link: 'serverSettings', text: 'sunucu ayarları' },
                ').',
              ],
            ],
          },
          {
            title: 'Asla gösterilmez',
            body: [
              [
                'İzleyici modundaki ve görünmez oyuncular uzakta asla gösterilmez. Eğilen oyuncular ise şimdilik gösteriliyor (',
                { link: 'sneaking', text: '#269' },
                ').',
              ],
            ],
          },
          {
            title: 'Ayarlarda',
            body: [
              [
                { em: 'Oyuncu Görüş Mesafesi' },
                ' oyuncuların ne kadar uzaktan görüneceğini belirler, ',
                { em: 'Oyuncuları Göster' },
                ' ise onları kapatır.',
              ],
            ],
          },
        ]),
      },
      offline: {
        title: 'Oyundan çıkan oyuncular yaşamaya devam eder',
        text: 'Biri oyundan çıktığında, bir kopyası bıraktığı yerde kalır. O geri dönene kadar dolaşır, oturur, balık tutar ve geceleri uyur.',
        points: [
          'Adı, yanında (çevrim dışı) ve en son ne zaman görüldüğü',
          'Siz katılmadan önce ayrılmış oyuncular bile',
          'Yalnızca görüntü: kenara itmek için içlerine doğru yürüyün',
        ],
        where: 'Her yerde. Modlu bir sunucuda, orada oynamış her oyuncu.',
        details: details([
          {
            title: 'Kendilerine ait bir hayat',
            body: [
              [
                'Gündüz dolaşır, oturur ya da bir sandığın başında oyalanırlar. Gece yatmaya giderler. Su kenarında balık tutar, yağmurdan korunur, akşamları bir kamp ateşinin çevresinde toplanır ve ikişer ikişer sohbet ederler.',
              ],
            ],
          },
          {
            title: 'Sizi fark ederler',
            body: [
              [
                'Yakından birine bakın, o da size bakar. Eğilin, o da eğilir. Canavarlar yaklaştığında kalkanlarını kaldırırlar, ama asla dövüşmezler.',
              ],
            ],
          },
          {
            title: 'Yalnızca görüntü',
            body: [
              [
                'Dünya onların var olduğunu bilmez: canlılar onları görmezden gelir ve asla yolunuzu kesmezler. Kenara itmek için içlerine doğru yürüyün.',
              ],
            ],
          },
          {
            title: 'Modlu bir sunucuda',
            body: [
              [
                'Orada oynamış her oyuncuyu göründüğü haliyle görürsünüz; siz katılmadan önce ayrılanları bile. Başka yerlerde, ayrıldığını gördüğünüz oyuncuları görürsünüz.',
              ],
            ],
          },
          {
            title: 'Ayarlarda',
            body: [
              [
                { em: 'Çevrim Dışı Oyuncu' },
                ' onları gösterir ya da gizler, ',
                { em: 'Çevrim Dışı Etkinlik' },
                ' ise bıraktıkları yerin çevresindeki hayatlarını açar ya da kapatır.',
              ],
            ],
          },
        ]),
      },
      birds: {
        title: 'Gökyüzünde kuşlar',
        text: 'Sürüler, V şeklinde uçan kazlar, yırtıcı kuşlar, martılar ve ördekler gökyüzünü doldurur ve onları çok uzaktan görürsünüz.',
        points: [
          'Ağaçlara, çatılara, tarlalara ve kumsallara konarlar',
          'Ördekler göletlerde ve nehirlerde yüzer',
          'Dünyanıza hiçbir şey eklenmez',
        ],
        where: 'Her yerde, hiçbir ayar gerekmez.',
        details: details([
          {
            title: 'Her türden kuş',
            body: [
              [
                'V şeklinde uçan kazlardan göletlerdeki ördeklere kadar her tür ait olduğu yerde yaşar: ağaçlarda, kıyı boyunca, çatılarda, tarlalarda. Geceleri yarasalar çıkar.',
              ],
            ],
          },
          {
            title: 'Size tepki verirler',
            body: [
              [
                'Yaklaşın, uçup biraz ileriye konarlar. Asla bir anda kaybolmazlar: dağılıp uçup giderler.',
              ],
            ],
          },
          {
            title: 'Yalnızca ekranınızda',
            body: [
              [
                'Kuşları yalnızca sizin oyununuz çizer: dünyanıza hiçbir şey eklenmez ve maliyetleri çok azdır.',
              ],
            ],
          },
          {
            title: 'Ayarlarda',
            body: [
              [
                { em: 'Kuşları Göster' },
                ' onları açar ya da kapatır, ',
                { em: 'Kuş Türleri...' },
                ' ise hangi türlerin uçacağını seçmenizi sağlar.',
              ],
            ],
          },
        ]),
      },
      light: {
        title: 'Hafif kalmak için yapıldı',
        text: 'Uzak canlılar düşünmek yerine basit, hazır animasyonlar oynatır; çok uzakta ise kendilerinin hafif resimlerine dönüşürler.',
        points: [
          'Tepelerin arkasında kalan canlılar çizilmez',
          'Simülasyon mesafenizi düşürün, dünya yine canlı kalsın',
          'Aynı maliyetle çok daha fazla canlı',
        ],
        where: 'Her şey sizin oyununuzda çalışır. Sunucu yalnızca konumları paylaşır.',
        details: details([
          {
            title: 'Uzakta basit animasyonlar',
            body: [
              [
                'Uzak canlıların yapay zekâsı yoktur: zemine uyan animasyonlarla yürür, otlar ve etrafa bakınırlar. Oyununuzun onları çalıştırması gerekmez, böylece hızlı kalır.',
              ],
            ],
          },
          {
            title: 'Basitleştirilmiş resimler',
            body: [
              [
                'Pek çok oyun gibi Living Horizon da uzak canlıları, araçları ve oyuncuları tam 3D modeller yerine hafif resimler olarak çizer. O mesafede aynı görünürler, maliyetin çok küçük bir kısmıyla. Photon gibi bir gölgelendirici paketiyle resimler dünyanın geri kalanı gibi aydınlatılır.',
              ],
            ],
          },
          {
            title: 'Daha az maliyetle canlı bir dünya',
            body: [
              [
                'Tepelerin ya da uzak arazinin arkasında kalan canlılar hiç çizilmez. Kare kazanmak için simülasyon mesafenizi düşürün, çevrenizdeki dünya yine canlı kalsın. Modlu bir sunucuya çok az iş düşer: gördüğünüz her şeyi oyununuz üstlenir.',
              ],
            ],
          },
          {
            title: 'Hazır ayarlar',
            body: [
              [
                'Her şeyi tek seferde ayarlamak için ',
                { em: 'Düşük' },
                "'ten ",
                { em: 'Ultra' },
                "'ya bir ",
                { em: 'Hazır Ayar' },
                " seçin; varsayılanlar dengeli seçimdir. Ayarlar 14 dilde; Seçenekler ekranında, Mod Menu'de ve Sodium'un Görüntü Ayarları'nda.",
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
      unexplored: 'Tohumdan tahmin edilen canlılar',
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
    issue: (n: number) => `Issue #${n}`,
    /** A link that only shows the platform's logo. */
    page: (platform: string) => `${platform} sayfası`,
    /**
     * The mods the modpacks that ship Living Horizon ship too: a pack runs them together, so
     * they work with it.
     */
    packs: {
      title: 'Living Horizon içeren mod paketlerinde',
      chip: 'Mod paketlerinde',
      text: 'Living Horizon içeren mod paketleri onu bu modlarla da çalıştırır.',
      count: (n: number) => p(n, { other: '{n} mod paketinde' }),
      more: (n: number) => p(n, { other: '{n} mod daha göster' }),
    },
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
