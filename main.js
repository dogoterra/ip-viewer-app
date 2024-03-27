const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
        },
        icon: path.join(__dirname, 'assets/icon.png')
    });
    
    win.loadURL('https://viewer.sh/');
    win.setMenu(null);
}

app.whenReady().then(createWindow);
