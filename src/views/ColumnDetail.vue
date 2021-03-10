<template>
  <div class="column-detail-page  ">
    <div
      class="column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column"
    >
      <div class="col-md-3 text-center">
        <img
          :src="column.avatar && column.avatar.url"
          :alt="column.title"
          class="rounded-circle border"
          width="100"
          height="100"
        />
      </div>
      <div class="col-md-9 text-center">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import PostList from '@/components/PostList'
import { testData, testPosts } from '../testData'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
export default {
  name: 'ColumnDetail',
  components: {
    PostList
  },
  setup() {
    const route = useRoute()
    const currentId = route.params.id
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchColumn', currentId)
      store.dispatch('fetchPosts', currentId)
    })
    const column = computed(() => {
      const selectColumn = store.getters.getColumnById(currentId)
      // if (selectColumn) {
      //   addColumnAvatar(selectColumn, 100, 100)
      // }
      return selectColumn
    })
    const list = computed(() => store.getters.getPostsByCid(currentId))
    console.log('list', list)
    return {
      route,
      column,
      list
    }
  }
}
</script>

<style lang="scss" scoped></style>
