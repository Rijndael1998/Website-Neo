import classNames from "classnames";
import styles from "./lazy.module.scss";
import { CSSProperties } from "react";

export type LazyTableItemsType = Array<null | Array<string | number | undefined | null>>

export type LazyTableProps = {
    items: LazyTableItemsType,
    className?: string,
    process?: (items: LazyTableItemsType) => LazyTableItemsType,
    style?: CSSProperties,
}

export default function LazyTable({ process, style, items, className }: LazyTableProps) {

    const processedItems = process ? process(items) : items;

    return <div className={classNames(styles.lazyTable, className)} style={style}>
        {
            processedItems.map((row, i) => {
                return <>
                    {
                        row ? row.map((col, ii) => {
                            return <div key={`${i},${ii}`} className={classNames(col != null && styles.notNull)}>
                                <p>
                                    {col ?? ""}
                                </p>
                            </div>
                        })
                            : <div />
                    }
                </>
            })
        }
    </div>
}