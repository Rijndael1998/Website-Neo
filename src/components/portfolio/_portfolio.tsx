import PortfolioButton from "./portfolioButton/_portfolioButton"
import styles from "./portfolio.module.scss";
import PortfolioImage from "./portfolioImage/_portfolioImage";
import { PortfolioPreviewContent, preURL } from "@/content/fun/Portfolio";
import classNames from "classnames";


export type PortfolioProps = {
    portfolio: PortfolioPreviewContent,
}

export default function Portfolio({ portfolio }: PortfolioProps) {
    const empty = portfolio.url == preURL;
    const text = portfolio.isDemo ? "See Demo" : (portfolio.url.includes("https") ? "External Link" : "Details");

    return <div className={classNames(styles.portfolio, empty && styles.empty)}>
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
        {
            !empty && <PortfolioButton url={portfolio.url} text={text} />
        }
    </div>
}