<!--组织详情-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <div class="main_box">        
      <div class="topBar">
        <div class="topBarContainer">
          <div style="margin-left:50px;" class="topTitle">
            <div>
              <span style="font-size:31px;font-weight:700;">金碧文华小区业主大会</span>
              <span style="font-size:22px;margin-left:20px;">业主大会组织</span>
            </div>
            <div style="margin-top:20px;">
              <span style="font-size:22px;">湖南省</span>
              <span style="font-size:22px;margin-left:10px;">长沙市</span>
              <span style="font-size:22px;margin-left:10px;">岳麓区</span>
              <span style="font-size:22px;margin-left:10px;">望岳街道办事处</span>
            </div>
          </div>
          <div>
            <el-button type="primary">
              <span style="color:#fff;">延长账户有效期</span>
            </el-button>
            <el-button type="primary">
              <span style="color:#fff;">冻结账户</span>
            </el-button>
          </div>
        </div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="width:100%;height:75%;">
        <el-tab-pane label="基本信息" name="TableOrganizationDetails" style="height:100%;">
          <TableOrganizationDetails />
        </el-tab-pane>
        <el-tab-pane label="运营数据" name="OperationalData" style="height:100%;">
          <OperationalData />
        </el-tab-pane>
        <el-tab-pane label="内部机构" name="InternalOrganization" style="height:100%;">
          <InternalOrganization />
        </el-tab-pane>
        <el-tab-pane label="外部机构" name="OuterOrganization" style="height:100%;">
          <OuterOrganization />
        </el-tab-pane>
      </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import OperationalData from "./detailComponent/OperationalData";
import InternalOrganization from "./detailComponent/InternalOrganization";
import OuterOrganization from "./detailComponent/OuterOrganization";
import TableOrganizationDetails from "./detailComponent/TableOrganizationDetails";

export default {
  components: {
    Levelbar,
    OperationalData,
    InternalOrganization,
    OuterOrganization,
    TableOrganizationDetails
  },
  data() {
    return {
      activeName: "TableOrganizationDetails"
    };
  },
  name: "OrganizationDetails",
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style>

.main_box{
  width: 96%;
  height: 92%;
  float: left;
}


.topBar {
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topTitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.topBarContainer {
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
