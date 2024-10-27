import { ReactNode } from "react";
import styles from "./lazy.module.scss";
import DarkModeFix from "../muiWrappers/darkModeFix/_darkModeFix";
import { Container } from "@mui/material";

export default function Lazy({ children }: { children?: ReactNode }) {
    return <DarkModeFix>
        <Container className={styles.lazy} maxWidth={"md"}>{children}</Container>
    </DarkModeFix>
}