import { PortfolioPreviewContent } from "@/app/fun/content"
import PortfolioButton from "./portfolioButton/_portfolioButton"
import styles from "./portfolio.module.scss";
import PortfolioImage from "./portfolioImage/_portfolioImage";


export type PortfolioProps = {
    portfolio: PortfolioPreviewContent,
}

export default function Portfolio({ portfolio }: PortfolioProps) {
    return <div className={styles.portfolio}>
        {
            portfolio.image && <PortfolioImage image={portfolio.image}/>
        }
        <h2>
            {portfolio.title}
        </h2>
        <p>
            {portfolio.desc}
        </p>
        <PortfolioButton url={portfolio.url} text="Details" />
    </div>
}