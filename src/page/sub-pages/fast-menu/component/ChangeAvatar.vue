<!--修改头像-->
<template>
  <el-dialog
    title="修改头像"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
    :modal="false"
  >
    <div class="avatarContainer">
      <div style="margin-left:20px;">
        <div>上传头像</div>
        <div class="avatar-uploader" style="margin-top:10px;">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div style="margin-top:10px;">
          <el-button type="primary">保存头像</el-button>
        </div>
      </div>
      <!-- <div style="margin-right:20px;">
        <div>头像预览</div>
        <div class="topAvatarBox" style="margin-top:10px;">
          <span class="previewAvatar">
            <i class="el-icon-user-solid" style="color:#fff;font-size:120px;"></i>
          </span>
        </div>
        <div style="margin-top:10px;">
          <el-button type="primary">提交头像</el-button>
        </div>
      </div>-->
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "ChangeAvatar",
  data() {
    return {
      dialogVisible: false,
      imageUrl: ""
    };
  },
  methods: {
    open(options) {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style scoped>
.avatarContainer {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topAvatarBox {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.previewAvatar {
  width: 150px;
  height: 150px;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.avatar-uploader {
  border: 1px dashed #ccc;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader.el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>