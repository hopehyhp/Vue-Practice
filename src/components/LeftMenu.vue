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
        <el-submenu :index="item.path">
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
  name: "leftmenu",
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

<style scoped>
.left-menu {
  width: 200px;
  border-right: 1px solid #e6e6e6;
}

.menu {
  background-color: #f5f5f5;
}

/* 一级菜单样式 */
.el-menu-item {
  height: 50px;
  line-height: 50px;
  padding-left: 20px !important;
}

/* 一级菜单标题样式 */
.el-submenu__title {
  padding-left: 20px !important;
}

/* 子菜单样式 */
.el-submenu .el-menu-item {
  height: 45px;
  line-height: 45px;
  padding-left: 55px !important; /* 调整为相对于一级菜单多缩进一些 */
  background-color: #fafafa;
  font-size: 13px;
}

/* 子菜单hover效果 */
.el-submenu .el-menu-item:hover {
  background-color: #f0f0f0;
}

/* 调整子菜单前的小圆点位置 */
.el-submenu .el-menu-item::before {
  content: '';
  position: absolute;
  left: 40px; /* 调整小圆点的位置，使其在一级菜单文字右侧 */
  top: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #909399;
  transform: translateY(-50%);
}

/* 激活状态的菜单项 */
.el-menu-item.is-active,
.el-submenu .el-menu-item.is-active {
  background-color: #ecf5ff !important;
  color: #409EFF !important;
}

/* 图标样式 */
.fa-margin {
  margin-right: 8px;
  width: 16px;
  text-align: center;
}

/* 链接样式 */
.el-menu-item a,
.el-submenu .el-menu-item a {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
