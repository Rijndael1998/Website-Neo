import { solution_0 } from "./0";
import { solution_1 } from "./1";
import { solution_2 } from "./2";
import { solution_3 } from "./3";
import { solution_4 } from "./4";
import { solution_5 } from "./5";
import { solution_6 } from "./6";
import { solution_7 } from "./7";
import { solution_8 } from "./8";
import { solution_9 } from "./9";

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
    3: solution_3,
    4: solution_4,
    5: solution_5,
    6: solution_6,
    7: solution_7,
    8: solution_8,
    9: solution_9,
};