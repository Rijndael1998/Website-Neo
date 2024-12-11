import { AdventOfCodeSolutionFunction } from "./solutions";

const numLength = (num: number) =>
    Math.floor(Math.log10(num)) + 1;

const numHasEvenDigits = (num: number) =>
    numLength(num) % 2 == 0;

const numSplit = (num: number) => {
    const valSplitPoint = 10 ** (numLength(num) / 2);
    const valRight = num % valSplitPoint;
    const valLeft = Math.floor((num - valRight) / valSplitPoint);
    return [valLeft, valRight];
}

const prettyPrint = (input: Array<number>) =>
    input.reduce<string>((prev, curr) => `${prev} ${curr}`, "");

const log = (input: Array<number>) =>
    console.log(prettyPrint(input));

const blinkInPlace = (stones: Array<number>) => {
    for (let index = 0; index < stones.length; index++) {
        if (stones[index] == 0) {
            stones[index] = 1;
            continue;
        }

        if (numHasEvenDigits(stones[index])) {
            stones.splice(index, 1, ...numSplit(stones[index]));
            index++;
            continue;
        }

        stones[index] *= 2024;
    }
}

export const solution_11: AdventOfCodeSolutionFunction = (input) => {
    const stones = input.trim().split(" ").map((v) => Number(v));

    // blink the stones 25 times
    for (let blink = 0; blink < 25; blink++)
        blinkInPlace(stones);

    const part_1 = stones.length;

    // blink the stones 50 more times
    for (let blink = 0; blink < 50; blink++) {
        blinkInPlace(stones);
        console.log(blink + 25, Date());
    }
        

    return {
        part_1,
        part_2: stones.length,
    }
}

