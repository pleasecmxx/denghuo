<!--工作台管理-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="在用工作台" name="Workbench" style="height:100%;">
          <Workbench />
        </el-tab-pane>
        <el-tab-pane label="冻结工作台" name="freezeWorkbench" style="height:100%;">
          <freezeWorkbench/>
        </el-tab-pane>
        <el-tab-pane label="失效工作台" name="InvalidWorkbench" style="height:100%;">
          <InvalidWorkbench/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import Workbench from "./workbenchComponent/Workbench";
import freezeWorkbench from "./workbenchComponent/freezeWorkbench";
import InvalidWorkbench from "./workbenchComponent/InvalidWorkbench";

export default {
  components: {
    Levelbar,
    Workbench,
    freezeWorkbench,
    InvalidWorkbench,
  },
  data() {
    return {
      activeName: "Workbench"
    };
  },
  name: "IndustryAuditRecord",
  methods: {
    handleClick(tab, event) {
    }
  }
};
</script>

<style>
</style>