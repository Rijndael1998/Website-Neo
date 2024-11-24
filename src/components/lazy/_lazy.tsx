import { ReactNode } from "react";
import styles from "./lazy.module.scss";
import { Container } from "@mui/material";
import classNames from "classnames";

export default function Lazy({ children, doNothing }: { children?: ReactNode, doNothing?: boolean }) {
    console.warn("Lazy will be the next element to be removed");

    return <Container className={classNames(styles.lazy, doNothing && styles.doNothing)} maxWidth={"md"}>
        {children}
    </Container>
}