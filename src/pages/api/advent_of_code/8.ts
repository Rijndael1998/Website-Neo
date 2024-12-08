import { AdventOfCodeSolutionFunction } from "./solutions";
import { MakeEmpty2DArray, MakeEmptyArray, makeGridFromMultilineString } from "./utils/utils";

export const solution_8: AdventOfCodeSolutionFunction = (input) => {
    let part_1 = 0;
    let part_2 = 0;

    const grid = makeGridFromMultilineString(input);
    const nodes = new Map<string, Array<[x: number, y: number]>>();
    const nodeKinds = [];
    const antinodeLocations = MakeEmpty2DArray(grid.length, grid[0].length);

    // find all the nodes
    grid.forEach((row, y) => row.forEach((item, x) => {
        if(item == ".")
            return;

        if(nodes.has(item))
            nodes.get(item)!.push([x, y]);

        else {
            nodes.set(item, [[x, y]]);
            nodeKinds.push(item);
        }

    }));

    console.log(nodes);

    return {
        part_1,
        part_2,
    }
}

