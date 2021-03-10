<template>
  <teleport to="#back">
    <div
      class="d-flex justify-content-center align-items-center h-100 w-100 loading-container"
      :style="{ backgroundColor: background || '' }"
    >
      <div class="loading-content text-center">
        <div class="spinner-border text-primary" role="status">
          <!-- <span class="sr-only">{{ text || 'loading' }}</span> -->
        </div>
        <p v-if="text" class="text-primary small">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>

<script>
import { onUnmounted } from 'vue'
export default {
  name: 'Loader',
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  },
  setup() {
    const node = document.createElement('div')
    node.id = 'back'
    document.body.appendChild(node)
    onUnmounted(() => {
      document.body.removeChild(node)
    })
    return {}
  }
}
</script>

<style lang="scss" scoped>
.loading-container {
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  z-index: 100;

  top: 0;
  left: 0;
}
</style>
