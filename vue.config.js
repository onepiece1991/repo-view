const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // 基本路径
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置别名
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    // 本地ip地址
    host: "localhost",
    port: 8899,
    open: true,
    /* 使用代理:目的是解决跨域，若测试环境不需要跨域，则不需要进行该配置*/
    proxy: {
      "/api": {
        /* 目标代理服务器地址 */
        target: "http://localhost:8080/",
        secure: false, // 如果是https接口，需要配置这个参数
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};
