import request from "@/utils/request";
import NProgress from "nprogress";

export function $http(params) {
  NProgress.start();
  return request({
    ...params,
  })
    .then((data) => {
      NProgress.done();
      return Promise.resolve(data);
    })
    .catch((error) => {
      NProgress.done();
      return Promise.reject(error);
    });
}
