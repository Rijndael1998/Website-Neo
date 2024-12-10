import { PuzzleSolution } from "@/pages/api/solve";
import { Stack, Typography } from "@mui/material";

export type DisplaySolutionProps = {
    solution?: PuzzleSolution,
}

export default function DisplaySolution({ solution }: DisplaySolutionProps) {
    if (!solution)
        return <></>

    if (solution.hasError)
        return <Typography variant="body1">
            {`The API returned an error. ${solution.error}`}
        </Typography>

    return <>
        <Typography variant="h3">
            {`Part 1: ${solution.solution.part_1}`}
        </Typography>
        <Typography variant="h3">
            {`Part 2: ${solution.solution.part_2}`}
        </Typography>
    </>
}