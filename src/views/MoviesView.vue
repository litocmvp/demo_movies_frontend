<template>
    <!-- eslint-disable -->
    <div>
        <!-- Form -->
        <div class="row justify-content-center m-4">
            <div class="d-flex bg-secondary border-end border-top border-start border-2 rounded-top">
                <div class="d-inline mx-2"><legend class="text-white" id="legendForm">Registro de Películas</legend></div>
                <div class="d-inline mx-2"><i class="bi bi-caret-up-square" v-on:click="hidden('formBtn', 'formBox')" role="button" id="formBtn" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Minimizar Sección"></i></div>
            </div>
            <form class="animate__animated p-2 bg-light border-end border-bottom border-start border-2 rounded-bottom shadow d-none" id="formBox">
                <div class="input-group mb-3">
                    <i class="bi bi-pencil input-group-text"></i>
                    <input class='form-control form-control-sm' name='title' type='text' placeholder="Título de la película" aria-label="title" v-model='title'>
                </div>
                <div class="input-group mb-3">
                    <i class="bi bi-calendar input-group-text">Año</i>
                    <input class='form-control form-control-sm' name='year' type='number' min="1900" max="2023" aria-label="year" v-model='year'>
                </div>
                <div class="input-group mb-3">
                    <i class="bi bi-watch input-group-text">Duración</i>
                    <input class='form-control form-control-sm' name='time' type='number' step=".01" aria-label="time" v-model='time'>
                </div>
                <div class="input-group mb-3">
                    <i class="bi bi-pencil-square input-group-text">Sinopsis</i>
                    <textarea class='form-control form-control-sm' name="plot" aria-label="plot" cols="30" rows="5" v-model='plot'></textarea>
                </div>
                <div class="input-group mb-3">
                    <i class="bi bi-card-image input-group-text"></i>
                    <input class='form-control form-control-sm' name='picture' type='text' placeholder="Imagen de Portada (URL)" aria-label="picture" v-model='picture'>
                </div>
                <div class="input-group mb-3">
                    <i class="bi bi-youtube input-group-text"></i>
                    <input class='form-control form-control-sm' name='preview' type='text' placeholder="Video de Vista Previa (URL)" aria-label="preview" v-model='preview'>
                </div>
                <div class="input-group mb-3">
                    <i class="bi bi-collection-play input-group-text">Clasificación</i>
                    <select class="form-select" name='rating' aria-label="rating" v-model='rating'>
                        <option selected hidden value="">- Seleccione -</option>
                        <option v-for="rating in allRatings" :key="rating.id" :value='rating.id'>{{rating.rating}}</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <i class="bi bi-list-check input-group-text">Genero(s)</i>
                    <select class="form-select" name='gender' aria-label="gender" multiple v-model='genders'>
                        <option selected hidden value="">- Seleccione -</option>
                        <option v-for="gender in allGenders" :key="gender.id" :value='gender.id'>{{gender.gender}}</option>
                    </select>
                </div>
                <div class="d-grid gap-2" id="btnSave">
                    <input type="submit" class="btn btn-outline-success" value="Envíar Datos"  v-on:click.prevent="saveMovie">
                </div>
                <div class="d-grid gap-2 d-none" id="btnUpdate">
                    <input type="submit" class="btn btn-outline-warning" value="Modificar Datos"  v-on:click.prevent="updateMovie">
                </div>
            </form>
        </div>

        <!-- My Movies -->
        <div class="row justify-content-center m-4">
            <div class="d-flex">
                <div class="d-inline mx-2"><h3 class="text-muted fst-italic text-cencer">Tus Películas Registradas</h3></div>
                <div class="d-inline mx-2"><i class="bi bi-caret-down-square" v-on:click="hidden('myMoviesbtn', 'myMoviesBox')" role="button" id="myMoviesbtn" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Minimizar Sección"></i></div>
            </div>
            <div class="col-12">
                <div class="row row-cols-1 row-cols-md-3 g-1 animate__animated" id="myMoviesBox">
                    <!-- eslint-disable-next-line -->
                    <div class="col hvr-grow" v-for="movie in myMovies" :key="movie.id" v-scroll-reveal>
                        <div class="card bg-dark text-white h-100 hovereffect">
                            <!-- eslint-disable-next-line max-len -->
                            <img :src='movie.picture' class="card-img" alt="...">
                            <div class="card-img-overlay transbox">
                                <h5 class="card-title">{{movie.title}}</h5>
                                <!-- eslint-disable-next-line max-len -->
                                <p class="card-text text-truncate">{{movie.synopsis}}</p>
                                <div class="mb-1">
                                    <i class="bi bi-calendar mx-1"> {{movie.year}}</i> | <i class="bi bi-clock mx-1"> {{movie.duration}}</i>
                                </div>
                                <span class="badge rounded-pill bg-secondary mx-1" v-for="gender in movie.gender" :key="gender.id">{{gender.gender}}</span>
                                <div class="overlay">
                                    <!-- eslint-disable max-len -->
                                    <button type="button" class="btn btn-outline-warning mx-3"
                                        v-on:click="refillForm(movie.id)">
                                        <i class="bi bi-input-cursor-text"></i> Modificar
                                    </button>
                                    <button type="button" class="btn btn-outline-danger mx-3"
                                        v-on:click="deleteMovie(movie.id)">
                                        <i class="bi bi-file-earmark-x"></i> Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{updateMyMovies}}
        </div>

    </div>
</template>

<style>
@import '@/assets/styles/hover-min.css';

div.transbox {
  background-color: #000;
  border: 1px none black;
  opacity: 0.6;
  color: #ffffff;
}

.hovereffect {
width:100%;
height:100%;
float:left;
overflow:hidden;
position:relative;
cursor:default;
}

.hovereffect .overlay {
width:100%;
height:100%;
position:absolute;
overflow:hidden;
text-align:center;
top: 80%;
left:0;
opacity:0;
background-color:rgba(0,0,0,0.5);
-webkit-transition:all .4s ease-in-out;
transition:all .4s ease-in-out
}

.hovereffect img {
display:block;
position:relative;
-webkit-transition:all .4s linear;
transition:all .4s linear;
}

.hovereffect:hover img {
-ms-transform:scale(1.2);
-webkit-transform:scale(1.2);
transform:scale(1.2);
}

.hovereffect:hover .overlay {
opacity:1;
filter:alpha(opacity=100);
}

</style>

<script>
/* eslint-disable */
import store from '@/store'
import axios from 'axios';
import { alertaBasica, confirmDelete } from '@/assets/js/alerts';
import popover from '@/assets/js/popover'
import hiddenElement from '@/assets/js/hidden_element'

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default {
    data() {
        return {
            myMovies: [],
            title: '',
            year: 0,
            time: 0,
            plot: '',
            picture: '',
            preview: '',
            rating: '',
            genders: [],
            allRatings: null,
            allGenders: null,
            idMovie: 0,
        }
    },
    methods: {
        async allMyMovies() {
            await store.dispatch('getMyMovies');
            if(store.state.myMovies.length > 0) {
                this.myMovies = store.state.myMovies;
            }
        },
        hidden(btn, target) {
            return hiddenElement(btn, target)
        },
        async saveMovie() {
            const conf = {
                method: 'Post',
                url: `${rutaBackend}cinema/movie`,
                data: {
                    title: this.title,
                    rating: this.rating,
                    year: this.year,
                    synopsis: this.plot,
                    duration: String(this.time).replace('.', ':'),
                    gender: this.genders,
                    picture: this.picture,
                    preview: this.preview,
                },
            }
            axios(conf)
                .then((resp) => {
                    alertaBasica(resp.data.icon, resp.data.msg);
                    store.state.myMovies.push(resp.data.record)
                    this.title = '';
                    this.year = 0;
                    this.time = 0;
                    this.plot = '';
                    this.picture = '';
                    this.preview = '';
                    this.rating = '';
                    this.genders = [];
                    document.getElementById('formBtn').click();
                })
                .catch((err) => {
                    alertaBasica('error', `${err.response.data.message}, status: ${err.response.status}`);
            });
        },
        refillForm(idMovie){
            const formBtn = document.getElementById('formBtn');
            const legend = document.getElementById('legendForm');
            const btnSave = document.getElementById('btnSave');
            const btnUpdate = document.getElementById('btnUpdate');

            legend.innerText = 'Actualización de Datos de la Película';

            if (formBtn.classList.contains('bi-caret-up-square')) { //Verificar si el form esta cerrado
                formBtn.click();
            }

            if (btnSave.classList.contains('d-none')) { // Comprobar si el btn de salvar datos aun es visible
                btnSave.classList.remove('d-none');
                btnUpdate.classList.add('d-none');
            } else {
                btnSave.classList.add('d-none');
                btnUpdate.classList.remove('d-none');
            }

            bucle:
            for (let i = 0; i < this.myMovies.length; i += 1) {
                let obj = this.myMovies[i];
                if (obj.id == idMovie) {
                    this.idMovie = idMovie;
                    this.title = obj.title;
                    this.year = obj.year;
                    this.time = parseFloat(obj.duration.replace(':', '.'));
                    this.plot = obj.synopsis;
                    this.picture = obj.picture;
                    this.preview = obj.preview;
                    this.rating = obj.rating;

                    for (let j = 0; j < obj.gender.length; j += 1) {
                        this.genders.push(obj.gender[j].id);
                    }
                    break bucle;
                }
            }
        },
        async updateMovie() {
            const conf = {
                method: 'Put',
                url: `${rutaBackend}cinema/movie/${this.idMovie}`,
                data: {
                    title: this.title,
                    rating: this.rating,
                    year: this.year,
                    synopsis: this.plot,
                    duration: String(this.time).replace('.', ':'),
                    gender: this.genders,
                    picture: this.picture,
                    preview: this.preview,
                },
            }
            axios(conf)
                .then((resp) => {
                    alertaBasica(resp.data.icon, resp.data.msg);
                    this.title = '';
                    this.year = 0;
                    this.time = 0;
                    this.plot = '';
                    this.picture = '';
                    this.preview = '';
                    this.rating = '';
                    this.genders = [];
                    document.getElementById('formBtn').click();
                    document.getElementById('legendForm').innerText = 'Registro de Películas';
                    document.getElementById('btnSave').classList.remove('d-none');
                    document.getElementById('btnUpdate').classList.add('d-none');

                    bucle:
                    for (let i = 0; i < store.state.myMovies.length; i += 1) {
                        let obj = store.state.myMovies[i];
                        if (obj.id == this.idMovie) {
                            store.state.myMovies[i] = resp.data.record;
                            this.idMovie = 0;
                            break bucle;
                        }
                    }
                })
                .catch((err) => {
                    alertaBasica('error', `${err.response.data.message}, status: ${err.response.status}`);
            });
        },
        async deleteMovie(idMovie) {
            let confirm = await confirmDelete('¿Estas seguro de eliminarlo?');
            if (confirm) {
                const conf = {
                    method: 'Delete',
                    url: `${rutaBackend}cinema/movie/${idMovie}`,
                }
                axios(conf)
                    .then((resp) => {
                        alertaBasica(resp.data.icon, resp.data.msg);
                        let myStore = store.state.myMovies;
                        bucle:
                        for (let i = 0; i < myStore.length; i += 1) {
                            if (myStore[i].id == idMovie) {
                                store.state.myMovies.splice(i, 1);
                                break bucle;
                            }
                        }
                    })
                    .catch((err) => {
                        alertaBasica('error', `${err.response.data.message}, status: ${err.response.status}`);
                });
            }
        },
    },
    computed: {
        updateMyMovies: function() {
             this.myMovies = store.state.myMovies;
        }
    },
    beforeMount() {
        this.allRatings = store.state.ratings,
        this.allGenders = store.state.genders,
        this.allMyMovies()
    },
    beforeUpdate() {
        popover();
    },
}
</script>