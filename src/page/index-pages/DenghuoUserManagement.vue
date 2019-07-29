<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/denghuo-user-management">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">灯火端用户管理</span>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/OwnerApplication">
        <span class="s-menu-text">业主申请审核</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/DenghuoUserListManagement">
        <span class="s-menu-text">用户列表</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "DenghuoUserManagement"
};
</script>

<style>
</style>
