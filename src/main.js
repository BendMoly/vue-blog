import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

// 引入路由控制
import routes from './routeConfig.js'

// 引入vuex状态控制
import stores from './store/store'

// 引入axios请求
import axios from 'axios'
axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios http 请求拦截设置
// axios.interceptors.request.use(config => {

// })
// axios http 响应拦截设置
// axios.interceptors.response.use(
//     response => {
//         console.log(response);
//         return response;
//     },
//     err => {
//         console.log(err);
//         if(err.response.status == 403){
//             stores.commit('LOGIN_FAIL');
//             router.replace({
//                 path: '/login',
//                 query:{ referrer: to.fullPath }
//             })
//         }
//         return Promise.reject(err.response.data)   // 返回接口返回的错误信息
//     }
// )
Vue.prototype.$http = axios

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
  console.log(obj);
  return obj;
})(hostConfig, urlList)


// 引用elementUI
Vue.use(ElementUI)
// 引用VueRouter
Vue.use(VueRouter)
const router = new VueRouter({
    routes: routes.routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(m => m.meta.auth)) {
        // 对路由进行验证
        if(stores.getters.authorized) { // 已经登陆
            next()
        }else{
            // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
            next({path:'/login',query:{ referrer: to.fullPath } })
        }
    }else{
        next();
    }
})

new Vue({
  el: '#app',
  router,
  store: stores,
  render: h => h(App)
})
