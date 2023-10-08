import PortfolioButton from "./portfolioButton/_portfolioButton"
import styles from "./portfolio.module.scss";
import PortfolioImage from "./portfolioImage/_portfolioImage";
import { PortfolioPreviewContent } from "@/content/fun/content";


export type PortfolioProps = {
    portfolio: PortfolioPreviewContent,
}

export default function Portfolio({ portfolio }: PortfolioProps) {
    return <div className={styles.portfolio}>
        {
            portfolio.image && <PortfolioImage image={portfolio.image} />
        }
        <div className={styles.portfolioMainContent}>
            <h2>
                {portfolio.title}
            </h2>
            <p>
                {portfolio.desc}
            </p>
        </div>
        <PortfolioButton url={portfolio.url} text="Details" />
    </div>
}