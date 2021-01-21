/* 后台接口环境配置 */

// 访问地址前缀
const { hostname } = window.location;

// DEV 开发环境
const HOST_DEV = "/api";
// PRD 产品环境
const HOST_PROD = "/api";

// 最终输出baseUrl
let FINAL_HOST;

if (hostname === "localhost") {
  FINAL_HOST = HOST_DEV;
} else {
  FINAL_HOST = HOST_PROD;
}

export const HOST = FINAL_HOST;
