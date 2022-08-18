<template>
  <!-- eslint-disable -->
  <div>

    <loading :active="vueLoading.isLoading"
            :can-cancel="false"
            :is-full-page="vueLoading.fullPage"
            :loader="vueLoading.loader"
            :transition="vueLoading.transition"
            :color="vueLoading.color"
            :height="vueLoading.height"
            :width="vueLoading.width"
            :background-color="vueLoading.bgColor"
            :opacity="vueLoading.opacity"
            :enforce-focus="true"
            :lock-scroll="true"
            :blur="vueLoading.blur"
      />

    <section class="text-center container">
      <div class="row pt-2">
          <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Peliculas a tu gusto</h1>
              <p class="lead text-muted">En esta demo podrás encontrar peliculas que podrían ser de tu interes, gracias a la retroalimentacion de los usuarios, que navegen por este sitio.</p>
          </div>
      </div>
    </section>
    <div class="row justify-content-center">
      <div class="col-3">
        <div class="input-group mb-3">
          <select class="form-select" aria-label="Default select example"
            @input="event => searchBy = event.target.value">
            <option selected hidden>Buscar por ...</option>
            <option value="1">Buscar por Clasificación</option>
            <option value="2">Buscar por Género</option>
            <option value="3">Buscar por Año de Lanzamiento</option>
            <option value="4">Buscar por Título de la Pelicula</option>
          </select>
          <span class="input-group-text"><i class="bi bi-search"></i></span>
        </div>
      </div>
      <div class="col-3" v-if="searchBy != ''">
        <div class="input-group mb-3" v-if="searchBy == '1'">
          <select class="form-select" aria-label="rating" @change="value = $event.target.value">
            <option selected hidden>- Seleccione -</option>
            <option :value='rating.id' v-for="rating in ratings" :key="rating.id">{{rating.rating}}</option>
          </select>
          <span class="input-group-text" role="button" v-on:click="page = 1; requestAPI()"><i class="bi bi-film"> Buscar</i></span>
        </div>
        <div class="input-group mb-3" v-else-if="searchBy == '2'">
          <select class="form-select" aria-label="gender" @change="value = $event.target.value">
            <option selected hidden>- Seleccione -</option>
            <option :value='gender.id' v-for="gender in genders" :key="gender.id">{{gender.gender}}</option>
          </select>
          <span class="input-group-text" role="button" v-on:click="page = 1; requestAPI()"><i class="bi bi-film"> Buscar</i></span>
        </div>
        <div class="input-group mb-3" v-else-if="searchBy == '3'">
          <input type="number" min="1900" :max="currentYear" class="form-select" aria-label="year" v-model.number='$v.value.$model' :class="{ 'border': $v.value.$error, 'border-danger': $v.value.$error }">
          <span class="input-group-text" role="button" v-on:click="page = 1; requestAPI()"><i class="bi bi-calendar-date"> Buscar</i></span>
        </div>
        <div class="input-group mb-3" v-else-if="searchBy == '4'">
          <input type="text" class="form-select text-uppercase" aria-label="title" @input="value = $event.target.value">
          <span class="input-group-text" role="button" v-on:click="page = 1; requestAPI()"><i class="bi bi-input-cursor-text"> Buscar</i></span>
        </div>

        <div v-if="searchBy == '3'">
          <div class="text-danger" v-if="!$v.value.numeric">
            formato de fecha incorrecta
          </div>
          <div class="text-danger" v-if="!$v.value.between">
              el año de la pelicula debe de ser entre el año {{$v.value.$params.between.min}} y el año {{$v.value.$params.between.max}}
          </div>
        </div>
      </div>

    </div>

    <!-- API Response -->
    <div class="border-top shadow-lg mt-2 pt-3" v-if="results != null">
      <div class="row row-cols-1 row-cols-md-3 g-1 justify-content-center">
        <div class="card mb-3" style="max-width: 540px;" v-for="(movie, index) in results" :key="movie.id">
          <div class="row g-0">
            <div class="col-md-4">
              <a :href="movie.preview" target="_blank"><img :src="movie.picture" class="img-fluid rounded-start" :alt="movie.title"></a>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{movie.title}}</h5>
                <p class="card-text">{{movie.synopsis}}</p>
                <p class="card-text">
                  <small class="text-muted">
                    <i class="bi bi-calendar mx-1"> {{movie.year}}</i> | <i class="bi bi-clock mx-1"> {{movie.duration}}</i>
                  </small>
                </p>
                <p class="card-text">
                  <span class="badge rounded-pill bg-secondary mx-1" v-for="gender in movie.gender" :key="gender.id">{{gender.gender}}</span>
                </p>
                 <p class="card-text text-end">
                  <router-link class="btn btn-outline-dark rounded-pill" :to="'/movie/'+movie.slugify" @click.native="selectedMovie(index)">
                    ver más
                  </router-link>
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Buttons to paginate results -->
      <div class="row d-flex justify-content-between mx-2">
        <div class="col-auto">
          <button type="button" class="btn btn-dark" :class="{'d-none': !btnPreview}" @click="page -= 1; requestAPI()">
            <i class="bi bi-arrow-left-circle"></i>
          </button>
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-dark" :class="{'d-none': !btnNext}" @click="page += 1; requestAPI()">
            <i class="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
/* eslint-disable */
import store from '@/store';
import axios from 'axios';
import slugify from 'slugify';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { requiredIf, between, numeric} from 'vuelidate/lib/validators'
import { alertaBasica } from '@/assets/js/alerts';

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default {
  data() {
    return {
      ratings: [],
      genders: [],
      searchBy: '',
      value: '',
      results: null,
      btnPreview: false,
      btnNext: false,
      page: 1,
      currentYear: new Date().getFullYear(),
      vueLoading: {
        loader: 'bars',
        isLoading: false,
        fullPage: true,
        transition: 'fade',
        color: '#007BFF',
        height: '128',
        width: '128',
        bgColor: '#000',
        opacity: '0.9',
        blur: '2px',
      },
    }
  },
  components: {
        Loading,
  },
  methods: {
    async allRatings() {
      await store.dispatch('getRating');
      if (store.state.ratings) {
          this.ratings = store.state.ratings;
      }
    },
    async allGenders() {
      await store.dispatch('getGender');
      if (store.state.genders) {
          this.genders = store.state.genders;
      }
    },
    async requestAPI() {
      if (this.value != '') {
        this.vueLoading.isLoading = true;
        const conf = {
          method: 'Post',
          url: `${rutaBackend}cinema/movies`,
          data: {
              key: this.value,
              page: this.page,
          },
        }

        // Cambio de clave (key) en la constante objeto "conf" en su clave "conf.data"
        if (this.searchBy == '1') { // rating
          delete Object.assign(conf.data, { ['rating']: conf.data['key'] })['key'];
        } else if (this.searchBy == '2') { // gender
          delete Object.assign(conf.data, { ['gender']: conf.data['key'] })['key'];
        } else if (this.searchBy == '3') { // year
          delete Object.assign(conf.data, { ['year']: conf.data['key'] })['key'];
        } else { // title
          delete Object.assign(conf.data, { ['title']: conf.data['key'] })['key'];
        }

        await axios(conf)
            .then((resp) => {
              this.vueLoading.isLoading = false;
              this.results = resp.data.movies;
              this.btnPreview = resp.data.preview;
              this.btnNext = resp.data.next;
              console.log(resp.data.movies);
              // Slufy title
              if (this.results) {
                for (let i = 0; i < this.results.length; i += 1) {
                  this.results[i].slugify = slugify(this.results[i].title, {remove: /[*+~.()'"!:@]/g});
                }
              }

            })
            .catch((err) => {
              this.vueLoading.isLoading = false;
              this.results = [];
              alertaBasica('error', `${err.response.data.msg}, status: ${err.response.status}`);
        });
      } else {
        this.results = null;
      }

    },
    selectedMovie(id) {
      store.commit('setMovie', this.results[id]);
    },
  },
  validations: {
    value: {
        required: requiredIf(function(){
          return this.searchBy == '3';
        }),
        numeric,
        between: between(1910, new Date().getFullYear())
    },
  },
  beforeMount() {
    this.vueLoading.isLoading = true;
    this.allRatings(),
    this.allGenders()
    this.vueLoading.isLoading = false;
  },
};
</script>
