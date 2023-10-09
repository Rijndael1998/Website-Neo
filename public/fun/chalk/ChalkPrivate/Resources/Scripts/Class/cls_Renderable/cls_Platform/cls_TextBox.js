class TextBox extends Platform {
	constructor(x,y,text) {
		super(x, y);
		this.text = text;
		this.color = color("rgb(80, 80, 80)");
		this.textColor = color("rgb(255, 255, 255)");
		this.cosmeticOnly = true;
	}

	//@override
	drawObject() {
		strokeWeight(5);
		if(cameraFocus.x + cameraFocus.width > this.x && cameraFocus.x < this.x + this.width) {
			if(cameraFocus.y + cameraFocus.height > this.y && cameraFocus.y < strip(this.y + this.height)) {
				noStroke();
				fill(this.textColor);
				textSize(20);
				textAlign(CENTER, CENTER);
				text(this.text, this.x-36, this.y-40, 180, 80);
				stroke(120,120,120);
			} else stroke(20,20,20);
		} else stroke(20,20,20);
		
		fill(this.color);
		rect(this.x+40, this.y+60, 20, 40);
		rect(this.x+20, this.y+40, 60, 40);

	}
}