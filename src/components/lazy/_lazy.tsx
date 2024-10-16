import { ReactNode } from "react";
import styles from "./lazy.module.scss";

export default function Lazy({children}: {children: ReactNode}) {
    return <div className={styles.lazy}>{children}</div>
}