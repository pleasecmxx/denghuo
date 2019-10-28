<template>
  <div class="main">
    <img class="logo" src="./../../assets/login-logo.png" />
    <div class="content">
      <el-tabs type="border-card" :stretch="true" class="tabbox">
        <el-tab-pane label="消息中心">
          <span class="tabtop" slot="label">附件管理</span>
          <div class="qrbox" v-if="!show">
            <div v-if="timesum != 0" >
              <canvas style="codebox" id="QRCode"></canvas>
            </div>
            <p v-if="timesum != 0">请扫码登录</p>
            <el-button type="primary" v-if="timesum == 0" @click="init()">点击刷新二维码</el-button>
          </div>
          <div class="filebox" v-if="show">
            <div class="flie_top">
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :file-list="fileList"
                :on-change="handleChange"
                :auto-upload="false"
              >
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button
                  style="margin-left: 10px;"
                  size="small"
                  type="success"
                  @click="updatafile"
                >上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">最大上传不超过50m的文件</div>
              </el-upload>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :file-list="oldfileList"
                :auto-upload="false"
              >
                <div slot="tip" class="el-upload__tip">已上传文件列表</div>
              </el-upload>
            </div>
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
import UUID from "uuidjs";
import { tokenLogin, uploadFile, getConfigs } from "./api";
import * as qiniu from "qiniu-js";
import md5 from "blueimp-md5";
import store from "./store";

export default {
  name: "QrCode",
  data() {
    return {
      show: false,
      token: "",
      uid: "",
      timesum: 10,
      fileList: [],
      oldfileList: []
    };
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init() {
      this.timesum = 10;
      this.uid = UUID.generate();
      this.QRCodeMsg(this.uid);
      this.login();
    },
    _getConfigs() {
      var d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      day = day > 9 ? day : "0" + day;
      const checkKey = md5(`${year}year${month}month${day}day`);
      getConfigs({
        key: checkKey
      }).then(res => {
        console.log(res);
        if (res.qiniu.token) {
          this.token = res.qiniu.token;
        }
      });
    },
    updatafile() {
      if (!this.token) {
        return this.$confirm(`请重新扫码登陆！`);
      }

      var obj = this.fileList[0];
      var file = obj["raw"];
      var size = obj["size"];
      if (size > 1024 * 1024 * 50) {
        return this.$confirm(`最大上传不超过50m的文件`);
      }
      var key = "11" + md5(this.token + new Date().getTime()) + obj["name"];
      var token = this.token;
      var config = {
        useCdnDomain: true,
        region: null
      };
      var putExtra = {
        fname: obj["name"],
        params: {},
        mimeType: null
      };
      var observable = qiniu.upload(file, key, token, putExtra, config);

      var subscription = observable.subscribe({
        // 上传开始
        next: result => {
          // 接收上传进度信息，result是带有total字段的 Object
          // loaded: 已上传大小; size: 上传总信息; percent: 当前上传进度
          console.log("next", result); // 形如：{total: {loaded: 1671168, size: 2249260, percent: 74.29856930723882}}
        },
        error: errResult => {
          // 上传错误后失败报错
          console.log("error", errResult);
          this.$confirm("抱歉,上传失败，请重试！");
        },
        complete: result => {
          // 接收成功后返回的信息
          console.log("complete", result); // 形如：{hash: "Fp5_DtYW4gHiPEBiXIjVsZ1TtmPc", key: "%TStC006TEyVY5lLIBt7Eg.jpg"}
          if (result) {
            this._uploadFile(obj["name"], result.key, size);
          } else {
            this.$confirm("抱歉,上传失败，请重试！");
          }
        }
      });
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-1);
    },
    _uploadFile(name, url, size) {
      size = (size / (1024 * 1024)).toFixed(2) + "M";
      uploadFile({
        name,
        url,
        size,
        use: 1
      }).then(res => {
        console.log(res);
        if (res.success) {
          this.oldfileList.push({
            name
          });
          this.fileList = [];
          this.$confirm("恭喜您，上传文件成功！");
        } else {
          this.$confirm("抱歉,上传失败，请重试！");
        }
      });
    },
    login() {
      tokenLogin({
        uid: this.uid,
        appType: 4
      })
        .then(res => {
          console.log(res);
          if (res.success) {
            this.show = true;
            store.commit("saveh5Token", res.result);
            this._getConfigs();
          } else {
            this.gettime();
          }
        })
        .catch(err => {
          this.gettime();
        });
    },
    //  10 秒超时
    gettime() {
      if (this.timesum == 0) {
        return;
      } else {
        setTimeout(() => {
          this.login();
          --this.timesum;
        }, 1000);
      }
    },
    QRCodeMsg(uid) {
      // 获取页面的canvas
      var msg = document.getElementById("QRCode");
      // let t = this.randomCoding(); // 随机字符
      // 将获取到的数据（val）画到msg（canvas）上
      QRCode.toCanvas(msg, uid, function(error) {
        console.log(error);
      });
    },
    randomCoding() {
      //创建26个字母数组
      let arr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
      let idvalue = "";
      let n = 12; //这个值可以改变的，对应的生成多少个字母，根据自己需求所改
      for (var i = 0; i < n; i++) {
        idvalue += arr[Math.floor(Math.random() * 26)];
      }
      return idvalue;
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
  padding: 60px 0 0 0;
  p {
    width: 100%;
    float: left;
  }
}

#QRCode {
  width: 220px !important;
  height: 220px !important;
}

.flie_top {
  width: 100%;
  margin: 0 0 20px 0;
  float: left;
  position: relative;
}

.file_bottom {
  width: 98px;
  height: 40px;
  position: absolute;
  opacity: 0;
}
</style>