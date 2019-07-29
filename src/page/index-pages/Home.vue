<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/SystemIndex">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">快捷菜单</span>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/SystemIndex">
        <span class="s-menu-text">系统首页</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/OperationAcount">
        <span class="s-menu-text">平台运营账户</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/DenghuoUserList">
        <span class="s-menu-text">灯火端用户列表</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/OrganizationEnter">
        <span class="s-menu-text">组织入驻审核</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/DenghuoContentList">
        <span class="s-menu-text">灯火端内容列表</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/WenMingUserList">
        <span class="s-menu-text">文明端用户列表</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
</style>