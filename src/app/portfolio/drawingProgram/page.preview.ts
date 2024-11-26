import { GroupPreviewContent } from "@/components/group/_groupTypes";
import image from "./opengraph-image.png";
import { preURL } from "../consts";

export const Drawing: GroupPreviewContent = {
    title: "Drawing Project",
    desc: `
    The university assignment that I achieved full marks on is a unique drawing program created using a specially designed programming language for this particular project. 
    The program enables users to draw freely using this language which is intended to be high level for easy comprehension by programming learners.
    `,
    isDemo: true,
    url: preURL + "drawingProgram",
    image,
};