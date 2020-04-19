module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "chrome": "80"
        },
        // 使用 preset 内置 polyfill
        // 需要在 package.json 安装 core-js3，不然会默认使用 core-js2
        "useBuiltIns": "usage",
        // corejs: {
        //   version: '3.6.5',
        //   proposals: true
        // }
      }
    ]
  ],
  "plugins": [
    // [
    //   "@babel/plugin-transform-runtime",
    //   {
    //     "corejs": 3,
    //   }
    //   // 默认配置
    //   // {
    //   //   "absoluteRuntime": false,
    //   //   "corejs": false,
    //   //   "helpers": true,
    //   //   "regenerator": true,
    //   //   "useESModules": false,
    //   //   "version": "7.0.0-beta.0"
    //   // }
    // ]
    [
      "@babel/plugin-proposal-class-properties",
    ]
  ]
}
