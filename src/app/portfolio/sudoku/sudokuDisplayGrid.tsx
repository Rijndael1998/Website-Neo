import LazyTable, { LazyTableProps } from "@/components/lazy/_lazyTable"
import { Container, Paper } from "@mui/material"
import { containerProps, paperProps } from "./page"
import classNames from "classnames"


export type SudokuDisplayGridType = {
    classes: Array<string>,
    items: LazyTableProps["items"],
}

export default function SudokuDisplayGrid({classes, items}: SudokuDisplayGridType) {
    return <Container {...containerProps}>
        <Paper {...paperProps}>
            <LazyTable className={classNames(...classes)} items={items} />
        </Paper>
    </Container>
}