import { Messages } from './en';
import { plural } from './plural';
import { details, questions } from './rich';

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
    mods: '모드',
    modpacks: '모드팩',
    faq: 'FAQ',
    download: (version: string) => `v${version} 다운로드`,
  },

  pages: {
    mods: {
      title: '호환 모드',
      description:
        'Living Horizon이 다른 Minecraft 모드와 어떻게 작동하는지: 원거리 지형, 셰이더, 성능, 생물 모드. 작동하는 것, 알려진 문제가 있는 것, 테스터를 기다리는 것.',
    },
    modpacks: {
      title: '모드팩',
      description:
        'Living Horizon이 들어 있는 Minecraft 모드팩과 CurseForge, Modrinth 다운로드 링크.',
    },
    changelog: { title: '변경 내역', description: 'Living Horizon의 모든 버전과 바뀐 점.' },
  },

  hero: {
    scene:
      '일러스트: 블록 언덕이 이어진 해 질 녘의 지평선. 멀리서 주민, 동물, 말 탄 사람, 다른 플레이어가 여전히 살아 움직이고, 하늘에는 기러기 떼가 날아갑니다.',
    news: '신규: 아무도 탐험하지 않은 땅의 동물 무리',
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
    text: '몹, 아무도 탐험하지 않은 땅의 동물 무리, 플레이어, 접속을 종료한 플레이어, 그리고 새. 모두 내 게임이 직접 그리며, 늘 켜 두어도 될 만큼 가볍게 유지됩니다.',
    offline: '(오프라인)',
    near: '가까이: 완전한 몹',
    far: '멀리: 평평한 그림',
    more: '자세히 보기',
    close: '닫기',
    previous: '이전 기능',
    next: '다음 기능',
    items: {
      mobs: {
        title: '모든 몹을, 지평선까지',
        text: '동물은 풀을 뜯고, 주민은 먼 마을을 돌아다니고, 골렘은 경계를 섭니다. 게임이 그릴 수 있는 몹이라면 다른 모드의 몹과 탈것도 모두 표시합니다.',
        points: [
          'Voxy, Distant Horizons 등 원거리 지형 위에서도, 바닐라에서도',
          '셰이더 팩을 써도 먼 언덕 뒤에 가려집니다',
          '"몹 및 개체"에서 원하는 몹을 고를 수 있습니다',
        ],
        where: '어디서나. 모드가 있는 서버에서는 만난 적 없는 몹까지.',
        details: details([
          {
            title: '어디서 오는지',
            body: [
              [
                '진짜 몹이며, 내 게임이나 서버가 마지막으로 본 곳에 있습니다. 내 게임은 만나는 모든 몹을 기억하고, 모드가 있는 서버는 모든 플레이어 주변의 몹을 공유하므로 만난 적 없는 무리도 보입니다. 그 뒤로 죽거나 사라진 몹은 가까이 갈 때까지 계속 보일 수 있습니다. 가까이 가면 잊힙니다.',
              ],
            ],
          },
          {
            title: '원거리 지형 위에서',
            body: [
              [
                'Voxy, Distant Horizons, Lodistance, Far View, Ecstatic이 있으면 몹은 그 지형 위를 걷고, 여느 블록처럼 그 언덕 뒤에 가려지며, 그 안개 속으로 희미해집니다. Bobby가 있으면 Bobby가 보관하는 지형 위에 머뭅니다. 아무것도 없으면 게임 자체의 지형 위에 보입니다. ',
                { link: 'compatibilitySection', text: '호환성' },
                '을 참고하세요.',
              ],
            ],
          },
          {
            title: '가까이 가면 진짜 몹이 이어받습니다',
            body: [
              [
                '가까이 다가가면 복제본은 몹이 마지막으로 보인 곳으로 걸어 돌아가고, 서버가 진짜 몹을 보내면 그 자리를 넘겨줍니다. 멀리 있는 몹은 보여 주기용일 뿐입니다: 농장, 몹 생성, 몹 수 상한은 모드가 없을 때와 똑같이 작동하며, 때릴 수도 없습니다.',
              ],
            ],
          },
          {
            title: '다른 모드의 몹',
            body: [
              [
                'Minecraft 자체의 개체 시스템을 쓰는 것이라면 무엇이든 멀리서 보입니다: 모드 몹, 그리고 Immersive Aircraft의 비행기나 Shippy Ships의 배 같은 탈것도 두고 온 자리에 보입니다.',
              ],
            ],
          },
          {
            title: '설정',
            body: [
              {
                list: [
                  [{ em: '몹 표시' }, '와 ', { em: '개체 표시' }, ': 켜고 끕니다.'],
                  [{ em: '몹 및 개체...' }, ': 몹을 하나하나 고릅니다.'],
                  [
                    { em: '몹 렌더 거리' },
                    '와 ',
                    { em: '최대 몹 수' },
                    ': 얼마나 멀리, 한 번에 몇 마리까지.',
                  ],
                ],
              },
            ],
          },
        ]),
      },
      unexplored: {
        title: '아무도 탐험하지 않은 땅의 동물 무리',
        text: '한 번도 가 본 적 없는 땅에도 동물이 있습니다. 모드는 세계의 시드로부터 게임이 그곳에 어떤 동물을 어디에 둘지 계산합니다.',
        points: [
          '게임이 새 청크마다 하는 것과 같은 무작위 추첨',
          '망원경으로, 겨누는 곳이라면 얼마나 멀든',
          '"주변 몹 추측": 내 주변 최대 1,024청크',
        ],
        where: '싱글플레이와 모드가 있는 서버에서.',
        details: details([
          {
            title: '추측하는 방식',
            body: [
              [
                '게임은 청크를 생성할 때, 세계의 시드와 청크 위치로 만든 무작위 추첨으로 첫 동물들을 배치합니다. Living Horizon은 아직 생성되지 않은 청크에 대해, 세계 생성기가 내놓는 생물 군계와 지형으로 같은 추첨을 합니다: 평원에는 말, 언덕에는 양. 게임이 배치할 곳과 거의 같은 곳에.',
              ],
            ],
          },
          {
            title: '약속이 아닌 추측',
            body: [
              [
                '읽어 들이는 지형에는 아직 풀도 나무도 없습니다. 그 때문에 게임이 어떤 자리를 거절하면, 그 무리는 없거나 다른 곳에 있습니다: 추측된 동물의 약 절반은 실제 동물에서 2블록 안에 있습니다. 추측된 몹은 도착했을 때 없을 수도 있습니다.',
              ],
            ],
          },
          {
            title: '망원경과 주변 몹 추측',
            body: [
              [
                '망원경으로 보면 겨누는 곳마다, 아무리 멀어도 추측된 몹이 보입니다. ',
                { em: '주변 몹 추측' },
                '은 내 주변 최대 1,024청크의 몹을 한 번에 보여 주고, 다음 플레이를 위해 보관합니다.',
              ],
            ],
          },
          {
            title: '서버에서',
            body: [
              [
                '서버는 모드가 있는 각 플레이어 주변에서 추측합니다. 기본 512블록입니다(',
                { code: 'seedMobRange' },
                ', 최대 2,048). 망원경과 ',
                { em: '주변 몹 추측' },
                '에는 세계의 시드가 필요합니다: 시드를 가진 사람은 세계 전체를 알 수 있으므로, 서버는 서버 주인이 ',
                { code: 'shareSeed' },
                '를 켰을 때만 시드를 공유합니다(',
                { link: 'serverSettings', text: '서버 설정' },
                ' 참고).',
              ],
            ],
          },
          {
            title: '설정',
            body: [
              {
                list: [
                  [{ em: '추측된 몹' }, ': 보이거나 숨깁니다.'],
                  [{ em: '추측 반지름' }, ': ', { em: '주변 몹 추측' }, '이 닿는 범위.'],
                ],
              },
            ],
          },
        ]),
      },
      players: {
        title: '거리와 상관없이 보이는 플레이어',
        text: '다른 모든 플레이어가 지도 어디에 있든 보입니다. 스킨, 갑옷, 들고 있는 아이템, 타고 있는 것까지.',
        points: [
          '말, 보트, 광산 수레, 겉날개, 행복한 가스트',
          '부드러운 움직임: 서버가 1초에 5번 위치를 공유합니다',
          '모드가 없는 플레이어도 접속할 수 있습니다',
        ],
        where: 'LAN과 모드가 있는 서버에서.',
        details: details([
          {
            title: '작동 방식',
            body: [
              [
                '모드가 있는 서버는 모든 플레이어의 위치를 1초에 5번, 타고 있는 것과 겉날개로 활공하는지와 함께 공유합니다. 5초마다 가장 가까운 플레이어들의 모습도 덧붙입니다: 스킨, 갑옷, 들고 있는 것. 내 게임은 이들을 렌더 거리 너머에서도 이름표와 탈것까지 함께 그립니다.',
              ],
            ],
          },
          {
            title: '서버 주인이 정합니다',
            body: [
              [
                '서버는 처음 시작할 때 ',
                { code: 'config/livinghorizon-server.json' },
                '을 만듭니다: 플레이어를 얼마나 멀리까지 공유할지, 팀원끼리만 볼지, 어떤 플레이어와 차원을 숨길지. ',
                { code: '"sharePlayers": false' },
                '로 끌 수 있습니다. 변경 사항은 재시작 없이 몇 초 뒤에 적용됩니다(',
                { link: 'serverSettings', text: '서버 설정' },
                ' 참고).',
              ],
            ],
          },
          {
            title: '절대 공유되지 않는 것',
            body: [
              [
                '관전 모드인 플레이어와 투명화 상태인 플레이어. 웅크린 플레이어는 지금은 공유됩니다(',
                { link: 'sneaking', text: '#269' },
                '). 렌더 거리 안에서는 플레이어끼리 평소처럼 서로를 봅니다.',
              ],
            ],
          },
          {
            title: '설정',
            body: [
              {
                list: [
                  [{ em: '플레이어 표시' }, ': 켜고 끕니다.'],
                  [{ em: '플레이어 렌더 거리' }, ': 얼마나 멀리까지 보일지.'],
                  [{ em: '탈것' }, ': 타고 있는 것.'],
                ],
              },
            ],
          },
        ]),
      },
      offline: {
        title: '접속을 종료한 플레이어도 계속 살아갑니다',
        text: '누군가 접속을 종료하면, 그 이름을 단 분신이 떠난 자리에 남습니다. 산책하고, 앉고, 낚시하고, 상자를 열고, 밤에는 잠을 자며 그 사람이 돌아올 때까지 지냅니다.',
        points: [
          '이름 뒤에 (오프라인)과 마지막으로 본 시각',
          '내가 접속하기 전에 떠난 플레이어도',
          '보여 주기용일 뿐: 걸어 들어가면 옆으로 밀려납니다',
        ],
        where: '어디서나. 모드가 있는 서버에서는 그곳에서 플레이한 적 있는 모든 플레이어가.',
        details: details([
          {
            title: '분신의 하루',
            body: [
              {
                list: [
                  ['낮에는 산책하거나, 앉거나, 상자, 제작대, 직업 블록 앞에 서 있습니다.'],
                  ['밤에는 비어 있는 침대로 걸어가 잠을 자거나, 선 채로 지냅니다.'],
                  ['물 근처에서는 한 명이 물가에 멈춰 서서 한동안 낚시를 합니다.'],
                  ['비가 오면 몇몇은 지붕이나 나무 아래로 가서 비가 그치기를 기다립니다.'],
                  ['저녁에는 모닥불이나 화로 앞에 모입니다.'],
                  ['서로 가까이 있는 두 명은 다가가 얼굴을 마주하고 이야기를 나눕니다.'],
                ],
              },
            ],
          },
          {
            title: '나를 알아봅니다',
            body: [
              [
                '가까이서 바라보면 그쪽도 나를 바라봅니다. 앞에서 웅크리면 따라 웅크립니다. 몬스터가 다가오면 검을 뽑고 방패를 들지만, 절대 싸우지는 않습니다.',
              ],
            ],
          },
          {
            title: '보여 주기용일 뿐',
            body: [
              [
                '세계는 분신이 존재하는 줄 모릅니다: 몹은 분신을 무시하고, 분신은 나를 막거나 밀지 않습니다. 걸어 들어가면 옆으로 밀려납니다. 나에게서 멀리 있을 때는 제자리에서 계속 산책합니다.',
              ],
            ],
          },
          {
            title: '어디서 오는지',
            body: [
              [
                '내 게임은 떠나는 것을 본 플레이어를 기억합니다. 모드가 있는 서버는 그곳에서 플레이한 적 있는 모든 플레이어를 당시 모습 그대로 공유합니다. 내가 접속하기 전에 떠난 플레이어도요.',
              ],
            ],
          },
          {
            title: '설정',
            body: [
              {
                list: [
                  [
                    { em: '오프라인 플레이어' },
                    '와 ',
                    { em: '최대 오프라인 수' },
                    ': 보일지, 그리고 몇 명까지.',
                  ],
                  [{ em: '오프라인 플레이어 활동' }, ': 자기 자리 주변에서의 생활.'],
                  [{ em: '배회 반지름' }, ': 얼마나 멀리 돌아다닐지, 기본 50블록.'],
                ],
              },
            ],
          },
        ]),
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
        details: details([
          {
            title: '누가 어디를 나는지',
            body: [
              {
                list: [
                  ['새 떼가 하늘을 가로지르고, 기러기는 V자로 날고, 맹금류는 원을 그리며 돕니다.'],
                  ['갈매기는 해안을 따라 날다가 이따금 해변에 내려앉습니다.'],
                  ['비둘기는 높은 건물에 앉고, 울새는 밭에서 깡충거리고, 박새는 나무에 머뭅니다.'],
                  ['오리는 호수와 강에서 헤엄칩니다. 박쥐는 밤에 나옵니다.'],
                ],
              },
            ],
          },
          {
            title: '나에게 반응합니다',
            body: [
              [
                '작은 새는 가까이 가면 날아올라 조금 떨어진 곳에 내려앉습니다. 오리는 절대 가까이 오게 두지 않습니다. 떠나는 새는 한순간에 사라지지 않고, 흩어지며 작아져 갑니다.',
              ],
            ],
          },
          {
            title: '지형에서 읽어 냅니다',
            body: [
              [
                '각 종류가 어디로 갈지는 Voxy와 Distant Horizons의 원거리 지형까지, 지형에서 읽어 냅니다: 울새는 작물, 박새는 나뭇잎, 오리는 물, 갈매기는 해변. 새는 내 게임 속의 그림일 뿐이며, 세계에는 아무것도 생성되지 않습니다.',
              ],
            ],
          },
          {
            title: '설정',
            body: [
              {
                list: [
                  [{ em: '새 표시' }, ': 켜고 끕니다.'],
                  [{ em: '새 종류...' }, ': 종류별로 고릅니다.'],
                  [{ em: '새 밀도' }, '와 ', { em: '새 표시 거리' }, ': 얼마나 많이, 얼마나 멀리.'],
                ],
              },
            ],
          },
        ]),
      },
      light: {
        title: '가볍게 유지되도록 설계',
        text: '멀리 있는 몹에는 AI가 없습니다: 지면에 맞춘 미리 만든 애니메이션을 재생할 뿐입니다. 아주 멀어지면 자신의 평평한 그림이 됩니다.',
        points: [
          '언덕 뒤에 가려진 몹은 그리지 않습니다',
          '시뮬레이션 거리를 낮춰도 살아 있는 세계 그대로',
          '간소화된 몹: 같은 부담으로 훨씬 많은 몹을',
        ],
        where: '모든 것이 내 게임에서 실행됩니다. 서버는 위치만 공유합니다.',
        details: details([
          {
            title: '멀리서는 AI 없음',
            body: [
              [
                '멀리 있는 몹은 주변 지면에 맞춘 미리 만든 애니메이션으로 걷고, 풀을 뜯고, 주위를 둘러봅니다. 접속을 종료한 플레이어와 새는 내 가까이에서만 스스로 움직입니다.',
              ],
            ],
          },
          {
            title: '멀리서는 평평한 그림',
            body: [
              [
                '많은 게임이 먼 물체를 임포스터로 그립니다: 3D 모델 대신 평평한 그림을 쓰는 것입니다. Living Horizon도 멀리 있는 몹, 탈것, 플레이어에 똑같이 합니다(',
                { em: '간소화된 몹' },
                ', ',
                { em: '간소화된 개체' },
                ', ',
                { em: '간소화된 플레이어' },
                '). 그 크기에서는 똑같아 보이고, 부담은 아주 적습니다. Photon처럼 노멀 맵을 읽는 셰이더 팩을 쓰면 그림이 셰이더 팩의 조명을 받습니다(',
                { em: '셰이더 조명' },
                ').',
              ],
            ],
          },
          {
            title: '가려지면 건너뜀',
            body: [
              [
                '언덕이나 원거리 지형 뒤의 몹은 아예 그리지 않고, 너무 작아서 알아볼 수 없는 모습은 애니메이션을 멈춥니다.',
              ],
            ],
          },
          {
            title: '모든 것이 내 게임에서',
            body: [
              [
                '애니메이션, 접속을 종료한 플레이어, 새는 내 게임이 처리합니다. 모드가 있는 서버는 위치만 공유하므로 서버 부담이 적습니다. 두 플레이어가 같은 먼 몹이 서로 다른 행동을 하는 것을 볼 수도 있습니다.',
              ],
            ],
          },
          {
            title: '사전 설정과 설정',
            body: [
              [
                { em: '사전 설정' },
                '(',
                { em: '낮음' },
                ', ',
                { em: '보통' },
                ', ',
                { em: '높음' },
                ', ',
                { em: '울트라' },
                ')으로 모든 것을 한 번에 설정합니다. 기본값이 균형 잡힌 선택이며, ',
                { em: '기본값으로 초기화' },
                '로 되돌릴 수 있습니다. 설정은 설정 화면, Mod Menu, Sodium의 비디오 설정, 또는 ',
                { code: '/livinghorizon config' },
                '에 있으며, 14개 언어를 지원합니다.',
              ],
              [
                '주의: ',
                { em: '최대 몹 수' },
                '와 ',
                { em: '몹 렌더 거리' },
                '를 모두 ',
                { em: '무제한' },
                '으로 하면 게임이 튕길 수 있습니다.',
              ],
            ],
          },
        ]),
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
      unexplored: '미탐험 지역의 동물 무리',
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
      install: {
        title: '서버의 mods 폴더에 jar 넣기',
        text: '게임에 쓰는 것과 같은 파일에, Fabric과 Quilt에서는 Fabric API도 함께 넣으세요. 설정할 것이 없습니다.',
      },
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
    },
  },

  compatibility: {
    eyebrow: '호환성',
    title: 'Distant Horizons, Voxy, Ecstatic…',
    accent: '또는 아무것도 없어도.',
    text: 'Living Horizon은 원거리 지형 모드를 스스로 찾습니다: 몹과 플레이어가 그 지형 위를 걷고, 그 언덕 뒤에 가려지고, 그 안개 속으로 희미해집니다. 그런 모드가 없어도 렌더 거리 너머의 세계를 살아 있게 유지합니다.',
    /** A card per mod; the names are the mods' own. */
    cards: {
      dh: { text: '2.3부터. 몹과 플레이어가 그 지형 위에, 그 언덕 뒤에.' },
      voxy: { text: '몹과 플레이어가 그 지형 위에, 셰이더 팩을 써도.' },
      lodistance: { text: 'Fabric, Minecraft 26.3, OpenGL 사용, 셰이더 없이.' },
      farView: { text: 'Forge와 NeoForge, Minecraft 1.20.1~1.21.4. 몹이 그 지형 위에.' },
      ecstatic: { text: 'NeoForge, Minecraft 1.21.1, 싱글플레이. 몹이 그 지형 위에.' },
      bobby: { text: '서버의 렌더 거리 너머로 Bobby가 보관하는 지형 위에 몹과 플레이어가.' },
      iris: { text: 'Photon, Complementary Unbound 같은 셰이더 팩이 작동합니다.' },
      vanilla: {
        title: '바닐라',
        text: '원거리 지형 모드가 필요 없습니다: 렌더 거리와 시뮬레이션 거리를 낮춰도 살아 있는 세계를 볼 수 있습니다.',
      },
    },
    /** The link to the compatible mods page, under the cards. */
    others: {
      title: '다른 모드는요?',
      text: (n: number) =>
        p(n, {
          other:
            '모드 {n}개 정리: 셰이더, 성능, 생물 모드. 작동하는 것과 아직 테스터를 기다리는 것.',
        }),
      link: '호환 모드 보기',
    },
    matrixTitle: 'Minecraft 버전과 로더',
    matrixText: '게임 버전과 로더마다 jar 하나.',
    /** Next to the "?" of the table: a link to report a build. */
    report: '해 보셨나요? 알려 주세요',
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

  /** Testing, contributing and the Discord, in one section. */
  help: {
    eyebrow: '참여하기',
    title: '플레이어와 함께 만드는',
    accent: '베타.',
    test: {
      title: '내 환경에서 테스트하기',
      text: '내 게임 버전, 로더, 모드에서 어떻게 작동하는지 좋든 나쁘든 알려 주세요. 모든 보고가 도움이 됩니다.',
      /** Under the text, once the builds are known. */
      untested: (n: number) =>
        p(n, {
          other: '빌드 {n}개가 아직 첫 테스터를 기다리고 있습니다',
        }),
      report: '호환성 보고',
    },
    code: {
      title: '기여하기',
      text: '코드, 수정, 번역은 GitHub에 풀 리퀘스트로 올라옵니다. AI도 환영합니다. AI가 쓴 것을 읽고, 이해하고, 테스트한다면요.',
      guide: '기여 가이드',
    },
    discord: {
      title: 'Discord 참여',
      text: '질문, 소식, 스크린샷, 도움. 제작자, 다른 플레이어와 함께.',
      join: 'Discord 참여',
    },
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
    /** The link to the changelog page, on the home page. */
    every: '모든 버전 보기',
  },

  faq: {
    eyebrow: '자주 묻는 질문',
    title: '궁금한 점이 있나요?',
    accent: '답이 여기 있습니다.',
    text: '플레이어들이 가장 많이 묻는 질문입니다. 그 밖의 질문은 Discord에서 물어보세요.',
    groups: {
      how: '작동 방식',
      compatibility: '호환성',
      performance: '성능과 설정',
      multiplayer: '멀티플레이',
      downloads: '다운로드와 라이선스',
      ai: 'AI',
    },
    questions: questions({
      visual: {
        q: '보이기만 하는 건가요? 몹 농장이 망가지나요?',
        a: [
          [
            '보이기만 할 뿐이며 AI는 없습니다. 실제 몹은 모드가 없을 때와 똑같이 작동하므로 농장, 몹 생성, 몹 수 상한은 바뀌지 않습니다. 멀리 있는 몹은 때릴 수 없습니다.',
          ],
        ],
      },
      real: {
        q: '멀리 있는 몹은 진짜인가요, 아니면 무작위로 놓인 건가요?',
        a: [
          [
            '진짜 몹이며, 내 게임이나 서버가 마지막으로 본 곳에 있습니다. 그 뒤로 죽거나 사라진 몹은 가까이 갈 때까지 계속 보일 수 있습니다. 가까이 가면 잊힙니다.',
          ],
        ],
      },
      simulation: {
        q: '시뮬레이션 거리나 개체 거리를 높이는 것과 무엇이 다른가요?',
        a: [
          [
            '시뮬레이션 거리를 높이면 서버가 더 많은 실제 몹을 실행하므로 부담이 크고, 그래도 서버는 일정 거리까지만 몹을 보냅니다. Living Horizon은 서버가 실행하지 않는 복제본을 그립니다. 복제본은 미리 만든 애니메이션을 재생하고, 멀리서는 평평한 그림이 됩니다(',
            { em: '간소화된 개체' },
            ').',
          ],
        ],
      },
      range: {
        q: '몹과 플레이어를 얼마나 멀리까지 보여 주나요?',
        a: [
          [
            '몹: 기본 512블록이며, ',
            { em: '몹 렌더 거리' },
            '로 최대 ',
            { em: '무제한' },
            '까지 늘릴 수 있습니다. 플레이어, 보트, 탈것: 기본적으로 거리 제한이 없으며, ',
            { em: '플레이어 렌더 거리' },
            '와 ',
            { em: '개체 렌더 거리' },
            '로 제한할 수 있습니다. 몹은 내 게임이나 서버가 본 적이 있어야 표시됩니다.',
          ],
        ],
      },
      mods: {
        q: '내가 쓰는 모드와 함께 작동하나요?',
        a: [
          [
            '아마 그럴 겁니다. Voxy, Distant Horizons, Lodistance, Ecstatic, Bobby, Sodium, Iris, 셰이더 팩과 함께 작동합니다(',
            { link: 'compatibilitySection', text: '호환성' },
            ' 참고). Living Horizon은 자신의 형상만 추가할 뿐, 다른 모드가 세계를 그리는 방식은 바꾸지 않습니다. 아직 테스트하지 않은 모드는 GitHub의 ',
            { link: 'modCompatibility', text: 'mod compatibility' },
            ' 라벨에 모여 있습니다. 문제가 생기면 모드 이름과 버전을 적어 ',
            { link: 'issues', text: '이슈' },
            '를 열어 주세요.',
          ],
        ],
      },
      modMobs: {
        q: '다른 모드의 몹도 멀리서 보이나요?',
        a: [
          [
            '네, Minecraft 자체의 개체 시스템을 쓴다면 보입니다. 어떤 모드의 개체가 너무 다르게 작동한다면 ',
            { link: 'issues', text: '이슈' },
            '나 ',
            { link: 'discord', text: 'Discord' },
            '에서 지원을 요청해 주세요.',
          ],
        ],
      },
      farTerrain: {
        q: 'Voxy, Distant Horizons, Lodistance, Ecstatic이 필요한가요?',
        a: [
          [
            '아니요. 없어도 멀리 있는 몹과 플레이어가 렌더 거리까지 게임 자체의 지형 위에 보입니다. 둘 중 하나가 있으면 그 원거리 지형 위에도 보입니다.',
          ],
        ],
      },
      frameRate: {
        q: '프레임이 떨어지나요?',
        a: [
          [
            '개체를 더 많이 그리면 프레임이 떨어집니다. 게임이 느려진다면 ',
            { em: '간소화된 몹' },
            '과 ',
            { em: '간소화된 개체' },
            '를 켜 두고 더 낮은 ',
            { em: '사전 설정' },
            '을 고르세요. ',
            { em: '최대 몹 수' },
            '와 ',
            { em: '몹 렌더 거리' },
            '를 모두 ',
            { em: '무제한' },
            '으로 하면 게임이 튕길 수 있습니다.',
          ],
        ],
      },
      choose: {
        q: '무엇을 보여 줄지 고를 수 있나요?',
        a: [
          [
            '네. ',
            { em: '몹 표시' },
            ', ',
            { em: '플레이어 표시' },
            ', ',
            { em: '오프라인 플레이어' },
            '와 ',
            { em: '새 표시' },
            '로 각 부분을 켜고 끌 수 있습니다. ',
            { em: '몹 및 개체...' },
            '에서는 몹을 하나하나 고를 수 있습니다.',
          ],
        ],
      },
      world: {
        q: '내 세계를 바꾸거나 청크를 불러오나요?',
        a: [
          [
            '아니요. 세계의 어떤 것도 바꾸지 않고, 청크도 불러오지 않습니다. 기억한 내용은 자체 파일에 저장합니다: ',
            { code: 'config' },
            ' 폴더, 그리고 서버가 공유하는 내용은 세계 폴더의 ',
            { code: 'livinghorizon-positions.dat' },
            '에 저장합니다. 모드를 제거해도 세계는 그대로입니다.',
          ],
          ['서버에서 이 모드는 모드가 있는 플레이어에게만 위치를 보냅니다.'],
        ],
      },
      server: {
        q: '서버에도 모드가 필요한가요?',
        a: [
          [
            '아니요. 거의 모든 기능이 싱글플레이에서 작동하고, 모드를 설치한 채로 어떤 서버에도 접속할 수 있습니다. 하지만 거리와 상관없이 플레이어를 보려면 서버에 모드가 있어야 하며, 그러면 서버가 더 많은 몹과 접속을 종료한 플레이어도 공유합니다. ',
            { link: 'serversSection', text: '멀티플레이' },
            '를 참고하세요.',
          ],
        ],
      },
      paper: {
        q: 'Paper나 Spigot 서버에서도 작동하나요?',
        a: [
          [
            '모드를 설치한 채로 그런 서버에서 플레이할 수 있습니다. 모드가 없는 여느 서버와 같습니다. 서버 측은 Fabric, Quilt, NeoForge, Forge에서만 작동하므로 Paper나 Spigot 서버는 아무것도 공유하지 않습니다. Paper용 플러그인은 ',
            { link: 'paperPlugin', text: '#156' },
            '에서 논의하고 있습니다.',
          ],
        ],
      },
      nothing: {
        q: '멀리 있는 몹이나 플레이어가 보이지 않습니다. 왜 그런가요?',
        a: [
          {
            list: [
              [
                '멀리 있는 플레이어를 보려면 서버에 모드가 있어야 합니다. 서버 주인이 공유 대상을 제한했을 수도 있습니다(',
                { link: 'serverSettings', text: '서버 설정' },
                ' 참고).',
              ],
              ['모드가 없는 서버에서는 내가 만난 몹만 보입니다.'],
            ],
          },
        ],
      },
      cheat: {
        q: '치트로 쓸 수 있나요? 서버에서 허용되나요?',
        a: [
          [
            '서버가 허용하는 곳에서만 다른 플레이어를 보여 줍니다. 멀리 있는 플레이어는 모드가 있는 서버에서만 보이며, 무엇을 공유할지는 서버 주인이 정합니다: 얼마나 멀리까지, 팀원끼리만 볼지, 어떤 플레이어와 차원을 숨길지. ',
            { code: '"sharePlayers": false' },
            '로 끌 수 있습니다(',
            { link: 'serverSettings', text: '서버 설정' },
            ' 참고). 투명화 상태인 플레이어와 관전 모드인 플레이어는 절대 공유되지 않습니다. 웅크린 플레이어는 지금은 공유됩니다(',
            { link: 'sneaking', text: '#269' },
            ').',
          ],
          [
            '다른 서버에서는 내 게임이 직접 본 것만 보입니다. 이 모드는 서버에 아무것도 보내지 않습니다. 다만 서버마다 모드에 관한 규칙이 따로 있으니, 운영진에게 물어보세요.',
          ],
        ],
      },
      bedrock: {
        q: '베드락 에디션 버전이 있나요?',
        a: [['아니요. Living Horizon은 Minecraft Java 에디션용 모드입니다.']],
      },
      version: {
        q: '내 게임 버전이 지원되지 않습니다. 앞으로 지원되나요?',
        a: [
          [
            { link: 'discord', text: 'Discord' },
            '에서 어떤 버전과 로더로 플레이하는지 알려 주세요. 다음에 무엇을 할지 정하는 데 도움이 됩니다.',
          ],
        ],
      },
      modpack: {
        q: '모드팩에 넣어도 되나요?',
        a: [['네. 공식 파일을 사용하고 출처를 밝혀 주세요.']],
      },
      abandoned: {
        q: '프로젝트가 중단되면 어떻게 되나요?',
        a: [
          [
            '라이선스에 대비책이 있습니다. 프로젝트가 중단되었다고 선언되면(저장소가 보관 처리되거나 README에 그렇게 적히면) 라이선스가 GPL로 바뀝니다: 출처만 밝히면 누구나 프로젝트를 이어 갈 수 있습니다. ',
            { link: 'license', text: '라이선스' },
            '의 5항을 참고하세요.',
          ],
        ],
      },
      ai: {
        q: 'AI로 만들었나요?',
        a: [
          [
            '네, 일부는요. 코드의 상당 부분은 AI가 작성합니다. 제작자인 clixmods가 모드가 어떻게 작동할지 정하고, 모든 변경을 게임에서 테스트하고, 잘못된 부분을 고칩니다. AI가 없었다면 이만한 규모의 프로젝트는 존재하지 않았을 것입니다.',
          ],
          [
            '아이디어는 clixmods의 직업인 게임 개발에서 왔습니다: 임포스터, LOD, 미리 만든 애니메이션은 게임들이 수년 동안 써 온 기법입니다. clixmods는 2017년부터 모드를 만들어 왔으며, 콜 오브 듀티: 블랙 옵스 3의 맵 ',
            { link: 'nuketown', text: 'Nuketown Zombies Legacy' },
            ' 등은 Steam 창작마당에서 100만 회 넘게 다운로드되었습니다(',
            { link: 'portfolio', text: '포트폴리오' },
            ' 참고).',
          ],
        ],
      },
      modrinth: {
        q: 'Modrinth에 있나요? 왜 목록에서 숨겨져 있나요?',
        a: [
          [
            { link: 'modrinth', text: 'Modrinth' },
            '에 있지만 목록에서 숨겨져 있어, Modrinth 검색에는 나오지 않습니다. 2026년 8월부터 ',
            { link: 'modrinthRules', text: 'Modrinth 규칙' },
            '이 주로 AI로 만든 프로젝트의 공개를 허용하지 않아, 운영진이 목록에서 숨겼습니다. CurseForge, Nexus Mods, ',
            { link: 'releases', text: '릴리스 페이지' },
            '에도 같은 파일이 있습니다.',
          ],
          [
            '목록에서 숨겨졌다고 안전하지 않다는 뜻은 아닙니다. 모드를 만드는 방식에 관한 것이지, 모드가 하는 일에 관한 것이 아닙니다:',
          ],
          {
            list: [
              [
                '코드는 공개되어 있습니다: 누구나 ',
                { link: 'github', text: 'GitHub 저장소' },
                '에서 읽을 수 있습니다.',
              ],
              ['GitHub가 이 코드로 모든 릴리스를 빌드하며, 빌드 로그도 공개되어 있습니다.'],
              [
                '이 모드에는 인터넷에 연결하는 자체 코드가 없습니다. 플레이어 스킨은 게임을 통해 Mojang에서 받아 오며, Discord 링크는 클릭할 때만 열립니다.',
              ],
            ],
          },
        ],
      },
    }),
    ask: 'Discord에서 묻기',
    issue: '이슈 열기',
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
    /** How many modpacks ship the mod: in the modpacks' row above and the modpacks section. */
    packs: (n: number) => p(n, { other: '모드팩 {n}개' }),
  },

  modpacks: {
    eyebrow: '모드팩',
    title: '이미',
    accent: '모드팩에 들어 있어요.',
    text: 'Living Horizon이 들어 있는 모드팩입니다. 직접 만들었나요? 여기에 자동으로 표시됩니다.',
    by: (authors: string) => `제작: ${authors}`,
    /** A button to the modpack's own page on CurseForge or Modrinth. */
    get: (platform: string) => `${platform}에서 다운로드`,
    none: '아직 Living Horizon이 들어 있는 모드팩이 없습니다. 첫 번째 모드팩의 주인공이 되어 보세요.',
    loading: '잠시 후 여기에 모드팩이 표시됩니다.',
    /** The link to the modpacks page, under the home page's cards. */
    all: (n: number) => p(n, { other: '모드팩 {n}개 모두 보기' }),
  },

  mods: {
    eyebrow: '호환성',
    title: '당신의 모드와',
    accent: '잘 어울려요.',
    text: 'GitHub의 프로젝트에서 바로 가져오며 테스트할 때마다 갱신됩니다: 작동하는 것, 알려진 문제가 있는 것, 아직 누군가 시험해 보기를 기다리는 것. 메모는 영어입니다.',
    search: '모드 검색',
    filter: '상태별 필터',
    all: '전체',
    status: { works: '작동', issue: '알려진 문제', untested: '아직 테스트 안 됨' },
    /** The heading of the shader packs, after the mods. */
    shaders: '셰이더 팩',
    /** The note of every mod still waiting for a tester, next to the link to its issue. */
    untested:
      '아직 어떻게 작동하는지 알려 준 사람이 없습니다. 해 보셨나요? 해당 이슈에서 알려 주세요.',
    issue: (n: number) => `이슈 #${n}`,
    none: '검색과 일치하는 모드가 없습니다.',
    missing: {
      title: '목록에 없는 모드가 있나요?',
      text: 'Living Horizon이 그 모드와 어떻게 작동하는지 좋든 나쁘든 알려 주세요. 모든 보고가 도움이 됩니다.',
      link: '모드 제보하기',
    },
    /** Shown when GitHub cannot be reached and there is no copy of the list. */
    failed: '지금은 목록을 불러올 수 없습니다. GitHub에서 언제든 볼 수 있습니다.',
    failedLink: 'GitHub에서 목록 보기',
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
    /** Around the link to ModpackIndex, which lists the modpacks. */
    modpacks: { before: '모드팩 목록 제공:', after: '' },
    official:
      '공식 Minecraft 제품이 아닙니다. Mojang 또는 Microsoft의 승인을 받지 않았으며 관련이 없습니다.',
  },
};
