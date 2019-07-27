const Login = () => import('./user-model/Login.vue')
const Register = () => import('./user-model/Register.vue')
const Home = () => import('./index-pages/Home.vue')
const RootView = () => import('./Root.vue')
const Acount = () => import('./index-pages/Acount.vue')



export {
    Home,
    Login,
    Register,
    RootView,
    Acount
}