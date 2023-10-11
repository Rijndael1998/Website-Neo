"use client";

import { ReactNode } from "react"
import { GenericCallback } from "../../util"
import styles from "./genericButton.module.scss"
import classNames from "classnames"

export type GenericButtonProps = {
    className?: string,
    children: ReactNode,
    selected?: boolean,
    disabled?: boolean,
    onClick?: GenericCallback,
}

export default function GenericButton({children, className, selected, disabled, onClick}: GenericButtonProps) {
    const fullClassName = classNames(
        styles.button,
        selected && styles.selected,
        disabled && styles.disabled,
        className ?? "",
    )

    const callback = () => {
        if(onClick && !disabled)
            onClick();
    }

    return <div onClick={callback} className={fullClassName}>
        {children}
    </div>
}