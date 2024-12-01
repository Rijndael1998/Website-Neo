import { AdventOfCodeSolutionFunction } from "./solutions";

export const solution_1: AdventOfCodeSolutionFunction = (input) => {
    const left: Array<number> = [];
    const right: Array<number> = [];

    const lines = input.split("\n");

    for (let index = 0; index < lines.length; index++) {
        const element = lines[index].trim();
        if(!element)
            continue;

        const leftRight = element.split("   ");
        left.push(Number(leftRight[0]));
        right.push(Number(leftRight[1]));
    }

    const numSort = (a: number, b: number) => a - b;
    left.sort(numSort);
    right.sort(numSort);

    let sum = 0;
    for (let index = 0; index < left.length; index++) {
        const leftValue = left[index];
        const rightValue = right[index];
        
        sum += Math.abs(leftValue - rightValue);
    }

    console.log(left.length, right.length)

    return `${sum}`;
};

