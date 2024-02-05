import PortfolioPage from "@/components/portfolio/portfolioPage/_portfolioPage";
import { personalProjects, demos, games, irlContent, collegeWork, volunteering } from "../../content/portfolio/Portfolio";

export default function Fun() {
    return <>
        <PortfolioPage
            title={"Portfolio"}
            groups={
                [
                    {
                        title: "Previous Work",
                        subtitle: "Places I worked at",
                        items: irlContent,
                    },
                    {
                        title: "Volunteering",
                        subtitle: "My volunteer experiences and initiatives",
                        items: volunteering,
                    },
                    {
                        title: "Demos and Games",
                        subtitle: "Interactive pages",
                        items: [...games, ...demos],
                    },
                    {
                        title: "Personal Projects",
                        subtitle: "Projects I did in my spare time",
                        items: personalProjects,
                    },
                    {
                        title: "Univeristy Projects",
                        subtitle: "Things I made at university",
                        items: collegeWork,
                    },
                ]
            }
        />
    </>
}