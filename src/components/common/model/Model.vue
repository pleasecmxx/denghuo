<template>
  <transition name="fade">
    <div class="my_model" v-if="show">
      <div class="mode_bg" @click="showcolne()"></div>
      <div class="content">
        <div class="header">
          <span>提示</span>
        </div>
        <div class="atouview">
          <el-input type="textarea" :rows="2" placeholder="请输入驳回原因" v-model="textarea"></el-input>
        </div>
        <div class="footer">
          <el-button @click="showcolne()">取消</el-button>
          <el-button @click="truecolne()" type="primary">确认</el-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Model",
  data() {
    return {
      textarea: "",
      show: false,
      uid: ""
    };
  },
  methods: {
    shows(uid) {
      this.show = !this.show;
      this.uid = uid;
    },
    showcolne() {
      this.show = false;
      this.textarea = "";
    },
    truecolne() {
      this.$emit("truecolne", this.textarea, this.uid);
      this.show = false;
      this.uid = "";
      this.textarea = "";
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.my_model {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mode_bg {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.content {
  position: absolute;
  width: 50%;
  min-width: 300px;
  z-index: 9999999999;
  background: #ffffff;
}

.header {
  width: 100%;
  padding: 20px 20px 10px;
}

.header span {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}

.atouview {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}

.footer {
  padding: 10px 20px 20px;
  text-align: right;
}
</style>