<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/denghuo-content-management">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">灯火端内容管理</span>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/AdvertisingManagement">
        <span class="s-menu-text">广告位管理</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/SystemMsgManagement">
        <span class="s-menu-text">系统信息管理</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/ActivitiesManagement">
        <span class="s-menu-text">活动管理</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "DenghuoContentManagement"
};
</script>

<style>
</style>
