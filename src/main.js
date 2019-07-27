import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/common.css';
import VueParticles from 'vue-particles'  



Vue.use(ElementUI);
Vue.use(VueParticles)  



Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
