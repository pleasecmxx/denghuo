<!--组织浏览记录-->
<template>
  <div class="tableStyle">
    <el-table
      :data="tableData"
      tooltip-effect="dark"
      height="600"
      border
      stripe
      style="width: 100%"
      :header-cell-style="{background:'rgb(245,245,245)'}"
    >
      <el-table-column prop="date" label="时间" :cell-style="{color:'red'}">
        <template slot-scope="scope">
          <span style="color:#409eff;">{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="组织名称">
        <template slot-scope="scope">
          <span style="color:#409eff;">{{scope.row.name}}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="underTable">
      <div></div>
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
  name: "BasicInformation",
  components: {},
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 30,
        total: 30
      },
      value: "更多操作",
      pagingState: true,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎"
        },
        {
          date: "2016-05-02",
          name: "王小虎"
        },
        {
          date: "2016-05-04",
          name: "王小虎"
        },
        {
          date: "2016-05-01",
          name: "王小虎"
        },
        {
          date: "2016-05-08",
          name: "王小虎"
        },
        {
          date: "2016-05-06",
          name: "王小虎"
        },
        {
          date: "2016-05-07",
          name: "王小虎"
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
</style>