const{app,BrowserWindow}=require('electron')
const url = require('url') 
const path = require('path')
let window; 
function first(){

window = new BrowserWindow({width :500,height:500})
window.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
}

app.on(ready,first)