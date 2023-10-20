const { app, BrowserWindow } = require('electron');
var win;
var menuVis = true;


function createWindow () {
	// Create the browser window.
	win = new BrowserWindow({
	fullscreen:true,
	title:"Chalk",
	webPreferences: {
		nodeIntegration: true
	},
	icon: "ChalkPrivate/Resources/Images/chalkIcon2.png"
	});


	// and load the index.html of the app.
	win.loadFile('ChalkPrivate/index.html');
	win.setMenuBarVisibility(false);

	//win.addEventListener("keydown", function() {
	//	menuVis = !menuVis;
	//	win.setMenuBarVisibility(menuVis);
	//});
}

app.whenReady().then(createWindow);
