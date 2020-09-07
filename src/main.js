import Vue from 'vue'
import App from './App.vue'

import './style/common.scss';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router';

import router from '@/router/index.js'



Vue.use(ElementUI)
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')