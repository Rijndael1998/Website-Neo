import { AdventOfCodeSolutionFunction } from "./solutions";

export const solution_7: AdventOfCodeSolutionFunction = (input) => {
    const res = "Test: " + input;

    const numbers =
        input.split("\n")
            .map(
                (v) => v.trim()
                    .split(":")
                    .map(v => v.trim().split(" ").map(v => Number(v)))
            ).map(
                (v) => {
                    return { target: v[0][0], numbers: v[1] }
                }
            );

    console.log(numbers);

    return {
        part_1: res,
        part_2: res,
    }
}

