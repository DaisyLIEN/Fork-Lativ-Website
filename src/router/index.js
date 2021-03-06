import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/women',
    name: 'women',
    component: () => import('../views/Women.vue'),
    children: [
      {
        path: 'tops',
        name: 'women-tops',
        component: () => import('../views/WomenTops.vue')
      },
      {
        path: 'shirts',
        name: 'women-shirts',
        component: () => import('../views/WomenShirts.vue')
      },
      {
        path: 'outerwear',
        name: 'women-outerwear',
        component: () => import('../views/WomenOuterwear.vue')
      }
    ]
  },
  {
    path: '/men',
    name: 'men',
    component: () => import('../views/Men.vue'),
    children: [
      {
        path: 'tops',
        name: 'men-tops',
        component: () => import('../views/MenTops.vue')
      },
      {
        path: 'shirts',
        name: 'men-shirts',
        component: () => import('../views/MenShirts.vue')
      },
      {
        path: 'outerwear',
        name: 'men-outerwear',
        component: () => import('../views/MenOuterwear.vue')
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/shopping/:step',
    name: 'shopping',
    component: () => import('../views/Shopping.vue')    
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
