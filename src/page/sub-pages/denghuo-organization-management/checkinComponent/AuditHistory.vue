<!--审核历史记录-->
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
      v-loading="loading"
      :header-cell-style="{background:'rgb(245,245,245)'}"
    >
      <el-table-column align="center" type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="组织名称" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="latitude" label="组织位置" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.latitude}},{{scope.row.longitude}}</span>
        </template>
      </el-table-column>
      <el-table-column label="组织备案文件" width="120">
        <template slot-scope="scope">
          <u>{{scope.row.filingDocument}}</u>
        </template>
      </el-table-column>
      <el-table-column label="申请人" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.applyUserName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="申请人证明文件" show-overflow-tooltip>
        <template slot-scope="scope">
          <u>{{scope.row.certifiedDocuments}}</u>
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="申请时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="dealTime" label="处理时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="state" label="处理结果" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.state===1?"同意":"驳回"}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="operator" label="操作人员" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" prop="operating" label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <span @click="get_remove(scope.row.uid)" style="color:#0079fe;">
            <i class="el-icon-delete" />删除
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="underTable">
      <div>
        <!-- <el-button @click="toggleSelection(tableData)">全选&反选</el-button> -->
        <!-- <el-button @click="toggleSelection()">取消选择</el-button> -->
        <!-- <el-dropdown style="margin-left:10px;" @command="handleCommand">
          <el-button style="width:105px;">
            更多操作
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu>
            <el-dropdown-item command="1">同意</el-dropdown-item>
            <el-dropdown-item command="2">驳回</el-dropdown-item>
            <el-dropdown-item command="3">删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>-->
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
import {
  getReviewOrganizations,
  deleteReviewOrganization
} from "./../../../../utils/api";

export default {
  name: "AuditHistory",
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
        keyWord: ""
      },
      tableData: [],
      multipleSelection: [],
      params: {
        page: 1, // 1 页数
        limit: 10, // 个数
        order: 2, // 排序方式，0：无，1：状态，2：创建日期
        sort: "asc", // 排序类型，desc：降序，asc：升序
        state: 2, // 0：无，1：待审核，2：已审核
        keyword: "" // 关键字
      }
    };
  },
  watch: {},
  mounted: function() {
    this._getReviewOrganizations();
  },
  methods: {
    _getReviewOrganizations(params = this.params) {
      this.loading = true;
      getReviewOrganizations(params).then(res => {
        console.log("+", res);
        this.tableData = res.data;
        this.search.total =
          Math.abs(res.total) / this.search.pageSize / 100000000;
        this.loading = false;
      });
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
    // 删除
    get_remove(uid) {
      this.$confirm("请确认,是否删除审核申请？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error"
      }).then(() => {
        deleteReviewOrganization({
          uid
        }).then(res => {
          console.log("success", res);
          if (res.success) {
            this.$message({
              type: "success",
              message: "删除审核申请成功!"
            });
            this._getReviewOrganizations();
          } else {
            this.$message({
              type: "error",
              message: "删除审核申请失败!"
            });
          }
        });
      });
    },
    // 搜索关键词
    searchWord() {
      this.params.keyword = this.search.keyWord;
      this._getReviewOrganizations();
    },
    // 重置
    clear() {
      this.params.keyword = "";
      this._getReviewOrganizations();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 分页条件改变
    handleSizeChange(pageSize) {
      this.search.pageSize = pageSize;
      this.params.limit = pageSize;
      this._getReviewOrganizations();
    },
    // 切换页数
    handleCurrentChange(pageNo) {
      this.search.pageNo = pageNo;
      this.params.page = pageNo;
      this._getReviewOrganizations();
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