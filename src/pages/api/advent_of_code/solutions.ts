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
import { solution_10 } from "./10";
import { solution_11 } from "./11";
import { solution_12 } from "./12";
import { solution_13 } from "./13";
import { solution_14 } from "./14";
import { solution_15 } from "./15";
import { solution_16 } from "./16";
import { solution_17 } from "./17";
import { solution_18 } from "./18";
import { solution_19 } from "./19";
import { solution_20 } from "./20";
import { solution_21 } from "./21";
import { solution_22 } from "./22";
import { solution_23 } from "./23";
import { solution_24 } from "./24";
import { solution_25 } from "./25";

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
    10: solution_10,
    11: solution_11,
    12: solution_12,
    13: solution_13,
    14: solution_14,
    15: solution_15,
    16: solution_16,
    17: solution_17,
    18: solution_18,
    19: solution_19,
    20: solution_20,
    21: solution_21,
    22: solution_22,
    23: solution_23,
    24: solution_24,
    25: solution_25,
};