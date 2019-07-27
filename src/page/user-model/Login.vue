<template>
  <div class="page">
    <div class="top-area">
      <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="8"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.36"
        :linesDistance="600"
        :moveSpeed="1"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
        class="lizi"
      ></vue-particles>
    </div>
    <div class="login-content">
      <div class="content-top">
        <div class="logo">
          <img class="img-logo" src="./../../assets/login-logo.png" />
        </div>
        <h4 class="text">文明社区后台管理系统</h4>
      </div>
      <div class="content-bottom">
        <div class="login-input-content">
          <div class="login-icon-container">
            <img class="login-icon" src="./../../assets/icons/username.png" />
          </div>
          <input
            type="text"
            maxlength="20"
            placeholder="请输入用户昵称"
            class="login-input"
            v-model="userName"
          />
          <div class="delate-icon-container">
            <i v-show="userName.length > 0" class="el-icon-error" @click="clearName()"></i>
          </div>
        </div>
        <!-- <span>{{userName}}</span> -->
        <div class="login-input-content">
          <div class="login-icon-container">
            <img class="login-icon" src="./../../assets/icons/password.png" />
          </div>
          <input
            type="password"
            maxlength="20"
            placeholder="请输入账号密码"
            class="login-input"
            v-model="userPass"
          />
          <div class="delate-icon-container">
            <i v-show="userPass.length > 0" class="el-icon-error" @click="clearPass()"></i>
          </div>
        </div>
        <button class="login-btn" @click="login()">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      userPass: ""
    };
  },

  methods: {
    login() {
      alert(this.userName);
    },

    clearName() {
      this.userName = "";
    },

    clearPass() {
      this.userPass = "";
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  background-color: #fff;
  min-width: 1080px !important;
  min-height: 980px;
  display: flex;
  align-items: center;
  overflow-y: auto;
}

.top-area {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 47%;
  background-color: rgb(55, 61, 65);
}

.login-content {
  position: absolute;
  /* top: 20%; */
  right: 28%;
  width: 500px;
  height: 580px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 36px 0;
  margin-top: -12px;
}

.content-top {
  width: 100%;
  /* height: 40%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 274px;
  height: 53px;
}

.img-logo {
  width: 274px;
  height: auto;
}

.text {
  color: rgb(215, 26, 26);
  font-size: 36px;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-weight: 700;
  margin-top: 20px;
}

.content-bottom {
  margin-top: -60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-btn {
  width: 360px;
  height: 52px;
  background-color: #d71a1a;
  border: none;
  line-height: 52px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  border-radius: 4px;
  outline: none;
  transition: all ease 0.35s;
  cursor: pointer;
}

.login-btn:active {
  opacity: 0.6;
}

.login-input-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 52px;
  margin-bottom: 24px;
}

.login-input {
  width: 358px;
  height: 48px;
  border: 1px solid #d1d1d1;
  outline: none;
  border-radius: 4px;
  transition: all ease-in 0.25s;
  padding-left: 50px;
  /* padding-right: 50px; */
  font-size: 15px;
  color: #333;
}

.login-input:-moz-placeholder {
  color: rgb(173, 173, 173);
}

.login-input:hover {
  border: 1px solid red;
}

.login-input:active,
.login-input:focus {
  border: 1px solid red;
  box-shadow: 0 0 7px rgba(255, 0, 0, 0.1);
}

.login-icon-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 52px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #333 */
}

.delate-icon-container {
  position: absolute;
  top: 0;
  right: 0;
  height: 52px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-icon {
  width: 25px;
}

.delate-icon {
  width: 25px;
}
</style>
