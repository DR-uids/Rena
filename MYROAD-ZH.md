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
webpack@5.9.0 webpack-cli@4.2.0 webpack-dev-server@3.11.0 冲突问题解决办法：

方法一：使用webpack-dev-server@4.0.0beta，问题解决

方法二：`package.json`中`"start": "webpack-dev-server"`改为`"start": "webpack server"`

当前采用方法二

