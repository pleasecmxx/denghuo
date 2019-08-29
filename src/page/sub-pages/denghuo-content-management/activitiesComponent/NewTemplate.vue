<!--新建模板-->
<template>
  <el-dialog
    title="提示"
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
        <el-form-item label="活动标题" prop="title" size="small">
          <el-input v-model="ruleForm.title" style="width:350px;" placeholder="请输入活动标题"></el-input>
        </el-form-item>
        <el-form-item label="人数设置" prop="personNum" size="small">
          <el-input v-model="ruleForm.personNum" style="width:350px;" placeholder="请输入人数"></el-input>
        </el-form-item>
        <el-form-item label="活动开始时间" prop="startTime" size="small">
          <el-date-picker v-model="ruleForm.startTime" type="datetime" placeholder="选择日期时间" style="width:350px;"></el-date-picker>
        </el-form-item>
        <el-form-item label="活动时长" prop="actvityTime" size="small">
          <el-input v-model="ruleForm.actvityTime" style="width:350px;" placeholder="请输入活动时长"></el-input>
        </el-form-item>
        <el-form-item label="重复状态" prop="status" size="small">
          <el-input v-model="ruleForm.status" style="width:350px;" placeholder="请输入重复状态"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: "NewTemplate",
  data() {
    return {
      dialogVisible: false,
      value1:"",
      ruleForm: {
        title: "",
        personNum: "",
        startTime: "",
        actvityTime: "",
        status: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入活动标题", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 0 到 20 个字符", trigger: "blur" }
        ],
        personNum: [
          { required: true, message: "请输入人数", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 0 到 20 个字符", trigger: "blur" }
        ],
        startTime: [
          { required: true, message: "请输入活动开始时间", trigger: "blur" },
        ],
        actvityTime: [
          { required: true, message: "请输入活动时长", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        status: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 0 到 20 个字符", trigger: "blur" }
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
</style>