import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import WriteCenter from '../views/WriteCenter.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/user/:user_id',
    name: 'USER',
    component: User,
  },
  {
    path: '/user/:user_id/write_center',
    name: 'WRITECENTER',
    component: WriteCenter
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
