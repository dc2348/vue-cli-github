import Vue from 'vue'
import App from './App.vue'
import { router } from "./routes/index.js"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVuejs, faAws, faJs, faNpm, faGitAlt, faAndroid } from '@fortawesome/free-brands-svg-icons'
 
library.add( faVuejs, faAws, faJs, faNpm, faGitAlt, faAndroid )
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
