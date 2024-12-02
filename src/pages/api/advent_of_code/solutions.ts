import { solution_0 } from "./0";
import { solution_1 } from "./1";
import { solution_2 } from "./2";

export type AdventOfCodeSolution = {
    part_1: string | number,
    part_2: string | number,
};

export type AdventOfCodeSolutionInput = string;
export type AdventOfCodeSolutionFunction = (input: AdventOfCodeSolutionInput) => AdventOfCodeSolution;

export const solutions: {[number: number]: AdventOfCodeSolutionFunction} = {
    0: solution_0,
    1: solution_1,
    2: solution_2,
};