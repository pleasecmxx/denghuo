<!--修改资料-->
<template>
  <div class="app-container">
    <Levelbar />
    <div class="app-body">
      <div class="parentBox">
        <div class="topAvatarBox">
          <span class="avatar">
            <i class="el-icon-user-solid" style="color:#fff;font-size:120px;"></i>
          </span>
          <router-link class="slider-menu" tag="div" to="/ModifyAvatarHome">
            <div style="color:#0079FE;margin-top:10px;">更改头像</div>
          </router-link>
        </div>
        <ChangeAvatar ref="ChangeAvatar" />
        <div class="bottom">
          <span class="boxTop">
            <span class="stick"></span>
            <span style="margin-left:10px;">基本资料</span>
          </span>
          <div class="bottomForm">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="姓名" prop="name" size="small">
                <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="登录账号" prop="account" size="small">
                <el-input v-model="ruleForm.account" placeholder="请输入登录账号" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="所属部门" prop="department" size="small">
                <el-input v-model="ruleForm.department" placeholder="请输入所属部门" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="当前职务" prop="job" size="small">
                <el-input v-model="ruleForm.job" placeholder="请输入当前职务" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                  <el-radio label="保密"></el-radio>
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="手机号码" prop="phone" size="small">
                <el-input v-model="ruleForm.phone" placeholder="请输入手机号码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" style="width:150px;">
                  <i class="el-icon-circle-check" style="color:#fff;"></i> 提交
                </el-button>
                <el-button @click="resetForm('ruleForm')" style="width:150px;">
                  <i class="el-icon-refresh-right"></i> 重置
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Levelbar from "./../../../components/common/layout/Levelbar";
import ChangeAvatar from "./component/ChangeAvatar";

export default {
  name: "ModifyData",
  components: {
    Levelbar,
    ChangeAvatar
  },
  data() {
    return {
      ruleForm: {
        name: "",
        account: "",
        department: "",
        job: "",
        sex: "保密",
        phone: ""
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
        ]
      }
    };
  },
  methods: {
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
    },
    editAvatar() {
      this.$refs.ChangeAvatar.open();
    }
  }
};
</script>

<style>
.parentBox {
  width: 96%;
  background-color: #fff;
  padding: 15px 15px 0 15px;
  height: 92%;
  border: 1px solid #dcdfe6;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  overflow-y: auto;
}
.topAvatarBox {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.avatar {
  width: 150px;
  height: 150px;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bottomForm {
  margin-right: 100px;
  margin-top: 20px;
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
</style>
