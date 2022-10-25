//Starting point

const {app, BrowserWindow} = require("electron");
const {join} = require("path");

app.whenReady().then(main);

const name = app.getName();
const version = app.getVersion();
const platform = process.platform;
const downloadsFolder = app.getPath("downloads");

function main() {
    const window = new BrowserWindow({
        width: 1920, height: 1080,
        show: false,
        hasShadow: true,
        // autoHideMenuBar: true,
        //resizable: false,
        // webPreferences: {
        //     preload: join(__dirname, "./preload.js"),
        // }
    });

    window.loadFile(join(__dirname, "../src/index.html")).then(r => {console.log("Successfully loaded html file")});
    window.on("ready-to-show", window.show);

    windowEvents(window);
}

function windowEvents(window) {
    window.on("resized", () =>{
        console.log(`Size: ${window.getSize()}`);
    });

    window.on("moved", () =>{
        console.log(`Position: ${window.getPosition()}`);
    });
}