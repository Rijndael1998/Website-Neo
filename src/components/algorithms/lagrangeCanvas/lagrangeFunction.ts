import { LagrangeChunk } from "./chunk";
import { LagrangeFraction } from "./fraction";
import { Point } from "./point";

export class LagrangeFunction {
    lagrangeChunks: Array<LagrangeChunk>;

	constructor(points: Array<Point>) {
		this.lagrangeChunks = [];

		for (let i = 0; i < points.length; i++) {
			let lagrangeChunk = new LagrangeChunk(points[i].y);

			for (let j = 0; j < points.length; j++) {
				if(i == j) continue;
				let fraction = new LagrangeFraction(points[j].x, points[i].x);
				lagrangeChunk.addFraction(fraction);
			}

			this.lagrangeChunks.push(lagrangeChunk);
		}
	}

	F(x: number) {
		let sum = 0;
		for (let i = 0; i < this.lagrangeChunks.length; i++) {
			sum += this.lagrangeChunks[i].F(x);
		}
		return sum;
	}
}