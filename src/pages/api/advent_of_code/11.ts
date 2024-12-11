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


const calculatePaths = (input: number, ttl = 50): number => {
    if (ttl == 0)
        return 1;

    if (input == 0)
        return calculatePaths(1, ttl - 1);

    if (numHasEvenDigits(input)) {
        // copied from numSplit as to not create and destruct an object as that causes the GC to get cranky
        const valSplitPoint = 10 ** (numLength(input) / 2);
        const valRight = input % valSplitPoint;
        const valLeft = Math.floor((input - valRight) / valSplitPoint);
        return calculatePaths(valRight, ttl - 1) + calculatePaths(valLeft, ttl - 1);
    }

    return calculatePaths(input * 2024, ttl - 1);
}

export const solution_11: AdventOfCodeSolutionFunction = (input) => {
    const stones = input.trim().split(" ").map((v) => Number(v));

    return {
        // 193607
        part_1: stones.reduce<number>((prev, curr) => prev + calculatePaths(curr, 25), 0),
        // ???
        part_2: stones.length,
    }
}

