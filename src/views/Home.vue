<template>
  <div class="home">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_0j4kzlaf.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px;margin: auto;"
            loop
            autoplay
          ></lottie-player>
          <h2
            class="font-weight-light my-2 shake-slow shake-constant shake-constant--hover"
          >
            随心写作，自由表达
          </h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center mb-4">
      发现精彩
    </h4>
    <column-list :list="list"></column-list>
    <div class="text-center">
      <!-- <button
        class="btn btn-outline-primary mt-2 mb-5  btn-block"
        @click="loadMorePage"
        v-if="!isLastPage"
      >
        加载更多
      </button> -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import ColumnList from '../components/ColumnList'

import { useStore } from 'vuex'
export default {
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      console.log('mounted')
      store.dispatch('fetchColumns')
    })
    const list = computed(() => {
      return store.state.columns
    })

    return {
      list
    }
  }
}
</script>
<style lang="scss" scoped></style>
