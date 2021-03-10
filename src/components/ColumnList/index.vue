<template>
  <div class="row">
    <div v-for="column in columnlist" :key="column._id" class="col-md-4 mb-4">
      <div class="card shadow-sm h-100 " style="width: 100%;">
        <div class="card-body text-center">
          <img
            :src="column.avatar && column.avatar.url"
            class="rounded-circle border border-light my-3"
            alt="..."
            width="50"
            height="50"
          />
          <h5 class="card-title text-truncate">{{ column.title }}</h5>
          <p class="card-text text-left description text-secondary ">
            {{ column.description }}
          </p>
          <router-link
            :to="{ name: 'column', params: { id: column._id } }"
            class="btn btn-outline-primary"
          >
            进入专栏
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'ColumnList',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const columnlist = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = {
            url: require('../../assets/column.jpg')
          }
        } else {
          column.avatar.url += '?x-oss-process=image/resize,m_pad,h_50,w_50'
        }
        return column
      })
    })
    return {
      columnlist
    }
  }
}
</script>

<style lang="scss" scoped>
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
