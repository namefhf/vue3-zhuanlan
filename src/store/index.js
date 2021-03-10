import { createStore } from 'vuex'
import state from './state';
import actions from './actions';
import mutations from './mutations';
export default createStore({
  state,
  mutations,
  actions,
  getters: {
    getColumns: (state) => {
      return objToArr(state.columns.data)
    },
    getColumnById: (state) => (id) => {
      return state.columns.find(c => c._id === id)
    },
    getPostsByCid: (state) => (cid) => {
      return state.posts.filter(post => post.column === cid)
    },
    getCurrentPost: (state) => (id) => {
      return state.posts.data[id]
    }
  },

  modules: {
  }
})
