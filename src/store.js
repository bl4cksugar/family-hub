import Vue from 'vue'
import Vuex from 'vuex'
import cookie from './helpers/cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
      // state.user.type = "admin"
    },
    deleteUser(state) {
      state.user = null
    }
  },
  actions: {
    async setSession({
      commit
    }, data) {
      commit('storeUser', data)
    },
    deleteSession({
      commit
    }) {
      cookie.deleteTokenCookie();
      commit('deleteUser');
    }
  }
})