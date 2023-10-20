"use strict";

class LagrangeFraction {
	constructor(minuxX, denominator) {
		this.minuxX = minuxX;
		this.denominator = denominator - minuxX;
	}

	F(x) {
		return (x - this.minuxX) / this.denominator;
	}
}

class LagrangeChunk {
	constructor(multiplier) {
		this.multiplier = multiplier;
		this.fractions = [];
	}

	addFraction(fraction) {
		this.fractions.push(fraction);
	}

	F(x) {
		let sum = this.multiplier;
		for (let fraction = 0; fraction < this.fractions.length; fraction++) {
			sum *= this.fractions[fraction].F(x);
		}
		return sum;
	}
}

class Lagrange {
	constructor(points) {
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

	F(x) {
		let sum = 0;
		for (let i = 0; i < this.lagrangeChunks.length; i++) {
			sum += this.lagrangeChunks[i].F(x);
		}
		return sum;
	} 
}


