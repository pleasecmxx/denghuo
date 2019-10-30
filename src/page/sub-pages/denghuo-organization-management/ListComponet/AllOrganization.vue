<!--所有组织-->
<template>
  <div class="tableStyle">
    <div class="table_header">
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
        <el-button type="primary" class="all_button">
          <span>导出</span>
        </el-button>
        <el-button type="primary" class="all_button">
          <span>导入</span>
        </el-button>
        <router-link to="/AddOrganization">
          <el-button type="primary" class="all_button">
            <i class="el-icon-plus"></i>
            <span>新增</span>
          </el-button>
        </router-link>
      </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%;margin-top:10px;"
      height="600"
      border
      stripe
      :header-cell-style="{background:'rgb(245,245,245)'}"
    >
      <el-table-column prop="orgnzation" label="组织名称" show-overflow-tooltip></el-table-column>
      <el-table-column prop="orgnzationPosition" label="组织位置" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.orgnzationPosition}}</span>
        </template>
      </el-table-column>
      <el-table-column label="组织备案文件" width="120">
        <template slot-scope="scope">
          <u>{{scope.row.filingDocument}}</u>
        </template>
      </el-table-column>
      <el-table-column prop="attribute" label="组织属性" show-overflow-tooltip></el-table-column>
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
          <span
            v-if="scope.row.status !=3 "
            @click="freeze(scope.$index, scope.row)"
            style="color:#0079fe;margin-left:10px;"
          >
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
  name: "AllOrganization",
  components: {},
  props: {
    type: {
      default: 1
    }
  },
  created() {
    console.log(this.type);
  },
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 10,
        total: 5,
        keyWord: ""
      },
      pagingState: true,
      tableData: [
        {
          orgnzation: "农业业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          attribute: "业主大会组织/民非组织/基层党支部",
          status: 1,
          joinTime: "2019-06-20",
          timeTo: "2020-06-20",
          id: 1
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
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
    look(index, row) {
      this.$router.push("OrganizationDetails")
    },
    operation(index, row) {},
    extend(index, row) {},
    freeze(index, row) {},
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
  align-items: center;
}
.point {
  width: 6px;
  height: 6px;
  border-radius: 3px;
}
.table_header {
  width: 100%;
  float: left;
}
.searchBox {
  float: left;
}
.file {
  float: right;
}
.tableStyle {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.all_button {
  margin: 0 0 0 20px;
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