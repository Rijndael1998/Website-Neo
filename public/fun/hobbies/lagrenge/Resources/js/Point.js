"use strict";

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		//make hue
		this.hue = Math.random();
	}

	render() {
		push();
		colorMode(HSB, 1);
		fill(this.hue, 1, 1);

		let shift = 0.05;
		let strokeCol = this.hue + shift > 1 ? shift : this.hue + shift;
		stroke(strokeCol, 1, 0.25);
		strokeWeight(1.2);

		ellipse(this.x, this.y, circleSize);
		pop();
	}

	moveTo(x, y) {
		this.x = x;
		this.y = y;
	}
}