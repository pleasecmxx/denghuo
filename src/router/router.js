import Vue from 'vue'
import VueRouter from 'vue-router'

//引入视图

Vue.use(VueRouter)

import { RootView, Login, Register, Home, Acount } from './../page'



const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: '主界面',
            component: RootView,
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: '系统主页',
                    component: Home,
                },
                {
                    path: '/acount',
                    name: '账户',
                    component: Acount
                }
            ]
        }, {
            path: '/login',
            name: '登录',
            component: Login,
        }, {
            path: '/register',
            name: '注册账号',
            component: Register,
        },
    ]
})



export default router


