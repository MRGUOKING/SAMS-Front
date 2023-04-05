// 该文件是专门用于创建整个应用的路由器
import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "@/components/HelloWorld";
import TicketManager from "@/components/ticket/TicketManager";
import AddTicket from "@/components/ticket/AddTicket";
import TicketSidebar from "@/components/ticket/TicketSidebar";
import DiscountManager from "@/components/ticket/DiscountManager";
import Login from "@/components/login/Login";
import UserManager from "@/components/user/UserManager";
import UserSidebar from "@/components/user/UserSidebar";
import UserAnalyse from "@/components/user/UserAnalyse";
import OrderSidebar from "@/components/order/OrderSidebar";
import OrderManager from "@/components/order/OrderManager";
import OrderAnalyse from "@/components/order/OrderAnalyse";

const routes = [
    {
      path: '/',
      redirect: '/ticket/ticketManager',
    },
    {
        path: '/login',
        component: Login
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
    },
    {
        path: '/user',
        component: UserSidebar,
        children: [{
            path: 'userManager',
            name: 'userManager',
            component: UserManager
        }, {
            path: 'userAnalyse',
            name: 'userAnalyse',
            component: UserAnalyse
        }]
    },
    {
        path: '/order',
        component: OrderSidebar,
        children: [{
            path: 'orderManager',
            name: 'orderManager',
            component: OrderManager
        }, {
            path: 'orderAnalyse',
            name: 'orderAnalyse',
            component: OrderAnalyse
        }]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 创建router实例对象并暴露
export default router
