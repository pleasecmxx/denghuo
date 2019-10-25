<!--社会组织工作台审核-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="待审核申请（社会组织工作台）" name="PendingApplication-SocialOrganization" style="height:100%;">
          <PendingApplicationSocialOrganization/>
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
import PendingApplicationSocialOrganization from "./SocialComponent/PendingApplication-SocialOrganization";
import AuditRecordSocialOrganization from "./SocialComponent/AuditRecord-SocialOrganization";

export default {
  name: "IndustryAuditRecord",
  components: {
    Levelbar,
    PendingApplicationSocialOrganization,
    AuditRecordSocialOrganization
  },
  data() {
    return {
      activeName: "PendingApplication-SocialOrganization"
    };
  },
  methods: {
    handleClick(tab, event) {
    }
  }
};
</script>

<style>
</style>