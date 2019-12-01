import Vue from 'vue'
import Vuex from 'vuex'
import cookieHelper from './helpers/cookie'
import {
  parseJWT
} from './helpers/parseJwt'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'test',
      admin: true
    },
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
      let user = parseJWT(data.accessToken);
      cookieHelper.setTokenCookie(data.accessToken);
      commit('storeUser', user)
    },
    deleteSession({
      commit
    }) {
      cookieHelper.deleteTokenCookie();
      commit('deleteUser');
    }
  }
})