const Login = () => import('./user-model/Login.vue')
const Home = () => import('./index-pages/Home.vue')
const RootView = () => import('./Root.vue')
const OperationAcountManagement = () => import('./index-pages/OperationAcountManagement.vue')
const DenghuoContentManagement = () => import('./index-pages/DenghuoContentManagement.vue')
const DenghuoUserManagement = () => import('./index-pages/DenghuoUserManagement.vue')
const AreaAcountManagement = () => import('./index-pages/AreaAcountManagement.vue')
const CivilizationAcountManagement = () => import('./index-pages/CivilizationAcountManagement.vue')
const CivilizationContentManagement = () => import('./index-pages/CivilizationContentManagement.vue')
const Organization = () => import('./index-pages/Organization.vue')
const WenMingUserManagement = () => import('./index-pages/WenMingUserManagement.vue')
const ActivitiesManagement = () => import('./sub-pages/denghuo-content-management/ActivitiesManagement.vue')
const AdvertisingManagement = () => import('./sub-pages/denghuo-content-management/AdvertisingManagement.vue')
const SystemMsgManagement = () => import('./sub-pages/denghuo-content-management/SystemMsgManagement.vue')
const OrganizationCheckin = () => import('./sub-pages/denghuo-organization-management/OrganizationCheckin.vue')
const OrganizationList = () => import('./sub-pages/denghuo-organization-management/OrganizationList.vue')
const OrganizationDetails = () => import('./sub-pages/denghuo-organization-management/OrganizationDetails.vue')
const UsersList = () => import('./sub-pages/denghuo-user-management/UsersList.vue')
const DenghuoUserListManagement = () => import('./sub-pages/denghuo-user-management/DenghuoUserListManagement.vue')
const OwnerApplication = () => import('./sub-pages/denghuo-user-management/OwnerApplication.vue')
const DenghuoContentList = () => import('./sub-pages/fast-menu/DenghuoContentList.vue')
const DenghuoUserList = () => import('./sub-pages/fast-menu/DenghuoUserList.vue')
const OperationAcount = () => import('./sub-pages/fast-menu/OperationAcount.vue')
const ModifyData = () => import('./sub-pages/fast-menu/ModifyData.vue')
const ModifyAvatar = () => import('./sub-pages/fast-menu/ModifyAvatar.vue')
const ModifyPassWord = () => import('./sub-pages/fast-menu/ModifyPassWord.vue')
const AreaAcount = () => import('./sub-pages/fast-menu/AreaAcount.vue')
const OrganizationEnter = () => import('./sub-pages/fast-menu/OrganizationEnter.vue')
const SystemIndex = () => import('./sub-pages/fast-menu/SystemIndex.vue')
const WenMingUserList = () => import('./sub-pages/fast-menu/WenMingUserList.vue')
const CreateUserAcount = () => import('./sub-pages/operation-acount-management/CreateUserAcount.vue')
const FrozenUserList = () => import('./sub-pages/operation-acount-management/FrozenUserList.vue')
const InvalidationUserList = () => import('./sub-pages/operation-acount-management/InvalidationUserList.vue')
const NormalUserList = () => import('./sub-pages/operation-acount-management/NormalUserList.vue')
const AllAccount = () => import('./sub-pages/operation-acount-management/AllAccount.vue')
const OptionLog = () => import('./sub-pages/operation-acount-management/OptionLog.vue')
const BackCashCheck = () => import('./sub-pages/wenming-user-management/BackCashCheck.vue')
const BorrowCheck = () => import('./sub-pages/wenming-user-management/BorrowCheck.vue')
const BusinesstripCheck = () => import('./sub-pages/wenming-user-management/BusinesstripCheck.vue')
const InstructionsCheck = () => import('./sub-pages/wenming-user-management/InstructionsCheck.vue')
const LeaveCheck = () => import('./sub-pages/wenming-user-management/LeaveCheck.vue')
const OrderCheck = () => import('./sub-pages/wenming-user-management/OrderCheck.vue')
const RefundCheck = () => import('./sub-pages/wenming-user-management/RefundCheck.vue')
const ReimbursementCheck = () => import('./sub-pages/wenming-user-management/ReimbursementCheck.vue')
const VisitCheck = () => import('./sub-pages/wenming-user-management/VisitCheck.vue')
const AreaNormalUserList = () => import('./sub-pages/area-acount-management/AreaNormalUserList.vue')
// 新增管理账号 （地区）
const AreaCreateUserAcount = () => import('./sub-pages/area-acount-management/AreaCreateUserAcount.vue')
// 操作日志  （地区）
const AreaOptionLog = () => import('./sub-pages/area-acount-management/AreaOptionLog.vue')
const IndustryCommittee = () => import('./sub-pages/civilization-acount-management/IndustryCommittee.vue')
const WorkbenchManagement = () => import('./sub-pages/civilization-acount-management/WorkbenchManagement.vue')
const SocialOrganization = () => import('./sub-pages/civilization-acount-management/SocialOrganization.vue')
const TransactionManagement = () => import('./sub-pages/civilization-content-management/TransactionManagement.vue')


const AddOrganization = () => import('./sub-pages/denghuo-organization-management/AddOrganization.vue')


export {
    Home,
    Login,
    RootView,
    OperationAcountManagement,
    DenghuoContentManagement,
    DenghuoUserManagement,
    AreaAcountManagement,
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
    AreaNormalUserList,
    IndustryCommittee,
    WorkbenchManagement,
    SocialOrganization,
    TransactionManagement,
    UsersList,
    DenghuoUserListManagement,
    OwnerApplication,
    DenghuoContentList,
    DenghuoUserList,
    OperationAcount,
    ModifyData,
    ModifyAvatar,
    ModifyPassWord,
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
    AllAccount,
    AddOrganization,
    AreaCreateUserAcount,
    AreaOptionLog,
}