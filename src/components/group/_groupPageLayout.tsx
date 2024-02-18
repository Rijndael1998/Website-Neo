import styles from "./group.module.scss";
import GroupItem from "./_groupItem";
import { GroupViewArray } from "./_groupTypes";

export type GroupPageLayoutProps = { 
    title: string, 
    subtitle: string,
    groups: GroupViewArray,
};

export default function GroupPageLayout({ groups, title, subtitle }: GroupPageLayoutProps) {
    return <>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className={styles.content}>
            {
                groups.map(
                    (group) =>
                        <GroupItem key={group.title} portfolio={group} />)
            }
        </div>
    </>
};