<template>
  <div class="home-content">
    <div class="intro-module">
      <h2>本系统用途如下：</h2>
      <ul>
        <li>1. 学习Vue 2.x 结合element-ui 进行多组件的二次封装。</li>
        <li>2. 样式重构及层级梳理、CSS嵌套等多种样式问题的解决。</li>
        <li>3. 纯前端模式，数据采用JSON模拟。</li>
      </ul>
    </div>
    <div class="module">
      <h2>目前已实现组件</h2>
      <ul>
        <li v-for="component in implementedComponents" :key="component">{{ component }}</li>
      </ul>
    </div>
    <div class="module">
      <h2>待处理列表</h2>
      <ul>
        <li v-for="component in pendingComponents" :key="component">{{ component }}</li>
      </ul>
    </div>
    <div class="module">
      <h2>待更新</h2>
      <p>此模块待更新内容...</p>
    </div>
    <div class="module">
      <h2>待更新</h2>
      <p>此模块待更新内容...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  data() {
    return {
      implementedComponents: ['动态表格', '日历联动', '文件上传'],
      pendingComponents: ['下拉选择', '复选逻辑重构', '个人信息功能完善']
    };
  }
};
</script>

<style scoped>
.home-content {
  display: grid; /* 使用网格布局 */
  grid-template-columns: 1fr; /* 个人说明模块占满一行 */
  gap: 20px; /* 模块之间的间距 */
  padding: 20px;
  background-color: #f5f7fa; /* 背景颜色 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}

.intro-module {
  grid-column: span 2; /* 个人说明模块占满两列 */
  padding: 20px;
  background-color: #ffffff; /* 个人说明模块背景颜色 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* 模块阴影效果 */
}

.module {
  padding: 20px;
  background-color: #ffffff; /* 模块背景颜色 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* 模块阴影效果 */
  transition: transform 0.3s; /* 动画效果 */
  display: flex; /* 使用flex布局 */
  flex-direction: column; /* 垂直排列内容 */
}

.module:hover {
  transform: translateY(-5px); /* 悬停时的提升效果 */
}

h2 {
  margin-bottom: 10px;
  color: #333; /* 标题颜色 */
  font-size: 1.5em; /* 标题字体大小 */
  font-weight: 600; /* 标题字体加粗 */
}

ul {
  list-style-type: none; /* 去掉列表前的点 */
  padding: 0; /* 去掉内边距 */
}

li {
  padding: 8px 0; /* 列表项的上下内边距 */
  border-bottom: 1px solid #eaeaea; /* 列表项底部边框 */
  color: #555; /* 列表项字体颜色 */
}

li:last-child {
  border-bottom: none; /* 最后一个列表项去掉底部边框 */
}

/* 新增样式以确保模块在小屏幕上也能良好显示 */
@media (min-width: 600px) {
  .home-content {
    grid-template-columns: repeat(2, 1fr); /* 每行两个模块 */
  }
}
</style>
