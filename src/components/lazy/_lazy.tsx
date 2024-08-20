import { ReactNode } from "react";
import styles from "./lazy.module.scss";
import DarkModeFix from "../muiWrappers/darkModeFix/_darkModeFix";

export default function Lazy({ children }: { children?: ReactNode }) {
    return <DarkModeFix>
        <div className={styles.lazy}>{children}</div>
    </DarkModeFix>
}