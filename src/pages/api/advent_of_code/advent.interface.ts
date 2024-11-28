export interface AdventOfCode {
    /**
     * This function solves the puzzle
     * @param input the input
     * @returns the answer that can be input into advent of code
     */
    solve(input: string): string;
}