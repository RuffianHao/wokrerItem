/*
 * @Description:
 * @Date: 2020-01-10 14:59:58
 * @LastEditTime : 2020-01-10 15:17:28
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
