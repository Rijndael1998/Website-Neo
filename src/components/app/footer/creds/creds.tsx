"use client";

import LazyLocalImage, { LocalLazyImageProps } from "@/components/lazy/_lazyLocalImage";
import { Box, Grid2 } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import cpf from "./images/cloud_practitioner_foundational.png";
import da from "./images/developer_associate.png";
import sc from "./images/security_specialist.png";
import { DialogBox } from "@/components/muiWrappers/popup/DialogBox";



const url = "https://aws.amazon.com/verification";
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

    return <>
        <Box
            onClick={(e) => {
                setOpen(true);
                e.stopPropagation();
            }}
            sx={[{
                "&": {
                    transition: "all ease 0.2s",
                    cursor: "pointer",
                    filter: verification ? "saturate(1)" : "saturate(0)",
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
            body={"verify verify something something"}
            closeText={undefined}
            link={url}
            linkText={"Official verification"}
        />
    </>
}

export default function Creds() {
    return <Grid2 container>
        <CredImage img={cpf} alt="Cloud Practitioner Foundational" verification="5b755d2aa5324fb3a0116d762f54f2ef" />
        <CredImage img={da} alt="Developer Associate" />
        <CredImage img={sc} alt="Security Specialist" />
    </Grid2>
}