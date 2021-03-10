<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">文章标题：</label>
      <validate-input
        :rules="emailRules"
        v-model="emailVal"
        placeholder="请输入文章标题"
        type="text"
        ref="inputRef"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">文章详情：</label>
      <validate-input
        tag="textarea"
        rows="10"
        :rules="passwordRules"
        v-model="emailVal"
        placeholder="请输入文章内容"
        type="textarea"
      />
    </div>
    <template #submit>
      <button type="submit" class="btn btn-primary">创建文章</button>
    </template>
  </validate-form>
</template>

<script>
import ValidateForm from '@/components/ValidateForm'
import ValidateInput from '@/components/ValidateInput'
export default {
  name: 'CreatePost',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
