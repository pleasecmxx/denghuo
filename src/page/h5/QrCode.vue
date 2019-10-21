<template>
  <div class="main">
    <img class="logo" src="./../../assets/login-logo.png" />
    <div class="content">
      <el-tabs type="border-card" :stretch="true" class="tabbox">
        <el-tab-pane label="消息中心">
          <span class="tabtop" slot="label">附件管理</span>
          <div class="qrbox">
            <canvas style="codebox" id="QRCode"></canvas>
            <div id="qrcode"></div>
            <p>请扫码登录</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="消息中心">
          <span slot="label">生成调查问卷</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
import QRCode from "qrcode"; //引入生成二维码插件

export default {
  name: "QrCode",
  data() {
    return {
      token: ""
    };
  },
  mounted: function() {
    this.QRCodeMsg();
  },
  methods: {
    QRCodeMsg() {
      // 获取页面的canvas
      var msg = document.getElementById("QRCode");
      // 将获取到的数据（val）画到msg（canvas）上
      QRCode.toCanvas(msg, "www.badu.com", function(error) {
        console.log(error);
      });
    }
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

.qrbox {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: 100%;
  float: left;
  text-align: center;
  padding: 100px 0 0 0;
  p {
    width: 100%;
    float: left;
  }
}
</style>