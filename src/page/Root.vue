<template>
  <div class="page">
    <div class="header">
      <router-link tag="div" to="/login">登录</router-link>
    </div>
    <div class="slider-mue">
        <router-link tag="div" to="/home">主</router-link>
        <router-link tag="div" to="/acount">账户</router-link>
    </div>
    <div class="page-content">
      <!-- <p style="text-align: left">adhakdhkj</p> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 52px;
  background-color: rgba(55, 61, 65);
  overflow: hidden;
  z-index: 9999;
}

.page {
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 52px;
  padding-left: 80px;
}

.page-content {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.slider-mue {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  background-color: rgba(51, 55, 68);
  z-index: 999;
  padding-top: 52px;
}
</style>
