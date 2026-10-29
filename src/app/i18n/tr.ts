import { Messages } from './en';
import { plural } from './plural';
import { questions } from './rich';

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
    testers: 'Testçiler',
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
    news: 'Mod artık sunucularda da çalışıyor',
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
    preset: 'Hazır Ayar',
    presets: ['Düşük', 'Normal', 'Yüksek', 'Ultra'],
    mobDistance: 'Canlı Görüş Mesafesi',
    items: {
      mobs: {
        title: 'Ufka kadar her canlı',
        text: 'Hayvanlar otlar, köylüler uzak köylerde dolaşır, golemler nöbet tutar. Oyunun çizebildiği her canlı, diğer modların canlıları dahil.',
        points: [
          'Voxy ve Distant Horizons arazisinde ya da vanilla oyunda',
          'Uzak tepelerin arkasında gizlenirler, gölgelendirici paketleriyle de',
          "Hangilerinin görüneceğini Canlılar ve Varlıklar'dan seçin",
        ],
        where: 'Her yerde. Modlu bir sunucuda, hiç karşılaşmadığınız canlılar bile.',
      },
      players: {
        title: 'Her mesafede oyuncular',
        text: 'Diğer tüm oyuncuları, haritanın neresinde olurlarsa olsunlar, görünümleri, zırhları, ellerindeki eşyalar ve bindikleri şeyle birlikte görün.',
        points: [
          'Atlar, tekneler, vagonlar ve mutlu ghastlar',
          'Akıcı: sunucu konumları saniyede beş kez paylaşır',
          'Modu olmayan oyuncular yine de katılabilir',
        ],
        where: "LAN'da ve modlu sunucularda.",
      },
      offline: {
        title: 'Oyundan çıkan oyuncular yaşamaya devam eder',
        text: 'Biri oyundan çıktığında, adını taşıyan bir kopyası bıraktığı yerde kalır. O geri dönene kadar dolaşır, oturur, sandık açar ve geceleri uyur.',
        points: [
          'Adının yanında (çevrim dışı) ve en son ne zaman görüldüğü',
          'Siz katılmadan önce ayrılmış oyuncular bile',
          'Yalnızca görüntü: sizi ya da canlıları asla engellemezler',
        ],
        where: 'Her yerde. Modlu bir sunucuda, orada oynamış her oyuncu.',
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
      },
      light: {
        title: 'Hafif kalmak için yapıldı',
        text: 'Uzak canlıların yapay zekâsı yoktur: zemine uyan hazır animasyonlar oynatırlar. Çok uzakta kendilerinin düz bir resmine dönüşürler.',
        points: [
          'Tepelerin arkasında kalan canlılar çizilmez',
          'Simülasyon mesafenizi düşürün, dünya yine canlı kalsın',
          'Basit Varlıklar: aynı maliyetle çok daha fazla canlı',
        ],
        where: 'Her şey sizin oyununuzda çalışır. Sunucu yalnızca konumları paylaşır.',
      },
      settings: {
        title: 'Ayarlar, aradığınız yerde',
        text: "Seçenekler ekranında, Mod Menu'de, Sodium'un Görüntü Ayarları'nda ya da /livinghorizon config komutuyla. Her ayar ne yaptığını söyler.",
        points: [
          'Düşük, Normal, Yüksek ve Ultra hazır ayarları her şeyi tek seferde ayarlar',
          '14 dilde',
          'Varsayılana Sıfırla her şeyi eski hâline getirir',
        ],
        where: 'Varsayılanlar dengeli seçimdir.',
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
    since: (version: string) => `Sunucu desteği, ${version} sürümünden beri`,
    steps: {
      jar: {
        title: 'Jar dosyasını sunucunun mods klasörüne atın',
        text: "Oyununuz için olanla aynı dosya, sunucunun Minecraft sürümü ve yükleyicisine göre; Fabric ve Quilt'te ayrıca Fabric API. İki tarafta da güncel tutun.",
      },
      start: {
        title: 'Sunucuyu başlatın',
        text: 'Ayarlanacak bir şey yok. Sunucu paylaştıklarını dünya klasöründe saklar, böylece yeniden başlatmadan sonra da yerinde durur.',
      },
      see: {
        title: 'Modu olan oyuncular herkesi görür',
        text: 'Her mesafedeki her oyuncuyu görünümü, zırhı ve bineğiyle, çevresindeki canlılarla birlikte görürler; hiç karşılaşmadıkları canlıları bile.',
      },
    },
    matrixTitle: 'Nerede oynarsanız ne görürsünüz',
    matrixText: 'Tek oyunculu oyunda her şey çalışır. Sunucuda geri kalanını sunucudaki mod yapar.',
    matrixLabel: 'Oynanan yere göre özellikler',
    feature: 'Özellik',
    places: ['Tek oyunculu', 'LAN dünyası', 'Modlu sunucu', 'Modsuz sunucu'],
    rows: {
      mobs: 'Ufuktaki canlılar',
      players: 'Her mesafede oyuncular',
      offline: 'Oyundan çıkan oyuncular',
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
      datapack: {
        title: 'Veri paketini mi kullandınız?',
        text: 'Onu dünyanın datapacks klasöründen kaldırın: sunucudaki mod onun yerini alır.',
      },
    },
  },

  compatibility: {
    eyebrow: 'Uyumluluk',
    title: 'Uzak arazi için yapıldı.',
    accent: 'Onsuz da olur.',
    text: 'Distant Horizons veya Voxy yüklüyse Living Horizon bunu kendisi fark eder ve canlıları ve oyuncuları doğrudan onların arazisinde çizer. Onlar olmadan da dünyayı görüş mesafenizin ötesinde canlı tutar.',
    works: 'Çalışır',
    cards: {
      dh: {
        text: 'Canlılar ve oyuncular onun uzak arazisinde çizilir ve tepelerinin arkasında gizlenir. Distant Horizons 2.3 ve sonrası.',
        link: "Distant Horizons'ı indirin",
      },
      voxy: {
        text: 'Voxy arazisinin ufku canlanır: otlayan hayvanlar, uzak köyler, yoldaki oyuncular.',
        link: "Voxy'yi indirin",
      },
      vanilla: {
        title: 'Vanilla',
        text: 'Uzak arazi modu gerekmez. Düşük görüş ve simülasyon mesafesiyle oynayın, yine de yaşayan bir dünya görün.',
      },
    },
    extras: [
      'Iris gölgelendirici paketleri (Photon, Complementary…)',
      'Sunucularda aynı jar; ya da onsuz herhangi bir sunucuya katılın',
      "Ayarlar Sodium'un Görüntü Ayarları'nda (0.8+)",
    ],
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
    design: {
      eyebrow: 'Optimize edilmiş çizim',
      title: 'Yaşayan bir ufuk,',
      accent: 'karelerinizi yemeden.',
      text: 'Living Horizon baştan hafif kalacak şekilde tasarlandı: uzaktaki figürler ucuz yoldan ve yalnızca görülebildiklerinde çizilir. Böylece görüş ve simülasyon mesafenizi düşürüp dünyayı yine de canlı tutabilirsiniz.',
      cards: {
        pictures: {
          title: 'Uzakta hafif resimler',
          text: 'Belli bir mesafeden sonra uzak bir figür, tam model yerine kendisinin düz bir resmi olarak çizilir. O boyutta aynı görünür, işin çok küçük bir kısmıyla.',
        },
        hidden: {
          title: 'Gizli olan atlanır',
          text: 'Uzak arazinin arkasındaki canlılar hiç çizilmez ve bir figür fark edilemeyecek kadar küçük ya da uzak olduğunda animasyonlar durur.',
        },
        presets: {
          title: 'Kalite hazır ayarları',
          text: 'Düşük, Normal, Yüksek ve Ultra; canlı sayısını, menzillerini ve kuşları tek seferde ayarlar. Varsayılanlar dengeli seçimdir.',
        },
        server: {
          title: 'Sunucuyu yormaz',
          text: 'Her animasyon oyuncuların oyunlarında çalışır. Modlu bir sunucu yalnızca konumları paylaşır.',
        },
      },
    },
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

  testers: {
    eyebrow: 'Şu anda betada',
    title: 'Ufku canlandırmaya yardım edin.',
    lede: 'Living Horizon genç ve pek çok kombinasyonda çalışıyor: oyun sürümleri, yükleyiciler, Distant Horizons ve Voxy sürümleri, gölgelendirici paketleri, diğer modlar. Hepsi henüz denenmedi. Onunla oynuyorsanız nasıl çalıştığını bize anlatın, iyi ya da kötü: her rapor önemli.',
    asks: [
      'Minecraft sürümünüz ve yükleyiciniz',
      'Distant Horizons veya Voxy ve sürümü',
      'Varsa gölgelendirici paketi (Photon, Complementary…)',
      'Tek oyunculu, LAN veya sunucu; modlu ya da modsuz',
      'Gördüğünüz şeyin ekran görüntüsü',
    ],
    report: 'Uyumluluk bildirin',
    discord: "Discord'a katılın",
    issue: 'Sorun kaydı açın',
    status: 'Test durumu',
    waiting: (builds: number) => p(builds, { other: '/ {n} derleme hâlâ ilk testçisini bekliyor' }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, { other: '{n} derleme çalışırken görüldü' })}, ${waiting} bekliyor`,
    seen: 'Çalışırken görüldü',
    yours: 'Sizi bekliyor',
    wanted: 'En çok aranan',
    every: 'Her',
    everyRest: 'kurulum bize yeni bir şey anlatır',
    loading: 'Test edilmemiş kombinasyonlar, proje verileri yüklenir yüklenmez burada görünür.',
  },

  contribute: {
    eyebrow: 'Katkıda bulunun',
    title: 'Bizimle birlikte geliştirin.',
    accent: 'Yapay zekâya açığız.',
    text: 'Living Horizon tek bir yerde yapılır: GitHub deposunda. Kod, düzeltmeler ve çeviriler oraya pull request olarak gelir.',
    steps: {
      talk: {
        title: 'Önce konuşun',
        text: 'Küçük bir düzeltmeden büyük her şey için bir sorun kaydı açın, böylece iş yapılmadan önce yön konusunda anlaşılır.',
      },
      pr: {
        title: 'Pull request açın',
        text: "Bir feature/* veya fix/* dalında çalışın ve develop dalını hedefleyin. Commit'ler İngilizce ve conventional commits biçimindedir.",
      },
      build: {
        title: 'Derleyin ve test edin',
        text: "Tek bir Gradle derlemesi modu derler ve testleri çalıştırır. CI da bunu her pull request'te çalıştırır.",
      },
      credit: {
        title: 'Adınız geçsin',
        text: 'Kendinizi CREDITS.md dosyasına ekleyin; oyuncular değişikliği görecekse değişiklik günlüğüne de bir satır ekleyin.',
      },
    },
    aiTitle: 'Yapay zekâ mı kullanıyorsunuz? Buyurun.',
    aiText:
      'Yapay zekâ bu projenin yapılış biçiminin bir parçası; katkıda bulunmak için siz de kullanabilirsiniz, sorun değil. Yalnızca yazdığı şey üzerine düşünmeyi bırakmayın: pull request açmadan önce değişikliğinizi okuyun, anlayın ve test edin.',
    claude: {
      before: 'Claude burada en iyi şekilde çalışır:',
      between: 'dosyasını ve',
      after: 'içindeki becerileri kendiliğinden okur.',
    },
    terms: {
      before: 'Bir pull request açarak',
      link: 'lisansın',
      after:
        ' 3. bölümünü kabul etmiş olursunuz: telif hakkınız sizde kalır ve sonra ne olursa olsun katkıda bulunan olarak anılmaya devam edersiniz.',
    },
    guide: 'Katkı rehberini okuyun',
    issues: 'Açık sorunlar',
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
            ' seçeneğine kadar çıkabilir. Oyuncular: varsayılan olarak her mesafede; ',
            { em: 'Oyuncu Görüş Mesafesi' },
            ' bunu sınırlayabilir. Bir canlı ancak oyununuz ya da sunucu onu gördükten sonra görünür.',
          ],
        ],
      },
      mods: {
        q: 'Kullandığım modla çalışır mı?',
        a: [
          [
            'Büyük olasılıkla evet. Voxy, Distant Horizons, Sodium, Iris ve gölgelendirici paketleri onunla çalışır (bkz. ',
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
        q: 'Voxy ya da Distant Horizons gerekli mi?',
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
            { em: 'Basit Varlıklar' },
            ' ayarını açık tutun ve daha düşük bir ',
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
            "Evet. Ben clixmods, modun yapımcısıyım: video oyunlarında uzmanlaşmış bir full-stack geliştiriciyim, bu benim mesleğim. 2017'den beri mod yapıyorum: Steam Atölyesi'nde bir milyondan fazla indirilen ",
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ' gibi Call of Duty: Black Ops III haritaları (',
            { link: 'portfolio', text: 'portfolyoma' },
            " bakın). Fikirler ve teknikler oyun geliştirmeden geliyor: impostor'lar, LOD'lar ve hazır animasyonlar, oyunların yıllardır kullandığı hilelerdir.",
          ],
          [
            'Kodun büyük kısmını yapay zekâ yazıyor. Modun nasıl çalışacağına ben karar veriyorum, oyunda test ediyorum ve ters gideni düzeltiyorum. Yapay zekâ olmasaydı, bu büyüklükte bir proje bana o kadar uzun sürerdi ki hiç yapamazdım.',
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
    text: 'Living Horizon diğer modlarla birlikte nasıl çalışır: neyin çalıştığı, neyin bilinen bir sorunu olduğu ve neyin hâlâ birinin denemesini beklediği.',
    search: 'Mod arayın',
    filter: 'Duruma göre süzün',
    all: 'Tümü',
    status: { works: 'Çalışıyor', issue: 'Bilinen sorun', untested: 'Henüz test edilmedi' },
    categories: {
      terrain: 'Uzak arazi',
      graphics: 'Grafik ve performans',
      creatures: 'Canlılar ve oyuncular',
      tools: 'Kütüphaneler ve menüler',
    },
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
    /** What to know about a mod (`config/mods.ts`). Names of settings are the game's or Sodium's. */
    notes: {
      sodium: "0.8'den itibaren Living Horizon ayarları Sodium'un Görüntü Ayarları'nda da bulunur.",
      iris: 'Gölgelendirici paketleri çalışır. Photon ve Complementary kontrol edildi.',
      pack: 'Living Horizon ile kontrol edildi.',
      oculus: 'Forge için Iris: Living Horizon onu aynı şekilde bulur.',
      entityCulling: "Living Horizon'un uzakta çizdiği canlılar onun gizlemesinin dışında tutulur.",
      geckolib: 'Canlıları uzakta çizilir; şimdilik Minecraft 1.21.2 ile 1.21.8 arası hariç.',
      fowlPlay: 'Kuşları uzaktayken hareket etmeyi bırakır.',
      guardVillagers: 'Muhafızlar uzakta silahları ve zırhlarıyla çizilir.',
      fabricApi: "Fabric ve Quilt'te gereklidir.",
      modMenu: "İsteğe bağlı, Fabric ve Quilt'te: ayarları mod listesinden açar.",
    },
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
