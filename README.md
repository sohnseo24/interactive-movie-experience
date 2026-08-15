#  Interactive Movie Experience

> **뮤직비디오의 세계관을 직접 체험하는 '팝업스토어형' 인터랙티브 웹 플랫폼**
> 
> 숭실대학교 컴퓨터학부 25학번 손서영 | 개인 프로젝트 (2026.06 ~ 2026.08)

🔗 **Live Demo**: [https://sohnseo24.github.io/interactive-movie-experience/](https://sohnseo24.github.io/interactive-movie-experience/)

---

## Project Overview (프로젝트 개요)

**[기획 배경 & 문제 정의]**

창작자 홍보 채널의 한계: AI 툴 기반의 3분 뮤직비디오 제작 프로젝트를 진행하며, 독립 창작자와 아티스트가 자신의 디지털 콘텐츠를 효과적으로 브랜드화하고 홍보할 수 있는 전용 채널이 부족함을 포착했습니다.

일방향적 미디어 소비 극복: 기존 동영상 플랫폼의 단순 관람 형태에서 벗어나, 시청자가 콘텐츠와 능동적으로 상호작용할 수 있는 몰입형 경험의 필요성을 분석했습니다.

**[프로젝트 정의 & 주요 기능]**

본 프로젝트는 사용자가 가상 공간을 직접 탐색하며 주인공의 서사와 감정선을 시·청각적으로 체험할 수 있도록 설계된 인터랙티브 웹 팝업스토어입니다.

**[향후 확장성 & 비전]**

현재는 단일 뮤직비디오 기반 웹사이트로 시작되었으나, 추후 구조 고도화를 통해 다양한 아티스트 및 모든 디지털 창작자가 자신의 창작물을 등록하고 홍보, 맞춤형 팝업스토어를 생성할 수 있는 범용 인터랙티브 플랫폼으로의 확장을 목표로 하고 있습니다.


* **구현 목적**: 음악, 영상, 사용자의 키보드/마우스 입력이 결합된 4개의 스테이션 인터랙티브 웹 경험 제공
* **주요 콘셉트**: 오프라인 팝업스토어의 공간적 동선을 웹 UI(Station 01 ~ 04)로 치환

---

## Key Features & Stations (주요 기능 및 스테이션)

| Station | 기능 명칭 | 주요 인터랙션 및 적용 기술 | 상세 구현 내용 |
| :--- | :--- | :--- | :--- |
| **Station 01** | **Entrance: Forest of Butterflies**<br>*(기억의 추적)* | Canvas API 기반 마우스 트래킹 나비 입자 애니메이션 | 마우스 움직임 및 클릭에 반응하여 노란 나비가 파란색 나비로 변하며 '깨달음'의 과정을 시각적으로 전달합니다. |
| **Station 02** | **NOISE MIX STATION: Custom Suno Music**<br>*(해체와 변주)* | Web Audio API (`AudioContext`, `BiquadFilterNode`) 활용 노이즈 믹서 및 DJ 콘솔 필터 | SUNO AI로 제작된 타이틀곡을 보컬, 드럼, 베이스, 일렉기타 트랙으로 분리. 3개 이상의 볼륨 바를 직접 조절하여 원하는 악기 소리를 조합하고 시각 그래픽과 함께 음악을 변주하는 경험을 제공합니다. |
| **Station 03** | **Game Making: Mini Runner Game**<br>*(기억의 회피)* | HTML5 Canvas 기반 장애물 회피 캔버스 게임 | 중간과제 뮤직비디오 장면을 레고(Lego) 스타일로 재해석한 뮤직비디오 오마주 미니게임으로, 초록색 기억 장애물을 피하는 플레이를 구현했습니다. |
| **Station 04** | **Film Archive: Live Photocard**<br>*(아카이빙)* | 컷별 비디오 스트리밍, 몰입형 라이브 포토 카드 | Mixboard(캐릭터/배경 합성) + Google Vids(동적 20~30초 라이브 포토) 결합. 스크롤을 통해 카드를 넘길 때마다 각 컷의 분위기에 맞춰 SUNO AI로 생성된 음원이 실시간으로 전환 재생됩니다. |

## Station별 시연 화면

### Station 01: 마우스 인터렉션에 따른 나비의 움직임 
![Station 01 Demo](./assets/demo_station1.gif)

- 마우스 움직임에 따라 마우스 주변의 나비가 노란색에서 파란색으로 변하는 인터렉션 구현 
- 마우스 클릭시 배경음악 재생

---

### Station 02: 뮤직비디오의 음악을 사용자가 직접 변주해볼 수 있는 디제잉 공간 
![Station 02 Demo](./assets/demo_station2.gif)

- 뮤직비디오의 음악을 세가지 트랙으로 분리하여 볼륨바와 양쪽의 조절칸으로 원하는 악기 소리를 조합하고 시각 그래픽과 함께 음악을 변주하는 경험 제공 
- 실시간 사용자 인터랙션 처리 및 사운드 효과 연출

---

### Station 03: 뮤직비디오 장면을 오마주한 미니 게임 
![Station 03 Demo](./assets/demo_station3.gif)

- 키보드와 마우스를 활용해 장애물을 피하는 게임 구현 
- 게임 배경음악(SUNO AI)
---

### Station 04: 뮤직비디오의 핵심 파트와 라이브 포토카드를 볼 수 있는 릴스 형태의 아카이브 
![Station 02 Demo](./assets/demo_station4.gif)

- 사용자의 마우스 스크롤에 따라 영상 재생 

---

## Tech Stack & AI Multi-Tool Pipeline

본 프로젝트에서는 다양한 Generative AI 툴과 **Vibe Coding(바이브 코딩)**을 결합하여 기획부터 영상제작, 오디오 제작, 웹 개발까지 완료하였습니다. 

### Tech Stack
* **Frontend**: HTML5, CSS3, JavaScript (ES6+, Vibe Coding)
* **Web APIs**: HTML5 Canvas API, Web Audio API (`AudioContext`, `BiquadFilterNode`)
* **Deployment**: GitHub Pages

### AI Multi-Tool Pipeline
| 분류 | 사용 기술 및 AI 툴 | 역할 및 활용 내용 |
| :--- | :--- | :--- |
| **Development** | HTML5, CSS3, JavaScript | Web Audio API 조작, 마우스/스크롤 인터랙션, 미니게임 구현 |
| **Code AI** | Google AI Studio, Anthropic Claude | 코드 생성, 바이브 코딩을 통한 빠른 프로토타이핑 및 인터랙션 개발 |
| **Audio & Music** | SUNO AI | 타이틀곡 생성, 배경음악 제작 및 트랙 분리(보컬, 드럼, 베이스, 일렉) |
| **Visual & Video** | Mixboard, Higgsfield, Google Vids | 캐릭터/배경 합성, 게임 비주얼 소스 생성, 20~30초 '라이브 포토' 영상 제작 |

---

## Directory Structure (디렉터리 구조)

```text
interactive-movie-experience/
├── assets/             # 음원(MP3) 및 비디오(MP4) 미디어 에셋
├── css/                # 메인 및 공통 스타일시트
├── js/                 # 인터랙션 전용 모듈 (butterfly.js 등)
├── stations/           # 스테이지별 독립 HTML 파일
└── index.html          # 타임라인 메인 라우트