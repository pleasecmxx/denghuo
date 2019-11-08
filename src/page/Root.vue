<template>
  <div class="page">
    <div class="header">
      <div class="header-left">
        <img class="main-logo" src="./../assets/main-logo.png" />
        <p class="header-title-text">文明社区后台管理系统</p>
      </div>

      <div class="header-right">
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
          <div class="header-info-items">
            <el-dropdown class="heade_right_ad" @command="handleCommand">
              <span class="el-dropdown-link">
                <i class="el-icon-view"></i>
                <p class="header-info-items-p">admin</p>
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link to="/ModifyDataHome">
                  <el-dropdown-item command="4">修改资料</el-dropdown-item>
                </router-link>
                <router-link to="/ModifyAvatarHome">
                  <el-dropdown-item command="3">修改头像</el-dropdown-item>
                </router-link>
                <router-link to="/ModifyPassWordHome">
                  <el-dropdown-item command="2">修改密码</el-dropdown-item>
                </router-link>
                <div @click="outlogin()">
                  <el-dropdown-item command="1">退出登录</el-dropdown-item>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="header-search-content">
          <input class="search-input" type="text" placeholder="请输入关键词" />
          <div class="img-search">
            <i class="el-icon-search"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="app_main">
      <div class="slider-mue">
        <div
          v-for="(item,index) in vmroot"
          :key="index"
          :class="[slidermenu ,item.active ? slideractive : '']"
          @click="sideractive(item,index)"
        >
          <i :class="item.icon"></i>
          <p class="menu-text">{{item.name}}</p>
        </div>
      </div>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval, setTimeout } from "timers";

import store from "@/vuex/store";

import router from "@/router/router";

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
      value: "",
      vmroot: [
        {
          name: "快捷菜单",
          icon: "el-icon-menu",
          path: "home",
          active: true
        },
        {
          name: "平台运营账号管理",
          icon: "el-icon-edit-outline",
          path: "operation-acount-management",
          active: false
        },
        {
          name: "地区运营账号管理",
          icon: "el-icon-edit-outline",
          path: "area-acount-management",
          active: false
        },
        {
          name: "灯火端用户管理",
          icon: "el-icon-mobile-phone",
          path: "denghuo-user-management",
          active: false
        },
        {
          name: "灯火端组织管理",
          icon: "el-icon-document",
          path: "denghuo-organization-management",
          active: false
        },
        {
          name: "灯火端内容管理",
          icon: "el-icon-printer",
          path: "denghuo-content-management",
          active: false
        },
        {
          name: "文明端用户管理",
          icon: "el-icon-edit",
          path: "wenming-user-management",
          active: false
        },
        {
          name: "文明端账户管理",
          icon: "el-icon-edit",
          path: "civilization-acount-management",
          active: false
        },
        {
          name: "文明端事务管理",
          icon: "el-icon-edit",
          path: "civilization-content-management",
          active: false
        }
      ],
      slidermenu: "slider-menu",
      slideractive: "slider-active"
    };
  },
  mounted() {
    // this.message();
  },
  methods: {
    sideractive(item, index) {
      this.$router.push("/" + item.path);
      this.vmroot.map((item, i) =>
        index == i ? (item.active = true) : (item.active = false)
      );
    },
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
    handleCommand(command) {},
    outlogin() {
      store.commit("saveInfo", "");
      store.commit("saveToken", "");
      router.push("/");
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

i {
  color: #cccccc;
}

.header {
  width: 100%;
  height: 52px;
  background-color: rgba(55, 61, 65);
  min-width: 1180px !important;
}

.header-left {
  width: 430px;
  line-height: 52px;
  height: 52px;
  float: left;
}

.main-logo {
  width: 195px;
  height: 36px;
  margin: 8px 5px 0 20px;
  float: left;
}

.header-title-text {
  font-size: 18px;
  font-weight: 600;
  color: #e4e4e4;
  letter-spacing: 2px;
  margin: 0;
  float: left;
}

.header-right {
  float: right;
  line-height: 52px;
  height: 52px;
  width: 735px;
}

.header-search-content {
  height: 52px;
  float: right;
  margin: 0 150px 0 0;
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
  float: left;
  margin: 13px 0 13px 0;
}

.search-input::-webkit-input-placeholder {
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
  float: left;
  margin: 2px 0 0 -30px;
}

.img-search:hover > .el-icon-search {
  color: #fff;
}

.header-info {
  height: 52px;
  padding-left: 10px;
  float: right;
}

.header-info-items {
  height: 52px;
  line-height: 52px;
  margin-right: 30px;
  float: left;
  cursor: pointer;
}
.header-info-items i {
  float: left;
  line-height: 52px;
}

.header-info-items p {
  margin: 0;
  padding-left: 5px;
}

.header_right {
  width: 120px;
}

.heade_right_ad {
  height: 52px;
  margin: 0 0 0 0;
}

.header-info-items-p {
  margin-left: 4px;
  color: #bbbbbb;
  transition: all ease 0.25s;
  float: left;
}

.header-info-items:hover > i,
.header-info-items:hover > .header-info-items-p {
  color: #ffffff;
}

.page {
  width: 100%;
  height: 100%;
  float: left;
}

.page-content {
  display: flex;
  width: 100%;
  float: left;
}

.app_main {
  width: 100%;
  height: 100%;
  float: left;
  display: flex;
}

.slider-mue {
  width: 80px;
  background-color: rgba(51, 55, 68);
  height: 100%;
  float: left;
}

.slider-menu {
  width: 80px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 6px;
  text-align: center;
}

.menu-text {
  font-size: 14px;
  color: #cccccc;
}

.slider-active {
  background: #1a1c22;
}

.slider-active i,
.slider-active p {
  color: #fff;
  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.6);
}

.slider-menu:hover > i,
.slider-menu:hover > .menu-text {
  color: #ffffff;
  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.6);
}

</style>
