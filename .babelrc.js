module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        loose: true,
        modules: false,
        "targets": {
          "ie": "9"
        },
        // 使用 preset 内置 polyfill
        // 需要在 package.json 安装 core-js3，不然会默认使用 core-js2
        "useBuiltIns": "usage",
        corejs: {
          version: '3.6.5',
          proposals: true
        }
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      // {
      //   "corejs": 3,
      // }
      // 默认配置
      {
        // 替换后的工具类路径以绝对路径展示
        // "absoluteRuntime": false,
        // "corejs": false,
        // 将常用语法转换语句替换成工具类
        "helpers": true,
        // 不使用这个 regenerator，使用 @babel/env 全局的 regenerator 更节省空间
        "regenerator": false,
        // "regenerator": true,
        // "useESModules": false,
        // "version": "7.0.0-beta.0"
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
    ]
  ]
}
