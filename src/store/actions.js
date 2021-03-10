import axios from 'axios';
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
    fetchColumns ({ commit }) {
        getAndCommit('/columns', 'fetchColumns', commit)

    },
    fetchColumn ({ commit }, cid) {
        getAndCommit(`/columns/${cid}`, 'fetchColumn', commit)

    },
    fetchPosts ({ commit }, cid) {
        getAndCommit(`/columns/${cid}/posts`, 'fetchPosts', commit)

    },
    login ({ commit }, payload) {
        return postAndCommit('/user/login', 'login', commit, payload)

    }
}
export default actions