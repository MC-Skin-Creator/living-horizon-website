import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

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
    mods: 'Mody',
    modpacks: 'Modpacki',
    faq: 'FAQ',
    download: (version: string) => `Pobierz v${version}`,
  },

  pages: {
    mods: {
      title: 'Kompatybilne mody',
      description:
        'Jak Living Horizon działa z innymi modami do Minecrafta: daleki teren, shadery, wydajność i mody ze stworzeniami. Co działa, co ma znany problem, a co czeka na testera.',
    },
    modpacks: {
      title: 'Modpacki',
      description:
        'Modpacki do Minecrafta, które zawierają Living Horizon, z linkami do pobrania na CurseForge i Modrinth.',
    },
    changelog: {
      title: 'Lista zmian',
      description: 'Każda wersja Living Horizon i co się w niej zmieniło.',
    },
  },

  hero: {
    scene:
      'Ilustracja: horyzont o zmierzchu, kanciaste wzgórza, a na nich, daleko, wciąż żyją osadnicy, zwierzęta, jeźdźcy i inni gracze, a nad nimi leci klucz gęsi.',
    news: 'Nowość: stada na ziemiach, których nikt nie zbadał',
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
    text: 'Stworzenia, stada z ziem, których nikt nie zbadał, gracze, także ci wylogowani, i ptaki. Rysuje je twoja własna gra, a całość jest na tyle lekka, że możesz ją zostawić włączoną.',
    offline: '(offline)',
    near: 'Z bliska: pełne stworzenie',
    far: 'Z daleka: płaski obraz',
    /** The button of each card, and the window it opens. */
    more: 'Więcej szczegółów',
    close: 'Zamknij',
    previous: 'Poprzednia funkcja',
    next: 'Następna funkcja',
    items: {
      mobs: {
        title: 'Każde stworzenie, aż po horyzont',
        text: 'Zwierzęta się pasą, osadnicy krążą po odległych wioskach, golemy trzymają wartę. Każde stworzenie, które gra potrafi narysować, także stworzenia i pojazdy z innych modów.',
        points: [
          'Na terenie Voxy, Distant Horizons i innych modów dalekiego terenu albo w samej grze',
          'Ukrywają się za dalekimi wzgórzami, także z paczkami shaderów',
          'Wybierz je w „Stworzenia i byty”',
        ],
        where: 'Wszędzie. Na serwerze z modem nawet te, których jeszcze nie spotkano.',
        details: details([
          {
            title: 'Skąd się biorą',
            body: [
              [
                'To prawdziwe stworzenia, tam, gdzie twoja gra lub serwer ostatnio je widziały. Twoja gra pamięta każde stworzenie, które spotka, a serwer z modem udostępnia stworzenia wokół każdego gracza, więc widzisz też stada, których nigdy nie spotkałeś. Takie, które od tego czasu zginęło lub zniknęło, może być nadal widoczne, dopóki się do niego nie zbliżysz. Wtedy zostaje zapomniane.',
              ],
            ],
          },
          {
            title: 'Na dalekim terenie',
            body: [
              [
                'Z Voxy, Distant Horizons, Lodistance, Far View lub Ecstatic chodzą po jego gruncie, chowają się za jego wzgórzami jak za każdym innym blokiem i znikają w jego mgle. Z Bobby zostają na terenie, który on przechowuje. Bez żadnego z nich są widoczne na terenie samej gry. Zobacz ',
                { link: 'compatibilitySection', text: 'Kompatybilność' },
                '.',
              ],
            ],
          },
          {
            title: 'Z bliska zastępuje je prawdziwe stworzenie',
            body: [
              [
                'Gdy się zbliżasz, kopia wraca tam, gdzie stworzenie widziano ostatnio, a prawdziwe stworzenie zajmuje jej miejsce, gdy serwer je wyśle. Dalekie stworzenia są tylko na pokaz: farmy, pojawianie się stworzeń i ich limit działają tak jak bez moda, a ty nie możesz ich uderzyć.',
              ],
            ],
          },
          {
            title: 'Stworzenia z innych modów',
            body: [
              [
                'Wszystko, co korzysta z systemu bytów samego Minecrafta, jest widoczne z daleka: stworzenia z modów i pojazdy, takie jak samoloty z Immersive Aircraft czy statki z Shippy Ships, tam, gdzie je zostawiłeś.',
              ],
            ],
          },
          {
            title: 'Ustawienia',
            body: [
              {
                list: [
                  [
                    { em: 'Pokazuj stworzenia' },
                    ' i ',
                    { em: 'Pokazuj byty' },
                    ': włączają je lub wyłączają.',
                  ],
                  [{ em: 'Stworzenia i byty…' }, ': wybór stworzenie po stworzeniu.'],
                  [
                    { em: 'Zasięg render. stworzeń' },
                    ' i ',
                    { em: 'Maks. stworzeń' },
                    ': jak daleko i ile naraz.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      unexplored: {
        title: 'Stada na ziemiach, których nikt nie zbadał',
        text: 'Ziemie, na których nigdy nie byłeś, też mają swoje zwierzęta. Mod wylicza z ziarna świata, które z nich gra tam umieści i gdzie.',
        points: [
          'Te same losowania, które gra robi dla każdego nowego chunka',
          'Przez lunetę, tak daleko, jak celujesz',
          'Zgadnij stworzenia: do 1024 chunków wokół ciebie',
        ],
        where: 'W grze jednoosobowej i na serwerach z modem.',
        details: details([
          {
            title: 'Jak zgaduje',
            body: [
              [
                'Gdy gra generuje chunk, rozmieszcza jego pierwsze zwierzęta za pomocą losowań opartych na ziarnie świata i położeniu chunka. Living Horizon wykonuje te same losowania dla chunków, które nie zostały jeszcze wygenerowane, z biomem i terenem, które podaje generator świata: konie na równinach, owce na wzgórzach, mniej więcej tam, gdzie umieści je gra.',
              ],
            ],
          },
          {
            title: 'Przypuszczenie, nie obietnica',
            body: [
              [
                'Teren, który odczytuje, nie ma jeszcze trawy ani drzew. Tam, gdzie gra z tego powodu odrzuca dane miejsce, stada brakuje albo stoi ono gdzie indziej: mniej więcej połowa zgadniętych zwierząt stoi najwyżej dwa bloki od prawdziwych. Zgadniętego stworzenia może tam nie być, gdy dotrzesz.',
              ],
            ],
          },
          {
            title: 'Luneta i Zgadnij stworzenia',
            body: [
              [
                'Spójrz przez lunetę, aby zobaczyć zgadnięte stworzenia tam, gdzie celujesz, bez względu na odległość. ',
                { em: 'Zgadnij stworzenia' },
                ' pokazuje je naraz do 1024 chunków wokół ciebie i zachowuje je na kolejne sesje.',
              ],
            ],
          },
          {
            title: 'Na serwerze',
            body: [
              [
                'Serwer zgaduje je wokół każdego gracza z modem, domyślnie w promieniu 512 bloków (',
                { code: 'seedMobRange' },
                ', maksymalnie 2048). Luneta i ',
                { em: 'Zgadnij stworzenia' },
                ' wymagają ziarna świata: serwer udostępnia je tylko wtedy, gdy jego właściciel włączy ',
                { code: 'shareSeed' },
                ', bo kto zna ziarno, ten zna cały świat (zobacz ',
                { link: 'serverSettings', text: 'ustawienia serwera' },
                ').',
              ],
            ],
          },
          {
            title: 'Ustawienia',
            body: [
              {
                list: [
                  [{ em: 'Zgadnięte stworzenia' }, ': pokazuje je lub ukrywa.'],
                  [{ em: 'Zgadywanie' }, ': jak daleko sięga ', { em: 'Zgadnij stworzenia' }, '.'],
                ],
              },
            ],
          },
        ]),
      },
      players: {
        title: 'Gracze w każdej odległości',
        text: 'Widzisz każdego innego gracza, gdziekolwiek jest na mapie, z jego skórką, zbroją, przedmiotami w ręku i tym, na czym jedzie.',
        points: [
          'Konie, łódki, wagoniki, elytry i wesołe ghasty',
          'Płynnie: serwer udostępnia pozycje pięć razy na sekundę',
          'Gracze bez moda nadal mogą dołączyć',
        ],
        where: 'W sieci LAN i na serwerach z modem.',
        details: details([
          {
            title: 'Jak to działa',
            body: [
              [
                'Serwer z modem pięć razy na sekundę udostępnia, gdzie jest każdy gracz, na czym jedzie i czy szybuje na elytrze. Co pięć sekund dodaje, jak wyglądają najbliżsi: skórkę, zbroję i to, co trzymają w ręku. Twoja gra rysuje ich poza zasięgiem widzenia, razem z nazwą i wierzchowcem.',
              ],
            ],
          },
          {
            title: 'Decyduje właściciel serwera',
            body: [
              [
                'Serwer tworzy ',
                { code: 'config/livinghorizon-server.json' },
                ' przy pierwszym uruchomieniu: jak daleko gracze są udostępniani, czy tylko członkom drużyny, którzy gracze i które wymiary pozostają ukryte. ',
                { code: '"sharePlayers": false' },
                ' wyłącza udostępnianie. Zmiany działają po kilku sekundach, bez restartu (zobacz ',
                { link: 'serverSettings', text: 'ustawienia serwera' },
                ').',
              ],
            ],
          },
          {
            title: 'Nigdy nieudostępniani',
            body: [
              [
                'Gracze w trybie obserwatora i niewidzialni gracze. Skradający się gracze na razie tak (',
                { link: 'sneaking', text: '#269' },
                '). W zasięgu widzenia gracze widzą się nawzajem jak zwykle.',
              ],
            ],
          },
          {
            title: 'Ustawienia',
            body: [
              {
                list: [
                  [{ em: 'Pokazuj graczy' }, ': włącza ich lub wyłącza.'],
                  [{ em: 'Zasięg render. graczy' }, ': jak daleko są widoczni.'],
                  [{ em: 'Wierzchowce i pojazdy' }, ': to, na czym jadą.'],
                ],
              },
            ],
          },
        ]),
      },
      offline: {
        title: 'Wylogowani gracze żyją dalej',
        text: 'Gdy ktoś się wyloguje, kopia z jego nazwą zostaje tam, gdzie skończył grę. Spaceruje, siedzi, łowi ryby, otwiera skrzynie i śpi nocą, dopóki on nie wróci.',
        points: [
          '(offline) przy nazwie i to, kiedy był ostatnio online',
          'Nawet gracze, którzy wyszli przed twoim dołączeniem',
          'Tylko na pokaz: wystarczy w nich wejść, by ich odsunąć',
        ],
        where: 'Wszędzie. Na serwerze z modem każdy gracz, który kiedykolwiek tam grał.',
        details: details([
          {
            title: 'Dzień z ich życia',
            body: [
              {
                list: [
                  [
                    'Za dnia spacerują, siadają albo stoją przy skrzyni, stole rzemieślniczym lub stanowisku pracy.',
                  ],
                  ['Nocą idą do wolnego łóżka i w nim śpią albo zostają na nogach.'],
                  ['Przy wodzie jeden z nich zatrzymuje się na brzegu i przez chwilę łowi ryby.'],
                  [
                    'W deszczu niektórzy chowają się pod dachem lub drzewem i czekają, aż przestanie padać.',
                  ],
                  ['Wieczorem zbierają się przy ognisku lub piecu.'],
                  ['Dwaj stojący blisko siebie podchodzą do siebie i rozmawiają twarzą w twarz.'],
                ],
              },
            ],
          },
          {
            title: 'Zauważają cię',
            body: [
              [
                'Spójrz na jednego z bliska, a odwzajemni spojrzenie. Kucnij przed nim, a on też kucnie. Gdy zbliżają się potwory, dobywają miecza i unoszą tarczę, ale nigdy nie walczą.',
              ],
            ],
          },
          {
            title: 'Tylko na pokaz',
            body: [
              [
                'Świat nie wie, że istnieją: stworzenia ich ignorują, a oni nigdy cię nie blokują ani nie popychają. Wejdź w nich, aby ich odsunąć. Daleko od ciebie dalej spacerują tam, gdzie są.',
              ],
            ],
          },
          {
            title: 'Skąd się biorą',
            body: [
              [
                'Twoja gra pamięta graczy, którzy wylogowali się na twoich oczach. Serwer z modem udostępnia każdego gracza, który kiedykolwiek tam grał, tak jak wyglądał, nawet tych, którzy wyszli przed twoim dołączeniem.',
              ],
            ],
          },
          {
            title: 'Ustawienia',
            body: [
              {
                list: [
                  [
                    { em: 'Gracze offline' },
                    ' i ',
                    { em: 'Maks. offline' },
                    ': czy są widoczni i ilu ich jest.',
                  ],
                  [
                    { em: 'Aktywność offline' },
                    ': ich życie wokół miejsca, w którym się wylogowali.',
                  ],
                  [{ em: 'Promień wędrówki' }, ': jak daleko chodzą, domyślnie 50 bloków.'],
                ],
              },
            ],
          },
        ]),
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
        details: details([
          {
            title: 'Kto gdzie lata',
            body: [
              {
                list: [
                  ['Stada przecinają niebo, gęsi lecą kluczem, ptaki drapieżne krążą.'],
                  ['Mewy lecą wzdłuż wybrzeża i co jakiś czas siadają na plaży.'],
                  [
                    'Gołębie siedzą na wysokich budynkach, rudziki skaczą po polach, sikory trzymają się drzew.',
                  ],
                  ['Kaczki pływają po jeziorach i rzekach. Nocą wylatują nietoperze.'],
                ],
              },
            ],
          },
          {
            title: 'Reagują na ciebie',
            body: [
              [
                'Małe ptaki odlatują, gdy się zbliżasz, i siadają trochę dalej. Kaczki nigdy nie dają ci podejść. Odlatujące ptaki nigdy nie znikają nagle: rozpraszają się i maleją w oddali.',
              ],
            ],
          },
          {
            title: 'Odczytane z terenu',
            body: [
              [
                'To, dokąd leci każdy rodzaj, jest odczytywane z terenu, aż po daleki teren Voxy i Distant Horizons: uprawy dla rudzików, liście dla sikor, woda dla kaczek, plaże dla mew. To tylko obrazy w twojej grze: w świecie nic się nie pojawia.',
              ],
            ],
          },
          {
            title: 'Ustawienia',
            body: [
              {
                list: [
                  [{ em: 'Pokazuj ptaki' }, ': włącza je lub wyłącza.'],
                  [{ em: 'Rodzaje ptaków…' }, ': wybór rodzaj po rodzaju.'],
                  [
                    { em: 'Gęstość ptaków' },
                    ' i ',
                    { em: 'Zasięg ptaków' },
                    ': ile ich jest i jak daleko.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      light: {
        title: 'Lekki z założenia',
        text: 'Dalekie stworzenia nie mają AI: odtwarzają gotowe animacje dopasowane do terenu. Bardzo daleko zmieniają się w płaskie obrazy samych siebie.',
        points: [
          'Stworzenia ukryte za wzgórzami nie są rysowane',
          'Zmniejsz zasięg symulacji i zachowaj żywy świat',
          'Uproszczone stworzenia: dużo więcej stworzeń za tę samą cenę',
        ],
        where: 'Wszystko działa w twojej grze. Serwer tylko udostępnia pozycje.',
        details: details([
          {
            title: 'Bez AI w oddali',
            body: [
              [
                'Dalekie stworzenia chodzą, pasą się i rozglądają dzięki gotowym animacjom dopasowanym do terenu wokół nich. Wylogowani gracze i ptaki działają samodzielnie tylko blisko ciebie.',
              ],
            ],
          },
          {
            title: 'Płaskie obrazy z daleka',
            body: [
              [
                'Wiele gier rysuje dalekie obiekty jako impostory: płaski obraz zamiast modelu 3D. Living Horizon robi to samo z dalekimi stworzeniami, pojazdami i graczami (',
                { em: 'Uproszczone stworzenia' },
                ', ',
                { em: 'Uproszczone byty' },
                ', ',
                { em: 'Uproszczeni gracze' },
                '). W tym rozmiarze wyglądają tak samo, a kosztują ułamek tego. Z paczką shaderów, która czyta mapy normalnych, taką jak Photon, obrazy oświetla paczka (',
                { em: 'Oświetlenie shaderów' },
                ').',
              ],
            ],
          },
          {
            title: 'Ukryte znaczy pominięte',
            body: [
              [
                'Stworzenia za wzgórzami lub dalekim terenem w ogóle nie są rysowane, a animacje zatrzymują się, gdy postać jest za mała, by to zauważyć.',
              ],
            ],
          },
          {
            title: 'Wszystko w twojej grze',
            body: [
              [
                'Twoja gra zajmuje się animacjami, wylogowanymi graczami i ptakami. Serwer z modem tylko udostępnia pozycje, więc niewiele go to kosztuje. Dwaj gracze mogą nawet widzieć to samo dalekie stworzenie robiące różne rzeczy.',
              ],
            ],
          },
          {
            title: 'Poziomy jakości i ustawienia',
            body: [
              [
                'Opcja ',
                { em: 'Domyślne' },
                ' (',
                { em: 'Niski' },
                ', ',
                { em: 'Normalny' },
                ', ',
                { em: 'Wysoki' },
                ', ',
                { em: 'Ultra' },
                ') ustawia wszystko naraz. Wartości domyślne to wyważony wybór, a ',
                { em: 'Przywróć domyślne' },
                ' je przywraca. Ustawienia są na ekranie Opcje, w Mod Menu, w Ustawieniach grafiki Sodium lub pod komendą ',
                { code: '/livinghorizon config' },
                ', w 14 językach.',
              ],
              [
                'Uwaga: ustawienie zarówno ',
                { em: 'Maks. stworzeń' },
                ', jak i ',
                { em: 'Zasięg render. stworzeń' },
                ' na ',
                { em: 'Bez limitu' },
                ' może spowodować awarię gry.',
              ],
            ],
          },
        ]),
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
      unexplored: 'Stada na niezbadanych ziemiach',
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
      install: {
        title: 'Wrzuć jar do folderu mods serwera',
        text: 'Ten sam plik co do twojej gry, a przy Fabric i Quilt także Fabric API. Nic do ustawiania.',
      },
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
    },
  },

  compatibility: {
    eyebrow: 'Kompatybilność',
    title: 'Distant Horizons, Voxy, Ecstatic…',
    accent: 'albo zupełnie bez nich.',
    text: 'Living Horizon sam wykrywa twój mod dalekiego terenu: stworzenia i gracze chodzą po jego gruncie, chowają się za jego wzgórzami i znikają w jego mgle. Bez niego utrzymuje świat przy życiu poza twoim zasięgiem renderowania.',
    /** A card per mod; the names are the mods' own. */
    cards: {
      dh: { text: 'Od wersji 2.3. Stworzenia i gracze na jego terenie, za jego wzgórzami.' },
      voxy: { text: 'Stworzenia i gracze na jego terenie, także z paczkami shaderów.' },
      lodistance: { text: 'Fabric, Minecraft 26.3, z OpenGL i bez shaderów.' },
      farView: {
        text: 'Forge i NeoForge, Minecraft od 1.20.1 do 1.21.4. Stworzenia na jego terenie.',
      },
      ecstatic: {
        text: 'NeoForge, Minecraft 1.21.1, gra jednoosobowa. Stworzenia na jego terenie.',
      },
      bobby: {
        text: 'Stworzenia i gracze na terenie, który przechowuje poza zasięgiem widzenia serwera.',
      },
      iris: { text: 'Paczki shaderów działają, np. Photon i Complementary Unbound.' },
      vanilla: {
        title: 'Vanilla',
        text: 'Mod dalekiego terenu nie jest potrzebny: zmniejsz zasięg renderowania i symulacji, a i tak zobaczysz żywy świat.',
      },
    },
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: 'A twoje inne mody?',
      text: (n: number) =>
        p(n, {
          one: '{n} mod na liście: shadery, wydajność, mody ze stworzeniami. Co działa, a co wciąż czeka na testera.',
          few: '{n} mody na liście: shadery, wydajność, mody ze stworzeniami. Co działa, a co wciąż czeka na testera.',
          many: '{n} modów na liście: shadery, wydajność, mody ze stworzeniami. Co działa, a co wciąż czeka na testera.',
          other:
            '{n} moda na liście: shadery, wydajność, mody ze stworzeniami. Co działa, a co wciąż czeka na testera.',
        }),
      link: 'Zobacz kompatybilne mody',
    },
    matrixTitle: 'Wersje gry i loadery',
    matrixText: 'Jeden jar na wersję gry i loader.',
    /** Next to the "?" of the table: a link to report a build. */
    report: 'Sprawdziłeś któryś? Zgłoś to',
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

  /** Testing, contributing and the Discord, in one section. */
  help: {
    eyebrow: 'Dołącz',
    title: 'Beta,',
    accent: 'tworzona razem z graczami.',
    test: {
      title: 'Przetestuj u siebie',
      text: 'Daj znać, jak działa z twoją wersją gry, loaderem i modami, dobrze czy źle. Każde zgłoszenie pomaga.',
      /** Under the text, once the builds are known. */
      untested: (n: number) =>
        p(n, {
          one: '{n} build wciąż czeka na pierwszego testera',
          few: '{n} buildy wciąż czekają na pierwszego testera',
          many: '{n} buildów wciąż czeka na pierwszego testera',
          other: '{n} buildu wciąż czeka na pierwszego testera',
        }),
      report: 'Zgłoś kompatybilność',
    },
    code: {
      title: 'Współtwórz',
      text: 'Kod, poprawki i tłumaczenia trafiają na GitHuba jako pull requesty. AI jest mile widziane, o ile przeczytasz, zrozumiesz i przetestujesz to, co napisze.',
      guide: 'Przewodnik dla współtwórców',
    },
    discord: {
      title: 'Dołącz do Discorda',
      text: 'Pytania, nowości, zrzuty ekranu i pomoc, razem z autorem i innymi graczami.',
      join: 'Dołącz do Discorda',
    },
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
    /** The link to the changelog page, on the home page. */
    every: 'Zobacz wszystkie wersje',
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
            '. Gracze, łódki i pojazdy: domyślnie w każdej odległości, którą mogą ograniczyć ',
            { em: 'Zasięg render. graczy' },
            ' i ',
            { em: 'Zasięg render. bytów' },
            '. Stworzenie pojawia się dopiero wtedy, gdy twoja gra lub serwer je zobaczy.',
          ],
        ],
      },
      mods: {
        q: 'Czy działa z moim modem?',
        a: [
          [
            'Najpewniej tak. Voxy, Distant Horizons, Lodistance, Ecstatic, Bobby, Sodium, Iris i paczki shaderów z nim działają (zobacz ',
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
        q: 'Czy potrzebuję Voxy, Distant Horizons, Lodistance albo Ecstatic?',
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
            { em: 'Uproszczone stworzenia' },
            ' oraz ',
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
            'Tak, częściowo. AI pisze dużą część kodu. Autor, clixmods, decyduje, jak działa mod, testuje każdą zmianę w grze i poprawia to, co nie działa. Bez AI projekt tej wielkości by nie powstał.',
          ],
          [
            'Pomysły pochodzą z tworzenia gier, czym clixmods zajmuje się zawodowo: impostory, LOD-y i gotowe animacje to sztuczki, których gry używają od lat. clixmods robi mody od 2017 roku, na przykład mapę do Call of Duty: Black Ops III ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ', pobraną ponad milion razy w Steam Workshop (zobacz jego ',
            { link: 'portfolio', text: 'portfolio' },
            ').',
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
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) =>
      p(n, {
        one: '{n} modpack',
        few: '{n} modpacki',
        many: '{n} modpacków',
        other: '{n} modpacka',
      }),
  },

  modpacks: {
    eyebrow: 'Modpacki',
    title: 'Już w',
    accent: 'modpackach.',
    text: 'Paczki zawierające Living Horizon. Zrobiłeś własną? Pojawi się tutaj sama.',
    by: (authors: string) => `autor: ${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `Pobierz z ${platform}`,
    none: 'Żaden modpack nie zawiera jeszcze Living Horizon. Twój może być pierwszy.',
    loading: 'Modpacki pojawią się tu za chwilę.',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) =>
      p(n, {
        one: 'Przejdź do strony modpacków',
        few: 'Zobacz wszystkie {n} modpacki',
        many: 'Zobacz wszystkie {n} modpacków',
        other: 'Zobacz wszystkie {n} modpacka',
      }),
  },

  mods: {
    eyebrow: 'Kompatybilność',
    title: 'Dogaduje się',
    accent: 'z twoimi modami.',
    text: 'Prosto z projektu na GitHubie, aktualne po każdym teście: co działa, co ma znany problem, a co wciąż czeka, aż ktoś to wypróbuje. Notatki są po angielsku.',
    search: 'Szukaj moda',
    filter: 'Filtruj według stanu',
    all: 'Wszystkie',
    status: { works: 'Działa', issue: 'Znany problem', untested: 'Jeszcze nietestowany' },
    /** The heading of the shader packs, after the mods. */
    shaders: 'Paczki shaderów',
    /** The note of every mod still waiting for a tester, next to the link to its issue. */
    untested: 'Nikt nam jeszcze nie powiedział, jak działa. Sprawdziłeś? Napisz w jego zgłoszeniu.',
    issue: (n: number) => `Zgłoszenie #${n}`,
    none: 'Żaden mod nie pasuje do wyszukiwania.',
    missing: {
      title: 'Brakuje moda?',
      text: 'Napisz nam, jak Living Horizon z nim działa, dobrze czy źle: każde zgłoszenie pomaga.',
      link: 'Zgłoś moda',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: 'Nie udało się teraz wczytać listy. Zawsze jest na GitHubie.',
    failedLink: 'Zobacz listę na GitHubie',
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
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: 'Lista modpacków z', after: '' },
    official:
      'Nie jest oficjalnym produktem Minecraft. Niezatwierdzony przez Mojang ani Microsoft i niepowiązany z nimi.',
  },
};
