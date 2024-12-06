import { AdventOfCodeSolutionFunction } from "./solutions";
import { Direction, gridSearch } from "./utils/grids";
import { makeGridFromMultilineString } from "./utils/utils";


export const solution_6: AdventOfCodeSolutionFunction = (input) => {
    const grid = makeGridFromMultilineString(input);
    let dir: Direction = Direction.UP;
    let [x, y] = gridSearch(grid, (ch) => ch == "^");

    return {
        part_1: `${x}, ${y}`,
        part_2: "",
    }
}