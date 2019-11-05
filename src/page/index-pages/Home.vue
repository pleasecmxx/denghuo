<template>
  <div class="my-content flex">
    <div class="second-menu">
      <router-link class="s-menu-line" tag="div" to="/SystemIndexHome">
        <div class="s-menu-line s-menu-top">
          <i class="el-icon-menu"></i>
          <span class="m-t-text">快捷菜单</span>
          <i class="el-icon-s-tools" @click="showdialog()"></i>
        </div>
      </router-link>
      <router-link
        class="s-menu-line"
        v-for="(item,index) in rootlist"
        :key="index"
        tag="div"
        :to="item.path+'Home'"
      >
        <span class="s-menu-text">{{item.name}}</span>
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
          <span>已选菜单</span> 最多可以设置10个快捷菜单
        </div>
        <div class="box_top">
          <div class="top_head" v-for="(item,index) in selectList" :key="index">
            <el-button size="small">
              {{item.name}}
              <i
                v-if="index != 0"
                @click="delecttitle(index,item)"
                class="el-icon-close"
              ></i>
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
      setmsg: false,
      selectList: [
        {
          path: "/SystemIndex",
          name: "系统首页",
          id: -1,
          check: true
        }
      ],
      rootlist: [
        {
          path: "/SystemIndex",
          name: "系统首页",
          id: -1,
          check: true
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
              id: 9
            },
            {
              path: "/OrganizationList",
              name: "组织列表",
              check: false,
              id: 10
            },
            {
              path: "/AddOrganization",
              name: "新增组织",
              check: false,
              id: 11
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
              id: 12
            },
            {
              path: "/SystemMsgManagement",
              name: "系统信息管理",
              check: false,
              id: 13
            },
            {
              path: "/ActivitiesManagement",
              name: "活动管理",
              check: false,
              id: 14
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
              id: 15
            },
            {
              path: "/BackCashCheck",
              name: "回款审批",
              check: false,
              id: 16
            },
            {
              path: "/RefundCheck",
              name: "退款审批",
              check: false,
              id: 17
            },
            {
              path: "/ReimbursementCheck",
              name: "报销审批",
              check: false,
              id: 18
            },
            {
              path: "/LeaveCheck",
              name: "请假审批",
              check: false,
              id: 19
            },
            {
              path: "/BusinesstripCheck",
              name: "出差审批",
              check: false,
              id: 20
            },
            {
              path: "/BorrowCheck",
              name: "借款审批",
              check: false,
              id: 21
            },
            {
              path: "/InstructionsCheck",
              name: "请示审批",
              check: false,
              id: 22
            },
            {
              path: "/VisitCheck",
              name: "拜访审批",
              check: false,
              id: 23
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
              id: 24
            },
            {
              path: "/SocialOrganization",
              name: "社会组织工作台审核",
              check: false,
              id: 25
            },
            {
              path: "/WorkbenchManagement",
              name: "工作台管理",
              check: false,
              id: 26
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
              id: 27
            }
          ]
        }
      ],
      a_index: [-1]
    };
  },
  methods: {
    getBreadcrumb() {
      let list = JSON.parse(localStorage.getItem("rootlist"));
      if (list) {
        this.rootlist = list;
        this.selectList = list;
        for (let i = 1; i < list.length; i++) {
          this.a_index.push(list[i].id);
          this.routerList.map(res => {
            res.children.map(ref =>
              ref.id == list[i].id ? (ref.check = true) : ref
            );
          });
        }
      }
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
      this.getBreadcrumb();
    },
    _json(e) {
      return JSON.parse(JSON.stringify(e));
    },
    handleCheckedCitiesChange(index, is, citem) {
      let ary = this._json(this.a_index);
      let ars = this._json(this.selectList);
      ary.push(citem.id);
      ary = this.distinct(ary);
      // 选中 el-checkbox 自动 改变
      if (citem.check) {
        ars.push(citem);
      } else {
        for (let i = 0; i < ary.length; i++) {
          if (ary[i] == citem.id) {
            ary.splice(i, 1);
            ars.splice(i, 1);
          }
        }
      }
      this.a_index = ary;
      this.selectList = ars;
      if (ary.length > 10) {
        this.a_index = this._splice(ary);
        this.selectList = this._splice(ars);
        this.routerList[index].children[is].check = false;
      }
    },
    // 保存
    savesetting() {
      this.rootlist = this.selectList;
      let rl = JSON.stringify(this.rootlist);
      localStorage.setItem("rootlist", rl);
      this.boxClose();
    },
    _splice(ary, index = 10) {
      let arr = [];
      for (let i = 0; i < index; i++) {
        arr.push(ary[i]);
      }
      return arr;
    },
    // 去重
    distinct(a, b = []) {
      let arr = a.concat(b);
      let result = [];
      let obj = {};
      for (let i of arr) {
        if (!obj[i]) {
          result.push(i);
          obj[i] = 1;
        }
      }
      return result;
    },
    // 删除当前标签
    delecttitle(index, item) {
      let ai = [];
      let sl = [];
      for (let i = 0; i < this.selectList.length; i++) {
        if (index != i) {
          ai.push(this.a_index[i]);
          sl.push(this.selectList[i]);
        }
      }
      this.a_index = ai;
      this.selectList = sl;
      this.routerList.map(res => {
        res.children.map(ref =>
          ref.id == item.id ? (ref.check = false) : ref
        );
      });
    }
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