import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueScrollReveal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
