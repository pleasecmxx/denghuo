import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    h5token : "",
  },
  mutations: {
    saveh5Token(state,newtoken){
      state.h5token = newtoken 
    },
  }
})


export default store