class Particle extends Renderable {
	constructor(x, y, dx, dy, w, h, life, colour) {
		super();
		this.x = x;
		this.y = y;
		this.height = h;
		this.width = w;
		this.dx = dx;
		this.dy = dy;
		this.life = life;
		this.color = colour;

		this.gravity = g;
		this.dyingRate = 0.25;

		renderableTop.push(this); 
	}

	drawObject() {
		//push();
		//rectMode(CENTER);
		fill(this.color);
		rect(this.x, this.y, this.width, this.height);
		//pop();

		this.tick();
		this.lifeCheck();
	}

	tick() {
		this.x += this.dx;
		this.y += this.dy;

		this.dy+= this.gravity;
	}

	lifeCheck() {
		this.life--;
		if(this.life < 0) {
			this.width-=this.dyingRate;
			this.height-=this.dyingRate;
			if(this.width < 0 || this.height < 0) renderableTop.splice(renderableTop.indexOf(this), 1); //removes itself
		}
	}
}