<template>
  <div class="dropdown" ref="dropDownRef">
    <a
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >
      {{ title }}
    </a>

    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import useClickOutside from '../../hooks/useClickOutside'
export default {
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropDownRef = ref(null)

    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropDownRef)

    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggleOpen,
      dropDownRef
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  min-width: unset;
}
</style>
