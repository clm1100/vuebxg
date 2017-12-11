import Vue from 'vue'
import iView from 'iview'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(iView)
var VueCookie = require('vue-cookie')
Vue.use(VueCookie)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
