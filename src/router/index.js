import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import WriteCenter from '../views/WriteCenter.vue'
import ElTest from '../views/element-plus-test.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/index',
    redirect: '/'
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
  },
  {
    path: '/eltest',
    name: 'ELTEST',
    component: ElTest
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/NotFind')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  },
  // {
  //   path: '/admin',
  //   name: 'ADMIN',
  //   component: () => import('@/views/Admin')
  // }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
