<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/civilization-content-management">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">文明端事务管理</span>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/TransactionManagement">
        <span class="s-menu-text">事务管理</span>
      </router-link>
    </div>
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "CivilizationContentManagement"
};
</script>