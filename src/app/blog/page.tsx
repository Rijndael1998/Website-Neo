import GroupPage from "@/components/group/groupPage/_groupPage";
import { generateCustomMetadata } from "@/content/Metadata";
import { MirrorSynopsis, MirrorTitle } from "@/content/blog/mirrorsEdge";
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
                            title: MirrorTitle,
                            desc: MirrorSynopsis,
                            isDemo: false,
                            url: "blog/mirrors_edge",
                            image: `${preURL}mirrors_edge/1x1 partial logo.png`,
                        },
                        {
                            title: "Get OpenWRT to work on Octaplus networks",
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
                    ],
                },
            ]
        }
    />;
}