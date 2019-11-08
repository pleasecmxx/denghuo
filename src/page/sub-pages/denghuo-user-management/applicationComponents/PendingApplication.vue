<!--待审核申请-->
<template>
  <div class="tableStyle">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%;"
      @selection-change="handleSelectionChange"
      height="600"
      border
      stripe
      :header-cell-style="{background:'rgb(245,245,245)'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="用户姓名" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户身份证号" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.idCard}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号" show-overflow-tooltip></el-table-column>
      <el-table-column prop="orgnzation" label="组织名称" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.phone}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="putTime" label="提交时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="data" label="附件资料" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>
            <u>{{scope.row.data}}</u>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="事务类型" show-overflow-tooltip></el-table-column>
      <el-table-column prop="dealTime" label="处理时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="result" label="处理结果" show-overflow-tooltip></el-table-column>
      <el-table-column prop="operator" label="操作人员" show-overflow-tooltip></el-table-column>
      <el-table-column prop="operating" label="操作" show-overflow-tooltip min-width="120">
        <template slot-scope="scope">
          <span @click="remove(scope.$index, scope.row)" style="color:#0079fe;">
            <i class="el-icon-delete" />同意
          </span>
          <span @click="remove(scope.$index, scope.row)" style="color:#0079fe;">
            <i class="el-icon-delete" />驳回
          </span>
          <span @click="remove(scope.$index, scope.row)" style="color:#0079fe;">
            <i class="el-icon-delete" />删除
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="underTable">
      <div>
        <!-- <el-button @click="toggleSelection(tableData)">全选&反选</el-button>
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
        </el-dropdown> -->
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
  name: "PendingApplication",
  components: {},
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 30,
        total: 30
      },
      value: "更多操作",
      pagingState:true,
      tableData: [
        {
          name: "王小1",
          date: "2016-05-03",
          idCard: "王小1",
          phone: "13685472499",
          orgnzation: 1,
          putTime: "2019-08-27",
          data: "22.jpg",
          type: "无事务",
          dealTime: "2019-08-27",
          result: "成功",
          operator: "王小1",
          id: 1
        },
        {
          name: "王小2",
          date: "2016-05-03",
          idCard: "王小2",
          phone: "13685472499",
          orgnzation: 1,
          putTime: "2019-08-27",
          data: "22.jpg",
          type: "无事务",
          dealTime: "2019-08-27",
          result: "成功",
          operator: "王小2",
          id: 2
        },
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
    remove(index, row) {
      let orgin = this.tableData;
      orgin.forEach((item, index) => {
        if (item.id == row.id) {
          this.tableData.splice(index, 1);
        }
      });
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