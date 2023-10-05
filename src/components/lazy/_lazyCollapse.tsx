"use client";

import { ReactNode, useState } from "react";
import styles from "./lazy.module.scss";
import classNames from "classnames";

export default function LazyCollapse({children, defaultState}: {children: ReactNode, defaultState?: boolean}) {
    const [open, setOpen] = useState(defaultState ?? true)

    return <>
        <div className={classNames(styles.collapseBar, open && styles.open)} onClick={() => setOpen(!open)}>Show Hide</div>
        <div className={classNames(styles.lazyCollapse, open && styles.open)}>
            {children}
        </div>
    </>
}