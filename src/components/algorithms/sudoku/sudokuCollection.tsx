"use client";

import { EasyGrid, HardGrid } from "@/components/algorithms/sudoku/testGrids";
import { backtracking } from "@/components/algorithms/sudoku/sudokuWorker";
import SudokuGrid from "@/components/algorithms/sudoku/_grid";
import { Duplicate2DArray } from "@/components/util";
import { useState } from "react";
import { Button, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { paperProps } from "./sudokuConstants";



function EmptyGridGen() {
    const grid: Array<Array<number>> = [];
    for (let i = 0; i < 9; i++) {
        grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }

    return grid;
}


export default function SudokuCollection() {
    const [grid, setGrid] = useState<Array<Array<number>>>(EmptyGridGen());

    const callback = (x: number, y: number, v: number) => {
        const newGrid = Duplicate2DArray(grid);
        newGrid[x][y] = v;

        setGrid(newGrid);
    }

    const puzzleHandler = (type: "easy" | "hard") => {
        switch (type) {
            case "easy":
                setGrid(Duplicate2DArray(EasyGrid));
                return;

            case "hard":
                setGrid(Duplicate2DArray(HardGrid));
                return;
        }
    }

    const solve = () => {
        const result = backtracking(Duplicate2DArray(grid), 0);

        // TODO: Handle...
        if (result === false) {
            console.error("no result");
            return;
        }

        setGrid(result);
    }

    return <Paper>
        <Grid container overflow={"hidden"}>
            <Grid xs={12}>
                <Paper {...paperProps}>
                    <SudokuGrid grid={grid} callback={(x, y, v) => { callback(x, y, v) }} />
                </Paper>
            </Grid>
            <Grid xs={12}>
                <Grid container justifyContent={"space-around"} marginBottom={"1em"}>
                    <Grid>
                        <Button onClick={() => puzzleHandler("easy")}>Easy Puzzle</Button>
                    </Grid>
                    <Grid>
                        <Button onClick={() => puzzleHandler("hard")}>Hard Puzzle</Button>
                    </Grid>
                    <Grid>
                        <Button onClick={() => setGrid(EmptyGridGen())}>Clear</Button>
                    </Grid>
                    <Grid>
                        <Button onClick={() => solve()}>Solve</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
}