import { Card, Stack } from "@mui/material";
import GroupPageLayout, { GroupPageLayoutProps } from "../_groupPageLayout";
import DarkModeFix from "@/components/muiWrappers/darkModeFix/_darkModeFix";

export type GroupPageProps = {
    title: string,
    groups: Array<GroupPageLayoutProps>,
};

export default function GroupPage({ title, groups }: GroupPageProps) {
    return <DarkModeFix>
        <h1>{title}</h1>

        <Stack gap={5}>
            {
                groups.map(
                    (
                        portfolioGroup =>
                            <GroupPageLayout
                                key={portfolioGroup.title}
                                groups={portfolioGroup.groups}
                                title={portfolioGroup.title}
                                subtitle={portfolioGroup.subtitle}
                            />
                    )
                )
            }
        </Stack>
    </DarkModeFix>
}