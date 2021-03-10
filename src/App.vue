<template>
  <Loader text="拼命加载中" v-if="isLoading" />
  <GlobalHeader :user="currentUser" />

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Loader from '@/components/Loader'
import GlobalHeader from './components/GlobalHeader'
import axios from 'axios'
export default {
  components: {
    GlobalHeader,
    Loader
  },
  setup() {
    const store = useStore()
    const currentUser = computed(() => {
      return store.state.user
    })
    const isLoading = computed(() => {
      return store.state.loading
    })
    const token = computed(() => {
      return store.state.token
    })
    const error = computed(() => {
      return store.state.error
    })
    onMounted(() => {
      console.log('app mounted')
      if (!currentUser.value.isLogin && token.value) {
        axios.defaults.headers.Authorization = `Bearer ${token.value}`
        store.dispatch('fetchCurrentUser')
      }
    })
    return {
      currentUser,
      isLoading,
      error
    }
  }
}
</script>

<style lang="scss" scoped></style>
