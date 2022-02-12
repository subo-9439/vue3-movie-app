import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'

export default createRouter({
  // Hash, History
  // https://google.com/#/search <- Hash mode
  history: createWebHashHistory(),
  // pages
  // https://google.com/
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})