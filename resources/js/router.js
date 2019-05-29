import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from './pages/Top.vue'
import Skills from './pages/Skills.vue'
import Login from './pages/Login.vue'
import Study from './pages/Study.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Garallery from './pages/Garallery.vue'

import store from './store'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/login',
    component: Login,
    beforeEnter(to, from, next) {
      if(store.getters['auth/check']) {
        next('/');
      } else {
        next()
      }
    }
  },
  {
    path: '/skills',
    component: Skills
  },
  {
    path: '/study',
    component: Study
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/garallery',
    component: Garallery
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
});

export default router;