import styles from "./group.module.scss";
import GroupImage from "./groupImage/_groupImage";
import classNames from "classnames";
import { GroupPreviewContent } from "./_groupTypes";
import LaunchIcon from '@mui/icons-material/Launch';
import LinkIcon from '@mui/icons-material/Link';
import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import GroupItemDialog from "./_groupItemDialog";
import DarkModeFix from "../muiWrappers/darkModeFix/_darkModeFix";
import { ifTrue } from "../reactUtils";
import GroupItemWrapper from "./_groupItemWrapper";
import GroupItemButton from "./_groupItemButton";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type GroupProps = {
    portfolio: GroupPreviewContent,
}

export type LinkText = "" | "See Demo" | "External Link" | "Details";

export type GroupItemIconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
}

export type ReturnPortfolioItemsReturn = [
    string,
    boolean,
    LinkText,
    GroupItemIconType,
];

export const IconMatrix: Map<LinkText, GroupItemIconType> = new Map([
    ["External Link", LaunchIcon],
    ["See Demo", LaunchIcon],
    ["Details", LinkIcon],
    ["", LinkIcon],
]);

function GetGroupItemText(portfolio: GroupPreviewContent): LinkText {
    // is the portfolio empty?
    if (portfolio.url == null || portfolio.url == "")
        return "";

    // is it a demo?
    if (portfolio.isDemo)
        return "See Demo";

    // is it an external link?
    if (portfolio.url.includes("https"))
        return "External Link";

    // if none of the above, it's a relative link
    return "Details";
}

export function ReturnPortfolioItems(portfolio: GroupProps["portfolio"]): ReturnPortfolioItemsReturn {
    // link URL
    const url = portfolio.url ?? "";
    const empty = url == "";

    // Interface items
    const text = GetGroupItemText(portfolio);
    const Icon = IconMatrix.get(text) ?? IconMatrix.get("") ?? LinkIcon;

    return [url, empty, text, Icon];
}

export default function GroupItem({ portfolio }: GroupProps) {
    const [url, empty, text, Icon] = ReturnPortfolioItems(portfolio);

    return <GroupItemWrapper portfolio={portfolio}>
        <DarkModeFix>
            <div className={classNames(styles.portfolio, empty && styles.empty)}>
                {
                    portfolio.image && <GroupImage image={portfolio.image} logo={portfolio.logo} />
                }
                <div className={styles.portfolioMainContent}>
                    <Typography variant="h6">
                        {portfolio.title}
                    </Typography>
                </div>
                <div className={styles.portfolioMainContentHover}>
                    <Stack direction={"column"} gap={1} padding={1}>
                        <GroupItemDialog
                            buttonProps={{ variant: "outlined" }}
                            content={portfolio.desc}
                            title={portfolio.title}
                            link={url}
                            linkText={text}
                        />
                        {ifTrue(!empty,
                            <GroupItemButton
                                portfolioURL={url}
                                text={text}
                                Icon={Icon}
                            />
                        )}
                    </Stack>
                </div>
            </div>
        </DarkModeFix>
    </GroupItemWrapper>
}