import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/auth/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
    // meta: { requiresAuth: true },
  },
  {
    path: '/auth/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignupView.vue'),
  },
  {
    path: '/auth/pwd-reset',
    name: 'pwdreset',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pwdreset" */ '../views/PasswordResetView.vue'),
  },
  {
    path: '/movies/features',
    name: 'features',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/FeaturesMoviesView.vue'),
  },
  {
    path: '/movies/add',
    name: 'movies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "movies" */ '../views/MoviesView.vue'),
  },
  {
    path: '**',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFoundView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (store.state.auth !== true) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;
