import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faCartArrowDown, faMinus, faPlus, faXmark, faMagnifyingGlassPlus, faMessage, faRulerHorizontal, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faCartArrowDown, faMinus, faPlus, faXmark, faMagnifyingGlassPlus, faMessage, faRulerHorizontal, faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')