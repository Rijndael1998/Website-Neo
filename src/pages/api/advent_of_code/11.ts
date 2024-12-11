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

let pathMemo: Map<number, Map<number, number>> = new Map();
const addToPathMemoProxy = (input: number, ttl: number, result: number) => {
    if (!pathMemo.has(input))
        pathMemo.set(input, new Map());

    pathMemo.get(input)!.set(ttl, result);
    return result;
}

const calculatePaths = (input: number, ttl = 25): number => {
    // check and get stored value from memo
    const memo = pathMemo.get(input)?.get(ttl);
    if (memo !== undefined)
        return memo;

    if (ttl == 0)
        return 1;

    if (input == 0) {
        return addToPathMemoProxy(input, ttl, calculatePaths(1, ttl - 1));
    }

    if (numHasEvenDigits(input)) {
        const valSplitPoint = 10 ** (numLength(input) / 2);
        const valRight = input % valSplitPoint;
        return addToPathMemoProxy(input, ttl, calculatePaths(valRight, ttl - 1) + calculatePaths(Math.floor((input - valRight) / valSplitPoint), ttl - 1));
    }

    return addToPathMemoProxy(input, ttl, calculatePaths(input * 2024, ttl - 1));
}

export const solution_11: AdventOfCodeSolutionFunction = (input) => {
    const stones = input.trim().split(" ").map((v) => Number(v));

    const part_1 = stones.reduce<number>((prev, curr) => prev + calculatePaths(curr), 0);
    // pathMemo = new Map();

    const part_2 = stones.reduce<number>((prev, curr) => prev + calculatePaths(curr, 75), 0);

    return {
        part_1, // 193607
        part_2, // 229557103025807
    }
}

