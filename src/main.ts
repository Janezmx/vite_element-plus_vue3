import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@/assets/less/index.less'
import router from './router' // 路由
import { createPinia } from 'pinia' // 状态管理
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import moment from 'moment'
moment.locale('zh-cn')

// import {ElMessage} from 'element-plus' // 按需引入ElMessage
import 'element-plus/theme-chalk/el-message-box.css' // 需要用到的时候单独引入ElMessageBox
// import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
const global = app.config.globalProperties // 全局变量
global.$ELEMENT = {
    size: 'small', zIndex: 3000 // 设置element元素默认size
}

createApp(App).use(createPinia().use(piniaPluginPersistedstate)).use(router).mount('#app')
