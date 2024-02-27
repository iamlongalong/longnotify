const path = require("path");

module.exports = {
  entry: "./index.js", // 你的库入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js", // 输出的文件名
    libraryTarget: "umd", // 指定库的目标为UMD
    umdNamedDefine: true, // 对UMD构建过程中的AMD模块进行命名
    globalObject: "this", // 兼容浏览器和Node.js环境
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 对js文件应用babel-loader
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
