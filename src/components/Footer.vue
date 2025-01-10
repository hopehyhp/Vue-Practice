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
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.footer-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 14px;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  margin-left: 20px;
}

.footer-links a:hover {
  color: #1890ff;
}
</style>
