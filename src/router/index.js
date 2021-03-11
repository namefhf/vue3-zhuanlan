import store from '@/store'
import axios from 'axios'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
    meta: {
      redirectAlreadyLogin: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/Signup')
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import('@/views/ColumnDetail')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/CreatePost'),
    meta: {
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const { user, token } = store.state
  const { auth, redirectAlreadyLogin } = to.meta
  if (!user.isLogin) {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      store
        .dispatch('fetchCurrentUser')
        .then(() => {
          if (redirectAlreadyLogin) {
            next('/')
          } else {
            next()
          }
        })
        .catch(e => {
          console.error(e)
          store.commit('logout')
          next('login')
        })
    } else {
      if (auth) {
        next('login')
      } else {
        next()
      }
    }
  } else {
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})
export default router
