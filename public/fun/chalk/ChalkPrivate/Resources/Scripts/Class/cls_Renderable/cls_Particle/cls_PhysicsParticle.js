class PhysicsParticle extends Particle {
	constructor(x, y, dx, dy, w, h, life, colour) {
		super(x, y, dx, dy, w, h, life, colour);
		this.bounce = 0.2;
	}

	drawObject() {
		for(let i=0; i < collisionPlatforms.length; i++) {
			let tPlatform = collisionPlatforms[i];
			if(this.x + this.width > tPlatform.x && this.x < tPlatform.x + tPlatform.width) { // within X bounds
				if(strip(this.y + this.height + this.dy) > strip(tPlatform.y) && strip(this.y + this.height) <= strip(tPlatform.y)) {
					this.y = tPlatform.y - this.height;
					this.dy = -this.dy * this.bounce;
					this.dx *= grip;
				} else if(strip(this.y + this.dy) < strip(tPlatform.y + tPlatform.height) && strip(this.y) > strip(tPlatform.y + tPlatform.height)) {
					this.dy = -this.dy * this.bounce;
					this.y = strip(tPlatform.y + tPlatform.height);
					this.dx *= grip;
				} if(strip(this.y + this.dy + this.height) > strip(tPlatform.y) && strip(this.y) < strip(tPlatform.y + tPlatform.height)) {
					if(strip(this.y) > strip(tPlatform.y + tPlatform.height) / 2) {
						this.dy=this.dy * this.bounce;
						this.y = strip(tPlatform.y + tPlatform.height);
						this.dx *= grip;
					} else {
						this.dy = -this.dy * this.bounce;
						this.y = strip(tPlatform.y - this.height);
						this.dx *= grip;
					}
				}
			}
		}
		
		//left right wall interaction
		for(let i=0; i < collisionPlatforms.length; i++) {
			let tPlatform = collisionPlatforms[i];
			if((strip(this.y + this.height) > tPlatform.y && strip(this.y) < strip(tPlatform.y + tPlatform.height))) {
				if(this.x + this.width + this.dx > tPlatform.x && this.x + this.width <= tPlatform.x) {
					this.x = tPlatform.x - this.width;
					this.dx = -this.dx * this.bounce;
				} else if(this.x + this.dx < tPlatform.x + tPlatform.width && this.x >= tPlatform.x + tPlatform.width) {
					this.x = tPlatform.x + tPlatform.width;
					this.dx = -this.dx * this.bounce;
				}
			}
		}

		fill(this.color);
		rect(this.x, this.y, this.width, this.height);

		this.tick();
		this.lifeCheck();
	}
}