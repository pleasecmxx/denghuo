<template>
  <div class="inner-content flex">
    <!-- <div class="top-menu">
      <div class="top-left">
        <p class="top-text">首页</p>
        <i class="el-icon-arrow-right"></i>
        <p class="top-text">快捷菜单</p>
        <i class="el-icon-arrow-right"></i>
        <p class="top-text">系统首页</p>
      </div>
      <div class="top-right flex">
        <i class="el-icon-arrow-left"></i>
        <i class="el-icon-refresh-left"></i>
      </div>
    </div>-->
    <Levelbar />

    <div class="content-area">
      <div class="content-top flex">
        <div class="content-top-box">
          <div class="content-top-box-header flex">
            <p class="content-top-box-header-title">快速新建</p>
          </div>
          <div class="content-top-box-body flex">
            <div class="top-item flex">
              <i class="el-icon-user top-item-img"></i>
              <p>新建运营账户</p>
            </div>
            <div class="top-item flex">
              <i class="el-icon-monitor top-item-img"></i>
              <p>新建官方活动</p>
            </div>
            <div class="top-item flex">
              <i class="el-icon-takeaway-box top-item-img"></i>
              <p>发布系统信息</p>
            </div>
          </div>
        </div>
        <div class="content-top-box">
          <div class="content-top-box-header flex">
            <p class="content-top-box-header-title">待审核</p>
          </div>
          <div class="content-top-box-body flex">
            <div class="top-item flex">
              <i class="el-icon-mobile top-item-img"></i>
              <p>业主申请审核</p>
            </div>
            <div class="top-item flex">
              <i class="el-icon-receiving top-item-img"></i>
              <p>组织入住审核</p>
            </div>
            <div class="top-item flex">
              <i class="el-icon-notebook-2 top-item-img"></i>
              <p>工作台申请审核</p>
            </div>
          </div>
        </div>
      </div>

      <div class="content-bottom flex">
        <div class="content-bottom-box">
          <div class="content-top-box-header flex">
            <p class="content-top-box-header-title">运营数据</p>
            <el-select v-model="value" placeholder="请选择" size="small">
              <el-option>今天</el-option>
              <el-option>昨天</el-option>
              <el-option>本周</el-option>
              <el-option>上周</el-option>
              <el-option>本月</el-option>
              <el-option>本季度</el-option>
              <el-option>上季度</el-option>
              <el-option>今年</el-option>
              <el-option>去年</el-option>
            </el-select>
          </div>
          <div class="content-bottom-box-body flex">
            <div class="bottom-item flex">
              <p>灯火端新增用户</p>
              <p class="num">200</p>
            </div>
            <div class="bottom-item flex">
              <p>新入驻组织</p>
              <p class="num">200</p>
            </div>
            <div class="bottom-item flex">
              <p>新增工作台</p>
              <p class="num">200</p>
            </div>
            <div class="bottom-item flex">
              <p>新增事务</p>
              <p class="num">200</p>
            </div>
            <div class="bottom-item flex">
              <p>新增活动</p>
              <p class="num">200</p>
            </div>
            <div class="bottom-item flex">
              <p>灯火端总用户</p>
              <p class="num">200</p>
            </div>
            <div class="bottom-item flex">
              <p>总组织</p>
              <p class="num">200</p>
            </div>
            <div class="bottom-item flex">
              <p>总工作台</p>
              <p class="num">200</p>
            </div>
            <div class="bottom-item flex">
              <p>总事务</p>
              <p class="num">200</p>
            </div>
            <div class="bottom-item flex">
              <p>总活动</p>
              <p class="num">200</p>
            </div>
          </div>
        </div>

        <div class="content-bottom-box">
          <div class="content-top-box-header flex">
            <p class="content-top-box-header-title">系统消息</p>
            <div class="content-top-box-header-botton">
              <button class="btn" @click="msgBoxShow = true">
                <i class="el-icon-plus i-btn"></i>
                <p class="btn-text">发布新消息</p>
              </button>

              <button class="btn">
                <p class="btn-text">查看更多</p>
                <i class="el-icon-arrow-right i-btn"></i>
              </button>
            </div>
          </div>
          <div class="content-bottom-box-body flex padding">
            <vuescroll style :ops="ops">
              <table class="bottom-table">
                <tr class="table-tr">
                  <td class="news">
                    <p class="p-news">消息内容</p>
                  </td>
                  <td class="time">
                    <i class="el-icon-time"></i>
                    <p class="p-time">2019-04-10 09:00</p>
                  </td>
                </tr>
                <tr class="table-tr">
                  <td class="news">
                    <p class="p-news">消息内容</p>
                  </td>
                  <td class="time">
                    <i class="el-icon-time"></i>
                    <p class="p-time">2019-04-10 09:00</p>
                  </td>
                </tr>
                <tr class="table-tr">
                  <td class="news">
                    <p class="p-news">消息内容</p>
                  </td>
                  <td class="time">
                    <i class="el-icon-time"></i>
                    <p class="p-time">2019-04-10 09:00</p>
                  </td>
                </tr>
                <tr class="table-tr">
                  <td class="news">
                    <p class="p-news">消息内容</p>
                  </td>
                  <td class="time">
                    <i class="el-icon-time"></i>
                    <p class="p-time">2019-04-10 09:00</p>
                  </td>
                </tr>
                <tr class="table-tr">
                  <td class="news">
                    <p class="p-news">消息内容</p>
                  </td>
                  <td class="time">
                    <i class="el-icon-time"></i>
                    <p class="p-time">2019-04-10 09:00</p>
                  </td>
                </tr>
                <tr class="table-tr">
                  <td class="news">
                    <p class="p-news">消息内容</p>
                  </td>
                  <td class="time">
                    <i class="el-icon-time"></i>
                    <p class="p-time">2019-04-10 09:00</p>
                  </td>
                </tr>
                <tr class="table-tr">
                  <td class="news">
                    <p class="p-news">消息内容</p>
                  </td>
                  <td class="time">
                    <i class="el-icon-time"></i>
                    <p class="p-time">2019-04-10 09:00</p>
                  </td>
                </tr>
                <tr class="table-tr">
                  <td class="news">
                    <p class="p-news">消息内容</p>
                  </td>
                  <td class="time">
                    <i class="el-icon-time"></i>
                    <p class="p-time">2019-04-10 09:00</p>
                  </td>
                </tr>
                <tr class="table-tr">
                  <td class="news">
                    <p class="p-news">消息内容</p>
                  </td>
                  <td class="time">
                    <i class="el-icon-time"></i>
                    <p class="p-time">2019-04-10 09:00</p>
                  </td>
                </tr>
              </table>
            </vuescroll>

            <!-- <el-table show-header="false" class="bottom-table" :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>-->
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="发布公告"
      :visible.sync="msgBoxShow"
      width="50%"
      :before-close="handleClose"
      :modal-append-to-body="false"
    >
      <div class="msgBox">
        <div class="select">
          <p>选择栏目：</p>
          <el-select size="small" v-model="value" placeholder="请选择">
            <el-option
              v-for="sl in selectCategory"
              :key="sl.value"
              :label="sl.label"
              :value="sl.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select">
          <p>公告标题：</p>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <quill-editor></quill-editor>
        <!-- <div class="select">
          <quill-editor></quill-editor>
        </div>-->
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="msgBoxShow = false">取 消</el-button>
        <el-button type="primary" @click="msgBoxShow = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import vuescroll from "vuescroll";
import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    vuescroll,
    "quill-editor": quillEditor,
    Levelbar
  },
  data() {
    return {
      msgBoxShow: false,
      selectCategory: [
        { value: "", label: "企业动态" },
        { value: "", label: "内部分享" },
        { value: "", label: "热点新闻" }
      ],
      input: "",
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {
          size: "4px",
          opacity: 0.6,
          background: "#999"
        }
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleClose(done) {
      done();
    }
  }
};
</script>

<style scoped>
.inner-content {
  width: calc(100% - 230px);
  height: calc(100% - 52px);
  min-width: 600px;
  flex-direction: column;
  justify-content: fle-start;
  align-items: center;
  padding-top: 68px;
}

.top-menu {
  position: fixed;
  left: 230px;
  top: 52px;
  right: 0px;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 20px; */
  /* padding-right: px; */
  padding: 0 20px;
  box-shadow: 0 0 4px 1px rgba(209, 209, 209, 0.9);
  box-sizing: border-box;
}

.top-left {
  min-width: 300px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.top-right {
  width: 80px;
  height: 50px;
  /* background-color: tomato; */
  /* z-index: 999999; */
  justify-content: flex-end;
  align-items: center;
}

.top-text {
  margin: 3px;
  cursor: pointer;
  transition: all ease-in 0.25s;
}

.top-text:hover {
  color: #0079fe;
}
.el-icon-refresh-left {
  font-weight: 600;
  margin-left: 16px;
}

.el-icon-arrow-left {
  font-weight: 600;
}

.content-area {
  width: 1300px;
  height: 100%;

  /* background-color: #fff; */
  overflow-y: hidden;
  /* overflow-x: hidden; */
}

.content-top {
  width: calc(100% - 5px);
  height: 200px;
  justify-content: space-between;
  align-items: center;
}

.content-top-box {
  width: calc(50% - 6px);
  height: 200px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  border-radius: 1px;
  border: 1px solid #e2e2e2;
}

.content-top-box-header {
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #e2e2e2;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.content-top-box-body {
  width: 100%;
  height: 140px;
  justify-content: space-around;
  align-items: center;
}

.top-item {
  width: 120px;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.top-item:hover {
  background-color: #f2f2f2;
  border: 1px solid #e2e2e2;
}

.content-top-box-header-title {
  font-weight: 700;
  color: #666666;
}

.top-item-img {
  font-size: 48px;
  margin-bottom: 5px;
}

.content-bottom {
  width: calc(100% - 5px);
  height: 400px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.content-bottom-box {
  width: calc(50% - 6px);
  height: 400px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  border-radius: 1px;
  border: 1px solid #e2e2e2;
}

.content-bottom-box-body {
  width: 100%;
  height: 340px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 24px 0;
}

/* .bottom-item-top {
    
} */

.bottom-item {
  width: 110px;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #0079fe */
}

.num {
  /* line-height: 48px; */
  font-size: 28px;
  margin-top: 20px;
}

.bottom-table {
  /* show-header: false; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* align-items: center; */
  align-self: flex-start;
  margin: 0;
  /* padding: 0 13px; */
}

.table-tr {
  /* height: 45px; */
  display: flex;
  justify-content: space-between;
  padding: 0 13px;
  border-bottom: 1px solid #ececec;
}

.news {
  height: 45px;
  width: 428px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.news:hover > .p-news {
  opacity: 0.6;
}

.time {
  width: 156px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.el-icon-time {
  margin-right: 5px;
}

.p-news {
  font-weight: 700;
  transition: all ease 0.25s;
}

.p-time {
  font-size: 13px;
  color: #999999;
}

.content-top-box-header-botton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -24px;
}

.btn {
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13px;
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  cursor: pointer;
  transition: all ease 0.25s;
}

.btn:hover > i,
.btn:hover > p {
  color: #0079fe;
}

.btn:hover {
  border: 1px solid #0079fe;
  box-shadow: 0 0 2px #0079fe;
}

.btn-text {
  font-size: 12px;
  color: #666666;
  margin: 1px;
  transition: all ease 0.25s;
}

.i-btn {
  font-size: 14px;
  transition: all ease 0.25s;
}

.padding {
  padding: 0;
}

.msgBox {
  height: 400px;
  /* background-color: #0079fe; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.select {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}

.el-input {
  width: 400px;
}
</style>
