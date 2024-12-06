import { AdventOfCodeSolutionFunction } from "./solutions";
import { Direction } from "./utils/grids";
import { makeGridFromMultilineString } from "./utils/utils";


export const solution_6: AdventOfCodeSolutionFunction = (input) => {
    const grid = makeGridFromMultilineString(input);
    let dir: Direction;

    let [x, y] = gridSearch(grid, (ch) => {
        dir = 
    })

    return {
        part_1: "",
        part_2: "",
    }
}