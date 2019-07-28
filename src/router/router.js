import Vue from 'vue'
import VueRouter from 'vue-router'

//引入视图

Vue.use(VueRouter)

import {
    Home,
    Login,
    Register,
    RootView,
    OperationAcountManagement,
    DenghuoContentManagement,
    DenghuoUserManagement,
    Organization,
    WenMingUserManagement,
    ActivitiesManagement,
    AdvertisingManagement,
    SystemMsgManagement,
    OrganizationCheckin,
    OrganizationList,
    DenghuoUserListManagement,
    OwnerApplication,
    DenghuoContentList,
    DenghuoUserList,
    OperationAcount,
    OrganizationEnter,
    SystemIndex,
    WenMingUserList,
    CreateUserAcount,
    FrozenUserList,
    InvalidationUserList,
    NormalUserList,
    OptionLog,
    BackCashCheck,
    BorrowCheck,
    BusinesstripCheck,
    InstructionsCheck,
    LeaveCheck,
    OrderCheck,
    RefundCheck,
    ReimbursementCheck,
    VisitCheck
} from './../page'



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
                    path: '/operation-acount-management',
                    name: '账户',
                    component: OperationAcountManagement
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


