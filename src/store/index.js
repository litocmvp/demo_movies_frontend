import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import { alertaBasica } from '@/assets/js/alerts';

Vue.use(Vuex);

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default new Vuex.Store({
  state: {
    user: 'Anonimo',
    auth: false,
    ratings: [],
    genders: [],
    myMovies: [],
    movie: null,
    movies: [],
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
    setMyMovies(state, payload) {
      state.myMovies = null;
      state.myMovies = payload;
    },
    setMovies(state, payload) {
      state.movies = null;
      state.movies = payload;
    },
    setMovie(state, payload) {
      state.movie = null;
      state.movie = payload;
    },
  },
  actions: {
    async getRating(context) {
      if (this.state.ratings.length === 0) {
        /* eslint-disable */
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
      }

    },
    async getGender(context) {
      if (this.state.genders.length === 0) {
        /* eslint-disable */
        const conf = {
          method: 'GET',
          url: `${rutaBackend}cinema/genders`,
        }
        await axios(conf)
            .then((resp) => {
               context.commit('setGenders', resp.data)
            })
            .catch((err) => {
              alertaBasica('error', `${err.response.data.msg}, status: ${err.response.status}`);
            });
      }
    },
    async getMyMovies(context) {
      if (this.state.myMovies.length === 0) {
        /* eslint-disable */
        const conf = {
          method: 'GET',
          url: `${rutaBackend}cinema/movie`,
        }
        await axios(conf)
            .then((resp) => {
               context.commit('setMyMovies', resp.data.myMovies)
               if (resp.data.otherMovies.length > 0) context.commit('setMovies', resp.data.otherMovies)
            })
            .catch((err) => {
              alertaBasica('error', `${err.response.data.msg}, status: ${err.response.status}`);
            });
      }
    },
  },
  modules: {
  },
});
