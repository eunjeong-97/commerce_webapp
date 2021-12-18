# 3주차 피드백 정리

## git commit 관련

- 문서의 경우 Docs 키워드로 적용하자
- 이 커밋에서 가장 중요한 내용 파악
- 어떤 커밋 이름으로 더욱 명확하게 할지

커밋내용도
~~Add: onClick 이벤트핸들러 문제해결~~ 이라고 하는 것이 아니라
`Add: 테마별 상품리스트 페이지 구현`

## styled-components

js파일이 달라지면 Component 이름이 동일해도 괜찮다

```jsx
// Navbar.js
const Navbar = () => {
  return <Navbar></Navbar>
}

const Navbar = styled.div``
```

## .env : 환경변수파일

1. dotenv 패키지를 설치한다

```
$ npm install dotenv
```

2. root경로에 `.env` 파일을 만들고 아래와 같이 변수와 해당내용을 작성해준다
   ⚠️ react의 경우 변수명 앞에 `REACT_APP`을 붙여주지 않으면 작동하지 않는다

```
REACT_APP_COMMERCE_URL='url내용'
```

3. 해당 URL을 사용할 파일에서

- `import dotenv from 'dotenv'`
- `dotenv.config()`
- `process.env.REACT_APP_COMMERCE_URL`

```jsx
import dotenv from 'dotenv'

const Component = () => {
  dotenv.config()
  const handleAxios = () => {
    axios
    .get(`${process.env.REACT_APP_COMMERCE_URL}어쩌고 저쩌고`)
  }
  return ()
}
```

> [참고내용](https://nyang-in.tistory.com/192)

## 구글폰트 적용하는 방법

[참고내용](https://imweb.me/faq?mode=view&category=29&category2=38&idx=71695)
