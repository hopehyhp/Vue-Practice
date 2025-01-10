<template>
    <el-row class="menu_page">
         <el-col>
             <el-menu
                 :default-active="activePath"
                mode="vertical"
                background-color="#f6f8fa"
                text-color="#2c3e50"
                active-text-color="#1890ff"
                class="el-menu-vertical-demo">
                <router-link to="/homepage">
                    <el-menu-item index="index">
                        <i class="fa fa-margin fa-server"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                </router-link>
                <template v-for="item in items">
                    <el-submenu v-if="item.children" :index="item.path" :key="item.path" :default-active="activePath">
                        <template slot="title">
                            <i :class="'fa fa-margin '+item.icon"></i>
                            <span slot="title">{{item.name}}</span>
                        </template>
                        <router-link v-for="(citem,cindex) in item.children"
                            :to="citem.path" :key="cindex">
                            <el-menu-item
                                :index='citem.path'>
                                <span slot="title">{{citem.name}}</span>
                            </el-menu-item>
                        </router-link>
                    </el-submenu>
                </template>
             </el-menu>
         </el-col>
    </el-row>
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
          children: [{ path: "table", name: "表格" },{ path: "calendar", name: "日历" },{ path: "test", name: "测试" }]
        },
        // {
        //   icon: "fa-asterisk",
        //   name: "信息管理",
        //   path: "info",
        //   children: [{ path: "infoshow", name: "个人信息" }]
        // }
      ],
      activePath: ''
    };
  },
  methods: {
  },
  mounted() {
    const { meta, path } = this.$route;
    this.activePath = path.slice(1);
  }
};
</script>
<style scoped>
.menu_page {
  width: 200px;
  height: 100%;
  background-color: #f6f8fa;
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.08);
}
.el-menu {
  border: none;
  height: 100%;
  overflow-y: auto;
}
.el-menu::-webkit-scrollbar {
  width: 6px;
}
.el-menu::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}
.fa-margin {
  margin-right: 8px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 200px;
  height: 50px;
  line-height: 50px;
  padding: 0 20px !important;
}
.el-menu-item:hover {
  background-color: #e6f7ff !important;
  transition: background-color 0.3s;
}
.el-menu-item.is-active {
  background-color: #e6f7ff !important;
  border-right: 3px solid #1890ff;
  color: #1890ff !important;
}
.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
  color: inherit;
}
.el-submenu__title {
  height: 50px;
  line-height: 50px;
  position: relative;
}
.el-submenu__title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 1px;
  background: linear-gradient(to right, transparent, #e8edf3, transparent);
}
.el-submenu__title:hover {
  background-color: #e6f7ff !important;
}
.el-submenu .el-menu {
  background-color: #ffffff !important;
}
</style>
