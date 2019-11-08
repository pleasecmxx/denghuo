<!--在用工作台-->
<!--待审核申请（业委会工作台）-->
<template>
  <div class="tableStyle">
    <div class="searchBox">
      <span>
        <el-input v-model="search.keyWord" placeholder="搜索关键词" style="width:500px;"></el-input>
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
      <el-table-column prop="Workbench" label="工作台名称" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.Workbench}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="properties" label="工作台属性" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.properties}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="account" label="所属账户" width="120">
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.account}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="identityNumber" label="身份证号" show-overflow-tooltip></el-table-column>
      <el-table-column prop="phone" label="联系电话" show-overflow-tooltip></el-table-column>
      <el-table-column prop="organization" label="所属组织/企业/单位" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.organization}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="validityPeriod" label="账户有效期" show-overflow-tooltip></el-table-column>
      <el-table-column prop="position" label="权限编辑" show-overflow-tooltip min-width="100" >
        <template slot-scope="scope">
          <span>权限等级</span>
          <span @click="edit(scope.$index, scope.row)" style="color:#0079fe;margin-left:10px;">
            <i class="el-icon-edit" />编辑
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="operating" label="操作" show-overflow-tooltip width="350">
        <template slot-scope="scope">
          <span @click="look(scope.$index, scope.row)" style="color:#0079fe;">
            <i class="el-icon-chat-line-round" />查看
          </span>
          <span @click="nofreeze(scope.$index, scope.row)" style="color:#0079fe;margin-left:10px;">
            <i class="el-icon-edit" />解冻
          </span>
          <span @click="extend(scope.$index, scope.row)" style="color:#0079fe;margin-left:10px;">
            <i class="el-icon-edit" />延长有效期
          </span>
          <span @click="remove(scope.$index, scope.row)" style="color:#0079fe;margin-left:10px;">
            <i class="el-icon-delete" />删除
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
            <!-- <el-dropdown-item command="1">同意</el-dropdown-item>
            <el-dropdown-item command="2">驳回</el-dropdown-item> -->
            <el-dropdown-item command="3">删除</el-dropdown-item>
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
    </div>
  </div>
</template>
<script>
export default {
  name: "PendingApplicationWorkbench",
  components: {},
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 30,
        total: 30,
        keyWord: ""
      },
      value: "更多操作",
      pagingState: true,
      isAgree: true,
      tableData: [
        {
          id: 1,
          Workbench: "金碧文华业主委员会工作台",
          properties: "主账号/成员账号",
          account: "卞涛",
          identityNumber: "430724199310111639",
          phone: "18673638655",
          organization: "金碧文华小区业主大会",
          validityPeriod: "2019.09.20~2020.09.20"
        },
        {
          id: 2,
          Workbench: "金碧文华业主委员会工作台",
          properties: "主账号/成员账号",
          account: "卞涛",
          identityNumber: "430724199310111639",
          phone: "18673638655",
          organization: "金碧文华小区业主大会",
          validityPeriod: "2019.09.20~2020.09.20"
        },
        {
          id: 3,
          Workbench: "金碧文华业主委员会工作台",
          properties: "主账号/成员账号",
          account: "卞涛",
          identityNumber: "430724199310111639",
          phone: "18673638655",
          organization: "金碧文华小区业主大会",
          validityPeriod: "2019.09.20~2020.09.20"
        },
        {
          id: 4,
          Workbench: "金碧文华业主委员会工作台",
          properties: "主账号/成员账号",
          account: "卞涛",
          identityNumber: "430724199310111639",
          phone: "18673638655",
          organization: "金碧文华小区业主大会",
          validityPeriod: "2019.09.20~2020.09.20"
        }
      ],
      multipleSelection: []
    };
  },
  watch: {},
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleCommand(options) {
      let selected = this.$refs.multipleTable.selection;
      let orgin = this.tableData;
      let last = [];

      if (options == 1) {
        orgin.forEach((item, index) => {
          selected.forEach((selectedItem, selectedIndex) => {
            selectedItem.result = 1;
          });
        });
      } else if (options == 2) {
        orgin.forEach((item, index) => {
          selected.forEach((selectedItem, selectedIndex) => {
            selectedItem.result = 2;
          });
        });
      } else if (options == 3) {
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
        this.tableData = last;
      }
    },
    remove(index, row) {
      let orgin = this.tableData;
      orgin.forEach((item, index) => {
        if (item.id == row.id) {
          this.tableData.splice(index, 1);
        }
      });
    },
    // 延长
    extend(index, row) {},
    nofreeze(index, row) {},
    look(index, row) {},
    edit(index, row) {},
    query() {},
    searchWord() {},
    clear() {
      this.$set(this.search, keyWord, "");
      this.query();
    },
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
.searchBox {
  display: flex;
  justify-content: flex-start;
}
.tableStyle {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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