import { solution_0 } from "./0";
import { solution_1 } from "./1";

export type AdventOfCodeSolution = string;
export type AdventOfCodeSolutionInput = string;
export type AdventOfCodeSolutionFunction = (input: AdventOfCodeSolutionInput) => AdventOfCodeSolution;

export const solutions: {[number: number]: AdventOfCodeSolutionFunction} = {
    0: solution_0,
    1: solution_1,
};