import Vue from 'vue'
import Vuex from 'vuex'
import cookie from './helpers/cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    member: null
  },
  getters: {
    user: state => state.user,
    member: state => state.member
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    },
    storeMember(state, data) {
      state.member = data
    },
    deleteUser(state) {
      state.user = null
    },
    deleteMember(state) {
      state.member = null
    }
  },
  actions: {
    setSession({
      commit
    }, data) {
      commit('storeUser', data)
    },
    deleteSession({
      commit
    }) {
      cookie.deleteTokenCookie();
      commit('deleteUser');
      commit('deleteMember');
    },
    setMember({ commit }, data) {
      commit('storeMember', data)
    }
  }
})