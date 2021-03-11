<template>
  <div class="validate-input-container pb-3">
    <input v-if="tag!=='textarea'" :value="inputRef.val" @blur="validateInput"
    @input="updateValue" class="form-control" :="$attrs" :class="{ 'is-invalid':
    inputRef.err }" />
    <textarea
      v-else
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      @blur="validateInput"
      v-model="inputRef.val"
      v-bind="$attrs"
    ></textarea>
    <span v-if="inputRef.err" class="invalid-feedback">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { emitter } from '../ValidateForm'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default {
  name: 'ValidateInput',
  props: {
    rules: {
      type: Array
    },
    tag: {
      type: String
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
            case 'custom':
              passed = rule.validator ? rule.validator() : true
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
    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
    })
    return {
      inputRef,
      updateValue,
      validateInput
    }
  }
}
</script>

<style lang="scss" scoped></style>
