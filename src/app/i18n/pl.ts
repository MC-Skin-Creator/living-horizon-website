import { Messages } from './en';
import { plural } from './plural';
import { questions } from './rich';

const p = plural('pl');

export const pl: Messages = {
  meta: {
    title: 'Living Horizon: ożywia dal',
    description:
      'Living Horizon to mod do gry Minecraft, dzięki któremu stworzenia, osadnicy, ptaki i inni gracze żyją na horyzoncie, poza twoim zasięgiem renderowania i na dalekim terenie Distant Horizons i Voxy. W grze jednoosobowej, w sieci LAN i na serwerach. Fabric, Quilt, NeoForge i Forge. Teraz w fazie beta.',
  },

  language: {
    label: 'Język',
  },

  common: {
    download: 'Pobierz',
    becomeTester: 'Zostań testerem',
    needsTesters: 'Potrzebni testerzy',
    tested: 'Przetestowane',
    seenWorking: 'Widziany w działaniu w świecie',
    new: 'Nowość',
    beta: 'Beta',
    changelog: 'Lista zmian',
    logo: (name: string) => `Logo ${name}`,
  },

  nav: {
    label: 'Główna',
    tag: 'beta',
    menu: 'Menu',
    features: 'Funkcje',
    compatibility: 'Kompatybilność',
    testers: 'Testerzy',
    contribute: 'Współtwórz',
    faq: 'FAQ',
    download: (version: string) => `Pobierz v${version}`,
  },

  hero: {
    scene:
      'Ilustracja: horyzont o zmierzchu, kanciaste wzgórza, a na nich, daleko, wciąż żyją osadnicy, zwierzęta, jeźdźcy i inni gracze, a nad nimi leci klucz gęsi.',
    news: 'Mod działa teraz także na serwerach',
    tagline: 'Ożywia',
    taglineAccent: 'dal.',
    lede: {
      before:
        'Zwierzęta, osadnicy, ptaki i inni gracze żyją dalej na horyzoncie, daleko poza twoim zasięgiem renderowania, prosto na dalekim terenie',
      between: 'i',
      after: ', albo w samej grze. W grze jednoosobowej, w sieci LAN i na serwerach.',
    },
    facts: 'Projekt w skrócie',
    latest: 'Najnowsza',
    updated: 'Aktualizacja',
    downloads: 'Pobrania',
    minecraft: 'Minecraft',
    loaders: 'Loadery',
  },

  concept: {
    eyebrow: 'Co robi',
    title: 'Twój zasięg renderowania się kończy.',
    accent: 'Świat nie.',
    text: 'Minecraft przestaje rysować stworzenia i graczy już kilka chunków dalej. Mody dalekiego terenu rozciągają ląd aż po horyzont, ale ten zostaje pusty i nieruchomy. Living Horizon z powrotem wypełnia go życiem.',
    diagram:
      'Schemat: bez Living Horizon stworzenia istnieją tylko w twoim zasięgu renderowania, a daleki teren jest pusty. Z nim stworzenia, gracze i ptaki żyją na całym dalekim terenie, aż po horyzont.',
    you: 'Ty',
    renderDistance: 'Twój zasięg renderowania',
    farTerrain: 'Daleki teren ·',
    horizon: 'Horyzont',
    without: { before: '', mark: 'Bez', after: 'Living Horizon' },
    with: { before: '', mark: 'Z', after: 'Living Horizon' },
    empty: 'pusty',
  },

  features: {
    eyebrow: 'Funkcje',
    title: 'Wszystko, co żyje',
    accent: 'poza twoim zasięgiem renderowania.',
    text: 'Stworzenia, gracze, także ci wylogowani, i ptaki. Rysuje je twoja własna gra, a całość jest na tyle lekka, że możesz ją zostawić włączoną.',
    offline: '(offline)',
    near: 'Z bliska: pełne stworzenie',
    far: 'Z daleka: płaski obraz',
    preset: 'Domyślne',
    presets: ['Niski', 'Normalny', 'Wysoki', 'Ultra'],
    mobDistance: 'Zasięg render. stworzeń',
    items: {
      mobs: {
        title: 'Każde stworzenie, aż po horyzont',
        text: 'Zwierzęta się pasą, osadnicy krążą po odległych wioskach, golemy trzymają wartę. Każde stworzenie, które gra potrafi narysować, także te z innych modów.',
        points: [
          'Na terenie Voxy i Distant Horizons albo w samej grze',
          'Ukrywają się za dalekimi wzgórzami, także z paczkami shaderów',
          'Wybierz je w „Stworzenia i byty”',
        ],
        where: 'Wszędzie. Na serwerze z modem nawet te, których jeszcze nie spotkano.',
      },
      players: {
        title: 'Gracze w każdej odległości',
        text: 'Widzisz każdego innego gracza, gdziekolwiek jest na mapie, z jego skórką, zbroją, przedmiotami w ręku i tym, na czym jedzie.',
        points: [
          'Konie, łódki, wagoniki i wesołe ghasty',
          'Płynnie: serwer udostępnia pozycje pięć razy na sekundę',
          'Gracze bez moda nadal mogą dołączyć',
        ],
        where: 'W sieci LAN i na serwerach z modem.',
      },
      offline: {
        title: 'Wylogowani gracze żyją dalej',
        text: 'Gdy ktoś się wyloguje, kopia z jego nazwą zostaje tam, gdzie skończył grę. Spaceruje, siedzi, otwiera skrzynie i śpi nocą, dopóki on nie wróci.',
        points: [
          '(offline) przy nazwie i to, kiedy był ostatnio online',
          'Nawet gracze, którzy wyszli przed twoim dołączeniem',
          'Tylko na pokaz: nigdy nie blokują ciebie ani stworzeń',
        ],
        where: 'Wszędzie. Na serwerze z modem każdy gracz, który kiedykolwiek tam grał.',
      },
      birds: {
        title: 'Ptaki na niebie',
        text: 'Stada, gęsi w kluczu, ptaki drapieżne, mewy, kaczki i nietoperze latają nad okolicą, a ty widzisz je z daleka.',
        points: [
          'Siadają na drzewach, dachach, polach i plażach',
          'Kaczki pływają po swoim stawie',
          'Z bliska małe modele 3D, z daleka płaskie obrazki',
        ],
        where: 'Wszędzie, bez żadnej konfiguracji.',
      },
      light: {
        title: 'Lekki z założenia',
        text: 'Dalekie stworzenia nie mają AI: odtwarzają gotowe animacje dopasowane do terenu. Bardzo daleko zmieniają się w płaskie obrazy samych siebie.',
        points: [
          'Stworzenia ukryte za wzgórzami nie są rysowane',
          'Zmniejsz zasięg symulacji i zachowaj żywy świat',
          'Uproszczone byty: dużo więcej stworzeń za tę samą cenę',
        ],
        where: 'Wszystko działa w twojej grze. Serwer tylko udostępnia pozycje.',
      },
      settings: {
        title: 'Ustawienia tam, gdzie ich szukasz',
        text: 'Na ekranie Opcje, w Mod Menu, w Ustawieniach grafiki Sodium lub komendą /livinghorizon config. Każde ustawienie wyjaśnia, co robi.',
        points: [
          'Niski, Normalny, Wysoki i Ultra ustawiają wszystko naraz',
          'W 14 językach',
          '„Przywróć domyślne” cofa wszystkie zmiany',
        ],
        where: 'Wartości domyślne to wyważony wybór.',
      },
    },
  },

  compare: {
    eyebrow: 'Przed / po',
    title: 'Ten sam widok.',
    accent: 'Jeden mod.',
    text: 'Przeciągnij uchwyt. Po lewej daleki teren jest, ale pusty. Po prawej Living Horizon przywraca mu życie.',
    tabs: 'Sceny',
    shots: {
      shaders: {
        title: 'W grze · Shadery',
        text: 'Z paczką shaderów, zasięg renderowania i symulacji 12: zwierzęta na dalekich wzgórzach wróciły.',
      },
      vanilla: {
        title: 'W grze · Vanilla',
        text: 'Bez shaderów, zasięg renderowania i symulacji 12: stada krów i koni wypełniają dalekie równiny.',
      },
    },
    scenes: {
      village: {
        title: 'Wioska na równinach',
        text: 'Osadnicy, golem i pasące się zwierzęta wokół odległej wioski.',
      },
      ridge: {
        title: 'Jeźdźcy na grani',
        text: 'Inni gracze i ich konie na wzgórzach, razem z nazwami nad głowami.',
      },
      coast: {
        title: 'Wybrzeże w południe',
        text: 'Łódki na morzu, osadnicy na dalekim brzegu, mewy nad wodą.',
      },
    },
    legendNear: 'Twój zasięg renderowania: żywy tak czy inaczej',
    legendFar: 'Daleki teren: pusty bez moda',
    note: {
      before:
        'Stylizowana ilustracja efektu. Pierwsze karty to prawdziwe zrzuty ekranu z gry. Masz własny udany zrzut?',
      link: 'Wrzuć go na Discord',
      after: '.',
    },
    shotWithout: (text: string) => `Zrzut ekranu z gry bez Living Horizon. ${text}`,
    shotWith: (text: string) => `Zrzut ekranu z gry z Living Horizon. ${text}`,
    sceneWithout: (text: string) => `Bez Living Horizon: ${text}`,
    sceneWith: (text: string) => `Z Living Horizon: ${text}`,
    badgeWithout: 'Bez moda',
    badgeWith: 'Z Living Horizon',
    slider: 'Przesuń, aby porównać widok bez Living Horizon i z nim',
  },

  servers: {
    eyebrow: 'Gra wieloosobowa',
    title: 'Wrzuć go na swój serwer.',
    accent: 'Wszyscy widzą wszystkich.',
    text: 'Ten sam jar działa na serwerach. Serwer udostępnia wszystkim, którzy mają moda, gdzie jest każdy gracz, jakie stworzenia są wokół niego i gdzie są wylogowani gracze.',
    cover: 'Napis Living Horizon na tle tłumu głów graczy i stworzeń.',
    since: (version: string) => `Obsługa serwerów od wersji ${version}`,
    steps: {
      jar: {
        title: 'Wrzuć jar do folderu mods serwera',
        text: 'Ten sam plik co do twojej gry, pod wersję gry i loader serwera, a przy Fabric i Quilt także Fabric API. Aktualizuj go po obu stronach.',
      },
      start: {
        title: 'Uruchom serwer',
        text: 'Nic do ustawiania. Serwer trzyma to, co udostępnia, w folderze świata, więc po restarcie wszystko nadal tam jest.',
      },
      see: {
        title: 'Gracze z modem widzą wszystkich',
        text: 'Każdego gracza w każdej odległości, z jego skórką, zbroją i wierzchowcem, i stworzenia wokół niego, nawet te, których nigdy nie spotkali.',
      },
    },
    matrixTitle: 'Co widzisz, zależnie od miejsca gry',
    matrixText:
      'W grze jednoosobowej działa wszystko. Na serwerze resztę robi mod zainstalowany na serwerze.',
    matrixLabel: 'Funkcje według miejsca gry',
    feature: 'Funkcja',
    places: ['Gra jednoosobowa', 'Świat w sieci LAN', 'Serwer z modem', 'Serwer bez moda'],
    rows: {
      mobs: 'Stworzenia na horyzoncie',
      players: 'Gracze w każdej odległości',
      offline: 'Wylogowani gracze',
      birds: 'Ptaki',
    },
    cells: {
      mobsMet: 'Tylko spotkane stworzenia',
      offlineEven: 'Nawet ci, którzy wyszli przed twoim dołączeniem',
      offlineSeen: 'Tylko ci, którzy wyszli na twoich oczach',
    },
    yes: 'Tak',
    no: 'Nie',
    noOthers: 'Brak innych graczy',
    notApplicable: 'Nie dotyczy',
    notes: {
      lan: {
        title: 'LAN: nic do instalowania',
        text: 'Świat otwarty w sieci LAN udostępnia wszystko przez grę hosta.',
      },
      join: {
        title: 'Każdy może dołączyć',
        text: 'Gracze bez moda nadal mogą dołączyć. Serwer nic im nie wysyła.',
      },
      tell: {
        title: 'Uprzedź graczy',
        text: 'Serwer udostępnia pozycję każdego gracza tym graczom, którzy mają moda.',
      },
      datapack: {
        title: 'Masz jeszcze paczkę danych?',
        text: 'Usuń ją z folderu datapacks świata: mod na serwerze ją zastępuje.',
      },
    },
  },

  compatibility: {
    eyebrow: 'Kompatybilność',
    title: 'Stworzony dla dalekiego terenu.',
    accent: 'Bez niego też dobrze.',
    text: 'Living Horizon sam wykrywa Distant Horizons lub Voxy i rysuje stworzenia oraz graczy prosto na ich terenie. Bez nich utrzymuje świat przy życiu poza twoim zasięgiem renderowania.',
    works: 'Działa',
    cards: {
      dh: {
        text: 'Stworzenia i gracze są rysowani na jego dalekim terenie i chowają się za jego wzgórzami. Od Distant Horizons 2.3.',
        link: 'Pobierz Distant Horizons',
      },
      voxy: {
        text: 'Horyzont terenu Voxy ożywa: pasące się zwierzęta, dalekie wioski, gracze w drodze.',
        link: 'Pobierz Voxy',
      },
      vanilla: {
        title: 'Vanilla',
        text: 'Mod dalekiego terenu nie jest potrzebny. Graj z niskim zasięgiem renderowania i symulacji, a i tak zobaczysz żywy świat.',
      },
    },
    extras: [
      'Paczki shaderów Iris (Photon, Complementary…)',
      'Ten sam jar na serwerach, albo dołączaj bez niego do dowolnego serwera',
      'Opcje w Ustawieniach grafiki Sodium (0.8+)',
    ],
    matrixTitle: 'Wersje gry i loadery',
    matrixText: 'Jeden jar na wersję gry i loader.',
    builds: (builds: number, range: string) =>
      p(builds, {
        one: `{n} build, dla wersji ${range}.`,
        few: `{n} buildy, dla wersji ${range}.`,
        many: `{n} buildów, dla wersji ${range}.`,
        other: `{n} buildu, dla wersji ${range}.`,
      }),
    keyUntested: 'Uruchamia się, potrzebni testerzy',
    table: 'Tabela kompatybilności',
    untested: 'Uruchamia się w grze, ale nikt jeszcze nie widział, jak rysuje w świecie',
    noBuild: 'Brak buildu',
    notAvailable: 'Niedostępne',
    fallback: (range: string) =>
      `Minecraft ${range} na Fabric, Quilt, NeoForge (1.20.6 i nowsze) i Forge.`,
    fullTable: 'Pełna tabela na GitHubie',
    loaders: {
      fabric: 'Z Fabric API. Mod Menu opcjonalnie.',
      quilt: 'Z Fabric API (QFAPI).',
      neoforge: 'Od Minecraft 1.20.6, nic więcej nie trzeba.',
      forge: 'Nic więcej nie trzeba.',
    },
  },

  performance: {
    eyebrow: 'Wydajność',
    title: 'Żywy horyzont, który',
    accent: 'oddaje ci klatki.',
    design: {
      eyebrow: 'Zoptymalizowane rysowanie',
      title: 'Żywy horyzont, który',
      accent: 'nie zjada ci klatek.',
      text: 'Living Horizon od początku projektowano tak, by był lekki: dalekie postacie są rysowane tanim sposobem i tylko wtedy, gdy je widać. Dzięki temu możesz zmniejszyć zasięg renderowania i symulacji, a świat nadal żyje.',
      cards: {
        pictures: {
          title: 'Lekkie obrazy z daleka',
          text: 'Od pewnej odległości daleka postać jest rysowana jako płaski obraz samej siebie zamiast pełnego modelu. W tym rozmiarze wygląda tak samo, a kosztuje ułamek pracy.',
        },
        hidden: {
          title: 'Ukryte znaczy pominięte',
          text: 'Stworzenia za dalekim terenem w ogóle nie są rysowane, a animacje zatrzymują się, gdy postać jest za mała lub za daleko, by to zauważyć.',
        },
        presets: {
          title: 'Poziomy jakości',
          text: 'Niski, Normalny, Wysoki i Ultra jednym ruchem ustawiają liczbę stworzeń, ich zasięg i ptaki. Wartości domyślne to wyważony wybór.',
        },
        server: {
          title: 'Lekki dla serwera',
          text: 'Każda animacja działa w grach graczy. Serwer z modem tylko udostępnia pozycje.',
        },
      },
    },
    numbers: 'W liczbach',
    measured: 'Zmierzone przez graczy i autora; konfiguracja jest pod każdą wartością.',
    noNumbers: {
      before:
        'Żadnych zmyślonych liczb: wartości pojawią się, gdy spłyną prawdziwe pomiary. Wbudowany panel debugowania (',
      after: ') pokazuje własny koszt moda na tik i na klatkę.',
    },
    slots: {
      fps: { label: 'Zysk FPS', hint: 'mod rysuje dal zamiast gry' },
      mobs: { label: 'Stworzenia na horyzoncie', hint: 'rysowane naraz' },
      distance: { label: 'Pokryty dystans', hint: 'poza zasięgiem renderowania' },
      frame: { label: 'Koszt klatki', hint: 'z panelu debugowania' },
    },
    setups: {
      fps: '120 → 150 FPS przy tym samym widoku w dal: krótszy zasięg renderowania, a dalej stworzenia rysuje Living Horizon, w porównaniu z grą, która sama rysuje tak daleko. Zmierzone przez autora.',
    },
    pending: (hint: string) => `Pomiar wkrótce · ${hint}`,
    share: 'Masz pomiar ze swojego sprzętu? Podziel się nim',
  },

  testers: {
    eyebrow: 'Obecnie w fazie beta',
    title: 'Pomóż ożywić horyzont.',
    lede: 'Living Horizon jest młody i działa w wielu kombinacjach: wersje gry, loadery, wersje Distant Horizons i Voxy, paczki shaderów, inne mody. Nie wszystkie zostały już sprawdzone. Jeśli w niego grasz, daj znać, jak działa, dobrze czy źle: każde zgłoszenie się liczy.',
    asks: [
      'Twoja wersja Minecrafta i loader',
      'Distant Horizons lub Voxy i ich wersja',
      'Paczka shaderów, jeśli jest (Photon, Complementary…)',
      'Gra jednoosobowa, LAN czy serwer, z modem czy bez',
      'Zrzut ekranu tego, co widzisz',
    ],
    report: 'Zgłoś kompatybilność',
    discord: 'Dołącz do Discorda',
    issue: 'Otwórz zgłoszenie',
    status: 'Stan testów',
    waiting: (builds: number) =>
      p(builds, {
        one: 'z {n} buildu wciąż bez pierwszego testera',
        few: 'z {n} buildów wciąż bez pierwszego testera',
        many: 'z {n} buildów wciąż bez pierwszego testera',
        other: 'z {n} buildu wciąż bez pierwszego testera',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, {
        one: '{n} build widziany w działaniu',
        few: '{n} buildy widziane w działaniu',
        many: '{n} buildów widzianych w działaniu',
        other: '{n} buildu widzianego w działaniu',
      })}, ${p(waiting, { one: '{n} czeka', few: '{n} czekają', many: '{n} czeka', other: '{n} czeka' })}`,
    seen: 'Widziane w działaniu',
    yours: 'Czeka na ciebie',
    wanted: 'Najbardziej poszukiwane',
    every: 'Każda',
    everyRest: 'konfiguracja mówi nam coś nowego',
    loading: 'Nieprzetestowane kombinacje pojawią się tu, gdy tylko wczytają się dane projektu.',
  },

  contribute: {
    eyebrow: 'Współtwórz',
    title: 'Twórz go z nami.',
    accent: 'AI mile widziane.',
    text: 'Living Horizon powstaje w jednym miejscu: w swoim repozytorium na GitHubie. Kod, poprawki i tłumaczenia trafiają tam jako pull requesty.',
    steps: {
      talk: {
        title: 'Najpierw porozmawiaj',
        text: 'Przy wszystkim większym niż drobna poprawka otwórz zgłoszenie, żeby ustalić kierunek, zanim praca zostanie wykonana.',
      },
      pr: {
        title: 'Otwórz pull request',
        text: 'Pracuj na gałęzi feature/* lub fix/* i kieruj ją do develop. Commity piszemy po angielsku, w formacie conventional commits.',
      },
      build: {
        title: 'Zbuduj i przetestuj',
        text: 'Jeden build Gradle kompiluje mod i uruchamia testy. CI robi to też przy każdym pull requeście.',
      },
      credit: {
        title: 'Zostań wymieniony',
        text: 'Dopisz się do CREDITS.md, a jeśli gracze zobaczą zmianę, dodaj też linijkę do listy zmian.',
      },
    },
    aiTitle: 'Używasz AI? Śmiało.',
    aiText:
      'AI jest częścią tego, jak powstaje ten projekt, i bez problemu możesz z niej korzystać przy swoim wkładzie. Po prostu nie przestawaj myśleć o tym, co pisze: przeczytaj, zrozum i przetestuj swoją zmianę, zanim otworzysz pull request.',
    claude: {
      before: 'Claude sprawdza się tu najlepiej: plik',
      between: 'i umiejętności z',
      after: 'czyta sam.',
    },
    terms: {
      before: 'Otwierając pull request, akceptujesz punkt 3',
      link: 'licencji',
      after:
        ': zachowujesz prawa autorskie i pozostajesz wymieniony jako współtwórca, cokolwiek wydarzy się później.',
    },
    guide: 'Przeczytaj przewodnik dla współtwórców',
    issues: 'Otwarte zgłoszenia',
  },

  changelog: {
    eyebrow: 'Najnowsze zmiany',
    title: 'Często wydajemy,',
    accent: 'szybko poprawiamy.',
    text: 'Prosto z listy zmian projektu na GitHubie.',
    textEnglish: 'Prosto z listy zmian projektu na GitHubie, po angielsku.',
    latest: 'Najnowsza',
    release: 'Wydanie',
    sides: { server: 'Serwer', client: 'Klient' },
    kinds: { new: 'Nowe', improved: 'Ulepszone', fixed: 'Naprawione' },
    more: (n: number) =>
      p(n, {
        one: 'Pokaż jeszcze {n} zmianę',
        few: 'Pokaż jeszcze {n} zmiany',
        many: 'Pokaż jeszcze {n} zmian',
        other: 'Pokaż jeszcze {n} zmiany',
      }),
    failed: 'Nie udało się teraz wczytać listy zmian. Zawsze jest dostępna na GitHubie.',
    full: 'Zobacz pełną listę zmian na GitHubie',
    releases: 'Wszystkie wydania',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pytania?',
    accent: 'Odpowiedzi.',
    text: 'O to gracze pytają najczęściej. O wszystko inne zapytaj na Discordzie.',
    groups: {
      how: 'Jak to działa',
      compatibility: 'Kompatybilność',
      performance: 'Wydajność i ustawienia',
      multiplayer: 'Gra wieloosobowa',
      downloads: 'Pobieranie i licencja',
      ai: 'AI',
    },
    questions: questions({
      visual: {
        q: 'Czy to tylko efekt wizualny? Czy psuje farmy stworzeń?',
        a: [
          [
            'To tylko efekt wizualny, bez AI. Prawdziwe stworzenia działają tak jak bez moda, więc farmy, pojawianie się stworzeń i ich limit się nie zmieniają. Dalekiego stworzenia nie da się uderzyć.',
          ],
        ],
      },
      real: {
        q: 'Czy dalekie stworzenia są prawdziwe, czy rozmieszczone losowo?',
        a: [
          [
            'To prawdziwe stworzenia, tam, gdzie twoja gra lub serwer ostatnio je widziały. Takie, które od tego czasu zginęło lub zniknęło, może być nadal widoczne, dopóki się do niego nie zbliżysz. Wtedy zostaje zapomniane.',
          ],
        ],
      },
      simulation: {
        q: 'Czym to się różni od większego zasięgu symulacji lub odległości renderowania bytów?',
        a: [
          [
            'Przy większym zasięgu symulacji serwer obsługuje więcej prawdziwych stworzeń, co dużo kosztuje, a i tak wysyła je tylko do pewnej odległości. Living Horizon rysuje kopie, których serwer nie obsługuje. Odtwarzają one gotowe animacje, a z daleka zmieniają się w płaskie obrazy (',
            { em: 'Uproszczone byty' },
            ').',
          ],
        ],
      },
      range: {
        q: 'Jak daleko widać stworzenia i graczy?',
        a: [
          [
            'Stworzenia: domyślnie 512 bloków, a ',
            { em: 'Zasięg render. stworzeń' },
            ' można ustawić aż na ',
            { em: 'Bez limitu' },
            '. Gracze: domyślnie w każdej odległości, którą może ograniczyć ',
            { em: 'Zasięg render. graczy' },
            '. Stworzenie pojawia się dopiero wtedy, gdy twoja gra lub serwer je zobaczy.',
          ],
        ],
      },
      mods: {
        q: 'Czy działa z moim modem?',
        a: [
          [
            'Najpewniej tak. Voxy, Distant Horizons, Sodium, Iris i paczki shaderów z nim działają (zobacz ',
            { link: 'compatibilitySection', text: 'Kompatybilność' },
            '). Living Horizon dodaje tylko własne figury: nie zmienia tego, jak inne mody rysują świat. Mody jeszcze nieprzetestowane są na GitHubie oznaczone etykietą ',
            { link: 'modCompatibility', text: 'mod compatibility' },
            '. Jeśli coś się psuje, otwórz ',
            { link: 'issues', text: 'zgłoszenie' },
            ' z nazwą i wersją moda.',
          ],
        ],
      },
      modMobs: {
        q: 'Czy stworzenia z innych modów są widoczne z daleka?',
        a: [
          [
            'Tak, o ile korzystają z systemu bytów samego Minecrafta. Jeśli byty jakiegoś moda działają zbyt inaczej, poproś o ich obsługę w ',
            { link: 'issues', text: 'zgłoszeniu' },
            ' lub na serwerze ',
            { link: 'discord', text: 'Discord' },
            '.',
          ],
        ],
      },
      farTerrain: {
        q: 'Czy potrzebuję Voxy albo Distant Horizons?',
        a: [
          [
            'Nie. Bez nich dalekie stworzenia i gracze są widoczni na terenie samej gry, aż do granicy twojego zasięgu renderowania. Z jednym z nich widać ich także na jego dalekim terenie.',
          ],
        ],
      },
      frameRate: {
        q: 'Czy obniży mi liczbę FPS?',
        a: [
          [
            'Rysowanie większej liczby bytów kosztuje FPS. Jeśli gra zwalnia, zostaw włączone ',
            { em: 'Uproszczone byty' },
            ' i wybierz niższą jakość w opcji ',
            { em: 'Domyślne' },
            '. Ustawienie zarówno ',
            { em: 'Maks. stworzeń' },
            ', jak i ',
            { em: 'Zasięg render. stworzeń' },
            ' na ',
            { em: 'Bez limitu' },
            ' może spowodować awarię gry.',
          ],
        ],
      },
      choose: {
        q: 'Czy mogę wybrać, co jest pokazywane?',
        a: [
          [
            'Tak. ',
            { em: 'Pokazuj stworzenia' },
            ', ',
            { em: 'Pokazuj graczy' },
            ', ',
            { em: 'Gracze offline' },
            ' i ',
            { em: 'Pokazuj ptaki' },
            ' włączają lub wyłączają każdą z części. W ',
            { em: 'Stworzenia i byty…' },
            ' wybierasz stworzenie po stworzeniu.',
          ],
        ],
      },
      world: {
        q: 'Czy zmienia mój świat albo wczytuje chunki?',
        a: [
          [
            'Nie. Niczego w twoim świecie nie zmienia i nie wczytuje żadnego chunka. To, co zapamiętuje, trzyma we własnych plikach: w folderze ',
            { code: 'config' },
            ', a to, co udostępnia serwer, w ',
            { code: 'livinghorizon-positions.dat' },
            ' w folderze świata. Po usunięciu moda twój świat zostaje taki, jaki był.',
          ],
          ['Na serwerze mod wysyła pozycje tylko graczom, którzy go mają.'],
        ],
      },
      server: {
        q: 'Czy serwer potrzebuje moda?',
        a: [
          [
            'Nie. Prawie wszystko działa w grze jednoosobowej, a z modem możesz dołączyć do każdego serwera. Ale gracze w każdej odległości wymagają moda na serwerze, a serwer udostępnia wtedy też więcej stworzeń i wylogowanych graczy. Zobacz ',
            { link: 'serversSection', text: 'Gra wieloosobowa' },
            '.',
          ],
        ],
      },
      paper: {
        q: 'Czy działa na serwerach Paper lub Spigot?',
        a: [
          [
            'Możesz na nich grać z modem, jak na każdym serwerze bez niego. Część serwerowa działa tylko na Fabric, Quilt, NeoForge i Forge, więc serwer Paper lub Spigot niczego nie udostępnia. Plugin dla Paper jest omawiany w ',
            { link: 'paperPlugin', text: '#156' },
            '.',
          ],
        ],
      },
      nothing: {
        q: 'Nie widzę dalekich stworzeń ani graczy. Dlaczego?',
        a: [
          {
            list: [
              [
                'Dalecy gracze wymagają moda na serwerze. Jego właściciel może też ograniczyć, kto jest udostępniany (zobacz ',
                { link: 'serverSettings', text: 'ustawienia serwera' },
                ').',
              ],
              ['Na serwerze bez moda widać tylko spotkane przez ciebie stworzenia.'],
            ],
          },
        ],
      },
      cheat: {
        q: 'Czy można nim oszukiwać? Czy jest dozwolony na serwerach?',
        a: [
          [
            'Pokazuje innych graczy tylko tam, gdzie pozwala na to serwer. Dalecy gracze są widoczni tylko na serwerze z modem, a jego właściciel wybiera, co udostępnia: jak daleko, czy tylko członkom drużyny oraz którzy gracze i które wymiary pozostają ukryte. ',
            { code: '"sharePlayers": false' },
            ' wyłącza udostępnianie (zobacz ',
            { link: 'serverSettings', text: 'ustawienia serwera' },
            '). Niewidzialni gracze i gracze w trybie obserwatora nigdy nie są udostępniani. Skradający się gracze na razie tak (',
            { link: 'sneaking', text: '#269' },
            ').',
          ],
          [
            'Na innych serwerach widzisz tylko to, co zobaczyła twoja własna gra. Mod niczego nie wysyła do serwera. Każdy serwer ma jednak własne zasady dotyczące modów: zapytaj jego administrację.',
          ],
        ],
      },
      bedrock: {
        q: 'Czy jest wersja na Bedrock?',
        a: [['Nie. Living Horizon to mod do Minecraft Java Edition.']],
      },
      version: {
        q: 'Moja wersja gry nie jest obsługiwana. Czy będzie?',
        a: [
          [
            'Napisz na serwerze ',
            { link: 'discord', text: 'Discord' },
            ', na jakiej wersji i jakim loaderze grasz. To pomaga wybrać, co będzie następne.',
          ],
        ],
      },
      modpack: {
        q: 'Czy mogę dodać go do modpacka?',
        a: [['Tak. Użyj oficjalnego pliku i podaj autora.']],
      },
      abandoned: {
        q: 'Co, jeśli projekt zostanie porzucony?',
        a: [
          [
            'Licencja to przewiduje. Gdy projekt zostanie uznany za porzucony (jego repozytorium zostanie zarchiwizowane albo jego README tak powie), jego licencja zmienia się w GPL: każdy może kontynuować projekt, podając autorów. Zobacz punkt 5 ',
            { link: 'license', text: 'licencji' },
            '.',
          ],
        ],
      },
      ai: {
        q: 'Czy powstał z pomocą AI?',
        a: [
          [
            'Tak. Jestem clixmods, jego autorem: full-stack developerem specjalizującym się w grach wideo, i to jest moja praca. Robię mody od 2017 roku: mapy do Call of Duty: Black Ops III, takie jak ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ', z ponad milionem pobrań w Steam Workshop (zobacz moje ',
            { link: 'portfolio', text: 'portfolio' },
            '). Pomysły i techniki pochodzą z tworzenia gier: impostory, LOD-y i gotowe animacje to sztuczki, których gry używają od lat.',
          ],
          [
            'AI pisze dużą część kodu. Ja decyduję, jak działa mod, testuję go w grze i poprawiam to, co nie działa. Bez AI projekt tej wielkości zająłby mi tyle czasu, że w ogóle bym go nie zrobił.',
          ],
        ],
      },
      modrinth: {
        q: 'Czy jest na Modrinth? Dlaczego jest tam ukryty?',
        a: [
          [
            'Jest na ',
            { link: 'modrinth', text: 'Modrinth' },
            ', ale ukryty: nie pojawia się w wyszukiwarce Modrinth. Od sierpnia 2026 ',
            { link: 'modrinthRules', text: 'zasady Modrinth' },
            ' nie pozwalają, by projekt stworzony głównie z pomocą AI był publiczny, więc zespół Modrinth go ukrył. CurseForge, Nexus Mods i ',
            { link: 'releases', text: 'strona wydań' },
            ' mają te same pliki.',
          ],
          [
            'Ukryty nie znaczy niebezpieczny. Chodzi o to, jak mod jest zrobiony, a nie o to, co robi:',
          ],
          {
            list: [
              [
                'Kod jest publiczny: każdy może go przeczytać w jego ',
                { link: 'github', text: 'repozytorium na GitHubie' },
                '.',
              ],
              ['GitHub buduje każde wydanie z tego kodu, a jego logi budowania są publiczne.'],
              [
                'Mod nie ma własnego kodu, który łączy się z internetem. Skórki graczy pochodzą od Mojang przez grę, a link do Discorda otwiera się dopiero po kliknięciu.',
              ],
            ],
          },
        ],
      },
    }),
    ask: 'Zapytaj na Discordzie',
    issue: 'Otwórz zgłoszenie',
  },

  download: {
    eyebrow: 'Pobieranie',
    title: 'Pobierz',
    accent: 'Living Horizon',
    text: {
      before:
        'Za darmo, jeden jar na wersję gry i loader, do twojej gry i na twój serwer. Wrzuć go do folderu',
      after: 'i horyzont ożyje.',
    },
    latest: 'Najnowsze wydanie',
    version: 'Wersja Minecrafta',
    loader: 'Loader',
    needs: { before: '· wymaga', after: '' },
    untested: 'Ten build uruchamia się w grze, ale nikt jeszcze nie zgłosił, że rysuje w świecie',
    jar: 'Pobierz jar',
    releasePage: 'Pobierz ze strony wydania',
    sameJar: 'Ten sam jar trafia na twój serwer',
    curseforge: 'albo pobierz z CurseForge',
    pick: 'Wybierz plik na stronie wydania lub na CurseForge.',
    total: 'Pobrania, wszystkie platformy',
    count: (n: number) =>
      p(n, {
        one: '{n} pobranie',
        few: '{n} pobrania',
        many: '{n} pobrań',
        other: '{n} pobrania',
      }),
    noCount: 'Liczba pobrań niedostępna',
    soon: 'Wkrótce',
    checking: 'Sprawdzanie…',
    everyFile: 'każdy plik',
  },

  footer: {
    tagline: 'Ożywia dal. Mod do Minecraft Java Edition, do twojej gry i na twój serwer.',
    beta: 'Beta: spodziewaj się błędów i daj nam o nich znać.',
    project: 'Projekt',
    docs: 'Dokumentacja',
    license: 'Licencja',
    community: 'Społeczność',
    bug: 'Zgłoś błąd',
    contribute: 'Współtwórz',
    official:
      'Nie jest oficjalnym produktem Minecraft. Niezatwierdzony przez Mojang ani Microsoft i niepowiązany z nimi.',
  },
};
