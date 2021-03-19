import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.css'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart,faSearch,faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faShoppingCart,faSearch,faCheck)
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
