import { GroupPreviewContent } from "@/components/group/_groupTypes";
import { metadata } from "./page.mdx";
import image from "./opengraph-image.png";
import { preURL } from "../consts";

export const IPF: GroupPreviewContent = {
    title: "Data & Decisions Developer",
    desc: metadata.description,
    isDemo: false,
    url: preURL + "ipf",
    logo: true,
    image,
};