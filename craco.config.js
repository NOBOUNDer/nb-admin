/* craco 自定义webpack配置*/

const CracoLessPlugin = require("craco-less");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": path.resolve("src"),
    },
  },
  plugins: [
    {
      // antd 配置主题色
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 配置主题颜色
            modifyVars: { "@primary-color": "#25a3ff" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
