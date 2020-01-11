import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import my first main page
import First from '../views/First.vue'  

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first', //this name is not required . 
    component: First //this 'First' from import Named.
  },
  //this is default, delete is not used.
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history', //History模式, url无'#'
  base: process.env.BASE_URL,
  routes //这里就包含了 routes, 和vue cli3 比更加的容易看懂.
})

export default router
