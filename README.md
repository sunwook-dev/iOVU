## 📌 iOVU-FRONT

> iOVU-FRONT는 사용자 중심의 여행 일정 관리 서비스를 위한 프론트엔드 프로젝트입니다.  
> React 기반의 SPA(Single Page Application) 구조로, 소셜 로그인, 지도 기반 장소 추천, 일정 생성 및 관리 기능을 제공합니다.

---

### 🛠 기술 스택

- **Frontend Framework**: React (Create React App)
- **Styling**: CSS Modules / Styled-components (사용 시)
- **Routing**: React Router
- **API 통신**: Axios
- **지도 API**: (카카오/네이버 지도 등 추후 명시)
- **상태 관리**: (사용 시 Recoil / Redux 등 명시)

---

### 📁 프로젝트 구조

```
iOVU-FRONT/
├── public/                # 정적 파일
├── src/
│   ├── assets/            # 이미지, 폰트 등
│   ├── components/        # 공통 컴포넌트
│   ├── pages/             # 각 페이지 단위 컴포넌트
│   ├── services/          # API 통신 모듈
│   ├── utils/             # 유틸리티 함수
│   ├── App.js             # 루트 컴포넌트
│   └── index.js           # 엔트리 포인트
├── .gitignore
├── package.json
└── README.md
```

---

### 🚀 실행 방법

```bash
# 1. 프로젝트 클론
git clone https://github.com/your-repo/iOVU-FRONT.git
cd iOVU-FRONT

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm start
```

개발 서버는 기본적으로 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

---

### 🔐 환경 변수 설정

`.env` 파일을 루트에 생성하고 필요한 키를 설정하세요.

```
REACT_APP_API_BASE_URL=http://localhost:8080/api
```

---

### 📦 배포

```bash
npm run build
```

빌드된 파일은 `build/` 디렉토리에 생성됩니다. 이 파일들을 웹 서버(Nginx 등)에 배포하여 서비스할 수 있습니다.

---

### 📚 API 문서

API 명세는 [SwaggerHub 문서](https://app.swaggerhub.com/apis-docs/iouv/iOVU/3.0.0)를 참고하세요.
