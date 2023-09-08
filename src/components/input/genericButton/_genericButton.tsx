import { ReactNode } from "react"
import { GenericCallback } from "../../util"
import styles from "./genericButton.module.scss"

export type GenericButtonProps = {
    className?: string,
    children: ReactNode,
    selected?: boolean,
    onClick?: GenericCallback,
}

export default function GenericButton({children, className, selected, onClick}: GenericButtonProps) {
    return <div onClick={onClick} className={`${styles.button} ${selected && styles.selected} ${className ?? ""}`}>
        {children}
    </div>
}