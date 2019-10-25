<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="冻结账户" name="FreezeAccount" style="height:100%;">
          <FreezeAccount />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import FreezeAccount from "./normalComponent/FreezeAccount";

export default {
  name: "FrozenUserList",
  components: {
    Levelbar,
    FreezeAccount
  },
  data() {
    return {
      activeName: "FreezeAccount"
    };
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style>
</style>
