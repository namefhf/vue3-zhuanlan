<template>
  <div class="row">
    <div v-for="column in columnlist" :key="column.id" class="col-md-4 mb-4">
      <div class="card shadow-sm" style="width: 100%;">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            class="rounded-circle border border-light w-25 my-3"
            alt="..."
          />
          <h5 class="card-title">Card title</h5>
          <p class="card-text text-left">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-outline-primary">Go somewhere</a>
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
          column.avatar = require('../../assets/column.jpg')
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

<style lang="scss" scoped></style>
