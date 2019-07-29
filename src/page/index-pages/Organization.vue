<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/denghuo-organization-management">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">灯火端组织管理</span>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/OrganizationCheckin">
        <span class="s-menu-text">组织入住审核</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/OrganizationList">
        <span class="s-menu-text">组织列表</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Organization"
};
</script>

<style>
</style>