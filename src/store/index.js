import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import alertaBasica from '@/functions_js/alerts';

Vue.use(Vuex);

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default new Vuex.Store({
  state: {
    user: 'Anonimo',
    auth: false,
    ratings: null,
    genders: null,
    movies: null,
  },
  getters: {
  },
  mutations: {
    setLogin(state, payload) {
      state.user = payload.user;
      state.auth = true;
      localStorage.setItem('access_token', payload.token);
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    },
    setRatings(state, payload) {
      state.ratings = null;
      state.ratings = payload;
    },
    setGenders(state, payload) {
      state.genders = null;
      state.genders = payload;
    },
    setMovies(state, payload) {
      state.movies = null;
      state.movies = payload;
    },
  },
  actions: {
    async getRating(context) {
      const conf = {
        method: 'GET',
        url: `${rutaBackend}cinema/ratings`,
      }
      await axios(conf)
          .then((resp) => {
            context.commit('setRatings', resp.data)
          })
          .catch((err) => {
            console.log(`${err.response.data.msg}, status: ${err.response.status}`);
          });
    },
    async getGender(context) {
      const conf = {
        method: 'GET',
        url: `${rutaBackend}cinema/genders`,
      }
      await axios(conf)
          .then((resp) => {
             context.commit('setGenders', resp.data)
          })
          .catch((err) => {
            alertaBasica('error', `${err.response.data.message}, status: ${err.response.status}`);
          });
    },
    async getMovies(context) {
      const conf = {
        method: 'GET',
        url: `${rutaBackend}movies`,
      }
      await axios(conf)
          .then((resp) => {
             context.commit('setMovies', resp.data)
          })
          .catch((err) => {
            alertaBasica('error', `${err.response.data.message}, status: ${err.response.status}`);
          });
    },
  },
  modules: {
  },
});
