import Vue from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css'

import Cookies from 'js-cookie'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// global css
import './assets/styles/index.scss'
import './assets/icons' // icon

import store from './store'



Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
