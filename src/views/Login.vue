<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">邮箱：</label>
      <validate-input
        :rules="emailRules"
        v-model="emailVal"
        placeholder="请输入邮箱地址"
        type="text"
        ref="inputRef"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">密码：</label>
      <validate-input
        :rules="passwordRules"
        v-model="emailVal"
        placeholder="请输入密码"
        type="password"
      />
    </div>
    <template #submit></template>
  </validate-form>
</template>

<script>
import { ref } from 'vue'
import ValidateForm from '@/components/ValidateForm'
import ValidateInput from '@/components/ValidateInput'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'Login',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const inputRef = ref(null)
    const emailVal = ref('111@test.com')
    const passwordVal = ref('111111')
    const emailRules = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '电子邮箱格式错误' }
    ]
    const passwordRules = [{ type: 'required', message: '密码不能为空' }]
    const onFormSubmit = result => {
      // console.log('result', result)
      if (result) {
        const payload = {
          email: emailVal.value,
          password: passwordVal.value
        }
        store.dispatch('login', payload).then(res => {
          console.log(res)
          router.push({ name: 'home' })
        })
      }
    }
    return {
      emailRules,
      passwordRules,
      passwordVal,
      emailVal,
      onFormSubmit,
      inputRef
    }
  }
}
</script>

<style lang="scss" scoped></style>
