import GroupItem from "./_groupItem";
import { GroupViewArray } from "./_groupTypes";
import { Grid2 } from "@mui/material";

export type GroupPageLayoutProps = {
    title: string,
    subtitle: string,
    groups: GroupViewArray,
};

export default function GroupPageLayout({ groups, title, subtitle }: GroupPageLayoutProps) {
    return <>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Grid2 container spacing={2}>
            {
                groups.map(
                    (group) =>
                        <Grid2 size={6}>
                            <GroupItem key={group.title} portfolio={group} />
                        </Grid2>
                )
            }
        </Grid2>
    </>
};