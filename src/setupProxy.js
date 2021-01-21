/* 代理中间件 http-proxy-middleware */

// eslint-disable-next-line no-undef
const { createProxyMiddleware } = require("http-proxy-middleware");
// eslint-disable-next-line no-undef
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:9001",
      changeOrigin: true,
      pathRewrite: {
        "/api": "",
      },
    })
  );
  // 更多代理配置...
};
