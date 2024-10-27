import { JSX } from "react";

export type GroupPreviewContent = {
    title: string, // Title of the page
    desc: string | JSX.Element | React.ReactNode, // short description 
    isDemo: boolean, // is it a demo
    url?: string, // url of the page
    image?: string, // image src
    logo?: boolean, // is the image a logo??
}

export type GroupViewArray = Array<GroupPreviewContent>;