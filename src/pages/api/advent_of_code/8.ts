import { AdventOfCodeSolutionFunction } from "./solutions";
import { MakeEmpty2DArray, MakeEmptyArray, makeGridFromMultilineString } from "./utils/utils";

export const solution_8: AdventOfCodeSolutionFunction = (input) => {
    let part_1 = 0;
    let part_2 = 0;

    const grid = makeGridFromMultilineString(input);
    const nodes = new Map<string, Array<[x: number, y: number]>>();
    const antinodeLocations = MakeEmpty2DArray(grid.length, grid[0].length);

    

    console.log(antinodeLocations);

    return {
        part_1,
        part_2,
    }
}

