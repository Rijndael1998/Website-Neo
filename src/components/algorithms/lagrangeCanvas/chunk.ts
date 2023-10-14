import { LagrangeFraction } from "./fraction";

export class LagrangeChunk {
    multiplier: number;
    fractions: Array<LagrangeFraction>;

	constructor(multiplier: number) {
		this.multiplier = multiplier;
		this.fractions = [];
	}

	addFraction(fraction: LagrangeFraction) {
		this.fractions.push(fraction);
	}

	F(x: number) {
		let sum = this.multiplier;
		for (let fraction = 0; fraction < this.fractions.length; fraction++) {
			sum *= this.fractions[fraction].F(x);
		}
		return sum;
	}
}