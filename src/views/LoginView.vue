<template>
    <div class="row justify-content-center">
        <div class="col-6">
            <!-- eslint-disable-next-line max-len -->
            <form v-on:submit.prevent="loginUser" method="post" class="m-4 p-3 rounded shadow-lg needs-validation animate__animated animate__zoomIn animate__delay-1"
            style="background-color: #263238;" novalidate>
                <img class="img-fluid rounded mx-auto d-block mt-3" src="" width="90" alt="">
                <p class="fs-2 text-white text-center font-monoton">Cartelera CMVP</p>

                <div class="text-center p-3">
                    <div class="input-group mt-4" id="user">
                        <span class="input-group-text">
                            <i class="bi bi-at"></i>
                        </span>
                        <!-- eslint-disable-next-line max-len -->
                        <input type='email' class='form-control' placeholder='Correo' name='user' aria-labelledby="user" v-model='user'>
                        <div class="invalid-feedback">
                            correo invalido
                        </div>
                    </div>
                    <div class="input-group mt-4" id="pwd">
                        <span class="input-group-text">
                            <i class="bi bi-key-fill"></i>
                        </span>
                        <!-- eslint-disable-next-line max-len -->
                        <input type='password' class='form-control' placeholder='Contraseña' name='pwd1' aria-labelledby="pwd" v-model='pwd'>
                        <div class="invalid-feedback">
                            requiere el password
                        </div>
                    </div>
                    <div class="d-grid gap-2 mt-3">
                        <input type='submit' class='btn btn-outline-primary'
                        value='Verificar Datos'>
                    </div>
                    <div class="mt-4">
                        <div class="d-flex justify-content-center links text-white">
                            ¿No tienes una cuenta?
                            <!-- eslint-disable-next-line max-len -->
                            <router-link class="mx-1 text-decoration-none" to="/auth/signup"> Registrate </router-link>
                        </div>
                        <div class="d-flex justify-content-center links">
                            <!-- eslint-disable-next-line max-len -->
                            <router-link class="mx-1 text-decoration-none" to="/auth/pwd-reset"> ¿Olvidaste tu contraseña? </router-link>
                        </div>
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

export default {
    data() {
        return {
            user: '',
            pwd: '',
        }
    },
    methods: {
        async loginUser(e) {
            e.preventDefault()
            if (!this.user) {
                alertaBasica('warning', 'Por favor ingresa un emaíl')
                return
            }
            if (this.pwd.length === 0) {
                alertaBasica('warning', 'Por favor ingrese una Contraseña')
                return
            }

            try {
                await auth.login(this.user, this.pwd);
            } catch (error) {
                alertaBasica('error', error)
            }
        },
    },
}
</script>