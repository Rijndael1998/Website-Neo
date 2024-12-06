import { AdventOfCodeSolutionFunction } from "./solutions";
import { Direction, gridSearch, search_direction, SearchExitReason } from "./utils/grids";
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

    let res: SearchExitReason = SearchExitReason.FUNCTION_FINISHED;
    let i = 0; // rate limited for API
    while (res !== SearchExitReason.OUT_OF_BOUNDS && i < 10_000) {
        res = search_direction(grid, x, y, dir, (ch, currX, currY) => {
            if (ch == "#")
                return false;

            [x, y] = [currX, currY];
            addToVisited(x, y);
            return true;
        });
        dir = NextDirection(dir);
    }

    return {
        part_1: visited.size, // 4656
        part_2: res,
    }
}