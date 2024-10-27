"use client";

import { EasyGrid, HardGrid } from "@/components/algorithms/sudoku/testGrids";
import { backtracking } from "@/components/algorithms/sudoku/sudokuWorker";
import SudokuGrid from "@/components/algorithms/sudoku/_grid";
import { Duplicate2DArray } from "@/components/util";
import { useState } from "react";
import { Button, Container, Paper, Snackbar, SnackbarCloseReason } from "@mui/material";
import { default as Grid } from "@mui/material/Grid2";
import { elementProps, elementPropsType } from "./sudokuConstants";

const containerProps: elementPropsType["container"] = {
    sx: {
        padding: "1em 0",
        overflowX: "auto",
        maxWidth: "calc(100vw - 10em)",
        width: "max-content",
        margin: "auto",
    },
};

const paperProps: elementPropsType["paper"] = {
    elevation: elementProps.paper.elevation,
};

function EmptyGridGen() {
    const grid: Array<Array<number>> = [];
    for (let i = 0; i < 9; i++) {
        grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }

    return grid;
}

export default function SudokuCollection() {
    const [grid, setGrid] = useState<Array<Array<number>>>(EmptyGridGen());
    const [open, setOpen] = useState(false);

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

        // This shows the snackbar which tells you that it's impossible.
        if (result === false) {
            setOpen(true);
            return;
        }

        setGrid(result);
    }

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return <Paper>
        <Grid container overflow={"hidden"}>
            <Grid size={12}>
                <Container {...containerProps}>
                    <Paper {...paperProps}>
                        <SudokuGrid grid={grid} callback={(x, y, v) => { callback(x, y, v) }} />
                    </Paper>
                </Container>
            </Grid>
            <Grid size={12}>
                <Grid container justifyContent={"space-around"} marginBottom={"1em"}>
                    <Grid >
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
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="There's no valid solution for this Sudoku."
        />
    </Paper>
}