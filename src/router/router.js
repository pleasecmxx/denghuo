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
                    name: '快捷菜单',
                    redirect: '/SystemIndex',
                    component: Home,
                    children: [
                        {
                            path: '/SystemIndex',
                            name: "系统首页",
                            component: SystemIndex
                        },
                        {
                            path: '/OperationAcount',
                            name: "平台运营账户",
                            component: OperationAcount
                        },
                        {
                            path: '/DenghuoUserList',
                            name: "灯火端用户列表",
                            component: DenghuoUserList
                        },
                        {
                            path: '/OrganizationEnter',
                            name: '组织入住审核',
                            component: OrganizationEnter
                        },
                        {
                            path: '/DenghuoContentList',
                            name: '灯火端内容列表',
                            component: DenghuoContentList
                        },
                        {
                            path: '/WenMingUserList',
                            name: '文明端用户列表',
                            component: WenMingUserList
                        }
                    ]
                }, {
                    path: '/operation-acount-management',
                    name: '平台运营账号管理',
                    component: OperationAcountManagement,
                    children: [
                        {
                            path: '/NormalUserList',
                            name: '在用账户列表',
                            component: NormalUserList,
                        }, {
                            path: '/FrozenUserList',
                            name: '冻结账户列表',
                            component: FrozenUserList,
                        }, {
                            path: '/InvalidationUserList',
                            name: '失效账户列表',
                            component: InvalidationUserList,
                        }, {
                            path: '/CreateUserAcount',
                            name: '新建管理账户',
                            component: CreateUserAcount,
                        }, {
                            path: '/OptionLog',
                            name: '操作日志',
                            component: OptionLog,
                        },
                    ]
                }, {
                    path: '/denghuo-user-management',
                    name: '灯火端用户管理',
                    component: DenghuoUserManagement,
                    children: [
                        {
                            path: '/OwnerApplication',
                            name: '业主申请审核',
                            component: OwnerApplication,
                        }, {
                            path: '/DenghuoUserListManagement',
                            name: '用户列表',
                            component: DenghuoUserListManagement,
                        }
                    ]
                }, {
                    path: '/denghuo-organization-management',
                    name: '灯火端组织管理',
                    component: Organization,
                    children: [
                        {
                            path: '/OrganizationCheckin',
                            name: '组织入住审核',
                            component: OrganizationCheckin,
                        }, {
                            path: '/OrganizationList',
                            name: '组织列表',
                            component: OrganizationList,
                        }
                    ]
                }, {
                    path: '/denghuo-content-management',
                    name: '灯火端内容管理',
                    component: DenghuoContentManagement,
                    children: [
                        {
                            path: '/AdvertisingManagement',
                            name: '广告位管理',
                            component: AdvertisingManagement,
                        }, {
                            path: '/SystemMsgManagement',
                            name: '系统信息管理',
                            component: SystemMsgManagement,
                        }, {
                            path: '/ActivitiesManagement',
                            name: '活动管理',
                            component: ActivitiesManagement,
                        }
                    ]
                }, {
                    path: '/wenming-user-management',
                    name: '文明端用户管理',
                    component: WenMingUserManagement,
                    children: [
                        {
                            path: '/OrderCheck',
                            name: '订单审批',
                            component: OrderCheck,
                        }, {
                            path: '/BackCashCheck',
                            name: '回款审批',
                            component: BackCashCheck,
                        }, {
                            path: '/RefundCheck',
                            name: '退款审批',
                            component: RefundCheck,
                        }, {
                            path: '/ReimbursementCheck',
                            name: '报销审批',
                            component: ReimbursementCheck,
                        }, {
                            path: '/LeaveCheck',
                            name: '请假审批',
                            component: LeaveCheck,
                        }, {
                            path: '/BusinesstripCheck',
                            name: '出差审批',
                            component: BusinesstripCheck,
                        }, {
                            path: '/BorrowCheck',
                            name: '借款审批',
                            component: BorrowCheck,
                        }, {
                            path: '/InstructionsCheck',
                            name: '请示审批',
                            component: InstructionsCheck,
                        }, {
                            path: '/VisitCheck',
                            name: '拜访审批',
                            component: VisitCheck,
                        }
                    ]
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

