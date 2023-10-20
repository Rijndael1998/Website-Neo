"use client";

import { useEffect, useState } from "react";
import styles from "./hamburger.module.scss";
import classNames from "classnames";

export type HamburgerProps = {
    crossed: boolean,
    onTop: boolean,
    dynamic: boolean,
    onClick: () => void
}

export default function Hamburger({ crossed, onTop, dynamic, onClick }: HamburgerProps) {
    // const [show, setShow] = useState(true);

    // useEffect(() => {
    //     setShow(true);
    // }, [])

    const hamburgerClassName = classNames(
        styles.hamburger,
        crossed && styles.crossed,
        dynamic && styles.dynamic,
        true && styles.show,
    );

    const wrapperClassName = classNames(
        styles.hamburgerWrapper,
        onTop && styles.onTop,
    );

    return <div className={wrapperClassName}>
        <div className={hamburgerClassName} onClick={() => onClick()}>
            <div /><div /><div /><div /><div /><div /><div />
        </div>
    </div>
}