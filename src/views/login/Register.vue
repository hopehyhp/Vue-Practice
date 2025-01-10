<template>
  <el-dialog
    title="用户注册"
    :visible.sync="visible"
    width="400px"
    :close-on-click-modal="false"
    class="register-dialog"
  >
    <el-form
      :model="registerForm"
      :rules="registerRules"
      ref="registerForm"
      label-width="80px"
      class="register-form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="registerForm.username"
          placeholder="请输入用户名"
          class="input-field"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="registerForm.password"
          placeholder="请输入密码"
          class="input-field"
        ></el-input>
      </el-form-item>

      <el-form-item label="姓名" prop="name">
        <el-input
          v-model="registerForm.name"
          placeholder="请输入姓名"
          class="input-field"
        ></el-input>
      </el-form-item>

      <el-form-item label="手机号" prop="phone">
        <el-input
          v-model="registerForm.phone"
          placeholder="请输入手机号"
          class="input-field"
        ></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="registerForm.email"
          placeholder="请输入邮箱"
          class="input-field"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="handleRegister" :loading="registerLoading">
        注 册
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'Register',
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        name: '',
        phone: '',
        email: ''
      },
      registerLoading: false,
      registerRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, message: '用户名长度不能小于3位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: this.validatePhone, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    validatePhone(rule, value, callback) {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        callback(new Error('请输入正确的手机号'));
      } else {
        callback();
      }
    },
    onClose() {
      // eslint-disable-next-line vue/no-mutating-props
      this.visible = false;
      this.$emit('dialogClose');
    },
    handleRegister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.registerLoading = true;
          // TODO: 调用注册接口
          setTimeout(() => {
            this.registerLoading = false;
            this.$message.success('注册成功');
            this.visible = false;
          }, 1000);
        }
      });
    }
  }
};
</script>

<style scoped>
.register-dialog {
  .el-dialog__header {
    background-color: #f5f7fa; /* 头部背景颜色 */
    border-bottom: 1px solid #eaeaea; /* 底部边框 */
  }
}

.register-form {
  padding: 20px; /* 表单内边距 */
}

.input-field {
  border-radius: 4px; /* 输入框圆角 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* 输入框阴影 */
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
