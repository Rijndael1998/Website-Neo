"use client";

import GridItem from "./gridItem";
import { findPossibleSummary } from "./sudokuWorker";
import styles from "./grid.module.scss";

export interface SudokuGridProps {
    grid: Array<Array<number>>,
    callback: (x: number, y: number, value: number) => void,
}

export default function SudokuGrid({ grid, callback }: SudokuGridProps) {
    return <div className={styles.gridWrapper}>
        <div className={styles.grid}>
            {grid.map((rows, y) => {
                return <div key={`${y}`} className={styles.row}>
                    {
                        rows.map((item, x) => {
                            return <GridItem
                                key={`${x},${y}`}
                                value={item}
                                possible={findPossibleSummary(grid, y, x)}
                                callback={(v) => callback(y, x, v)} />
                        })
                    }
                </div>
            })}
        </div>
    </div>
}