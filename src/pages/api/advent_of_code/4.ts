import { AdventOfCodeSolutionFunction } from "./solutions";

enum Direction {
    UP,
    UP_RIGHT,
    RIGHT,
    BOTTOM_RIGHT,
    BOTTOM,
    BOTTOM_LEFT,
    LEFT,
    UP_LEFT,
};

const ALL_DIRECTIONS = [
    Direction.RIGHT,
    Direction.BOTTOM_RIGHT,
    Direction.BOTTOM,
    Direction.BOTTOM_LEFT,
    Direction.LEFT,
    Direction.UP_LEFT,
    Direction.UP,
    Direction.UP_RIGHT,
];

const check_coords = (grid: Array<Array<string>>, x: number, y: number) => {
    return y >= grid.length ||
        y < 0 ||
        x >= grid[y].length ||
        x < 0
}

const search_direction = (grid: Array<Array<string>>, x: number, y: number, direction: Direction, find: Array<string>) => {
    // exit conditions
    // no more to find
    if (find.length == 0)
        return 1; // found the end

    // invalid coords
    if (check_coords(grid, x, y))
        return 0;

    // make new mutable list
    const newFind = [...find];
    const searchChar = newFind.shift();

    // wrong character
    if (grid[y][x] !== searchChar)
        return 0;

    switch (direction) {
        case Direction.UP:
            return search_direction(grid, x, y + 1, direction, newFind);

        case Direction.UP_RIGHT:
            return search_direction(grid, x + 1, y + 1, direction, newFind);

        case Direction.RIGHT:
            return search_direction(grid, x + 1, y, direction, newFind);

        case Direction.BOTTOM_RIGHT:
            return search_direction(grid, x + 1, y - 1, direction, newFind);

        case Direction.BOTTOM:
            return search_direction(grid, x, y - 1, direction, newFind);

        case Direction.BOTTOM_LEFT:
            return search_direction(grid, x - 1, y - 1, direction, newFind);

        case Direction.LEFT:
            return search_direction(grid, x - 1, y, direction, newFind);

        case Direction.UP_LEFT:
            return search_direction(grid, x - 1, y + 1, direction, newFind);

        default:
            return 0;
    }
}

const part_1_search = (grid: Array<Array<string>>, x: number, y: number, find: Array<string>) => {
    return ALL_DIRECTIONS.reduce<number>(
        (instances, direction) =>
            instances + search_direction(grid, x, y, direction, find),
        0
    );
}

const part_2_search = (grid: Array<Array<string>>, x: number, y: number, find: Array<string>) => {
    return (
        search_direction(grid, x - 1, y + 1, Direction.BOTTOM_RIGHT, find) +
        search_direction(grid, x + 1, y + 1, Direction.BOTTOM_LEFT, find) +
        search_direction(grid, x - 1, y - 1, Direction.UP_RIGHT, find) +
        search_direction(grid, x + 1, y - 1, Direction.UP_LEFT, find)
    ) == 2 ? 1 : 0;
}

export const solution_4: AdventOfCodeSolutionFunction = (input) => {
    const grid = input.split("\n").map(st => st.trim()).map(v => v.split(""));

    let part_1 = 0;
    let part_2 = 0;

    const find_1 = "XMAS".split("");
    const find_2 = "MAS".split("");

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            part_1 += part_1_search(grid, x, y, find_1);
            part_2 += part_2_search(grid, x, y, find_2);
        }
    }

    return {
        part_1,
        part_2,
    };
}