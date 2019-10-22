<template>
  <div class="main">
    <img class="logo" src="./../../assets/login-logo.png" />
    <div class="content">
      <el-tabs type="border-card" :stretch="true" class="tabbox">
        <el-tab-pane label="消息中心">
          <span class="tabtop" slot="label">附件管理</span>
          <div class="qrbox" v-if="!show">
            <div style>
              <canvas style="codebox" id="QRCode"></canvas>
            </div>
            <p>请扫码登录</p>
          </div>
          <div class="filebox" v-if="show">
            <div class="flie_top">
              <!-- <input
                id="html5_1dnmqgss5cmd1mpn5vpakgm9q4"
                type="file"
                class="file_bottom"
                multiple
                accept
                onChange="updatafile()"
              />
              <el-button type="primary">点击上传</el-button>-->
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
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
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
import { tokenLogin, uploadFile , getConfigs } from "../../utils/api";
import * as qiniu from "qiniu-js";

export default {
  name: "QrCode",
  data() {
    return {
      show: false,
      token: "",
      uid: "",
      timesum: 10,
      fileList: [
        // {
        //   name: "food.jpeg",
        //   url:""
        // },
      ]
    };
  },
  mounted: function() {
    this.uid = UUID.generate();
    console.log(this.uid);
    this.QRCodeMsg(this.uid);
    this.login();
  },
  methods: {
    _getConfigs(){
        
        getConfigs({
          key  : ""
        }).then(res=>{
          console.log(res);
          
        })
    },
    updatafile() {

      this._getConfigs()

      return 
      console.log("token", this.token);
      console.log("fileList", this.fileList[0]);
      var obj = this.fileList[0];
      var file = obj["raw"];
      var key = obj["name"];
      var token = this.token;
      var config = {
        useCdnDomain: true,
        region: qiniu.region.z2
      };
      var putExtra = {
        fname: key,
        params: {},
        mimeType: null
      };
      console.log(key);
      console.log(file);
      var observable = qiniu.upload(file, key, token, putExtra, config);
      console.log(observable);

      var subscription = observable.subscribe({
        // 上传开始
        next: result => {
          // 接收上传进度信息，result是带有total字段的 Object
          // loaded: 已上传大小; size: 上传总信息; percent: 当前上传进度
          console.log(result); // 形如：{total: {loaded: 1671168, size: 2249260, percent: 74.29856930723882}}
        },
        error: errResult => {
          // 上传错误后失败报错
          console.log(errResult);
        },
        complete: result => {
          // 接收成功后返回的信息
          console.log(result); // 形如：{hash: "Fp5_DtYW4gHiPEBiXIjVsZ1TtmPc", key: "%TStC006TEyVY5lLIBt7Eg.jpg"}
        }
      });

      // var subscription = observable.subscribe(observer) // 上传开始
    },
    handleRemove(file, fileList) {
      console.log("handleRemove", file, fileList);
    },
    handlePreview(file) {
      // console.log("handlePreview", file);
    },
    handleChange(file, fileList) {
      console.log(file, fileList);
      this.fileList = fileList.slice(-3);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    submitUpload() {
      this.$refs.upload.submit();
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
            this.token = res.result;
            console.log(this.token);
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
    updatafilessss() {
      console.log("token", this.token);
      console.log("fileList", this.fileList);

      var uploader = Qiniu.uploader({
        runtimes: "html5,flash,html4", //上传模式,依次退化
        browse_button: "pickfiles", //上传选择的点选按钮，**必需**
        uptoken_url: this.token, //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
        // uptoken : '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
        // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
        // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
        // domain: "http://qiniu-plupload.qiniudn.com/", //bucket 域名，下载资源时用到，**必需**
        get_new_uptoken: false, //设置上传文件的时候是否每次都重新获取新的token
        container: "container", //上传区域DOM ID，默认是browser_button的父元素，
        max_file_size: "100mb", //最大文件体积限制
        // flash_swf_url: "js/plupload/Moxie.swf", //引入flash,相对路径
        max_retries: 3, //上传失败最大重试次数
        dragdrop: true, //开启可拖曳上传
        drop_element: "container", //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
        // chunk_size: "4mb", //分块上传时，每片的体积
        // auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
        init: {
          FilesAdded: function(up, files) {
            plupload.each(files, function(file) {
              // 文件添加进队列后,处理相关的事情
            });
          },
          BeforeUpload: function(up, file) {
            // 每个文件上传前,处理相关的事情
          },
          UploadProgress: function(up, file) {
            // 每个文件上传时,处理相关的事情
          },
          FileUploaded: function(up, file, info) {
            // 每个文件上传成功后,处理相关的事情
            // 其中 info.response 是文件上传成功后，服务端返回的json，形式如
            // {
            //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
            //    "key": "gogopher.jpg"
            //  }
            // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
            // var domain = up.getOption('domain');
            // var res = parseJSON(info.response);
            // var sourceLink = domain + res.key; 获取上传成功后的文件的Url
          },
          Error: function(up, err, errTip) {
            //上传出错时,处理相关的事情
          },
          UploadComplete: function() {
            //队列文件处理完毕后,处理相关的事情
          },
          Key: function(up, file) {
            // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
            // 该配置必须要在 unique_names: false , save_key: false 时才生效

            var key = "";
            // do something with key here
            return key;
          }
        }
      });
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