import { ScrollDialog, ScrollDialogProps } from "../muiWrappers/popup/_PopUp"


export type GroupItemDialogProps = {
    content: ScrollDialogProps["body"],
    title: ScrollDialogProps["title"],
    link?: ScrollDialogProps["link"],
    linkText?: ScrollDialogProps["linkText"],
    buttonProps?: ScrollDialogProps["buttonProps"],
}

export default function GroupItemDialog({ content, title, link, linkText, buttonProps }: GroupItemDialogProps) {
    return <ScrollDialog
        buttonText="Overview"
        body={content}
        title={title}
        link={link}
        linkText={linkText}
        buttonProps={
            {
                variant: "contained",
                ...buttonProps
            }
        } />
}