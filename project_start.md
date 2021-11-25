# React 프로젝트 초기세팅 및 Github page 배포하기

## 필요한 라이브러리 설치

```
$ npx create-react-app 프로젝트명
$ cd 프로젝트명
$ npm install react-router-dom
$ npm install -D prettier eslint-config-prettier eslint-plugin-prettier
$ npm install -D gh-pages

$ npm install styled-components
```

## React 초기세팅 진행

### App.js

```javascript
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
```

### index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
```

### src/styles/GlobalStyles.jsx

```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
abbr,
address,
em,
img,
q,
strong,
b,
i,
ol,
ul,
li,
form,
label,
article,
figure,
figcaption,
footer,
nav,
section,
main {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
}
ol,
ul,
li {
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
b,
strong,
i,
em {
  font-weight: normal;
  font-style: normal;
}
textarea {
  border: none;
  overflow: auto;
  outline: none;
  box-shadow: none;
  resize: none;
  cursor: text;
}
input,
button {
  border: none;
  outline: none;
  background: transparent;
}
a {
  text-decoration: none;
  color: inherit;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
`;

export default GlobalStyles;
```

### src/styles/theme.jsx

```jsx
const theme = {
  logoRed: 'rgb(233,0,22)',
  buttonGray: 'rgb(255,255,255)',
};

export default theme;
```

## 초기세팅 이외의 폴더 및 내용 파일추가

### vscode/settings.json

- eslint & prettier 관련

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "javascript.format.enable": false,
  "eslint.alwaysShowStatus": true,
  "files.autoSave": "onFocusChange"
}
```

### .eslintrc

- eslint & prettier 관련

#### 모두 mac 유저

```json
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-nested-ternary": "warn", // 중첩 삼항 연산자 금지
    "no-console": "warn", // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
  }
}
```

#### window 유저 포함

```json
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-nested-ternary": "warn", // 중첩 삼항 연산자 금지
    "no-console": "warn", // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
}
```

### .prettierrc

- eslint & prettier 관련

```json
{
  "tabWidth": 2,
  "endOfLine": "lf",
  "arrowParens": "avoid",
  "singleQuote": true
}
```

### package.json 내용추가

- gh-pages 세팅

```json
"scripts": {
    "build": "webpack --mode production", // 일단보류
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist" // deploy or dist
  },

"homepage": “url” // 제일 상단, github 배포

```

### .github/workflow/gh-pages.yml

- github action 추가

```yml
name: github pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2.1.2
        with:
          node-version: '12.x'

      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - run: npm ci
      - run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist // deploy or dist
```

## github 배포 관련 설치

```
$ npm run build
$ npm install -g serve
```

## React 프로젝트 실행

```
$ npm start
```

## github repository 연결 및 업데이트

```
$ git remote add origin {url}
$ git add .
$ git commit -m "커밋메시지"
$ git push origin main
```
