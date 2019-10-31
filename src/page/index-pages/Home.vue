<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/SystemIndex">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">快捷菜单</span>
          <i class="el-icon-s-tools" @click="showdialog()"></i>
        </div>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/SystemIndex">
        <span class="s-menu-text">系统首页</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/ModifyData">
        <span class="s-menu-text">修改资料</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/ModifyPassWord">
        <span class="s-menu-text">修改密码</span>
      </router-link>
      <router-link class="s-menu-line" tag="div" to="/ModifyAvatar">
        <span class="s-menu-text">修改头像</span>
      </router-link>
    </div>
    <el-dialog
      title="快捷菜单设置"
      :visible.sync="setmsg"
      width="50%"
      :before-close="sethandleClose"
      :modal-append-to-body="false"
    >
      <div class="mainmsgBox">
        <div class="box_title">
          <span>已选菜单</span> 按住菜单标签可以对菜单进行排序，最多可以设置10个快捷菜单
        </div>
        <div class="box_top">
          <div class="top_head" v-for="(item,index) in selectList" :key="index">
            <el-button size="small">
              {{item.name}}
              <i @click="delecttitle(item)" class="el-icon-close"></i>
            </el-button>
          </div>
        </div>
        <div class="box_list">
          <div class="list_line" v-for="(item,index) in routerList" :key="index">
            <div class="list_title">{{item.name}}</div>
            <div class="list_box" v-for="(citem,i) in item.children" :key="i">
              <el-checkbox
                v-model="citem.check"
                @change="handleCheckedCitiesChange(index,i,citem)"
              >{{citem.name}}</el-checkbox>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="boxClose()">取 消</el-button>
        <el-button type="primary" @click="savesetting()">确 定</el-button>
      </span>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.getBreadcrumb();
  },
  data() {
    return {
      setmsg: true,
      selectList: [
        {
          path: "/SystemIndex",
          name: "系统首页",
          id: -1
        }
      ],
      routerList: [
        {
          path: "/operation-acount-management",
          name: "平台运营账号管理",
          redirect: "/AllAccount",
          children: [
            {
              path: "/AllAccount",
              name: "全部账户列表",
              check: false,
              id: 1
            },
            {
              path: "/NormalUserList",
              name: "在用账户列表",
              check: false,
              id: 2
            },
            {
              path: "/FrozenUserList",
              name: "冻结账户列表",
              check: false,
              id: 3
            },
            {
              path: "/InvalidationUserList",
              name: "失效账户列表",
              check: false,
              id: 4
            },
            {
              path: "/CreateUserAcount",
              name: "新建管理账户",
              check: false,
              id: 5
            },
            {
              path: "/OptionLog",
              name: "操作日志",
              check: false,
              id: 6
            }
          ]
        },
        {
          path: "/denghuo-user-management",
          name: "灯火端用户管理",
          redirect: "/OwnerApplication",
          children: [
            {
              path: "/OwnerApplication",
              name: "业主申请审核",
              check: false,
              id: 7
            },
            {
              path: "/UsersList",
              name: "用户列表",
              check: false,
              id: 8
            },
            {
              path: "/DenghuoUserListManagement",
              name: "用户详情",
              check: false,
              id: 9
            }
          ]
        },
        {
          path: "/denghuo-organization-management",
          name: "灯火端组织管理",
          redirect: "/OrganizationCheckin",
          children: [
            {
              path: "/OrganizationCheckin",
              name: "组织入驻审核",
              check: false,
              id: 10
            },
            {
              path: "/OrganizationList",
              name: "组织列表",
              check: false,
              id: 11
            },
            {
              path: "/OrganizationDetails",
              name: "组织详情",
              check: false,
              id: 12
            },
            {
              path: "/AddOrganization",
              name: "新增组织",
              check: false,
              id: 13
            }
          ]
        },
        {
          path: "/denghuo-content-management",
          name: "灯火端内容管理",
          redirect: "/AdvertisingManagement",
          children: [
            {
              path: "/AdvertisingManagement",
              name: "广告位管理",
              check: false,
              id: 14
            },
            {
              path: "/SystemMsgManagement",
              name: "系统信息管理",
              check: false,
              id: 15
            },
            {
              path: "/ActivitiesManagement",
              name: "活动管理",
              check: false,
              id: 16
            }
          ]
        },
        {
          path: "/wenming-user-management",
          name: "文明端用户管理",
          children: [
            {
              path: "/OrderCheck",
              name: "订单审批",
              check: false,
              id: 17
            },
            {
              path: "/BackCashCheck",
              name: "回款审批",
              check: false,
              id: 18
            },
            {
              path: "/RefundCheck",
              name: "退款审批",
              check: false,
              id: 19
            },
            {
              path: "/ReimbursementCheck",
              name: "报销审批",
              check: false,
              id: 20
            },
            {
              path: "/LeaveCheck",
              name: "请假审批",
              check: false,
              id: 21
            },
            {
              path: "/BusinesstripCheck",
              name: "出差审批",
              check: false,
              id: 22
            },
            {
              path: "/BorrowCheck",
              name: "借款审批",
              check: false,
              id: 23
            },
            {
              path: "/InstructionsCheck",
              name: "请示审批",
              check: false,
              id: 24
            },
            {
              path: "/VisitCheck",
              name: "拜访审批",
              check: false,
              id: 25
            }
          ]
        },
        {
          path: "/civilization-acount-management",
          name: "文明端账户管理",
          redirect: "/IndustryCommittee",
          children: [
            {
              path: "/IndustryCommittee",
              name: "业委会工作台审核",
              check: false,
              id: 26
            },
            {
              path: "/SocialOrganization",
              name: "社会组织工作台审核",
              check: false,
              id: 27
            },
            {
              path: "/WorkbenchManagement",
              name: "工作台管理",
              check: false,
              id: 28
            }
          ]
        },
        {
          path: "/civilization-content-management",
          name: "文明端事务管理",
          redirect: "/TransactionManagement",
          children: [
            {
              path: "/TransactionManagement",
              name: "事务管理",
              check: false,
              id: 29
            }
          ]
        }
      ],
      a_index: []
    };
  },
  methods: {
    getBreadcrumb() {
      // let matched = this.$route.matched.filter(item => item.name);
      // console.log(this.$route);
    },
    showdialog() {
      this.setmsg = true;
    },
    sethandleClose(done) {
      done();
      this.setmsg = false;
    },
    boxClose() {
      this.setmsg = false;
    },
    handleCheckedCitiesChange(index, is, citem) {
      //  选中 或者 取消
      let check = citem.check;
      let selcet = this.selectList;

      let ary = this.a_index;
      ary.push(citem.id);
      console.log(ary);
      ary =  new Set(...ary)
      console.log(ary);
      
      this.a_index = ary;

      // 选中
      if (!check) {
        
      }

      return;
      // // 选中时
      // if (!check) {
      //   if (selcet.length > 5) {
      //     // 选中并且 大于 5 则

      //     //
      //     selcet.forEach(vlaue => {
      //       if (value.path == citem.path) {
      //       }
      //     });
      //   } else {
      //   }
      // } else {
      //   // 取消时
      //   if (selcet.length > 5) {
      //   } else {
      //   }
      // }
      // return;
      // let list = [];
      // // 如果已经选择的5个
      // if (this.selectList.length > 5) {
      //   console.log("stop");
      //   // 选择的
      //   this.routerList[index].children[i].check = false;
      //   // this.selectList.forEach(arr => {
      //   //   if (arr.path != citem.path) {
      //   //     list.push(arr);
      //   //   }
      //   // });
      //   // this.selectList = list;
      //   console.log(this.routerList);

      //   return;
      // }
      // console.log("未满5个");

      // this.routerList[index].children[i].check = !check;
      // // 如果已经是 false  则 执行选中操作；
      // if (!check) {
      //   // 选中
      //   this.selectList.push(citem);
      // } else {
      //   // 如果已经true 则为 false
      //   this.selectList.forEach(arr => {
      //     if (arr.path != citem.path) {
      //       list.push(arr);
      //     }
      //   });
      //   this.selectList = list;
      // }
    },
    // 保存
    savesetting() {
      // this.setmsg = false;
      // console.log(this.routerList);
      // let list = [];
      // this.routerList.forEach(res => {
      //   console.log(res);
      //   res.children.forEach(ref => {
      //     if (ref.check) {
      //       list.push(ref);
      //     }
      //   });
      // });
    },
    delecttitle(index) {}
  }
};
</script>

<style scoped>
.m-t-text {
  padding: 0 10px;
}
.mainmsgBox {
  width: 100%;
  float: left;
}
.box_title {
  width: 100%;
  float: left;
}

.box_title span {
  font-size: 16px;
  color: #000;
}

.box_top {
  width: 100%;
  float: left;
  padding: 20px 0 0 0;
}

.top_head {
  float: left;
  padding: 0 20px 20px 0;
}

.box_list {
  width: 100%;
  float: left;
  display: flex;
  flex-wrap: wrap;
}

.list_title {
  font-size: 14px;
  color: #000;
  font-weight: 600;
  padding: 0 0 10px 0;
}

.list_line {
  width: 25%;
  float: left;
  margin: 0 0 20px 0;
}

</style>