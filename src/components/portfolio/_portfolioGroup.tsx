import { PortfolioViewArray } from "@/content/fun/content";
import styles from "./portfolio.module.scss";
import Portfolio from "./_portfolio";

export default function PortfolioGroup({ items }: { items: PortfolioViewArray }) {
    return <div className={styles.content}>
        {
            items.map(
                (portfolio) =>
                    <Portfolio key={portfolio.title} portfolio={portfolio} />)
        }
    </div>
}