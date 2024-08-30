import styles from "./group.module.scss";
import GroupImage from "./groupImage/_groupImage";
import classNames from "classnames";
import { GroupPreviewContent } from "./_groupTypes";
import LaunchIcon from '@mui/icons-material/Launch';
import LinkIcon from '@mui/icons-material/Link';
import { Button, IconButton, Stack, SvgIcon } from "@mui/material";
import Link from "next/link";
import GroupItemDialog from "./_groupItemDialog";
import DarkModeFix from "../muiWrappers/darkModeFix/_darkModeFix";
import { ifTrue } from "../reactUtils";

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
    const url = portfolio.url ?? "";

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
            <DarkModeFix>
                <Stack direction={"row"} gap={2}>
                    <GroupItemDialog
                        buttonProps={{ variant: "outlined" }}
                        content={portfolio.desc}
                        title={portfolio.title}
                        link={url}
                        linkText={text}
                    />
                    {ifTrue(!empty,
                        <Button
                            href={portfolio.url}
                            aria-label={text}
                            color="info"
                            variant="contained"
                            endIcon={<Icon fontSize="inherit" />}
                        >
                            {text}
                        </Button>
                    )}
                </Stack>
            </DarkModeFix>
        </div>
    </div>
}