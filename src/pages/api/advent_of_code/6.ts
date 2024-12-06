import { AdventOfCodeSolutionFunction } from "./solutions";
import { Direction, gridSearch, search_direction } from "./utils/grids";
import { makeGridFromMultilineString } from "./utils/utils";

const NextDirection = (dir: Direction) => {
    switch (dir) {
        case Direction.UP:
            return Direction.RIGHT;
        case Direction.RIGHT:
            return Direction.BOTTOM;
        case Direction.BOTTOM:
            return Direction.LEFT;
        case Direction.LEFT:
            return Direction.UP;
        default:
            throw Error("Invalid direction");
    }
}


export const solution_6: AdventOfCodeSolutionFunction = (input) => {
    const grid = makeGridFromMultilineString(input);
    const visited = new Set<string>();

    const addToVisited = (x: number, y: number) =>
        visited.add(`${x}:${y}`);

    let dir: Direction = Direction.UP;
    let [x, y] = gridSearch(grid, (ch) => ch !== "^");

    addToVisited(x, y);
    const res = search_direction(grid, x, y, dir, (ch, currX, currY) => {
        console.log(currX, currY, ch);
        if (ch == "#")
            return false;

        [x, y] = [currX, currY];
        return true;
    });

    console.log(x, y, grid[y][x]);

    return {
        part_1: `${x}, ${y}`,
        part_2: res,
    }
}