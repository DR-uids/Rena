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
2. webpack@5.9.0 webpack-cli@4.2.0 webpack-dev-server@3.11.0 conflict, `"start": "webpack-dev-server && electron ."` in `package.json`, `yarn start` throw error `Error: Cannot find module 'webpack-cli/bin/config-yargs'`

## 2020/12/3

**solved**
webpack@5.9.0 webpack-cli@4.2.0 webpack-dev-server@3.11.0 conflict, [method](https://github.com/webpack/webpack-dev-server/issues/2424):

Plan A: use `webpack-dev-server@4.0.0beta`

Plan B: in `package.json`, change `"start": "webpack-dev-server"` to `"start": "webpack serve"`

Now, I uesd plan B.

**other**
Give up to use TypeScript.

## 2020/12/4
**Problem:**
Build failed：
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
**Solution:** webpack dev config file add `target: 'electron-renderer'` for active node.js.

## 2020/12/7
**Problem:**
1. Error: `Cannot read property 'whenReady' of undefined` and `Uncaught ReferenceError: require is not defined`

**Solution:**

remove global electron, `yarn add electron --dev`, webpack entry should not be `main.js` of electron, but `index.js` of react;

**Problem:**

2. `document.GetElementById is not a function`

**Solution:**

should be `GetElementById`, not`GetElementByID`

**Problem:**
3. `index.html`中`<div id='root'></div>`元素不显示，并且报错`Target container is not a DOM element`：引入`html-webpack-plugin`，并加入`template`路径为`index.html`的绝对路径；
