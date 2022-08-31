import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal';
import VueYoutube from 'vue-youtube';
import Vuelidate from 'vuelidate';
import VueWindowSize from 'vue-window-size';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueScrollReveal);
Vue.use(VueYoutube);
Vue.use(Vuelidate);
Vue.use(VueWindowSize);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
