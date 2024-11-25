import { GroupPreviewContent } from "@/components/group/_groupTypes";
import image from "./opengraph-image.png";
import { metadata } from "./page";
import { preURL } from "../consts";

export const oldWebsite: GroupPreviewContent = {
    title: metadata.title,
    desc: metadata.description,
    isDemo: false,
    url: preURL + "/oldWebsite",
    image,
};