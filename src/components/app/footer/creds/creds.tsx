"use client";

import LazyLocalImage, { LocalLazyImageProps } from "@/components/lazy/_lazyLocalImage";
import { DialogBox } from "@/components/muiWrappers/popup/DialogBox";
import { Box, Grid2 } from "@mui/material";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Copy from "../../copy/_copy";
import cpf from "./images/cloud_practitioner_foundational.png";
import da from "./images/developer_associate.png";
import sc from "./images/security_specialist.png";


const url = "https://aws.amazon.com/verification";

function Body({ award, id }: { award: string, id?: string }) {
    if (!id)
        return <span style={{ marginTop: 0, marginBottom: 0, display: "block" }}>
            {`I do not currently hold the ${award}, but I am working hard towards obtaining it by the end of 2025.`}
        </span>

    return <>
        <span style={{ marginTop: 0, display: "block" }}>
            {`I hold the AWS ${award} certification.`}
        </span>
        <span style={{ display: "block" }}>
            {`Verification is available at `}<Link href={url}>{url}</Link>.
        </span>
        <span style={{ marginTop: "1em", marginBottom: 0, fontSize: "0.8em", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <span style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                (Credential ID: <span style={{ marginLeft: "0.5ch", marginRight: "0.25ch", fontFamily: "monospace" }}>{id}</span>)<span style={{ marginRight: "0.5ch" }}>.</span>
            </span>
            <Copy text={id} />
        </span>
    </>
}

export function CredImage({ img, alt, verification }: { img: LocalLazyImageProps["src"], alt: string, verification?: string }) {
    const [open, setOpen] = useState(false);

    const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setOpen(false);
        e.stopPropagation();
    };

    const descriptionElementRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return <Grid2 size={1} margin={"auto"} padding={"0.5em"}>
        <Box
            onClick={(e) => {
                setOpen(true);
                e.stopPropagation();
            }}
            sx={[{
                "&": {
                    transition: "filter ease 0.2s",
                    cursor: "pointer",
                    filter: verification ? "saturate(1)" : "saturate(0)",
                    aspectRatio: 1,
                    maxWidth: "30dvw",
                    maxHeight: "50dvh",
                    margin: "auto",
                },
                "&:hover": {
                    filter: "saturate(1)",
                },
            }]}>
            <LazyLocalImage src={img} alt={alt} />
        </Box>
        <DialogBox
            open={open}
            handleClose={handleClose}
            title={alt}
            descriptionElementRef={descriptionElementRef}
            body={<Body award={alt} id={verification} />}
            closeText={"Return"}
            link={url}
            linkText={"Official verification"}
        />
    </Grid2>
}

export default function Creds() {
    return <Grid2 container columns={{ xs: 1, sm: 3, md: 3 }} width={"100%"}>
        <CredImage img={cpf} alt="Certified Cloud Practitioner (Foundational)" verification="5b755d2aa5324fb3a0116d762f54f2ef" />
        <CredImage img={da} alt="Developer Associate" />
        <CredImage img={sc} alt="Security Specialist" />
    </Grid2>
}