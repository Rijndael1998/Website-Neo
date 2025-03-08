"use client";

import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { GroupPreviewContent } from '../../group/_groupTypes';
import DarkModeFix from '../darkModeFix/_darkModeFix';
import { DialogBox } from './DialogBox';

export type ScrollDialogProps = {
    title: string,
    buttonText: string,
    body: GroupPreviewContent["desc"],
    closeText?: string,
    link?: string,
    linkText?: string,
    buttonProps?: Omit<ButtonProps, "onClick">,
}

export function ScrollDialog({ title, buttonText, body, closeText, link, linkText, buttonProps }: ScrollDialogProps) {
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

    return (
        <DarkModeFix>
            <Button {...buttonProps}
                onClick={(e) => {
                    setOpen(true);
                    e.stopPropagation();
                }}>
                {buttonText}
            </Button>
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