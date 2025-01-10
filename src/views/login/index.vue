<template>
  <div class="login-container">
    <div class="background-overlay"></div>
    <div class="login-box">
      <div class="login-header">
        <img src="../../assets/logo.png" class="logo" alt="logo">
        <h2 class="title">Hope-Vue-Practice</h2>
      </div>

      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="login-form">
        <el-form-item prop="username">
          <el-input
              v-model="loginForm.username"
              prefix-icon="el-icon-user"
              placeholder="请输入用户名">
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              type="password"
              placeholder="请输入密码"
              @keyup.enter.native="handleLogin">
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-checkbox v-model="loginForm.remember">记住密码</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :loading="loading" @click="handleLogin" class="login-btn">
            登录
          </el-button>
          <el-button type="text" @click="showRegister" class="register-btn">
            注册账号
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 注册弹窗 -->
    <Register :visible.sync="registerVisible" @dialogClose="registerVisible = false"/>
  </div>
</template>

<script>
import Register from './Register.vue';

export default {
  name: 'LoginPage',
  components: {
    Register
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        remember: false
      },
      loading: false,
      registerVisible: false,
      // 登录表单验证规则
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          // TODO: 调用登录接口
          setTimeout(() => {
            this.loading = false;
            this.$message.success('登录成功');
            this.$router.push('/');
          }, 1000);
        }
      });
    },
    showRegister() {
      this.registerVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';

.login-container {
  height: 100vh;
  display: flex;
  justify-content: flex-end; /* 右侧对齐 */
  position: relative;
  background: url('../../assets/background-image.png') no-repeat center center; /* 替换为您的背景图片 */
  background-size: cover; /* 背景覆盖 */
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 黑色蒙版 */
  z-index: 1; /* 确保在背景之上 */
}

.login-box {
  margin-right: 200px;
  width: 400px;
  padding: map-get($spacing, xxl);
  background-color: rgba(255, 255, 255, 0.5); /* 半透明白色 */
  border-radius: map-get($radius, lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 2; /* 确保在蒙版之上 */
  margin-top: auto; /* 垂直居中 */
  margin-bottom: auto; /* 垂直居中 */
}

.login-header {
  @include flex(column, center, center);
  margin-bottom: map-get($spacing, xl);

  .logo {
    width: 64px;
    height: 64px;
    margin-bottom: map-get($spacing, md);
  }

  .title {
    font-size: map-get(map-get($font, size), xl);
    font-weight: map-get(map-get($font, weight), bold);
    color: map-get(map-get($colors, neutral), 800);
  }
}

.login-form {
  .login-btn {
    width: 100%;
    margin-bottom: map-get($spacing, sm);
  }

  .register-btn {
    width: 100%;
    background-color: rgba(100, 100, 100, 0.7); /* 浅深灰色背景 */
    color: #fff; /* 白色文字 */
    border-radius: map-get($radius, sm);
    margin-left: 0px;

    &:hover {
      background-color: rgba(100, 100, 100, 1); /* 悬停时变为不透明 */
      color: #fff; /* 保持白色文字 */
    }
  }
}

:deep(.el-input__inner) {
  height: 40px;
  line-height: 40px;
}

:deep(.el-form-item__content) {
  line-height: 40px;
}

:deep(.el-dialog__body) {
  padding: map-get($spacing, xl) map-get($spacing, xl) 0;
}

:deep(.el-dialog__footer) {
  padding: map-get($spacing, lg) map-get($spacing, xl);
}
</style>
