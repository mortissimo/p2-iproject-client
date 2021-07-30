import Vue from 'vue'
import VueRouter from 'vue-router'
import Room from '../views/Room.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'none',
    redirect:'login'
  },
  {
    path: '/room',
    name: 'RoomPage',
    component: Room
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: Login
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
