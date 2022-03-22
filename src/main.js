import Vue from 'vue'
import App from './App.vue'

// import tailwind
import './index.css'

// import store 
import store from './store';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faCartShopping, faArrowRight, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faCartShopping, faArrowRight, faArrowLeft, faBars)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
