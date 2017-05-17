import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

// 引入路由控制
import routes from './routeConfig.js'

// 引入vuex状态控制
import stores from './store/store'

import {
    imgData
} from './util.js'

Vue.prototype.imgData = imgData;

// 引用elementUI
Vue.use(ElementUI)
// 引用VueRouter
Vue.use(VueRouter)
const router = new VueRouter({
    routes: routes.routes
})
// router.beforeEach((to, from, next) => {
//     if (to.fullPath.indexOf('admin') != -1) {
//         // 判断权限...
//         next();
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
