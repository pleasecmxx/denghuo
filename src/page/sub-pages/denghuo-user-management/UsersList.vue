<!--用户列表-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="游客列表" name="PendingApplication" style="height:100%;">
          <Touristlist />
        </el-tab-pane>
        <el-tab-pane label="实名无组织用户" name="second">
          <RealNameUnorganized />
        </el-tab-pane>
        <el-tab-pane label="实名有组织用户" name="three">
          <RealNameOrganized />
        </el-tab-pane>
        <el-tab-pane label="禁言列表" name="four">
          <Banned />
        </el-tab-pane>
        <el-tab-pane label="黑名单" name="five">
          <blacklist />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import Touristlist from "./userComponents/Touristlist";
import RealNameUnorganized from "./userComponents/RealNameUnorganized";
import RealNameOrganized from "./userComponents/RealNameOrganized";
import Banned from "./userComponents/Banned";
import blacklist from "./userComponents/blacklist";


export default {
  name: "UsersList",
  components: {
    Levelbar,
    Touristlist,
    RealNameUnorganized,
    RealNameOrganized,
    Banned,
    blacklist
  },
  data() {
    return {
      activeName: "PendingApplication"
    };
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style  scoped>
</style>
