import classNames from "classnames";
import styles from "./gridItem.module.scss";
import { GenericCallback } from "@/components/util";

export type GridItemProps = {
    item: string,
    callback?: GenericCallback,
}

export default function GridItem({ item, callback }: GridItemProps) {
    const className = classNames(
        styles.gridItem,
        item,
    )

    return <>
        <div className={className} onClick={callback}/>
    </>
}