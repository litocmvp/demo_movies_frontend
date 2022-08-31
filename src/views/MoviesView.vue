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

        <!-- Form -->
        <div class="row justify-content-center m-4">
            <div class="d-flex bg-secondary border-end border-top border-start border-2 rounded-top">
                <div class="d-inline mx-2"><legend class="text-white" id="legendForm">Registro de Películas</legend></div>
                <div class="d-inline mx-2"><i class="bi bi-caret-up-square" v-on:click="hidden('formBtn', 'formBox')" role="button" id="formBtn" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Minimizar Sección"></i></div>
            </div>
            <form class="animate__animated p-2 bg-light border-end border-bottom border-start border-2 rounded-bottom shadow d-none" id="formBox" ref="formBox">
                <div class="mb-3">
                    <div class="input-group">
                        <i class="bi bi-pencil input-group-text"></i>
                        <input class='form-control form-control-sm' ref='title' type='text' placeholder="Título de la película" aria-label="title" v-model.trim='$v.title.$model' :class="{ 'border': $v.title.$error, 'border-danger': $v.title.$error }">
                    </div>
                    <div class="text-danger" v-if="!$v.title.required">
                        ingrese el  Titulo
                    </div>
                </div>
                <div class="mb-3">
                    <div class="input-group">
                        <i class="bi bi-calendar input-group-text">Año</i>
                        <input class='form-control form-control-sm' ref='year' type='number' min="1900" :max="currentYear" aria-label="year" v-model.number='$v.year.$model' :class="{ 'border': $v.year.$error, 'border-danger': $v.year.$error }">
                    </div>
                    <div class="text-danger" v-if="!$v.year.required">
                        ingrese el  año de la pelicula
                    </div>
                    <div class="text-danger" v-if="!$v.year.numeric">
                        formato de fecha incorrecta
                    </div>
                    <div class="text-danger" v-if="!$v.year.between">
                        el año de la pelicula debe de ser entre el año {{$v.year.$params.between.min}} y el año {{$v.year.$params.between.max}}
                    </div>
                </div>
                <div class="mb-3">
                    <div class="input-group">
                        <i class="bi bi-watch input-group-text">Duración</i>
                        <vue-timepicker class='form-control form-control-sm' ref='time' v-model='$v.time.$model' :class="{ 'border': $v.time.$error, 'border-danger': $v.time.$error }"></vue-timepicker>
                    </div>
                    <div class="text-danger" v-if="!$v.time.required">
                        ingrese el tiempo de duración de la película
                    </div>
                    <div class="text-danger" v-if="!$v.time.formatTime">
                        formato de tiempo incorrecto
                    </div>
                </div>
                <div class="mb-3">
                    <div class="input-group">
                        <i class="bi bi-pencil-square input-group-text">Sinopsis</i>
                        <textarea class='form-control form-control-sm' ref="plot" aria-label="plot" cols="30" rows="5" v-model='$v.plot.$model' :class="{ 'border': $v.plot.$error, 'border-danger': $v.plot.$error }"></textarea>
                    </div>
                    <div class="text-danger" v-if="!$v.plot.required">
                        ingrese el resumen de la película
                    </div>
                    <div class="text-danger" v-if="!$v.plot.minLength || !$v.plot.maxLength">
                        el resumen debe de contener entre {{$v.plot.$params.minLength.min}} y {{$v.plot.$params.maxLength.max}} caracteres
                    </div>
                </div>
                <div class="mb-3">
                    <div class="input-group">
                        <i class="bi bi-card-image input-group-text"></i>
                        <input class='form-control form-control-sm' ref='picture' type='text' placeholder="Imagen de Portada (URL)" aria-label="picture" v-model='$v.picture.$model' :class="{ 'border': $v.picture.$error, 'border-danger': $v.picture.$error }">
                    </div>
                    <img :src="srcImage" alt="preview_default" ref="imgPreview" width="200" height="auto">
                    <div class="text-danger" v-if="!$v.picture.required">
                        ingrese la URL de la imagen
                    </div>
                    <div class="text-danger" v-if="!$v.picture.url">
                        formato de la URL incorrecto
                    </div>
                </div>
                <div class="mb-3">
                    <div class="input-group">
                        <i class="bi bi-collection-play input-group-text">Clasificación</i>
                        <select class="form-select" ref='rating' aria-label="rating" v-model='$v.rating.$model' :class="{ 'border': $v.rating.$error, 'border-danger': $v.rating.$error }">
                            <option selected hidden value="">- Seleccione -</option>
                            <option v-for="rating in allRatings" :key="rating.id" :value='rating.id'>{{rating.rating}}</option>
                        </select>
                    </div>
                    <div class="text-danger" v-if="!$v.rating.required">
                        seleccione una clasificación
                    </div>
                </div>
                <div class="mb-3">
                    <div class="input-group">
                        <i class="bi bi-list-check input-group-text">Genero(s)</i>
                        <select class="form-select" ref='gender' aria-label="gender" multiple v-model='$v.genders.$model' :class="{ 'border': $v.genders.$error, 'border-danger': $v.genders.$error }">
                            <option selected hidden value="">- Seleccione -</option>
                            <option v-for="gender in allGenders" :key="gender.id" :value='gender.id'>{{gender.gender}}</option>
                        </select>
                    </div>
                    <div class="text-danger" v-if="!$v.genders.required">
                        seleccione los generos correspondiestes a la película
                    </div>
                </div>
                <div class="d-grid gap-2" id="btnSave">
                    <input type="submit" class="btn btn-outline-success" value="Envíar Datos"  v-on:click.prevent="saveMovie" v-bind="buttonAttr">
                </div>
                <div class="d-grid gap-2 d-none" id="btnUpdate">
                    <input type="submit" class="btn btn-outline-warning" value="Modificar Datos"  v-on:click.prevent="updateMovie" v-bind="buttonAttr">
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

        <!-- Movies by other Users Only visible for admin user -->
        <div class="row justify-content-center m-4" v-if="otherMovies.length > 0">
            <div class="d-flex">
                <div class="d-inline mx-2"><h3 class="text-muted fst-italic text-cencer">Películas de otros Usuarios</h3></div>
                <div class="d-inline mx-2"><i class="bi bi-caret-down-square" v-on:click="hidden('otherMoviesbtn', 'otherMoviesBox')" role="button" id="otherMoviesbtn" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Minimizar Sección"></i></div>
            </div>
            <div class="col-12">
                <div class="row row-cols-1 row-cols-md-3 g-1 animate__animated" id="otherMoviesBox">
                    <!-- eslint-disable-next-line -->
                    <div class="col hvr-grow" v-for="movie in otherMovies" :key="movie.id" v-scroll-reveal>
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
                                        v-on:click="refillForm(movie.id, false)">
                                        <i class="bi bi-input-cursor-text"></i> Modificar
                                    </button>
                                    <button type="button" class="btn btn-outline-danger mx-3"
                                        v-on:click="deleteMovie(movie.id, false)">
                                        <i class="bi bi-file-earmark-x"></i> Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{updateOtherMovies}}
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

@media (min-width: 576px) {
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
}

@media (max-width: 576px) {
    .hovereffect .overlay {
    width:100%;
    height:100%;
    position:absolute;
    overflow:hidden;
    text-align:center;
    top: 40%;
    left:0;
    opacity:0;
    background-color:rgba(0,0,0,0.5);
    -webkit-transition:all .4s ease-in-out;
    transition:all .4s ease-in-out
    }
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { required, minLength, url, maxLength, between, numeric} from 'vuelidate/lib/validators'
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';
import { alertaBasica, confirmDelete } from '@/assets/js/alerts';
import popover from '@/assets/js/popover'
import hiddenElement from '@/assets/js/hidden_element'

const rutaBackend = process.env.VUE_APP_RUTA_API;
const formatTime = (value) => !/\D:\d|\d:\D/.test(value);
const currentYear = new Date().getFullYear();

export default {
    name: 'MoviesView',
    created() {
        document.title = 'CMVP Movies Demo - My Movies CRUD';
    },
    data() {
        return {
            myMovies: [],
            otherMovies: [],
            title: '',
            year: currentYear,
            time: '01:00',
            plot: '',
            picture: '',
            rating: '',
            genders: [],
            allRatings: null,
            allGenders: null,
            idMovie: 0,
            srcPreview: require('@/assets/img/preview.jpg'),
            srcImage: '',
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
            mine: null,
        }
    },
    components: {
        Loading,
        VueTimepicker,
    },
    validations: {
        title: {
            required,
        },
        year: {
            required,
            numeric,
            between: between(1910, new Date().getFullYear())
        },
        time: {
            required,
            formatTime,
        },
        plot: {
            required,
            minLength: minLength(30),
            maxLength: maxLength(600),
        },
        picture: {
            required,
            url,
        },
        rating: {
            required,
        },
        genders: {
            required,
        },
    },
    methods: {
        async allMyMovies() {
            this.vueLoading.isLoading = true;
            await store.dispatch('getMyMovies');
            this.vueLoading.isLoading = false;
            if(store.state.myMovies.length > 0) {
                this.myMovies = store.state.myMovies;
            }
            if(store.state.movies.length > 0) {
                this.otherMovies = store.state.movies;
            }
        },
        hidden(btn, target) {
            return hiddenElement(btn, target)
        },
        async saveMovie() {

            if (!this.title || this.title?.length == 0) {
                alertaBasica('warning', 'Titulo de la película no ingresado')
                this.$refs.title.focus();
                return
            }
            if (!this.year || this.year?.length == 0) {
                alertaBasica('warning', 'Año de la película no ingresado')
                this.$refs.year.focus();
                return
            }
            if (!this.time || this.time?.length == 0) {
                alertaBasica('warning', 'Tiempo de duración de la película no ingresado')
                this.$refs.time.focus();
                return
            }
            if (!this.plot || this.plot?.length == 0) {
                alertaBasica('warning', 'Resumen de la película no ingresado')
                this.$refs.plot.focus();
                return
            }
            if (!this.picture || this.picture?.length == 0) {
                alertaBasica('warning', 'URL de la imagen no ingresada')
                this.$refs.picture.focus();
                return
            }
            if (!this.rating || this.rating?.length == 0) {
                alertaBasica('warning', 'Clasificación de la película no seleccionado')
                this.$refs.rating.focus();
                return
            }
            if (!this.genders || this.genders?.length == 0) {
                alertaBasica('warning', 'Generos de la película no seleccionado(s)')
                this.$refs.genders.focus();
                return
            }

            this.vueLoading.isLoading = true;
            const conf = {
                method: 'Post',
                url: `${rutaBackend}cinema/movie`,
                data: {
                    title: this.title,
                    rating: this.rating,
                    year: this.year,
                    synopsis: this.plot,
                    duration: this.time,
                    gender: this.genders,
                    picture: this.picture,
                },
            }
            axios(conf)
                .then((resp) => {
                    this.vueLoading.isLoading = false;
                    alertaBasica(resp.data.icon, resp.data.msg);
                    store.state.myMovies.push(resp.data.record)
                    this.title = '';
                    this.year = currentYear;
                    this.time = '01:00';
                    this.plot = '';
                    this.picture = '';
                    this.rating = '';
                    this.genders = [];
                    document.getElementById('formBtn').click();
                })
                .catch((err) => {
                    this.vueLoading.isLoading = false;
                    alertaBasica('error', `${err.response.data.msg}, status: ${err.response.status}`);
            });
        },
        refillForm(idMovie, mine = true){
            const formBtn = document.getElementById('formBtn');
            const legend = document.getElementById('legendForm');
            const btnSave = document.getElementById('btnSave');
            const btnUpdate = document.getElementById('btnUpdate');

            legend.innerText = 'Actualización de Datos de la Película';

            if (formBtn.classList.contains('bi-caret-up-square')) { //Verificar si el form esta cerrado
                formBtn.click();
            }

            btnSave.classList.add('d-none');
            btnUpdate.classList.remove('d-none');


            this.mine = mine
            const films = mine ? this.myMovies : this.otherMovies;
            bucle:
            for (let i = 0; i < films.length; i += 1) {
                const obj = films[i];
                if (obj.id == idMovie) {
                    this.idMovie = idMovie;
                    this.title = obj.title;
                    this.year = obj.year;
                    this.time = obj.duration;
                    this.plot = obj.synopsis;
                    this.picture = obj.picture;
                    this.rating = obj.rating;

                    this.genders = [];
                    for (let j = 0; j < obj.gender.length; j += 1) {
                        this.genders.push(obj.gender[j].id);
                    }
                    break bucle;
                }
            }
            this.$refs.formBox.scrollIntoView(false, {
                block: 'start',
                behavior: 'smooth',
            });
        },
        async updateMovie() {
            if (!this.title || this.title?.length == 0) {
                alertaBasica('warning', 'Titulo de la película no ingresado')
                this.$refs.title.focus();
                return
            }
            if (!this.year || this.year?.length == 0) {
                alertaBasica('warning', 'Año de la película no ingresado')
                this.$refs.year.focus();
                return
            }
            if (!this.time || this.time?.length == 0) {
                alertaBasica('warning', 'Tiempo de duración de la película no ingresado')
                this.$refs.time.focus();
                return
            }
            if (!this.plot || this.plot?.length == 0) {
                alertaBasica('warning', 'Resumen de la película no ingresado')
                this.$refs.plot.focus();
                return
            }
            if (!this.picture || this.picture?.length == 0) {
                alertaBasica('warning', 'URL de la imagen no ingresada')
                this.$refs.picture.focus();
                return
            }
            if (!this.rating || this.rating?.length == 0) {
                alertaBasica('warning', 'Clasificación de la película no seleccionado')
                this.$refs.rating.focus();
                return
            }
            if (!this.genders || this.genders?.length == 0) {
                alertaBasica('warning', 'Generos de la película no seleccionado(s)')
                this.$refs.genders.focus();
                return
            }

            this.vueLoading.isLoading = true;
            const conf = {
                method: 'Put',
                url: `${rutaBackend}cinema/movie/${this.idMovie}`,
                data: {
                    title: this.title,
                    rating: this.rating,
                    year: this.year,
                    synopsis: this.plot,
                    duration:this.time,
                    gender: this.genders,
                    picture: this.picture,
                },
            }
            axios(conf)
                .then((resp) => {
                    this.vueLoading.isLoading = false;
                    alertaBasica(resp.data.icon, resp.data.msg);
                    this.title = '';
                    this.year = currentYear;
                    this.time = '01:00';
                    this.plot = '';
                    this.picture = '';
                    this.rating = '';
                    this.genders = [];
                    document.getElementById('formBtn').click();
                    document.getElementById('legendForm').innerText = 'Registro de Películas';
                    document.getElementById('btnSave').classList.remove('d-none');
                    document.getElementById('btnUpdate').classList.add('d-none');

                    const films = this.mine ? this.myMovies : this.otherMovies;
                    bucle:
                    for (let i = 0; i < films.length; i += 1) {
                        const obj = films[i];
                        if (obj.id == this.idMovie) {
                            if (this.mine) {
                                store.state.myMovies[i] = resp.data.record;
                            } else {
                                store.state.movies[i] = resp.data.record;
                            }
                            this.idMovie = 0;
                            this.mine = null;
                            break bucle;
                        }
                    }
                })
                .catch((err) => {
                    this.vueLoading.isLoading = false;
                    alertaBasica('error', `${err.response.data.msg}, status: ${err.response.status}`);
            });
        },
        async deleteMovie(idMovie, mine = true) {
            let confirm = await confirmDelete('¿Estas seguro de eliminarlo?');
            if (confirm) {
                this.vueLoading.isLoading = true;
                const conf = {
                    method: 'Delete',
                    url: `${rutaBackend}cinema/movie/${idMovie}`,
                }
                axios(conf)
                    .then((resp) => {
                        this.vueLoading.isLoading = false;
                        alertaBasica(resp.data.icon, resp.data.msg);

                        const myStore = mine ? store.state.myMovies : store.state.movies;
                        bucle:
                        for (let i = 0; i < myStore.length; i += 1) {
                            if (myStore[i].id == idMovie) {
                                if (mine) {
                                    store.state.myMovies.splice(i, 1);
                                } else {
                                    store.state.movies.splice(i, 1);
                                }
                                break bucle;
                            }
                        }
                    })
                    .catch((err) => {
                        this.vueLoading.isLoading = false;
                        alertaBasica('error', `${err.response.data.msg}, status: ${err.response.status}`);
                });
            }
        },
    },
    computed: {
        updateMyMovies: function() {
             this.myMovies = store.state.myMovies;
        },
        updateOtherMovies: function() {
             this.otherMovies = store.state.movies;
        },
        buttonAttr() {
            return ((((this.$v.title.$error || this.$v.plot.$error) || (this.$v.year.$error || this.$v.time.$error)) || (this.$v.picture.$error || this.$v.rating.$error)) || this.$v.genders.$error) === true
                ? { disabled: true }
                : { disabled: false }
        },
    },
    watch: {
        picture(value) {
            if (value.length == 0) this.srcImage = this.srcPreview;
            else this.srcImage = value;
        }
    },
    beforeMount() {
        this.allRatings = store.state.ratings;
        this.allGenders = store.state.genders;
        this.allMyMovies();
        this.srcImage = this.srcPreview;
    },
    beforeUpdate() {
        popover();
    },
}
</script>