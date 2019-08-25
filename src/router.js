import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/FoodowIndex.vue'
import Search from './views/FoodowSearch.vue'
import Show from './views/FoodowShow.vue'
import Menu from './views/MenuIndex.vue'
import Recipe from './views/FoodowRecipe'
import Signup from "./views/Signup.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
     {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/recipe',
      name: 'Recipes',
      component: Recipe
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

