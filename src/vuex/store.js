import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    info : "",
    token : "",
  },
  mutations: {
    saveInfo(state,newinfo){
      state.info = newinfo 
    },
    saveToken(state,newtoken){
      state.token = newtoken 
    },
  }
})


export default store