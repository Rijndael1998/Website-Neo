import { AdventOfCodeSolutionFunction } from "./solutions";

export const solution_3: AdventOfCodeSolutionFunction = (input) => {
    const mul_regex = /mul\((\d+),(\d+)\)/g;

    let mul_sum = 0;
    [...input.matchAll(mul_regex)].forEach((val) => {
        mul_sum += Number(val[1]) * Number(val[2]);
    });

    return {
        part_1: `${mul_sum}`,
        part_2: "",
    };
}