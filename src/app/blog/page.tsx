import { GroupPreviewContent } from "@/components/group/_groupTypes";
import GroupPage from "@/components/group/groupPage/_groupPage";

import enderImage from "./3d_printer/opengraph-image.png";
import openWRTImage from "./city_fibre/opengraph-image.png";
import hobbiesImage from "./hobbies/opengraph-image.png";
import martaImage from "./marta/opengraph-image.jpg";
import mirrorsEdgeImage from "./mirrors_edge/images/1x1 partial logo 200.png";

import { metadata as ender_metadata } from "./3d_printer/page.mdx"
import { metadata as openwrt_metadata } from "./city_fibre/page.mdx";
import { metadata as hobbies_metadata } from "./hobbies/page.mdx";
import { metadata as marta_metadata } from "./marta/page.mdx";
import { metadata as mirrors_edge_metadata } from "./mirrors_edge/page.mdx";

const preURL = "/blog/";

export const metadata = {
    title: "Blog",
    description: "Small tidbits that I'm interested in.",
};

const Marta: GroupPreviewContent = {
    title: marta_metadata.title,
    desc: marta_metadata.description,
    isDemo: false,
    image: martaImage,
    url: preURL + "marta",
}

const hobbies: GroupPreviewContent = {
    title: hobbies_metadata.title,
    desc: hobbies_metadata.description,
    isDemo: false,
    url: preURL + "hobbies",
    image: hobbiesImage,
};

const OpenWRT: GroupPreviewContent = {
    title: openwrt_metadata.title,
    desc: openwrt_metadata.description,
    isDemo: false,
    url: "blog/city_fibre",
    image: openWRTImage,
    logo: true,
};

const Ender: GroupPreviewContent = {
    title: ender_metadata.title,
    desc: ender_metadata.description,
    isDemo: false,
    url: "blog/3d_printer",
    image: enderImage,
};

const Mirror: GroupPreviewContent = {
    title: mirrors_edge_metadata.title,
    desc: mirrors_edge_metadata.description,
    isDemo: false,
    url: "blog/mirrors_edge",
    image: mirrorsEdgeImage,
};

export default function Blog() {
    return <GroupPage
        title={"Blog"}
        groups={
            [
                {
                    title: "Tech",
                    subtitle: "Tech related blogs",
                    groups: [
                        Ender,
                        OpenWRT,
                        Mirror,
                    ],
                },
                {
                    title: "Extra things",
                    subtitle: "Miscellaneous things I could not find a place for",
                    groups: [
                        Marta,
                        hobbies,
                    ],
                },
            ]
        }
    />;
}