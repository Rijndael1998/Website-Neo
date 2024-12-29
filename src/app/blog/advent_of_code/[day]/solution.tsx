"use client";

import { AdventOfCodeRequest, PuzzleSolution } from "@/pages/api/solve";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DisplaySolution from "./displaySolution";
import { FileRequest } from "@/pages/api/getInput";

export type SolutionProps = {
    day: number,
}

export default function Solution({ day }: SolutionProps) {
    const [text, setText] = useState("");
    const [solution, setSolution] = useState<PuzzleSolution | undefined>();
    const [awaitingAPI, setAwaitingAPI] = useState<boolean>(false);
    const [initialInput, setInitialInput] = useState<string | undefined>();

    const isDisabled = awaitingAPI || initialInput === undefined;

    useEffect(() => {
        (async () => {
            const dataToSend: FileRequest = { day };
            try {
                const data = await fetch('/api/getInput', {
                    method: "POST",
                    body: JSON.stringify(dataToSend),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const newText = await data.text();

                if (data.status != 200)
                    throw Error("Not 200");

                setInitialInput(newText);
                setText(newText);

            } catch {

                setInitialInput("");
                setText("");
            }
        })();
    }, [day]);

    const getSolution = async () => {
        if (awaitingAPI)
            return;

        setAwaitingAPI(true);

        const dataToSend: AdventOfCodeRequest = {
            day,
            message: text,
        }

        try {
            const data = await fetch('/api/solve', {
                method: "POST",
                body: JSON.stringify(dataToSend),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setSolution(await data.json());

        } catch (e) {
            let errorString = "";
            try {
                if (e instanceof Error) {
                    errorString += `${e.name}\n`;
                    errorString += `${e.message}\n`;
                    if (e.stack) errorString += `${e.stack}\n`;
                    if (e.cause) errorString += `${e.cause}\n`;
                } else {
                    errorString = "Unknown error";
                }
            } catch {
                errorString = "Unknown error";
            }

            setSolution({ error: errorString, hasError: true });

        }

        setAwaitingAPI(false);
    }

    return <>
        <Stack gap={1}>
            <TextField
                label="Puzzle input"
                variant="filled"
                multiline
                sx={{ maxHeight: "5em", overflow: "scroll" }}
                value={text}
                onChange={(ev) => setText(ev.target.value)}
                disabled={isDisabled}
            />
            <Stack direction="row" gap={2}>
                <Button
                    onClick={() => setText("")}
                    disabled={isDisabled}
                    color={"secondary"}>
                    Clear Data
                </Button>
                <Button
                    onClick={() => setText(initialInput ?? "")}
                    disabled={isDisabled || initialInput === undefined || initialInput == ""}
                    color={"secondary"}>
                    Example input
                </Button>
                <Button
                    onClick={getSolution}
                    disabled={isDisabled}
                >
                    Solve
                </Button>
            </Stack>
        </Stack>

        <Typography variant="h2">Solution</Typography>
        <DisplaySolution solution={solution} />
    </>
}