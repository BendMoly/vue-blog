import Vue from 'vue'
// import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

// 引入路由控制
import routes from './routeConfig.js'

// 引入vuex状态控制
import stores from './store/store'

import router from './routeConfig'

// 引入axios请求
import http from './utils/http'
Vue.prototype.$http = http

import {
    imgData,
    $initHighlight
} from './util.js'

Vue.prototype.imgData = imgData
Vue.prototype.$initHighlight = $initHighlight

import { hostConfig } from './utils/host.config'
import { urlList } from './utils/url.config'
Vue.prototype.hostRequest = (function(config, list){
  var obj = {};
  for (var key in list) {
      if (list.hasOwnProperty(key)) {
          obj[key] = config.host + list[key]
      }
  }
  return obj;
})(hostConfig, urlList)


// 引用elementUI
Vue.use(ElementUI)
// 引用VueRouter
// Vue.use(VueRouter)
// const router = new VueRouter({
//     routes: routes.routes
// })
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(m => m.meta.auth)) {
//         // 对路由进行验证
//         if(stores.getters.authorized) { // 已经登陆
//             next()
//         }else{
//             // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
//             next({path:'/login',query:{ referrer: to.fullPath } })
//         }
//     }else{
//         next();
//     }
// })

new Vue({
  el: '#app',
  router,
  store: stores,
  render: h => h(App)
})
