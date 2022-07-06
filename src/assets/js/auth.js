import axios from 'axios';
import store from '@/store';
import router from '@/router';
import { alertaBasica } from '@/assets/js/alerts';

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default {
    add_user(email, password) {
        const conf = {
            method: 'POST',
            url: `${rutaBackend}user/auth`,
            data: {
                user: String(email),
                password: String(password),
            },
        };
        axios(conf)
            .then((resp) => {
                alertaBasica('success', `Registro exitoso del usuario: ${resp.data.user}`);
            })
            .catch((err) => console.log(err));
    },
    login(email, password) {
        const conf = {
            method: 'GET',
            url: `${rutaBackend}user/auth`,
            headers: {
                Authorization: `Basic ${email}:${password}`,
            },
        }
        axios(conf)
            .then((resp) => {
                // eslint-disable-next-line
                const token = resp.data.token;
                alertaBasica('success', `Acceso exitoso del usuario: ${email}`);
                // eslint-disable-next-line
                store.commit('setLogin', { user: email, token: token });
                router.push('/');
            })
            .catch((err) => {
                alertaBasica('error', `${err.response.data.msg}, status: ${err.response.status}`);
            });
    },
    logout() {
        store.state.user = 'Anonimo';
        store.state.auth = false;
        localStorage.removeItem('access_token');
        delete axios.defaults.headers.common.Authorization
        router.push('/');
    },
}