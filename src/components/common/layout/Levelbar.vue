<!--顶部栏-->
<template>
  <div class="top-menu">
    <div class="top-left">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
          <span v-if="!item.redirect||index==levelList.length-1">{{item.name}}</span>
          <i v-else-if ="(item.redirect||item.path)&&item.name=='主界面'" class="el-icon-s-home"></i>
          <router-link v-else-if="item.redirect||item.path" :to="item.redirect||item.path">{{item.name}}</router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="top-right flex">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-refresh-left"></i>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.getBreadcrumb();
  },
  data() {
    return {
      levelList: null
    };
  },
  methods: {
    getBreadcrumb() {
      console.log( this.$route);
      
      let matched = this.$route.matched.filter(item => item.name);
      console.log(matched);
      
      const first = matched[0];
      this.levelList = matched;
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  }
};
</script>
<style scoped>
.top-menu {
  position: fixed;
  left: 230px;
  top: 52px;
  right: 0px;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 20px; */
  /* padding-right: px; */
  padding: 0 20px;
  box-shadow: 0 0 4px 1px rgba(209, 209, 209, 0.9);
  box-sizing: border-box;
}
.top-right {
  width: 80px;
  height: 50px;
  /* background-color: tomato; */
  /* z-index: 999999; */
  justify-content: flex-end;
  align-items: center;
}
.el-icon-refresh-left {
  font-weight: 600;
  margin-left: 16px;
}

.el-icon-arrow-left {
  font-weight: 600;
}
</style>