<template>
   <!-- eslint-disable max-len -->
   <!-- eslint-disable -->
  <div class="container-fluid d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="http://www.cmvp.me" target="_blank">CMVP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/"><i class="bi bi-house"> Inicio</i></router-link>
              </li>
              <li class="nav-item" v-if="this.$store.state.auth">
                <router-link class="nav-link" to="/movies/features"><i class="bi bi-gear"> Ajustes</i></router-link>
              </li>
              <li class="nav-item" v-if="this.$store.state.auth">
                <router-link class="nav-link" to="/my_movies"><i class="bi bi-film"> Registar Películas</i></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about"><i class="bi bi-info-square"> Acerca del Sitio</i></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/auth/login" v-if="this.$store.state.user === 'Anonimo'"><i class="bi bi-door-open"> {{msg_userform}}</i></router-link>
                <button class="nav-link btn btn-link" v-else v-on:click="logout"><i class="bi bi-door-closed"> Cerrar Sesión</i></button>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="bi bi-person"> {{this.$store.state.user}}</i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <router-view/>

    <footer class="mt-auto text-center text-lg-start bg-light text-muted">

      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <img :src="cmvpLogo" alt="cmvp">
        </div>
        <div>
          <a href="https://twitter.com/LitoMario" target="_blank" class="me-4 text-reset">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/cmvp" target="_blank" class="me-4 text-reset">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/litocmvp" target="_blank" class="me-4 text-reset">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://es.stackoverflow.com/users/208955/cmvp" target="_blank" class="me-4 text-reset">
            <i class="bi bi-stack-overflow"></i>
          </a>
        </div>
      </section>

      <div class="container text-center mt-5">
        <div class="row mt-3">
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto">
            <h6 class="text-uppercase fw-bold mb-4">
              <router-link class="text-decoration-none text-reset" to="/">Inicio</router-link>
            </h6>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto">
            <h6 class="text-uppercase fw-bold mb-4">
              <router-link class="text-decoration-none text-reset" to="/about">Acerca del Sitio</router-link>
            </h6>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto">
            <h6 class="text-uppercase fw-bold mb-4">
              <a href="https://www.cmvp.me/contacto" target="_blank" class="text-decoration-none text-reset">Contacto</a>
            </h6>
          </div>
        </div>
      </div>

      <div class="container text-center mt-4 mb-4">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6 mx-auto mb-2">
            <a href="https://github.com/litocmvp/demo_movies_backend" target="_blank" class="pb-2 text-decoration-none hvr-underline-from-left text-muted font-monospace">
              <i class="bi bi-code"></i>
              <i class="bi bi-filetype-py"></i> Código del Proyecto Backend
            </a>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6 mx-auto mb-2">
            <a href="https://github.com/litocmvp/demo_movies_frontend" target="_blank" class="pb-2 text-decoration-none hvr-underline-from-left text-muted font-monospace">
              <i class="bi bi-code"></i>
              <i class="bi bi-filetype-js"></i> Código del Proyecto Frontend
            </a>
          </div>
        </div>
      </div>

      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2022 Todos los derechos reservados por:
        <a class="text-reset fw-bold" href="https://www.cmvp.me" target="_blank">cmvp.me</a>
      </div>

    </footer>

  </div>
</template>

<style>
@import '@/assets/styles/hover-min.css';
</style>

<script>
/* eslint-disable */
import auth from '@/assets/js/auth';

export default {
  data() {
    return {
      username: this.$store.state.user,
      msg_userform: 'Iniciar Sesión',
      cmvpLogo: require('@/assets/img/logo_cmvp.png'),
    }
  },
  methods: {
        logout() {
            try {
                auth.logout();
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>