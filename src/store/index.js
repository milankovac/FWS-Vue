import Vue from 'vue'
import Vuex from 'vuex'
import AllProduct from '@/store/modules/AllProduct'
import CartTotal from '@/store/modules/CartTotal'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
     AllProduct:AllProduct,
     CartTotal:CartTotal
  },
  plugins:[createLogger()]
})
