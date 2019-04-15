import Vue from 'vue'
import weex from 'weex-vue-render'
/*global Vue*/

weex.init(Vue)
/* weex initialized here, please do not move this line */
const { router } = require('./router/router.js');
// import {router} from './router/router.js'
const App = require('@/index.vue');
/* eslint-disable no-new */
console.log(weex)
Vue.prototype.$http=weex._modules.stream.fetch;
Vue.prototype.$weexM=weex._modules;
new Vue(Vue.util.extend({el: '#root', router}, App));


