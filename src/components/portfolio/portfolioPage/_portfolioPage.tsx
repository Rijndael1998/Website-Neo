import PortfolioGroup, { PortfolioGroupProps } from "../_portfolioGroup";
import styles from "./page.module.scss";

export type PortfolioPageProps = {
    title: string,
    groups: Array<PortfolioGroupProps>,
};

export default function PortfolioPage({ title, groups }: PortfolioPageProps) {
    return <>
        <div className={styles.contentWrapper}>
            <h1>{title}</h1>
            {
                groups.map(
                    (
                        portfolioGroup =>
                            <PortfolioGroup
                                key={portfolioGroup.title}
                                items={portfolioGroup.items}
                                title={portfolioGroup.title}
                                subtitle={portfolioGroup.subtitle}
                            />
                    )
                )
            }
        </div>
    </>
}