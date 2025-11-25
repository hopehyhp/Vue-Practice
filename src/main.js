import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss';
import './styles/global.scss';
import axios from './http'
import {applyTheme, getInitialTheme} from './utils/theme';

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

Vue.use(ElementUI);

Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.config.silent = true
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
