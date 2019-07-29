<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/wenming-user-management">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">文明端用户管理</span>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/OrderCheck">
        <span class="s-menu-text">订单审批</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/BackCashCheck">
        <span class="s-menu-text">回款审批</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/RefundCheck">
        <span class="s-menu-text">退款审批</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/ReimbursementCheck">
        <span class="s-menu-text">报销审批</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/LeaveCheck">
        <span class="s-menu-text">请假审批</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/BusinesstripCheck">
        <span class="s-menu-text">出差审批</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/BorrowCheck">
        <span class="s-menu-text">借款审批</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/InstructionsCheck">
        <span class="s-menu-text">请示审批</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/VisitCheck">
        <span class="s-menu-text">拜访审批</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "WenMingUserManagement"
};
</script>

<style>
</style>