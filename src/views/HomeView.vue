<template>
  <!-- eslint-disable -->
  <div>
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
          <select class="form-select" aria-label="rating" @change="requestAPI($event.target.value)">
            <option selected hidden>- Seleccione -</option>
            <option :value='rating.id' v-for="rating in ratings" :key="rating.id">{{rating.rating}}</option>
          </select>
          <span class="input-group-text"><i class="bi bi-film"></i></span>
        </div>
        <div class="input-group mb-3" v-else-if="searchBy == '2'">
          <select class="form-select" aria-label="gender" @change="requestAPI($event.target.value)">
            <option selected hidden>- Seleccione -</option>
            <option :value='gender.id' v-for="gender in genders" :key="gender.id">{{gender.gender}}</option>
          </select>
          <span class="input-group-text"><i class="bi bi-film"></i></span>
        </div>
        <div class="input-group mb-3" v-else-if="searchBy == '3'">
          <input type="number" class="form-select" aria-label="year" @input="requestAPI($event.target.value)">
          <span class="input-group-text"><i class="bi bi-calendar-date"></i></span>
        </div>
        <div class="input-group mb-3" v-else-if="searchBy == '4'">
          <input type="text" class="form-select text-uppercase" aria-label="title" @input="requestAPI($event.target.value)">
          <span class="input-group-text"><i class="bi bi-input-cursor-text"></i></span>
        </div>
      </div>

    </div>

    <!-- API Response -->
    <div class="border-top row" v-if="results != null">
      <div class="row row-cols-1 row-cols-md-3 g-1 justify-content-center">
        <div class="card mb-3" style="max-width: 540px;" v-for="movie in results" :key="movie.id">
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
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import store from '@/store'
import axios from 'axios';

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default {
  data() {
    return {
      ratings: [],
      genders: [],
      searchBy: '',
      results: null,
    }
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
    async requestAPI(search) {
      if (search != '') {

        const conf = {
          method: 'Post',
          url: `${rutaBackend}cinema/movies`,
          data: {
              key: search,
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
                this.results = resp.data;
            })
            .catch((err) => {
                console.log(err.response);
        });
      } else {
        this.results = null;
      }

    },
  },
  beforeMount() {
    this.allRatings(),
    this.allGenders()
  },
};
</script>
