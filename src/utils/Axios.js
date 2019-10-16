import axios from 'axios';

let defaultConfig = {
  baseUrl: 'http://120.77.178.7:3000/mock/47',
  timeout: 50000,
  headers: {
    "Content-Type": "application/json"
  }
};

let instance = axios;
let baseUrl = defaultConfig.baseUrl;
class Axios {

  constructor(props) {
    instance = axios.create(defaultConfig);
  }

  async get(url) {
    return this.get(url, null)
  }

  async get(url, params = {}) {
    try {
      let response = null;
      // console.log(baseUrl + url)
      console.log(JSON.stringify(params));
      response = await instance.get(baseUrl + url, { params });
      if (response.data.success) {

      }
      // console.log(response);

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