import { AdventOfCodeSolutionFunction } from "./solutions";
import { Direction, Grid, gridSearch, search_direction, SearchExitReason } from "./utils/grids";
import { Duplicate2DArray, makeGridFromMultilineString } from "./utils/utils";

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

/**
 * @returns true if there are no loops
 */
const NoLoops = (grid: Grid, x: number, y: number, dir: Direction) => {
    const visited = new Set<string>();

    /**
     * @returns True if not visited yet
     */
    const addToVisited = (x: number, y: number, dir: Direction) => {
        const log = `${x}:${y}:${dir}`;
        console.log(log);

        if (visited.has(log))
            return false;

        visited.add(log);
        return true;
    }

    let searchResult: SearchExitReason = SearchExitReason.FUNCTION_FINISHED;
    let res = true;
    let i = 0; // rate limited for API
    while (searchResult !== SearchExitReason.OUT_OF_BOUNDS && i < 10_000) {
        searchResult = search_direction(grid, x, y, dir, (ch, currX, currY) => {
            if (ch == "#")
                return false;

            res = addToVisited(currX, currY, dir);
            console.log(x, y, dir, res);
            return res;
        });
        dir = NextDirection(dir);
    }

    return res;
}


export const solution_6: AdventOfCodeSolutionFunction = (input) => {
    const grid = makeGridFromMultilineString(input);
    const visited = new Map<string, [x: number, y: number]>();

    const addToVisited = (x: number, y: number) => {
        const loc = `${x}:${y}`;
        if (!visited.has(loc))
            visited.set(loc, [x, y]);
    }

    let dir: Direction = Direction.UP;
    let [x, y] = gridSearch(grid, (ch) => ch !== "^");
    const [initialX, initialY] = [x, y];

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

    const part_1 = visited.size;

    // remove starting position for part 1
    visited.delete(`${initialX}:${initialY}`);

    let part_2 = 0;
    visited.forEach((v) => {
        const [newX, newY] = v;
        const newGrid = Duplicate2DArray(grid);
        newGrid[newY][newX] = "#"; // add a block
        console.log("obs", v);
        if(!NoLoops(grid, initialX, initialY, Direction.UP))
            part_2++;
    });

    return {
        part_1, // 4656
        part_2,
    }
}