<!--在用账户列表-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="在用账户" name="InUseAccount" style="height:100%;">
          <InUseAccount />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import InUseAccount from "./normalComponent/InUseAccount";

export default {
  name: "NormalUserList",
  components: {
    Levelbar,
    InUseAccount,
  },
  data() {
    return {
      activeName: "InUseAccount"
    };
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style>
</style>
