const state = {
  user: {
    isLogin: false
    // name: ''
  },
  columns: [],
  posts: [],
  loading: false,
  token: localStorage.getItem('token') || '',
  error: {
    status: false
  }
}
export default state
