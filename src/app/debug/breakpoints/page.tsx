"use client";

import Lazy from "@/components/lazy/_lazy";
import { Card, Checkbox, FormControlLabel, FormGroup, Paper, Stack, Theme, Typography } from "@mui/material";
import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const breakpoints: Array<Breakpoint> = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
];

const functions: Array<[string, (t: Theme, bp: Breakpoint) => boolean]> = [
    [".up(...)", (theme, bp) => useMediaQuery(theme.breakpoints.up(bp))],
    [".down(...)", (theme, bp) => useMediaQuery(theme.breakpoints.down(bp))],
];

export default function Breakpoints() {
    const theme = useTheme();

    return <Lazy>
        <h1>
            Breakpoints
        </h1>

        <Paper elevation={3} sx={{ padding: "1em", marginTop: "1em" }}>
            <Typography variant="h5" gutterBottom>theme.breakpoints.</Typography>
            {
                functions.map(fnObject => {
                    const [title, fn] = fnObject;
                    return <Card key={title} sx={{ padding: "1em", marginBottom: "1em" }}>
                        <Typography variant="h6">{title}</Typography>
                        <Stack margin={1}>
                            {
                                breakpoints.map((breakpoint) =>
                                    <Stack key={breakpoint} direction={"row"}>
                                        <FormGroup>
                                            <FormControlLabel
                                                label={breakpoint}
                                                control={fn(theme, breakpoint) ?
                                                    <Checkbox checked={true} color="success" disabled /> :
                                                    <Checkbox checked={false} color="error" disabled />
                                                }
                                            />
                                        </FormGroup>
                                    </Stack>
                                )
                            }
                        </Stack>
                    </Card>
                })
            }
        </Paper>
    </Lazy>
}