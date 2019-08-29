<!--业主大会组织-->
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
    <div class="file">
      <el-button type="primary">
        <span style="color:#fff;">导出</span>
      </el-button>
      <el-button type="primary">
        <span style="color:#fff;">导入</span>
      </el-button>
      <el-button type="primary">
        <span style="color:#fff;">新增</span>
      </el-button>
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
      <el-table-column label="组织属性" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.attribute}}</span>
        </template>
      </el-table-column>
      <el-table-column label="组织状态" show-overflow-tooltip>
        <template slot-scope="scope">
          <span class="status">
            <span
              :style="{backgroundColor:scope.row.status===1?'#4BD863':scope.row.status===2?'#FEC03D':'#FF3B31'}"
              class="point"
            ></span>
            <span
              style="margin-left:10px;"
            >{{scope.row.status===1?"有效":scope.row.status===2?"冻结":"失效"}}</span>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="joinTime" label="组织入驻时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="timeTo" label="有效期至" show-overflow-tooltip></el-table-column>
      <el-table-column prop="operating" label="操作" show-overflow-tooltip width="400">
        <template slot-scope="scope">
          <span @click="look(scope.$index, scope.row)" style="color:#0079fe;">
            <i class="el-icon-chat-line-round" />
            查看
          </span>
          <span @click="operation(scope.$index, scope.row)" style="color:#0079fe;margin-left:10px;">
            <i class="el-icon-chat-line-round" />
            操作日志
          </span>
          <span @click="extend(scope.$index, scope.row)" style="color:#0079fe;margin-left:10px;">
            <i class="el-icon-edit" />
            延长有效期
          </span>
          <span @click="freeze(scope.$index, scope.row)" style="color:#0079fe;margin-left:10px;">
            <i class="el-icon-edit" />
            冻结
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
            <!-- 存在疑问需求没清楚 -->
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
    </div>
  </div>
</template>
<script>
export default {
  name: "OwnersMeeting",
  components: {},
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 10,
        total: 5,
        keyWord: ""
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
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          attribute: "业主大会组织/民非组织/基层党支部",
          status: 1,
          joinTime: "2019-06-20",
          timeTo: "2020-06-20",
          id: 1
        },
        {
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          attribute: "业主大会组织/民非组织/基层党支部",
          status: 2,
          joinTime: "2019-06-20",
          timeTo: "2020-06-20",
          id: 2
        },
        {
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          attribute: "业主大会组织/民非组织/基层党支部",
          status: 3,
          joinTime: "2019-06-20",
          timeTo: "2020-06-20",
          id: 3
        },
        {
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          attribute: "业主大会组织/民非组织/基层党支部",
          status: 4,
          joinTime: "2019-06-20",
          timeTo: "2020-06-20",
          id: 4
        },
        {
          orgnzation: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          attribute: "业主大会组织/民非组织/基层党支部",
          status: 5,
          joinTime: "2019-06-20",
          timeTo: "2020-06-20",
          id: 5
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
    look(index, row){},
    operation(index, row){},
    extend(index, row){},
    freeze(index, row){},
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
.file {
  display: flex;
  justify-content: flex-end;
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