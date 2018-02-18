const electron = require('electron')
const countdown = require('./countdown')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

let mainWindow

app.on('ready', _=> {
    mainWindow = new BrowserWindow({
        height: 800,
        weight: 800
    })

    mainWindow.loadURL(`file://${__dirname}/countdown.html`)

    mainWindow.on('closed', _=>{
        console.log('closed!')
        mainWindow = null
    })
})

ipc.on('countdown-start', _=>{
    countdown(count => {
        mainWindow.webContents.send('countdown', count)
    }) 
})