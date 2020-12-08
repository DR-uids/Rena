# 我的开发日志

## 2020年12月1日

开始配置环境

**碰到的问题：**
1. 用windows的WSL安装，会安装Linux版本的electron，所以在PowerShell下安装
2. 我的代理配置由问题，下载总是出错，速度几乎没有，yarn安装还会报错，后来修改npm镜像为淘宝镜像还是有问题，最后发现electron的镜像也要改，命令如下：

```
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://registry.npm.taobao.org
npm config set electron_mirror http://npm.taobao.org/mirrors/
```

## 2020年12月2日
`@types/react @types/react-dom`额外要获取React和React-DOM的声明文件 [说明](https://www.tslang.cn/docs/handbook/react-&-webpack.html)

**碰到的问题：**
1. wsl启动electron有问题，采用PowerShell
2. webpack@5.9.0 webpack-cli@4.2.0 webpack-dev-server@3.11.0 有冲突，`package.json`中`"start": "webpack-dev-server"`，`yarn start`报错`Error: Cannot find module 'webpack-cli/bin/config-yargs'`
## 2020年12月3日
**解决问题：**
webpack@5.9.0 webpack-cli@4.2.0 webpack-dev-server@3.11.0 冲突问题[解决办法](https://github.com/webpack/webpack-dev-server/issues/2424)：

方法一：使用webpack-dev-server@4.0.0beta，问题解决

方法二：`package.json`中`"start": "webpack-dev-server"`改为`"start": "webpack serve"`

当前采用方法二

**其他：**
放弃使用typescript

## 2020年12月4日
**碰到的问题：**
打包出错，错误如下：
```
Module not found: Error: Can't resolve 'path' in 'C:\code\Rena\node_modules\electron'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "path": require.resolve("path-browserify") }'
        - install 'path-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
        resolve.fallback: { "path": false }
```
解决办法：开发环境 webpack config 文件加上 `target: 'electron-renderer'`，引入node.js

## 2020年12月7日

**解决问题：**
1. `Cannot read property 'whenReady' of undefined`， `Uncaught ReferenceError: require is not defined`：删除全局electron，dev引入electron，webpack入口不应该是electron的`main.js`而应该是react的`index.js`；
2. `document.GetElementById is not a function`：`GetElementById`写错了，写成了`GetElementByID`；
3. `index.html`中`<div id='root'></div>`元素不显示，并且报错`Target container is not a DOM element`：引入`html-webpack-plugin`，并加入`template`路径为`index.html`的绝对路径；

## 2020年12月8日
**解决问题：**

1. 
```
Uncaught TypeError: Cannot destructure property 'dialog' of '__webpack_require__(...).remote' as it is undefined
```

调用electron的`remote`方法需要在`main.js`中加入如下代码：
```
webPreferences: {
  nableRemoteModule:true
}
```