import Vue from 'vue'
import Vuex from 'vuex'
import cookieHelper from './helpers/cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    },
    deleteUser(state) {
      state.user = null
    }
  },
  actions: {
    setSession({
      commit
    }, data) {
      cookieHelper.setTokenCookie(data.accessToken);
      commit('storeUser', data.accessToken0)
    },
    deleteSession({
      commit
    }) {
      cookieHelper.deleteTokenCookie();
      commit('deleteUser');
    }
  }
})