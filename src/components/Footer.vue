<template>
  <div class="footer">
    <div class="footer-content">
      <span>© 2024 Hope Softeware Limited Company. All rights reserved.</span>
      <div class="footer-links">
        <a href="#">关于我们</a>
        <a href="#">联系方式</a>
        <a href="#">帮助中心</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style scoped>
.footer {
  height: 56px;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color var(--theme-transition), border-color var(--theme-transition);
}

.footer-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-muted);
  font-size: 14px;
}

.footer-links a {
  color: var(--color-text);
  text-decoration: none;
  margin-left: 20px;
  transition: color var(--theme-transition);
}

.footer-links a:hover {
  color: var(--color-accent);
}
</style>
