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
      <el-table-column prop="applicant" label="申请人" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.applicant}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="applicantID" label="申请人身份" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.applicantID}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="applicantPhone" label="申请人联系电话" width="120"></el-table-column>
      <el-table-column label="所属组织" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.belongTo}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="area" label="服务范围/管理范围" show-overflow-tooltip></el-table-column>
      <el-table-column prop="company" label="企业名称/单位名称" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Socialcreditcode" label="社会信用代码/组织机构代码" show-overflow-tooltip></el-table-column>
      <el-table-column prop="position" label="地理位置" show-overflow-tooltip></el-table-column>
      <el-table-column prop="businesslicense" label="营业执照/组织机构代码证" show-overflow-tooltip></el-table-column>
      <el-table-column prop="authorizationletter" label="账户授权公函" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Teamprofile" label="团队面貌图" show-overflow-tooltip></el-table-column>
      <el-table-column prop="ReviewMan" label="审核人员" show-overflow-tooltip></el-table-column>
      <el-table-column prop="ReviewTime" label="审核时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="AuditResults" label="审核结果" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.AuditResults==1?"同意":"驳回"}}</span>
        </template>
      </el-table-column>
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
          applicant: "卞涛",
          applicantID: "业主会成员",
          applicantPhone: 18673638655,
          area: "长沙金碧文华小区",
          company: "万顺物业有限公司",
          Socialcreditcode: 16168138516383131,
          position: "坐标",
          businesslicense: "文件编号",
          authorizationletter: "文件编号",
          Teamprofile: "文件编号",
          ReviewMan: "卞涛",
          ReviewTime: "2019-10-12",
          belongTo: "业主会",
          AuditResults: 1
        },
        {
          id: 2,
          applicant: "卞涛",
          applicantID: "业主会成员",
          applicantPhone: 18673638655,
          area: "长沙金碧文华小区",
          company: "万顺物业有限公司",
          Socialcreditcode: 16168138516383131,
          position: "坐标",
          businesslicense: "文件编号",
          authorizationletter: "文件编号",
          Teamprofile: "文件编号",
          ReviewMan: "卞涛",
          ReviewTime: "2019-10-12",
          belongTo: "业主会",
          AuditResults: 0
        },
        {
          id: 3,
          applicant: "卞涛",
          applicantID: "业主会成员",
          applicantPhone: 18673638655,
          area: "长沙金碧文华小区",
          company: "万顺物业有限公司",
          Socialcreditcode: 16168138516383131,
          position: "坐标",
          businesslicense: "文件编号",
          authorizationletter: "文件编号",
          Teamprofile: "文件编号",
          ReviewMan: "卞涛",
          ReviewTime: "2019-10-12",
          belongTo: "业主会",
          AuditResults: 1
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