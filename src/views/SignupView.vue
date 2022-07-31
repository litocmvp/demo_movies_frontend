<template>
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
            <!-- eslint-disable-next-line max-len -->
            <form v-on:submit.prevent="newUser" class="m-4 p-3 rounded shadow-lg needs-validation animate__animated animate__zoomIn animate__delay-1" style="background-color: #584194;" novalidate>

                <p class="fs-2 text-white text-center font-monoton">Registro de Usuario </p>

                <div class="text-center p-3">
                    <div class="input-group mt-4" id="email">
                        <span class="input-group-text">
                            <i class="bi bi-at"></i>
                        </span>
                        <!-- eslint-disable-next-line max-len -->
                        <input type='email' class='form-control' placeholder='Correo' v-model='user' name='user' aria-labelledby="email">

                        <div class="invalid-feedback">
                            correo invalido
                        </div>
                    </div>
                    <div class="input-group mt-4" id="pwd1">
                        <span class="input-group-text">
                            <i class="bi bi-key-fill"></i>
                        </span>
                        <!-- eslint-disable-next-line max-len -->
                        <input type='password' class='form-control' placeholder='Contraseña' v-model='pwd1' name='pwd1' aria-labelledby="pwd1">
                        <div class="invalid-feedback">
                            requiere el password
                        </div>
                    </div>
                    <div class="input-group mt-4" id="pwd2">
                        <span class="input-group-text">
                            <i class="bi bi-key-fill"></i>
                        </span>
                        <!-- eslint-disable-next-line max-len -->
                        <input type='password' class='form-control' placeholder='Repita la Contraseña' v-model='pwd2' name='pwd2' aria-labelledby="pwd2">
                        <div class="invalid-feedback">
                            requiere el password
                        </div>
                    </div>
                    <div class="d-grid gap-2 mt-3">
                        <input type='submit' class='btn btn-outline-primary' value='Registrar Usuario'>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line
import auth from '@/assets/js/auth';
import { alertaBasica } from '@/assets/js/alerts';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
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
    methods: {
        async newUser() {
            if (!this.user) {
                alertaBasica('warning', 'Por favor ingresa un emaíl')
                return
            }
            if (this.pwd1.length === 0 || this.pwd2.length === 0) {
                alertaBasica('warning', 'Por favor ingrese una Contraseña')
                return
            }
            if (this.pwd1.length < 6 || this.pwd2.length < 6) {
                alertaBasica('info', 'La Contraseña debe de tener al menos 6 carateres')
                return
            }
            if (this.pwd1 !== this.pwd2) {
                alertaBasica('info', 'Contraseñas no iguales')
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
}
</script>