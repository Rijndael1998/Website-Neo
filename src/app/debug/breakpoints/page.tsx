"use client";

import Lazy from "@/components/lazy/_lazy";
import { Card, Checkbox, Paper, Typography } from "@mui/material";
import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const breakpoints: Array<Breakpoint> = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
];

export default function Breakpoints() {
    const theme = useTheme();

    return <Lazy>
        <h1>
            Breakpoints
        </h1>

        <Paper elevation={3} sx={{ padding: "1em", marginTop: "1em" }}>
            <Typography variant="h5" gutterBottom>theme.breakpoints.</Typography>
            <Card sx={{ padding: "1em" }}>

                <Typography variant="h6">.up(...)</Typography>
                <ul>
                    {
                        breakpoints.map((breakpoint) =>
                            <li>
                                <Typography key={breakpoint}>
                                    {`'${breakpoint}':`}
                                    {
                                        useMediaQuery(theme.breakpoints.up(breakpoint)) ?
                                            <Checkbox checked={true} color="success" disabled /> :
                                            <Checkbox checked={false} color="error" disabled />
                                    }
                                </Typography>
                            </li>
                        )
                    }
                </ul>
            </Card>
            <Card sx={{ padding: "1em", marginTop: "1em" }}>
                <Typography variant="h6">.down(...)</Typography>
                <ul>
                    {
                        breakpoints.map((breakpoint) =>
                            <li>
                                <Typography key={breakpoint}>
                                    {`'${breakpoint}':`}
                                    {
                                        useMediaQuery(theme.breakpoints.down(breakpoint)) ?
                                            <Checkbox checked={true} color="success" disabled /> :
                                            <Checkbox checked={false} color="error" disabled />
                                    }
                                </Typography>
                            </li>
                        )
                    }
                </ul>
            </Card>
        </Paper>
    </Lazy>
}