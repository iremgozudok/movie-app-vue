import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../views/Movies.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Favorites from '../views/Favorites.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetail
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]
})

export default router
