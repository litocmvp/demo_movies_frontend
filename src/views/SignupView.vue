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

        <div class="col-12 col-md-6">
            <form v-on:submit.prevent="newUser" class="m-4 p-3 rounded shadow-lg animate__animated animate__zoomIn animate__delay-1" style="background-color: #584194;" novalidate>

                <p class="fs-2 text-white text-center font-monoton">Registro de Usuario </p>

                <div class="text-center p-3">
                    <div class="input-group mt-4" id="email">
                        <span class="input-group-text">
                            <i class="bi bi-at"></i>
                        </span>
                        <input type='email' class='form-control' placeholder='Correo' v-model.trim='$v.user.$model' ref='user' aria-labelledby="email" :class="{ 'border': $v.user.$error, 'border-danger': $v.user.$error }">
                    </div>
                    <div class="text-danger" v-if="!$v.user.required">
                        ingrese su usuario
                    </div>
                    <div class="text-danger" v-if="!$v.user.email">
                        dirección de correo invalido
                    </div>
                    <div class="input-group mt-4" id="pwd1">
                        <span class="input-group-text">
                            <i class="bi bi-key-fill"></i>
                        </span>
                        <input type='password' class='form-control' placeholder='Contraseña' v-model.trim='$v.pwd1.$model' ref='pwd1' aria-labelledby="pwd1" :class="{ 'border': $v.pwd1.$error, 'border-danger': $v.pwd1.$error }">
                    </div>
                    <div class="text-danger" v-if="!$v.pwd1.required">
                        ingrese su contraseña
                    </div>
                    <div class="text-danger" v-if="!$v.pwd1.minLength">
                        la contraseña debe de ser de al menos {{$v.pwd1.$params.minLength.min}} caracteres
                    </div>
                    <div class="input-group mt-4" id="pwd2">
                        <span class="input-group-text">
                            <i class="bi bi-key-fill"></i>
                        </span>
                        <input type='password' class='form-control' placeholder='Repita la Contraseña' v-model.trim='$v.pwd2.$model' ref='pwd2' aria-labelledby="pwd2" :class="{ 'border': $v.pwd2.$error, 'border-danger': $v.pwd2.$error }">
                    </div>
                    <div class="text-danger" v-if="!$v.pwd2.sameAsPwd1">
                        la contraseñas deben de ser identicas
                    </div>
                    <div class="d-grid gap-2 mt-3">
                        <input type='submit' class='btn btn-outline-primary' value='Registrar Usuario' v-bind="buttonAttr">
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
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'SignUpView',
    created() {
        document.title = 'CMVP Movies Demo - SignUp';
    },
    data() {
        return {
            user: '',
            pwd1: '',
            pwd2: '',
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
        pwd1: {
            required,
            minLength: minLength(6),
        },
        pwd2: {
            sameAsPwd1: sameAs('pwd1'),
        },
    },
    methods: {
        async newUser() {
            if (!this.user) {
                this.$refs.user.focus();
                alertaBasica('warning', 'Por favor ingresa un emaíl')
                return
            }
            if (this.pwd1.length === 0 || this.pwd2.length === 0) {
                if (this.pwd1.length === 0) {
                    this.$refs.pwd1.focus();
                } else {
                    this.$refs.pwd2.focus();
                }
                alertaBasica('warning', 'Por favor ingrese una Contraseña')
                return
            }

            try {
                this.vueLoading.isLoading = true;
                await auth.add_user(this.user, this.pwd1);
                this.$router.push('/auth/login');
            } catch (error) {
                alertaBasica('error', error)
            }
        },
    },
    computed: {
        buttonAttr() {
            return (this.$v.user.$error || (this.$v.pwd1.$error || this.$v.pwd2.$error)) === true
                ? { disabled: true }
                : { disabled: false }
        },
    },
}
</script>