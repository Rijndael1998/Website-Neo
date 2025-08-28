import { AdventOfCodeSolutionFunction } from "./solutions";

function InstancesOf(sorted_array: Array<number>, value: number) {
    const index = sorted_array.indexOf(value);
    if(index == -1)
        return 0;

    let sum = 1;

    for (let array_index = index + 1; array_index < sorted_array.length; array_index++) {
        if(sorted_array[array_index] != value)
            break;
        
        sum += 1;
    }

    return sum;
}

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

    let sum1 = 0;
    let sum2 = 0;
    for (let index = 0; index < left.length; index++) {
        const leftValue = left[index];
        const rightValue = right[index];
        
        sum1 += Math.abs(leftValue - rightValue);
        sum2 += left[index] * InstancesOf(right, left[index]);
    }

    return {
        part_1: sum1,
        part_2: sum2,
    }
}