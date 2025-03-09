"use client";

import React from "react";
import { GroupPreviewContent } from "./_groupTypes";
import { Grid2 } from "@mui/material";
import { DialogBox } from "../muiWrappers/popup/DialogBox";
import { ReturnPortfolioItems } from "./_groupItem";

export default function GroupItemWrapper({ children, portfolio }: { children: React.ReactNode, portfolio: GroupPreviewContent }) {
    const [open, setOpen] = React.useState(false);

    const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setOpen(false);
        e.stopPropagation();
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const [url, empty, text, Icon] = ReturnPortfolioItems(portfolio);

    return <Grid2
        size={{
            xs: 12 / 1,
            sm: 12 / 2,
            md: 12 / 3,
            lg: 12 / 4,
            xl: 12 / 5,
        }}
        // TODO: this could be done better.
        // I'm currently removing propagation from other
        // components to stop this from being triggered.
        onClick={(e) => {
            setOpen(true);
            e.stopPropagation();
        }}
    >
        {children}
        <DialogBox
            open={open}
            handleClose={handleClose}
            title={portfolio.title}
            descriptionElementRef={descriptionElementRef}
            body={portfolio.desc}
            closeText={undefined}
            link={url}
            linkText={text}
        />
    </Grid2>
}