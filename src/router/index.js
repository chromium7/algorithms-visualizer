import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('../views/Library.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('../views/Resources.vue')
  },
  {
    path: '/library/merge-sort',
    name: 'MergeSort',
    component: () => import('../views/MergeSort.vue')
  },
  {
    path: '/library/karatsuba',
    name: 'Karatsuba',
    component: () => import('../views/Karatsuba.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
