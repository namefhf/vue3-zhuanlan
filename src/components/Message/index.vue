<template>
  <teleport to="#message">
    <div
      class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2"
      :class="classObject"
      v-if="isVisible"
    >
      <span>{{ message }}</span>
      <button
        type="button"
        class="close"
        aria-label="Close"
        @click.prevent="hide"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </teleport>
</template>

<script>
import { ref } from 'vue'
import useDomCreate from '@/hooks/useDomCreate'
export default {
  name: 'Message',
  emits: ['closeMessage'],
  props: {
    message: {
      type: String
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  setup(props, { emit }) {
    useDomCreate('message')
    const isVisible = ref(true)
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default'
    }
    const hide = () => {
      isVisible.value = false
      emit('closeMessage', true)
    }
    return {
      isVisible,
      classObject,
      hide
    }
  }
}
</script>

<style lang="scss" scoped></style>
