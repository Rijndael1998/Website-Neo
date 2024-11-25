import { GroupPreviewContent } from "@/components/group/_groupTypes";
import chalkImage from "./opengraph-image.png";
import { preURL } from "../consts";

export const chalk: GroupPreviewContent = {
    title: "Chalk",
    desc: `At university, my ex partner and I developed an engaging platformer game. The objective is to guide a piece of chalk back into its box. I crafted a custom physics engine to enhance the gameplay. It's built with JavaScript, utilizing the P5.js framework for rendering functionality.`,
    isDemo: true,
    url: "/fun/chalk/index.html",
    image: chalkImage,
};