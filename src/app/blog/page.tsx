import GroupPage from "@/components/group/groupPage/_groupPage";

export default function Blog() {
    return <GroupPage
        title={"Blog"}
        groups={
            [
                {
                    title: "Discoveries",
                    subtitle: "Things I discovered when trying to solve specific issues",
                    groups: [
                        {
                            title: "",
                            desc: "",
                            isDemo: false,
                            url: "",
                        }
                    ],
                },
                {
                    title: "Mental Health Insigts",
                    subtitle: "Struggles with mental health and solutions that I found",
                    groups: [
                        {
                            title: "",
                            desc: "",
                            isDemo: false,
                            url: "",
                        }
                    ],
                },
            ]
        }
    />;
}