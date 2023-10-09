class Platform extends Renderable {
	constructor(x, y) {
		super();
		this.platformX = x;
		this.platformY = y;
		this.x = x*platformSize;
		this.y = y*platformSize;
		this.width = platformSize;
		this.height = platformSize;
		this.color = color("#FFF");
		this.strokecol = 255;
		this.firstFrame = false;
		this.cosmeticOnly = false;
	}
	
	drawObject() {
		if(this.x + this.width > -cameraX && this.x < -cameraX + width && strip(this.y + this.height) > -cameraY && this.y < -cameraY + height) {
			if(DEBUG) renderingObjects++;
			strokeWeight(1);
			stroke(this.strokecol);
			//noStroke();
			fill(this.color);
			rect(this.x, this.y, this.width, this.height);
		}
		if(this.firstFrame) generateType();
	}
	
	standingOnAction(p) { //p is the character that is standing
		this.touchingAction(p);
		let initialHeight = p.height;
		if (p.absoluteSpeed > 0) {
			p.height = constrain(p.height-Math.abs(p.absoluteSpeed/20), 5, 100);
			p.y += initialHeight - p.height;
			if(p.height == 5) {
				console.log("We ran out of " + p.colorName);
				p.spawnx = this.x + this.width / 2 - p.width/2;
				p.spawny = strip(this.y - p.initialHeight - 1);
				p.respawn();
			}
		}
	}

	touchingAction(p) {
		this.color = p.color;
		this.strokecol = p.color;
	}

}