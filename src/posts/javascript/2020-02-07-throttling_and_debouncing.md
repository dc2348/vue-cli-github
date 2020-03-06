
## 쓰로틀링(throttling)과 디바운싱(debouncing)이란?
* 쓰로틀링: 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것
* 디바운싱: 반복되어 호출되는 함수 중 제일 처음 또는 마지막에만 함수가 호출되도록 하는 것

## 사용 예
* 쓰로틀링은 스크롤 이벤트에 주로 사용됨
* 디바운싱은 ajax 검색에 주로 사용됨

## 라이브러리 사용
* `lodash` 라이브러리에서 `_.debounce`와 `_.throttle` 함수 제공
* https://lodash.com/docs/4.17.15#debounce
* https://lodash.com/docs/4.17.15#throttle

###### Vue에 적용 하기
* 필요한 함수만 사용
    ```js
    import _throttle from 'lodash/throttle'
    ```
* `scroll` 이벤트에 적용
    ```js
    window.addEventListener('scroll', _throttle(f, 200))
    ```
* https://blog.jungbin.kim/web/2019/02/16/js-decreaing-webpack-bundle.html

<br>

### :bookmark_tabs: 참조(references)
https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa
https://kr.vuejs.org/v2/guide/computed.html
https://css-tricks.com/debouncing-throttling-explained-examples/