import classNames from "classnames";
import { GridItemState } from "../gridState";
import styles from "./gridItem.module.scss";
import { GenericCallback } from "@/components/util";

export type GridItemProps = {
    item: GridItemState,
    callback: GenericCallback,
}

export default function GridItem({ item, callback }: GridItemProps) {
    const className = classNames(
        styles.gridItem,
        item == GridItemState.ON ? styles.on : styles.off,
    )

    return <>
        <div className={className} onClick={callback}/>
    </>
}