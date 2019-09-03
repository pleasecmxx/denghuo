<!--业委会工作台审核-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="待审核申请(业委会工作台)" name="PendingApplication-Workbench" style="height:100%;">
          <PendingApplicationWorkbench />
        </el-tab-pane>
        <el-tab-pane label="待审核申请（社会组织工作台）" name="PendingApplication-SocialOrganization" style="height:100%;">
          <PendingApplicationSocialOrganization/>
        </el-tab-pane>
        <el-tab-pane label="审核记录（业委会工作台）" name="AuditRecord-Workbench" style="height:100%;">
          <AuditRecordWorkbench/>
        </el-tab-pane>
        <el-tab-pane label="审核记录（社会组织工作台）" name="AuditRecord-SocialOrganization" style="height:100%;">
          <AuditRecordSocialOrganization/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import PendingApplicationWorkbench from "./industryComponent/PendingApplication-Workbench";
import PendingApplicationSocialOrganization from "./industryComponent/PendingApplication-SocialOrganization";
import AuditRecordWorkbench from "./industryComponent/AuditRecord-Workbench";
import AuditRecordSocialOrganization from "./industryComponent/AuditRecord-SocialOrganization";

export default {
  components: {
    Levelbar,
    PendingApplicationWorkbench,
    PendingApplicationSocialOrganization,
    AuditRecordWorkbench,
    AuditRecordSocialOrganization
  },
  data() {
    return {
      activeName: "PendingApplication-Workbench"
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