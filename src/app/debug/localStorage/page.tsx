"use client";

import { Button } from "@mui/material";

export default function LocalStorage() {
    return <>
        <Button onClick={() => {
            localStorage.clear();
        }}>
            Clear Local Storage
        </Button>
    </>
}