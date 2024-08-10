import GroupButton from "./groupButton/_groupButton"
import styles from "./group.module.scss";
import GroupImage from "./groupImage/_groupImage";
import { preURL } from "@/content/portfolio/Portfolio";
import classNames from "classnames";
import { GroupPreviewContent } from "./_groupTypes";
import LaunchIcon from '@mui/icons-material/Launch';
import LinkIcon from '@mui/icons-material/Link';
import { SvgIcon } from "@mui/material";

export type GroupProps = {
    portfolio: GroupPreviewContent,
}

export type LinkText = "" | "See Demo" | "External Link" | "Details";

export const IconMatrix: Map<LinkText, typeof SvgIcon> = new Map([
    ["External Link", LaunchIcon],
    ["See Demo", LaunchIcon],
    ["Details", LinkIcon],
    ["", LinkIcon],
]);

export default function GroupItem({ portfolio }: GroupProps) {
    const empty = portfolio.url == null || portfolio.url == "";
    const text: LinkText = empty ? "" : portfolio.isDemo ? "See Demo" : (portfolio.url!.includes("https") ? "External Link" : "Details");
    const Icon = IconMatrix.get(text) ?? IconMatrix.get("")!;

    return <div className={classNames(styles.portfolio, empty && styles.empty)}>
        {
            portfolio.image && <GroupImage image={portfolio.image} />
        }
        <div className={styles.portfolioMainContent}>
            <h2>
                {portfolio.title}
            </h2>
        </div>

        <div className={styles.portfolioMainContentHover}>
            {/* <p>
                {portfolio.desc}
            </p> */}
            {/* {
                !empty && <GroupButton url={portfolio.url ?? ""} text={text} />
            } */}
            <Icon />
        </div>
    </div>
}