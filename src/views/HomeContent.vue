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
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(15, 23, 42, 0.06));
  border-radius: 16px;
  border: 1px solid var(--color-border);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
  transition: background var(--theme-transition), border-color var(--theme-transition);
}

.intro-module {
  grid-column: span 2;
  padding: 24px;
  background-color: var(--color-surface);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.18);
  color: var(--color-text);
  transition: background-color var(--theme-transition), border-color var(--theme-transition), color var(--theme-transition);
}

.module {
  padding: 20px;
  background-color: var(--color-surface);
  border-radius: 14px;
  border: 1px solid var(--color-border);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
  transition: transform 0.3s, background-color var(--theme-transition), border-color var(--theme-transition), color var(--theme-transition);
  display: flex;
  flex-direction: column;
  color: var(--color-text);
}

.module:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
}

h2 {
  margin-bottom: 10px;
  color: var(--color-heading);
  font-size: 1.5em;
  font-weight: 600;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 8px 0;
  border-bottom: 1px solid rgba(148, 163, 184, 0.35);
  color: var(--color-text-muted);
}

li:last-child {
  border-bottom: none;
}

@media (min-width: 600px) {
  .home-content {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
