# Vue-CLI3에서 markdown 파일 로드하기
처음에는 `markdown-it-vue` 플러그인을 사용해서 markdown 문서를 이용하여 블로그 포스팅 페이지를 개발했었다.<br/>
그런데 `.md` 형식의 문서를 바로 로드할 수 없고, `.js` 파일로 한번 변환해준 후 `import`를 해줘야하는 방식이라 포스팅 유지보수 관점에서 불편함을 느끼게 되었다. <br/>
그래서 `.md` 형식의 파일을 바로 로드해서 읽어올 수 있는 플러그인을 찾아보게 되었다.<br/>
<br/>

###### markdown 파일 import 오류
- .vue 파일에 아래와 같이 markdown 파일을 import 함
  ```js
  import Markdown from '@/posts/vue/2020-02-20-vue-markdown-loader.md'
  ```

- markdown 형식의 파일 import 시 아래와 같은 webpack loader 오류가 발생
  ``` bash
  Failed to compile.

  @/posts/vue/2020-02-20-vue-markdown-loader.md 1:0
  Module parse failed: Unexpected character '#' (1:0)
  You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
  ```
  ![vue-2020-02-20](/posts/images/vue/vue-2020-02-20-01.jpg)

- 공식 홈페이지에 들어가 보니 markdown-loader 플러그인을 설치하라고 나온다.
- 찾아본 결과 vue용 markdown-loader인 `vue-markdown-loader`가 있었다.



## 설치
1. Vue2일 경우
  ``` bash
  npm i vue-markdown-loader -D
  npm i  vue-loader vue-template-compiler -D
  ```
  :bulb: --save-dev 또는 -D하면 devDependencies에 추가됨

## 사용법
1. Vue-CLI 3일 경우, `vue.config.js` 파일에 아래 코드를 추가한다.

  ```js
  module.exports = {
    chainWebpack: config => {
      config.module.rule('md')
        .test(/\.md/)
        .use('vue-loader')
        .loader('vue-loader')
        .end()
        .use('vue-markdown-loader')
        .loader('vue-markdown-loader/lib/markdown-compiler')
        .options({
          raw: true
        })
    }
  }
  ```
2. markdown 파일을 import 한다.
  ```js
  import Markdown from '@/posts/vue/2020-02-20-vue-markdown-loader.md'
  ```
3. 컴포넌트에 추가한다.
  ```js
  components: {
      Markdown
    },
  ```
4. templete 영역에 추가한다.
  ```html
  <markdown></markdown>
  ```

###### 결과화면
  - 정상적으로 텍스트가 노출되는 것을 확인하였다.
  ![vue-2020-02-20](/posts/images/vue/vue-2020-02-20-02.jpg)

## css추가
그렇지만 Markdown 문서가 더 예쁘게 보이게 하기 위해서는 CSS를 추가해주어야 한다.

###### highlight 추가하기
1. 내장되어있는 highlight관련 css를 import해준다.
  ```js
  import 'highlight.js/styles/github.css'
  ```
  * 아래와 같이 소스코드 영역에 색상 하이라이트가 된 것을 확인할 수 있다.
  ![vue-2020-02-20](/posts/images/vue/vue-2020-02-20-03.jpg)

###### github-markdown-css 추가하기
1. `github-markdown-css` 플러그인 설치하기
``` bash
npm i github-markdown-css
```
2. 플러그인 `import`하기
```js
import 'github-markdown-css'
```
3. `markdown-body` class 추가해주기
```html
<markdown class="markdown-body"></markdown>
```

###### 결과화면
  - 헤더 크기와 폰트 등 전체적인 CSS가 깔끔해진 것을 확인할 수 있다.
  ![vue-2020-02-20](/posts/images/vue/vue-2020-02-20-04.jpg)

## emoji 플러그인 추가하기
CSS까지 예쁘게 추가했으나 내가 좋아하는 emoji가 정상적으로 노출이 안되는 것을 발견하였다.
그래서 emoji를 또 추가하기 위해 방법을 찾아보았다.

1. **vue.config.js** `options`에 아래 코드 추가해주기
  ```js
  use: [
    /* markdown-it plugin */
    require('markdown-it-emoji')
  ]
  ```
  ex) 예시
  ```js
  config.module.rule('md')
    .test(/\.md/)
    .use('vue-loader')
    .loader('vue-loader')
    .end()
    .use('vue-markdown-loader')
    .loader('vue-markdown-loader/lib/markdown-compiler')
    .options({
      raw: true,
      use: [
        /* markdown-it plugin */
        require('markdown-it-emoji')
      ]
    });
  ```

서버 재실행 후, emoji가 정상적으로 노출되는 것을 확인하였다.

### :bookmark_tabs: 참조(references)
- [https://webpack.js.org/loaders/](https://webpack.js.org/loaders/)
- [https://github.com/peerigon/markdown-loader](https://github.com/peerigon/markdown-loader)
- [https://github.com/QingWei-Li/vue-markdown-loader](https://github.com/QingWei-Li/vue-markdown-loader)
- [https://github.com/markdown-it/markdown-it#syntax-highlighting](https://github.com/markdown-it/markdown-it#syntax-highlighting)
- [https://github.com/markdown-it/markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji)