import axios from 'axios';
import store from "./../vuex/store";
import router from './../router/router';

let defaultConfig = {
  // baseUrl: 'http://120.77.178.7:3000/mock/47/api',
  // baseUrl: 'http://location:9999/api',
  // baseUrl: 'http://192.168.1.110:7001/api',
  baseUrl: '/api',
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    "appType": 3,
    "token": store.state.token,
  }
};

let instance = axios;
let baseUrl = defaultConfig.baseUrl;

class Axios {

  constructor(props) {
    instance = axios.create(defaultConfig);
    instance.defaults.withCredentials = true
  }

  async get(url, params = {}) {
    try {
      // console.log(baseUrl + url)
      params.token = store.state.token;
      console.log(JSON.stringify(params));
      const response = await instance.get(baseUrl + url, { params });

      if (response.data) {
        return response.data.result
      } else {
        alert("网络错误，请重试")
      }
    } catch (e) {
      console.log("get+erro",e);
      return null
    }
  }

  async post(url, params) {
    try {
      console.log(baseUrl + url)

      params.token = store.state.token;
      console.log(JSON.stringify(params));
      const response = await instance.post(baseUrl + url, params);
      if (response.data) {
        return response.data
      } else {
        alert("网络错误，请重试")
      }
    } catch (e) {

      console.log("post+err",e);
      return null
    }
  }

}

export default new Axios();