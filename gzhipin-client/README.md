下载路由包
npm install --save react-router-dom

引入redux
npm install --save redux@3.7.2 react-redux redux-thunk
npm install --save-dev redux-devtools-extension

引入 antd-mobile
npm install antd-mobile --save

antd按需打包
1) 下载依赖模块
npm install --save-dev babel-plugin-import react-app-rewired
2) 定义加载配置的 js 模块: config-overrides.js
const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', style: 'css'}],
config);
return config;
}
 修改配置: package.json
"scripts": {
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test --env=jsdom",
"eject": "react-scripts eject"
}

安装less
npm install --save-dev less@2.7.3 less-loader