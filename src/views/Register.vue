<template>
  <div style="padding: 0; height: 100%; margin: 100px 0 0;">
    <el-row :gutter="12">
      <el-col :span="8"></el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span style="text-align: center; display: block"><b>注 册</b></span>
            </div>
          </template>
          <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="80px"
              class="demo-ruleForm"
          >
            <el-form-item label="真实姓名" prop="user_name">
              <el-input type="text" v-model="ruleForm.user_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nick_name">
              <el-input type="text" v-model="ruleForm.nick_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="e_mail">
              <el-input type="email" v-model="ruleForm.e_mail" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提 交</el-button>
              <el-button @click="resetForm('ruleForm')" style="float: right">重 置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <!--    <el-card style="display: flex; justify-content: center; align-items: center; margin-top: 100px">-->
    <!--    </el-card>-->
  </div>


</template>

<script>
export default {
  data() {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          callback();
        }
      }, 1000);
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    const checkUname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空！'))
      } else {
        callback();
      }
    };
    const checkNname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('昵称不能为空！'))
      } else {
        callback();
      }
    };
    const checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空！'))
      } else {
        callback();
      }
    };
    const checkUid = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空！'))
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
        user_name: '',
        nick_name:'',
        e_mail:'',
        user_id: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ],
        user_name: [
          { validator: checkUname, trigger: 'blur'}
        ],
        nick_name: [
          { validator: checkNname, trigger: 'blur'}
        ],
        e_mail: [
          { validator: checkEmail, trigger: 'blur'}
        ],
        user_id: [
          { validator: checkUid, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style scoped>

</style>