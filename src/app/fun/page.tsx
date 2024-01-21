import { personalProjects, demos, games, irlContent, collegeWork, best, volunteering } from "../../content/portfolio/Portfolio";
import styles from "./page.module.scss";
import PortfolioGroup from "@/components/portfolio/_portfolioGroup";

export default function Fun() {
    return <>
        <div className={styles.contentWrapper}>
            <h1>Portfolio</h1>

            <PortfolioGroup items={irlContent} title="Previous Work" subtitle="Places I worked at"/>
            <PortfolioGroup items={volunteering} title="Volunteering" subtitle="My volunteer experiences and initiatives"/>
            <PortfolioGroup items={[...games, ...demos]} title="Demos and Games" subtitle="Interactive pages"/>
            <PortfolioGroup items={personalProjects} title="Personal Projects" subtitle="Projects I did in my spare time"/>
            <PortfolioGroup items={collegeWork} title="College Projects" subtitle="Things I made at university"/>
        </div>
    </>
}