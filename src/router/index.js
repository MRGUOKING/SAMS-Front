// 该文件是专门用于创建整个应用的路由器
import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "@/components/HelloWorld";
import TicketManager from "@/components/ticket/TicketManager";
import AddTicket from "@/components/ticket/AddTicket";
import TicketSidebar from "@/components/ticket/TicketSidebar";
import DiscountManager from "@/components/ticket/DiscountManager";

const routes = [
    {
      path: '/',
      redirect: '/ticket/ticketManager',
    },
    {
        path: '/ticket',
        component: TicketSidebar,
        children: [
            {
                path: 'ticketManager',
                name: 'ticketManager',
                component: TicketManager
            },
            {
                path: 'discountManager',
                name: 'discountManager',
                component: DiscountManager
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
