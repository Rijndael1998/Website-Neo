import classNames from "classnames";
import styles from "./gridItem.module.scss";
import { GenericCallback } from "@/components/util";
import { CSSProperties } from "react";

export type GridItemProps = {
    item: string,
    callback?: GenericCallback,
    style?: CSSProperties,
}

export default function GridItem({ item, callback, style }: GridItemProps) {
    const className = classNames(
        styles.gridItem,
        item,
    )

    return <>
        <div className={className} onClick={callback} style={style}>
            <div/>
        </div>
    </>
}