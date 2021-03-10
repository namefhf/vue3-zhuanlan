import axios from 'axios'

const mutations = {
  // login (state) {
  //     state.user = { ...state.user, isLogin: true, name: 'mike' }
  // },
  fetchColumns(state, rowData) {
    state.columns = rowData.data.list
  },
  fetchColumn(state, rowData) {
    state.columns = [rowData.data]
  },
  fetchPosts(state, rowData) {
    state.posts = rowData.data.list
  },
  setLoading(state, status) {
    state.loading = status
  },
  login(state, rowData) {
    state.token = rowData.data.token
    localStorage.setItem('token', rowData.data.token)
    axios.defaults.headers.Authorization = `Bearer ${rowData.data.token}`
  },
  logout(state) {
    localStorage.removeItem('token')
    state.user.isLogin = false
  },
  fetchCurrentUser(state, rowData) {
    state.user = { ...state.user, isLogin: true, ...rowData.data }
  },
  setError(state, e) {
    state.error = e
  }
}
export default mutations
