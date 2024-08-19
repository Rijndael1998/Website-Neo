import { ScrollDialog, ScrollDialogProps } from "../muiWrappers/popup/_PopUp"


export type GroupItemDialogProps = {
    content: ScrollDialogProps["body"],
    title: ScrollDialogProps["title"],
    link?: ScrollDialogProps["link"],
    linkText?: ScrollDialogProps["linkText"],
}

export default function GroupItemDialog({content, title, link, linkText }: GroupItemDialogProps) {
    return <ScrollDialog buttonText="More details" body={content} title={title} link={link} linkText={linkText} />
}