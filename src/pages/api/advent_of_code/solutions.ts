export type AdventOfCodeSolution = (input: string) => string;

export const solutions: {[number: number]: AdventOfCodeSolution} = {
    0: (input) => "Test: " + input,
};