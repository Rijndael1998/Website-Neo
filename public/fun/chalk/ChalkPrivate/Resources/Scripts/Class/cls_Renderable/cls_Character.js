class Character extends Renderable {
	constructor(initialx, initialy, colorfill) {
		super();
		this.spawnx = this.x = initialx;
		this.spawny = this.y = initialy;
		this.dy = this.dx = 0;
		this.width = 20;
		this.initialHeight = this.height = 80; //was 70
		this.onFloor = false;
		this.lastOnFloorState = false;
		this.standingOn = null;
		this.color = color(colorfill);
		this.colorName = "chalk";
		this.active = false;
		this.lives = 3;
		this.movingOverBlock = false;

		this.locked = false;

		this.frameInTheAir = 0;

		this.emittRate = 60;
		this.emittNumber = 0;

		this.loseImage = null;
	}

	generateParticle(dx, dy) {
		let particleSize = random(10,2);
		let particleLife = random(15,60);
		new PhysicsParticle(this.x + this.width/2 - particleSize, this.y + this.height - particleSize, dx, dy, particleSize, particleSize, 60, this.color);
	}

	generateShortParticle(dx, dy) {
		let particleSize = random(7,3);
		let particleLife = 15;
		new PhysicsParticle(this.x + this.width/2 - particleSize, this.y + this.height - particleSize, dx, dy, particleSize, particleSize, 60, this.color);
	}

	respawn() {
		this.lives--;
		if(!this.lives) GameOver(this);

		this.x = this.spawnx;
		this.y = this.spawny;
		this.dy = this.dx = 0;
		this.onFloor = false;
		this.standingOn = null;

		this.height = this.initialHeight;
		for(let i=0; i < 3; i++) {
			for(let ii=0; ii < 3; ii++) {
				this.generateShortParticle(ii*random(-10, 10), -i*random(5, 10));
			}
		}
	}

	//Sound stuff will go here
	
	get absoluteSpeed() {
		return Math.hypot(this.dy, this.dx);
	}
	
	drawObject() {
		if(!this.locked) {
			this.lastOnFloorState = this.onFloor;

			//character logic
			//keyboard interraction
			let airPenalty = this.onFloor ? 2 : 0.1;
			if(right && this.active) this.dx+=speed * airPenalty;
			if(left && this.active)  this.dx-=speed * airPenalty;
			
			this.dx = this.dx > maxSpeed ? maxSpeed : this.dx;
			this.dx = this.dx < -maxSpeed ? -maxSpeed : this.dx;
			
			//world interraction
			if(this.onFloor) {
				if(up && this.active) {
					this.y-=1;
					this.dy = -jumpStrengh;
					this.onFloor = false;
					this.standingOn = null;
					for(let p = 0; p < 3; p++) this.generateParticle(this.dx + random(-5, 5), -g*random(5, 10));
				}
				this.dx*=grip;
			} else {
				this.y+=this.dy; //add gravity
				this.dy+=g;
			}
			
			//up down wall interaction
			if(this.standingOn == null) {
				for(let i=0; i < collisionPlatforms.length; i++) {
					let tPlatform = collisionPlatforms[i];
					if(this.x + this.width > tPlatform.x && this.x < tPlatform.x + tPlatform.width) { // within X bounds
						if(strip(this.y + this.height + this.dy) >= strip(tPlatform.y) && strip(this.y + this.height) <= strip(tPlatform.y)) { //about to cross into the box from the top
							this.onFloor = true;
							this.standingOn = tPlatform;
							this.y = tPlatform.y - this.height;
							this.dy = 0;

							if(this.frameInTheAir > 3) hit.play();

							this.standingOn.standingOnAction(this);
							for(let p = 0; p < this.dy/3; p++) this.generateParticle(this.dx * random(-2, 2), -this.dy*random(1.5, 3));

						} else if(strip(this.y + this.dy) < strip(tPlatform.y + tPlatform.height) && strip(this.y) > strip(tPlatform.y + tPlatform.height)) { //about to cross into box from the bottom
							this.dy = g;
							this.y = strip(tPlatform.y + tPlatform.height);
							tPlatform.touchingAction(this);

							hit.play();

						} if(strip(this.y + this.dy + this.height) > strip(tPlatform.y) && strip(this.y) < strip(tPlatform.y + tPlatform.height)) {
							console.log("came into the box");
							hit.play();
							if(strip(this.y) > strip(tPlatform.y + tPlatform.height / 2) ) {
								this.dy=g;
								this.y = strip(tPlatform.y + tPlatform.height);
							} else {
								this.dy = 0;
								this.y = strip(tPlatform.y - this.height);
							}
						}
					}
				}
			} else {
				if(this.x + this.width > this.standingOn.x && this.x < this.standingOn.x + this.standingOn.width) {
					this.standingOn.standingOnAction(this);

				} else {
					this.standingOn = null;
					this.onFloor = false;
					this.dy = 0;
				}
			}
			
			//left right wall interaction
			for(let i=0; i < collisionPlatforms.length; i++) {
				let tPlatform = collisionPlatforms[i];
				if((strip(this.y + this.height) > tPlatform.y && this.y < strip(tPlatform.y + tPlatform.height))) {
					if(this.x + this.width + this.dx > tPlatform.x && this.x + this.width <= tPlatform.x) {
						this.x = tPlatform.x - this.width;
						this.dx = 0;
						tPlatform.touchingAction(this);
					} else if(this.x + this.dx <= tPlatform.x + tPlatform.width && this.x >= tPlatform.x + tPlatform.width) {
						this.x = tPlatform.x + tPlatform.width;
						this.dx = 0;
						tPlatform.touchingAction(this);
					}
				}
			}
			
			this.x+=this.dx;

			if(this.y > maxY) {
				this.x = this.initialx;
				this.y = this.initialy;
				this.y = this.x = 0;
			}

			if (this.lastOnFloorState || this.onFloor) {
				this.frameInTheAir = 0;
			} else {
				this.frameInTheAir++;
			}

			this.particleSystem();

			noStroke();
			fill(this.color);
			rect(this.x, this.y, this.width, this.height);

		} else { //assuming it's inside the box
			noStroke();
			fill(this.color);
			//rect(this.x, this.y+100-this.width, this.width, this.height); // x will be set when the chalk will go into the box

			if(this.active && up && !endState) {
				this.locked = false;
				this.dy = -10;
				goal.in.splice(goal.in.indexOf(this), 1);
			}


		}

		//character drawing

	}

	particleSystem() {
		let emittRate = this.emittRate + random(-20,20);
		if(this.emittNumber > emittRate) {
			this.emittNumber -= emittRate;
			this.generateParticle(this.dx, -this.dy -5);
		}

		if(this.onFloor) this.emittNumber+=this.absoluteSpeed;
	}

}