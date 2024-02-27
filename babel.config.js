module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true, // 如果你的代码需要在具有原生ES模块支持的环境中运行
        },
      },
    ],
  ],
};
