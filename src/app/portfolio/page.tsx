import { personalProjects, demos, games, irlContent, collegeWork, volunteering } from "../../content/portfolio/Portfolio";
import GroupPage from "@/components/group/groupPage/_groupPage";

export const metadata = {
    title: "Portfolio",
}

export default function Portfolio() {
    return <GroupPage
        title={"Portfolio"}
        groups={
            [
                {
                    title: "Previous Work",
                    subtitle: "Places I worked at",
                    groups: irlContent,
                },
                {
                    title: "Volunteering",
                    subtitle: "My volunteer experiences and initiatives",
                    groups: volunteering,
                },
                {
                    title: "Demos and Games",
                    subtitle: "Interactive pages",
                    groups: [...games, ...demos],
                },
                {
                    title: "Personal Projects",
                    subtitle: "Projects I did in my spare time",
                    groups: personalProjects,
                },
                {
                    title: "University Projects",
                    subtitle: "Things I made at university",
                    groups: collegeWork,
                },
            ]
        }
    />
}