import { ReactNode } from "react";
import styles from "./lazy.module.scss";

export default function LazyRow({ children, aspectRatio }: { children: ReactNode, aspectRatio?: number }) {
    return <div className={styles.lazyRowOverflow} style={{aspectRatio}}>
        <div className={styles.lazyRow}>
            {children}
        </div>
    </div>
}