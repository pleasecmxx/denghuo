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
    CivilizationAcountManagement,
    CivilizationContentManagement,
    Organization,
    WenMingUserManagement,
    ActivitiesManagement,
    AdvertisingManagement,
    SystemMsgManagement,
    OrganizationCheckin,
    OrganizationList,
    OrganizationDetails,
    AreaAcountManagement,
    AreaNormalUserList,
    IndustryCommittee,
    SocialOrganization,
    WorkbenchManagement,
    TransactionManagement,
    UsersList,
    DenghuoUserListManagement,
    OwnerApplication,
    DenghuoContentList,
    DenghuoUserList,
    OperationAcount,
    ModifyData,
    ModifyPassWord,
    ModifyAvatar,
    AreaAcount,
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
    VisitCheck,
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
                            path: '/ModifyData',
                            name: '修改资料',
                            component: ModifyData,
                        },
                        {
                            path: '/ModifyPassWord',
                            name: '修改密码',
                            component: ModifyPassWord,
                        },
                        {
                            path: '/ModifyAvatar',
                            name: '修改头像',
                            component: ModifyAvatar
                        },
                        {
                            path: '/OperationAcount',
                            name: "平台运营账户",
                            component: OperationAcount
                        },
                        {
                            path: '/AreaAcount',
                            name: "地区运营账户",
                            component: AreaAcount
                        },
                        {
                            path: '/DenghuoUserList',
                            name: "灯火端用户列表",
                            component: DenghuoUserList
                        },
                        {
                            path: '/OrganizationEnter',
                            name: '组织入驻审核',
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
                    redirect: '/NormalUserList',
                    children: [
                        {
                            path: '/NormalUserList',
                            name: '账户列表',
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
                    path: '/area-acount-management',
                    name: '地区运营账号管理',
                    component: AreaAcountManagement,
                    redirect: '/AreaNormalUserList',
                    children: [
                        {
                            path: '/AreaNormalUserList',
                            name: '账户列表',
                            component: AreaNormalUserList,
                        },
                    ]
                }, {
                    path: '/denghuo-user-management',
                    name: '灯火端用户管理',
                    component: DenghuoUserManagement,
                    redirect: '/OwnerApplication',
                    children: [
                        {
                            path: '/OwnerApplication',
                            name: '业主申请审核',
                            component: OwnerApplication,
                        }
                        , {
                            path: '/UsersList',
                            name: '用户列表',
                            component: UsersList,
                        }, {
                            path: '/DenghuoUserListManagement',
                            name: '用户详情',
                            component: DenghuoUserListManagement,
                        }
                    ]
                }, {
                    path: '/denghuo-organization-management',
                    name: '灯火端组织管理',
                    component: Organization,
                    redirect: '/OrganizationCheckin',
                    children: [
                        {
                            path: '/OrganizationCheckin',
                            name: '组织入驻审核',
                            component: OrganizationCheckin,
                        }, {
                            path: '/OrganizationList',
                            name: '组织列表',
                            component: OrganizationList,
                        }, {
                            path: '/OrganizationDetails',
                            name: '组织详情',
                            component: OrganizationDetails
                        }
                    ]
                }, {
                    path: '/denghuo-content-management',
                    name: '灯火端内容管理',
                    component: DenghuoContentManagement,
                    redirect: '/AdvertisingManagement',
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
                }, {
                    path: '/civilization-acount-management',
                    name: '文明端账户管理',
                    component: CivilizationAcountManagement,
                    redirect: '/IndustryCommittee',
                    children: [
                        {
                            path: '/IndustryCommittee',
                            name: '业委会工作台审核',
                            component: IndustryCommittee,
                        },
                        {
                            path: '/SocialOrganization',
                            name: '社会组织工作台审核',
                            component: SocialOrganization,
                        },
                        {
                            path: '/WorkbenchManagement',
                            name: '工作台管理',
                            component: WorkbenchManagement,
                        },
                    ]
                }, {
                    path: '/civilization-content-management',
                    name: '文明端内容管理',
                    component: CivilizationContentManagement,
                    redirect: '/TransactionManagement',
                    children: [
                        {
                            path: '/TransactionManagement',
                            name: '事务管理',
                            component: TransactionManagement,
                        },
                    ]
                },
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


