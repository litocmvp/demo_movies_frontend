<template>
  <div class="row justify-content-center">
    <div class="col-6">
        <!-- eslint-disable-next-line max-len -->
        <form v-on:submit.prevent="CheckUser" method="post" class="m-4 p-3 rounded shadow-lg needs-validation animate__animated animate__zoomIn animate__delay-1"
            style="background-color: #263238;" novalidate>
                <p class="fs-2 text-white text-center font-monoton">Restablecimiento de Contraseña</p>
                <div class="text-center p-3">
                    <div class="input-group mt-4" id="user">
                        <span class="input-group-text">
                            <i class="bi bi-at"></i>
                        </span>
                        <!-- eslint-disable-next-line max-len -->
                        <input type='email' class='form-control' placeholder='Ingresa tu Correo' name='user' aria-labelledby="user" v-model='email'>
                        <div class="invalid-feedback">
                            correo invalido
                        </div>
                    </div>
                    <div class="input-group mt-4 d-none" id="code">
                        <span class="input-group-text">
                            <i class="bi bi-123"></i>
                        </span>
                        <!-- eslint-disable-next-line max-len -->
                        <input type='number' class='form-control' placeholder='Ingresa el Código' name='code' aria-labelledby="code" v-model='code'>
                        <div class="invalid-feedback">
                            correo invalido
                        </div>
                    </div>
                    <div class="input-group mt-4 d-none" id="pwd1">
                        <span class="input-group-text">
                            <i class="bi bi-key-fill"></i>
                        </span>
                        <!-- eslint-disable-next-line max-len -->
                        <input type='password' class='form-control' placeholder='Contraseña' v-model='pwd1' name='pwd1' aria-labelledby="pwd1">
                        <div class="invalid-feedback">
                            requiere el password
                        </div>
                    </div>
                    <div class="input-group mt-4 d-none" id="pwd2">
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
                        <!-- eslint-disable-next-line max-len -->
                        <input type='submit' class='btn btn-outline-primary' value='Verificar Correo' id="submit">
                    </div>
                </div>
            </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import alertaBasica from '../functions_js/alerts';

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default {
    data() {
        return {
            email: '',
            code: '',
            pwd1: '',
            pwd2: '',
        }
    },
    methods: {
        async CheckUser(e) {
            e.preventDefault()
            if (!this.email) {
                alertaBasica('warning', 'Por favor ingresa un emaíl')
                return
            }
            if (!document.getElementById('code').classList.contains('d-none') && !this.code) {
                alertaBasica('warning', 'Por favor ingresa el código')
                return
            }
            if (!document.getElementById('pwd1').classList.contains('d-none')) {
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
            }
            try {
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
                        let msg = err.response.data.msg ? err.response.data.msg : err.response.data.message
                        alertaBasica('error', msg);
                    });
            } catch (error) {
                alertaBasica('error', error)
            }
        },
    },
};
</script>