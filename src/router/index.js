// 该文件是专门用于创建整个应用的路由器
import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "@/components/HelloWorld";
import TicketManager from "@/components/ticket/TicketManager";
import AddTicket from "@/components/ticket/AddTicket";
import TicketSidebar from "@/components/ticket/TicketSidebar";

const routes = [
    {
      path: '/',
      redirect: '/ticket',
    },
    {
        path: '/ticket',
        component: TicketSidebar,
        children: [
            {
                path: 'testChildren',
                name: 'testChildren',
                component: TicketManager
            },
            {
                path: 'addTicket',
                name: 'addTicket',
                component: AddTicket
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 创建router实例对象并暴露
export default router
