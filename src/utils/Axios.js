import axios from 'axios';
import store from "./../vuex/store";
import router from './../router/router';

let defaultConfig = {
  // baseUrl: 'http://120.77.178.7:3000/mock/47/api',
  baseUrl: '/api',
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    "appType": 3,
    "token": "",
  }
};

let instance = axios;
let baseUrl = defaultConfig.baseUrl;

class Axios {

  constructor(props) {
    instance = axios.create(defaultConfig);
    instance.defaults.withCredentials = true

    // 请求拦截器
    instance.interceptors.request.use((config) => {
      const token = store.state.token;
      config.headers.token = token;
      return config;
    })
  }

  async get(url, params = {}) {
    try {
      console.log(JSON.stringify(params));
      const response = await instance.get(baseUrl + url, { params });
      // if (response.data.status) {
      //   this.status(response.data.error)
      //   return;
      // }
      if (response.data) {
        return response.data
      } else {
        return { success: false }
      }
    } catch (e) {
      console.log("get+erro", e);
      return { success: false }
    }
  }

  async post(url, params) {
    try {
      console.log(JSON.stringify(params));
      const response = await instance.post(baseUrl + url, params);
      // if (response.data.status) {
      //   this.status(response.data.error)
      //   return;
      // }
      if (response.data) {
        return response.data;
      } else {
        return { success: false }
      }
    } catch (e) {
      console.log("post+err", e);
      return { success: false }
    }
  }

  status(error) {
    switch (error.code) {
      /// "非法请求，请重新登录。"
      case 5001:
        store.commit("saveInfo", "");
        store.commit("saveToken", "");
        router.push("/");
        break;

      default:
        break;
    }
    alert(error.message)
  }

}

export default new Axios();