import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesCatalog from '../views/MoviesCatalog.vue'
import SeriesCatalog from '../views/SeriesCatalog.vue'
import SeriesDetail from '../views/SeriesDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesCatalog
  },
  {
    path: '/series',
    name: 'series',
    component: SeriesCatalog
  },
  {
    path: '/series/:id',
    name: 'series-detail',
    component: SeriesDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router