/**
 * 系统级 App级的插件写在 main.js内.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

/**
 * 指定协议交互用的插件
 * http这个名字是可以随便起的, 不一定是http, 只是个变量,  这个是语法的.
 * 使用的时候就是通过  http 这个名字使用的.
 * axios 这个是通过import引用来的, 要和import 后边的名字一致, import后边的 axios的名字也是可以自己设定的.
 */
Vue.prototype.$http = axios 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
