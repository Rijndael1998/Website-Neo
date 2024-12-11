import { Container, Stack, Typography } from "@mui/material";
import Solution from "./solution";

export type AdventOfCodeDaysProps = {
    params: Promise<{ day: string }>,
};

export default async function AdventOfCodeDays({ params }: AdventOfCodeDaysProps) {
    const day = Number((await params).day);
    return <Container maxWidth="md">
        <Stack gap={1}>
            <Typography variant="h1">{`Day ${day} solution`}</Typography>

            <Solution day={day} />
        </Stack>
    </Container>
}