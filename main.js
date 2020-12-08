const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule:true
    }
  })
  win.loadURL('http://localhost:7000/')
  win.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// ipcMain.on('open-directory-dialog', function (e) {
//   dialog.showOpenDialog({
//     title: '请选择文件',
//     properties: [
//       'openFile',
//       'multiSelections'
//     ]
//   }, files => {
//     if (files) {
//       console.log(e);
//       e.sender.send('selectedItem', files)
//     }
//   })
// })
  