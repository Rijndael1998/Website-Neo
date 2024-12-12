import { AdventOfCodeSolutionFunction } from "./solutions";
import { LinkedPoint } from "./utils/structures/linkedPoint";
import { Point } from "./utils/structures/point";
import { makeGridFromMultilineString } from "./utils/utils";

class Plot {
    points: Array<Point<string>> = [];
    kind: string;

    constructor(kind: string) {
        this.kind = kind;
    }
}

class PlotPoint extends LinkedPoint<string, PlotPoint> {

}

export const solution_12: AdventOfCodeSolutionFunction = (input) => {
    const grid = makeGridFromMultilineString(input).map((v, y) => v.map((v, x) => new PlotPoint(x, y, v, undefined!)));
    grid.flat().map(v => v.grid = grid);

    console.log(grid);
    
    const res = "Test: " + input;
    return {
        part_1: res,
        part_2: res,
    }
}

