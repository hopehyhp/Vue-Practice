import WeatherForecast from '@/views/WeatherForecast.vue'; // 引入天气预报页面

const routes = [
    // 其他路由...
    {
        path: '/weather',
        name: 'WeatherForecast',
        component: WeatherForecast
    }
    // 其他路由...
]; 