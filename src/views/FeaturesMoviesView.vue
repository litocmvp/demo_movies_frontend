<template>
    <div>
        <div class="row justify-content-center m-4">
            <div class="d-flex">
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-2"><h3 class="text-muted fst-italic text-cencer">Clasificaciones Cinematográficas</h3></div>
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-2"><i class="bi bi-caret-down-square" v-on:click="hidden('ratingbtn', 'ratingsbox')" role="button" id="ratingbtn" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Minimizar Sección"></i></div>
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-4" data-bs-toggle="modal" data-bs-target="#modalRating"><i class="bi bi-plus-circle" role="button" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Registrar Nueva Clasificación Cinematográfica"></i></div>
            </div>

            <div class="col-12">
                <div class="row row-cols-1 row-cols-md-3 g-1 animate__animated" id="ratingsbox">
                    <!-- eslint-disable-next-line -->
                    <div class="col hvr-grow" v-for="rating in ratings" :key="rating.id" v-scroll-reveal.reset="{ delay: 250 }">
                        <div class="card bg-dark text-white h-100 hovereffect">
                            <!-- eslint-disable-next-line max-len -->
                            <img :src='rating.picture' class="card-img" alt="...">
                            <div class="card-img-overlay transbox">
                                <h5 class="card-title">{{rating.rating}}</h5>
                                <!-- eslint-disable-next-line max-len -->
                                <p class="card-text">{{rating.description}}</p>
                                <div class="overlay">
                                    <!-- eslint-disable max-len -->
                                    <button type="button" class="btn btn-outline-warning mx-3" data-bs-toggle="modal" data-bs-target="#modalModify"
                                        v-on:click="modifyModel('titleLabel', 'Modificación de Clasificación Cinematográfica',
                                        'hiddenId', `rating/${rating.id}`,
                                        'titleID', rating.rating,
                                        'descriptionID', rating.description,
                                        'pictureID', rating.picture)">
                                        <i class="bi bi-input-cursor-text"></i> Modificar
                                    </button>
                                    <button type="button" class="btn btn-outline-danger mx-3"
                                        v-on:click="deleteItem(`rating/${rating.id}`)">
                                        <i class="bi bi-file-earmark-x"></i> Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{updateRatings}}
        </div>

        <div class="row justify-content-center m-4">
            <div class="d-flex">
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-2"><h3 class="text-muted fst-italic text-cencer">Géneros Cinematográficos</h3></div>
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-2"><i class="bi bi-caret-down-square" v-on:click="hidden('genderbtn', 'gendersbox')" role="button" id="genderbtn" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Minimizar Sección"></i></div>
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-4" data-bs-toggle="modal" data-bs-target="#modalGender"><i class="bi bi-plus-circle" role="button" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Registrar Nuevo Género Cinematográfico"></i></div>
            </div>

            <div class="col-12">
                <div class="row row-cols-1 row-cols-md-3 g-1 animate__animated" id="gendersbox">
                    <!-- eslint-disable-next-line max-len -->
                    <div class="col hvr-grow" v-for="gender in genders" :key="gender.id" v-scroll-reveal.reset="{ delay: 250 }">
                        <div class="card bg-dark text-white h-100 hovereffect">
                            <!-- eslint-disable-next-line max-len -->
                            <img :src='gender.picture' class="card-img" alt="...">
                            <div class="card-img-overlay transbox">
                                <h5 class="card-title">{{gender.gender}}</h5>
                                <!-- eslint-disable-next-line max-len -->
                                <p class="card-text">{{gender.description}}</p>
                                <div class="overlay">
                                    <!-- eslint-disable-next-line max-len -->
                                    <button type="button" class="btn btn-outline-warning mx-3" data-bs-toggle="modal" data-bs-target="#modalModify"
                                        v-on:click="modifyModel('titleLabel', 'Modificación de Género Cinematográfico',
                                        'hiddenId', `gender/${gender.id}`,
                                        'titleID', gender.gender,
                                        'descriptionID', gender.description,
                                        'pictureID', gender.picture)">
                                        <i class="bi bi-input-cursor-text"></i> Modificar
                                    </button>
                                    <button type="button" class="btn btn-outline-danger mx-3"
                                        v-on:click="deleteItem(`gender/${gender.id}`)">
                                        <i class="bi bi-file-earmark-x"></i> Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{updateGenders}}
        </div>

        <!-- Modal Componet -->
        <NewBasicFutureMoviesComponetVue modalID="modalRating" titleID="ratingLabel"
            title="Formulario de Registro de Clasificación Cinematográfica"
            inputName="Titulo de la Clasificación" inputNameID="clasificacionID"
            inputDescription="Breve Descripción de la Clasificación" inputDescriptionID="newRatingDescID"
            inputPicture="Dirección web (URL) de la imagen con relación a la clasificación"
            inputPictureID="newRatingPicID" btnClose="closeRating"
            urlBackend="rating">
        </NewBasicFutureMoviesComponetVue>

        <NewBasicFutureMoviesComponetVue modalID="modalGender" titleID="genderLabel"
            title="Formulario de Registro de Genero Cinematográfico"
            inputName="Titulo del Genero" inputNameID="generoID"
            inputDescription="Breve Descripción del Genero" inputDescriptionID="newGenderDescID"
            inputPicture="Dirección web (URL) de la imagen con relación al genero"
            inputPictureID="newGenderPicID" btnClose="closeGender"
            urlBackend="gender">
        </NewBasicFutureMoviesComponetVue>

        <NewBasicFutureMoviesComponetVue modalID="modalModify"
            title="Formulario de Modificación"
            inputName="Titulo"
            inputDescription="Descripción"
            inputPicture="Dirección web (URL) de la imagen"
            btnClose="closeModify"
            btnAction="modify" methodHttp="Put">
        </NewBasicFutureMoviesComponetVue>

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
import NewBasicFutureMoviesComponetVue from '@/components/NewBasicFutureMoviesComponet.vue'

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default {
    name: 'BasicFeatureMovieView',
    components: {
        NewBasicFutureMoviesComponetVue,
    },
    data() {
        return {
            ratings: [],
            genders: [],
        }
    },
    methods: {
        async allRatings() {
            await store.dispatch('getRating');
            if(store.state.ratings) {
                this.ratings = store.state.ratings;
            }
        },
        async allGenders() {
            await store.dispatch('getGender');
            if(store.state.genders) {
                this.genders = store.state.genders;
            }
        },
        hidden(btn, target) {
            return hiddenElement(btn, target)
        },
        modifyModel(titleId, title, hiddenItemId, hiddenItem, nameId, name, descriptionId, description, pictureId, picture) {
            document.getElementById(titleId).innerText = title;
            document.getElementById(hiddenItemId).value = hiddenItem;
            document.getElementById(nameId).value = name;
            document.getElementById(descriptionId).value = description;
            document.getElementById(pictureId).value = picture;

            document.getElementById(hiddenItemId).dispatchEvent(new Event('input'));
            document.getElementById(nameId).dispatchEvent(new Event('input'));
            document.getElementById(descriptionId).dispatchEvent(new Event('input'));
            document.getElementById(pictureId).dispatchEvent(new Event('input'));

        },
        async deleteItem(url) {
            let confirm = await confirmDelete('¿Estas seguro de eliminarlo?');
            if (confirm) {
                const id = url.match(/(\d+)/);
                const conf = {
                    method: 'Delete',
                    url: `${rutaBackend}cinema/${url}`,
                }
                axios(conf)
                    .then((resp) => {
                        alertaBasica(resp.data.icon, resp.data.msg);
                        if (url.includes('rating')) {
                            let ratings = store.state.ratings;
                            bucle:
                            for (let i = 0; i < ratings.length; i += 1) {
                                let obj = ratings[i];
                                for(const [key, value] of Object.entries(obj)){
                                    if (key == 'id' && String(value) == id[0]) {
                                        store.state.ratings.splice(i, 1);
                                        break bucle;
                                    }
                                }
                            }
                        } else {
                            let genders = store.state.genders;
                            bucle:
                            for (let i = 0; i < genders.length; i += 1) {
                                let obj = genders[i];
                                for(const [key, value] of Object.entries(obj)){
                                    if (key == 'id' && String(value) == id[0]) {
                                        store.state.genders.splice(i, 1);
                                        break bucle;
                                    }
                                }
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
        updateRatings: function() {
            this.ratings = store.state.ratings;
        },
        updateGenders: function() {
            this.genders = store.state.genders;
        }
    },
    beforeMount() {
        this.allRatings(),
        this.allGenders()
    },
    beforeUpdate() {
        popover();
    },
}
</script>