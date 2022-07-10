import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import Portfolio from "../components/Portfolio.vue";

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  }, {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  }
  // {
  //   // path: '/about',
  //   // name: 'about',
  //   // // route level code-splitting
  //   // // this generates a separate chunk (about.[hash].js) for this route
  //   // // which is lazy-loaded when the route is visited.
  //   // component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router