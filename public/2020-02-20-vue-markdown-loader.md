# Vue-CLI3에서 markdown 파일 로드하기


###### markdown 파일 import 오류
.vue 파일에 아래와 같이 markdown 파일을 import 함
```js
import Markdown from '../../public/2020-02-19-async-programming.md'
```

 markdown 형식의 파일 import 시 아래와 같은 webpack loader 오류가 발생
```
Failed to compile.

./public/2020-02-19-async-programming.md 1:0
Module parse failed: Unexpected character '#' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
```
공식 홈페이지에 들어가 보니 markdown-loader 플러그인을 설치하라고 나온다.
찾아본 결과 vue용 markdown-loader인 vue-markdown-loader가 있었다.



## 설치
Vue2일 경우

```
npm i vue-markdown-loader -D
npm i  vue-loader vue-template-compiler -D
```
:bulb: --save-dev 또는 -D하면 devDependencies에 추가됨

## 사용법
Vue-CLI 3일 경우, `vue.config.js` 파일에 아래 코드를 추가한다.

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
markdown 파일을 import 한다.
```js
import Markdown from '../../public/2020-02-19-async-programming.md'
```
컴포넌트에 추가한다.
```js
components: {
    Markdown
  },
```
templete 영역에 추가한다.
```html
<markdown></markdown>
```

## 참조
- https://webpack.js.org/loaders/
- https://github.com/peerigon/markdown-loader
- https://github.com/QingWei-Li/vue-markdown-loader