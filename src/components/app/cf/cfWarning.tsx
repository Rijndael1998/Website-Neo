"use client";

import { Stack, Typography } from "@mui/material";
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import Link from "next/link";
import React, { useEffect } from "react";

export default function CFWarning() {
    const [show, setShow] = React.useState<boolean>(false);
    const url = "https://baldy.ga/";
    const urlText = "baldy.ga/";

    useEffect(() => {
        if (typeof window === "undefined")
            return;

        const hn = window.location.hostname;
        // cf domains, anything else should not show the warning, except for testing
        if (hn !== "rijn.pl" && hn !== "rijn.dev" && hn !== "localhost") {
            return;
        }

        setShow(!window.localStorage.getItem("cfWarningDismissed"));
    }, []);

    const dismissWarning = () => {
        window?.localStorage.setItem("cfWarningDismissed", "true");
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
            overflowY: "auto",
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
                {"This website you are visiting is mirrored via CloudFlare. I implore you to try to access the original website at "}
                <Link href={url} onClick={(e) => {
                    e.stopPropagation();
                }}>
                    {urlText}
                </Link>.

                Keep in mind that it can still be blocked by your country/content blocker, so you may need to continue using this mirror.
            </Typography>

            <Typography variant="body2">
                {"This website exists to provide a backup in case my ip address or domains are censored, but it is not the original and does not have the same privacy guarantees. The original domains don't inject any trackers like CloudFlare does. CloudFlare acts as a reverse proxy, which means it can see and log your IP address, browser information, and other metadata about your visit."}
            </Typography>

            <Typography variant="body2">
                {"If you value your privacy, please consider visiting the original website instead which doesn't track any of your data."}
            </Typography>

            <Typography variant="h6" sx={{ textAlign: "center", marginTop: 6 }}>
                Click anywhere to dismiss this warning.
            </Typography>
        </Stack>
    </div>
}