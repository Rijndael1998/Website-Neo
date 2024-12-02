import { AdventOfCodeSolutionFunction } from "./solutions";


/**
 * this function evaluates the 
 * @param levels a list to check
 * @returns -1 if there is no errors, or the index of where there's an unsafe event
 */
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
            return levelIndex; // go to the next report

        // set increasing if needed
        if (isIncreasing === null) {
            isIncreasing = diff > 0;
            continue; // compare the next numbers
        }

        //  check if increasing then decreasing 
        if (!(isIncreasing && diff > 0 || !isIncreasing && diff < 0))
            return levelIndex; // go to the next report
    }

    return -1;
}


export const solution_2: AdventOfCodeSolutionFunction = (input) => {
    const reports = input.split("\n");

    let safe = 0;
    let safe_damp = 0;

    // this loop is for every line
    main: for (let i = 0; i < reports.length; i++) {
        const report = reports[i].trim();
        if (!report)
            continue; // report is empty

        const levels = report.split(" ").map((v) => Number(v));

        const evaluation = EvaluateLineSafe(levels);
        if(evaluation == -1) {
            safe++;
            continue;
        }
        
        // search around where it failed
        for (let offset = evaluation - 2; offset <= evaluation + 2; offset++) {
            // delete an evaluation in accordance to the offset
            let newLevels = [...levels];
            newLevels.splice(offset, 1);
            const newEval = EvaluateLineSafe(newLevels);
            if(newEval == -1) {
                safe_damp++;
                continue main;
            }
        }
    }

    return `Part 1: ${safe} Part 2: ${safe + safe_damp}`;
}