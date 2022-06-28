import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 'Anonimo',
    auth: false,
  },
  getters: {
  },
  mutations: {
    setLogin(state, payload) {
      state.user = payload.user;
      state.auth = true;
      localStorage.setItem('access_token', payload.token);
    },
  },
  actions: {
  },
  modules: {
  },
});
