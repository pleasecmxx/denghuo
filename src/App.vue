<template>
  <div id="app">
    <router-view v-if="isRooter"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRooter: true
    };
  },
  methods: {
    reload() {
      this.isRooter = false;
      this.$nextTick(function() {
        this.isRooter = true;
      });
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  float: left;
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>
<style>
@import "./assets/styles/common.css";
</style>
