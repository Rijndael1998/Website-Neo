import { AdventOfCodeSolutionFunction } from "./solutions";

const isSearch = (row: Array<string>, search: string) => {
    return row.reduce<string>((prev, curr) => prev + curr, "") == search ? 1 : 0;
}

const search_around = (grid: Array<Array<string>>, x: number, y: number, find: string) => {
    const leftLimit = x - find.length + 1 >= 0;
    const rightLimit = x + find.length - 1 < grid[y].length - 1;
    const bottomLimit = y - find.length + 1 >= 0;
    const topLimit = y + find.length - 1 < grid.length - 1;

    if(leftLimit) {
        const res = grid[y].slice(x - find.length, x);
        console.log(res);
    }

    let instances = 0;

    return instances;
}

export const solution_4: AdventOfCodeSolutionFunction = (input) => {
    const grid = input.split("\n").map(st => st.trim()).map(v => v.split(""));

    let part_1 = 0;
    let part_2 = 0;

    for (let y = 0; y < grid.length; y++) {
        const row = grid[y];
        for (let x = 0; x < row.length; x++) {
            console.log(x, y);
            part_1 += search_around(grid, x, y, "XMAS");
        }
    }

    return {
        part_1,
        part_2,
    };
}