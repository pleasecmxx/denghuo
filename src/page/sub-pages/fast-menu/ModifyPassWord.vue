<!--修改密码-->
<template>
  <div class="inner-content flex">
    <Levelbar />
    <div class="content-top-box">
      <div class="content-top-box-header">
        <p class="content-top-box-header-title">修改密码</p>
        <span>
          <span class="span_red">*</span>此为必填项
        </span>
      </div>

      <div class="content">
        <div class="content_box">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="原密码：" prop="old_pass">
              <el-input type="password" v-model.number="ruleForm.old_pass" class="input_view"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                class="input_view"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                class="input_view"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="from_bottom" @click="submitForm('ruleForm')">
                <span>提交</span>
              </el-button>
              <el-button class="from_bottom" @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <!-- <div class="line">
            <span>原密码：</span>
            <div class="input_box">
              <el-input v-model="input" class="input_view" placeholder="请输入原登录密码"></el-input>
            </div>
          </div>
          <div class="line">
            <span>新密码：</span>
            <div class="input_box">
              <el-input v-model="input" class="input_view" placeholder="请输入新登录密码"></el-input>
            </div>
          </div>
          <div class="line">
            <span>确认密码：</span>
            <div class="input_box">
              <el-input v-model="input" class="input_view" placeholder="请确认新登录密码"></el-input>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Levelbar from "./../../../components/common/layout/Levelbar";

export default {
  name: "ModifyPassWord",
  components: {
    Levelbar
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("原密码不能为空"));
      }
      setTimeout(() => {
        if (value < 6) {
          callback(new Error("必须大于6位"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        old_pass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        old_pass: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          this.setpass();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    setpass() {
      console.log(this.ruleForm)
    }
  }
};
</script>

<style lang="less" scoped>
p {
  margin: 0;
}

.inner-content {
  width: calc(100% - 230px);
  height: calc(100% - 52px);
  min-width: 600px;
  flex-direction: column;
  justify-content: fle-start;
  align-items: center;
  padding-top: 68px;
}

.content-top-box {
  width: 80%;
  min-width: 800px;
  height: calc(100% - 18px);
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
  padding: 0 20px;
  line-height: 60px;
  span {
    float: right;
    font-size: 14px;
  }
  .span_red {
    color: red;
    float: left;
  }
}

.content-top-box-header-title {
  font-weight: 700;
  color: #666666;
  float: left;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.input_view {
  width: 300px;
}

.from_bottom {
  width: 140px;
  span {
    color: #fff;
  }
}
</style>