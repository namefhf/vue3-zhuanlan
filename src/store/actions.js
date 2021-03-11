import axios from 'axios'
const getAndCommit = async (url, commitName, commit) => {
  // commit('setLoading', true)
  const { data } = await axios.get(url)
  // await new Promise(resolve => setTimeout(resolve, 2000))
  commit('setLoading', false)
  commit(commitName, data)
}
const postAndCommit = async (url, commitName, commit, payload) => {
  const { data } = await axios.post(url, payload)
  commit(commitName, data)
  return data
}
const actions = {
  fetchColumns({ commit }) {
    getAndCommit('/columns', 'fetchColumns', commit)
  },
  fetchColumn({ commit }, cid) {
    getAndCommit(`/columns/${cid}`, 'fetchColumn', commit)
  },
  fetchPosts({ commit }, cid) {
    getAndCommit(`/columns/${cid}/posts`, 'fetchPosts', commit)
  },
  login({ commit }, payload) {
    return postAndCommit('/user/login', 'login', commit, payload)
  },
  fetchCurrentUser({ commit }) {
    getAndCommit('/user/current', 'fetchCurrentUser', commit)
  },
  loginAndFetch({ dispatch }, loginData) {
    return dispatch('login', loginData).then(() => {
      return dispatch('fetchCurrentUser')
    })
  },
  fetchPosts({ state, commit }, cid) {
    if (!state.posts.loadedColumns.includes(cid)) {
      return asyncAndCommit(
        `/columns/${cid}/posts`,
        'fetchPosts',
        commit,
        { method: 'get' },
        cid
      )
    }
  },
  fetchPost({ state, commit }, id) {
    const currentPost = state.posts.data[id]
    if (!currentPost || !currentPost.content) {
      return asyncAndCommit(`/posts/${id}`, 'fetchPost', commit)
    } else {
      return Promise.resolve({ data: currentPost })
    }
  },
  updatePost({ commit }, { id, payload }) {
    return asyncAndCommit(`/posts/${id}`, 'updatePost', commit, {
      method: 'patch',
      data: payload
    })
  },
  // createPost({ commit }, payload) {
  //   return asyncAndCommit('/posts', 'createPost', commit, {
  //     method: 'post',
  //     data: payload
  //   })
  // },
  deletePost({ commit }, id) {
    return asyncAndCommit(`/posts/${id}`, 'deletePost', commit, {
      method: 'delete'
    })
  }
}
export default actions
