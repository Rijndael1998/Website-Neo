import { content, demos, games, irlContent } from "../../content/fun/content";
import styles from "./page.module.scss";
import PortfolioGroup from "@/components/portfolio/_portfolioGroup";

export default function Fun() {
    return <>
        <div className={styles.contentWrapper}>
            <h1>Portfolio</h1>

            <h2>Previous Work</h2>
            <PortfolioGroup items={irlContent}/>

            <h2>Personal Projects</h2>
            <PortfolioGroup items={content}/>

            <h2>Demos</h2>
            <PortfolioGroup items={demos}/>

            <h2>Games</h2>
            <PortfolioGroup items={games}/>
        </div>
    </>
}