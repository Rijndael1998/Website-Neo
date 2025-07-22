"use client";

import { Stack, Typography } from "@mui/material";
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import Link from "next/link";
import React from "react";

export default function CFWarning() {
    const [show, setShow] = React.useState<boolean>(!localStorage.getItem("cfWarningDismissed"));
    const url = "https://baldy.ga/";
    const urlText = "baldy.ga/";

    if (typeof window === "undefined") {
        return <></>;
    }

    // TODO: Check the domain from the window location and only show this warning if the domain is not the original one.
    if (window.location.hostname === "baldy.ga") {
        return <></>;
    }

    const dismissWarning = () => {
        localStorage.setItem("cfWarningDismissed", "true");
        setShow(false);
    };

    return <div
        style={{
            position: "fixed",
            display: "grid",
            placeItems: "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100000,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            transition: "all 0.5s ease",
            transform: show ? "translateY(0)" : "translateY(-100%)",
            backdropFilter: "blur(1ch)",
            cursor: "pointer",
        }}
        onClick={() => dismissWarning()}
    >
        <Stack
            direction={"column"}
            sx={{
                margin: 2,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                maxWidth: "50ch",
            }}
            gap={4}
        >
            <PrivacyTipOutlinedIcon sx={{ fontSize: "13ch" }} />

            <Typography variant="h1" sx={{ textAlign: "center" }}>
                Privacy Warning
            </Typography>

            <Typography variant="body1">
                This website you are visiting is mirrored via CloudFlare. I implore you to try to access the original website at <Link href={url}>{urlText}</Link>.
            </Typography>

            <Typography variant="body2">
                This website exists to provide a backup in case my ip address or domains are censored, but it is not the original and does not have the same privacy guarantees. It doesn't inject any trackers like CloudFlare does. CloudFlare is a third-party service that acts as a reverse proxy, which means it can see and log your IP address, browser information, and other metadata about your visit.
            </Typography>

            <Typography variant="body2">
                If you value your privacy, please consider visiting the original website instead which doesn't track any of your data.
            </Typography>

            <Typography variant="h6" sx={{ textAlign: "center", marginTop: 6 }}>
                Click anywhere to dismiss this warning.
            </Typography>
        </Stack>
    </div>
}