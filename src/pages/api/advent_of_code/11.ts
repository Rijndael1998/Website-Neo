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
            return [new Stone(1)];
        }

        if (this.hasEvenDigits())
            return this.split();

        return [new Stone(this.val * 2024)];
    }
}

const prettyPrint = (input: Array<Stone>) =>
    input.reduce<string>((prev, curr) => `${prev} ${curr.val}`, "");

const log = (input: Array<Stone>) =>
    console.log(prettyPrint(input));

export const solution_11: AdventOfCodeSolutionFunction = (input) => {
    let stones = input.trim().split(" ").map((v) => new Stone(Number(v)));
    log(stones);

    // blink 25 times
    for (let blink = 0; blink < 25; blink++) {
        stones = stones.flatMap(stone => stone.blink());
    }

    const part_1 = stones.length; // 193607

    // blink 50 times 
    for (let blink = 0; blink < 50; blink++) {
        stones = stones.flatMap(stone => stone.blink());
    }

    return {
        part_1,
        part_2: stones.length,
    }
}

