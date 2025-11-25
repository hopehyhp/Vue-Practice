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
        <div class="theme-toggle">
          <el-button
            class="theme-btn"
            size="mini"
            :type="currentTheme === 'dark' ? 'primary' : 'default'"
            :plain="currentTheme !== 'dark'"
            @click="toggleTheme"
          >
            <i :class="currentTheme === 'dark' ? 'el-icon-sunny' : 'el-icon-moon'"></i>
            <span>{{ themeLabel }}</span>
          </el-button>
        </div>
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
import {applyTheme, getInitialTheme, getThemeLabel} from '@/utils/theme';

export default {
  name: "HeadNav",
  components: {InfoShow},
  data() {
    return {
      currentTheme: getInitialTheme()
    };
  },
  computed: {
    user() {
      return {
        name: '管理员',
        imgUrl: '../assets/logo.png'
      };
    },
    themeLabel() {
      return getThemeLabel(this.currentTheme);
    }
  },
  methods: {
    toggleTheme() {
      const nextTheme = this.currentTheme === 'dark' ? 'standard' : 'dark';
      this.currentTheme = applyTheme(nextTheme);
      this.$message.success(`已切换为${getThemeLabel(this.currentTheme)}`);
    },
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
    120deg,
    var(--color-header-start),
    var(--color-header-end)
  );
  border-bottom: 1px solid var(--color-border);
  box-shadow: map-get($shadows, sm);
  transition: background var(--theme-transition), border-color var(--theme-transition);
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
  color: var(--color-header-text);
  letter-spacing: 0.5px;
  transition: color var(--theme-transition);
}

.user-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.theme-toggle {
  display: flex;
  align-items: center;
}

.theme-btn {
  border-color: transparent;
  background-color: var(--color-theme-btn-bg);
  color: var(--color-theme-btn-text);
  display: flex;
  align-items: center;
  gap: 4px;
  transition: background-color var(--theme-transition), color var(--theme-transition), border-color var(--theme-transition);

  &:hover {
    opacity: 0.85;
  }
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
  border: 2px solid var(--color-avatar-ring);
  box-shadow: 0 2px 4px rgba(100, 150, 255, 0.15);
  transition: border-color var(--theme-transition), box-shadow var(--theme-transition);
}

.welcome {
  margin-right: 12px;
  color: var(--color-text-muted);
  transition: color var(--theme-transition);
}

.welcome-text {
  font-size: 14px;
  margin-right: 4px;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-header-text);
  transition: color var(--theme-transition);
}

.el-dropdown-link {
  cursor: pointer;
  color: var(--color-text-muted);
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.el-dropdown-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

::v-deep .el-dropdown-menu {
  border: none;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.15);
}

::v-deep .el-dropdown-menu__item {
  color: var(--color-text);
  padding: 8px 20px;
}

::v-deep .el-dropdown-menu__item:hover {
  background-color: var(--color-menu-active-bg);
  color: var(--color-menu-active-text);
}

::v-deep .el-icon-caret-bottom {
  font-size: 12px;
  margin-left: 4px;
}
</style>

