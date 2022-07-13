<template>
  <div>
    <section class="pt-5 text-center container">
      <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Peliculas a tu gusto</h1>
              <!-- eslint-disable-next-line max-len -->
              <p class="lead text-muted">En esta demo podrás encontrar peliculas que podrían ser de tu interes, gracias a la retroalimentacion de los usuarios, que navegen por este sitio.</p>
              <p>
                <a href="#" class="btn btn-primary m-2">Buscar por Genero</a>
                <a href="#" class="btn btn-secondary m-2">Respuesta JSON</a>
              </p>
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
        <div class="input-group mb-3" v-if="searchBy == '1'">
          <select class="form-select" aria-label="rating">
            <option selected hidden>- Seleccione -</option>
            <option :value='rating.id' v-for="rating in ratings" :key="rating.id">{{rating.rating}}</option>
          </select>
          <span class="input-group-text"><i class="bi bi-film"></i></span>
        </div>
        <div class="input-group mb-3" v-else-if="searchBy == '2'">
          <select class="form-select" aria-label="gender">
            <option selected hidden>- Seleccione -</option>
            <option :value='gender.id' v-for="gender in genders" :key="gender.id">{{gender.gender}}</option>
          </select>
          <span class="input-group-text"><i class="bi bi-film"></i></span>
        </div>
        <div class="input-group mb-3" v-else-if="searchBy == '3'">
          <input type="date" class="form-select" aria-label="year">
          <span class="input-group-text"><i class="bi bi-calendar-date"></i></span>
        </div>
        <div class="input-group mb-3" v-else-if="searchBy == '4'">
          <input type="text" class="form-select text-uppercase" aria-label="title">
          <span class="input-group-text"><i class="bi bi-input-cursor-text"></i></span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
import store from '@/store'

export default {
  data() {
    return {
      ratings: [],
      genders: [],
      searchBy: '',
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
  },
  beforeMount() {
    this.allRatings(),
    this.allGenders()
  },
};
</script>
