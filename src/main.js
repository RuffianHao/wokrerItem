/*
 * @Description:
 * @Date: 2020-01-10 14:59:58
 * @LastEditTime : 2020-01-10 15:42:40
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/main.css'
import Element from '@/utils/element.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
