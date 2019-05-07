// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import Router from 'vue-router'
Vue.use(Router);

import router_list from './router'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import moment from 'moment'
Vue.prototype.$moment = moment;

Vue.config.productionTip = false;


// 初始化 store
const store = new Vuex.Store({
  state: {},
  mutations: {}
});
// 初始化 router
const router = new Router({
  mode: 'hash',
  routes: router_list,
});
// 初始化 app
let app = new Vue({
  router,
  template: '<router-view/>'
});
app.$mount('#app');
