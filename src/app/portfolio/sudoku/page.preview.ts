import { GroupPreviewContent } from "@/components/group/_groupTypes";
import image from "./opengraph-image.png";
import { preURL } from "../consts";

export const Sudoku: GroupPreviewContent = {
    title: "Sudoku Solver",
    desc: "I have made a Sudoku solver. The brute-force Backtracking algorithm is the major solving algorithm in this Sudoku solver with a supporting algorithm that helps remove singles from the graph.",
    isDemo: true,
    url: preURL + "sudoku",
    image,
};