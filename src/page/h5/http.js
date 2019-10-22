import axios from 'axios';
import store from "./store";


let defaultConfig = {
  // baseUrl: 'http://120.77.178.7:3000/mock/47/api',
  // baseUrl: 'http://location:9999/api',
  // baseUrl: 'http://192.168.1.110:7001/api',
  baseUrl: '/api',
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    "appType": 4,
    "token": "",
  }
};

let instance = axios;
let baseUrl = defaultConfig.baseUrl;

class Axios {
  
  constructor(props) {
    instance = axios.create(defaultConfig);
    instance.defaults.withCredentials = true
    instance.interceptors.request.use((config)=>{
      const token = store.state.h5token;
      config.headers.token = token;
      return config;
    })
  }

  async get(url, params = {}) {
    try {
      let response = null;
      console.log(JSON.stringify(params));
      response = await instance.get(baseUrl + url, { params });
      if (response.data.success) {

      }
      if (response.data) {
        return response.data.result
      } else {
        alert("网络错误，请重试")
      }
    } catch (e) {
      console.log(e);
      return null
    }
  }


  async post(url, params) {
    try {
      console.log(JSON.stringify(params));
      let response = await instance.post(baseUrl + url, params);
      if (response.data) {
        return response.data
      } else {
        alert("网络错误，请重试")
      }
    } catch (e) {

      console.log(e);
      return null
    }
  }

}

export default new Axios();