import { Container, Stack, Typography } from "@mui/material";
import Solution from "./solution";
import DisplayNav from "./displayNav";

export type AdventOfCodeDaysProps = {
    params: Promise<{ day: string }>,
};

export default async function AdventOfCodeDays({ params }: AdventOfCodeDaysProps) {
    const day = Number((await params).day);
    return <Container maxWidth="md">
        <Stack gap={1}>
            <Typography variant="h1">{`Day ${day} solution`}</Typography>
            <DisplayNav day={day}/>

            <Typography variant="body1">{`Fill in your puzzle's input`}</Typography>
            <Solution day={day} />
        </Stack>
    </Container>
}