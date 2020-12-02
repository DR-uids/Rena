# My Development Logs

## 2020/12/1
start to build env

[react env config](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
> babel webpack react react-dom

**problem:**

1. install electron on WSL will install Linux version, so I install electron by PowerShell.
2. I uesed Yarn to install electron `yarn add electron@latest --dev`,but it threw error each time, so I install it by npm, the download speed was so slow,just few kb per second, I really did not want to change the npm mirror, but the proxy seems not work, so annoyed. Then I tried all the method above, but the speed still slowly.
Finally, I solved this problem. It need to change the electron mirror as well.

```
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://registry.npm.taobao.org
npm config set electron_mirror http://npm.taobao.org/mirrors/electron/
```

## 2020/12/2
`@types/react @types/react-dom`get React React-DOM  [说明](https://www.tslang.cn/docs/handbook/react-&-webpack.html)

**problem:**
1. start electron failed on WSL, so start it on PowerShell.