import store from '@/store'
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
      redirectAreadyLogin: true
    }
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
  console.log('to', to.path)
  console.log('from', from.path)
  console.log(store.state.user.isLogin)

  setTimeout(() => {
    console.log(store.state.user.isLogin)
  }, 3000)

  if (to.meta.auth && !store.state.user.isLogin) {
    console.log('shouwei')
    next({ name: 'login' })
  } else if (to.meta.redirectAreadyLogin && store.state.user.isLogin) {
    console.log('to home')
    next({ name: 'home' })
  } else {
    console.log('next')
    next()
  }
})
export default router
