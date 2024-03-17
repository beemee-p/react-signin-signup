### 💳 로그인 / 회원가입 기능 페이지

- 기술 스택 : react / react-redux / styled-component / react-router-dom / axios / node.js express

- 실행 방법 :

  ```
  1. 깃 클론
  $ git clone https://github.com/beemee-p/react-signin-signup.git

  2. 패키지 설치하기
  $ npm install

  3. 프로젝트 실행하기
  $ npm run start

  4. node.js API 서버 시작하기
  $ node server/server.js

  ```


- 구조
```
├── server
│   └── server.js
├── src
│   ├── App.tsx 
│   ├── Router.tsx 
│   ├── apis // 독립적인 api
│   │   ├── axiosConfig.ts
│   │   ├── signIn.ts
│   │   └── signup.ts
│   ├── components 
│   │   ├── Header.tsx
│   │   └── common // 재사용가능한 컴포넌트들 
│   │       ├── Button.tsx
│   │       ├── FormInput.tsx
│   │       ├── Input.tsx
│   │       └── LinkButton.tsx
│   ├── constants // 상수
│   │   ├── apis.ts
│   │   └── user.ts
│   ├── index.html
│   ├── index.js
│   ├── pages
│   │   ├── Error.tsx
│   │   ├── Main.tsx
│   │   ├── SignIn.tsx
│   │   ├── SignUp.tsx
│   │   └── Template.tsx
│   ├── static
│   │   └── img
│   │       └── spendit-logo.png
│   ├── store // 리덕스 스토어
│   │   ├── index.tsx
│   │   └── user
│   │       ├── actions.ts
│   │       ├── reducer.ts
│   │       └── selector.ts
│   ├── styles // 스타일
│   │   ├── Button.styles.ts
│   │   ├── global.styles.ts
│   │   └── type.ts
│   └── util
│       └── validation.ts
├── tsconfig.json
└── webpack.config.js

```


- 참고 사항
  - node.js 를 통해 간단한 api 서버를 만들었습니다. axios를 통해 mock up api 를 가져오고 jwt 토크나이징 하여 세션스토리지에 로그인 정보를 저장하였습니다
  - 로그인 / 회원가입의 서버 로직은 테스트용 데이터를 통해 사용하였습니다. 로그인 성공시 서버에서 보내준 토큰을 decode 하여 받아온 회원의 정보를 보여줍니다
  - 로그아웃 시 세션 데이터를 지우며 로그아웃 상태가 됩니다
  - 메인 / 회원가입 / 로그인 페이지로 나누었고 각각의 페이지들은 템플릿화하여 헤더와 공통의 레이아웃으로 연결시켜놓았습니다
  - 로그인과 회원가입시 정보를 담는 인풋과 버튼 등의 요소는 재사용가능한 컴포넌트화 하여 사용하였습니다
  - 또한 버튼의 경우 간단한 디자인 시스템을 적용하여 용도에 맞는 사용을 할 수 있도록 만들었습니다
  - 라우팅시 메인페이지 제외한 나머지 페이지들은 레이지 로딩을 걸어놓아 필요시 로딩이 됩니다 

