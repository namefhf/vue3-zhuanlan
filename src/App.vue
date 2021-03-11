<template>
  <Loader text="拼命加载中" v-if="isLoading" />
  <!-- <Message type="error" :message="error.message" v-if="error.status" /> -->
  <GlobalHeader :user="currentUser" />

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import Loader from '@/components/Loader'
import GlobalHeader from './components/GlobalHeader'
import axios from 'axios'
import Message from '@/components/Message'
import CreateMessage from '@/components/CreateMessage'
import createMessage from '@/components/CreateMessage'
export default {
  components: {
    GlobalHeader,
    Loader,
    Message,
    CreateMessage
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
    watch(
      () => error.value.status,
      () => {
        const { status, message } = error.value
        if (status && message) {
          createMessage(message, 'error')
        }
      }
    )
    return {
      currentUser,
      isLoading,
      error
    }
  }
}
</script>

<style lang="scss" scoped></style>
