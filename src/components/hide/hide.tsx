"use client";

import { Button, Grid2, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ifTruthy } from "../reactUtils";

export type HideProps = {
    children?: React.ReactNode
    showText?: string,
    externalLink?: string,
    reason?: string,
};

export enum HideState {
    INITIAL,
    COMPONENT_MOUNTED,
}

export default function Hide({ children, showText, externalLink, reason }: HideProps) {
    const [state, setState] = useState<HideState>(HideState.INITIAL);

    const padding = state == HideState.INITIAL ? "2em" : "0";

    const clickHandler = () => {
        setState(HideState.COMPONENT_MOUNTED);
    }

    if (state == HideState.INITIAL)
        return <Paper elevation={0} sx={{ padding, transition: "all 0.5s ease", width: "100%", height: "" }}>
            {ifTruthy(reason, 
            <Typography>
                {reason}
            </Typography>)}
            <Grid2 sx={{ justifyContent: "center" }} container gap={1}>
                <Grid2 display="grid" size={4}>
                    <Button
                        sx={{ margin: "auto" }}
                        variant="contained"
                        onClick={clickHandler}
                    >
                        {showText ?? "Load and show content"}
                    </Button>
                </Grid2>
                {ifTruthy(externalLink,
                    <Grid2 size={4}>
                        <Button href={externalLink} variant="outlined">External Link</Button>
                    </Grid2>
                )}
            </Grid2>
        </Paper>

    return children
}