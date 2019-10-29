<!-- 新增组织 -->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <div class="main_box">
        <div class="formBox">
          <div class="main_header">
            <i class="el-icon-s-order"></i>
            <span>新增组织</span>
            <div class="header_right">
              <span>*</span>为必填项
            </div>
          </div>
          <el-form
            :model="ruleForm"
            label-width="160px"
            :hide-required-asterisk="false"
            :rules="rules"
            ref="ruleForm"
          >
            <div class="boxTop">
              <span class="stick"></span>
              <span style="margin-left:10px;">主要信息</span>
            </div>
            <div class="from_box">
              <div class="row_box">
                <el-form-item label="组织名称" prop="name" size="small">
                  <el-input v-model="ruleForm.name" style="width:350px;" placeholder="请输入组织名称"></el-input>
                </el-form-item>
                <el-form-item label="组织地址" prop="address" size="small">
                  <el-input v-model="ruleForm.address" style="width:350px;" placeholder="请输入组织地址"></el-input>
                </el-form-item>
                <el-form-item label="组织属性" prop="type" size="small">
                  <el-select v-model="ruleForm.type" placeholder="请选择组织属性" style="width:350px;">
                    <el-option label="业主大会组织" value="1"></el-option>
                    <el-option label="民非组织" value="2"></el-option>
                    <el-option label="基层党支部" value="3"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="组织封面图片" prop="url" size="small">
                  <Myupload v-on:changefile="changefile" />
                </el-form-item>
              </div>
              <div class="row_box">
                <el-form-item label="组织名称首字母" prop="initials" size="small">
                  <el-input
                    v-model="ruleForm.initials"
                    style="width:350px;"
                    placeholder="请输入组织名称首字母"
                  ></el-input>
                </el-form-item>
                <el-form-item label="组织所在位置区号" prop="areaCode" size="small">
                  <el-input
                    v-model="ruleForm.areaCode"
                    style="width:350px;"
                    placeholder="请输入组织所在位置区号"
                  ></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="boxTop">
              <span class="stick"></span>
              <span style="margin-left:10px;">基本信息</span>
            </div>

            <div class="from_box">
              <div class="row_box">
                <el-form-item label="曾用名:" size="small" style="margin-top:10px;">
                  <el-input v-model="ruleForm.usedName" style="width:350px;" placeholder="请输入曾用名"></el-input>
                </el-form-item>
                <el-form-item label="参考均价:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.proposedPrice"
                    style="width:350px;"
                    placeholder="请输入参考均价"
                  ></el-input>
                </el-form-item>
                <el-form-item label="编号:" size="small" style="margin-top:10px;">
                  <el-input v-model="ruleForm.number" style="width:350px;" placeholder="请输入编号"></el-input>
                </el-form-item>
                <el-form-item label="门牌地址:" size="small" style="margin-top:10px;">
                  <el-input v-model="ruleForm.area" style="width:350px;" placeholder="请输入门牌地址"></el-input>
                </el-form-item>
                <el-form-item label="所属省市/地州/直辖市:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.cityName"
                    style="width:350px;"
                    placeholder="请输入所属省市/地州/直辖市"
                  ></el-input>
                </el-form-item>
                <el-form-item label="所属区/县:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.countyName"
                    style="width:350px;"
                    placeholder="请输入所属区/县"
                  ></el-input>
                </el-form-item>
                <el-form-item label="所属街道/乡镇:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.villageName"
                    style="width:350px;"
                    placeholder="请输入所属街道/乡镇"
                  ></el-input>
                </el-form-item>
                <el-form-item label="所属社区居委会/村:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.streetName"
                    style="width:350px;"
                    placeholder="请输入所属社区居委会/村"
                  ></el-input>
                </el-form-item>
                <el-form-item label="是否自管:" size="small" style="margin-top:10px;">
                  <el-select
                    v-model="ruleForm.selfManagement"
                    placeholder="请选择是否自管"
                    style="width:350px;"
                  >
                    <el-option label="是" value="1"></el-option>
                    <el-option label="否" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="物业服务企业名称:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.propertyName"
                    style="width:350px;"
                    placeholder="请输入物业服务企业名称"
                  ></el-input>
                </el-form-item>
                <el-form-item label="建设单位名称:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.construction"
                    style="width:350px;"
                    placeholder="请输入建设单位名称"
                  ></el-input>
                </el-form-item>
                <el-form-item label="规划住宅总数:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.residential"
                    style="width:350px;"
                    placeholder="请输入规划住宅总数"
                  ></el-input>
                </el-form-item>
                <el-form-item label="规划商业总户数:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.business"
                    style="width:350px;"
                    placeholder="请输入规划商业总户数"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="row_box">
                <el-form-item label="总建筑面积:" size="small" style="margin-top:10px;">
                  <el-input v-model="ruleForm.area" style="width:350px;" placeholder="请输入总建筑面积"></el-input>
                </el-form-item>
                <el-form-item label="绿化面积:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.greeningArea"
                    style="width:350px;"
                    placeholder="请输入绿化面积"
                  ></el-input>
                </el-form-item>
                <el-form-item label="物业用房位置:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.propertyAddress"
                    style="width:350px;"
                    placeholder="请输入物业用房位置"
                  ></el-input>
                </el-form-item>
                <el-form-item label="物业用房面积:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.propertyArea"
                    style="width:350px;"
                    placeholder="请输入物业用房面积"
                  ></el-input>
                </el-form-item>
                <el-form-item label="社区用房位置:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.communityAddress"
                    style="width:350px;"
                    placeholder="请输入社区用房位置"
                  ></el-input>
                </el-form-item>
                <el-form-item label="社区用房面积:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.communityArea"
                    style="width:350px;"
                    placeholder="请输入社区用房面积"
                  ></el-input>
                </el-form-item>
                <el-form-item label="其他用房名称:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.otherName"
                    style="width:350px;"
                    placeholder="请输入其他用房名称"
                  ></el-input>
                </el-form-item>
                <el-form-item label="其他用房位置:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.otherAddress"
                    style="width:350px;"
                    placeholder="请输入其他用房位置"
                  ></el-input>
                </el-form-item>
                <el-form-item label="其他用房面积:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.otherArea"
                    style="width:350px;"
                    placeholder="请输入其他用房面积"
                  ></el-input>
                </el-form-item>
                <el-form-item label="是否封闭管理:" size="small" style="margin-top:10px;">
                  <el-select
                    v-model="ruleForm.isClosed"
                    placeholder="请选择是否封闭管理"
                    style="width:350px;"
                  >
                    <el-option label="是" value="1"></el-option>
                    <el-option label="否" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="是否人车分流:" size="small" style="margin-top:10px;">
                  <el-select
                    v-model="ruleForm.isDiversion"
                    placeholder="请选择是否人车分流"
                    style="width:350px;"
                  >
                    <el-option label="是" value="1"></el-option>
                    <el-option label="否" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="小区人流出入口数:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.peopleFlowCount"
                    style="width:350px;"
                    placeholder="请输入小区人流出入口数"
                  ></el-input>
                </el-form-item>
                <el-form-item label="小区车流出入口数:" size="small" style="margin-top:10px;">
                  <el-input
                    v-model="ruleForm.carFlowCount"
                    style="width:350px;"
                    placeholder="请输入小区车流出入口数"
                  ></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="boxTop">
              <span class="stick"></span>
              <span style="margin-left:10px;">内部机构</span>
            </div>

            <div class="from_box">
              <div class="row_box">
                <el-button type="primary" style="width:150px;">添加内部机构</el-button>
              </div>
            </div>
            <div class="boxTop">
              <span class="stick"></span>
              <span style="margin-left:10px;">外部机构</span>
            </div>
            <div class="from_box">
              <div class="row_box">
                <el-button type="primary" style="width:150px;">添加外部机构</el-button>
              </div>
            </div>
            <div class="from_box">
              <div class="row_box" style="text-align: center;">
                <el-button type="primary" style="width:150px;">保存</el-button>
              </div>
              <div class="row_box" style="text-align: center;">
                <el-button type="primary" style="width:150px;">取消</el-button>
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import Myupload from "../../../components/common/myupload/myupload.vue";

export default {
  name: "AddOrganization",
  components: {
    Levelbar,
    Myupload
  },
  data() {
    return {
      ruleForm: {
        // uid: "",
        type: "", // 组织属性 123
        url: "", // 组织封面图片 'www.tupaing.com'
        // +++
        name: "", //规划名
        usedName: "", //曾用名
        initials: "", //拼音首字母
        areaCode: "", //区号
        proposedPrice: "", //参考价格
        number: "", //编号
        address: "", //地址
        cityName: "", //所属省市/地州/直辖市
        countyName: "", //所属区/县
        villageName: "", //所属街道/乡镇
        streetName: "", //所属居委会/村
        selfManagement: "", //是否自管
        propertyName: "", //物业名称
        construction: "", //建设名称
        residential: "", //住宅户数
        business: "", //商业户数
        area: "", //总建筑面积
        greeningArea: "", //绿化面积
        propertyAddress: "", // 物业用房地址
        propertyArea: "", //物业用房面积
        communityAddress: "", //社区用房位置
        communityArea: "", //社区用房面积
        otherName: "", //其它用房名称
        otherAddress: "", //其它用房地址
        otherArea: "", //其它面积
        isClosed: "", //是否封闭
        isDiversion: "", //是否人车分流
        peopleFlowCount: "", //人流入口
        carFlowCount: "" //车流入口
      },
      fromfile: "",
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        address: [
          { required: true, message: "请输入组织地址", trigger: "blur" }
        ],
        initials: [
          { required: true, message: "请输入组织名称首字母", trigger: "blur" }
        ],
        areaCode: [
          { required: true, message: "请输入组织所在位置区号", trigger: "blur" }
        ],
        type: [
          { required: true, message: "请输入组织所在位置区号", trigger: "blur" }
        ],
        url: [
          { required: true, message: "请输入组织所在位置区号", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 获取组织封面图片的file文件
    changefile(file) {
      this.fromfile = file;
    },
    open(options) {
      this.ruleForm = {
        title: "",
        personNum: "",
        startTime: "",
        actvityTime: "",
        status: ""
      };
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          debugger;
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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

.stick {
  height: 25px;
  width: 5px;
  background-color: #409eff;
}
.boxTop {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
}

.from_box {
  width: 100%;
  float: left;
  display: flex;
  justify-content: center;
  margin: 0 0 30px 0;
}

.row_box {
  width: 510px;
  float: left;
}
</style>