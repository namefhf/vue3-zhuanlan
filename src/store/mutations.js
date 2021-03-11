import axios from 'axios'
import { arrToObj, objToArr } from '../helper'
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
    state.token = ''
    state.user.isLogin = false
    delete axios.defaults.headers.common.Authorization
  },
  fetchCurrentUser(state, rowData) {
    state.user = { ...state.user, isLogin: true, ...rowData.data }
  },
  setError(state, e) {
    state.error = e
  },
  fetchPosts(state, { data: rawData, extraData: columnId }) {
    state.posts.data = { ...state.posts.data, ...arrToObj(rawData.data.list) }
    state.posts.loadedColumns.push(columnId)
  },
  fetchPost(state, rawData) {
    state.posts.data[rawData.data._id] = rawData.data
  },
  deletePost(state, { data }) {
    delete state.posts.data[data._id]
  },
  updatePost(state, { data }) {
    state.posts.data[data._id] = data
  }
}
export default mutations
