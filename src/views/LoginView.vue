<template>
    <!-- eslint-disable max-len -->
    <div class="row justify-content-center">

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

        <div class="col-6">
            <form v-on:submit.prevent="loginUser"
                class="form-group m-4 p-3 rounded shadow-lg animate__animated animate__zoomIn animate__delay-1"
                style="background-color: #263238;">
                <img class="img-fluid rounded mx-auto d-block mt-3" src="" width="90" alt="">
                <p class="fs-2 text-white text-center font-monoton">Cartelera CMVP</p>

                <div class="text-center p-3">
                    <div class="input-group mt-4" id="user">
                        <span class="input-group-text">
                            <i class="bi bi-at"></i>
                        </span>
                        <input type='email' class='form-control' placeholder='Correo' ref='user' aria-labelledby="user" v-model.trim='$v.user.$model' :class="{ 'border': $v.user.$error, 'border-danger': $v.user.$error }">
                    </div>
                    <div class="text-danger" v-if="!$v.user.required">
                        ingrese su usuario
                    </div>
                    <div class="text-danger" v-if="!$v.user.email">
                        dirección de correo invalido
                    </div>
                    <div class="input-group mt-4" id="pwd">
                        <span class="input-group-text">
                            <i class="bi bi-key-fill"></i>
                        </span>
                        <input type='password' class='form-control' placeholder='Contraseña' ref='pwd' aria-labelledby="pwd" v-model.trim='$v.pwd.$model' :class="{ 'border': $v.pwd.$error, 'border-danger': $v.pwd.$error }">
                    </div>
                    <div class="text-danger" v-if="!$v.pwd.required">
                        ingrese su contraseña
                    </div>
                    <div class="d-grid gap-2 mt-3">
                        <input type='submit' class='btn btn-outline-primary'
                        value='Verificar Datos' v-bind="buttonAttr">
                    </div>
                    <div class="mt-4">
                        <div class="d-flex justify-content-center links text-white">
                            ¿No tienes una cuenta?
                            <router-link class="mx-1 text-decoration-none" to="/auth/signup"> Registrate </router-link>
                        </div>
                        <div class="d-flex justify-content-center links">
                            <router-link class="mx-1 text-decoration-none" to="/auth/pwd-reset"> ¿Olvidaste tu contraseña? </router-link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import auth from '@/assets/js/auth';
import { alertaBasica } from '@/assets/js/alerts';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { required, email } from 'vuelidate/lib/validators'

export default {
    name: 'LoginView',
    created() {
        document.title = 'CMVP Movies Demo - LogIn';
    },
    data() {
        return {
            user: '',
            pwd: '',
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
    validations: {
        user: {
            required,
            email,
        },
        pwd: {
            required,
        },
    },
    methods: {
        async loginUser(e) {
            e.preventDefault()
            if (!this.user) {
                this.$refs.user.focus();
                alertaBasica('warning', 'Por favor ingresa un emaíl')
                return
            }
            if (this.pwd.length === 0) {
                this.$refs.pwd.focus();
                alertaBasica('warning', 'Por favor ingrese una Contraseña')
                return
            }

            try {
                this.vueLoading.isLoading = true;
                await auth.login(this.user, this.pwd);
                this.vueLoading.isLoading = false;
            } catch (error) {
                alertaBasica('error', error)
            }
        },
    },
    computed: {
        buttonAttr() {
            return (this.$v.user.$error || this.$v.pwd.$error) === true
                ? { disabled: true }
                : { disabled: false }
        },
    },
}
</script>