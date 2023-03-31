// 该文件是专门用于创建整个应用的路由器
import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "@/components/HelloWorld";

const routes = [
    {
        path: '/test',
        component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 创建router实例对象并暴露
export default router
