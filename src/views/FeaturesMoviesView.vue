<template>
    <div>
        <div class="row justify-content-center m-4">
            <div class="d-flex">
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-2"><h3 class="text-muted fst-italic text-cencer">Clasificaciones Cinematográficas</h3></div>
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-2"><i class="bi bi-caret-down-square" v-on:click="Hidden('ratingbtn', 'ratingsbox')" role="button" id="ratingbtn" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Minimizar Sección"></i></div>
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-4" data-bs-toggle="modal" data-bs-target="#modalRating"><i class="bi bi-plus-circle" role="button" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Registrar Nueva Clasificación Cinematográfica"></i></div>
            </div>

            <div class="col-12">
                <div class="row row-cols-1 row-cols-md-3 g-1 animate__animated" id="ratingsbox">
                    <div class="col" v-for="rating in ratings" :key="rating.id">
                        <div class="card bg-dark text-white h-100">
                            <!-- eslint-disable-next-line max-len -->
                            <img :src='rating.picture' class="card-img" alt="...">
                            <div class="card-img-overlay">
                                <h5 class="card-title">{{rating.rating}}</h5>
                                <!-- eslint-disable-next-line max-len -->
                                <p class="card-text">{{rating.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center m-4">
            <div class="d-flex">
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-2"><h3 class="text-muted fst-italic text-cencer">Géneros Cinematográficos</h3></div>
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-2"><i class="bi bi-caret-down-square" v-on:click="Hidden('genderbtn', 'gendersbox')" role="button" id="genderbtn" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Minimizar Sección"></i></div>
                <!-- eslint-disable-next-line -->
                <div class="d-inline mx-4" data-bs-toggle="modal" data-bs-target="#modalGender"><i class="bi bi-plus-circle" role="button" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Registrar Nuevo Género Cinematográfico"></i></div>
            </div>

            <div class="col-12">
                <div class="row row-cols-1 row-cols-md-3 g-1 animate__animated" id="gendersbox">
                    <div class="col" v-for="gender in genders" :key="gender.id">
                        <div class="card bg-dark text-white h-100">
                            <!-- eslint-disable-next-line max-len -->
                            <img :src='gender.picture' class="card-img" alt="...">
                            <div class="card-img-overlay">
                                <h5 class="card-title">{{gender.gender}}</h5>
                                <!-- eslint-disable-next-line max-len -->
                                <p class="card-text">{{gender.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

    </div>
</template>

<style>

</style>

<script>
/* eslint-disable */
import store from '@/store'
import popover from '@/functions_js/popover'
import hiddenElement from '@/functions_js/hidden_element'
import NewBasicFutureMoviesComponetVue from '@/components/NewBasicFutureMoviesComponet.vue'

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
        Hidden(btn, target) {
            return hiddenElement(btn, target)
        },
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