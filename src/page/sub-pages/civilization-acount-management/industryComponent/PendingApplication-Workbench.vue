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
      v-loading="loading"
      :header-cell-style="{background:'rgb(245,245,245)'}"
    >
      <el-table-column align="center" type="selection" width="55"></el-table-column>
      <el-table-column prop="applyUserName" label="申请人" show-overflow-tooltip></el-table-column>
      <el-table-column label="申请人身份" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{ _identity(scope.row.identity)}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="applyUserPhone" label="申请人联系电话" show-overflow-tooltip></el-table-column>
      <el-table-column label="所属组织" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.type == 1 ? "会议筹备组" : "业主委员会"}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="stage" label="届数/筹备阶段" show-overflow-tooltip></el-table-column>
      <el-table-column prop="startDate" label="任期时间/筹备组成立时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="peopleCount" label="备案人数/筹备组人数" show-overflow-tooltip></el-table-column>
      <el-table-column prop="name" label="主任姓名/组长姓名" show-overflow-tooltip></el-table-column>
      <el-table-column prop="phone" label="联系电话" show-overflow-tooltip></el-table-column>
      <el-table-column label="备案公函" show-overflow-tooltip>
        <template slot-scope="scope">
          <span
            style="color:#0079fe;"
            @click="getimg(scope.row.files)"
          >{{ scope.row.files.length==0 ? "无" : "查看" + scope.row.files.length + "张" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="账户授权公函" show-overflow-tooltip>
        <template slot-scope="scope">
          <span
            style="color:#0079fe;"
            @click="getimg([scope.row.letterFile])"
          >{{ scope.row.letterFile ? "查看1张" : "无" }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="ReviewMan" label="审核人员" show-overflow-tooltip></el-table-column>
      <el-table-column prop="ReviewTime" label="审核时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="state" label="审核结果" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.state==1?"申请中" :scope.row.state==2 ?"申请通过":"申请未通过"}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="operating" width="180" label="操作">
        <template slot-scope="scope">
          <span @click="get_consent(scope.row.uid)" style="color:#0079fe;">
            <i class="el-icon-success" />同意
          </span>
          <span @click="set_dialog(scope.row.uid)" style="color:#0079fe;">
            <i class="el-icon-edit" />驳回
          </span>
          <span @click="get_remove(scope.row.uid)" style="color:#0079fe;">
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
    <el-dialog title="驳回原因" :visible.sync="rejecteddialog">
      <el-input type="textarea" :rows="2" placeholder="请输入驳回原因" v-model="textarea"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="rejectedclone()">取 消</el-button>
        <el-button type="primary" @click="get_reject()">驳 回</el-button>
      </div>
    </el-dialog>
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
  getReviewCommitteeWorks,
  reviewCommitteeWork,
  deleteReviewCommitteeWork
} from "../../../../utils/api";

// 导入组件
import ImageViewer from "element-ui/packages/image/src/image-viewer";

export default {
  name: "PendingApplicationWorkbench",
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
      multipleSelection: [],
      params: {
        page: 1, // 1 页数
        limit: 10, // 个数
        order: 2, // 排序方式，0：无，1：状态，2：创建日期
        sort: "asc", // 排序类型，desc：降序，asc：升序
        state: 1, // 0：无，1：待审核，2：已审核
        keyword: "" // 关键字
      },
      loading: false, // 请求loding
      previewSrcList: [], // 图片查看数组
      showViewer: false, // 图片查看显示关闭
      rejecteddialog: false, // 驳回框
      rejecte_uid: "", // 驳回 uid
      textarea: "" // 驳回原因
    };
  },
  mounted: function() {
    this._getReviewCommitteeWorks();
  },
  methods: {
    _getReviewCommitteeWorks(params = this.params) {
      this.loading = true;
      getReviewCommitteeWorks(params).then(res => {
        console.log("+", res);
        if (res) {
          this.tableData = res.data;
          this.search.total = Math.abs(res.total) / this.search.pageSize;
        }
        this.loading = false;
      });
    },
    // 显示 model
    set_dialog(uid) {
      this.$refs.model.shows(uid);
    },
    // model 输入回调  驳回原因 uid
    truecolne(text, uid) {
      this.get_reject(text, uid);
    },
    getimg(list) {
      this.previewSrcList = list;
      this.showViewer = true;
    },
    onClose(e) {
      this.showViewer = false;
      this.previewSrcList = [];
    },
    _identity(type) {
      switch (type) {
        case 1:
          return "筹备组业务代表";
          break;
        case 2:
          return "业主委员会成员";
          break;
        case 3:
          return "业委会授权工作人员";
          break;
        case 4:
          return "社区居委会工作人员";
          break;
        case 5:
          return "辖区政府工作人员";
          break;
        default:
          return "其它";
          break;
      }
    },
    // 取消 驳回对话
    rejectedclone() {
      this.rejecte_uid = "";
      this.textarea = "";
      this.rejecteddialog = false;
    },
    // 同意u
    get_consent(uid) {
      this.$confirm("请确认,是否同意审核申请?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success"
      })
        .then(() => {
          reviewCommitteeWork({
            uid,
            result: 1 // 通过
          }).then(res => {
            console.log("通过", res);
            if (res.success) {
              this.$message({
                type: "success",
                message: "同意审核申请成功!"
              });
              this._getReviewCommitteeWorks();
            } else {
              this.$message({
                type: "error",
                message: "同意审核申请失败!"
              });
            }
          });
        })
        .catch(() => {});
    },
    // 驳回
    get_reject() {
      if (this.textarea == "") {
        this.$message.error("请输入驳回原因");
        return;
      }
      reviewCommitteeWork({
        uid: this.rejecte_uid,
        result: 2, // 不通过
        reason: this.textarea // 原因
        // name: "",
        // longitude: "",
        // latitude: ""
      }).then(res => {
        if (res.success) {
          this.$message({
            type: "success",
            message: "驳回审核申请成功!"
          });
          this._getReviewCommitteeWorks();
        } else {
          this.$message({
            type: "error",
            message: "驳回审核申请失败!"
          });
        }
      });
    },
    // 删除
    get_remove(uid) {
      this.$confirm("请确认,是否删除审核申请？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error"
      })
        .then(() => {
          deleteReviewCommitteeWork({
            uid
          }).then(res => {
            console.log("success", res);
            if (res.success) {
              this.$message({
                type: "success",
                message: "删除审核申请成功!"
              });
              this.rejectedclone();
              this._getReviewCommitteeWorks();
            } else {
              this.rejectedclone();
              this.$message({
                type: "error",
                message: "删除审核申请失败!"
              });
            }
          });
        })
        .catch(() => {
              this.rejectedclone()
        });
    },
    // 搜索关键词
    searchWord() {
      this.params.keyword = this.search.keyWord;
      this._getReviewCommitteeWorks();
    },
    // 重置
    clear() {
      this.search.keyWord = "";
      this.params.keyword = "";
      this._getReviewCommitteeWorks();
    },
    // 分页条件改变
    handleSizeChange(pageSize) {
      this.search.pageSize = pageSize;
      this.params.limit = pageSize;
      this._getReviewCommitteeWorks();
    },
    // 切换页数
    handleCurrentChange(pageNo) {
      this.search.pageNo = pageNo;
      this.params.page = pageNo;
      this._getReviewCommitteeWorks();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
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