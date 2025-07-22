"use client";

import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function CFWarning() {
    const [show, setShow] = React.useState<boolean>(!localStorage.getItem("cfWarningDismissed"));
    const url = "https://baldy.ga/";

    if (typeof window === "undefined") {
        return <></>;
    }

    const dismissWarning = () => {
        localStorage.setItem("cfWarningDismissed", "true");
        setShow(false);
    };

    return <Stack 
    direction={"column"} 
    sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        zIndex: 100000,
        padding: 2,
        backdropFilter: "blur(2ch)",
        transition: "all 0.5s ease",
        transform: show ? "translateY(0)" : "translateY(-100%)",
    }}
    onClick={() => dismissWarning()}
    >
        <Typography variant="h1" margin={2} sx={{ textAlign: "center"}}>
            Privacy Warning
        </Typography>

        <Typography margin={2}>
            This website you are visiting is mirrored via CloudFlare. I implore you to try to access the original website at <Link href={url}>{url}</Link>.
        </Typography>

        <Typography margin={2}>
            This website exists to provide a backup in case my ip address is censored, but it is not the original and does not have the same privacy guarantees. It doesn't inject any trackers like CloudFlare does. CloudFlare is a third-party service that acts as a reverse proxy, which means it can see and log your IP address, browser information, and other metadata about your visit. 
        </Typography>

        <Typography margin={2}>
            If you value your privacy, please consider visiting the original website instead which doesn't track any of your data.
        </Typography>

        <Typography margin={2} sx={{ textAlign: "center"}}>
            Click anywhere to dismiss this warning.
        </Typography>
    </Stack>
}