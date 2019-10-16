<template>
  <div class="page">
    <div class="header">
      <div class="header-left">
        <div class="logo">
          <img class="main-logo" src="./../assets/main-logo.png" />
        </div>
        <div class="header-title">
          <p class="header-title-text">文明社区后台管理系统</p>
        </div>
      </div>

      <div class="header-right">
        <div class="header-search-content">
          <input class="search-input" type="text" placeholder="请输入关键词" />
          <div class="img-search">
            <i class="el-icon-search"></i>
          </div>
        </div>
        <div class="header-info">
          <div class="header-info-items" title="待办事项">
            <i class="el-icon-tickets"></i>
            <p class="header-info-items-p">待办事项</p>
          </div>
          <div class="header-info-items" title="系统消息">
            <i class="el-icon-message"></i>
            <p class="header-info-items-p">消息</p>
          </div>
          <div class="header-info-items" title="一键锁屏">
            <i class="el-icon-view"></i>
            <p class="header-info-items-p">锁屏</p>
          </div>

          <el-dropdown class="header_right" @command="handleCommand">
            <div class="header-info-items el-dropdown-link header_right">
              <i class="el-icon-view"></i>
              <p class="header-info-items-p">admin</p>
            </div>
            <el-dropdown-menu slot="dropdown" style="header_right el-dropdown-menu">
              <router-link to="/ModifyData">
                <el-dropdown-item command="4">修改资料</el-dropdown-item>
              </router-link>
              <router-link to="/ModifyAvatar">
                <el-dropdown-item command="3">修改头像</el-dropdown-item>
              </router-link>
              <router-link to="/ModifyPassWord">
                <el-dropdown-item command="2">修改密码</el-dropdown-item>
              </router-link>
              <el-dropdown-item command="1">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>

      <!-- <router-link tag="div" to="/login">登录</router-link> -->
    </div>
    <div class="slider-mue">
      <router-link class="slider-menu" tag="div" to="/home">
        <i class="el-icon-menu"></i>
        <p class="menu-text">快捷菜单</p>
      </router-link>
      <router-link class="slider-menu" tag="div" to="/operation-acount-management">
        <i class="el-icon-edit-outline"></i>
        <p class="menu-text">平台运营账号管理</p>
      </router-link>
      <router-link class="slider-menu" tag="div" to="/area-acount-management">
        <i class="el-icon-edit-outline"></i>
        <p class="menu-text">地区运营账号管理</p>
      </router-link>
      <router-link class="slider-menu" tag="div" to="/denghuo-user-management">
        <i class="el-icon-mobile-phone"></i>
        <p class="menu-text">灯火端用户管理</p>
      </router-link>
      <router-link class="slider-menu" tag="div" to="/denghuo-organization-management">
        <i class="el-icon-document"></i>
        <p class="menu-text">灯火端组织管理</p>
      </router-link>
      <router-link class="slider-menu" tag="div" to="/denghuo-content-management">
        <i class="el-icon-printer"></i>
        <p class="menu-text">灯火端内容管理</p>
      </router-link>
      <!-- <router-link class="slider-menu" tag="div" to="/wenming-user-management">
        <i class="el-icon-edit"></i>
        <p class="menu-text">文明端用户管理</p>
      </router-link>-->
      <router-link class="slider-menu" tag="div" to="/civilization-acount-management">
        <i class="el-icon-edit"></i>
        <p class="menu-text">文明端账户管理</p>
      </router-link>
      <router-link class="slider-menu" tag="div" to="/civilization-content-management">
        <i class="el-icon-edit"></i>
        <p class="menu-text">文明端内容管理</p>
      </router-link>
    </div>

    <!-- <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/home">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">快捷菜单</span>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/SystemIndex">
        <span class="s-menu-text">系统首页</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/OperationAcount">
        <span class="s-menu-text">平台运营账户</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/DenghuoUserList">
        <span class="s-menu-text">灯火端用户列表</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/OrganizationEnter">
        <span class="s-menu-text">组织入驻审核</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/DenghuoContentList">
        <span class="s-menu-text">灯火端内容列表</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/WenMingUserList">
        <span class="s-menu-text">文明端用户列表</span>
      </router-link>
    </div>-->
    <div class="page-content">
      <!-- <p style="text-align: left">adhakdhkj</p> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { setInterval, setTimeout } from "timers";
export default {
  data() {
    return {
      timer: null,
      messageList: [
        {
          message: "消息1"
        },
        {
          message: "消息2"
        },
        {
          message: "消息3"
        },
        {
          message: "消息4"
        },
        {
          message: "消息5"
        },
        {
          message: "消息6"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "修改资料"
        },
        {
          value: "选项2",
          label: "修改头像"
        },
        {
          value: "选项3",
          label: "修改密码"
        },
        {
          value: "选项4",
          label: "退出登录"
        }
      ],
      value: ""
    };
  },
  mounted() {
    // this.message();
  },
  methods: {
    message() {
      let i = -1;
      if (this.timer) return;
      setInterval(() => {
        if (i < this.messageList.length - 1) {
          i++;
          this.$notify({
            title: "消息",
            message: this.messageList[i].message,
            position: "bottom-right",
            type: "warning",
            duration: 6000
          });
        } else {
          i = -1;
        }
      }, 2000);
    },
    handleCommand(command) {

    }
  }
};
</script>

<style scoped>

a {
  text-decoration: none;
}

i{
  color: #666666;
}

.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 52px;
  background-color: rgba(55, 61, 65);
  overflow: hidden;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  min-width: 1080px !important;
}

.header-left {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.logo {
  margin-left: 20px;
}

.main-logo {
  height: 26px;
}

.header-title {
  margin-bottom: 5px;
}

.header-title-text {
  width: 215px;
  font-size: 18px;
  font-weight: 600;
  color: #e4e4e4;
  letter-spacing: 1px;
}

.header-right {
  width: 623px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header-search-content {
  position: relative;
  width: 200px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 80px;
}

.search-input {
  width: 198px;
  height: 26px;
  border: 1px solid rgba(209, 209, 209, 0.3);
  outline: none;
  border-radius: 13px;
  padding: 0;
  padding-left: 12px;
  color: #d1d1d1;
  background-color: rgba(55, 61, 65);
  transition: all ease 0.25s;
  font-size: 12px;
  line-height: 26px;
}

.search-input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #fff;
  opacity: 0.7;
  font-size: 12px;
  line-height: 26px;
}

.search-input:hover {
  border: 1px solid rgba(209, 209, 209, 0.9);
}

.search-input:active,
.search-input:focus {
  border: 1px solid rgba(209, 209, 209, 0.9);
  box-shadow: 0 0 2px rgba(209, 209, 209, 0.9);
}

.img-search {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
}

.img-search:hover > .el-icon-search {
  color: #fff;
}

.header-info {
  padding-left: 10px;
  display: flex;
}

.header-info-items {
  width: 80px;
  margin-right: px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.header_right {
  width: 120px;
}

.header-info-items-p {
  margin-left: 4px;
  color: #bbbbbb;
  transition: all ease 0.25s;
}

.header-info-items:hover > i,
.header-info-items:hover > .header-info-items-p {
  color: #ffffff;
  /* text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.6); */
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
  z-index: 98;
  padding-top: 52px;
  min-height: 800px;
}

.slider-menu {
  width: 80px;
  height: 70px;
  display: flex;
  flex-direction: column;
  /* color: #ffffff; */
  justify-content: center;
  cursor: pointer;
  margin-bottom: 6px;
  text-align: center;
}

.menu-text {
  font-size: 14px;
  color: #bbbbbb;
}

.slider-menu:hover {
  background-color: rgb(65, 69, 82);
}

.slider-menu:hover > i,
.slider-menu:hover > .menu-text {
  color: #ffffff;
  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.6);
}

.slider-menu.router-link-exact-active.router-link-active {
  background-color: rgb(65, 69, 82);
}

/* .second-menu {
  position: fixed;
  left: 80px;
  top: 52px;
  bottom: 0;
  width: 150px;
  background-color: #f2f2f2;
  z-index: 99;
}

.s-menu-line {
  width: 100%;
  float: left;
  line-height: 50px;
  background: #f2f2f2;
  text-align: left;
  cursor: pointer;
}

.s-menu-line:hover .s-menu-text {
  color: #0079fe;
}

.s-menu-top {
  background: #f2f4f7;
  text-align: center;
}

.s-menu-top i {
  color: #000000;
}

.m-t-text {
  padding: 0 0 0 10px;
  color: #000000;
}

.s-menu-text {
  font-size: 14px;
  padding: 0 0 0 20px;
} */
</style>
