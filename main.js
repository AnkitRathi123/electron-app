const log = require('electron-log');
const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win
log.warn(url);
function createWindow() {
   win = new BrowserWindow({width: 1200, height: 800})
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}

app.on('ready', createWindow)
