import GroupPage from "@/components/group/groupPage/_groupPage";
import { MirrorSynopsis, MirrorTitle } from "@/content/blog/mirrorsEdge";
const preURL = "/blog/";

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
                        // {
                        //     title: "Arch Installation",
                        //     desc: `
                        //         How I install Arch Linux on my own machine using an automated script.
                        //         The install is fully encrypted, has no swap by design and uses LVM for partitioning.
                        //         `,
                        //     isDemo: false,
                        //     url: "",
                        //     image: `${preURL}arch/arch.png`,
                        // },
                    ],
                },
                // {
                //     title: "Mental Health Insigts",
                //     subtitle: "Struggles with mental health and solutions that I found",
                //     groups: [
                //         {
                //             title: "",
                //             desc: "",
                //             isDemo: false,
                //             url: "",
                //         }
                //     ],
                // },
            ]
        }
    />;
}