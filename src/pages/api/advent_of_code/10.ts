import { AdventOfCodeSolutionFunction } from "./solutions";
import { DirectDirections, Grid, search_direction } from "./utils/grids";
import { LinkedPoint } from "./utils/structures/linkedPoint";
import { Point } from "./utils/structures/point";
import { Duplicate2DArray, makeGridFromMultilineString, prettyPrint2d } from "./utils/utils";

export const solution_10: AdventOfCodeSolutionFunction = (input) => {
    let part_1 = 0;
    let part_2 = 0;

    const map: Grid<LinkedPoint> =
        makeGridFromMultilineString(input)
        .map((row) => row.map((item) => item != "." ? Number(item) : -1))
        .map((row, y) => row.map((item, x) => new LinkedPoint(x, y, item, undefined!)));

    map.flat().forEach((v) => v.grid = map);

    console.log(prettyPrint2d(map.map((v) => v.map(v => v.item))));

    const startNodes: Array<LinkedPoint> = map.flat().filter(v => v.item == 0);

    console.log(startNodes);
    startNodes.forEach(v => v.lookAround());

    return {
        part_1,
        part_2,
    }
}

