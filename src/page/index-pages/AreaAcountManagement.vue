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
        <span class="s-menu-text">全部账户列表(地区)</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/AreaCreateUserAcount">
        <span class="s-menu-text">新建管理账号(地区)</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/AreaOptionLog">
        <span class="s-menu-text">操作日志(地区)</span>
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