"use client";

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

type child = string | JSX.Element | JSX.Element[];

// TODO: Fix the palette
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function DarkModeFix({ children }: { children: child }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}