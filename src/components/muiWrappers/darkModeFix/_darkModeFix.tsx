"use client";

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

type child = string | React.JSX.Element | React.JSX.Element[];

const titleTypography: TypographyOptions["h1"] = {
    fontFamily: "var(--noto-serif)",
    fontWeight: "bold",
};

// TODO: Fix the palette
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        allVariants: {
            fontFamily: "var(--main-body)",
        },
        h1: titleTypography,
        h2: titleTypography,
        h3: titleTypography,
        h4: titleTypography,
        h5: titleTypography,
        h6: titleTypography,
    },
});

// this needs to be deprecated!!!
export default function DarkModeFix({ children }: { children: child }) {
    console.warn("DarkModeFix is deprecated!!!");
    return (
        <ThemeProvider theme={darkTheme}>
            {children}
        </ThemeProvider>
    );
}