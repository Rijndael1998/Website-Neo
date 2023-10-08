import Portfolio from "@/components/portfolio/_portfolio";
import { content, irlContent } from "../../content/fun/content";
import styles from "./page.module.scss";

/* would be good to:
    - Have a data source, like a json file
    - Populate a portfolio tag
    - Have a dedicated folder for each.
*/
export default function Fun() {
    return <>
        <h1>Portfolio</h1>

        <h2>Previous Work</h2>

        <div className={styles.content}>
            {irlContent.map(
                (portfolio) =>
                    <Portfolio key={portfolio.title} portfolio={portfolio} />)}
        </div>

        <h2>Personal Projects</h2>

        <div className={styles.content}>
            {content.map(
                (portfolio) =>
                    <Portfolio key={portfolio.title} portfolio={portfolio} />)}
        </div>
    </>
}