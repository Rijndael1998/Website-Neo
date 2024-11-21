import { JSX } from "react";
import { GroupImageProps } from "./groupImage/_groupImage";

export type GroupPreviewContent = {
    title: string, // Title of the page
    desc: string | JSX.Element | React.ReactNode, // short description 
    isDemo: boolean, // is it a demo
    url?: string, // url of the page
    image?: GroupImageProps["image"], // image src
    logo?: boolean, // is the image a logo??
}

export type GroupViewArray = Array<GroupPreviewContent>;