<!--广广告位管理-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" style="height:92%;">
        <el-tab-pane label="Banner" name="Banner" style="height:100%;">
         <PopUps/>
        </el-tab-pane>
        <el-tab-pane label="弹窗" name="PopUps" style="height:100%;">
         <PopUps/>
        </el-tab-pane>
        <el-tab-pane label="活动流原生广告" name="NativeAdvertising" style="height:100%;">
          <NativeAdvertising/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Levelbar from './../../../components/common/layout/Levelbar';
import PopUps from './advertisingComponent/PopUps';
import NativeAdvertising from './advertisingComponent/NativeAdvertising';

export default {
  components: {
    Levelbar,
    PopUps,
    NativeAdvertising
  },
  data() {
    return {
      activeName: "Banner"
    };
  },
  name: "AdvertisingManagement",
  methods: {
    handleClick(tab, event) {
    }
  }
};
</script>

<style>
</style>
