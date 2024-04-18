const { app, BrowserWindow, Menu, MenuItem } = require('electron');
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
    win.webContents.on('context-menu', (e, params) => {
        const { selectionText, isEditable } = params;
        const menu = new Menu();
        if (!selectionText.trim() && !isEditable) {
            return;
        }
        if (selectionText.trim() !== '') {
            menu.append(new MenuItem({ role: 'copy' }));
        }
        if (isEditable) {
            menu.append(new MenuItem({ role: 'paste' }));
        }
        menu.popup({ window: win });
    });
}

app.whenReady().then(createWindow);
