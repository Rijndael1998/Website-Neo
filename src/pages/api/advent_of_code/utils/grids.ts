export const check_coords = (grid: Grid, x: number, y: number) => {
    return y >= grid.length ||
        y < 0 ||
        x >= grid[y].length ||
        x < 0
}

export enum Direction {
    UP,
    UP_RIGHT,
    RIGHT,
    BOTTOM_RIGHT,
    BOTTOM,
    BOTTOM_LEFT,
    LEFT,
    UP_LEFT,
};

/**
 * This function should return true if it wants the search function to continue
 */
export type SearchFindFunction = (currChar: string, x: number, y: number) => boolean;

export type Grid = Array<Array<string>>;

enum SearchExitReason {
    OUT_OF_BOUNDS,
    FUNCTION_FINISHED,
    INVALID_DIRECTION,
}

export const search_direction = (grid: Grid, x: number, y: number, direction: Direction, find: SearchFindFunction): SearchExitReason => {
    // invalid coords
    if (check_coords(grid, x, y))
        return SearchExitReason.OUT_OF_BOUNDS;

    // search failed
    if (!find(grid[y][x], x, y))
        return SearchExitReason.FUNCTION_FINISHED;

    switch (direction) {
        case Direction.UP:
            return search_direction(grid, x, y - 1, direction, find);

        case Direction.UP_RIGHT:
            return search_direction(grid, x + 1, y - 1, direction, find);

        case Direction.RIGHT:
            return search_direction(grid, x + 1, y, direction, find);

        case Direction.BOTTOM_RIGHT:
            return search_direction(grid, x + 1, y + 1, direction, find);

        case Direction.BOTTOM:
            return search_direction(grid, x, y + 1, direction, find);

        case Direction.BOTTOM_LEFT:
            return search_direction(grid, x - 1, y + 1, direction, find);

        case Direction.LEFT:
            return search_direction(grid, x - 1, y, direction, find);

        case Direction.UP_LEFT:
            return search_direction(grid, x - 1, y - 1, direction, find);

        default:
            return SearchExitReason.INVALID_DIRECTION;
    }
}

export const gridSearch = (grid: Grid, st: SearchFindFunction): [x: number, y: number] => {
    for (let y = 0; y < grid.length; y++) {
        const row = grid[y];
        for (let x = 0; x < row.length; x++) {
            const char = row[x];
            if(!st(char, x, y))
                return [x, y];
        }
    }

    return [-1, -1];
}