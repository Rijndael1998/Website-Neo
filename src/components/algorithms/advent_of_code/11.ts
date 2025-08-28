import { AdventOfCodeSolutionFunction } from "./solutions";

export const solution_11: AdventOfCodeSolutionFunction = (input) => {
    // get the number of digits in a value
    const numLength = (num: number) =>
        Math.floor(Math.log10(num)) + 1;

    // check if the number of digits is even
    const numHasEvenDigits = (num: number) =>
        numLength(num) % 2 == 0;

    // store for caching results
    const pathMemo: Map<number, Map<number, number>> = new Map();

    // add a result to the memo cache and get the result
    const addToPathMemoProxy = (input: number, ttl: number, result: number) => {
        if (!pathMemo.has(input))
            pathMemo.set(input, new Map());

        pathMemo.get(input)!.set(ttl, result);
        return result;
    }

    // return the number of stones that the number will produce after a given amount of blinks
    const calculatePaths = (input: number, ttl = 25): number => {
        // check and get stored value from memo
        const memo = pathMemo.get(input)?.get(ttl);
        if (memo !== undefined)
            return memo;

        // the blinks ran out
        if (ttl == 0)
            return 1;

        // the number is 0, so turn it into a 1
        if (input == 0) {
            return addToPathMemoProxy(input, ttl, calculatePaths(1, ttl - 1));
        }

        // the number has an even amount of digits
        if (numHasEvenDigits(input)) {
            const valSplitPoint = 10 ** (numLength(input) / 2);
            const valRight = input % valSplitPoint;
            return addToPathMemoProxy(input, ttl,
                calculatePaths(valRight, ttl - 1) +
                calculatePaths(Math.floor((input - valRight) / valSplitPoint), ttl - 1)
            );
        }

        // the number doesn't match any patterns so multiply it by 2024
        return addToPathMemoProxy(input, ttl, calculatePaths(input * 2024, ttl - 1));
    }

    const stones = input.trim().split(" ").map((v) => Number(v));
    const part_1 = stones.reduce<number>((prev, curr) => prev + calculatePaths(curr), 0);
    const part_2 = stones.reduce<number>((prev, curr) => prev + calculatePaths(curr, 75), 0);

    return {
        part_1, // 193607
        part_2, // 229557103025807
    }
}

