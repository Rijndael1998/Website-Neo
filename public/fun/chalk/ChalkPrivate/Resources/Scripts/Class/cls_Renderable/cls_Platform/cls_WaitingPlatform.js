class WaitingPlatform extends Platform {
	constructor(x, y) {
		super(x, y);
		this.width = 120;
		this.in = [];
		this.relx = this.x;
		this.rely = this.y;
	}

	drawObject() {
		image(chalkbox, this.relx, this.rely);
		noStroke();
		if(this.in.includes(player)) {
			fill(player.color);
			rect(this.relx+20, this.rely + this.height - player.height - 20, 20, player.height);
			player.x = this.relx+20;
		}

		if(this.in.includes(player2)) {
			fill(player2.color);
			rect(this.relx+60, this.rely + this.height - player2.height - 20, 20, player2.height);
			player2.x = this.relx+60;
		}

		if(this.in.includes(player2) && this.in.includes(player) ) {
			GameOver(this);
		}

	}

	touchingAction(p) {
		p.locked = true;
		this.in.push(p);
		p.dx = 0;
		p.dy = 0;
	}

}