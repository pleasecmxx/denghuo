<!--账户列表-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="全部账户列表" name="InUseAccount1" style="height:100%;">
          <InUseAccount :type="0" />
        </el-tab-pane>
        <el-tab-pane label="在用账户" name="InUseAccount2" style="height:100%;">
          <InUseAccount :type="1" />
        </el-tab-pane>
        <el-tab-pane label="冻结账户" name="FreezeAccount" style="height:100%;">
          <InUseAccount :type="2" />
        </el-tab-pane>
        <el-tab-pane label="失效账户" name="ExpiredAccount" style="height:100%;">
          <InUseAccount :type="3" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import InUseAccount from "./normalComponent/InUseAccount";
import FreezeAccount from "./normalComponent/FreezeAccount";
import ExpiredAccount from "./normalComponent/ExpiredAccount";

export default {
  name: "AreaNormalUserList",
  components: {
    Levelbar,
    InUseAccount,
    FreezeAccount,
    ExpiredAccount
  },
  data() {
    return {
      activeName: "InUseAccount1"
    };
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style>
</style>
