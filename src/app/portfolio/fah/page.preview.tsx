import { GroupPreviewContent } from "@/components/group/_groupTypes";
import image from "./opengraph-image.png";
import FoldingCount from "@/components/external/foldingAtHome/FoldingCount";

export const FAH: GroupPreviewContent = {
    title: "Folding@Home",
    desc: <>{`Folding@Home is a global project by Stanford University, utilizing idle computing power from volunteers' computers to simulate protein folding. This research aids in understanding diseases like cancer and Alzheimer's to develop potential treatments. `}<FoldingCount /></>,
    isDemo: false,
    url: "https://stats.foldingathome.org/donor/name/rijn.dev",
    image: image,
    logo: true,
};