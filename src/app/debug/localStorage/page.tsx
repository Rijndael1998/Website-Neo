"use client";

import { Button } from "@mui/material";

export default function LocalStorage() {
    return <>
        <Button onClick={() => {
            localStorage.clear();
            window.location.reload();
        }}>
            Clear Local Storage
        </Button>
    </>
}