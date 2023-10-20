/*CHALK COMBINATION IDEA
@author Sorana Ioana Marin
@author Lukasz Baldyga

*/

//debug variables
var DEBUG = false;
var renderingObjects = 0;

//platforms and others in render order
var renderableBottom = [];
var collisionPlatforms = [];
var renderableTop = [];
var gui = [];

var goal;

var platformSize = 100;

//Platform coordinate system is different from character's coordinate system.
//character options
var g = 0.5;//9.8 / 16;
var speed = 10;
var grip = 0.75; //more close to 0 the stronger the grip, at most 1 which gives 0 friction. Values over 1 increase speed
var maxSpeed = speed * grip;
var jumpStrengh = 15;
var respawnPoint = [100, 100];
var maxY = 2000;
var player;
var player2;

//images
var heartYellow;
var heartBlue;
var chalkbox;

var winImage;
var loseP;
var loseP2;

//sounds
var hit;
var glide;
var glide2;

var endReason = null;
var endState = false;
var endFrames = 0;

function GameOver(reason) {
	endState = true;
	if (endReason == null) endReason = reason;
	
	endFrames++;
	cameraLock = true;
	
	switch(endReason) { //either player, player2 or goal
		case player:
			player.locked = true;
			push()
			imageMode(CENTER);
			image(loseP, width/2, height/2);
			pop();
			break;
		case player2:
			player2.locked = true;
			push()
			imageMode(CENTER);
			image(loseP2, width/2, height/2);
			pop();
			break;
		case goal:
			player2.locked= true;
			player.locked = true;
			push()
			imageMode(CENTER);
			image(winImage, width/2, height/2);
			pop();
			//NEXT LEVEL CODE HERE!!!
			break;
	}

	console.log("game over");
}

function render(l) {
	for (let i = l.length - 1; i >= 0; i--) {
		l[i].drawObject();
	}
}

function strip(number) {
	return (parseFloat(number).toPrecision(10)) - 0;
}

//controls
var left = false;
var down = false;
var up = false;
var right = false;

function addPlatform(x, y) {
	collisionPlatforms.push(new Platform(x, y));
}

function addTextbox(x, y, text) {
	renderableBottom.push(new TextBox(x,y,text));
}

function avg(l) {
	let sum = l.reduce((p, c) => c += p); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
	return sum / l.length;
}

function preload() {
	numberOfLoadables+= 9;
	progressBarUpdate();

	//load all sounds
	soundFormats('wav');
	hit = loadSound('Resources/Sounds/hit.wav', progressBarIncrement);
	glide = loadSound("Resources/Sounds/glide.wav", progressBarIncrement);
	glide2 = loadSound("Resources/Sounds/glide.wav", progressBarIncrement);

	//Load all pictures
	heartYellow = loadImage("Resources/Images/yellow.png", progressBarIncrement);
	heartBlue = loadImage("Resources/Images/blue.png", progressBarIncrement);
	chalkbox = loadImage("Resources/Images/chalkbox.png", progressBarIncrement);

	winImage = loadImage("Resources/Images/win.png", progressBarIncrement);
	loseP = loadImage("Resources/Images/yellowOut.png", progressBarIncrement);
	loseP2 = loadImage("Resources/Images/blueOut.png", progressBarIncrement);
}

function setup() {
	frameRate(60);

	//adjust sounds
	hit.setVolume(0.1);
	glide.setVolume(0); //the dx of the character will be the volume;
	glide.loop();
	glide2.setVolume(0);
	glide2.loop();


	createCanvas(windowWidth,windowHeight);


    lv_Level_1(); //load level 1
	
	//this code checks what collisionPlatforms need to be checked against for colision detection
	//also beware of the worst case O(n^2) 
	for (let i = collisionPlatforms.length - 1; i >= 0; i--) {
		let checking = collisionPlatforms[i];
		let leftPlatform = null;
		let rightPlatform = null;
		let topPlatform = null;
		let bottomPlatform = null;
		for (let ii = collisionPlatforms.length - 1; ii >= 0; ii--) {
			let checkAgainst = collisionPlatforms[ii];
			if(checking === checkAgainst) continue;

			if(leftPlatform === null)   if(checking.platformX - 1 === checkAgainst.platformX && checking.platformY === checkAgainst.platformY) leftPlatform   = checkAgainst;
			if(rightPlatform === null)  if(checking.platformX + 1 === checkAgainst.platformX && checking.platformY === checkAgainst.platformY) rightPlatform  = checkAgainst;
			if(topPlatform === null)    if(checking.platformY - 1 === checkAgainst.platformY && checking.platformX === checkAgainst.platformX) topPlatform    = checkAgainst;
			if(bottomPlatform === null) if(checking.platformY + 1 === checkAgainst.platformY && checking.platformX === checkAgainst.platformX) bottomPlatform = checkAgainst;

			if(leftPlatform !== null && rightPlatform !== null && topPlatform !== null && bottomPlatform !== null) {
				checking.cosmeticOnly = true;
				break;
			}
		}

		if(checking.cosmeticOnly) continue;
	}

	//this code removes the collisionPlatforms that will not be used in collision detection
	//beware of the worst case O(n^2)
	for (let i = collisionPlatforms.length - 1; i >= 0; i--) {
		if(!collisionPlatforms[i].cosmeticOnly) continue;

		renderableBottom.push(collisionPlatforms[i]);
		//remove from collisionPlatforms list 
		collisionPlatforms.splice( collisionPlatforms.indexOf(collisionPlatforms[i]), 1 );
	}

	goal = new WaitingPlatform(40,-32);

	collisionPlatforms.push(goal);    

	player = new Character(240, 250, "#ff0");//2000,-2500,"#ff0"); //YELLOW
	player.active = true;
	//player.lives = 1;
	player.colorName = "yellow";
	player.loseImage = loseP;
    pointer = new Pointer(player, player.height+20, goal, "rgb(255,255,255)");

	cameraFocus = player;
	
	player2 = new Character(7840, 250, "#078fe3"); //BLUE
	player2.active = false;
	player2.loseImage = loseP2;
	player.colorName = "blue";
    pointer2 = new Pointer(player2, player2.height+20, goal, "rgb(255,255,255)");

	gui.push(new LivesDisplay(player, 0, heartYellow));
	gui.push(new LivesDisplay(player2, 1, heartBlue));


}

//camera settings
var lastX = [];
var lastY = [];
var smoothing = 50;
var cameraX = 0;
var cameraY = 0
var cameraFocus;
var cameraLock = false;

function removeFirst(l) {
	l.shift();
	return l;
}

function keyPressed(ev) {
	switch(key.toLowerCase()) {
		case "c":
			if(!cameraLock) {
				player.active = !player.active;
				player2.active = !player.active;
				cameraFocus = player.active ? player : player2;
			}
			return false;

		case "k": //debug key
			DEBUG = !DEBUG;
			return false;

		case "l":
			if(DEBUG) cameraFocus.respawn();
			return false;

		case "g":
			if(DEBUG) g = g == 0 ? 0.5 : 0;
			return false;

		case "t":
			if(DEBUG) {
				cameraFocus.x = 3194;
				cameraFocus.y = -3247;
				cameraFocus.standingOn = null;
				cameraFocus.onFloor = false;
			}
			return false;
	}

	//FULLSCREEN
	var fs=fullscreen();
	if (keyCode==70) {
		fullscreen(!fs);
	}
}

//trying to prevent default on arrow keys + space 
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


function draw() {
	background(20,20,20);

	//Character movement
	left  = keyIsDown(65) || keyIsDown(37);
	//down  = keyIsDown(83) || keyIsDown(40);
	up    = keyIsDown(87) || keyIsDown(38) || keyIsDown(32);
	right = keyIsDown(68) || keyIsDown(39);

	push();
	
	lastX.push(width/2-cameraFocus.x-cameraFocus.dx);
	lastY.push(height/2-cameraFocus.y-100-cameraFocus.dy);

	cameraX = avg(lastX);
	cameraY = avg(lastY);

	translate(cameraX, cameraY); 

	while(lastX.length > smoothing) {
		lastX = removeFirst(lastX);
		lastY = removeFirst(lastY);
	}

	render(renderableBottom);
	render(collisionPlatforms);

	player.drawObject();
	player2.drawObject();
    
    pointer.drawObject();
    pointer2.drawObject();

	let glideVol = (Math.abs(player.dx / maxSpeed) - (0.075 * player.frameInTheAir));
	glideVol = glideVol < 0 ? 0 : glideVol;
	glide.setVolume(constrain(glideVol, 0, 1));

	glideVol = (Math.abs(player2.dx / maxSpeed) - (0.075 * player2.frameInTheAir));
	glideVol = glideVol < 0 ? 0 : glideVol;
	glide2.setVolume(constrain(glideVol, 0, 1));

	render(renderableTop);
	
	pop();
	
	render(gui);

	fill("#0f0");
	textAlign(LEFT, BASELINE);
	if (DEBUG) { 
		text("x:" + cameraFocus.x + " y:" + cameraFocus.y + "\nMouse:" + (mouseX) + ", " + (mouseY) + "\nP: " + mouseX / platformSize + 
			", " + mouseY / platformSize + "\nSpeed: " + round(player.absoluteSpeed) + "\nFloor: " + player.onFloor + 
			"\nFR:" + round(frameRate()) + "\nObj" + renderingObjects + "\nCAM:" + round(cameraX) + ", " + round(cameraY), 0, 10);
		renderingObjects = 0;
	}

	if(endState) GameOver();
}


