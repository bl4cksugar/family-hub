import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import cookieHelper from './helpers/cookie'
import Toasted from 'vue-toasted';

Vue.use(Toasted)


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = "http://family.przedprojekt.com/api/";
Vue.axios.interceptors.request.use(
  (config) => {
    let token = cookieHelper.getTokenCookie();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Vue.axios.interceptors.response.use(response => {
  return response;
}, async error => {
  if (!error.response) {
    router.push({
      name: "login"
    });
    error.response = {
      data: {
        success: false,
        message: "Connection error"
      }
    };
  } else
    // store.dispatch('deleteSession');
    return Promise.reject(error.response)
});


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')