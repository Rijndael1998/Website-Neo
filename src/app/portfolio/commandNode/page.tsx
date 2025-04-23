"use client";

import { Typography } from "@mui/material";
import NoOp from "./tools/noOp";

export default function commandNode() {

    const noOp = new NoOp();
    const NO_OP = noOp.generateOutput;

    return <>
        <Typography variant="h1">
            Bash Command Generator
        </Typography>

        <ul>
        </ul>

        <div>
            <NO_OP/>
        </div>
    </>
}