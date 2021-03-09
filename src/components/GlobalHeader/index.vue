<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <!-- Navbar content -->
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <!-- 未登录 -->
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login" class="btn btn-outline-light my-2">
            登陆
          </router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/signup" class="btn btn-outline-light my-2">
            注册
          </router-link>
        </li>
      </ul>
      <!-- 已登录 -->
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <Dropdown :title="`你好${user.name}`">
            <DropdownItem>
              <a href="" class="dropdown-item">新建文章</a>
            </DropdownItem>
            <DropdownItem>
              <a href="" class="dropdown-item">编辑资料</a>
            </DropdownItem>
            <DropdownItem>
              <a href="" class="dropdown-item">退出登录</a>
            </DropdownItem>
          </Dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Dropdown from '../Dropdown'
import DropdownItem from '../DropdownItem'
export default {
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object,
      required: false
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
