import { AdventOfCodeSolutionFunction } from "./solutions";
import { Grid } from "./utils/grids";
import { LinkedPoint } from "./utils/structures/linkedPoint";
import { makeGridFromMultilineString, SumArray } from "./utils/utils";

export const solution_10: AdventOfCodeSolutionFunction = (input) => {
    const map: Grid<LinkedPoint> =
        makeGridFromMultilineString(input)
            .map((row) => row.map((item) => item != "." ? Number(item) : -1))
            .map((row, y) => row.map((item, x) => new LinkedPoint(x, y, item, undefined!)));

    map.flat().forEach((v) => v.grid = map); // promise is a promise

    const startNodes: Array<LinkedPoint> = map.flat().filter(v => v.item == 0);

    const part_1 = SumArray(startNodes.map(v => v.findAllValidPeaks().length));
    const part_2 = SumArray(startNodes.map(v => v.findAllValidPeaksWithReps().length));

    return {
        part_1,
        part_2,
    }
}

