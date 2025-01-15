<template>
  <el-card class="filter-card">
    <div slot="header" class="card-header header-pd-20">
      <div class="header-content">
        <div class="title-row">
          <span class="titleClass">天气信息</span>
          <span class="current-date">当前时间：{{ currentDate }}</span>
        </div>
        <div class="filter-row">
          <el-select v-model="form.location" placeholder="请选择地点" @change="fetchWeather">
            <el-option
                v-for="city in locations"
                :key="city.id"
                :label="city.name"
                :value="city.id"
            />
          </el-select>
        </div>
      </div>
    </div>
    <best-table :table-data="weatherData" :column-options="tableColumns" :loading="loading"/>
  </el-card>
</template>

<script>
import chinaProvincesCities from '../resources/json/china_provinces_cities.json';
import config from '../config'; // 引入配置文件
import BestTable from '../components/element-ui-components/BestTable.vue'; // 引入 BestTable 组件

export default {
  components: {
    BestTable // 注册 BestTable 组件
  },
  data() {
    return {
      form: {
        location: ''
      },
      locations: chinaProvincesCities,
      weatherData: [],
      loading: false,
      tableColumns: [ // 定义表格列
        {value: true, key: 'time', label: '时间', width: '180', func: this.formatTime},
        {value: true, key: 'text', label: '天气状况', width: '120'},
        {value: true, key: 'temperature', label: '温度 (°C)', width: '120'},
        {value: true, key: 'humidity', label: '湿度 (%)', width: '120'},
        {value: true, key: 'wind_direction', label: '风向', width: '120'},
        {value: true, key: 'wind_speed', label: '风速 (km/h)', width: '120'}
      ],
      currentDate: '',
    };
  },
  mounted() {
    this.updateCurrentDate();
    setInterval(this.updateCurrentDate, 1000);
  },
  methods: {
    async fetchWeather() {
      this.loading = true;
      const {location} = this.form;
      const apiKey = config.decryptApiKey(config.apiKey); // 解密 API 密钥

      // 使用代理的请求 URL
      const url = `/data/hourly?key=${apiKey}&location=${location}`;

      const response = await fetch(url, {
        method: 'GET', // 使用 GET 方法
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // 设置 Content-Type
        }
      });

      const data = await response.json();
      this.weatherData = data.result[0].hourly || []; // 获取返回的天气数据
      this.loading = false;
    },
    updateCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      this.currentDate = `${year}-${month}-${day}`;
    },
    formatTime(time) {
      const date = new Date(time);
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.weather-forecast {
  padding: 20px;
}

.weather-result {
  margin-top: 20px;
}

.current-weather {
  margin-bottom: 20px;
}

.current-weather-info {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background-color: #f0f8ff;
}

.current-weather-info img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
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

.current-date {
  margin-left: 20px;
  font-size: 16px;
}

</style>
