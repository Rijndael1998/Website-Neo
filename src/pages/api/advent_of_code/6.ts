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

        if (visited.has(log))
            return false;

        visited.add(log);
        return true;
    }

    let searchResult: SearchExitReason = SearchExitReason.FUNCTION_FINISHED;
    let res = true;
    let i = 0; // rate limited for API
    let [lastX, lastY] = [x, y];
    while (searchResult !== SearchExitReason.OUT_OF_BOUNDS && i++ < 10_000) {
        searchResult = search_direction(grid, lastX, lastY, dir, (ch, currX, currY) => {
            if (ch == "#")
                return false;

            [lastX, lastY] = [currX, currY];

            res = addToVisited(currX, currY, dir);
            return res;
        });

        if (!res)
            break;

        dir = NextDirection(dir);
    }

    return res;
}


export const solution_6: AdventOfCodeSolutionFunction = (input) => {
    const grid = makeGridFromMultilineString(input);
    const visited = new Map<string, [x: number, y: number, dir: Direction, prevX: number, prevY: number]>();
    let [x, y] = gridSearch(grid, (ch) => ch !== "^");
    const [initialX, initialY] = [x, y];
    let dir: Direction = Direction.UP;

    const addToVisited = (visitedX: number, visitedY: number, dir: Direction) => {
        const loc = `${visitedX}:${visitedY}`;
        if (!visited.has(loc))
            visited.set(loc, [visitedX, visitedY, dir, x, y]);
    }

    addToVisited(x, y, dir);

    let res: SearchExitReason = SearchExitReason.FUNCTION_FINISHED;
    let i = 0; // rate limited for API
    while (res !== SearchExitReason.OUT_OF_BOUNDS && i++ < 10_000) {
        res = search_direction(grid, x, y, dir, (ch, currX, currY) => {
            if (ch == "#")
                return false;

            addToVisited(currX, currY, dir);
            [x, y] = [currX, currY];
            return true;
        });
        dir = NextDirection(dir);
    }

    const part_1 = visited.size;

    // remove starting position for part 1
    visited.delete(`${initialX}:${initialY}`);

    let part_2 = 0;
    visited.forEach((v) => {
        const [visitedX, visitedY, visitedDirection, prevX, prevY] = v;
        const newGrid = Duplicate2DArray(grid);
        newGrid[visitedY][visitedX] = "#"; // add a block

        // look for loops
        if (!NoLoops(newGrid, prevX, prevY, visitedDirection))
            part_2++;
    });

    return {
        part_1, // 4656
        part_2, // 1575
    }
}