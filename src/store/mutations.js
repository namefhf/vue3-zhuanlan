const mutations = {
    // login (state) {
    //     state.user = { ...state.user, isLogin: true, name: 'mike' }
    // },
    fetchColumns (state, rowData) {
        state.columns = rowData.data.list
    },
    fetchColumn (state, rowData) {
        state.columns = [rowData.data]
    },
    fetchPosts (state, rowData) {
        state.posts = rowData.data.list
    },
    setLoading (state, status) {
        state.loading = status
    },
    login (state, rowData) {
        state.token = rowData.data.token

    }
}
export default mutations