import { GroupPreviewContent } from "@/components/group/_groupTypes";
import GroupPage from "@/components/group/groupPage/_groupPage";
import { generateCustomMetadata } from "@/content/Metadata";
import { MirrorSynopsis, MirrorTitle } from "@/content/blog/mirrorsEdge";
import { imageFolder } from "@/content/portfolio/Portfolio";
import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

const preURL = "/blog/";

const title = "Lukasz Baldyga - Blog";
const description = "Small tidbits that I'm interested in.";

export const metadata: Metadata = generateCustomMetadata({
    title,
    description,
    openGraph: {
        title,
        description,
    } as OpenGraph,
});

const Marta: GroupPreviewContent = {
    title: "Marta's Fundraiser",
    desc: `
    My mom and I helped organize a community fundraiser in Bolton and Bury for Marta, a single mother with cancer who lacked basics like furniture and a clothes dryer. Thanks to the generosity of our communities, we were able to gather the funds needed to support her and her three young children during this challenging time.
    `,
    isDemo: false,
    image: imageFolder + "marta.jpg",
    url: preURL + "marta",
}

const crab: GroupPreviewContent = {
    title: "Hobbies",
    desc: "Sometimes I like to take a break from programming. I enjoy making 3d art, music and other random things.",
    isDemo: false,
    url: preURL + "hobbies",
    image: imageFolder + "crab_rave.png",
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
                        {
                            title: "OpenWRT 5.15 on Octaplus networks",
                            desc: "",
                            isDemo: false,
                            url: "blog/city_fibre",
                            image: `${preURL}city_fibre/logos.webp`,
                        },
                        {
                            title: "Recover your Creality Ender-3 V3 SE",
                            desc: "",
                            isDemo: false,
                            url: "blog/3d_printer",
                            image: `${preURL}3d printer/3d printer.webp`,
                        },
                        {
                            title: MirrorTitle,
                            desc: MirrorSynopsis,
                            isDemo: false,
                            url: "blog/mirrors_edge",
                            image: `${preURL}mirrors_edge/1x1 partial logo.png`,
                        },
                    ],
                },
                {
                    title: "Extra things",
                    subtitle: "",
                    groups: [
                        Marta,
                        crab,
                    ],
                },
            ]
        }
    />;
}