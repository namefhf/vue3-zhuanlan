<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="sumitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script>
import mitt from 'mitt'
import { onUnmounted } from 'vue'
export const emitter = mitt()
export default {
  name: 'ValideForm',
  emits: ['form-submit'],
  setup(props, { emit }) {
    let funcArr = [] //验证函数
    const sumitForm = () => {
      const result = funcArr.map(func => func()).every(result => result)
      emit('form-submit', result)
    }
    const callback = func => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      sumitForm
    }
  }
}
</script>

<style lang="scss" scoped>
.submit-area {
  display: inline-block;
}
</style>
