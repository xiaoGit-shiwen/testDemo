// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // 导入element
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie'// 导入cookies
import echarts from 'echarts' // 图表
import axios from 'axios' // 导入axios

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Cookies)
Vue.prototype.$Cookies = Cookies
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'api'

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登陆权限
    if (Cookies.get('userName') !== undefined) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
