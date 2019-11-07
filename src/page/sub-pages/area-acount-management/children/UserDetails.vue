<!--用户详情-->
<template>
  <el-dialog
    title="用户详情"
    :visible.sync="dialogVisible"
    width="60%"
    class="page"
    :before-close="handleClose"
  >
    <span class="boxTop">
      <span class="stick"></span>
      <span style="margin-left:10px;">基本资料</span>
    </span>
    <div class="formBox">
      <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="账户名称 :" prop="name" size="small">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="账号 :" prop="account" size="small">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="身份证 :" prop="passWord" size="small">
          <el-input v-model="ruleForm.passWord"></el-input>
        </el-form-item>
        <el-form-item label="联系方式 :" prop="department" size="small">
          <el-input v-model="ruleForm.department"></el-input>
        </el-form-item>
        <el-form-item label="所属部门 :" prop="job" size="small">
          <el-input v-model="ruleForm.job"></el-input>
        </el-form-item>
        <el-form-item label="权限 :" prop="phone" size="small">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="账户状态 :" prop="area" size="small">
          <el-input v-model="ruleForm.area"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "UserDetails",
  data() {
    return {
      dialogVisible: false,
      ruleForm: {}
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    open(value) {
      this.ruleForm = value;
      this.dialogVisible = true;
    }
  }
};
</script>
<style scoped>
.page {
  min-width: 850px;
}

.demo-ruleForm {
  width: 100%;
}

.el-input {
  max-width: 350px;
}

.formBox {
  width: 470px;
  margin: 0 auto;
}
.stick {
  height: 25px;
  width: 5px;
  background-color: #409eff;
}
.boxTop {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>