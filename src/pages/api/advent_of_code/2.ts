import { AdventOfCodeSolutionFunction } from "./solutions";

export const solution_2: AdventOfCodeSolutionFunction = (input) => {
    const reports = input.split("\n");

    let safe = 0;

    // this loop is for every line
    reportLoop: for (let i = 0; i < reports.length; i++) {
        const report = reports[i].trim();
        if (!report)
            continue;

        const levels = report.split(" ").map((v) => Number(v));

        // this loop is the checking every number in the line
        let isIncreasing: boolean | null = null;
        for (let levelIndex = 1; levelIndex < levels.length; levelIndex++) {
            const prevLevel = levels[levelIndex - 1]; // previous
            const level = levels[levelIndex]; // current
            const diff = level - prevLevel; // difference
            const absDiff = Math.abs(diff); // absolute difference

            // check if increasing too much or not at all
            if (absDiff == 0 || absDiff > 3)
                continue reportLoop; // go to the next report

            // set increasing if needed
            if (isIncreasing === null) {
                isIncreasing = diff > 0;
                continue; // compare the next numbers
            }

            //  check if increasing then decreasing 
            if (!(isIncreasing && diff > 0 || !isIncreasing && diff < 0))
                continue reportLoop; // go to the next report
        }

        // if it got here, every number was checked to be safe and ok
        safe++;
    }

    return `${safe}`;
}