<!--业主申请审核-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="待审核申请" name="PendingApplication" style="height:100%;">
          <PendingApplication />
        </el-tab-pane>
        <el-tab-pane label="审核历史记录" name="HistoryRecord">
          <HistoryRecord/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import PendingApplication from "./applicationComponents/PendingApplication";
import HistoryRecord from "./applicationComponents/HistoryRecord";

export default {
  name: "OwnerApplication",
  components: {
    Levelbar,
    PendingApplication,
    HistoryRecord
  },
  data() {
    return {
      activeName: "PendingApplication"
    };
  },
  methods: {
    handleClick(tab, event) {
    }
  }
};
</script>

<style  scoped>

</style>
