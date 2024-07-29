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
                        {
                            title: "Infrastructure",
                            desc: "Test",
                            isDemo: false,
                            url: "blog/infrastructure",
                        },
                    ],
                },
            ]
        }
    />;
}