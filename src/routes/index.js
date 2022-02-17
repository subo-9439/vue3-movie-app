import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import NotFound from './NotFound'

export default createRouter({
  // Hash, History
  // https://google.com/#/search <- Hash mode
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0}
  },
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
    },
    {
      //정규표현식만 중요
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})