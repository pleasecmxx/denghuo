<!-- 地区 操作记录 -->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <div class="main_box">
        <div class="formBox">
          <div class="main_header">
            <span>
              <i class="el-icon-s-order"></i>
              <span>操作记录(地区)</span>
            </span>
            <span style="float:right">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
                size="small"
                style="width:200px;"
              ></el-date-picker>
              <el-button
                type="primary"
                style="margin-left:10px;"
                size="small"
                @click="exportexcel()"
              >
                <i class="el-icon-upload2" style="color:#fff;"></i>
                <span style="color:#fff;">导出</span>
              </el-button>
            </span>
          </div>
          <div style="margin:10px 20px 0 20px">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%;"
              height="500"
              border
              stripe
              :header-cell-style="{background:'rgb(245,245,245)'}"
            >
              <el-table-column prop="time" label="操作时间"></el-table-column>
              <el-table-column prop="peopele" label="操作人员"></el-table-column>
              <el-table-column prop="type" label="操作类型" show-overflow-tooltip></el-table-column>
              <el-table-column prop="wordName" label="字段名" show-overflow-tooltip></el-table-column>
              <el-table-column prop="oldWord" label="旧字段" show-overflow-tooltip></el-table-column>
              <el-table-column prop="newWord" label="新字段" show-overflow-tooltip></el-table-column>
              <el-table-column prop="other" label="备注" show-overflow-tooltip></el-table-column>
            </el-table>
            <div style="margin-top: 20px" class="underTable">
              <div style="float:right">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";

import { ExportExcel } from "./../../../utils/excel";

export default {
  name: "AreaOptionLog",
  components: {
    Levelbar
  },
  data() {
    return {
      search: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
        keyWord: ""
      },
      value1: "",
      tableData: [
        {
          id: 1,
          time: "2019-10-1",
          peopele: "某某",
          type: 1,
          wordName: "某某字段",
          oldWord: "旧字段",
          newWord: "新字段",
          other: "备注"
        }
      ]
    };
  },
  methods: {
    exportexcel() {
      ExportExcel(
        this.tableData,
        "平台运营账号操作记录表",
        [
          "操作时间",
          "操作人员",
          "操作类型",
          "字段名",
          "旧字段",
          "新字段",
          "备注"
        ],
        ["time", "peopele", "type", "wordName", "oldWord", "newWord", "other"]
      );
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
.main_box {
  width: 96%;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.formBox {
  width: 100%;
  height: 92%;
  overflow: auto;
  float: left;
  justify-content: center;
  background: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}

.main_header {
  width: 100%;
  float: left;
  line-height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
  margin: 0 0 20px 0;
}

.main_header span {
  font-weight: 900;
  font-size: 16px;
}

.header_right {
  font-size: 14px;
  color: #666666;
  float: right;
}

.header_right span {
  line-height: 60px;
  color: red;
}
</style>