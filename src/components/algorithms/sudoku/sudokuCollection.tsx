"use client";

import { EasyGrid, HardGrid } from "@/components/algorithms/sudoku/testGrids";
import { backtracking } from "@/components/algorithms/sudoku/sudokuWorker";
import SudokuGrid from "@/components/algorithms/sudoku/_grid";
import GenericButton from "@/components/input/genericButton/_genericButton";
import { Duplicate2DArray } from "@/components/util";
import { useState } from "react";
import styles from "./sudoku.module.scss";
// import buttonStyles from "../../input/genericButton/genericButton.module.scss";

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

    return <>
        <div className={styles.controlWrapper}>
            <div className={styles.buttonWrapper}>
                <GenericButton className={buttonStyles.bigButton} onClick={() => puzzleHandler("easy")}>Easy Puzzle</GenericButton>
                <GenericButton className={buttonStyles.bigButton} onClick={() => puzzleHandler("hard")}>Hard Puzzle</GenericButton>
                <GenericButton className={buttonStyles.bigButton} onClick={() => solve()}>Solve</GenericButton>
                <GenericButton className={buttonStyles.bigButton} onClick={() => setGrid(EmptyGridGen())}>Clear</GenericButton>
            </div>
            <SudokuGrid grid={grid} callback={(x, y, v) => { callback(x, y, v) }} />
        </div>
    </>
}