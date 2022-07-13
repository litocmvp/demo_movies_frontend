<template>
   <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div class="container-fluid">
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
                 <!-- eslint-disable-next-line max-len -->
                <router-link class="nav-link" to="/movies/features"><i class="bi bi-gear"> Ajustes</i></router-link>
              </li>
              <li class="nav-item" v-if="this.$store.state.auth">
                 <!-- eslint-disable-next-line max-len -->
                <router-link class="nav-link" to="/movies/add"><i class="bi bi-film"> Registar Películas</i></router-link>
              </li>
            <!--
              <li class="nav-item">
                <router-link class="nav-link" to="/newmovies"> New Movies </router-link>
              </li>
            -->
              <li class="nav-item">
                 <!-- eslint-disable-next-line max-len -->
                <router-link class="nav-link" to="/auth/login" v-if="this.$store.state.user === 'Anonimo'"><i class="bi bi-door-open"> {{msg_userform}}</i></router-link>
                <!-- eslint-disable-next-line -->
                <button class="nav-link btn btn-link" v-else v-on:click="logout"><i class="bi bi-door-closed"> Cerrar Sesión</i></button>
              </li>
              <li class="nav-item">
                <!-- eslint-disable-next-line  -->
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="bi bi-person"> {{this.$store.state.user}}</i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <router-view/>
  </div>
</template>

<script>
import auth from '@/assets/js/auth';

export default {
  data() {
    return {
      username: this.$store.state.user,
      msg_userform: 'Iniciar Sesión',
    }
  },
  methods: {
        logout() {
            try {
                auth.logout();
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>