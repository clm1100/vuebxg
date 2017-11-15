import Vue from 'vue'
import iView from 'iview'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'

// import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(iView)

Vue.use(VeeValidate)
var VueCookie = require('vue-cookie')
Vue.use(VueCookie)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
