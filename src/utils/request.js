import axios from "axios";
import { message } from "antd";
import { HOST } from "./config";

// create an axios instance
const service = axios.create({
  baseURL: HOST, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests 允许携带cookie
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    // 0 为接口成功返回code，如code不为0，则认为是返回错误信息, 01007是用户管理页面用户信息失效的code
    if (res.code !== 200) {
      message.error({
        content: res.msg || "Error",
        duration: 5,
      });
      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    message.error({
      content: error.message,
      duration: 5,
    });
    return Promise.reject(error);
  }
);

export default service;
