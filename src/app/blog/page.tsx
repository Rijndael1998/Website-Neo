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

const OpenWRT: GroupPreviewContent = {
    title: "OpenWRT 5.15 on Octaplus networks",
    desc: `
    This article serves as a detailed guide for setting up OpenWRT 5.15 on an Octaplus network using a custom router. It highlights the basic configuration steps needed for users to connect their routers to CityFibre's fiberoptic internet service through Octaplus. Key instructions include tagging the VLAN with 911, configuring device settings using the OpenWRT interface, setting up PPPoE with specific username and password instructions, and ensuring proper network interface configuration. The guide also addresses potential challenges, such as MAC address binding and troubleshooting advice to ensure a successful connection.
    `,
    isDemo: false,
    url: "blog/city_fibre",
    image: `${preURL}city_fibre/logos.webp`,
};

const Ender: GroupPreviewContent = {
    title: "Recover your Creality Ender-3 V3 SE",
    desc: `
    In this article, I recount my harrowing experience of trying to revive a borrowed Creality Ender-3 V3 SE after a failed Klipper installation. Spoiler alert: I aged a few years in the process! I'll walk you through the lesser-known, crucial steps to properly format your SD card to meet the 3D printer's finicky requirements and explain why updating the screen firmware is just as important as updating the main firmware. Learn from my mishaps and avoid your own 3D printing nightmares with these handy recovery tips.
    `,
    isDemo: false,
    url: "blog/3d_printer",
    image: `${preURL}3d printer/3d printer.webp`,
};

const Mirror: GroupPreviewContent = {
    title: MirrorTitle,
    desc: MirrorSynopsis,
    isDemo: false,
    url: "blog/mirrors_edge",
    image: `${preURL}mirrors_edge/1x1 partial logo.png`,
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
                        crab,
                    ],
                },
            ]
        }
    />;
}