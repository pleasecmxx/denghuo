import axios from 'axios';
import store from "./../vuex/store";


let defaultConfig = {
  baseUrl: 'http://120.77.178.7:3000/mock/47/api',
  // baseUrl: 'http://192.168.1.110:7001',
  // baseUrl: '/api',
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
  }

  async get(url) {
    return this.get(url, null)
  }

  async get(url, params = {}) {
    try {
      let response = null;
      // console.log(baseUrl + url)
      params.token = store.state.token;
      console.log(JSON.stringify(params));
      response = await instance.get(baseUrl + url, { params });
      if (response.data.success) {

      }
      console.log(response);

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

  async post(url) {
    return this.post(url, null, true, true)
  }

  async post(url, params) {
    try {
      console.log(baseUrl + url)
      params.token = store.state.token;
      console.log(JSON.stringify(params));
      let response = await instance.post(baseUrl + url, params);
      console.log(response);
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