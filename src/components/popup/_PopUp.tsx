"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { GroupPreviewContent } from '../group/_groupTypes';
import DarkModeFix from '../darkModeFix/_darkModeFix';
import { ifTrue } from '../reactUtils';
import Link from 'next/link';

export type ScrollDialogProps = {
    title: string,
    buttonText: string,
    body: GroupPreviewContent["desc"],
    closeText?: string,
    link?: string,
    linkText?: string,
}

export function ScrollDialog({ title, buttonText, body, closeText, link, linkText }: ScrollDialogProps) {
    const [open, setOpen] = React.useState(false);
    const scroll = 'paper';

    const handleClose = () => {
        setOpen(false);
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

    return (
        <DarkModeFix>
            <Button onClick={() => setOpen(true)}>{buttonText}</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {body}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{closeText ?? "Close"}</Button>
                    {ifTrue(link !== undefined, <Link href={link!}><Button onClick={handleClose}>{linkText ?? "Link"}</Button></Link>)}
                </DialogActions>
            </Dialog>
        </DarkModeFix>
    );
}