<template>
  <div class="validate-input-container pb-3">
    <input type="text" :value="inputRef.val" @blur="validateInput"
    @input="updateValue" class="form-control" :="$attrs" :class="{ 'is-invalid':
    inputRef.err }" />
    <span v-if="inputRef.err" class="invalid-feedback">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script>
import { reactive } from 'vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default {
  name: 'ValidateInput',
  props: {
    rules: {
      type: Array
    },
    modelValue: String
  },
  inheritAttrs: false,
  setup(props, { emit, attrs }) {
    const inputRef = reactive({
      val: props.modelValue || '',
      err: false,
      message: ''
    })
    const updateValue = e => {
      inputRef.val = e.target.value
      emit('update:modelValue', e.target.value)
    }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.err = !allPassed
        return allPassed
      }
      return true
    }
    return {
      inputRef,
      updateValue,
      validateInput
    }
  }
}
</script>

<style lang="scss" scoped></style>
