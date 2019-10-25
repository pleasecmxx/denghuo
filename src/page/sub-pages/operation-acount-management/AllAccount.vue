<!--账户列表-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="全部账户列表" name="AllAccount" style="height:100%;">
          <AllAccount />
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
      activeName: "AllAccount"
    };
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style>
</style>
