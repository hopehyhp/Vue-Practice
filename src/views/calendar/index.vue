<template>
  <el-card class="calendar-card">
    <div slot="header" class="card-header header-pd-20">
      <div class="header-content">
        <div class="title-row">
          <span class="titleClass">日历测试</span>
        </div>
        <div class="filter-row">
          <el-select v-model="className" placeholder="请选择班级" @change="onClassChange" filterable class="filter-item">
            <el-option
                v-for="item in classNameOptions"
                :key="item"
                :label="item"
                :value="item"
            />
          </el-select>
          <el-select v-model="instructorName" placeholder="请选择教师" @change="onInstructorChange" filterable
                     class="filter-item">
            <el-option
                v-for="item in instructorNameOptions"
                :key="item"
                :label="item"
                :value="item"
            />
          </el-select>
        </div>
      </div>
    </div>
    <el-calendar v-model="currentDate">
      <template slot="dateCell" slot-scope="{date, data}">
        <div class="calendar-day-content">
          <!-- 日期显示 -->
          <span class="day-number">{{ data.day.split('-').slice(2).join('-') }}</span>
          <!-- 课程内容 -->
          <div v-if="isSpecialDate(data.day)" class="course-list">
            <div v-for="(item, index) in getCourseName(data.day)" :key="index" class="course-item">
              <div class="course-name">{{ item.courseName }}</div>
              <div class="course-detail">{{ item.details }}</div>
            </div>
          </div>
        </div>
      </template>
    </el-calendar>
  </el-card>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      calendarData: require('../../resources/json/calendarData.json'),
      currentDate: new Date(),
      className: '',
      instructorName: '',
      classNameOptions: [],
      instructorNameOptions: [],
      targetList: []
    };
  },
  mounted() {
    this.getClassNameOptions();
    this.getInstructorNameOptions();
  },
  methods: {
    onClassChange() {
      this.instructorName = ''; // 清空另一个选择器
      if (!this.className) {
        this.targetList = [];
        return;
      }
      this.targetList = this.calendarData
          .filter(item => item.className === this.className)
          .map(data => ({
            courseName: data.courseName,
            date: data.date,
            period: data.period,
            className: data.className
          }));
    },
    onInstructorChange() {
      this.className = ''; // 清空另一个选择器
      if (!this.instructorName) {
        this.targetList = [];
        return;
      }
      this.targetList = this.calendarData
          .filter(item => item.instructor === this.instructorName)
          .map(data => ({
            courseName: data.courseName,
            className: data.className,
            period: data.period,
            date: data.date
          }))
          .sort((a, b) => a.period - b.period);
    },
    getClassNameOptions() {
      this.classNameOptions = this.getOptionsByKey(this.calendarData, 'className');
    },
    getInstructorNameOptions() {
      this.instructorNameOptions = this.getOptionsByKey(this.calendarData, 'instructor');
    },
    isSpecialDate(day) {
      return this.targetList.some(item => item.date === day);
    },
    getCourseName(day) {
      return this.targetList
          .filter(item => item.date === day)
          .map(item => ({
            courseName: item.courseName,
            details: `节次：${item.period}, 班级：${item.className}`
          }));
    },
    getOptionsByKey(data, key) {
      return [...new Set(data.map(item => item[key]))];
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';

.calendar-card {
  height: 100%;
}

.header-content {
  @include flex(column, flex-start, stretch);
  padding: map-get($spacing, sm) 0;
}

.title-row {
  margin-bottom: map-get($spacing, lg);

  .titleClass {
    font-size: map-get(map-get($font, size), md);
    font-weight: map-get(map-get($font, weight), medium);
    color: map-get(map-get($colors, neutral), 800);
    line-height: 1.5;
  }
}

.filter-row {
  @include flex(row, flex-start, center);
  gap: map-get($spacing, md);
  padding: map-get($spacing, xs) 0;
}

.filter-item {
  width: 160px;
}

:deep(.el-calendar) {
  background: none;

  .el-calendar__header {
    padding: map-get($spacing, md) 0;
  }

  .el-calendar__body {
    padding: 0;
  }

  .el-calendar-table {
    td {
      border: 1px solid #ebeef5;
    }

    .current {
      background: none;
    }
  }
}

.calendar-day-content {
  height: 100%;
  min-height: 100px;
  padding: map-get($spacing, xs);
}

.day-number {
  font-size: map-get(map-get($font, size), sm);
  color: map-get(map-get($colors, neutral), 700);
}

.course-list {
  margin-top: map-get($spacing, xs);
}

.course-item {
  margin-top: map-get($spacing, xs);

  .course-name {
    font-size: map-get(map-get($font, size), sm);
    color: map-get(map-get($colors, primary), dark);
    font-weight: map-get(map-get($font, weight), medium);
  }

  .course-detail {
    font-size: map-get(map-get($font, size), xs);
    color: map-get(map-get($colors, neutral), 600);
    margin-top: 2px;
  }
}
</style>
