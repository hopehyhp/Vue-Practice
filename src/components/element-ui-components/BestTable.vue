<template>
  <el-card class="table-card">
    <div class="table-container">
      <!-- 表格头部操作区 -->
      <div class="table-header">
        <div class="column-select">
          <span>展示列：</span>
          <el-select v-model="selectedValues" multiple placeholder="请选择" :collapse-tags="true">
            <el-option
                v-for="item in columnOptions"
                :key="item.key"
                :label="item.label"
                :value="item.key"
                :disabled="item.frozen"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <el-divider style="margin: 12px 0"/>
      <!-- 表格区域 -->
      <div class="table-body">
        <el-table
          ref="table"
          :data="tableData"
          v-loading="loading"
          border
          stripe
          height="100%"
          :highlight-current-row="true"
          @current-change="getSelectionRows">
          <template v-for="column in columnOptions">
            <el-table-column
              v-if="selectedValues.includes(column.key) && column.func"
              :key="column.key"
              :prop="column.key"
              :label="column.label">
              <template slot-scope="scope" v-if="column.func">
                <span>{{ column.func(scope.row[column.key]) }}</span>
              </template>
            </el-table-column>
            <el-table-column
              v-else-if="selectedValues.includes(column.key) && column.key !== 'action'"
              :key="column.key"
              :prop="column.key"
              :label="column.label"/>
            <el-table-column
              v-else-if="selectedValues.includes(column.key) && column.key === 'action'"
              :key="column.key"
              :prop="column.key"
              :label="column.label">
              <template slot-scope="scope">
                <el-button v-if="column.children?.includes('view')" type="text" size="small" @click="viewData(scope.row)">
                  查看
                </el-button>
                <el-button v-if="column.children?.includes('edit')" type="text" size="small" @click="editData(scope.row)">
                  修改
                </el-button>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'best-table',
  // 使用的组件
  components: {},
  // 过滤器
  filters: {},
  // 数据
  data() {
    return {
      loading: false,
      selectedValues: []
    };
  },
  props: {
    columnOptions: Object,
    tableData: Object,
    loading: Boolean
  },
  // 计算属性
  computed: {},
  // 监听
  watch: {
    selectedValues(newVal) {
      this.columnOptions.forEach(item => {
        item.value = newVal.includes(item.key);
      });
    }
  },
  // 初始化-页面还没渲染
  created() {
    this.columnOptions.forEach(item => {
      if (item.value) {
        this.selectedValues.push(item.key);
      }
    })
  },
  // 初始化-页面已经渲染完毕
  mounted() {
    // 监听窗口大小变化
    // window.addEventListener('resize', this.calculateTableHeight);
  },
  beforeDestroy() {
    // 移除事件监听
    // window.removeEventListener('resize', this.calculateTableHeight);
  },
  // 方法
  methods: {
    getSelectionRows() {
    },
    viewData(data) {
      this.$emit('viewData', data);
    },
    editData(data) {
      this.$emit('editData', data);
    }
  }
}
</script>

<style lang='scss' scoped>
.table-card {
  height: 100%;
  display: flex;
}

:deep(.el-card__body) {
  height: 100%;
  padding: 20px !important;
  flex: 1;
  display: flex;
}

.table-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.table-header {
  padding: 0 16px;
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
}

.column-select {
  display: flex;
  align-items: center;
  gap: 8px;
}

.table-body {
  flex: 1;
  position: relative;
  height: calc(100% - 70px); /* 减去头部和分割线的高度 */
}

:deep(.el-table) {
  height: 100%;
}

:deep(.el-table__header-wrapper) {
  background-color: #f5f7fa;
}

:deep(.el-table__header) th {
  background-color: #f5f7fa !important;
  color: #606266;
  padding: 12px 0;
  font-weight: 500;
  border-bottom: 1px solid #EBEEF5;
}

:deep(.el-table__body-wrapper) {
  overflow-y: auto;
}

:deep(.el-table__body) tr.current-row > td {
  background-color: #dbe3ff;
}

:deep(.el-select-dropdown__item.selected) {
  font-weight: 400 !important;
}

/* 调整表格样式 */
:deep(.el-table) {
  width: 100% !important;

  td {
    padding: 8px 0;
  }

  /* 修复表头样式 */
  th.is-leaf {
    border-bottom: 1px solid #EBEEF5;
  }

  /* 表头悬停效果 */
  th:hover {
    background-color: #eef1f6 !important;
  }

  /* 确保表格内容不会被压缩 */
  .el-table__body {
    width: 100% !important;
  }

  /* 调整表格行高 */
  .el-table__row {
    height: 40px;
  }
}

/* 自定义滚动条样式 */
:deep(.el-table__body-wrapper::-webkit-scrollbar) {
  width: 6px;
  height: 6px;
}

:deep(.el-table__body-wrapper::-webkit-scrollbar-thumb) {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.2);
}

:deep(.el-table__body-wrapper::-webkit-scrollbar-track) {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
}
</style>
