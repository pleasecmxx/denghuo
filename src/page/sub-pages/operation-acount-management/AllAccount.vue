<!--账户列表-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="全部账户列表" name="AllAccount1" style="height:100%;">
          <AllAccount :type="0"/>
        </el-tab-pane>
        <el-tab-pane label="在用账户列表" name="AllAccount2" style="height:100%;">
          <AllAccount :type="1" />
        </el-tab-pane>
        <el-tab-pane label="冻结账户列表" name="AllAccount3" style="height:100%;">
          <AllAccount :type="2" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import AllAccount from "./normalComponent/AllAccount";

export default {
  name: "NormalUserList",
  components: {
    Levelbar,
    AllAccount,
  },
  data() {
    return {
      activeName: "AllAccount1"
    };
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style>
</style>
