import styles from "@/components/algorithms/sudoku/sudoku.module.scss";
import sudokuStyle from "@/components/algorithms/sudoku/lazyTable.sudoku.module.scss";
import Lazy from "@/components/lazy/_lazy";
import Link from "next/link";
import LazyTable from "@/components/lazy/_lazyTable";
import SudokuCollection from "@/components/algorithms/sudoku/sudokuCollection";
import { easyGrid, easyGridDone, easyGridSnippet, easyGridSnippet2, easyGridSnippet3, hardGrid, hardGridDone } from "@/app/portfolio/sudoku/Sudoku";
import classNames from "classnames";
import { Accordion, AccordionDetails, AccordionSummary, Container, Paper } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { elementProps } from "@/components/algorithms/sudoku/sudokuConstants";

export const metadata = {
    title: "How to solve a Sudoku Puzzle? + Solver!",
    description: "This page guides you step by step on how to solve a sudoku puzzle and also includes an interactive solver.",
}

const paperProps = elementProps.paper;
const containerProps = elementProps.container;

export default function Sudoku() {
    return <Lazy doNothing>
        <h1 style={{ margin: "1rem 0" }}>Sudoku Solver</h1>

        <SudokuCollection />

        <div style={{ margin: "1em 0" }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    Solving a Sudoku Puzzle
                </AccordionSummary>

                <AccordionDetails>
                    <h2>How to solve a Sudoku Puzzle?</h2>

                    <p>
                        The brute-force <Link href="https://en.wikipedia.org/wiki/Sudoku_solving_algorithms#Backtracking">Backtracking algorithm</Link> is
                        the major solving algorithm in this Sudoku solver.
                        The solver works alongside a supporting algorithm that helps remove singles from the graph.
                    </p>

                    <h3>Backtracking</h3>
                    <p>
                        {
                            `
                The backtracking algorithm for solving Sudoku puzzles employs a trial and error strategy in 
                which it fills up every single blank cell in a systematic order (left to right, top to 
                bottom). First, the algorithm chooses the logical candidate number for the current 
                empty cell. If the chosen number complies with all the Sudoku rules, the algorithm 
                moves to the next cell recursively and does the same. If the chosen number does not 
                comply with the Sudoku rules or no number can be placed in the current cell, then it 
                proceeds with a process known as backtracking. Here, it goes back to the previous cell
                and changes the previously selected number. The process continues until all the cells 
                are filled with the correct numbers or until it's established that no solution exists 
                for the given puzzle.
                `
                        }
                    </p>

                    <h3>Singles Removal</h3>
                    <p>
                        {
                            `
                Singles removal is one of the effective strategies used to optimize the backtracking 
                algorithm while solving the Sudoku puzzles.
                `
                        }
                    </p>

                    <p>
                        {
                            `
                Before filling a number into a cell, the algorithm first checks all the filled numbers in 
                the current row, column, and 3x3 grid. If a single possible candidate number is found for 
                the current empty cell, it is filled directly without guessing. 
                `
                        }
                    </p>

                    <p>
                        {
                            `
                This process of filling definite single candidates is executed before the backtracking 
                starts to reduce the search size and speed up the algorithm. 
                `
                        }
                    </p>

                    <p>
                        {
                            `
                The singles removal optimization pre-processes the Sudoku grid by eliminating all the 
                known possibilities before the backtracking algorithm is employed. This significantly 
                reduces the number of possibilities and computations to be checked, leading to improved 
                performance and faster solutions. 
                `
                        }
                    </p>

                    <p>
                        {
                            `
                In a nutshell, the more filled cells in the starting puzzle, the less work for the 
                backtracking algorithm.
                `
                        }
                    </p>

                    <h3>Example with explanations</h3>
                    <p>
                        Consider the following graph:
                    </p>

                    <Container {...containerProps}>
                        <Paper {...paperProps}>
                            <LazyTable className={classNames(sudokuStyle.s9x9, sudokuStyle.common, sudokuStyle.ind2)} items={easyGrid} />
                        </Paper>
                    </Container>

                    <p>
                        {
                            `
                This Sudoku puzzle can be solved completely without the Backtracking algorithm.
                This is because there are squares where there is only one possible answer possible. 
                `
                        }
                        For example, {<span className={styles.ind1}>in the top-left grid</span>}, the {<span className={styles.ind2}>top empty cell</span>} has to be 9 because no other possibilities exist.
                    </p>

                    <p>
                        Every row, column, and 3x3 regions must have every number 1 through 9 inclusive. With this,
                        we can work out the only possible value by examining the row, column and the square of the cell in any order,
                        however, we will start with the region first:
                    </p>

                    <Container {...containerProps}>
                        <Paper {...paperProps}>
                            <LazyTable className={classNames(sudokuStyle.s3x3, sudokuStyle.ind2, sudokuStyle.common)} items={easyGridSnippet} />
                        </Paper>
                    </Container>

                    <p>
                        We can remove the numbers present in the current region of the cell and are left with numbers 4, 5, 7 and 9 after
                        removing 1, 2, 3, 6 and 8 from the possible set.
                    </p>

                    <Container {...containerProps}>
                        <Paper {...paperProps}>
                            <LazyTable className={classNames(sudokuStyle.s9x1, sudokuStyle.ind2, sudokuStyle.common)} items={easyGridSnippet2} />
                        </Paper>
                    </Container>

                    <p>
                        We can now look at the row of the cell and remove numbers 4 and 5 from our list of numbers.
                        This leaves us with the possibilities: 7 and 9.
                    </p>

                    <Container {...containerProps}>
                        <Paper {...paperProps}>
                            <LazyTable className={classNames(sudokuStyle.s1x9, sudokuStyle.ind3, sudokuStyle.common)} items={easyGridSnippet3} />
                        </Paper>
                    </Container>

                    <p>
                        By looking at the column of the cell, we can remove the 7 from our list of numbers, leaving us with only 9.
                    </p>

                    <p>
                        {
                            `
                Here's a representation of all the cells we checked to get here:
                `
                        }
                    </p>

                    <Container {...containerProps}>
                        <Paper {...paperProps}>
                            <LazyTable className={classNames(sudokuStyle.s9x9, sudokuStyle.ind2, sudokuStyle.common, sudokuStyle.hideNonImportant)} items={easyGrid} />
                        </Paper>
                    </Container>

                    <p>
                        Since 9 is the only number, we can be certain that only 9 should go into the cell so we write 9 into the cell.
                        We can keep iterating this process until all the squares are filled in:
                    </p>

                    <Container {...containerProps}>
                        <Paper {...paperProps}>
                            <LazyTable className={classNames(sudokuStyle.s9x9, sudokuStyle.common)} items={easyGridDone} />
                        </Paper>
                    </Container>

                    <h3>Not a silver bullet</h3>
                    <p>
                        However, this doesn’t guarantee that you will find a solution to every possible Sudoku using this method.
                        This is where you have to use backtracking.
                    </p>

                    <p>
                        The following example cannot be solved using the previous method but can be solved using Backtracking:
                    </p>

                    <Container {...containerProps}>
                        <Paper {...paperProps}>
                            <LazyTable className={classNames(sudokuStyle.s9x9, sudokuStyle.common)} items={hardGrid} />
                        </Paper>
                    </Container>

                    <p>
                        This is the solution to the above using my Sudoku solver:
                    </p>

                    <Container {...containerProps}>
                        <Paper {...paperProps}>
                            <LazyTable className={classNames(sudokuStyle.s9x9, sudokuStyle.common)} items={hardGridDone} />
                        </Paper>
                    </Container>
                </AccordionDetails>
            </Accordion>
        </div>
    </Lazy>
}