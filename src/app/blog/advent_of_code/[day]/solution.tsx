"use client";

import { AdventOfCodeRequest, PuzzleSolution } from "@/pages/api/solve";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import DisplaySolution from "./displaySolution";

export type SolutionProps = {
    day: number,
}

export default function Solution({ day }: SolutionProps) {
    const [text, setText] = useState("");
    const [solution, setSolution] = useState<PuzzleSolution | undefined>();
    const [awaitingAPI, setAwaitingAPI] = useState<boolean>(false);

    const getSolution = async () => {
        if (awaitingAPI)
            return;

        setAwaitingAPI(true);

        const dataToSend: AdventOfCodeRequest = {
            day,
            message: text,
        }

        const data = await fetch('/api/solve', {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setSolution(await data.json())
        setAwaitingAPI(false)
    }

    return <Container maxWidth="md">
        <Stack gap={1}>
            <Typography variant="h1">{`Day ${day} solution`}</Typography>


            <Typography variant="body1">Fill in your puzzle's input</Typography>

            <Stack gap={1}>
                <TextField
                    label="Puzzle input"
                    variant="filled"
                    multiline
                    sx={{ maxHeight: "5em", overflow: "scroll" }}
                    value={text}
                    onChange={(ev) => setText(ev.target.value)}
                />
                <Stack direction="row" gap={2}>
                    <Button onClick={() => setText("")}>Clear Data</Button>
                    <Button onClick={getSolution}>Solve</Button>
                </Stack>
            </Stack>

            <Typography variant="h2">Solution</Typography>
            <DisplaySolution solution={solution} />
        </Stack>
    </Container>
}