<template>
  <div class="left-menu">
    <el-menu :default-active="activePath" class="menu">
      <el-menu-item index="index">
        <router-link to="/homepage">
          <i class="fa fa-margin fa-server"></i>
          <span>首页</span>
        </router-link>
      </el-menu-item>
      <template v-for="item in items">
        <el-submenu :index="item.path" :key="item.path">
          <template #title>
            <i :class="'fa fa-margin ' + item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
              v-for="(citem, cindex) in item.children"
              :key="cindex"
              :index="citem.path"
              class="submenu-item"
          >
            <router-link :to="citem.path">{{ citem.name }}</router-link>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      items: [
        {
          icon: "fa-money",
          name: "Element-ui 组件封装",
          path: "element",
          children: [
            {path: "table", name: "表格"},
            {path: "calendar", name: "日历"},
            {path: "test", name: "测试"},
            {path: "newCheck", name: "调查"}
          ]
        },
        {
          icon: "fa-asterisk",
          name: "天气信息",
          path: "info",
          children: [{path: "weather", name: "天气信息"}]
        },
        {
          icon: "fa-gamepad",
          name: "娱乐模块",
          path: "fun",
          children: [{path: "entertainment", name: "猜数字游戏"}]
        }
      ],
      activePath: ''
    };
  },
  mounted() {
    const {path} = this.$route;
    this.activePath = path.slice(1);
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.left-menu {
  width: 200px;
  border-right: 1px solid var(--color-border);
  background-color: var(--color-menu-bg);
  height: 100%;
  transition: background-color var(--theme-transition), border-color var(--theme-transition);
}

.menu {
  background-color: transparent;
  border-right: none;
  color: var(--color-menu-text);
}

::v-deep .el-menu-item,
::v-deep .el-submenu__title {
  height: 50px;
  line-height: 50px;
  padding-left: 20px !important;
  color: var(--color-menu-text);
  transition: color var(--theme-transition), background-color var(--theme-transition);
}

::v-deep .el-submenu .el-menu-item {
  height: 45px;
  line-height: 45px;
  padding-left: 55px !important;
  background-color: var(--color-menu-sub-bg);
  font-size: 13px;
}

::v-deep .el-submenu .el-menu-item:hover {
  background-color: var(--color-menu-active-bg);
}

::v-deep .el-submenu .el-menu-item::before {
  content: '';
  position: absolute;
  left: 40px;
  top: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--color-text-muted);
  transform: translateY(-50%);
  transition: background-color var(--theme-transition);
}

::v-deep .el-menu-item.is-active,
::v-deep .el-submenu .el-menu-item.is-active {
  background-color: var(--color-menu-active-bg) !important;
  color: var(--color-menu-active-text) !important;
}

.fa-margin {
  margin-right: 8px;
  width: 16px;
  text-align: center;
  color: inherit;
}

::v-deep .el-menu-item a,
::v-deep .el-submenu .el-menu-item a {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
