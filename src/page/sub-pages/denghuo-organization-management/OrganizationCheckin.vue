<!--组织入驻审核-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="待审核申请" name="Auditrecord" style="height:100%;">
          <Auditrecord />
        </el-tab-pane>
        <el-tab-pane label="审核历史记录" name="AuditHistory" style="height:100%;">
          <AuditHistory/>
        </el-tab-pane>
      </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import Auditrecord from "./checkinComponent/Auditrecord";
import AuditHistory from "./checkinComponent/AuditHistory";

export default {
  components: {
    Levelbar,
    Auditrecord,
    AuditHistory
  },
  data() {
    return {
      activeName: "Auditrecord"
    };
  },
  name: "OrganizationCheckin",
  methods: {
    handleClick(tab, event) {
    }
  }
};
</script>

<style scoped>

.content{
  width: 100%;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
