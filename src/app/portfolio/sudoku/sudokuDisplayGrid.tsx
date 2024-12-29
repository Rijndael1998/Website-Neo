import LazyTable, { LazyTableProps } from "@/components/lazy/_lazyTable"
import { Container, Paper } from "@mui/material"
import { elementProps } from "@/components/algorithms/sudoku/sudokuConstants";
import classNames from "classnames"


export type SudokuDisplayGridType = {
    classes: Array<string>,
    items: LazyTableProps["items"],
}

export default function SudokuDisplayGrid({classes, items}: SudokuDisplayGridType) {
    return <Container {...elementProps.container}>
        <Paper {...elementProps.paper}>
            <LazyTable className={classNames(...classes)} items={items} />
        </Paper>
    </Container>
}