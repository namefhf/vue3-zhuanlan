import store from '@/store'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home"),
  },
  {
    path: '/login',
    name: "login",
    component: () => import("@/views/Login"),
    meta: {
      redirectAreadyLogin: true
    }
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import("@/views/ColumnDetail"),

  },
  {
    path: "/create",
    name: 'create',
    component: () => import("@/views/CreatePost"),
    meta: {
      auth: true
    }
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.user.isLogin) {
    next({ name: "login" })
  } else if (to.meta.redirectAreadyLogin && store.state.user.isLogin) {
    next({ name: 'home' })
  } else {
    next()
  }
})
export default router
