<!--业主申请审核-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="组织浏览记录" name="Browserecord" style="height:100%;">
          <Browserecord />
        </el-tab-pane>
        <el-tab-pane label="关注/加入的组织" name="Joinedorganization" style="height:100%;">
          <Joinedorganization />
        </el-tab-pane>
        <el-tab-pane label="浏览/参加的事务" name="Participatingbusiness" style="height:100%;">
          <Participatingbusiness />
        </el-tab-pane>
        <el-tab-pane label="浏览/参加的活动" name="ParticipatingActivities" style="height:100%;">
          <ParticipatingActivities />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import Browserecord from "./components/Browserecord";
import Joinedorganization from "./components/Joinedorganization";
import Participatingbusiness from "./components/Participatingbusiness";
import ParticipatingActivities from "./components/ParticipatingActivities";

export default {
  components: {
    Levelbar,
    Browserecord,
    Joinedorganization,
    Participatingbusiness,
    ParticipatingActivities
  },
  data() {
    return {
      activeName: "Browserecord"
    };
  },
  name: "DenghuoUserListManagement",
  methods: {
    handleClick(tab, event) {
    }
  }
};
</script>

<style>
</style>
