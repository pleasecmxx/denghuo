<!--全部账户列表（地区）-->
<template>
  <div class="tableStyle">
    <div class="head_box">
      <div class="searchBox">
        <span>
          <el-input v-model="search.keyWord" placeholder="搜索关键词" style="width:300px;"></el-input>
          <el-select
            v-if="type == 0"
            v-model="search.status"
            placeholder="用户状态"
            style="margin-left:10px;"
          >
            <el-option
              v-for="(item,index) in options"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </span>
        <span style="margin-left:50px;">
          <el-button type="primary" @click="searchWord">
            <i style="color:#fff;" class="el-icon-search" />
            <span style="color:#fff;">查询</span>
          </el-button>
          <el-button @click="clear">
            <i class="el-icon-refresh-right" />
            <span>重置</span>
          </el-button>
        </span>
      </div>
      <div class="file">
        <el-button type="primary">
          <span style="color:#fff;">编辑权限</span>
        </el-button>
        <router-link to="/AreaCreateUserAcount">
          <el-button type="primary">
            <i class="el-icon-plus" style="color:#fff;"></i>
            <span style="color:#fff;">新增</span>
          </el-button>
        </router-link>
      </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%;margin-top:10px;"
      @selection-change="handleSelectionChange"
      height="600"
      border
      stripe
      :header-cell-style="{background:'rgb(245,245,245)'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="账户名称">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="账号" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.account}}</span>
        </template>
      </el-table-column>
      <el-table-column label="管理区域" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.managmentArea}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="accountStatus" label="账户状态" show-overflow-tooltip>
        <template slot-scope="scope">
          <span class="status">
            <span
              :style="{backgroundColor:scope.row.accountStatus===1?'#4BD863':scope.row.accountStatus===2?'#FEC03D':'#FF3B31'}"
              class="point"
            ></span>
            <span
              style="margin-left:10px;"
            >{{scope.row.accountStatus===1?"有效":scope.row.accountStatus===2?"冻结":"失效"}}</span>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="联系方式" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.phone}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="lastEdit" label="最后编辑人" show-overflow-tooltip></el-table-column>
      <el-table-column prop="timeTo" label="有效期至" show-overflow-tooltip></el-table-column>
      <el-table-column prop="operating" label="操作" show-overflow-tooltip min-width="230">
        <template slot-scope="scope">
          <span style="margin-left:10px;" @click="look(scope.$index, scope.row)">
            <i class="el-icon-chat-line-round" style="color:#0079fe;"></i>
            <span style="color:#0079fe;">查看</span>
          </span>
          <!-- <span style="margin-left:10px;" @click="openDary(scope.$index, scope.row)">
            <i class="el-icon-chat-line-round" style="color:#0079fe;"></i>
            <span style="color:#0079fe;">操作日志</span>
          </span> -->
          <span style="margin-left:10px;" @click="extend(scope.$index, scope.row)">
            <i class="el-icon-edit" style="color:#0079fe;"></i>
            <span style="color:#0079fe;">延长有效期</span>
          </span>
          <span style="margin-left:10px;" @click="thaw(scope.$index, scope.row)">
            <i class="el-icon-edit" style="color:#0079fe;"></i>
            <span style="color:#0079fe;">解冻账户</span>
          </span>
          <span style="margin-left:10px;" @click="edit(scope.$index, scope.row)">
            <i class="el-icon-edit" style="color:#0079fe;"></i>
            <span style="color:#0079fe;">编辑</span>
          </span>
          <span style="margin-left:10px;" @click="remove(scope.$index, scope.row)">
            <i class="el-icon-delete" style="color:#0079fe;"></i>
            <span style="color:#0079fe;">删除</span>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="underTable">
      <div>
        <el-button @click="toggleSelection(tableData)">全选&反选</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
        <el-dropdown style="margin-left:10px;" @command="handleCommand">
          <el-button style="width:105px;">
            更多操作
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu>
            <el-dropdown-item command="1">置顶记录</el-dropdown-item>
            <el-dropdown-item command="2">删除记录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="search.pageNo"
          :page-sizes="[10, 20, 30]"
          :page-size="search.pageSize"
          background
          layout="prev, pager, next, sizes"
          :total="search.total"
        ></el-pagination>
      </div>
      <UserDetails ref="UserDetails" />
      <Operationlog ref="Operationlog" />
    </div>
  </div>
</template>
<script>
import UserDetails from "./../children/UserDetails";
import Operationlog from "./../operationlog/Operationlog"; //操作日志

export default {
  name: "InUseAccount",
  components: {
    UserDetails,
    Operationlog
  },
  props: {
    type: {
      default: 0
    }
  },
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 10,
        total: 5,
        keyWord: "",
        status: ""
      },
      pagingState: true,
      value: "更多操作",
      options: [
        {
          value: 1,
          label: "全部"
        },
        {
          value: 2,
          label: "在用账户"
        },
        {
          value: 3,
          label: "冻结账户"
        },
        {
          value: 4,
          label: "失效账户"
        }
      ],
      tableData: [
        {
          id: 1,
          name: "某某",
          account: "0001",
          managmentArea: "长沙",
          accountStatus: 1,
          phone: "13657448974",
          lastEdit: "某负责人",
          timeTo: "2019-10-10"
        }
      ],
      multipleSelection: []
    };
  },
  watch: {},
  methods: {
    // 查看
    look(){
      this.$refs.UserDetails.open({});
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    // 置顶
    handleCommand(options) {
      let selected = this.$refs.multipleTable.selection;
      let orgin = this.tableData;
      let last = [];
      orgin.forEach((item, index) => {
        selected.forEach((selectedItem, selectedIndex) => {
          if (item.id == selectedItem.id) {
            orgin[index] = "";
          }
        });
      });
      orgin.forEach((item, index) => {
        if (item != "") {
          last[last.length] = item;
        }
      });
      if (options == 1) {
        this.tableData = selected.concat(last);
      } else if (options == 2) {
        this.tableData = last;
      }
    },
    // 搜索条件改变
    activeQuery() {
      this.pagingState = true;
      this.query();
    },
    searchWord() {
      this.query();
    },
    clear() {
      this.$set(this.search, "keyWord", "");
      this.$set(this.search, "status", "");
      this.query();
    },
    query() {
      if (this.pagingState) {
        this.search.pageNo = 1;
      }
    },
    // 删除当前项
    remove(index, row) {
      let orgin = this.tableData;
      orgin.forEach((item, index) => {
        if (item.id == row.id) {
          this.tableData.splice(index, 1);
        }
      });
    },
    openDary(index, row) {
      this.$refs.Operationlog.open();
    },
    extend(index, row) {},
    thaw(index, row) {},
    edit(index, row) {},
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 分页条件改变
    handleSizeChange(pageSize) {
      this.search.pageSize = pageSize;
      this.query();
    },
    handleCurrentChange(pageNo) {
      this.pagingState = false;
      this.search.pageNo = pageNo;
      this.query();
    }
  }
};
</script>
<style  scoped>
.status {
  display: flex;
  justify-content: center;
  align-items: center;
}
.point {
  width: 6px;
  height: 6px;
  border-radius: 3px;
}

.head_box {
  width: 100%;
  float: left;
}

.searchBox {
  float: left;
}

.tableStyle {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.file {
  float: right;
}

.underTable {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 30px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.blue {
  color: #409eff;
}
</style>