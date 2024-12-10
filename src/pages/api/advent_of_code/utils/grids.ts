export const check_coords = <T>(grid: Array<Array<T>>, x: number, y: number) => {
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

export const DirectDirections = [
    Direction.UP,
    Direction.RIGHT,
    Direction.BOTTOM,
    Direction.LEFT,
];

export const DiagonalDirections = [
    Direction.UP_RIGHT,
    Direction.UP_LEFT,
    Direction.BOTTOM_RIGHT,
    Direction.BOTTOM_LEFT,
];

export const AllDirections = [...DirectDirections, ...DiagonalDirections].sort();

/**
 * This function should return true if it wants the search function to continue
 */
export type SearchFindFunction<T> = (currChar: T, x: number, y: number) => boolean;

export type Grid<T> = Array<Array<T>>;

export enum SearchExitReason {
    OUT_OF_BOUNDS,
    FUNCTION_FINISHED,
    INVALID_DIRECTION,
}

export const search_direction = <T>(grid: Grid<T>, x: number, y: number, direction: Direction, find: SearchFindFunction<T>): SearchExitReason => {
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

export const gridSearch = <T>(grid: Grid<T>, st: SearchFindFunction<T>): [x: number, y: number] => {
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