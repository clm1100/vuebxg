import vue from 'vue'
import vuex from 'vuex'
var VueCookie = require('vue-cookie')
vue.use(VueCookie)
vue.use(vuex)

let obj = JSON.parse(VueCookie.get('userInfo') || '{}')
const state = {
  tc_name: obj.tc_name,
  tc_avatar: obj.tc_avatar
}

const mutations = {
  initHeaderst(state, obj) {
    state.tc_name = obj.tc_name
    state.tc_avatar = obj.tc_avatar
  }
}

const actions = {
  initHeaderst(context) {
    let obj = JSON.parse(VueCookie.get('userInfo') || '{}')
    context.commit('initHeaderst', obj)
  }
}
const getters = { }

export default new vuex.Store({
  state,
  mutations,
  actions,
  getters
})