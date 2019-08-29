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
      :header-cell-style="{background:'rgb(245,245,245)'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="orgnzation" label="组织名称" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.orgnzation}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="orgnzationPosition" label="组织位置" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.orgnzationPosition}}</span>
        </template>
      </el-table-column>
      <el-table-column label="组织备案文件" width="120">
        <template slot-scope="scope">
          <u>{{scope.row.filingDocument}}</u>
        </template>
      </el-table-column>
      <el-table-column label="申请人" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.applicant}}</span>
        </template>
      </el-table-column>
      <el-table-column label="申请人证明文件" show-overflow-tooltip>
        <template slot-scope="scope">
          <u>{{scope.row.certifiedDocuments}}</u>
        </template>
      </el-table-column>
      <el-table-column prop="applyTime" label="申请时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="dealTime" label="处理时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="result" label="处理结果" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.result===1?"同意":"驳回"}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="operator" label="操作人员" show-overflow-tooltip></el-table-column>
      <el-table-column prop="operating" label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <span @click="remove(scope.$index, scope.row)" style="color:#0079fe;">
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
            <el-dropdown-item command="1">同意</el-dropdown-item>
            <el-dropdown-item command="2">驳回</el-dropdown-item>
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
  name: "AuditHistory",
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
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          applyTime: "2019-06-20",
          dealTime: "2019-06-20",
          result: 0,
          operator: "老叶",
          id: 1
        },
        {
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          applyTime: "2019-06-20",
          dealTime: "2019-06-20",
          result: 1,
          operator: "老叶",
          id: 2
        },
        {
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          applyTime: "2019-06-20",
          dealTime: "2019-06-20",
          result: 0,
          operator: "老叶",
          id: 3
        },
        {
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          applyTime: "2019-06-20",
          dealTime: "2019-06-20",
          result: 1,
          operator: "老叶",
          id: 4
        },
        {
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          applyTime: "2019-06-20",
          dealTime: "2019-06-20",
          result: 0,
          operator: "老叶",
          id: 5
        },
        {
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          applyTime: "2019-06-20",
          dealTime: "2019-06-20",
          result: 1,
          operator: "老叶",
          id: 6
        },
        {
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          applyTime: "2019-06-20",
          dealTime: "2019-06-20",
          result: 2,
          operator: "老叶",
          id: 7
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