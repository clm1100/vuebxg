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
    console.log('============================')
    let obj = VueCookie.get('userInfo')
    context.commit('initHeaderst', obj)
  }
}

export default {
  state,
  mutations,
  actions
}
