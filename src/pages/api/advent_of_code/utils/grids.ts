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
export type SearchFindFunction = (currChar: string) => boolean;

export type Grid = Array<Array<string>>;

export const search_direction = (grid: Grid, x: number, y: number, direction: Direction, find: SearchFindFunction): 0 | 1 => {
    // exit conditions
    // no more to find
    if (find.length == 0)
        return 1; // found the end

    // invalid coords
    if (check_coords(grid, x, y))
        return 0;

    // wrong character
    if (!find(grid[y][x]))
        return 0;

    switch (direction) {
        case Direction.UP:
            return search_direction(grid, x, y + 1, direction, find);

        case Direction.UP_RIGHT:
            return search_direction(grid, x + 1, y + 1, direction, find);

        case Direction.RIGHT:
            return search_direction(grid, x + 1, y, direction, find);

        case Direction.BOTTOM_RIGHT:
            return search_direction(grid, x + 1, y - 1, direction, find);

        case Direction.BOTTOM:
            return search_direction(grid, x, y - 1, direction, find);

        case Direction.BOTTOM_LEFT:
            return search_direction(grid, x - 1, y - 1, direction, find);

        case Direction.LEFT:
            return search_direction(grid, x - 1, y, direction, find);

        case Direction.UP_LEFT:
            return search_direction(grid, x - 1, y + 1, direction, find);

        default:
            return 0;
    }
}

export const gridSearch = (grid: Grid, st: SearchFindFunction): [x: number, y: number] => {
    for (let searchY = 0; searchY < grid.length; searchY++) {
        const row = grid[searchY];
        for (let searchX = 0; searchX < row.length; searchX++) {
            const element = row[searchX];
            if(!st(element))
                return [searchX, searchY];
        }
    }

    return [-1, -1];
}