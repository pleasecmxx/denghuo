<!--组织列表-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="业主大会组织" name="OwnersMeeting" style="height:100%;">
          <OwnersMeeting />
        </el-tab-pane>
        <el-tab-pane label="民非组织" name="CivilNon" style="height:100%;">
          <CivilNon />
        </el-tab-pane>
        <el-tab-pane label="基层党支部" name="Grassroots" style="height:100%;">
          <Grassroots />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import OwnersMeeting from "./ListComponet/OwnersMeeting";
import CivilNon from "./ListComponet/CivilNon";
import Grassroots from "./ListComponet/Grassroots";

export default {
  components: {
    Levelbar,
    OwnersMeeting,
    CivilNon,
    Grassroots
  },
  data() {
    return {
      activeName: "OwnersMeeting"
    };
  },
  name: "OrganizationList",
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style>
.topBar {
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.topBarContainer {
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
