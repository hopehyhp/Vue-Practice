<template>
  <div class="quarter-picker">
    <el-popover
        v-model="visible"
        placement="bottom-start"
        trigger="click"
        ref="quarterPopover"
    >
      <div class="quarter-panel">
        <div class="quarter-panel-header">
          <i class="el-icon-arrow-left" @click="yearHandler()"></i>
          <span>{{ currentYear }} 年</span>
          <i class="el-icon-arrow-right" @click="currentYear++"></i>
        </div>
        <div class="quarter-panel-content">
          <div
              v-for="(option, index) in quarterOptions"
              :key="index"
              class="quarter-panel-item"
              :class="{ 'quarter-panel-item-active': option.value === value }"
              @click="selectQuarter(option.value)"
          >
            {{ option.label }}
          </div>
        </div>
      </div>
      <el-input
          slot="reference"
          v-model="displayValue"
          readonly
          style="width: 220px"
          placeholder="请选择季度"
      >
        <i slot="prefix" class="el-input__icon el-icon-date"></i>
      </el-input>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'QuarterPicker',
  data() {
    return {
      value: 1,
      visible: false,
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    displayValue() {
      return this.currentYear + '年 ' + this.quarterOptions.find(item => item.value === this.value)?.label;
    },
    quarterOptions() {
      return [
        { label: '第一季度', value: 1 },
        { label: '第二季度', value: 2 },
        { label: '第三季度', value: 3 },
        { label: '第四季度', value: 4 },
      ];
    },
  },
  methods: {
    selectQuarter(value) {
      this.value = value;
      this.$emit('change', {year: this.currentYear, quarter: value}); // 更新绑定的值
      this.visible = false; // 关闭弹出框
    },
    yearHandler(plus) {
      plus ? this.currentYear ++ : this.currentYear--;
    }
  },
};
</script>

<style scoped>
.quarter-panel {
  width: 200px;
  padding: 10px;
  box-sizing: border-box;
}
.quarter-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.quarter-panel-content {
  display: flex;
  flex-wrap: wrap;
}
.quarter-panel-item {
  width: 25%;
  text-align: center;
  flex-basis: 50%;
  padding: 12px;
  cursor: pointer;
}
.quarter-panel-item-active {
  color: #409eff;
}
</style>
