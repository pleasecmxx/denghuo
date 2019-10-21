<template>
  <div class="main">
    <img class="logo" src="./../../assets/login-logo.png" />
    <div class="content">
      <el-tabs type="border-card" :stretch="true" class="tabbox">
        <el-tab-pane label="消息中心">
          <span class="tabtop" slot="label">附件管理</span>
        </el-tab-pane>
        <el-tab-pane label="消息中心">
          <span slot="label">生成调查问卷</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
export default {
  name: "QrCode",
  data() {
    return {
      token : ""
    };
  }
};
</script>


<style lang="less" scoped >
.main {
  width: 100%;
  float: left;
  padding: 30px;
  .logo {
    width: 220px;
    float: left;
  }
  .content {
    width: 100%;
    float: left;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.tabbox {
  width: 50%;
  height: 500px;
}

</style>