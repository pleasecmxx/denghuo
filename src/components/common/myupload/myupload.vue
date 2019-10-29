<template>
  <div class="myupload">
    <input
      class="file-update"
      type="file"
      name="image[]"
      accept="image/*"
      @change="changefile($event)"
    />
    <div class="file-update icon_box">
      <i class="el-icon-picture" style="font-size:100px;color:#fff"></i>
    </div>
    <div class="file-update img_view">
    <img :src="imageUrl" class="img_box" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "myupload",
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    changefile(file) {
      console.log("+++++");
      this.$emit("changefile", file.target.files[0]);
      this.imageUrl = URL.createObjectURL(file.target.files[0]);
    }
  }
};
</script>

<style lang="less" scoped>
.myupload {
  position: relative;
  width: 350px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  float: left;
  background: #f2f2f2;
  .file-update {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 3;
    width: 100%;
  }
  .icon_box {
    height: 100%;
    opacity: 1;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img_view{
    height: 100%;
    opacity: 1;
    z-index: 2;
  }
  .img_box {
    width: 100%;
    height: 100%;
    float: left;
    z-index: 9;
  }
}
</style>