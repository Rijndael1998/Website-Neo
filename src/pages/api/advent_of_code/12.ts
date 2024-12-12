import { AdventOfCodeSolutionFunction } from "./solutions";
import { Point } from "./utils/structures/point";
import { makeGridFromMultilineString } from "./utils/utils";

class Plot {
    points: Array<Point<string>> = [];
    kind: string;
    
    constructor(kind: string) {
        this.kind = kind;
    }
}

export const solution_12: AdventOfCodeSolutionFunction = (input) => {
    const grid = makeGridFromMultilineString(input).map((v, y) => v.map((v, x) => new Point<string>(x, y, v)));
    console.log(grid);
    
    const res = "Test: " + input;
    return {
        part_1: res,
        part_2: res,
    }
}

