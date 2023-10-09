class LivesDisplay extends Renderable {
	constructor(P, side, img) {
		super();
		this.forPlayer = P;
		this.side = side;
		this.image = img;
		this.upDown = 0;
	}

	drawObject() {
		if(this.forPlayer.active) {
			if(this.forPlayer.lives > 1) for(let i=0; i < this.forPlayer.lives; i++) {
				image(this.image, 30 + i * 120 / 2, 20 + Math.sin((this.upDown - (i*80) ) / (20) - i) * 5, 50, 50);
			} else if(this.forPlayer.lives == 1) {
				image(this.image, 30 + Math.sin(this.upDown*5) * 2, 20, 50, 50);
			}
		}
		this.upDown++;
	}
}