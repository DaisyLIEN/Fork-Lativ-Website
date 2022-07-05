import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomePage
  },
  {
    path: '/women',
    name: 'women',
    component: () => import('../views/Women.vue')
  },
  {
    path: '/men',
    name: 'men',
    component: () => import('../views/Men.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
