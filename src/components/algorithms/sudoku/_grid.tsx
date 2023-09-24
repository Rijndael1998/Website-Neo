"use client";

import GridItem from "./gridItem"
import { findPossibleSummary } from "./sudokuWorker"

export interface SudokuGridProps {
    grid: Array<Array<number>>,
    callback: (x: number, y: number, value: number) => void,
}

export default function SudokuGrid({ grid, callback }: SudokuGridProps) {
    return <>
        {grid.map((rows, y) => {
            return rows.map((item, x) => {
                return <GridItem
                    key={`${x},${y}`} 
                    value={item} 
                    possible={findPossibleSummary(grid, y, x)} 
                    callback={(v) => callback(y, x, v)} />
            })
        })}
    </>
}