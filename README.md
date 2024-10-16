# Rolling
**`코드잇 부트캠프 스프린트 프론트엔드 6기 : Part2 10팀 1차 프로젝트`**
![image](https://github.com/wayandway/rolling/assets/64190056/ed53ea87-0f42-4dbf-bea4-852550ec51b2)

- **배포 URL** : https://rolling-sprint.vercel.app/
- **프로젝트 노션** : https://sprint-part2-10.notion.site/Rolling-e0ec29ff878c43a29ad085250d0d2be8?pvs=4


<br/>

## 1. 프로젝트 소개 & 팀원
### 프로젝트 소개
- 어릴 적 써봤던 롤링페이퍼를 온라인으로 쉽게 작성할 수 있는 서비스입니다.
- 로그인 없이 나만의 롤링페이퍼를 생성하고, 해당 링크를 나에게 메시지를 남겨줬으면 하는 사람에게 공유할 수 있습니다.
- 롤링페이퍼에 글을 남기고 싶은 사람은 수신자에게 메시지를 쓸 수 있고, 헤더의 이모지를 추가해 수신자에 대한 감정을 표현할 수 있습니다.

### 팀원
|팀원|역할|개발 내용|
|:---:|:---|:---|
|[곽서연](https://github.com/yeonilil)|발표자료 제작|메시지카드/리스트, 글로벌헤더|
|[김영운](https://github.com/YoungUnKim)|발표|메인페이지, 롤링페이퍼 생성폼, 공용 버튼 UI|
|[김용인](https://github.com/yongin6412)|시연영상 제작|롤링페이퍼 헤더, 카카오 SDK 공유 기능|
|[김지윤](https://github.com/wayandway)|팀장&PM|API 함수 모음, 메시지카드 생성폼, 롤링페이퍼 편집 기능, 다크 테마|
|[임진조](https://github.com/Sparrowlim)|배포|롤링페이퍼 카드/리스트, 롤링페이퍼 헤더(Message Counter), 페이지 전환 애니메이션|


## 2. 개발 환경
### 사용 기술
<img src="https://github.com/rolling-sprint/rolling/assets/64190056/31f0b6b3-2b6c-490e-9a64-38e9f2773c1e" width=50 />
<img src="https://github.com/rolling-sprint/rolling/assets/64190056/2d18eda8-dfad-405a-8e12-0e2a0d325c49" width=50 />
<img src="https://github.com/rolling-sprint/rolling/assets/64190056/36ff03cf-1251-4b1c-a43f-a6b63c4b6ef1" width=100 />

<br/>

- React를 사용해 유지보수와 재사용성을 고려했습니다.
- 컴포넌트 단위로 작업을 나누어 역할 분담에 용이했습니다.
- 롤링페이퍼 헤더의 하위 컴포넌트들이 중복으로 사용되었고, 컴포넌트를 통한 리소스 절약이 가능했습니다.
- CSR을 채택해 페이지 간 화면 전환을 부드럽게 했습니다.

<details>
<summary>프로젝트 구조</summary>
<div markdown="1">

```
src % tree -d
.
├── assets
│   ├── fonts
│   ├── icons
│   └── images
├── components
│   ├── animation
│   ├── layout
│   └── ui
│       ├── primary-button
│       ├── rolling-header
│       │   ├── best-emoji
│       │   ├── emoji-add
│       │   ├── emoji-drop-down
│       │   ├── message-counter
│       │   ├── profile-preview
│       │   ├── rolling-paper-name
│       │   └── share-drop-down
│       └── text
├── hooks
├── pages
│   ├── home
│   ├── message-post
│   │   └── components
│   │       ├── DropDownBox
│   │       ├── content-editor
│   │       ├── drop-down
│   │       ├── message-form
│   │       └── profile-selector
│   ├── my-paper
│   │   └── components
│   │       ├── add-message
│   │       ├── message-card
│   │       ├── message-list
│   │       ├── modal
│   │       └── my-page-header
│   ├── paper-edit
│   ├── paper-list
│   │   └── components
│   │       ├── card-list
│   │       └── rolling-paper-card
│   └── paper-post
│       └── components
│           ├── check-box
│           ├── paper-form
│           ├── select-box
│           └── toggle-button
├── services
└── styles

49 directories

```
</div>
</details>

### Git 협업
- PR을 올리면 최소 1명의 코드리뷰가 있어야 `main` 브랜치에 병합되도록 보호 규칙을 정했습니다.
- 각 PR들을 `main`에 병합할 때 Squash and Merge로 메인 브랜치의 히스토리를 깔끔하게 유지하도록 했습니다.

<br/>

## 3. 개선 작업
### 코드 컨벤션 정정 및 리팩토링
- 코드리뷰 중 컨벤션을 안 지킨 경우가 많아 가독성이 안좋은 것을 느꼈으며, 프로젝트 중반에 코드 컨벤션에 맞게 리팩토링했습니다.

### 데이터 패치 로직을 커스텀 훅으로 분리
- State값과 useEffect훅 사용을 줄이기 위해, 데이터 패치 로직을 커스텀 훅으로 분리했습니다.
- [관련 PR 링크](https://github.com/rolling-sprint/rolling/pull/32)

<br/>

## 4. 페이지별 기능
### 메인 & 롤링페이퍼 리스트
<img src="https://github.com/wayandway/rolling/assets/64190056/9ffd20c2-c8f7-4cac-865e-dad5c5f44f8a" width=300 />

- 서비스 메인 화면으로, 서비스 설명 및 롤링페이퍼 리스트를 구경할 수 있습니다.

<br/>

### 롤링페이퍼 만들기
<img src="https://github.com/wayandway/rolling/assets/64190056/02de1774-a6a4-40f8-aeba-1a5f22c372af" width=300 />

- 롤링페이퍼를 생성할 수 있으며, 이름을 필수로 입력하면 롤링페이퍼 배경 이미지를 선택할 수 있습니다.

<br/>

### 메시지 남기기
<img src="https://github.com/wayandway/rolling/assets/64190056/936ee81a-e258-4f66-8226-ef05ae9a39e3" width=300 />


- 롤링페이퍼에 메시지를 작성할 수 있으며, 이름과 메시지 글을 필수로 입력합니다.
- 프로필 이미지와 폰트를 설정할 수 있습니다.

<br/>


### 롤링페이퍼 편집
<img src="https://github.com/wayandway/rolling/assets/64190056/7a0a77e6-a133-4ddc-b56b-56cf6c61fa28" width=300 />



- 메시지 카드, 롤링페이퍼 페이지를 삭제할 수 있습니다.


<br/>

### 이모지 추가 & 카카오톡 공유 
<img src="https://github.com/wayandway/rolling/assets/64190056/0090b19e-1fc6-4d9d-bef0-6ea93f241342" width=300 />

- 이모지 피커를 통해 롤링페이퍼에 이모지를 추가할 수 있습니다.
- 카카오톡 계정과 연동해 롤링페이퍼 링크를 공유할 수 있습니다.

<br/>

### 다크 모드
<img src="https://github.com/wayandway/rolling/assets/64190056/2fec9dd7-5af0-4866-a112-9e452eca0896" width=300 />

- 헤더의 아이콘으로 다크/라이트 모드를 토글할 수 있습니다.
- 설정한 모드는 로컬 스토리지에 저장되어, 브라우저에 다시 접속해도 설정한 모드가 유지됩니다.



  
