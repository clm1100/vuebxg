import Vue from 'vue'
import App from './App'
import router from './router'
// import VueAxios from 'vue-axios'
Vue.config.productionTip = false

var VueCookie = require('vue-cookie')
Vue.use(VueCookie)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
