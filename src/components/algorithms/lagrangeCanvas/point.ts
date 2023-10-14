export class Point {
    x: number;
    y: number;

    hue: number;

	hidden: boolean;

	constructor(x: number, y: number, hue?: number, hidden?: boolean) {
		this.x = x;
		this.y = y;

		//make hue
		this.hue = hue ?? Math.random();

		this.hidden = hidden ?? false;
	}


	moveTo(x: number, y: number) {
		this.x = x;
		this.y = y;
		return this;
	}

	clone() {
		return new Point(this.x, this.y, this.hue, this.hidden);
	}
}