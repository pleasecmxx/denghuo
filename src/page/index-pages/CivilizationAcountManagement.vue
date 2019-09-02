<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/civilization-acount-management">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">文明端账户管理</span>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/IndustryCommittee">
        <span class="s-menu-text">业委会工作台审核</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/SocialOrganization">
        <span class="s-menu-text">社会组织工作台审核</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/WorkbenchManagement">
        <span class="s-menu-text">工作台管理</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CivilizationAcountManagement"
};
</script>

<style>
</style>
