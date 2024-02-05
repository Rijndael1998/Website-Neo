import GroupPageLayout, { GroupPageLayoutProps } from "../_groupPageLayout";
import styles from "./page.module.scss";

export type GroupPageProps = {
    title: string,
    groups: Array<GroupPageLayoutProps>,
};

export default function GroupPage({ title, groups }: GroupPageProps) {
    return <>
        <div className={styles.contentWrapper}>
            <h1>{title}</h1>
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
        </div>
    </>
}