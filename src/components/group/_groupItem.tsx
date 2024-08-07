import GroupButton from "./groupButton/_groupButton"
import styles from "./group.module.scss";
import GroupImage from "./groupImage/_groupImage";
import { preURL } from "@/content/portfolio/Portfolio";
import classNames from "classnames";
import { GroupPreviewContent } from "./_groupTypes";


export type GroupProps = {
    portfolio: GroupPreviewContent,
}

export default function GroupItem({ portfolio }: GroupProps) {
    const empty = portfolio.url == null || portfolio.url == "";
    const text = empty ? "" : portfolio.isDemo ? "See Demo" : (portfolio.url!.includes("https") ? "External Link" : "Details");

    return <div className={classNames(styles.portfolio, empty && styles.empty)}>
        {
            portfolio.image && <GroupImage image={portfolio.image} />
        }
        <div className={styles.portfolioMainContent}>
            <h2>
                {portfolio.title}
            </h2>
            {/* <p>
                {portfolio.desc}
            </p> */}
        </div>
        {/* {
            !empty && <GroupButton url={portfolio.url ?? ""} text={text} />
        } */}
    </div>
}