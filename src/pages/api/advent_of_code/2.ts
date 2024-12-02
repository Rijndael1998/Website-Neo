import { AdventOfCodeSolutionFunction } from "./solutions";

export function EvaluateLineSafe(levels: Array<number>) {
    // this loop is the checking every number in the line
    let isIncreasing: boolean | null = null;
    for (let levelIndex = 1; levelIndex < levels.length; levelIndex++) {
        const prevLevel = levels[levelIndex - 1]; // previous
        const level = levels[levelIndex]; // current
        const diff = level - prevLevel; // difference
        const absDiff = Math.abs(diff); // absolute difference

        // check if increasing too much or not at all
        if (absDiff == 0 || absDiff > 3)
            return false; // go to the next report

        // set increasing if needed
        if (isIncreasing === null) {
            isIncreasing = diff > 0;
            continue; // compare the next numbers
        }

        //  check if increasing then decreasing 
        if (!(isIncreasing && diff > 0 || !isIncreasing && diff < 0))
            return false; // go to the next report
    }

    return true;
}


export const solution_2: AdventOfCodeSolutionFunction = (input) => {
    const reports = input.split("\n");

    let safe = 0;

    // this loop is for every line
    for (let i = 0; i < reports.length; i++) {
        const report = reports[i].trim();
        if (!report)
            continue;

        const levels = report.split(" ").map((v) => Number(v));

        if(EvaluateLineSafe(levels))
            safe++;

        
    }

    return `Part 1: ${safe}`;
}