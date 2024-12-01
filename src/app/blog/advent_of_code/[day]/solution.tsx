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

    const getSolution = () => {
        if (awaitingAPI)
            return;

        setAwaitingAPI(true);

        const dataToSend: AdventOfCodeRequest = {
            day,
            message: text,
        }

        fetch('/api/solve', {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setSolution(data)
                setAwaitingAPI(false)
            });
    }

    return <Container maxWidth="md">
        <Typography variant="h1">{`Day ${day} solution`}</Typography>


        <Typography variant="body1">Fill in your puzzle's input</Typography>

        <Stack>
            <TextField
                label="Puzzle input"
                variant="filled"
                multiline
                sx={{ maxHeight: "5em", overflow: "scroll" }}
                value={text}
                onChange={(ev) => setText(ev.target.value)}
            />
            <Button onClick={getSolution}>Solve</Button>
        </Stack>

        <Typography variant="h2">Solution</Typography>
        <DisplaySolution solution={solution} />

    </Container>
}