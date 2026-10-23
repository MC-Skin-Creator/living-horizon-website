import { Messages } from './en';
import { plural } from './plural';

const p = plural('ko');

export const ko: Messages = {
  meta: {
    title: 'Living Horizon: 먼 곳에 생명을 불어넣다',
    description:
      'Living Horizon은 몹, 주민, 새, 다른 플레이어가 렌더 거리 너머, 그리고 Distant Horizons와 Voxy의 원거리 지형 위에서도 지평선까지 계속 살아 있게 해 주는 Minecraft 모드입니다. 싱글플레이, LAN, 서버 지원. Fabric, Quilt, NeoForge, Forge. 현재 베타입니다.',
  },

  language: {
    label: '언어',
  },

  common: {
    download: '다운로드',
    becomeTester: '테스터 되기',
    needsTesters: '테스터 필요',
    tested: '테스트됨',
    seenWorking: '세계에서 작동 확인됨',
    new: '신규',
    beta: '베타',
    changelog: '변경 내역',
    logo: (name: string) => `${name} 로고`,
  },

  nav: {
    label: '메인',
    tag: '베타',
    menu: '메뉴',
    features: '기능',
    compatibility: '호환성',
    testers: '테스터',
    contribute: '기여하기',
    download: (version: string) => `v${version} 다운로드`,
  },

  hero: {
    scene:
      '일러스트: 블록 언덕이 이어진 해 질 녘의 지평선. 멀리서 주민, 동물, 말 탄 사람, 다른 플레이어가 여전히 살아 움직이고, 하늘에는 기러기 떼가 날아갑니다.',
    news: '이제 서버에서도 작동합니다',
    tagline: '먼 곳에',
    taglineAccent: '생명을 불어넣다.',
    lede: {
      before: '동물, 주민, 새, 다른 플레이어가 렌더 거리 훨씬 너머의 지평선에서 계속 살아갑니다.',
      between: '또는',
      after:
        '의 원거리 지형 위에서도, 바닐라에서도 마찬가지입니다. 싱글플레이, LAN, 서버 모두에서 작동합니다.',
    },
    facts: '프로젝트 한눈에 보기',
    latest: '최신',
    updated: '업데이트',
    downloads: '다운로드 수',
    minecraft: 'Minecraft',
    loaders: '로더',
  },

  concept: {
    eyebrow: '하는 일',
    title: '렌더 거리는 끝나도,',
    accent: '세계는 끝나지 않습니다.',
    text: 'Minecraft는 몇 청크만 떨어져도 몹과 플레이어를 그리지 않습니다. 원거리 지형 모드는 땅을 지평선까지 넓혀 주지만, 그곳은 텅 비어 있고 움직임이 없습니다. Living Horizon이 그곳을 다시 생명으로 채웁니다.',
    diagram:
      '도표: Living Horizon이 없으면 몹은 렌더 거리 안에만 존재하고 원거리 지형은 비어 있습니다. 있으면 몹, 플레이어, 새가 지평선까지 원거리 지형 전체에서 살아갑니다.',
    you: '나',
    renderDistance: '렌더 거리',
    farTerrain: '원거리 지형 ·',
    horizon: '지평선',
    without: { before: 'Living Horizon', mark: '없음', after: '' },
    with: { before: 'Living Horizon', mark: '있음', after: '' },
    empty: '비어 있음',
  },

  features: {
    eyebrow: '기능',
    title: '렌더 거리 너머에서',
    accent: '살아 있는 모든 것.',
    text: '몹, 플레이어, 접속을 종료한 플레이어, 그리고 새. 모두 내 게임이 직접 그리며, 늘 켜 두어도 될 만큼 가볍게 유지됩니다.',
    offline: '(오프라인)',
    near: '가까이: 완전한 몹',
    far: '멀리: 평평한 그림',
    preset: '사전 설정',
    presets: ['낮음', '보통', '높음', '울트라'],
    mobDistance: '몹 렌더 거리',
    items: {
      mobs: {
        title: '모든 몹을, 지평선까지',
        text: '동물은 풀을 뜯고, 주민은 먼 마을을 돌아다니고, 골렘은 경계를 섭니다. 게임이 그릴 수 있는 몹이라면 다른 모드의 몹도 모두 표시합니다.',
        points: [
          'Voxy와 Distant Horizons 지형 위에서도, 바닐라에서도',
          '셰이더 팩을 써도 먼 언덕 뒤에 가려집니다',
          '"몹 및 개체"에서 원하는 몹을 고를 수 있습니다',
        ],
        where: '어디서나. 모드가 있는 서버에서는 만난 적 없는 몹까지.',
      },
      players: {
        title: '거리와 상관없이 보이는 플레이어',
        text: '다른 모든 플레이어가 지도 어디에 있든 보입니다. 스킨, 갑옷, 들고 있는 아이템, 타고 있는 것까지.',
        points: [
          '말, 보트, 광산 수레, 행복한 가스트',
          '부드러운 움직임: 서버가 1초에 5번 위치를 공유합니다',
          '모드가 없는 플레이어도 접속할 수 있습니다',
        ],
        where: 'LAN과 모드가 있는 서버에서.',
      },
      offline: {
        title: '접속을 종료한 플레이어도 계속 살아갑니다',
        text: '누군가 접속을 종료하면, 그 이름을 단 분신이 떠난 자리에 남습니다. 산책하고, 앉고, 상자를 열고, 밤에는 잠을 자며 그 사람이 돌아올 때까지 지냅니다.',
        points: [
          '이름 뒤에 (오프라인)과 마지막으로 본 시각',
          '내가 접속하기 전에 떠난 플레이어도',
          '보여 주기용일 뿐: 나나 몹을 절대 막지 않습니다',
        ],
        where: '어디서나. 모드가 있는 서버에서는 그곳에서 플레이한 적 있는 모든 플레이어가.',
      },
      birds: {
        title: '하늘을 나는 새',
        text: '새 떼, V자로 나는 기러기, 맹금류, 갈매기, 오리, 박쥐가 땅 위를 날아다니고, 멀리서도 보입니다.',
        points: [
          '나무, 지붕, 밭, 해변에 내려앉습니다',
          '오리는 연못에서 헤엄칩니다',
          '가까이서는 작은 3D 모델, 멀리서는 평평한 그림',
        ],
        where: '어디서나, 설정할 것이 없습니다.',
      },
      light: {
        title: '가볍게 유지되도록 설계',
        text: '멀리 있는 몹에는 AI가 없습니다: 지면에 맞춘 미리 만든 애니메이션을 재생할 뿐입니다. 아주 멀어지면 자신의 평평한 그림이 됩니다.',
        points: [
          '언덕 뒤에 가려진 몹은 그리지 않습니다',
          '시뮬레이션 거리를 낮춰도 살아 있는 세계 그대로',
          '간소화된 개체: 같은 부담으로 훨씬 많은 몹을',
        ],
        where: '모든 것이 내 게임에서 실행됩니다. 서버는 위치만 공유합니다.',
      },
      settings: {
        title: '찾는 곳에 있는 설정',
        text: '설정 화면, Mod Menu, Sodium의 비디오 설정, 또는 /livinghorizon config에서 열 수 있습니다. 설정마다 무엇을 하는지 설명이 있습니다.',
        points: [
          '낮음, 보통, 높음, 울트라 사전 설정으로 한 번에',
          '14개 언어 지원',
          '"기본값으로 초기화"로 모두 원래대로',
        ],
        where: '기본값이 균형 잡힌 선택입니다.',
      },
    },
  },

  compare: {
    eyebrow: '전/후 비교',
    title: '같은 풍경.',
    accent: '모드 하나.',
    text: '손잡이를 드래그하세요. 왼쪽은 원거리 지형은 있지만 텅 비어 있습니다. 오른쪽은 Living Horizon이 생명을 되살린 모습입니다.',
    tabs: '장면',
    shots: {
      shaders: {
        title: '게임 내 · 셰이더',
        text: '셰이더 팩 사용, 렌더 및 시뮬레이션 거리 12: 먼 언덕에 동물들이 돌아왔습니다.',
      },
      vanilla: {
        title: '게임 내 · 바닐라',
        text: '셰이더 없음, 렌더 및 시뮬레이션 거리 12: 소와 말 떼가 먼 평원을 채웁니다.',
      },
    },
    scenes: {
      village: {
        title: '평원의 마을',
        text: '먼 마을 주변의 주민, 골렘, 풀을 뜯는 동물들.',
      },
      ridge: {
        title: '능선 위의 기수',
        text: '언덕 위의 다른 플레이어와 그들의 말, 이름표까지 그대로.',
      },
      coast: {
        title: '한낮의 해안',
        text: '바다에 뜬 보트, 먼 해안의 주민, 물 위를 나는 갈매기.',
      },
    },
    legendNear: '렌더 거리: 어느 쪽이든 살아 있음',
    legendFar: '원거리 지형: 모드 없이는 비어 있음',
    note: {
      before:
        '효과를 표현한 일러스트입니다. 앞쪽 탭은 실제 게임 스크린샷입니다. 멋진 스크린샷이 있나요?',
      link: 'Discord에 공유하세요',
      after: '.',
    },
    shotWithout: (text: string) => `Living Horizon 없이 찍은 게임 스크린샷. ${text}`,
    shotWith: (text: string) => `Living Horizon을 켜고 찍은 게임 스크린샷. ${text}`,
    sceneWithout: (text: string) => `Living Horizon 없음: ${text}`,
    sceneWith: (text: string) => `Living Horizon 있음: ${text}`,
    badgeWithout: '모드 없음',
    badgeWith: 'Living Horizon 있음',
    slider: '움직여서 Living Horizon이 없을 때와 있을 때의 풍경을 비교하세요',
  },

  servers: {
    eyebrow: '멀티플레이',
    title: '서버에 설치하세요.',
    accent: '모두가 모두를 봅니다.',
    text: '같은 jar가 서버에서도 작동합니다. 서버는 모든 플레이어의 위치, 그 주변의 몹, 접속을 종료한 플레이어를 모드가 있는 모든 사람과 공유합니다.',
    cover: '플레이어와 몹 머리가 가득 모인 앞에 놓인 Living Horizon 타이틀.',
    since: (version: string) => `서버 지원, ${version}부터`,
    steps: {
      jar: {
        title: '서버의 mods 폴더에 jar 넣기',
        text: '게임에 쓰는 것과 같은 파일을 서버의 Minecraft 버전과 로더에 맞춰 넣고, Fabric과 Quilt에서는 Fabric API도 함께 넣으세요. 양쪽 모두 최신 상태로 유지하세요.',
      },
      start: {
        title: '서버 시작',
        text: '설정할 것이 없습니다. 서버는 공유하는 정보를 세계 폴더에 저장하므로 재시작 후에도 그대로 남아 있습니다.',
      },
      see: {
        title: '모드가 있는 플레이어는 모두를 봅니다',
        text: '거리와 상관없이 모든 플레이어를 스킨, 갑옷, 탈것과 함께, 그리고 그 주변의 몹까지 봅니다. 만난 적 없는 몹도요.',
      },
    },
    matrixTitle: '어디서 플레이하면 무엇이 보이는지',
    matrixText:
      '싱글플레이에서는 모든 것이 작동합니다. 서버에서는 서버의 모드가 나머지를 맡습니다.',
    matrixLabel: '플레이 장소별 기능',
    feature: '기능',
    places: ['싱글플레이', 'LAN 세계', '모드가 있는 서버', '모드가 없는 서버'],
    rows: {
      mobs: '지평선의 몹',
      players: '멀리 있는 플레이어',
      offline: '접속을 종료한 플레이어',
      birds: '새',
    },
    cells: {
      mobsMet: '만난 몹만',
      offlineEven: '내가 접속하기 전에 떠난 플레이어도',
      offlineSeen: '떠나는 것을 본 플레이어만',
    },
    yes: '예',
    no: '아니요',
    noOthers: '다른 플레이어 없음',
    notApplicable: '해당 없음',
    notes: {
      lan: {
        title: 'LAN: 설치할 것 없음',
        text: 'LAN에 공개한 세계는 호스트의 게임을 통해 모든 것을 공유합니다.',
      },
      join: {
        title: '누구나 접속 가능',
        text: '모드가 없는 플레이어도 접속할 수 있습니다. 서버는 그 플레이어에게 아무것도 보내지 않습니다.',
      },
      tell: {
        title: '플레이어에게 알리세요',
        text: '서버는 모든 플레이어의 위치를 모드가 있는 플레이어와 공유합니다.',
      },
      datapack: {
        title: '데이터 팩을 사용했나요?',
        text: '세계의 datapacks 폴더에서 제거하세요: 서버의 모드가 그 역할을 대신합니다.',
      },
    },
  },

  compatibility: {
    eyebrow: '호환성',
    title: '원거리 지형을 위해 만들었지만,',
    accent: '없어도 괜찮습니다.',
    text: 'Living Horizon은 Distant Horizons나 Voxy를 스스로 찾아 그 지형 위에 바로 몹과 플레이어를 그립니다. 둘 다 없어도 렌더 거리 너머의 세계를 살아 있게 유지합니다.',
    works: '작동',
    cards: {
      dh: {
        text: '몹과 플레이어가 원거리 지형 위에 그려지고 그 언덕 뒤에 가려집니다. Distant Horizons 2.3부터.',
        link: 'Distant Horizons 받기',
      },
      voxy: {
        text: 'Voxy 지형의 지평선이 살아납니다: 풀을 뜯는 동물, 먼 마을, 이동하는 플레이어.',
        link: 'Voxy 받기',
      },
      vanilla: {
        title: '바닐라',
        text: '원거리 지형 모드가 필요 없습니다. 렌더 거리와 시뮬레이션 거리를 낮게 두어도 살아 있는 세계를 볼 수 있습니다.',
      },
    },
    extras: [
      'Iris 셰이더 팩 (Photon, Complementary…)',
      '서버에도 같은 jar, 모드 없는 서버에도 접속 가능',
      'Sodium의 비디오 설정에서 설정 가능 (0.8+)',
    ],
    matrixTitle: 'Minecraft 버전과 로더',
    matrixText: '게임 버전과 로더마다 jar 하나.',
    builds: (builds: number, range: string) => p(builds, { other: `빌드 {n}개, ${range}.` }),
    keyUntested: '실행됨, 테스터 필요',
    table: '호환성 표',
    untested: '게임에서 실행되지만, 세계에서 그려지는 것은 아직 확인되지 않았습니다',
    noBuild: '빌드 없음',
    notAvailable: '사용 불가',
    fallback: (range: string) =>
      `Fabric, Quilt, NeoForge(1.20.6 이상), Forge용 Minecraft ${range}.`,
    fullTable: 'GitHub에서 전체 표 보기',
    loaders: {
      fabric: 'Fabric API 필요. Mod Menu는 선택.',
      quilt: 'Fabric API(QFAPI) 필요.',
      neoforge: 'Minecraft 1.20.6부터, 다른 것은 필요 없습니다.',
      forge: '다른 것은 필요 없습니다.',
    },
  },

  performance: {
    eyebrow: '성능',
    title: '살아 있는 지평선이',
    accent: '프레임을 돌려줍니다.',
    design: {
      eyebrow: '최적화된 렌더링',
      title: '살아 있는 지평선이지만',
      accent: '프레임은 잡아먹지 않습니다.',
      text: 'Living Horizon은 처음부터 가볍게 유지되도록 설계되었습니다. 멀리 있는 모습은 부담이 적은 방식으로, 그리고 보일 때만 그려집니다. 그래서 렌더 거리와 시뮬레이션 거리를 낮춰도 세계를 살아 있게 유지할 수 있습니다.',
      cards: {
        pictures: {
          title: '멀리서는 가벼운 그림',
          text: '일정 거리를 넘으면 멀리 있는 모습은 완전한 모델 대신 자신의 평평한 그림으로 그려집니다. 그 크기에서는 똑같아 보이고, 작업량은 아주 적습니다.',
        },
        hidden: {
          title: '가려지면 건너뜀',
          text: '원거리 지형 뒤의 몹은 아예 그리지 않고, 너무 작거나 멀어서 알아볼 수 없는 모습은 애니메이션을 멈춥니다.',
        },
        presets: {
          title: '품질 사전 설정',
          text: '낮음, 보통, 높음, 울트라가 몹의 수, 범위, 새를 한 번에 설정합니다. 기본값이 균형 잡힌 선택입니다.',
        },
        server: {
          title: '서버에도 가볍게',
          text: '모든 애니메이션은 플레이어의 게임에서 실행됩니다. 모드가 있는 서버는 위치만 공유합니다.',
        },
      },
    },
    numbers: '숫자로 보기',
    measured: '플레이어와 제작자가 측정했으며, 측정 환경은 각 수치 아래에 있습니다.',
    noNumbers: {
      before: '지어낸 숫자는 없습니다: 실제 벤치마크가 들어오는 대로 채워집니다. 내장 디버그 패널(',
      after: ')에서 모드 자체의 틱당, 프레임당 부하를 볼 수 있습니다.',
    },
    slots: {
      fps: { label: 'FPS 향상', hint: '게임 대신 모드가 먼 곳을 그릴 때' },
      mobs: { label: '지평선의 몹', hint: '동시에 그려짐' },
      distance: { label: '커버 거리', hint: '렌더 거리 너머' },
      frame: { label: '프레임 부하', hint: '디버그 패널 기준' },
    },
    setups: {
      fps: '먼 곳의 같은 풍경에서 120 → 150 FPS: 렌더 거리를 줄이고 그 너머의 몹을 Living Horizon이 그린 경우와, 게임이 그 거리까지 직접 그린 경우의 비교. 제작자 측정.',
    },
    pending: (hint: string) => `벤치마크 대기 중 · ${hint}`,
    share: '내 환경에서 측정했나요? 공유하세요',
  },

  testers: {
    eyebrow: '현재 베타',
    title: '지평선에 생명을 불어넣도록 도와주세요.',
    lede: 'Living Horizon은 아직 초기 단계이며, 게임 버전, 로더, Distant Horizons와 Voxy 버전, 셰이더 팩, 다른 모드 등 수많은 조합에서 실행됩니다. 아직 모든 조합을 시험해 보지는 못했습니다. 플레이해 보셨다면 좋든 나쁘든 어떻게 작동하는지 알려 주세요: 모든 보고가 소중합니다.',
    asks: [
      'Minecraft 버전과 로더',
      'Distant Horizons 또는 Voxy와 그 버전',
      '셰이더 팩, 사용한다면 (Photon, Complementary…)',
      '싱글플레이, LAN 또는 서버, 모드 유무',
      '보이는 장면의 스크린샷',
    ],
    report: '호환성 보고',
    discord: 'Discord 참여',
    issue: '이슈 열기',
    status: '테스트 현황',
    waiting: (builds: number) =>
      p(builds, {
        other: '/ {n}개 빌드가 첫 테스터를 기다리고 있습니다',
      }),
    bar: (tested: number, waiting: number) =>
      `${p(tested, { other: '빌드 {n}개 작동 확인' })}, ${waiting}개 대기 중`,
    seen: '작동 확인됨',
    yours: '여러분을 기다리는 중',
    wanted: '가장 필요한 조합',
    every: '모든',
    everyRest: '환경이 새로운 것을 알려 줍니다',
    loading: '프로젝트 데이터가 로드되면 테스트되지 않은 조합이 여기에 표시됩니다.',
  },

  contribute: {
    eyebrow: '기여하기',
    title: '함께 만들어요.',
    accent: 'AI도 환영합니다.',
    text: 'Living Horizon은 GitHub 저장소 한 곳에서 만들어집니다. 코드, 수정, 번역 모두 풀 리퀘스트로 그곳에 모입니다.',
    steps: {
      talk: {
        title: '먼저 이야기하기',
        text: '작은 수정보다 큰 작업이라면, 작업하기 전에 이슈를 열어 방향을 먼저 맞춰 주세요.',
      },
      pr: {
        title: '풀 리퀘스트 열기',
        text: 'feature/* 또는 fix/* 브랜치에서 작업하고 develop을 대상으로 하세요. 커밋은 영어로, Conventional Commits 형식으로 작성합니다.',
      },
      build: {
        title: '빌드와 테스트',
        text: 'Gradle 빌드 한 번으로 모드를 컴파일하고 테스트를 실행합니다. CI도 모든 풀 리퀘스트에서 이를 실행합니다.',
      },
      credit: {
        title: '크레딧에 이름 올리기',
        text: 'CREDITS.md에 자신을 추가하고, 플레이어가 볼 수 있는 변경이라면 변경 내역에도 한 줄 추가하세요.',
      },
    },
    aiTitle: 'AI를 쓰나요? 좋습니다.',
    aiText:
      'AI는 이 프로젝트를 만드는 방식의 일부이며, 기여할 때 써도 전혀 문제없습니다. 다만 AI가 쓴 것에 대해 계속 생각하세요: 풀 리퀘스트를 열기 전에 변경 사항을 읽고, 이해하고, 테스트하세요.',
    claude: {
      before: 'Claude가 여기서 가장 잘 작동합니다:',
      between: '파일과',
      after: '안의 스킬을 스스로 읽습니다.',
    },
    terms: {
      before: '풀 리퀘스트를 열면',
      link: '라이선스',
      after:
        '의 3조에 동의하는 것입니다: 저작권은 계속 본인에게 있고, 이후 어떤 일이 있어도 기여자로 계속 기록됩니다.',
    },
    guide: '기여 가이드 읽기',
    issues: '열린 이슈',
  },

  changelog: {
    eyebrow: '최신 업데이트',
    title: '자주 출시하고,',
    accent: '빠르게 고칩니다.',
    text: 'GitHub에 있는 프로젝트 변경 내역에서 바로 가져왔습니다.',
    textEnglish:
      'GitHub에 있는 프로젝트 변경 내역에서 바로 가져왔습니다. 영어로 작성되어 있습니다.',
    latest: '최신',
    release: '릴리스',
    sides: { server: '서버', client: '클라이언트' },
    kinds: { new: '새 기능', improved: '개선', fixed: '수정' },
    more: (n: number) => p(n, { other: '변경 사항 {n}개 더 보기' }),
    failed: '지금은 변경 내역을 불러올 수 없습니다. GitHub에서 언제든 볼 수 있습니다.',
    full: 'GitHub에서 전체 변경 내역 보기',
    releases: '모든 릴리스',
  },

  download: {
    eyebrow: '다운로드',
    title: 'Living Horizon',
    accent: '다운로드',
    text: {
      before: '무료입니다. 게임 버전과 로더마다 jar가 하나이며, 게임과 서버에 모두 쓸 수 있습니다.',
      after: '폴더에 넣으면 지평선이 살아납니다.',
    },
    latest: '최신 릴리스',
    version: 'Minecraft 버전',
    loader: '로더',
    needs: { before: '·', after: '필요' },
    untested: '이 빌드는 게임에서 실행되지만, 세계에서 그려진다는 보고는 아직 없습니다',
    jar: 'jar 다운로드',
    releasePage: '릴리스 페이지에서 받기',
    sameJar: '같은 jar를 서버에도',
    curseforge: '또는 CurseForge에서 받기',
    pick: '릴리스 페이지나 CurseForge에서 파일을 고르세요.',
    total: '다운로드 수, 모든 플랫폼',
    count: (n: number) => p(n, { other: '다운로드 {n}회' }),
    noCount: '다운로드 수를 확인할 수 없음',
    soon: '곧 출시',
    checking: '확인 중…',
    everyFile: '모든 파일',
    modPage: '모드 페이지',
  },

  footer: {
    tagline: '먼 곳에 생명을 불어넣다. 게임과 서버를 위한 Minecraft Java Edition 모드.',
    beta: '베타: 버그가 있을 수 있습니다. 발견하면 알려 주세요.',
    project: '프로젝트',
    docs: '문서',
    license: '라이선스',
    community: '커뮤니티',
    bug: '버그 신고',
    contribute: '기여하기',
    official:
      '공식 Minecraft 제품이 아닙니다. Mojang 또는 Microsoft의 승인을 받지 않았으며 관련이 없습니다.',
  },
};
