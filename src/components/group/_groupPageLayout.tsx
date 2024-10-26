import GroupItem from "./_groupItem";
import { GroupViewArray } from "./_groupTypes";
import { Card, CardContent, Grid2, Typography } from "@mui/material";

export type GroupPageLayoutProps = {
    title: string,
    subtitle: string,
    groups: GroupViewArray,
};

export default function GroupPageLayout({ groups, title, subtitle }: GroupPageLayoutProps) {
    return <Card>
        <CardContent>
            <Typography variant="h4">
                {title}
            </Typography>
            <Typography>
                {subtitle}
            </Typography>
        </CardContent>
        <CardContent>
            <Grid2 container spacing={2}>
                {
                    groups.map(
                        (group) =>
                            <GroupItem key={group.title} portfolio={group} />
                    )
                }
            </Grid2>
        </CardContent>
    </Card>
};