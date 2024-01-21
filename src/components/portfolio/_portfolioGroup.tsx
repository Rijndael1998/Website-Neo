import styles from "./portfolio.module.scss";
import PortfolioItem from "./_portfolioItem";
import { PortfolioViewArray } from "@/content/portfolio/Portfolio";

export default function PortfolioGroup({ items, title, subtitle }: { items: PortfolioViewArray, title: string, subtitle: string }) {
    return <>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className={styles.content}>
            {
                items.map(
                    (portfolio) =>
                        <PortfolioItem key={portfolio.title} portfolio={portfolio} />)
            }
        </div>
    </>
}