import axios from "axios";

const BaseUrl = "http://120.77.178.7:3000"

/**
 */
const Axios = {
  post: async (url, data) => {
    return request(url, data, 'POST');
  },
  get: async (url, data) => {
    return request(url, data, 'GET');
  },
}

const request = async (url, data = {}, method) => {
  console.log(data);


  // 开始请求
  try {
    return axios({
      method,
      headers: {
        token: "",
        "Content-Type": "application/json"
      },
      url,
      data: data,
      baseURL: BaseUrl,
      timeout: 3000,
    }).then(response => {
      console.log(response);

      return response.data;

    }).catch(error => {
      console.log('axios-error1:', error);

    });
  } catch (error) {
    console.log('axios-error2:', error);
  }
}

const obj2formdata = (data) => {
  let result = new FormData();
  for (let prop in data) {
    result.append(prop, data[prop]);
  }
  return result;
}

export default Axios;