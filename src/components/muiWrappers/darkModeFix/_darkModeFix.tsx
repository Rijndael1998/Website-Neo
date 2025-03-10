"use client";

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type child = string | React.JSX.Element | React.JSX.Element[];

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#00a900",
        },
        secondary: {
            main: "#0083a9",
        },
        background: {
            default: "#000",
        }
    },
    typography: {
        fontFamily: 'Kanit',
        allVariants: {
            fontFamily: "var(--main-body)",
        },
        h1: {
            fontSize: '2rem',
            fontWeight: 1000,
        },
        h2: {
            fontSize: '1.8rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '1.7rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.6rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1.2rem',
            fontWeight: 500,
        },

    },
});

export default function DarkModeFix({ children }: { children: child }) {
    return (
        <ThemeProvider theme={darkTheme}>
            {children}
        </ThemeProvider>
    );
}