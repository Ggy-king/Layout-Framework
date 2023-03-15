import { createApp } from 'vue'
// 引入ant
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

// 引入el
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入路由即vuex
import router from './router'
import store from './store'

// 引入公共样式
import './assets/style/reset.css'
import './assets/style/index.css'

import App from './App.vue'



createApp(App).use(store).use(router).use(Antd).use(ElementPlus).mount('#app')
