'use strict'

import axios from 'axios'
import qs from 'qs'
import router from '../routeConfig'

// axios默认预处理
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.withCredentials = true;

// axios拦截器作统一处理
// request请求拦截
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
})
// response响应拦截
axios.interceptors.response.use(response => {
  // 响应正常返回
  return response;
}, error => {
  // 响应异常捕获
  console.log(error.response.status);
  switch (error.response.status) {
    case 401:
      // 项目业务逻辑：无权限跳转登录
      router.replace({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath}
      })
      break;
    default:
      return error.response;
      break;
  }
})

export default {
  post: (url, data) => {
    return axios({
      method: 'post',
      // baseURL: 'http://localhost:3000/iot/v1',
      url,
      data: qs.stringify(data),
      timeout: 10000
    }).then(res => {
      return res;
    }).then(err => {
      return err;
    })
  },
  get: (url, params) => {
    return axios({
      method: 'get',
      // baseURL: 'http://localhost:3000/iot/v1',
      url,
      params,
      timeout: 10000
    }).then(res => {
      return res;
    }).then(err => {
      return err;
    })
  }
}
