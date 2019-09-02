<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/operation-acount-management">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">平台运营账号管理</span>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/NormalUserList">
        <span class="s-menu-text">平台账户列表</span>
      </router-link>
      <!-- <router-link class="s-menu-line" tag="div" to="/FrozenUserList">
        <span class="s-menu-text">冻结账户列表</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/InvalidationUserList">
        <span class="s-menu-text">失效账户列表</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/CreateUserAcount">
        <span class="s-menu-text">新建管理账户</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/OptionLog">
        <span class="s-menu-text">操作日志</span>
      </router-link> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "OperationAcountManagement"
};
</script>

<style>
</style>