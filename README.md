# K-TRAVEL | 대한민국 관광명소 검색

> 전국 40개 관광명소와 지역 축제를 지도에서 찾고, 길찾기와 여행 팁까지 한 번에 확인하는 웹 애플리케이션입니다.
> **배포 링크:** https://gunjungy-ship-it.github.io/tourist-attractions-korea/

---

## 📌 핵심 기능

| 기능 | 설명 |
|------|------|
| 🗺️ **카카오맵 기반 지도** | 한국어 지명을 정확히 표시하는 카카오 지도 SDK 연동 |
| 🔍 **관광명소 검색** | 명소명·지역·카테고리 실시간 검색 및 자동완성 |
| 🎯 **카테고리 필터** | 역사·자연·문화·쇼핑·맛집·지역명소별 마커 필터링 |
| 📍 **내 주변 명소** | GPS 기반 현재 위치에서 가까운 명소 거리순 정렬 |
| 📋 **상세 정보 패널** | 명소 설명·여행 팁·네이버 길찾기·카카오맵 길찾기·찜하기 |
| ❤️ **찜하기** | 로컬스토리지 기반 위시리스트 |
| 🎪 **지역 축제 탐색** | 전국 14개 대표 축제 정보, 지역 필터, 지도 마커 표시 |
| 📱 **PWA 앱 설치** | 모바일 홈 화면에 앱처럼 설치 가능 |
| 📊 **관리자 대시보드** | 명소 CRUD·통계 차트·활동 로그 (`/admin.html`) |
| 🔗 **SEO·오픈그래프** | OG 태그, robots.txt, sitemap.xml, 구글 서치콘솔 인증 |

---

## 🏗️ 개발 방법

### 기술 스택

- **지도 API:** Kakao Maps JavaScript SDK (한국어 지명 최적화)
- **UI 렌더링:** 순수 HTML + CSS (글래스모피즘 다크/라이트 테마)
- **언어:** JavaScript (ES5 호환, 인라인 스크립트)
- **데이터 저장:** localStorage (찜하기·방문 기록)
- **통계 차트:** Chart.js (admin 대시보드)
- **호스팅:** GitHub Pages + GitHub Actions 워크플로우
- **SEO:** robots.txt, sitemap.xml, OG·Twitter 카드 메타태그
- **PWA:** manifest.json + Service Worker (오프라인 캐싱)

### 개발 흐름

1. **프로토타입(Three.js)** – 3D 한반도 지형에 GPS 좌표 매핑. 방향 보정과 한글 라벨(CSS2DRenderer) 구현
2. **지도 전환(Leaflet → Kakao)** – 한국어 지명 정확도를 위해 Leaflet OSM에서 Kakao Maps SDK로 전환. 카테고리별 커스텀 오버레이 마커 적용
3. **검색·필터·상세 패널** – 관광명소 40개 대상 검색·카테고리 필터·하단 시트형 상세 정보 패널·길찾기 버튼 구현
4. **축제 기능** – 전국 14개 대표 축제 데이터 static 포함. 지역 필터·검색·지도 마커·상세 패널 연동
5. **성능 최적화** – CSS/JS Minify, 폰트·지도 CSS 지연 로딩, 스켈레톤 UI, 검색 디바운스
6. **관리자 대시보드** – 명소 CRUD, Chart.js 기반 카테고리/지역 통계, 활동 로그
7. **PWA·SEO** – manifest.json, Service Worker, robots.txt, sitemap.xml, OG/Twitter 카드, Google Search Console 인증
8. **QA·버그 수정** – 지도 표시 오류, 네이버 길찾기 URL 파라미터, 모바일 여백, 캐시 무효화 등 6건 이슈 해결

### 프로젝트 구조

```
📦 tourist-attractions-korea
├── index.html          # 메인 페이지 (카카오맵 + 관광명소 + 축제)
├── admin.html          # 관리자 대시보드
├── manifest.json       # PWA 설정
├── sw.js              # Service Worker
├── robots.txt         # 검색 엔진 크롤링 허용
├── sitemap.xml        # 사이트맵
├── .nojekyll          # GitHub Pages Jekyll 비활성화
├── icons/             # PWA 아이콘 SVG
└── .github/
    └── workflows/
        └── deploy.yml # GitHub Actions 배포 워크플로우
```

### 배포 파이프라인

GitHub Actions로 `main` 브랜치에 push할 때마다 자동으로 Pages에 배포됩니다.

1. `actions/checkout@v4` – 저장소 체크아웃
2. `actions/configure-pages@v5` – Pages 환경 설정
3. `actions/upload-pages-artifact@v3` – 정적 파일 업로드
4. `actions/deploy-pages@v4` – Pages 배포

---

## 🤝 Collaborator 초대

**voiddeveloper** 계정을 이 저장소의 Collaborator로 초대했습니다.  
이슈 등록 및 코드 리뷰에 참여할 수 있습니다.

---

## 📄 라이선스

이 프로젝트는 공공데이터(전국문화축제표준데이터)를 참고하여 제작되었습니다.  
모든 관광명소 정보는 교육·데모 목적으로 제공됩니다.