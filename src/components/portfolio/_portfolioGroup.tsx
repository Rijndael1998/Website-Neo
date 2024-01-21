import styles from "./portfolio.module.scss";
import PortfolioItem from "./_portfolioItem";
import { PortfolioViewArray } from "@/content/portfolio/Portfolio";

export default function PortfolioGroup({ items }: { items: PortfolioViewArray }) {
    return <div className={styles.content}>
        {
            items.map(
                (portfolio) =>
                    <PortfolioItem key={portfolio.title} portfolio={portfolio} />)
        }
    </div>
}