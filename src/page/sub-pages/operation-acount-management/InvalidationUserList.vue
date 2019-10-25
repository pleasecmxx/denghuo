<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="失效用户" name="ExpiredAccount" style="height:100%;">
          <ExpiredAccount />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import ExpiredAccount from "./normalComponent/ExpiredAccount";

export default {
  name: "InvalidationUserList",
  components: {
    Levelbar,
    ExpiredAccount
  },
  data() {
    return {
      activeName: "ExpiredAccount"
    };
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style>
</style>
