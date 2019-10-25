<!--待审核申请-->
<template>
  <div class="tableStyle">
    <div class="searchBox">
      <span>
        <el-input v-model="search.keyWord" placeholder="搜索关键词" style="width:500px;"></el-input>
      </span>
      <span style="margin-left:50px;">
        <el-button type="primary" @click="searchWord()">
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
      <el-table-column prop="orgnzationPosition" label="组织位置" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.latitude}},{{scope.row.longitude}}</span>
        </template>
      </el-table-column>
      <el-table-column label="组织备案文件" show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-for="(item,index) in scope.row.files" :key="index">{{item}}</span>
        </template>
      </el-table-column>
      <el-table-column label="申请人" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{scope.row.applyUserName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="申请人证明文件" show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-for="(item,index) in scope.row.certifiedDocuments" :key="index">{{item}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="申请时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="operating" label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <span @click="get_consent_lodaing(scope.row)" style="color:#0079fe;">
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
    <el-dialog title="申请详情" :visible.sync="dialogFormVisible">
      <el-form ref="form" label-width="120px" size="mini">
        <el-form-item label="组织名称">
          <span>{{form.name}}</span>
        </el-form-item>
        <el-form-item label="组织位置">
          <input v-model="form.latitude" class="my_input_class" placeholder="经度" type="text" />
          <input v-model="form.longitude" class="my_input_class" placeholder="纬度" type="text" />
        </el-form-item>
        <el-form-item label="组织备案文件">
          <span style="color:#0079fe;" v-for="(item,index) in form.files" :key="index">{{item}}</span>
        </el-form-item>
        <el-form-item label="申请人">
          <span>{{form.applyUserName}}</span>
        </el-form-item>
        <el-form-item label="申请人证明文件">
          <span
            style="color:#0079fe;"
            v-for="(item,index) in form.certifiedDocuments"
            :key="index"
          >{{item}}</span>
        </el-form-item>
        <el-form-item label="申请时间">
          <span>{{form.createdAt}}</span>
        </el-form-item>
        <el-form-item label="名称首字母">
          <input
            v-model="form.initials"
            class="my_input_class"
            placeholder="例如，芙蓉小区则为 FRXQ"
            type="text"
          />
        </el-form-item>
        <el-form-item label="行政编码">
          <input v-model="form.areaCode" class="my_input_class" placeholder="行政编码" type="text" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="formclone()">取 消</el-button>
        <el-button type="primary" @click="get_consent()">同 意</el-button>
      </div>
    </el-dialog>
    <el-dialog title="驳回原因" :visible.sync="rejecteddialog">
      <el-input type="textarea" :rows="2" placeholder="请输入驳回原因" v-model="textarea"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="rejectedclone()">取 消</el-button>
        <el-button type="primary" @click="get_reject()">驳 回</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  getReviewOrganizations,
  reviewOrganization,
  deleteReviewOrganization
} from "./../../../../utils/api";
import axios from "axios";

export default {
  name: "Auditrecord",

  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
        keyWord: ""
      },
      tableData: [],
      form: {},
      params: {
        page: 1, // 1 页数
        limit: 10, // 个数
        order: 2, // 排序方式，0：无，1：状态，2：创建日期
        sort: "asc", // 排序类型，desc：降序，asc：升序
        state: 1, // 0：无，1：待审核，2：已审核
        keyword: "" // 关键字
      },
      loading: false, // 请求loding
      dialogFormVisible: false, // 同意框
      rejecteddialog: false, // 驳回框
      rejecte_uid: "", // 驳回 uid
      textarea: "" // 驳回原因
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
    // 显示 驳回对话 model
    set_dialog(uid) {
      this.rejecte_uid = uid;
      this.rejecteddialog = true;
    },
    // 取消 驳回对话
    rejectedclone() {
      this.rejecte_uid = "";
      this.textarea = "";
      this.rejecteddialog = false;
    },
    // 取消同意对话框
    formclone() {
      this.dialogFormVisible = false;
      this.form = {};
    },
    rejected_consent() {},
    // 同意u
    get_consent_lodaing(data) {
      data.initials = "";
      data.areaCode = "";
      Object.assign(this.form, data);
      console.log(this.form);
      this.dialogFormVisible = true;
      this.getaroder(data);
    },
    /// 获取逆地理编码
    getaroder(data) {
      axios
        .get("https://restapi.amap.com/v3/geocode/regeo", {
          params: {
            key: "93dfb6497d286e77a3b98e6aca2e7341",
            location: data.longitude + "," + data.latitude
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.infocode != "10000") {
            return;
          }
          this.form.areaCode = res.data.regeocode.addressComponent.adcode;
        })
        .catch(err => {});
    },
    // 同意u
    get_consent(data = this.form ) {
      if (data.initials == "") {
        this.$message.error("请输入组织名称首字母");
        return;
      }
      if (data.areaCode == "") {
        this.$message.error("请输入行政编码");
        return;
      }
      this.$confirm("请确认,是否同意审核申请?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success"
      })
        .then(() => {
          reviewOrganization({
            uid: data.uid,
            result: 1, // 通过
            reason: "", // 原因
            name: data.name,
            areaCode: data.areaCode,
            initials: data.initials,
            longitude: data.longitude,
            latitude: data.latitude
          }).then(res => {
            console.log("通过", res);
            this.form = {};
            if (res.success) {
              this.$message({
                type: "success",
                message: "同意审核申请成功!"
              });
              this._getReviewOrganizations();
            } else {
              this.$message({
                type: "error",
                message: "同意审核申请失败!"
              });
            }
          });
        })
        .catch(() => {
          this.form = {};
        });
    },
    // 驳回
    get_reject() {
      if (this.textarea == "") {
        this.$message.error("请输入驳回原因");
        return;
      }
      reviewOrganization({
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
          this._getReviewOrganizations();
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
<style scoped>
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

.my_input_class {
  width: 90%;
  line-height: 28px;
  height: 28px;
  box-sizing: border-box;
  padding: 0 15px;
  border: 1px solid #dcdfe6;
  margin: 2px 0;
  outline-style: none;
}

.my_input_class:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
</style>