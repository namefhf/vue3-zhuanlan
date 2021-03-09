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
export default {
  name: 'ValideForm',
  emits: ['form-submit'],
  setup(props, { emit }) {
    const sumitForm = () => {
      emit('form-submit', true)
    }

    return {
      sumitForm
    }
  },
  mounted() {
    this.$on('item-created', () => {})
  }
}
</script>

<style lang="scss" scoped></style>
