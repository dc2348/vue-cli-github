import Vue from 'vue'
import App from './App.vue'
import { router } from "./routes/index.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVuejs, faAws, faJs, faNpm } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add( faVuejs, faAws, faJs, faNpm )
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
