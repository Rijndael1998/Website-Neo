import { PuzzleSolution } from "@/pages/api/solve";
import { Typography } from "@mui/material";

export type DisplaySolutionProps = {
    solution?: PuzzleSolution,
}

export default function DisplaySolution({ solution }: DisplaySolutionProps) {
    if (!solution)
        return <></>

    const hasError = solution.hasError;

    if (hasError)
        return <Typography variant="body1">
            {`The API returned an error. ${solution.error}`}
        </Typography>

    return <Typography variant="body1">
        {`Solution: ${solution.solution}`}
    </Typography>
}