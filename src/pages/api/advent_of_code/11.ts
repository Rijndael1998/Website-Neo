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

export const solution_11: AdventOfCodeSolutionFunction = (input) => {
    const stones = input.trim().split(" ").map((v) => Number(v));
    log(stones);

    const part_1 = 0;

    return {
        part_1,
        part_2: stones.length,
    }
}

