import { Container, Stack, Typography } from "@mui/material";
import Solution from "./solution";
import DisplayNav from "./displayNav";
import { DAY } from "../day";
import { ifTruthyElse } from "@/components/reactUtils";

export type AdventOfCodeDaysProps = {
    params: Promise<{ day: string }>,
};

export default async function AdventOfCodeDays({ params }: AdventOfCodeDaysProps) {
    const day = Number((await params).day);
    const enable = day <= DAY && day >= 0;
    const neg = day < 0;

    const SolutionElement = <>
        <Typography variant="body1">{`Fill in your puzzle's input`}</Typography>
        <Solution day={day} />
    </>

    const NotFoundElement = ifTruthyElse(!neg,
        <Typography>
            The solution to this problem is currently in construction. A+ for effort, though 😅.
        </Typography>,
        <Typography>
            Time doesn't go backwards! 😉
        </Typography>
    );

    return <Container maxWidth="md">
        <Stack gap={1}>
            <Typography variant="h1">{`Day ${day} solution`}</Typography>
            <DisplayNav day={day} />

            {ifTruthyElse(enable, SolutionElement, NotFoundElement)}
        </Stack>
    </Container>
}