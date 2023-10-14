"use strict";
/** 
 *
 *
 *
 *
 */

let points = [];
let maxPoints = 10;

var circleSize = 20;

let mouseDownOnPoint = false; //index or false
let mouseDraggedLastFrame = false; 

let LagrangeObject = null; 

let offsetX = 0;
let offsetY = 0;

let startX = null;
let startY = null;

let calculatedOffset = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	let recalculateLangrange = false;
	background(220);
	fill(0);

	translate(offsetX, offsetY);
	push();

	// reset object when mouse is up
	if(!mouseIsPressed) {
		mouseDownOnPoint = false;
		mouseDraggedLastFrame = false;
		calculatedOffset = false;
		startX = startY = null;
	} 

	for (let point = 0; point < points.length; point++) {
		// handle mouse drags
		if(mouseIsPressed) {
			//if there is nothing on point
			if(mouseDownOnPoint === false) {
				//check distance
				if(circleSize >= Math.hypot(points[point].x-mouseX+offsetX, points[point].y-mouseY+offsetY)) {
					//get the index
					mouseDownOnPoint = point;
				}
			}
		}

		//update point that was dragged
		if(mouseDownOnPoint === point) {
			points[point].moveTo(mouseX-offsetX, mouseY-offsetY);
			recalculateLangrange = true;
		}

		points[point].render();
	}

	// this means that nothing was clicked.
	if(mouseDraggedLastFrame && !(mouseDownOnPoint || recalculateLangrange)) {
		startX ??= mouseX - offsetX;
		startY ??= mouseY - offsetY;
		offsetX = mouseX - startX;
		offsetY = mouseY - startY;
		calculatedOffset = true;
	}

	//decide if langrange needs to be updated
	if(points.length < 2) {
		recalculateLangrange = false;
		LagrangeObject = null;
	} else if (LagrangeObject == null) {
		recalculateLangrange = true;
	}

	if(recalculateLangrange) {
		LagrangeObject = new Lagrange(points);
	}

	//draw langrange
	if(LagrangeObject != null) {
		push();
		beginShape(LINES);
		for(let i = 0; i < windowWidth; i++) {
			vertex(i-1, LagrangeObject.F(i-1))
			vertex(i, LagrangeObject.F(i));
		}
		endShape();
		pop();
	}

	pop();
}

function mouseClicked() {
	if(calculatedOffset)
		return;

	// create point
	if(mouseDownOnPoint === false && points.length < maxPoints) {
		points.push(new Point(mouseX-offsetX, mouseY-offsetY));
		LagrangeObject = null;
	}

	// remove point if there is no movement
	if(!mouseDraggedLastFrame && mouseDownOnPoint !== false) {
		points.splice(mouseDownOnPoint, 1);
		LagrangeObject = null;
	}
}

function mouseDragged() {
	mouseDraggedLastFrame = true;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

console.log("main.js loaded");