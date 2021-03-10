<template>
  <Loader text="拼命加载中" v-if="isLoading" />
  <GlobalHeader :user="currentUser" />

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Loader from '@/components/Loader'
import GlobalHeader from './components/GlobalHeader'

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
    return {
      currentUser,
      isLoading
    }
  }
}
</script>

<style lang="scss" scoped></style>
