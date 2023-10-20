import { personalProjects, demos, games, irlContent, collegeWork, best } from "../../content/fun/Portfolio";
import styles from "./page.module.scss";
import PortfolioGroup from "@/components/portfolio/_portfolioGroup";

export default function Fun() {
    return <>
        <div className={styles.contentWrapper}>
            <h1>Portfolio</h1>

            <h2>Previous Work</h2>
            <p>Places I worked at</p>
            <PortfolioGroup items={irlContent}/>

            <h2>Demos and Games</h2>
            <p>Interactive pages</p>
            <PortfolioGroup items={[...games, ...demos]}/>

            <h2>Personal Projects</h2>
            <p>Projects I did in my spare time</p>
            <PortfolioGroup items={personalProjects}/>

            <h2>College Projects</h2>
            <p>Things I made at university</p>
            <PortfolioGroup items={collegeWork}/>
        </div>
    </>
}