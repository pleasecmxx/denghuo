<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/area-acount-management">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">地区运营账号管理</span>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/AreaNormalUserList">
        <span class="s-menu-text">地区账户列表</span>
      </router-link>
    </div>
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "AreaAcountManagement"
};
</script>