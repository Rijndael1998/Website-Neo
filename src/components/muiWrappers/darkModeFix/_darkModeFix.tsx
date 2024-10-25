"use client";

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

type child = string | React.JSX.Element | React.JSX.Element[];

// TODO: Fix the palette
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

// this needs to be deprecated!!!
export default function DarkModeFix({ children }: { children: child }) {
    console.warn("DarkModeFix is deprecated!!!");
    return (
        <>
            {children}
        </>
    );
}