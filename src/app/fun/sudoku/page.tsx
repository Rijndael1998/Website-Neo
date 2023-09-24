"use client";

import SudokuGrid from "@/components/algorithms/sudoku/_grid";
import { Duplicate2DArray } from "@/components/util";
import { useState } from "react";

function EmptyGridGen() {
    const grid: Array<Array<number>> = [];
    for (let i = 0; i < 9; i++) {
        grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    }

    return grid;
}

export default function Sudoku() {
    const [grid, setGrid] = useState<Array<Array<number>>>(EmptyGridGen());

    const callback = (x: number, y: number, v: number) => {
        console.log("cb", x, y, v);

        const newGrid = Duplicate2DArray(grid);
        newGrid[x][y] = v;

        setGrid(newGrid);
    }

    console.log(grid);

    return <>
        <h1>Sudoku Solver</h1>
        <div>
            <SudokuGrid grid={grid} callback={(x, y, v) => { callback(x, y, v) }} />
        </div>
    </>
}