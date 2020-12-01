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