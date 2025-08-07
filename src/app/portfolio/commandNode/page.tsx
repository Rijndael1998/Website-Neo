"use client";

import { Typography } from "@mui/material";
import FileOutput from "./tools/FileOutput";
import Dd from "./tools/dd";

export default function commandNode() {

    const noOp = new FileOutput("/dev/null");

    const dd = new Dd();
    dd.stdout = noOp;

    return <>
        <Typography variant="h1">
            Bash Command Generator
        </Typography>

        <ul>
        </ul>

        <div>
            {
                dd.generateOutput()
            }
        </div>
    </>
}