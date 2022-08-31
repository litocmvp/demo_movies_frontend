<template>
    <!-- eslint-disable -->
    <div>
        {{movieStore}}
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
        <div class="row mt-4 p-3 d-none d-sm-block">
            <div class="col-12">
                <div class="card">
                    <youtube class="card-img" :video-id="preview" ref="youtube" :player-vars="playerVars" @playing="playing" v-if="preview != ''"></youtube>
                    <div class="row card-img-overlay">
                        <div class="col-4 align-self-md-center">
                            <img :src="picture" class="img-thumbnail" :alt="title">
                        </div>
                        <div class="col-8 text-white">
                            <div><h2>{{title}}</h2></div>
                            <p>{{plot}}</p>
                            <i class="bi bi-calendar mx-1"> {{year}}</i> | <i class="bi bi-clock mx-1"> {{time}}</i> | <i class="bi bi-person-video3 mx-1"> Clasificación {{rating}}</i> |
                            <span class="badge rounded-pill bg-secondary mx-1" v-for="gender in genders" :key="gender">{{gender}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4 p-3 d-block d-sm-none">
            <div class="col-12">
                <img :src="picture" class="img-thumbnail" :alt="title">
            </div>
            <div class="col-12">
                <div class="text-center"><h2>{{title}}</h2></div>
                <p>{{plot}}</p>
                <div>
                    <i class="bi bi-calendar mx-1"> {{year}}</i> | <i class="bi bi-clock mx-1"> {{time}}</i> | <i class="bi bi-person-video3 mx-1"> Clasificación {{rating}}</i> |
                    <span class="badge rounded-pill bg-secondary mx-1" v-for="gender in genders" :key="gender">{{gender}}</span>
                </div>
            </div>
        </div>

        <div class="row mt-4 p-3 g-1">
            <hr>
            <h4>Pictografías Relacionadas</h4>
            <div class="col-auto" v-for="item in request_image" :key="item">
                <img :src="item.src" class="rounded img-fluid" :alt="item.alt">
            </div>
        </div>

        <div class="row mt-4 p-3 g-2">
            <hr>
            <h4>Videografías Relacionadas</h4>
            <div class="col-auto"  v-for="film in request_video" :key="film">
                <iframe width="640" height="auto" :src="film" class="d-block w-100" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="row mt-4 p-3 g-2">
            <hr>
            <h4>Enlaces Relacionados</h4>
            <div class="col-auto" v-for="item in request_text" :key="item">
                <a :href="item.link" target="_blank" class="text-decoration-none border rounded-pill p-1 hvr-underline-from-left">{{item.title}}</a>
            </div>
        </div>

    </div>
</template>

<style>
@import '@/assets/styles/hover-min.css';

</style>

<script>
/* eslint-disable */
import store from '@/store'
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

const keyRapidAPI = process.env.VUE_APP_KEY_RAPIDAPI;

export default {
    name: 'MovieView',
    created() {
        document.title = `CMVP Movies Demo - Movie: ${store.state.movie.title}`;
    },
    data() {
        return {
            film: '',
            title: '',
            picture: '',
            preview: '',
            year: '',
            time: '',
            plot: '',
            genders: [],
            rating: '',
            request_text: null,
            request_image: null,
            request_video: null,
            playerVars: {
                // Si el video debe iniciarse automaticamente
                autoplay: 1,
                // Con este indicamos si queremos reproducir en bucle el video/lista de reproducción
                loop: 1,
                // Este paráetro nos permite mostrar/ocultar el logotipo de youtube en el reproductor
                modestbranding: 1,
                // Este parámetro nos sirve para indicar si querémos que el reproductor muestre
                // videos relacionados
                rel: 0,
                // Este parámetro se usa para mostrar u ocultar info sobre la lista o el usuarios
                showinfo: 0,
                // Este parámetro indica si se muestran o no los controles del reproductor de video
                controls: 0,
                disablekb: 1,
                playlist: '',
            },
            vueLoading: {
                loader: 'bars',
                isLoading: true,
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
        Loading
    },
    methods: {
        async requestAPI() {
            let cont = 3;
            const type = ['video', 'image', 'search'];
            const arg = ['+trailer', '+scenes+wallpaper', '&num=30'];

            while(cont>0){
                const conf = {
                    method: 'Get',
                    url: `https://google-search3.p.rapidapi.com/api/v1/${type[(cont)-1]}/q=${this.title.replace(' ','+')}${arg[(cont)-1]}`,
                    headers: {
                        'X-User-Agent': 'desktop',
                        'X-Proxy-Location': 'MX',
                        'X-RapidAPI-Key': keyRapidAPI,
                        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
                    },
                }
                await axios(conf)
                    .then((resp) => {
                        if (cont == 3) {this.request_text = resp.data.results;}
                        if (cont == 2) {
                            this.request_image = [];
                            for(let i = 0; i < resp.data.image_results.length; i += 1) {
                                const item = resp.data.image_results[i];
                                this.request_image.push(item.image);
                            }
                        }
                        if (cont == 1) {
                            this.request_video = [];
                            for(let i = 0; i < resp.data.results.length; i += 1) {
                                const item = resp.data.results[i];
                                if (item.link.includes('https://www.youtube.com/watch?v=')) {
                                    if (i > 0) { this.request_video.push(item.link.replace('/watch?v=', '/embed/')); }
                                    else {
                                        const index = 'https://www.youtube.com/watch?v='.length;
                                        this.preview = item.link.slice(index);
                                        this.playerVars.playlist = this.preview;
                                    }
                                }
                            }
                            setTimeout(() => { this.vueLoading.isLoading = false; }, 10000);
                        }

                    })
                    .catch((err) => {
                        console.error(err);
                });

                cont -= 1;
            }
        },
        playing() {
            this.player.playVideo();
            this.player.mute();
        },
    },
    computed: {
        movieStore() {
            this.vueLoading.isLoading = true;
            this.film = store.state.movie;
            this.title = this.film.title;
            this.year = this.film.year;
            this.picture = this.film.picture;
            this.time = this.film.duration;
            this.plot = this.film.synopsis;
            this.title = this.film.title;

            this.genders = [];
            for(let i = 0; i < this.film.gender.length; i += 1) {
                this.genders.push(this.film.gender[i].gender);
            }

            for(let i = 0; i < store.state.ratings.length; i += 1) {
                if(store.state.ratings[i].id == this.film.rating) {
                    this.rating = store.state.ratings[i].rating;
                }
            }

            this.requestAPI();
        },
        player() {
            return this.$refs.youtube.player
        }
    },
}
</script>