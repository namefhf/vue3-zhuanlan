import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'csshake/dist/csshake.min.css'
import axios from 'axios'
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/api' : '/api-zh'
// console.log(process.env.NODE_ENV);
axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  return config
})
axios.interceptors.response.use(
  config => {
    store.commit('setLoading', false)
    return config
  },
  err => {
    // console.log(err.response)
    const { error } = err.response.data
    store.commit('setError', { status: true, message: 'error' })
    store.commit('setLoading', false)
    return Promise.reject(error)
  }
)
createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
