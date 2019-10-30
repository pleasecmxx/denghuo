<!--新建管理账户 -->
<template>
  <el-form :model="ruleForm" label-width="120px" ref="ruleForm">
    <div class="boxTop">
      <span class="stick"></span>
      <span style="margin-left:10px;">基本资料</span>
    </div>
    <div class="from_box">
      <el-form-item label="姓名" prop="name" size="small">
        <el-input v-model="ruleForm.name" style="width:350px;" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="account" size="small">
        <el-input v-model="ruleForm.account" style="width:350px;" placeholder="请输入登录账号"></el-input>
      </el-form-item>
      <el-form-item label="文明ID" prop="passWord" size="small">
        <el-input v-model="ruleForm.passWord" style="width:350px;" placeholder="请输入登录密码"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="department" size="small">
        <el-input v-model="ruleForm.department" style="width:350px;" placeholder="请输入所属部门"></el-input>
      </el-form-item>
      <el-form-item label="首次登录地区" prop="job" size="small">
        <el-input v-model="ruleForm.job" style="width:350px;" placeholder="请输入当前职务"></el-input>
      </el-form-item>
      <el-form-item label="常用登录地区" prop="sex" size="small">
        <el-input v-model="ruleForm.phone" style="width:350px;" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="平均登录时长" prop="phone" size="small">
        <el-input v-model="ruleForm.phone" style="width:350px;" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="最后登录时间" prop="phone" size="small">
        <el-input v-model="ruleForm.phone" style="width:350px;" placeholder="请输入手机号码"></el-input>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>

export default {
  name: "BasicInfo",

  data() {
    return {
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
      }
    };
  },
  methods: {
  }
};
</script>

<style scoped>


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
  margin: 20px 0;
}

.from_box {
  width: 470px;
  margin: 0 auto;
}

</style>