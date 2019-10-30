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
      height="600"
      border
      stripe
      v-loading="loading"
      :header-cell-style="{background:'rgb(245,245,245)'}"
    >
      <el-table-column prop="name" label="组织名称" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="latitude" label="组织位置" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.latitude}},{{scope.row.longitude}}</span>
        </template>
      </el-table-column>
      <el-table-column label="组织备案文件" show-overflow-tooltip>
        <template slot-scope="scope">
          <span
            style="color:#0079fe;"
            @click="getimg(scope.row.files)"
          >{{ scope.row.files.length==0 ? "无" : "查看" + scope.row.files.length + "张" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="申请人" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.applyUserName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="申请人证明文件" show-overflow-tooltip>
        <template slot-scope="scope">
        <span
            style="color:#0079fe;"
            @click="getimg(scope.row.identityFiles)"
          >{{ scope.row.identityFiles.length ==0 ? "无" : "查看" + scope.row.identityFiles.length + "张"}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="申请时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="updatedAt" label="处理时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="state" label="处理结果" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.state===1?"同意":"驳回"}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作人员" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.identity===1?"监管机构":"组织成员"}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="operating" label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <span @click="get_remove(scope.row.uid)" style="color:#0079fe;">
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
    <image-viewer
      :z-index="999999"
      v-if="showViewer"
      :on-close="onClose"
      :url-list="previewSrcList"
    />
  </div>
</template>
<script>
import {
  getReviewOrganizations,
  deleteReviewOrganization
} from "./../../../../utils/api";
// 导入组件
import ImageViewer from "element-ui/packages/image/src/image-viewer";

export default {
  name: "AuditHistory",
  components: {
    ImageViewer
  },
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
        keyWord: ""
      },
      tableData: [],
      params: {
        page: 1, // 1 页数
        limit: 10, // 个数
        order: 2, // 排序方式，0：无，1：状态，2：创建日期
        sort: "asc", // 排序类型，desc：降序，asc：升序
        state: 2, // 0：无，1：待审核，2：已审核
        keyword: "" // 关键字
      },
      loading: false,
      previewSrcList: [], // 图片查看数组
      showViewer: false // 图片查看显示关闭
    };
  },
  mounted: function() {
    this._getReviewOrganizations();
  },
  methods: {
    _getReviewOrganizations(params = this.params) {
      this.loading = true;
      getReviewOrganizations(params).then(res => {
        console.log("+", res);
        if (res) {
          this.tableData = res.data;
          this.search.total = Math.abs(res.total) / this.search.pageSize;
        }
        this.loading = false;
      });
    },
    getimg(list) {
      this.previewSrcList = list;
      this.showViewer = true;
    },
    onClose(e) {
      this.showViewer = false;
      this.previewSrcList = [];
    },
    // 删除
    get_remove(uid) {
      this.$confirm("请确认,是否删除审核申请？", "提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "error"
      })
        .then(() => {
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
        })
        .catch(() => {});
    },
    // 搜索关键词
    searchWord() {
      this.params.keyword = this.search.keyWord;
      this._getReviewOrganizations();
    },
    // 重置
    clear() {
      this.search.keyWord = "";
      this.params.keyword = "";
      this._getReviewOrganizations();
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