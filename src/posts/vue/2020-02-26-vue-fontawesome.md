
# vue-fontawesome 사용하기

### `vue-fontawesome` 설치하기
```bash
npm i --save @fortawesome/vue-fontawesome
npm i --save @fortawesome/fontawesome-svg-core
```

### `free-brands-svg-icons` 설치하기
```bash
npm i --save @fortawesome/free-brands-svg-icons
```

### `main.js`에 추가하기
```js
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVuejs, faAws, faJs, faNpm } from '@fortawesome/free-brands-svg-icons'

library.add( faVuejs, faAws, faJs, faNpm )

// 컴포넌트 추가
Vue.component('font-awesome-icon', FontAwesomeIcon)
```
- 여기서 `faVuejs, faAws, faJs, faNpm`는 내가 사용할 아이콘 라이브러리들이다. `faVuejs`는 vuejs 아이콘 라이브러리를 의미한다.

### 아이콘 추가하기
- 컴포넌트로 `font-awesome-icon`를 추가했기 때문에 html 태그로 바로 사용이 가능하다.
- 예를들어, 브랜드 아이콘 중 vuejs 아이콘을 사용할 경우 아래와 같이 추가하면 된다.
    ```html
    <font-awesome-icon :icon="['fab', 'vuejs']" />
    ```
- 결과
    - ![vue-2020-02-26](/posts/images/vue/vue-2020-02-26-01.jpg)


##### 아이콘에 색상 추가하기
- 아이콘에 색상을 넣고 싶다면 `style` 속성을 추가해주면 된다.
    ```html
    <font-awesome-icon :icon="['fab', 'vuejs']" :style="{ color: '#49C284' }" />
    ```
- 결과
    - ![vue-2020-02-26](/posts/images/vue/vue-2020-02-26-02.jpg)

### :bookmark_tabs: 참조(references)
- https://github.com/FortAwesome/vue-fontawesome
- https://fontawesome.com/icons?d=gallery
- https://fontawesome.com/icons/vuejs?style=brands