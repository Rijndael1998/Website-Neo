"use client";

import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { GroupPreviewContent } from '../../group/_groupTypes';
import DarkModeFix from '../darkModeFix/_darkModeFix';
import { ifTrue } from '../../reactUtils';
import Link from 'next/link';

export type ScrollDialogProps = {
    title: string,
    buttonText: string,
    body: GroupPreviewContent["desc"],
    closeText?: string,
    link?: string,
    linkText?: string,
    buttonProps?: Omit<ButtonProps, "onClick">,
}

export type DialogBoxProps = {
    open: boolean,
    handleClose: () => void,
    scroll?: DialogProps["scroll"],
    title: string,
    descriptionElementRef: React.RefObject<HTMLElement>,
    body: ScrollDialogProps["body"],
    closeText: ScrollDialogProps["closeText"],
    link: ScrollDialogProps["link"],
    linkText: ScrollDialogProps["linkText"],
}

export function DialogBox({ open, handleClose, scroll, title, descriptionElementRef, body, closeText, link, linkText }: DialogBoxProps) {
    return <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll ?? "paper"}
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
}

export function ScrollDialog({ title, buttonText, body, closeText, link, linkText, buttonProps }: ScrollDialogProps) {
    const [open, setOpen] = React.useState(false);

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
            <Button {...buttonProps} onClick={() => setOpen(true)}>{buttonText}</Button>
            <DialogBox
                open={open}
                handleClose={handleClose}
                title={title}
                descriptionElementRef={descriptionElementRef}
                body={body}
                closeText={closeText}
                link={link}
                linkText={linkText}
            />
        </DarkModeFix>
    );
}