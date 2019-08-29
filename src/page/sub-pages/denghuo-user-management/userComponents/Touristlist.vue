<!--游客列表-->
<template>
  <div class="tableStyle">
    <div class="searchBox">
      <span>
        <el-input v-model="search.keyWord" placeholder="搜索关键词" style="width:500px;"></el-input>
        <el-select v-model="search.status" placeholder="用户状态" style="margin-left:10px;">
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
        <span style="color:#fff;">导出</span>
      </el-button>
      <el-button type="primary">
        <span style="color:#fff;">导入</span>
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
      <el-table-column label="用户姓名" width="120">
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户身份证号" show-overflow-tooltip>
        <template slot-scope="scope">
          <span
            style="color:#0079fe;"
          >{{scope.row.idCard.slice(0,6)+"xxxxxx"+scope.row.idCard.slice(12)}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Identity" label="用户身份" show-overflow-tooltip></el-table-column>
      <el-table-column prop="orgnzation" label="加入组织的名称" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.orgnzation}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="lastInlineTime" label="最后上线时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="operator" label="最后操作人员" show-overflow-tooltip></el-table-column>
      <el-table-column prop="operating" label="操作" show-overflow-tooltip width="350">
        <template slot-scope="scope">
          <span style="color:#0079fe;">查看详情</span>
          <span style="margin-left:10px;color:#0079fe;">禁言/解除禁言</span>
          <span style="margin-left:10px;color:#0079fe;">加入黑名单</span>
          <span @click="remove(scope.$index, scope.row)" style="margin-left:10px;color:#0079fe;">
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
  name: "Touristlist",
  components: {},
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize:10,
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
          name: "黑小1",
          date: "2016-05-03",
          idCard: "4301119930705072x",
          phone: "13685472499",
          orgnzation: "某某组织",
          putTime: "2019-08-27",
          data: "22.jpg",
          type: "无事务",
          dealTime: "2019-08-27",
          result: "成功",
          operator: "王小1",
          id: 1,
          Identity: "某某人员",
          lastInlineTime: "2016-05-03"
        },
        {
          name: "王小2",
          date: "2016-05-03",
          idCard: "43072411111111639",
          phone: "13685472499",
          orgnzation: "某某组织",
          putTime: "2019-08-27",
          data: "22.jpg",
          type: "无事务",
          dealTime: "2019-08-27",
          result: "成功",
          operator: "王小1",
          id: 2,
          Identity: "某某人员",
          lastInlineTime: "2016-05-03"
        },
        {
          name: "王小3",
          date: "2016-05-03",
          idCard: "43072411111111639",
          phone: "13685472499",
          orgnzation: "某某组织",
          putTime: "2019-08-27",
          data: "22.jpg",
          type: "无事务",
          dealTime: "2019-08-27",
          result: "成功",
          operator: "王小1",
          id: 3,
          Identity: "某某人员",
          lastInlineTime: "2016-05-03"
        },
        {
          name: "王小4",
          date: "2016-05-03",
          idCard: "43072411111111639",
          phone: "13685472499",
          orgnzation: "某某组织",
          putTime: "2019-08-27",
          data: "22.jpg",
          type: "无事务",
          dealTime: "2019-08-27",
          result: "成功",
          operator: "王小1",
          id: 4,
          Identity: "某某人员",
          lastInlineTime: "2016-05-03"
        },
        {
          name: "王小5",
          date: "2016-05-03",
          idCard: "43072411111111639",
          phone: "13685472499",
          orgnzation: "某某组织",
          putTime: "2019-08-27",
          data: "22.jpg",
          type: "无事务",
          dealTime: "2019-08-27",
          result: "成功",
          operator: "王小1",
          id: 5,
          Identity: "某某人员",
          lastInlineTime: "2016-05-03"
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