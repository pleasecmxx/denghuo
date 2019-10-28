<!--修改头像-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <div class="main_box">
        <div class="content-top-box-header">
          <p class="content-top-box-header-title">
            <i class="el-icon-edit"></i> 修改头像
          </p>
        </div>
        <div class="content_box">
          <div class="con_box">
            <p>上传头像</p>
            <div class="img_box">
              <el-upload
                class="avatar-uploader"
                action
                :show-file-list="false"
                :on-change="handleChange"
                :auto-upload="false"
                :limit="1"
                drag
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <el-button type="primary" @click="save()">保存头像</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Levelbar from "./../../../components/common/layout/Levelbar";

export default {
  name: "ModifyAvatar",
  components: {
    Levelbar
  },
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    handleChange(file, fileList) {
      this.imageUrl = URL.createObjectURL(file["raw"]);
    },
    save() {}
  }
};
</script>

<style lang="less" scoped>
p {
  margin: 0;
}

.main_box {
  width: 96%;
  height: 92%;
  background: #ffffff;
  min-width: 800px;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}

.content-top-box-header {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  padding: 0 20px;
  line-height: 60px;
  span {
    float: right;
    font-size: 14px;
  }
  .span_red {
    color: red;
    float: left;
  }
}

.content-top-box-header-title {
  font-weight: 900;
  font-size: 16px;
  color: #000;
  float: left;
}

.content_box {
  display: flex;
  height: calc(100% - 60px);
  align-items: center;
  justify-content: center;
}

.con_box {
  width: 50%;
  float: left;
  text-align: center;
}

.con_box p {
  font-weight: 900;
}

.img_box {
  width: 180px;
  height: 180px;
  line-height: 180px;
  margin: 30px auto 20px auto;
}

.avatar-uploader {
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100%;
  height: 100%;
  text-align: center;
}
.avatar {
  width: 100%;
  height: 100%;
  display: block;
}
</style>

<style >
.con_box .el-upload-dragger {
  width: 180px;
  background: #f2f2f2;
  box-sizing: border-box;
  overflow: unset;
}

.con_box .el-upload-dragger:hover {
  border-color: #409eff;
}
</style>