<template>
  <div class="page">
    <div class="model">
      <div class="content">
        <img
          class="imgbox"
          src="http://p1.music.126.net/eNyms7cGuYfNJhk7LGT2VA==/109951164249103228.jpg?param=180y180"
        />
        <p>用户</p>
        <div class="input_box">
          <input type="password" placeholder="请输入你的密码继续登录" />
          <div class="i_right" @click="login()">
            <i class="el-icon-right"></i>
          </div>
        </div>
        <span class="sbox" @click="gopage()">或者使用其他账号登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    gopage(p = "/") {
      this.show = false;
      this.$router.push(p);
    },
    login() {
      this.show = false;
      this.$router.push("/main");
    }
  },
  beforeDestroy() {
    if (this.show) {
      this.$router.go(1);
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  float: left;
  background: url("./../../assets/lockbg.jpg");
  background-size: 100% auto;
}

.model {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.content {
  width: 356px;
  text-align: center;
}

.imgbox {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.content p {
  line-height: 40px;
  margin: 10px 0 20px 0;
  font-family: "微软雅黑 Regular", "微软雅黑";
  font-weight: 407;
  font-style: normal;
  font-size: 18px;
  color: #ffffff;
}

.input_box {
  width: 100%;
  float: left;
}

.input_box input {
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  float: left;
  border: none;
  padding: 0 15px;
  margin: 0 0 40px 0;
}

.i_right {
  float: right;
  width: 56px;
  height: 50px;
  background: #d71a1a;
}

.i_right i {
  color: #ffffff;
  font-size: 30px;
  line-height: 50px;
}

.sbox {
  display: block;
  padding: 0 0 30px 0;
  color: #ffffff;
  font-size: 14px;
}
</style>