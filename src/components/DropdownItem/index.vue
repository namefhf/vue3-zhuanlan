<template>
  <li :class="{ isDisabled: disabled }" class="dropdown-option ">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.dropdown-option.isDisabaled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
