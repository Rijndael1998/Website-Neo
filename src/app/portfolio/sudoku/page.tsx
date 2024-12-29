import Lazy from "@/components/lazy/_lazy";
import SudokuCollection from "@/components/algorithms/sudoku/sudokuCollection";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SudokuText from "./SudokuText.mdx"

export const metadata = {
    title: "How to solve a Sudoku Puzzle? + Solver!",
    description: "This page guides you step by step on how to solve a sudoku puzzle and also includes an interactive solver.",
}

export default function Sudoku() {
    return <Lazy doNothing>
        <h1 style={{ margin: "1rem 0" }}>Sudoku Solver</h1>

        <SudokuCollection />

        <div style={{ margin: "1em 0" }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Solving a Sudoku Puzzle</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <SudokuText />
                </AccordionDetails>
            </Accordion>
        </div>
    </Lazy>
}