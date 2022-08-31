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
            <form v-on:submit.prevent="CheckUser" method="post" class="m-4 p-3 rounded shadow-lg animate__animated animate__zoomIn animate__delay-1"
                style="background-color: #263238;" novalidate>
                    <p class="fs-2 text-white text-center font-monoton">Restablecimiento de Contraseña</p>
                    <div class="text-center p-3">
                        <div class="input-group mt-4" id="user">
                            <span class="input-group-text">
                                <i class="bi bi-at"></i>
                            </span>
                            <input type='email' class='form-control' placeholder='Ingresa tu Correo' ref='email' aria-labelledby="user" v-model.trim='$v.email.$model' :class="{ 'border': $v.email.$error, 'border-danger': $v.email.$error }">
                        </div>
                        <div :class="{ 'd-none': !$v.email.$error }">
                            <div class="text-danger" v-if="!$v.email.required">
                                ingrese su dirección de correo
                            </div>
                            <div class="text-danger" v-if="!$v.email.email">
                                dirección de correo invalido
                            </div>
                        </div>
                        <div class="input-group mt-4 d-none" id="code">
                            <span class="input-group-text">
                                <i class="bi bi-123"></i>
                            </span>
                            <input type='number' class='form-control' placeholder='Ingresa el Código' ref='code' aria-labelledby="code" v-model.number='$v.code.$model' :class="{ 'border': $v.code.$error, 'border-danger': $v.code.$error }">
                        </div>
                        <div :class="{ 'd-none': !$v.code.$error }">
                            <div class="text-danger" v-if="!$v.code.required">
                                ingrese su código
                            </div>
                            <div class="text-danger" v-if="!$v.code.numeric">
                                el código debe de contener solo números
                            </div>
                        </div>
                        <div class="input-group mt-4 d-none" id="pwd1">
                            <span class="input-group-text">
                                <i class="bi bi-key-fill"></i>
                            </span>
                            <input type='password' class='form-control' placeholder='Contraseña' v-model.trim='$v.pwd1.$model' ref='pwd1' aria-labelledby="pwd1" :class="{ 'border': $v.pwd1.$error, 'border-danger': $v.pwd1.$error }">
                        </div>
                        <div :class="{ 'd-none': !$v.pwd1.$error }">
                            <div class="text-danger" v-if="!$v.pwd1.required">
                                ingrese su contraseña
                            </div>
                            <div class="text-danger" v-if="!$v.pwd1.minLength">
                                la contraseña debe de ser de al menos {{$v.pwd1.$params.minLength.min}} caracteres
                            </div>
                        </div>
                        <div class="input-group mt-4 d-none" id="pwd2">
                            <span class="input-group-text">
                                <i class="bi bi-key-fill"></i>
                            </span>
                            <input type='password' class='form-control' placeholder='Repita la Contraseña' v-model.trim='$v.pwd2.$model' ref='pwd2' aria-labelledby="pwd2" :class="{ 'border': $v.pwd2.$error, 'border-danger': $v.pwd2.$error }">
                        </div>
                        <div :class="{ 'd-none': !$v.pwd2.$error }">
                            <div class="text-danger" v-if="!$v.pwd2.sameAsPwd1">
                                la contraseñas deben de ser identicas
                            </div>
                        </div>
                        <div class="d-grid gap-2 mt-3">
                            <input type='submit' class='btn btn-outline-primary' value='Verificar Correo' id="submit" v-bind="buttonAttr">
                        </div>
                    </div>
                </form>
        </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import { alertaBasica } from '@/assets/js/alerts';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { required, email, sameAs, minLength, numeric } from 'vuelidate/lib/validators'

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default {
    name: 'UserRestoreView',
    created() {
        document.title = 'CMVP Movies Demo - Restore User Password';
    },
    data() {
        return {
            email: '',
            code: '',
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
        email: {
            required,
            email,
        },
        code: {
            required,
            numeric,
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
        async CheckUser(e) {
            e.preventDefault()
            if (!this.email) {
                this.$refs.email.focus();
                alertaBasica('warning', 'Por favor ingresa un emaíl')
                return
            }
            if (!document.getElementById('code').classList.contains('d-none') && !this.code) {
                this.$refs.code.focus();
                alertaBasica('warning', 'Por favor ingresa el código')
                return
            }
            if (!document.getElementById('pwd1').classList.contains('d-none')) {
                if (this.pwd1.length === 0 || this.pwd2.length === 0) {
                    alertaBasica('warning', 'Por favor ingrese una Contraseña')
                    if (this.pwd1.length === 0) this.$refs.pwd1.focus();
                    if (this.pwd2.length === 0) this.$refs.pwd2.focus();
                    return
                }
            }
            try {
                this.vueLoading.isLoading = true;
                const conf = {
                    method: 'POST',
                    url: `${rutaBackend}user`,
                    data: {
                        user: this.email,
                        code: this.code,
                        pwd: this.pwd1,
                        reset_pwd: true,
                    },
                };
                axios(conf)
                    .then((resp) => {
                        this.vueLoading.isLoading = false;
                        /* eslint-disable */
                        // 1ra Comprobación
                        if (document.getElementById('code').classList.contains('d-none') && document.getElementById('pwd1').classList.contains('d-none')) {
                            if (resp.data.auth) {
                                document.getElementById('user').classList.add('animate__animated', 'animate__fadeOut')
                                setTimeout(document.getElementById('user').classList.add('d-none'), 2000)
                                setTimeout(document.getElementById('code').classList.remove('d-none'), 2100)
                                setTimeout(document.getElementById('code').classList.add('animate__animated', 'animate__fadeIn'), 2200)
                                document.getElementById('submit').value = 'Verificar Código'
                            }
                            alertaBasica(resp.data.icon, resp.data.msg);
                        }
                        // 2da Comprobación
                        else if (document.getElementById('pwd1').classList.contains('d-none')) {
                            if (resp.data.auth) {
                                document.getElementById('code').classList.add('animate__animated', 'animate__fadeOut')
                                setTimeout(document.getElementById('code').classList.add('d-none'), 2000)
                                setTimeout(document.getElementById('pwd1').classList.remove('d-none'), 2100)
                                setTimeout(document.getElementById('pwd1').classList.add('animate__animated', 'animate__fadeIn'), 2200)
                                setTimeout(document.getElementById('pwd2').classList.remove('d-none'), 3100)
                                setTimeout(document.getElementById('pwd1').classList.add('animate__animated', 'animate__fadeIn'), 3200)
                                document.getElementById('submit').value = 'Cambiar Contraseña'
                            }
                            alertaBasica(resp.data.icon, resp.data.msg);
                        }
                        // Envió de contraseña
                        else {
                            alertaBasica(resp.data.icon, resp.data.msg);
                            this.$router.push('/');
                        }
                    })
                    .catch((err) => {
                        this.vueLoading.isLoading = false;
                        let msg = err.response.data.msg ? err.response.data.msg : err.response.data.message
                        alertaBasica('error', msg);
                    });
            } catch (error) {
                alertaBasica('error', error)
            }
        },
    },
    computed: {
        buttonAttr() {
            return ((this.$v.email.$error || this.$v.code.$error) || (this.$v.pwd1.$error || this.$v.pwd2.$error)) === true
                ? { disabled: true }
                : { disabled: false }
        },
    },
};
</script>