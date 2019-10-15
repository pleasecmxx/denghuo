<!--待审核申请-->
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
      <el-table-column prop="name" label="组织名称" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="orgnzationPosition" label="组织位置" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="color:#0079fe;">{{scope.row.latitude}},{{scope.row.longitude}}</span>
        </template>
      </el-table-column>
      <el-table-column label="组织备案文件" width="120">
        <!-- <template slot-scope="scope">
          <u>{{scope.row.files[]}}</u>
        </template>-->
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
      <!-- 
      <el-table-column prop="dealTime" label="处理时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="result" label="处理结果" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.result===1?"同意":"驳回"}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="operator" label="操作人员" show-overflow-tooltip></el-table-column>
      -->
      <el-table-column prop="operating" label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <span @click="get_consent(scope.row.uid)" style="color:#0079fe;">
            <i class="el-icon-delete" />同意
          </span>
          <span @click="dialogVisible = true" style="color:#0079fe;">
            <i class="el-icon-delete" />驳回
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
    <el-dialog title="提示" :visible.sync="dialogVisible" modal-append-to-body="false" modal="false">
      <el-input type="textarea" :rows="2" placeholder="请输入驳回原因" v-model="textarea"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm_remove()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  getReviewOrganizations,
  reviewOrganization,
  deleteReviewOrganization
} from "./../../../../utils/api";

export default {
  name: "Auditrecord",
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
          name: "金币文化业主大会组织",
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
          name: "金币文化业主大会组织",
          orgnzationPosition: "位置坐标",
          filingDocument: "文件编号",
          applicant: "奉海明",
          certifiedDocuments: "文件编号",
          applyTime: "2019-06-20",
          dealTime: "2019-06-20",
          result: 1,
          operator: "老叶",
          id: 2
        }
      ],
      multipleSelection: [],
      params: {
        page: 0, // 1 页数
        limit: 10, // 个数
        order: 2, // 排序方式，0：无，1：状态，2：创建日期
        sort: "asc", // 排序类型，desc：降序，asc：升序
        state: 1, // 0：无，1：待审核，2：已审核
        keyword: "" // 关键字
      },
      dialogVisible: false,
      textarea: "" // 驳回原因
    };
  },
  watch: {},
  mounted: function() {
    this._getReviewOrganizations();
  },
  methods: {
    _getReviewOrganizations() {
      getReviewOrganizations(this.params).then(res => {
        console.log(res.data);
        this.tableData = res.data;
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
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 同意u
    get_consent(uid) {
      this.$confirm("请确认,是否同意审核申请?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
        // type: "warning"
      })
        .then(() => {
          // reviewOrganization({
          //   uid,
          //   result: 1 // 通过
          //   // reason: this.textarea, // 原因
          //   // name: "",
          //   // longitude: "",
          //   // latitude: ""
          // }).then(res => {
          //   console.log(res);
          //   // this.$message({
          //   //   type: 'success',
          //   //   message: '删除成功!'
          //   // });
          // });
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });
    },
    handleClose(done) {
      // this.$confirm("确认关闭？")
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
    },

    confirm_remove() {},
    // 驳回
    get_reject(uid) {
      this.dialogVisible = true;

      return;
      this.$confirm("请确认,是否驳回审核申请?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
        // type: "warning"
      })
        .then(_ => {
          reviewOrganization({
            uid,
            result: 2, // 不通过
            reason: "" // 原因
            // name: "",
            // longitude: "",
            // latitude: ""
          }).then(res => {
            console.log(res);
          });
        })
        .catch(_ => {});
    },
    // 删除
    get_remove(uid) {
      this.$confirm("请确认,是否删除审核申请？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
        // type: "warning"
      })
        .then(() => {
          deleteReviewOrganization({
            uid
          }).then(res => {
            console.log(res);
          });
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });

      // let orgin = this.tableData;

      // orgin.forEach((item, index) => {
      //   if (item.id == row.id) {
      //     this.tableData.splice(index, 1);
      //   }
      // });
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
<style scoped>
.v-modal {
  z-index: -1;
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