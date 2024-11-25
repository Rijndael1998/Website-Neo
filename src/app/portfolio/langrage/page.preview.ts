import { GroupPreviewContent } from "@/components/group/_groupTypes";
import image from "./opengraph-image.png";
import { preURL } from "../consts";

export const Langrage: GroupPreviewContent = {
    title: "Langrage Demo",
    desc: `
    A simple demonstration of how Langrage polynomials work. 
    You can place points anywhere along the screen and the curve will recalculate, 
    passing through all of the points made.`,
    isDemo: true,
    url: preURL + "langrage",
    image,
};