import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, Link } from "@mui/material"
import { ScrollDialogProps } from "./_PopUp"
import { ifTrue } from "@/components/reactUtils"
import { MouseEventHandler } from "react"

export type DialogBoxProps = {
    open: boolean,
    handleClose?: MouseEventHandler<HTMLButtonElement>,
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
            {ifTrue(link !== undefined,
                <Link href={link!}>
                    <Button onClick={handleClose}>{linkText ?? "Link"}</Button>
                </Link>
            )}
        </DialogActions>
    </Dialog>
}