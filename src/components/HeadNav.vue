<template>
  <header class="header">
    <div class="header-container">
      <!-- 左侧 Logo 和标题 -->
      <div class="logo-section">
        <img src="../assets/logo.png" class="logo" alt="">
        <span class="title">Hope-Vue-Practice</span>
      </div>

      <!-- 右侧用户信息 -->
      <div class="user-section">
        <div class="userinfo">
          <img src="../assets/user.png" class="avatar" alt="">
          <div class="welcome">
            <span class="user-name">{{user.name}}</span>
          </div>
          <el-dropdown trigger="click" @command="setDialogInfo">
            <span class="el-dropdown-link">
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="info">个人信息</el-dropdown-item>
              <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <InfoShow ref="infoShow" />
  </header>
</template>

<script>
import InfoShow from "@/views/userInfo/InfoShow.vue";

export default {
  name: "HeadNav",
  components: {InfoShow},
  computed: {
    user() {
      return {
        name: '管理员',
        imgUrl: '../assets/logo.png'
      };
    }
  },
  methods: {
    setDialogInfo(cmditem) {
      if (!cmditem) {
        this.$message("菜单选项缺少command属性");
        return;
      }
      switch (cmditem) {
        case "info":
          this.showInfoList();
          break;
        case "logout":
          this.logout();
          break;
      }
    },
    showInfoList() {
      this.$refs.infoShow.showDialog();
    },
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
      this.$message.success('已退出登录')
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.header {
  width: 100%;
  height: 70px;
  background: linear-gradient(
    to right,
    map-get(map-get($colors, primary), light),
    map-get(map-get($colors, neutral), 100)
  );
  border-bottom: 1px solid map-get(map-get($colors, neutral), 300);
  box-shadow: map-get($shadows, sm);
}

.header-container {
  @include flex(row, space-between, center);
  height: 100%;
  padding: 0 map-get($spacing, xl);
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo {
  height: 36px;
  width: 36px;
  margin-right: 12px;
}

.title {
  font-size: 18px;
  font-weight: 500;
  color: #1e50a2;
  letter-spacing: 0.5px;
}

.user-section {
  display: flex;
  align-items: center;
}

.userinfo {
  display: flex;
  align-items: center;
  padding: 0 8px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(100, 150, 255, 0.1);
}

.welcome {
  margin-right: 12px;
  color: #335d99;
}

.welcome-text {
  font-size: 14px;
  margin-right: 4px;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: #1e50a2;
}

.el-dropdown-link {
  cursor: pointer;
  color: #335d99;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.el-dropdown-link:hover {
  background-color: rgba(255, 255, 255, 0.6);
}

:deep(.el-dropdown-menu) {
  border: none;
  box-shadow: 0 2px 12px rgba(100, 150, 255, 0.1);
}

:deep(.el-dropdown-menu__item) {
  color: #335d99;
  padding: 8px 20px;
}

:deep(.el-dropdown-menu__item:hover) {
  background-color: #f0f7ff;
  color: #1e50a2;
}

:deep(.el-icon-caret-bottom) {
  font-size: 12px;
  margin-left: 4px;
}
</style>
