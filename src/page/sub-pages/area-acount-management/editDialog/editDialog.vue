<!--新建管理账户-->
<template>
  <el-dialog
    title="新建模板"
    :visible.sync="dialogVisible"
    width="40%"
    :before-close="handleClose"
    :modal="false"
  >
    <div class="formBox">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <span class="boxTop">
          <span class="stick"></span>
          <span style="margin-left:10px;">基本资料</span>
        </span>
        <el-form-item label="姓名" prop="name" size="small">
          <el-input v-model="ruleForm.name" style="width:350px;" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="登录账号" prop="account" size="small">
          <el-input v-model="ruleForm.account" style="width:350px;" placeholder="请输入登录账号"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="passWord" size="small">
          <el-input v-model="ruleForm.passWord" style="width:350px;" placeholder="请输入登录密码"></el-input>
        </el-form-item>
        <el-form-item label="所属部门" prop="department" size="small">
          <el-input v-model="ruleForm.department" style="width:350px;" placeholder="请输入所属部门"></el-input>
        </el-form-item>
        <el-form-item label="当前职务" prop="job" size="small">
          <el-input v-model="ruleForm.job" style="width:350px;" placeholder="请输入当前职务"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" size="small">
          <el-radio-group v-model="ruleForm.radio" style="width:350px;">
            <el-radio :label="1">保密</el-radio>
            <el-radio :label="2">男</el-radio>
            <el-radio :label="3">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone" size="small">
          <el-input v-model="ruleForm.phone" style="width:350px;" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="账户有效期至" prop="timeTo" size="small">
          <el-date-picker
            v-model="ruleForm.startTime"
            type="datetime"
            placeholder="选择日期时间"
            style="width:350px;"
          ></el-date-picker>
        </el-form-item>
        <span class="boxTop">
          <span class="stick"></span>
          <span style="margin-left:10px;">基本资料</span>
        </span>
        <el-form-item label="选择管理区域:" prop="area" size="small" style="margin-top:10px;">
          <el-input v-model="ruleForm.area" style="width:350px;" placeholder="请输入管理区域"></el-input>
        </el-form-item>
        <el-form-item label="选择管理模块:" prop="Module" size="small">
          <el-input v-model="ruleForm.Module" style="width:350px;" placeholder="请输入管理模块"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:150px;">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')" style="width:150px;">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>-->
  </el-dialog>
</template>
<script>
export default {
  name: "editDialog",
  data() {
    return {
      dialogVisible: false,
      value1: "",
      ruleForm: {
        name: "",
        account: "",
        passWord: "",
        department: "",
        job: "",
        sex: "",
        phone: "",
        timeTo: "",
        area: "",
        Module: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        account: [
          { required: true, message: "请输入登录账号", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        passWord: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        department: [
          { required: true, message: "请输入所属部门", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        job: [
          { required: true, message: "请输入当前职务", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        sex: [
          { required: true, message: "请输入性别", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        timeTo: [
          { required: true, message: "请输入账户有效期至", trigger: "blur" }
        ],
        area: [
          { required: true, message: "请输入管理区域", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        Module: [
          { required: true, message: "请输入管理模块", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    open(options) {
      this.dialogVisible = true;
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
.formBox {
  display: flex;
  justify-content: center;
}
.stick {
  height: 25px;
  width: 5px;
  background-color: #409eff;
}
.boxTop {
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
/* .el-form.demo-ruleForm {
  width: 100%;
} */
/* .el-form-item.is-required.el-form-item--small {
  display: flex;
  justify-content: center;
}
.el-form-item__content {
    margin-left: 0!important;
} */
/* .el-form-item--small .el-form-item__content {
  margin-left: 0px !important;
} */
</style>