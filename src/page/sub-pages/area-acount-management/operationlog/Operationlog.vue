<!--操作日志-->
<template>
  <el-dialog
    title="操作日志"
    :visible.sync="dialogVisible"
    width="60%"
    :before-close="handleClose"
  >
    <div class="mian">
      <div class="topBar">
        <span>
          <i class="el-icon-s-order" style="font-size:20px;"></i>
          <span style="margin-left:10px;">操作记录</span>
        </span>
        <span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            size="small"
            style="width:200px;"
          ></el-date-picker>
          <el-button type="primary" style="margin-left:10px;" size="small">
            <i class="el-icon-upload2" style="color:#fff;"></i>
            <span style="color:#fff;">导出</span>
          </el-button>
        </span>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;margin-top:10px;"
          @selection-change="handleSelectionChange"
          height="400"
          border
          stripe
          :header-cell-style="{background:'rgb(245,245,245)'}"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="time" label="操作时间"></el-table-column>
          <el-table-column prop="peopele" label="操作人员"></el-table-column>
          <el-table-column prop="type" label="操作类型" show-overflow-tooltip></el-table-column>
          <el-table-column prop="wordName" label="字段名" show-overflow-tooltip></el-table-column>
          <el-table-column prop="oldWord" label="旧字段" show-overflow-tooltip></el-table-column>
          <el-table-column prop="newWord" label="新字段" show-overflow-tooltip></el-table-column>
          <el-table-column prop="other" label="备注" show-overflow-tooltip></el-table-column>
        </el-table>
        <div style="margin-top: 20px" class="underTable">
          <div>
            <el-button @click="toggleSelection(tableData)">全选&反选</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
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
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "Operationlog",
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 30,
        total: 30,
        keyWord: ""
      },
      dialogVisible: false,
      value1: "",
      tableData: [
        {
          id: 1,
          time: "2019-10-1",
          peopele: "某某",
          type: 1,
          wordName: "某某字段",
          oldWord: "旧字段",
          newWord: "新字段",
          other: "备注"
        },
        {
          id: 2,
          time: "2019-10-1",
          peopele: "某某",
          type: 1,
          wordName: "某某字段",
          oldWord: "旧字段",
          newWord: "新字段",
          other: "备注"
        },
        {
          id: 3,
          time: "2019-10-1",
          peopele: "某某",
          type: 1,
          wordName: "某某字段",
          oldWord: "旧字段",
          newWord: "新字段",
          other: "备注"
        },
        {
          id: 4,
          time: "2019-10-1",
          peopele: "某某",
          type: 1,
          wordName: "某某字段",
          oldWord: "旧字段",
          newWord: "新字段",
          other: "备注"
        },
        {
          id: 5,
          time: "2019-10-1",
          peopele: "某某",
          type: 1,
          wordName: "某某字段",
          oldWord: "旧字段",
          newWord: "新字段",
          other: "备注"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
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
.mian {
  width: 100%;
}
.topBar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.underTable {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

</style>