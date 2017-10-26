import Vue from 'vue'
import Router from 'vue-router'
import TopListView from '@/views/TopListView'
import NewListView from '@/views/NewListView'
import PostView from '@/views/PostView'
import Login from '@/views/Login'
import Register from '@/views/Register'
import RecomendationListView from '@/views/RecomendationListView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewListView',
      component: NewListView
    },
    { path: '/top/:page(\\d+)?', component: TopListView },
    { path: '/new/:page(\\d+)?', component: NewListView },
    { path: '/recommendations/:page(\\d+)?', component: RecomendationListView },
    { path: '/post/:id([A-Za-z0-9-_]+)?', component: PostView },
    { path: '/login', component: Login },
    { path: '/regsiter', component: Register }
  ]
})
