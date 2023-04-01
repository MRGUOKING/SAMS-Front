import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Vue Router
import VueRouter from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
app.use(VueRouter)
app.use(ElementPlus)

// 挂载
app.mount('#app')
