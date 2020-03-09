
# 반응형 뷰포트 메타 태그(Responsive meta tag)
```bash
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```
- `<head>` 태그 안에 추가하기


# CSS box-sizing
```bash
.selector-for-some-widget {
  box-sizing: content-box;
}
```

# Using module bundlers
###### install BootstrapVue and Bootstrap 
```bash
# With npm
npm install vue bootstrap-vue bootstrap
```

###### register BootstrapVue in your app entry point
```bash
// App.vue

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
```

###### import Bootstrap and BootstrapVue css files:
```bash
// App.vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
```

###### require global Vue reference
```bash
// App.vue
import Vue from 'vue'
```


<br>

---
### :bookmark_tabs: 참조(references)
- [https://bootstrap-vue.js.org/docs/](https://bootstrap-vue.js.org/docs/)