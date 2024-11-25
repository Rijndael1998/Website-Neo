import { GroupPreviewContent } from "@/components/group/_groupTypes";
import image from "./opengraph-image.png";
import { preURL } from "../consts";


export const AS: GroupPreviewContent = {
    title: "A Star",
    desc: `I have developed an efficient path-finding solver, implementing the sophisticated A Star algorithm. This software is readily available on GitHub for you to utilize and modify as per your needs. For a practical demonstration of its functionality, feel free to explore the live demo.`,
    isDemo: true,
    url: preURL + "a-star",
    image,
};