<!--活动管理-->
<template>
  <div class="tableStyle">
    <div class="searchBox">
      <div class="searchLeft">
        <el-input v-model="search.keyWord" placeholder="搜索关键词" style="width:200px;"></el-input>
        <el-select v-model="search.orgnzation" placeholder="所属组织" style="margin-left:10px;">
          <el-option
            v-for="item in orgnzation"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="search.type" placeholder="事务类型" style="margin-left:10px;">
          <el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div style="margin-left:50px;">
        <el-button type="primary" @click="searchWord">
          <i style="color:#fff;" class="el-icon-search" />
          <span style="color:#fff;">查询</span>
        </el-button>
        <el-button @click="clear">
          <i class="el-icon-refresh-right" />
          <span>重置</span>
        </el-button>
      </div>
    </div>
    <!-- <div>
      <el-button @click="add" type="primary" class="addBox">
        <i style="color:#fff;" class="el-icon-plus" />
        <span style="color:#fff;">新建模板</span>
      </el-button>
    </div>-->
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
      <el-table-column prop="title" label="事务标题" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="company" label="所属组织/单位" show-overflow-tooltip></el-table-column>
      <el-table-column prop="type" label="事务类型" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Issued" label="发布单位" show-overflow-tooltip></el-table-column>
      <el-table-column prop="time" label="发布时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="status" label="事务状态" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.status==1?'未开始':scope.row.status==2?'进行中':scope.row.status==3?'已结束':'会签'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="operating" label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <span @click="look(scope.$index, scope.row)" style="color:#0079fe;">
            <i class="el-icon-chat-line-round" />查看详情
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
    <!-- <NewTemplate ref="NewTemplate"/> -->
  </div>
</template>
<script>
// import NewTemplate from './NewTemplate';
export default {
  name: "ContentSystem",
  components: {
    // NewTemplate
  },
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 30,
        total: 30,
        keyWord: "",
        orgnzation: "",
        type: ""
      },
      value: "更多操作",
      pagingState: true,
      isAgree: true,
      orgnzation: [
        {
          value: 1,
          label: "全部"
        },
        {
          value: 2,
          label: "已完成"
        },
        {
          value: 3,
          label: "未完成"
        },
        {
          value: 4,
          label: "已逾期"
        }
      ],
      type: [
        {
          value: 1,
          label: "全部"
        },
        {
          value: 2,
          label: "已完成"
        },
        {
          value: 3,
          label: "未完成"
        },
        {
          value: 4,
          label: "已逾期"
        }
      ],
      tableData: [
        {
          id: 1,
          title: "业委会选举",
          company: "金碧文华小区业主大会组织",
          type: "决策",
          Issued: "何永来",
          time: "2019.09.03",
          status: 1
        },
        {
          id: 2,
          title: "业委会选举",
          company: "金碧文华小区业主大会组织",
          type: "决策",
          Issued: "何永来",
          time: "2019.09.03",
          status: 2
        },
        {
          id: 3,
          title: "业委会选举",
          company: "金碧文华小区业主大会组织",
          type: "决策",
          Issued: "何永来",
          time: "2019.09.03",
          status: 3
        },
        {
          id: 4,
          title: "业委会选举",
          company: "金碧文华小区业主大会组织",
          type: "决策",
          Issued: "何永来",
          time: "2019.09.03",
          status: 4
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
    // 删除
    remove(index, row) {
      let orgin = this.tableData;
      orgin.forEach((item, index) => {
        if (item.id == row.id) {
          this.tableData.splice(index, 1);
        }
      });
    },
    // 查看
    look(index, row) {},
    add() {
      this.$refs.NewTemplate.open();
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
.searchLeft {
  display: flex;
}
.addBox {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
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