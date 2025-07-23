"use client";

import { Button } from "@mui/material";

export default function LocalStorage() {
    if (typeof window === "undefined") {
        return <></>;
    }

    return <>
        <Button onClick={() => {
            if (typeof window === "undefined") {
                return;
            }

            window.localStorage.clear();
            window.location.reload();
        }}>
            Clear Local Storage
        </Button>
    </>
}