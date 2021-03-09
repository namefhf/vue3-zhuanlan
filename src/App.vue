<template>
  <GlobalHeader :user="user" />
  <div class="container">
    <!-- <ColumnList :list="list" /> -->
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
      <template #submit>
        <button>11</button>
      </template>
    </validate-form>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader'
import ColumnList from './components/ColumnList'
import ValidateInput from './components/ValidateInput'
import ValidateForm from './components/ValidateForm'
import { ref } from 'vue'

export default {
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup() {
    const inputRef = ref(null)
    const emailVal = ref('')
    const passwordVal = ref('')
    const emailRules = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '电子邮箱格式错误' }
    ]
    const passwordRules = [{ type: 'required', message: '密码不能为空' }]
    const onFormSubmit = result => {
      console.log(inputRef.value)
      console.log(inputRef.value.validateInput())
    }
    return {
      list: [
        { id: 0, title: '1' },
        { id: 1, title: '2' },
        { id: 2, title: '3' },
        { id: 3, title: '4' },
        { id: 4, title: '5' }
      ],
      user: {
        isLogin: true,
        name: 'mike'
      },
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
