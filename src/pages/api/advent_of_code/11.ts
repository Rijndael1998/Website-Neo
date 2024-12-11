import { AdventOfCodeSolutionFunction } from "./solutions";

class Stone {
    val: number;

    constructor(val: number) {
        this.val = val;
    }

    length() {
        return Math.floor(Math.log10(this.val)) + 1;
    }

    hasEvenDigits() {
        return this.length() % 2 == 0;
    }

    split() {
        const valSplitPoint = 10 ** (this.length() / 2);
        const valRight = this.val % valSplitPoint;
        const valLeft = Math.floor((this.val - valRight) / valSplitPoint);
        return [new Stone(valLeft), new Stone(valRight)];
    }

    blink(): Array<Stone> {
        if (this.val == 0) {
            this.val = 1;
            return [this];
        }

        if(this.hasEvenDigits())
            return this.split();

        this.val = 2024;
        return [this];
    }
}

export const solution_11: AdventOfCodeSolutionFunction = (input) => {
    const res = "Test: " + input;
    return {
        part_1: res,
        part_2: res,
    }
}

