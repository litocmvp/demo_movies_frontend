import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal';
import VueYoutube from 'vue-youtube';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueScrollReveal);
Vue.use(VueYoutube);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
