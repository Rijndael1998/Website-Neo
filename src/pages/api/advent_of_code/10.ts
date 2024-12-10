import { AdventOfCodeSolutionFunction } from "./solutions";
import { DirectDirections, Grid, search_direction } from "./utils/grids";
import { Point } from "./utils/structures/point";
import { Duplicate2DArray, makeGridFromMultilineString, prettyPrint2d } from "./utils/utils";

class LinkedPoint extends Point<number> {
    next?: LinkedPoint;

    constructor(x: number, y: number, val: number) {
        super(x, y, val);
    }
}

export const solution_10: AdventOfCodeSolutionFunction = (input) => {
    let part_1 = 0;
    let part_2 = 0;

    const map: Grid<LinkedPoint> =
        makeGridFromMultilineString(input)
        .map((row) => row.map((item) => item != "." ? Number(item) : -1))
        .map((row, y) => row.map((item, x) => new LinkedPoint(x, y, item)));

    console.log(prettyPrint2d(map.map((v) => v.map(v => v.item))));

    let searchNodes: Array<LinkedPoint> = [];

    // find the starts
    map.forEach((row) => row.forEach((v) => {
        if (v.item == 0)
            searchNodes.push(v);
    }));

    console.log(searchNodes);

    for (let searchItem = 1; searchItem < 10; searchItem++) {

    }

    console.log(searchNodes);

    return {
        part_1: searchNodes.length,
        part_2,
    }
}

