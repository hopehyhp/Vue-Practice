<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" title="个人信息" width="500px" :modal="false">
      <div class="dialog-content">
        <div class="avatar-container">
          <img src="../../assets/user.png" alt="用户头像" class="avatar" @click="changeAvatar" />
        </div>
        <div class="info-item">
          <span class="info-label">用户名:</span>
          <span class="info-value">{{ user.username }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">电话:</span>
          <span class="info-value">{{ user.phone }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">邮箱:</span>
          <span class="info-value">{{ user.email }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">性别:</span>
          <span class="info-value">{{ user.gender }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">备注:</span>
          <span class="info-value">{{ user.note }}</span>
        </div>
      </div>
      <div slot="footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="editInfo">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'InfoShow',
  data() {
    return {
      dialogVisible: false,
      user: {
        username: '管理员',
        phone: '13888888888',
        email: '1441499999@qq.com',
        gender: '男',
        note: '无',
        avatar: 'src/assets/user.png'
      }
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    editInfo() {
      this.$message.info('编辑信息功能尚未实现');
    },
    changeAvatar() {
      this.$message.info('修改头像功能尚未实现');
    }
  }
};
</script>

<style scoped>
.dialog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-container {
  margin-bottom: 20px;
}

.avatar {
  width: 80px; /* 设置头像宽度 */
  height: 80px; /* 设置头像高度 */
  border-radius: 50%; /* 使头像圆形 */
  cursor: pointer; /* 鼠标悬停时显示为手型 */
  border: 2px solid #eaeaea; /* 头像边框 */
}

.info-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fafafa; /* 每个信息项的背景颜色 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.info-label {
  font-weight: bold;
  color: #333;
}

.info-value {
  color: #666;
}
</style>
